(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{289:function(t,a,e){"use strict";e.r(a);var s=e(14),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git简介及拉取代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git简介及拉取代码"}},[t._v("#")]),t._v(" Git简介及拉取代码")]),t._v(" "),a("h2",{attrs:{id:"配置个人信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置个人信息"}},[t._v("#")]),t._v(" 配置个人信息")]),t._v(" "),a("p",[t._v('git config --global user.email "cnlidong@live.cn"')]),t._v(" "),a("p",[t._v('git config --global user.name "lidong"')]),t._v(" "),a("p",[a("a",{attrs:{href:"https://admin.cool-js.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("COOL-ADMIN 后台管理系统 (cool-js.com)"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"项目中同步官方库更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目中同步官方库更新"}},[t._v("#")]),t._v(" 项目中同步官方库更新")]),t._v(" "),a("p",[t._v("后端")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("// 查看库信息\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n//添加对应的上游仓库信息\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" upstream https://gitee.com/cool-team-official/cool-admin-midway.git\n\n\n\n//从上游戏仓库fetch分支和提交点\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch upstream\n// 切换到本地主分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n// 合并上游戏master分支到本地master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge upstream/master\n// 提交更新master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])]),a("p",[t._v("前端")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 查看库信息\ngit remote -v\n//添加对应的上游仓库信息\ngit remote add upstream https://gitee.com/cool-team-official/cool-admin-vue.git\n\n\n\n//从上游戏仓库fetch分支和提交点\ngit fetch upstream\n// 切换到本地主分支\ngit checkout vue3-ts-vite\n// 合并上游戏master分支到本地master\ngit merge upstream/vue3-ts-vite\n// 提交更新master\ngit push\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);