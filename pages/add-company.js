import React from "react";
import * as superagent from "superagent";
import Head from "../assets/common-components/componentHead";
import { Form, Card, Dropdown, Button } from "semantic-ui-react";
import "../assets/styles/addCompany.css";

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
      }
    };
  }

  validateForm = willSubmit => e => {
    console.log("host name here", hostname);
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
      this.submitForm(formData);
    }
  };

  submitForm = formData => {
    superagent
      .post(`${hostname}/api/add-company`)
      .send(formData)
      .set("accept", "json")
      .end((err, res) => {
        console.log(err, res);
      });
  };

  handleDropdownSelection = (e, data) => {
    const { formDropdown, formError } = this.state;

    formDropdown[data.name] = data.value;
    formError[data.name] = false;

    this.setState({ formDropdown, formError });
  };

  render() {
    return (
      <div className="newCompanyPage">
        <Head>Add New Company</Head>
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
              <Form.Field>
                <Button onClick={this.validateForm(true)}>Submit</Button>
              </Form.Field>
            </Form>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
