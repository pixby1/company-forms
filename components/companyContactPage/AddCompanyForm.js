import React from "react";
import * as superagent from "superagent";
import { Form, Card, Dropdown, Button } from "semantic-ui-react";
import "../../assets/styles/addCompany.css";
import ReactTable from "react-table";
import "react-table/react-table.css";

const testProvinciaOptions = [
  {
    text: "Test",
    value: "test",
    key: 1
  },
  {
    text: "Test 2",
    value: "test 2",
    key: 2
  }
];

const requiredFields = [
  "nombre",
  "direccion",
  "pais",
  "provincia",
  "ciudad",
  "telefono",
  "mail",
  "cuit",
  "web"
];

const otherFields = ["cp", "descripcion", "codigo", "fax"];

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formError: {
        nombre: false,
        direccion: false,
        pais: false,
        provincia: false,
        ciudad: false,
        telefono: false,
        mail: false,
        cuit: false,
        web: false
      },
      isFormValid: false,
      formDropdown: {
        provincia: "",
        ciudad: ""
      },
      editingCategory: false,
      companyCategories: []
    };
  }

  componentDidMount() {
    if (!this.props.isAddingCompany) {
      const formElements = $("form[name=newCompanyForm]")[0].elements;

      const editingCompanyInfo = this.props.companyInfo;

      formElements.cuit.value = editingCompanyInfo.cuit;
      formElements.direccion.value = editingCompanyInfo.direccion;
      formElements.nombre.value = editingCompanyInfo.nombre;
      formElements.mail.value = editingCompanyInfo.mail;
      formElements.pais.value = editingCompanyInfo.pais;
      formElements.telefono.value = editingCompanyInfo.telefono;
      formElements.web.value = editingCompanyInfo.web;
      formElements.fax.value = editingCompanyInfo.fax;
      formElements.codigo.value = editingCompanyInfo.codigo;
      formElements.cp.value = editingCompanyInfo.cp;

      const { formDropdown } = this.state;
      formDropdown.ciudad = editingCompanyInfo.ciudad;
      formDropdown.provincia = editingCompanyInfo.provincia;

      this.setState({ formDropdown });
    }
  }

  validateForm = willSubmit => e => {
    if (this.state.isFormValid && !willSubmit) {
      return;
    }

    const { formError } = this.state;
    let isFormValid = true;

    const formData = {};
    const newCompanyForm = $("form[name=newCompanyForm]")[0];
    const formEls = newCompanyForm.elements;

    requiredFields.forEach(fieldName => {
      const field = formEls[fieldName];
      if (field) {
        if (field.value.length === 0) {
          formError[fieldName] = true;
          isFormValid = false;
        } else {
          formError[fieldName] = false;
          formData[fieldName] = field.value;
        }
      }
    });

    if (this.state.formDropdown.provincia.length === 0) {
      formError.provincia = true;
      isFormValid = false;
    } else {
      formData.provincia = this.state.formDropdown.provincia;
    }

    if (this.state.formError.ciudad.length === 0) {
      formError.ciudad = true;
      isFormValid = false;
    } else {
      formData.ciudad = this.state.formDropdown.ciudad;
    }

    this.setState({ isFormValid, formError });

    if (isFormValid && willSubmit) {
      otherFields.forEach(field => {
        formData[field] = formEls[field].value;
      });
      this.submitForm(formData);
    }
  };

  submitForm = formData => {
    console.log(formData);
    superagent
      .post(`${hostname}/api/add-company`)
      .send(formData)
      .set("accept", "json")
      .end((err, res) => {
        console.log(err, res);
        if (!err) {
          window.location.reload();
        }
      });
  };

  handleDropdownSelection = (e, data) => {
    const { formDropdown, formError } = this.state;

    formDropdown[data.name] = data.value;
    formError[data.name] = false;

    this.setState({ formDropdown, formError });
  };

  processCategoryData = categoryList => {
    const processedCategoriasEmpresasList = [];
    const categoryChildrenRecord = {};
    console.log(categoryList, "here");
    categoryList.forEach((category, index) => {
      (function() {
        if (category.nivel === 0) {
          processedCategoriasEmpresasList.push(category);
        } else {
          const parentPos = findElementPos(
            processedCategoriasEmpresasList,
            category.id_padre
          );
          if (
            categoryChildrenRecord[category.id_padre] !== 0 &&
            !categoryChildrenRecord[category.id_padre]
          ) {
            categoryChildrenRecord[category.id_padre] = 0;
          }

          const parentsChildren = categoryChildrenRecord[category.id_padre];

          processedCategoriasEmpresasList.splice(
            1 + parentPos + parentsChildren,
            0,
            category
          );

          categoryChildrenRecord[category.id_padre] += 1;
        }
      })();
    });

    return processedCategoriasEmpresasList;
  };

  addCategory = category => {
    const { companyCategories } = this.state;
    if (companyCategories.indexOf(category._id) === -1) {
      companyCategories.push(category._id);

      this.setState({ companyCategories }, () => {
        console.log(this.state.companyCategories);
        if (category.nivel !== 0) {
          console.log(this.props.categoryList);
          const thisCategoryParent = this.props.categoryList.find(
            a => a._id === category.id_padre
          );
          console.log("parent", thisCategoryParent);
          this.addCategory(thisCategoryParent);
        }
      });
    }
  };

  deleteCategory = category => {
    const { companyCategories } = this.state;
    const processCompanyCategories = this.prepareCompanyCategories(
      companyCategories
    );
    console.log("test here", processCompanyCategories);
    if (companyCategories.indexOf(category._id) > -1) {
      const listOfCategoryID = processCompanyCategories.map(a => a._id);
      const deleteCategoryPos = listOfCategoryID.indexOf(category._id);
      let totalDeletedCategories = deleteCategoryPos + 1;
      for (
        let i = deleteCategoryPos + 1;
        i < processCompanyCategories.length;
        i++
      ) {
        console.log(processCompanyCategories[i]);
        if (processCompanyCategories[i].nivel !== 0) {
          totalDeletedCategories++;
        } else if (processCompanyCategories[i].nivel === 0) {
          i = processCompanyCategories.length;
        }
      }

      console.log(deleteCategoryPos, totalDeletedCategories);

      processCompanyCategories.splice(
        deleteCategoryPos,
        totalDeletedCategories - deleteCategoryPos
      );

      const newCompanyCategories = processCompanyCategories.map(a => a._id);

      this.setState({ companyCategories: newCompanyCategories });
    }
  };

  prepareCompanyCategories = rawCompanyCategories => {
    const companyCategories = rawCompanyCategories.map(categoryID =>
      this.props.categoryList.find(a => a._id === categoryID)
    );

    companyCategories.sort((a, b) => {
      if (a.nivel === b.nivel) {
        return b._id - a._id;
      } else {
        return a.nivel - b.nivel;
      }
    });

    return this.processCategoryData(companyCategories);
  };

  render() {
    const companyCategories = this.prepareCompanyCategories(
      this.state.companyCategories
    );
    return (
      <div className="newCompanyPage">
        <Card className="newCompany">
          <Card.Header>Editar Empresa</Card.Header>
          <Card.Content>
            <Form error={!this.state.isFormValid} name="newCompanyForm">
              <Form.Input
                error={this.state.formError.nombre}
                label="Denominación"
                name="nombre"
                onChange={this.validateForm()}
              />
              <p>
                Una vez que guarde los cambios podrá asignar los Rubros a la
                Empresa
              </p>
              {!this.props.isAddingCompany && (
                <Button
                  className="toggleEditCategory"
                  toggle={true}
                  active={this.state.editingCategory}
                  onClick={() => {
                    this.setState({
                      editingCategory: !this.state.editingCategory
                    });
                  }}
                >
                  Editar Rubros
                </Button>
              )}
              {!this.state.editingCategory ? (
                <div>
                  <Form.Group className="formGroup1">
                    <Form.Input
                      error={this.state.formError.direccion}
                      label="Dirección"
                      name="direccion"
                      onChange={this.validateForm()}
                    />
                    <Form.Field error={this.state.formError.provincia}>
                      <label>Provincia</label>
                      <Dropdown
                        name="provincia"
                        fluid={true}
                        labeled={true}
                        options={testProvinciaOptions}
                        selection={true}
                        placeholder="Seleccionar Provincia"
                        onChange={this.handleDropdownSelection}
                        value={this.state.formDropdown.provincia}
                      />
                    </Form.Field>
                  </Form.Group>
                  <Form.Group>
                    <Form.Field error={this.state.formError.ciudad}>
                      <label>Ciudad</label>
                      <Dropdown
                        name="ciudad"
                        fluid={true}
                        labeled={true}
                        options={testProvinciaOptions}
                        selection={true}
                        placeholder="Ciudad"
                        onChange={this.handleDropdownSelection}
                        value={this.state.formDropdown.ciudad}
                      />
                    </Form.Field>
                    <Form.Input label="CP" name="cp" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Input
                      label="Pais"
                      name="pais"
                      onChange={this.validateForm()}
                    />
                    <Form.Input label="Código" name="codigo" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Input
                      error={this.state.formError.telefono}
                      label="Teléfono"
                      name="telefono"
                      onChange={this.validateForm()}
                    />
                    <Form.Input label="Fax" name="fax" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Input
                      error={this.state.formError.mail}
                      label="Mail"
                      name="mail"
                      type="email"
                      onChange={this.validateForm()}
                    />
                    <Form.Input
                      error={this.state.formError.web}
                      label="Web"
                      name="web"
                      onChange={this.validateForm()}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Input
                      error={this.state.formError.cuit}
                      label="CUIT"
                      name="cuit"
                      onChange={this.validateForm()}
                    />
                  </Form.Group>
                  <Form.TextArea label="Observaciones" name="descripcion" />
                </div>
              ) : (
                <div className="editCategoryForm">
                  <ReactTable
                    className="-striped -highlight"
                    data={companyCategories}
                    defaultPageSize={100}
                    style={{ height: "400px" }}
                    showPageSizeOptions={false}
                    columns={[
                      {
                        Header: "Rubro",
                        accessor: "nombre",
                        Cell: row => {
                          const thisRowData = row.original;
                          return (
                            <div>
                              <div
                                className="familyTreeIndicator"
                                style={{
                                  width:
                                    thisRowData.nivel > 0 ? 30 + "px" : "0",
                                  height:
                                    thisRowData.nivel === 0 ? "0" : "15px",
                                  marginLeft: 5 + thisRowData.nivel * 30 + "px"
                                }}
                              />
                              <div>{row.value}</div>
                            </div>
                          );
                        }
                      },
                      {
                        Header: "Actions",
                        width: 150,
                        Cell: row => {
                          const thisRowData = row.original;
                          return (
                            <div>
                              <Button
                                icon="delete"
                                onClick={() => this.deleteCategory(thisRowData)}
                                color="red"
                              />
                            </div>
                          );
                        }
                      }
                    ]}
                  />
                  <p>Select Category</p>
                  <ReactTable
                    className="-striped -highlight"
                    data={this.processCategoryData(this.props.categoryList)}
                    defaultPageSize={100}
                    style={{ height: "400px" }}
                    showPageSizeOptions={false}
                    columns={[
                      {
                        Header: "Rubro",
                        accessor: "nombre",
                        Cell: row => {
                          const thisRowData = row.original;
                          return (
                            <div>
                              <div
                                className="familyTreeIndicator"
                                style={{
                                  width:
                                    thisRowData.nivel > 0 ? 30 + "px" : "0",
                                  height:
                                    thisRowData.nivel === 0 ? "0" : "15px",
                                  marginLeft: 5 + thisRowData.nivel * 30 + "px"
                                }}
                              />
                              <div>{row.value}</div>
                            </div>
                          );
                        }
                      },
                      {
                        Header: "Actions",
                        width: 150,
                        Cell: row => {
                          const thisRowData = row.original;
                          return (
                            <div>
                              <Button
                                icon="add"
                                onClick={() => this.addCategory(thisRowData)}
                                color="blue"
                              />
                            </div>
                          );
                        }
                      }
                    ]}
                  />
                </div>
              )}
              <Form.Field>
                <Button onClick={this.validateForm(true)} color="green">
                  Submit
                </Button>
                <Button
                  type="button"
                  onClick={this.props.cancelAddingCompany}
                  color="red"
                >
                  Cancel
                </Button>
              </Form.Field>
            </Form>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const findElementPos = (array, elID) => {
  let pos = -1;
  array.forEach((el, index) => {
    if (pos !== -1) {
      return;
    }

    if (el._id.toString() === elID) {
      pos = index;
    }
  });

  return pos;
};
