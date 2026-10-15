import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const out = renderToStaticMarkup(
  React.createElement("link", { rel: "alternate", hrefLang: "en", href: "https://x.com" })
);
console.log("React 渲染 link 的输出:", out);

const out2 = renderToStaticMarkup(
  React.createElement("link", { rel: "alternate", hreflang: "en", href: "https://x.com" })
);
console.log("小写 hreflang 属性:", out2);
