import React from "react";
import Router from "next/router";
import TopMenuBar from "../../assets/common-components/TopMenuBar";
import Head from "../../assets/common-components/componentHead";
import { PageSidebar } from "../../assets/common-components/CompanyContactSidebar";
import "../../assets/styles/companyContact.css";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: ""
    };
  }

  componentDidMount() {
    Router.push("/company-contact/company");
  }

  render() {
    return (
      <div className="companyContactPage">
        <Head>Empresas & Contactos</Head>
        <TopMenuBar />
        <PageSidebar />
      </div>
    );
  }
}
