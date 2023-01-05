(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{346:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pgit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pgit"}},[t._v("#")]),t._v(" pgit")]),t._v(" "),a("p",[t._v("pgit 是 Proxy Git 的缩写，使用镜像加速 github 下载,支持 repo,release")]),t._v(" "),a("h2",{attrs:{id:"仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仓库"}},[t._v("#")]),t._v(" 仓库")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/gcslaoli/pgit",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://gitee.com/gcslaoli/pgit",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://gitee.com/gcslaoli/pgit",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://gitee.com/gcslaoli/pgit/widgets/widget_card.svg?colors=ffffff,1e252b,323d47,455059,d7deea,99a0ae",alt:"李栋/pgit"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("从"),a("code",[t._v("github")]),t._v("下载")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" pgit https://raw.githubusercontent.com/gcslaoli/pgit/main/shell/pgit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x pgit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" pgit /usr/local/bin\n")])])]),a("p",[t._v("从"),a("code",[t._v("gitee")]),t._v("下载")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" pgit https://gitee.com/gcslaoli/pgit/raw/main/shell/pgit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x pgit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" pgit /usr/local/bin\n")])])]),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("对于"),a("code",[t._v("git clone")]),t._v("加速,使用"),a("code",[t._v("pgit")]),t._v("替代"),a("code",[t._v("git")]),t._v(".")]),t._v(" "),a("p",[a("code",[t._v("pgit")]),t._v("会自动判断是否需要加速,如果需要加速,则会自动使用镜像地址.传入的参数与"),a("code",[t._v("git")]),t._v("完全一致,事实上内部使用的也是"),a("code",[t._v("git")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pgit clone https://github.com/cool-team-official/cool-admin-vue.git\n")])])]),a("p",[t._v("当需要通过"),a("code",[t._v("wget")]),t._v("或者"),a("code",[t._v("curl")]),t._v("下载 relase branch raw 等资源时,可以使用"),a("code",[t._v("pgit")]),t._v("加速.在原"),a("code",[t._v("wget")]),t._v("或者"),a("code",[t._v("curl")]),t._v("命令前加上"),a("code",[t._v("pgit")]),t._v("即可.")]),t._v(" "),a("p",[t._v("例如"),a("code",[t._v("cool-tools")]),t._v("的 wget 安装脚本为:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" cool-tools https://github.com/cool-team-official/cool-admin-go/releases/latest/download/cool-tools_"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("go "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v(" GOOS"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("_"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("go "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v(" GOARCH"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x cool-tools "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" ./cool-tools "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" ./cool-tools\n")])])]),a("p",[t._v("可以使用"),a("code",[t._v("pgit")]),t._v("加速:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pgit "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" cool-tools https://github.com/cool-team-official/cool-admin-go/releases/latest/download/cool-tools_"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("go "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v(" GOOS"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("_"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("go "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v(" GOARCH"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x cool-tools "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" ./cool-tools "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" ./cool-tools\n")])])]),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[a("code",[t._v("pgit")]),t._v("默认使用的镜像地址为"),a("code",[t._v("https://ghproxy.com/")]),t._v(",如果需要使用其他镜像地址,可以设置环境变量"),a("code",[t._v("PGIT_PREFIX")]),t._v("来指定.")]),t._v(" "),a("p",[t._v("例如使用"),a("code",[t._v("https://gh.hjmcloud.cn/")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PGIT_PREFIX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://gh.hjmcloud.cn/\n")])])]),a("h2",{attrs:{id:"自建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自建镜像"}},[t._v("#")]),t._v(" 自建镜像")]),t._v(" "),a("p",[t._v("如果需要自建镜像,可以使用开源项目"),a("a",{attrs:{href:"https://github.com/hunshcn/gh-proxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("gh-proxy"),a("OutboundLink")],1),t._v("来搭建.")])])}),[],!1,null,null,null);a.default=r.exports}}]);