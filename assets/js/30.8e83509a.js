(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{299:function(n,t,e){"use strict";e.r(t);var o=e(14),r=Object(o.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"minio-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minio-安装"}},[n._v("#")]),n._v(" minio 安装")]),n._v(" "),t("p",[n._v("官方网站 "),t("a",{attrs:{href:"https://min.io/",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://min.io/"),t("OutboundLink")],1)]),n._v(" "),t("p",[n._v("中文文档 "),t("a",{attrs:{href:"https://docs.min.io/cn/",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://docs.min.io/cn/"),t("OutboundLink")],1)]),n._v(" "),t("h2",{attrs:{id:"示例docker-compose-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例docker-compose-yml"}},[n._v("#")]),n._v(" 示例"),t("code",[n._v("docker-compose.yml")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("version: '3.7'\nservices:\n  minio:\n    image: minio/minio\n    volumes:\n      - ./data:/data\n    ports:\n      - 9000:9000\n    environment:\n      MINIO_ROOT_USER: minio\n      MINIO_ROOT_PASSWORD: minio123\n    command: server /data\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);