import React from "react";
import Head from "next/head";

export default props => (
  <Head>
    <title>{props.children}</title>
    <link rel="stylesheet" type="text/css" href="/static/semantic.min.css" />
    <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
      integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
      crossorigin="anonymous"
    />
    <script src="/static/semantic.min.js" />
    <script>const hostname = window.location.origin</script>
  </Head>
);
