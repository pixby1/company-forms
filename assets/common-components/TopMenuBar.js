import React from "react";
import Link from "next/link";

export default class extends React.Component {
  render() {
    return (
      <div className="topMenuBar">
        <Link href="/company-contact">
          <a>Emparesas & Contactos</a>
        </Link>
      </div>
    );
  }
}
