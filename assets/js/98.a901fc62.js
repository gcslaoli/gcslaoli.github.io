(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{368:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"通过ssh隧道发布开发机端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过ssh隧道发布开发机端口"}},[t._v("#")]),t._v(" 通过SSH隧道发布开发机端口")]),t._v(" "),s("h2",{attrs:{id:"所需条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#所需条件"}},[t._v("#")]),t._v(" 所需条件")]),t._v(" "),s("p",[t._v("一台有公网IP的服务器（支持SSH），为方便使用最好配置密钥登陆。")]),t._v(" "),s("p",[t._v("服务器安装nginx，方便对不同业务复用80，可以用宝塔，方便管理。")]),t._v(" "),s("h2",{attrs:{id:"示例代码-开发机执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-开发机执行"}},[t._v("#")]),t._v(" 示例代码（开发机执行）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("发布本机8080到服务器 www.lidong.xin的81端口\nssh -N -R 81:127.0.0.1:8080 root@www.lidong.xin\n\n发布本机7001到服务器 www.lidong.xin的82端口\nssh -N -R 82:127.0.0.1:7001 root@www.lidong.xin\n")])])]),s("h2",{attrs:{id:"服务器配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器配置"}},[t._v("#")]),t._v(" 服务器配置")]),t._v(" "),s("p",[t._v("配置nginx反向代理")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("81.lidong.xin 反向代理到 127.0.0.1:81\n82.lidong.xin 反向代理到 127.0.0.1:82\n")])])]),s("p",[t._v("这样就可以在互联网用对应域名访问本机对应服务了。")])])}),[],!1,null,null,null);s.default=r.exports}}]);