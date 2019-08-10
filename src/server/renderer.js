import React from "react";
import ReactDOM from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Layout from "../common/layout";

export default function renderer(html, path, context) {
    const serverHtml = ReactDOM.renderToString(
        <StaticRouter location={path} context={context}>
            <Layout />
        </StaticRouter>
    );
    const regex = /(<div id="root">)(<\/div>)/;
    return html.replace(regex, function(original, div1, div2) {
        return div1 + serverHtml + div2;
    });
}