import React from "react";
import ReactDOM from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Helmet from "react-helmet";
import Layout from "../common/layout";

export default function renderer(html, path, context) {
    const serverHtml = ReactDOM.renderToString(
        <StaticRouter location={path} context={context}>
            <Layout />
        </StaticRouter>
    );
    const regex = /(<div id="root">)(<\/div>)/;
    html =  html.replace(regex, function(original, div1, div2) {
        return div1 + serverHtml + div2;
    });

    // helmet related code
    const helmet = Helmet.renderStatic();
    const head = helmet.title.toString() + helmet.meta.toString();
    const index = html.indexOf("</head>");
    const html1 = html.slice(0, index);
    const html2 = html.slice(index);
    return html1 + head + html2;
}