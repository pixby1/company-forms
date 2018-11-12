import React from "react";
import * as superagent from "superagent";
import Head from "../assets/common-components/componentHead";
import Link from "next/link";

export default () => (
  <div>
    <Head>Main Page</Head>
    <Link href="/add-company">
      <a>Add Company</a>
    </Link>
  </div>
);
