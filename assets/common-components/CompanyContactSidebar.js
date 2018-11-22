import React from "react";
import Link from "next/link";
import "../styles/companyContactSidebar.css";

import { Menu } from "semantic-ui-react";

export class PageSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: ""
    };
  }

  handleMenuItemClick = clickedItem => e => {
    this.setState({ activeMenuItem: clickedItem });
  };

  render() {
    const { activeMenuItem } = this.state;
    return (
      <div className="pageSidebar">
        <Menu className="sidebarMenu" vertical={true}>
          <Link href="/company-contact/contact">
            <Menu.Item
              name="contact"
              active={activeMenuItem === "contact"}
              onClick={this.handleMenuItemClick("contact")}
            >
              Contactos
            </Menu.Item>
          </Link>
          <Link href="/company-contact/company" prefetch>
            <Menu.Item
              onClick={this.handleMenuItemClick("company")}
              name="company"
              active={activeMenuItem === "company"}
            >
              Empresas
            </Menu.Item>
          </Link>
          <Link href="/company-contact/category">
            <Menu.Item
              onClick={this.handleMenuItemClick("category")}
              name="category"
              active={activeMenuItem === "category"}
            >
              Rubors
            </Menu.Item>
          </Link>
        </Menu>
      </div>
    );
  }
}
