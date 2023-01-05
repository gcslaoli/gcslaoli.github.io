(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{303:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"drone-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#drone-安装"}},[t._v("#")]),t._v(" Drone 安装")]),t._v(" "),a("p",[t._v("Drone 是一个高效灵活的 CI/CD 工具。")]),t._v(" "),a("p",[t._v("官方网站"),a("a",{attrs:{href:"https://www.drone.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.drone.io/"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.bilibili.com/video/BV1cy4y1D7ci/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装视频地址"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"创建-docker-compose-yml-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-docker-compose-yml-文件"}},[t._v("#")]),t._v(" 创建 "),a("code",[t._v("docker-compose.yml")]),t._v(" 文件")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("drone-server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" drone/drone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10003:80"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./data/drone/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/lib/drone/\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./data/data/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/data/\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_GITEA_SERVER=https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//gitea服务器地址\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_GITEA_CLIENT_ID=gitea生成的OAuth2客户端ID\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_GITEA_CLIENT_SECRET=gitea生成的OAuth2客户端密钥\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_SERVER_HOST=drone服务器地址\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_SERVER_PROTO=https\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_RPC_SECRET=自定义的Drone与runner通信密钥\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("drone-runner-docker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" drone/drone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("runner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/run/docker.sock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/run/docker.sock\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_RPC_PROTO=http\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_RPC_HOST=drone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_RPC_SECRET=自定义的Drone与runner通信密钥\n")])])]),a("h2",{attrs:{id:"生成随机密码命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成随机密码命令"}},[t._v("#")]),t._v(" 生成随机密码命令")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("openssl rand "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-hex")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n")])])]),a("h2",{attrs:{id:"使用示例库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例库"}},[t._v("#")]),t._v(" 使用示例库")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://git.lidong.xin/drone-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git.lidong.xin/drone-example"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);