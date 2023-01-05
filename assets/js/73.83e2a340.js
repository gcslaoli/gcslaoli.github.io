(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{344:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker-ansible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-ansible"}},[s._v("#")]),s._v(" docker-ansible")]),s._v(" "),a("p",[s._v("ansible docker 运行环境")]),s._v(" "),a("ul",[a("li",[s._v("镜像地址："),a("a",{attrs:{href:"https://hub.docker.com/r/gcslaoli/ansible/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://hub.docker.com/r/gcslaoli/ansible/"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("GitHub 地址："),a("a",{attrs:{href:"https://github.com/gcslaoli/docker-ansible",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/gcslaoli/docker-ansible"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"_1-说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-说明"}},[s._v("#")]),s._v(" 1. 说明")]),s._v(" "),a("p",[s._v("本项目是基于 docker 容器的 ansible 运行环境，主要用于 ansible 的学习和测试以及运维环境的快速搭建及标准化。")]),s._v(" "),a("p",[s._v("当需要同时维护多个主机集群时, 可以使用本项目来快速搭建 ansible 运行环境, 无需在本地安装 ansible。")]),s._v(" "),a("p",[s._v("推荐将项目配置文件和 playbook 文件放在项目目录中，然后将项目目录挂载到容器中，这样可以在容器外修改配置文件和 playbook 文件。")]),s._v(" "),a("p",[s._v("推荐使用 git 来管理项目, 为每个项目创建一个 repo, 这样可以方便的管理多个项目。注意 repo 中如需要存放密码等敏感信息，需要将 repo 设置为私有。")]),s._v(" "),a("h2",{attrs:{id:"_2-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用"}},[s._v("#")]),s._v(" 2. 使用")]),s._v(" "),a("p",[s._v("推荐使用 docker-compose 来运行容器，可以直接使用 docker-compose.yml 文件。")]),s._v(" "),a("p",[s._v("创建 docker-compose.yml 文件：")]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ansible")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gcslaoli/ansible"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" AUTO_SSHKEY_COMMENT=ansible "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自动生成的 ssh 密钥注释")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/ansible/ "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前目录挂载到容器的 /ansible 目录")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./data/.ssh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/tmp/.ssh "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 ssh 密钥挂载到容器的 /tmp/.ssh 目录,如果本地目录为空, 将会自动生成密钥")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" sleep infinity "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保持容器运行")]),s._v("\n")])])]),a("p",[s._v("启动容器：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" ansible "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),a("p",[s._v("命令将会进入容器的 bash 环境，可以在容器中执行 ansible 命令。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ansible "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\n")])])]),a("p",[s._v("退出容器：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])])]),a("p",[s._v("TIP: 退出容器后，容器将会被删除。如果不想删除容器, 可以使用 "),a("code",[s._v("docker-compose up -d")]),s._v(" 命令启动容器。启动后，可以使用 "),a("code",[s._v("docker-compose exec ansible bash")]),s._v(" 命令进入容器。")]),s._v(" "),a("p",[s._v("清理容器：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" down\n")])])]),a("h2",{attrs:{id:"_3-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置"}},[s._v("#")]),s._v(" 3. 配置")]),s._v(" "),a("p",[s._v("可在 docker-compose.yml 文件同级目录下创建 ansible.cfg 文件，用于配置 ansible。")]),s._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("defaults")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定 ansible-playbook 执行时的默认 inventory 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("inventory")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("./inventory.yml")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭 SSH 主机密钥检查")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("host_key_checking")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("False")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定 ansible-playbook 执行时的默认 roles 路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("roles_path")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("./roles")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定 ansible-playbook 执行时的默认 collections 路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("collections_paths")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("./collections")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"_4-目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-目录结构"}},[s._v("#")]),s._v(" 4. 目录结构")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├── ansible.cfg "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ansible 配置文件")]),s._v("\n├── collections "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# collections 目录")]),s._v("\n├── data "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据目录")]),s._v("\n│   └── .ssh "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh 密钥目录")]),s._v("\n├── docker-compose.yml "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose 配置文件")]),s._v("\n├── inventory.yml "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inventory 文件")]),s._v("\n├── playbook.yml "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# playbook 文件")]),s._v("\n└── roles "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# roles 目录")]),s._v("\n")])])]),a("h2",{attrs:{id:"_5-更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-更新"}},[s._v("#")]),s._v(" 5. 更新")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" pull\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);