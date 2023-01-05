(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{301:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"registry-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registry-安装"}},[t._v("#")]),t._v(" Registry 安装")]),t._v(" "),s("p",[t._v("生产环境下带密码的 registry 的安装")]),t._v(" "),s("p",[t._v("官方文档"),s("a",{attrs:{href:"https://docs.docker.com/registry/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/registry/"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.bilibili.com/video/BV1CZ4y1g7cv/",target:"_blank",rel:"noopener noreferrer"}},[t._v("操作视频教程"),s("OutboundLink")],1),t._v("，求三连。")]),t._v(" "),s("h2",{attrs:{id:"创建-docker-compose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-docker-compose"}},[t._v("#")]),t._v(" 创建 docker-compose")]),t._v(" "),s("p",[t._v("新建 "),s("code",[t._v("docker-compose.yml")]),t._v(" 文件")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("registry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 5000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("REGISTRY_HTTP_TLS_CERTIFICATE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /certs/domain.crt\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("REGISTRY_HTTP_TLS_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /certs/domain.key\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("REGISTRY_AUTH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" htpasswd\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("REGISTRY_AUTH_HTPASSWD_PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /auth/htpasswd\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("REGISTRY_AUTH_HTPASSWD_REALM")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Registry Realm\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /path/data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/lib/registry\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /path/certs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/certs\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /path/auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/auth\n")])])]),s("h2",{attrs:{id:"创建用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建用户"}},[t._v("#")]),t._v(" 创建用户")]),t._v(" "),s("p",[t._v("创建用户文件目录")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" auth\n")])])]),s("p",[t._v("创建用户名为 testuser 密码为 testpssword 的用户")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--entrypoint")]),t._v(" htpasswd "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  httpd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Bbn")]),t._v(" testuser testpassword "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" auth/htpasswd\n")])])]),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("p",[t._v("Q: NGINX https 反代后可以 pull 不能 push")]),t._v(" "),s("p",[t._v("A: 在反代配置中增加下面配置，将协议传递到容器")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("proxy_set_header X-Forwarded-Proto https;\n")])])]),s("p",[t._v("Q: 如何开启删除权限")]),t._v(" "),s("p",[t._v("A: 环境变量中增加")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("REGISTRY_STORAGE_DELETE_ENABLED: 'true' # 允许删除\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);