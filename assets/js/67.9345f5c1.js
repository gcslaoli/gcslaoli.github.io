(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{339:function(s,a,t){"use strict";t.r(a);var e=t(14),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sudo-免密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sudo-免密"}},[s._v("#")]),s._v(" sudo 免密")]),s._v(" "),a("p",[s._v("以下配置中 "),a("code",[s._v("username")]),s._v(" 为你的用户名,用户名位置填写 "),a("code",[s._v("%admin")]),s._v(" 代表管理员组 "),a("code",[s._v("%sudo")]),s._v(" 代表 sudo 组")]),s._v(" "),a("p",[s._v("以下方式选择一种即可")]),s._v(" "),a("h2",{attrs:{id:"_1-配置-sudo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置-sudo"}},[s._v("#")]),s._v(" 1. 配置 sudo")]),s._v(" "),a("p",[s._v("这种方式为将配置写入公共配置文件内")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" visudo\n")])])]),a("p",[s._v("在文件末尾添加")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("username "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" NOPASSWD:ALL\n")])])]),a("h2",{attrs:{id:"_2-配置-sudoers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-sudoers"}},[s._v("#")]),s._v(" 2. 配置 sudoers")]),s._v(" "),a("p",[s._v("这种方式每个用户一个独立的配置文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" visudo "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /etc/sudoers.d/username\n")])])]),a("p",[s._v("在文件末尾添加")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("username "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" NOPASSWD:ALL\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);