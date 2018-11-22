import React from "react";
import ReactTable from "react-table";
import Head from "../../assets/common-components/componentHead";
import TopMenuBar from "../../assets/common-components/TopMenuBar";
import { PageSidebar } from "../../assets/common-components/CompanyContactSidebar";
import "react-table/react-table.css";
import { Button, Modal } from "semantic-ui-react";
import AddCompanyForm from "../../components/companyContactPage/AddCompanyForm";
import * as superagent from "superagent";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    if (req) {
      const db = req.db;
      const companyList = await db
        .collection("Company")
        .find()
        .toArray();

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
      return { companyList, categoriasEmpresasList };
    }

    const { companyList } = await superagent
      .get(`${hostname}/api/getCompanyList`)
      .then(res => res.body);

    const { categoriasEmpresasList } = await superagent
      .get("/api/getCategoriasEmpresas")
      .then(res => res.body);
    return { companyList, categoriasEmpresasList };
  }

  constructor(props) {
    super(props);
    this.state = {
      isAddingCompany: false,
      isEditingCompany: false,
      editingCompany: ""
    };
  }

  startAddingCompany = () => {
    this.setState({ isAddingCompany: true });
  };

  startEditCompany = (e, data) => {
    this.setState({ isEditingCompany: true, editingCompany: data.value });
  };

  cancelAddingCompany = () => {
    this.setState({ isAddingCompany: false });
  };

  render() {
    const { isAddingCompany, isEditingCompany } = this.state;

    console.log(this.props);
    return (
      <div className="companyContactPage">
        <Modal
          basic
          style={{ padding: "10px" }}
          open={isAddingCompany || isEditingCompany ? true : false}
        >
          <AddCompanyForm
            categoryList={this.props.categoriasEmpresasList}
            isAddingCompany={isAddingCompany}
            cancelAddingCompany={this.cancelAddingCompany}
            companyInfo={this.props.companyList.find(
              a => a._id === this.state.editingCompany
            )}
          />
        </Modal>
        <Head>Empresas</Head>
        <TopMenuBar />
        <PageSidebar />
        <div className="companyManagement">
          <div className="actionButtons">
            <Button color="blue" size="tiny">
              Eliminar
            </Button>
            <Button color="blue" size="tiny">
              Nuevo Contacto
            </Button>
            <Button onClick={this.startAddingCompany} color="blue" size="tiny">
              Nuevo Empresa
            </Button>
          </div>
          <ReactTable
            className="-striped -highlight"
            data={this.props.companyList}
            pageSize={5}
            columns={[
              { Header: "Nombre", accessor: "nombre" },
              { Header: "Tel", accessor: "telefono" },
              { Header: "Mail", accessor: "mail" },
              {
                Header: "Action",
                accessor: "1",
                Cell: row => (
                  <div className="companyListActions">
                    <Button
                      name="edit"
                      icon="edit"
                      value={row.original._id}
                      onClick={this.startEditCompany}
                    />
                  </div>
                )
              }
            ]}
          />
        </div>
      </div>
    );
  }
}
