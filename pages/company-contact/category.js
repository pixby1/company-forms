import React from "react";
import * as superagent from "superagent";
import Head from "../../assets/common-components/componentHead";
import TopMenuBar from "../../assets/common-components/TopMenuBar";
import ReactTable from "react-table";
import { PageSidebar } from "../../assets/common-components/CompanyContactSidebar";
import AddCategoryForm from "../../components/companyContactPage/AddCategoryForm";
import "../../assets/styles/categoryManagement.css";
import "react-table/react-table.css";
import { Button, Modal } from "semantic-ui-react";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    if (req) {
      const { db } = req;
      const categoriasEmpresasList = await db
        .collection("categorias_empresas")
        .find()
        .toArray();

      categoriasEmpresasList.sort((a, b) => {
        if (a.nivel === b.nivel) {
          return a._id - b._id;
        } else {
          return a.nivel - b.nivel;
        }
      });

      return { categoriasEmpresasList };
    }

    const { categoriasEmpresasList } = await superagent
      .get("/api/getCategoriasEmpresas")
      .then(res => res.body);

    return { categoriasEmpresasList };
  }
  constructor(props) {
    super(props);
    this.state = {
      isAddingCategory: false,
      isEditingCategory: false,
      editingCategory: {}
    };
  }

  startAddingCategory = () => {
    this.setState({ isAddingCategory: true });
  };

  processData = () => {
    const processedCategoriasEmpresasList = [];
    const categoryChildrenRecord = {};
    this.props.categoriasEmpresasList.forEach((category, index) => {
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

  startEditingCategory = categoryData => e => {
    this.setState({ isEditingCategory: true, editin: categoryData });
  };

  closeModal = () => {
    this.setState({
      isAddingCategory: false,
      isEditingCategory: false,
      editin: {}
    });
  };

  render() {
    const processedCategoriasEmpresasList = this.processData();

    return (
      <div className="companyContactPage">
        <Head>Rubros</Head>
        <TopMenuBar />
        <PageSidebar />
        <div className="categoryManagement">
          <Modal
            open={this.state.isAddingCategory || this.state.isEditingCategory}
            basic={true}
          >
            <AddCategoryForm
              closeModal={this.closeModal}
              editingCategory={this.state.editin}
              isEditingCategory={this.state.isEditingCategory}
              categoriasEmpresasList={this.props.categoriasEmpresasList}
            />
          </Modal>
          <div className="pageHeader">
            <p className="pageTitle">Rubros de Empresas</p>
            <Button
              onClick={this.startAddingCategory}
              size="small"
              color="blue"
            >
              + Nuevo Rubro
            </Button>
          </div>
          <ReactTable
            className="-striped -highlight"
            data={processedCategoriasEmpresasList}
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
                          width: thisRowData.nivel > 0 ? 30 + "px" : "0",
                          height: thisRowData.nivel === 0 ? "0" : "15px",
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
                        icon="edit"
                        onClick={this.startEditingCategory(thisRowData)}
                        color="blue"
                      />
                    </div>
                  );
                }
              }
            ]}
          />
        </div>
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
