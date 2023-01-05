(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{284:function(s,e,t){"use strict";t.r(e);var r=t(14),a=Object(r.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"wsl2安装与配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wsl2安装与配置"}},[s._v("#")]),s._v(" WSL2安装与配置")]),s._v(" "),e("p",[s._v("推荐个跨平台markdown编辑器 https://www.typora.io/")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/dev-environment/",target:"_blank",rel:"noopener noreferrer"}},[s._v("在 Windows 10 上创建开发环境 | Microsoft Docs"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("微软WSL官方文档 https://docs.microsoft.com/zh-cn/windows/wsl/")]),s._v(" "),e("h2",{attrs:{id:"步骤-1-启用适用于-linux-的-windows-子系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤-1-启用适用于-linux-的-windows-子系统"}},[s._v("#")]),s._v(" 步骤 1 - 启用适用于 Linux 的 Windows 子系统")]),s._v(" "),e("p",[s._v("以"),e("strong",[s._v("管理员身份")]),s._v("打开 PowerShell 并运行：")]),s._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[s._v("dism"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exe "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("online "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("enable-feature")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("featurename:Microsoft-Windows-Subsystem-Linux "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("all "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("norestart\n")])])]),e("h2",{attrs:{id:"步骤-2-检查运行-wsl-2-的要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤-2-检查运行-wsl-2-的要求"}},[s._v("#")]),s._v(" 步骤 2 - 检查运行 WSL 2 的要求")]),s._v(" "),e("p",[s._v("若要更新到 WSL 2，需要运行 Windows 10。")]),s._v(" "),e("ul",[e("li",[s._v("对于 x64 系统："),e("strong",[s._v("版本 1903")]),s._v(" 或更高版本，采用 "),e("strong",[s._v("内部版本 18362")]),s._v(" 或更高版本。")]),s._v(" "),e("li",[s._v("对于 ARM64 系统："),e("strong",[s._v("版本 2004")]),s._v(" 或更高版本，采用 "),e("strong",[s._v("内部版本 19041")]),s._v(" 或更高版本。")]),s._v(" "),e("li",[s._v("低于 18362 的版本不支持 WSL 2。 使用 "),e("a",{attrs:{href:"https://www.microsoft.com/software-download/windows10",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows Update 助手"),e("OutboundLink")],1),s._v("更新 Windows 版本。")])]),s._v(" "),e("p",[s._v("若要检查 Windows 版本及内部版本号，选择 Windows 徽标键 + R，然后键入“winver”，选择“确定”。 更新到“设置”菜单中的"),e("a",{attrs:{href:"ms-settings:windowsupdate"}},[s._v("最新 Windows 版本")]),s._v("。")]),s._v(" "),e("p",[s._v("备注")]),s._v(" "),e("blockquote",[e("p",[s._v("如果运行的是 Windows 10 版本1903 或 1909，请在 Windows 菜单中打开“设置”，导航到“更新和安全性”，然后选择“检查更新”。 内部版本号必须是 18362.1049+ 或 18363.1049+，次要内部版本号需要高于 .1049。 阅读详细信息："),e("a",{attrs:{href:"https://devblogs.microsoft.com/commandline/wsl-2-support-is-coming-to-windows-10-versions-1903-and-1909/",target:"_blank",rel:"noopener noreferrer"}},[s._v("WSL 2 即将支持 Windows 10 版本 1903 和 1909"),e("OutboundLink")],1),s._v("。 请参阅"),e("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/wsl/troubleshooting#im-on-windows-10-version-1903-and-i-still-do-not-see-options-for-wsl-2",target:"_blank",rel:"noopener noreferrer"}},[s._v("疑难解答说明"),e("OutboundLink")],1),s._v("。")])]),s._v(" "),e("h2",{attrs:{id:"步骤-3-启用虚拟机功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤-3-启用虚拟机功能"}},[s._v("#")]),s._v(" 步骤 3 - 启用虚拟机功能")]),s._v(" "),e("p",[s._v("以"),e("strong",[s._v("管理员身份")]),s._v("打开 PowerShell 并运行：")]),s._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[s._v("dism"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exe "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("online "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("enable-feature")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("featurename:VirtualMachinePlatform "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("all "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("norestart\n")])])]),e("h2",{attrs:{id:"步骤-4-下载-linux-内核更新包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤-4-下载-linux-内核更新包"}},[s._v("#")]),s._v(" 步骤 4 - 下载 Linux 内核更新包")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("下载最新包：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi",target:"_blank",rel:"noopener noreferrer"}},[s._v("适用于 x64 计算机的 WSL2 Linux 内核更新包"),e("OutboundLink")],1)])]),s._v(" "),e("p",[s._v("备注")]),s._v(" "),e("blockquote",[e("p",[s._v("如果使用的是 ARM64 计算机，请下载 "),e("a",{attrs:{href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_arm64.msi",target:"_blank",rel:"noopener noreferrer"}},[s._v("ARM64 包"),e("OutboundLink")],1),s._v("。 如果不确定自己计算机的类型，请打开命令提示符或 PowerShell，并输入："),e("code",[s._v('systeminfo | find "System Type"')]),s._v("。 "),e("strong",[s._v("警告：")]),s._v(" 在非英语 Windows 版本中，你可能需要修改搜索文本，例如在德语中为 "),e("code",[s._v('systeminfo | find "Systemtyp"')]),s._v("。")])])]),s._v(" "),e("li",[e("p",[s._v("运行上一步中下载的更新包。 （双击以运行 - 系统将提示你提供提升的权限，选择“是”以批准此安装。）")])])]),s._v(" "),e("p",[s._v("安装完成后，请继续执行下一步 - 在安装新的 Linux 分发时，将 WSL 2 设置为默认版本。 （如果希望将新的 Linux 安装设置为 WSL 1，请跳过此步骤。）")]),s._v(" "),e("p",[s._v("备注")]),s._v(" "),e("blockquote",[e("p",[s._v("有关详细信息，请参阅 "),e("a",{attrs:{href:"https://aka.ms/cliblog",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows 命令行博客"),e("OutboundLink")],1),s._v("上的文章"),e("a",{attrs:{href:"https://devblogs.microsoft.com/commandline/wsl2-will-be-generally-available-in-windows-10-version-2004",target:"_blank",rel:"noopener noreferrer"}},[s._v("对更新 WSL2 Linux 内核的更改"),e("OutboundLink")],1),s._v("。")])]),s._v(" "),e("h2",{attrs:{id:"步骤-5-将-wsl-2-设置为默认版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤-5-将-wsl-2-设置为默认版本"}},[s._v("#")]),s._v(" 步骤 5 - 将 WSL 2 设置为默认版本")]),s._v(" "),e("p",[s._v("打开 PowerShell，然后在安装新的 Linux 发行版时运行以下命令，将 WSL 2 设置为默认版本：")]),s._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[s._v("wsl "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("set-default")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("version 2\n")])])]),e("h2",{attrs:{id:"步骤-6-安装所选的-linux-分发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤-6-安装所选的-linux-分发"}},[s._v("#")]),s._v(" 步骤 6 - 安装所选的 Linux 分发")]),s._v(" "),e("h2",{attrs:{id:"安装-windows-终端-可选"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-windows-终端-可选"}},[s._v("#")]),s._v(" 安装 Windows 终端（可选）")]),s._v(" "),e("h2",{attrs:{id:"将分发版版本设置为-wsl-1-或-wsl-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将分发版版本设置为-wsl-1-或-wsl-2"}},[s._v("#")]),s._v(" 将分发版版本设置为 WSL 1 或 WSL 2")]),s._v(" "),e("p",[s._v("可打开 PowerShell 命令行并输入以下命令（仅在 "),e("a",{attrs:{href:"ms-settings:windowsupdate"}},[s._v("Windows 内部版本 18362 或更高版本")]),s._v("中可用），检查分配给每个已安装的 Linux 分发版的 WSL 版本："),e("code",[s._v("wsl -l -v")])]),s._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[s._v("wsl "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("list "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("verbose\n")])])]),e("p",[s._v("若要将分发版设置为受某一 WSL 版本支持，请运行：")]),s._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[s._v("wsl "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("set-version")]),s._v(" <distribution name> <versionNumber>\n")])])]),e("p",[s._v("请确保将 "),e("code",[s._v("<distribution name>")]),s._v(" 替换为你的分发版的实际名称，并将 "),e("code",[s._v("<versionNumber>")]),s._v(" 替换为数字“1”或“2”。 可以随时更改回 WSL 1，方法是运行与上面相同的命令，但将“2”替换为“1”。")]),s._v(" "),e("p",[s._v("备注")]),s._v(" "),e("blockquote",[e("p",[s._v("从 WSL 1 更新到 WSL 2 可能需要几分钟才能完成，具体取决于目标分发版的大小。 如果从 Windows 10 周年更新或创意者更新运行 WSL 1 的旧（历史）安装，可能会遇到更新错误。 按照这些说明"),e("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/wsl/install-legacy#uninstallingremoving-the-legacy-distro",target:"_blank",rel:"noopener noreferrer"}},[s._v("卸载并删除任何旧分发"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("p",[s._v("如果 "),e("code",[s._v("wsl --set-default-version")]),s._v(" 结果为无效命令，请输入 "),e("code",[s._v("wsl --help")]),s._v("。 如果 "),e("code",[s._v("--set-default-version")]),s._v(" 未列出，则表示你的 OS 不支持它，你需要更新到版本 1903（内部版本 18362）或更高版本。 如果你在使用 ARM64 版本 19041，那么当使用 PowerShell 时，此命令可能会失败；在这种情况下，你可使用命令提示符，而不是发出 "),e("code",[s._v("wsl.exe")]),s._v(" 命令。")]),s._v(" "),e("p",[s._v("运行命令后如果看到此消息："),e("code",[s._v("WSL 2 requires an update to its kernel component. For information please visit https://aka.ms/wsl2kernel")]),s._v("。 仍需要安装 MSI Linux 内核更新包。")])]),s._v(" "),e("p",[s._v("此外，如果要使 WSL 2 成为你的默认体系结构，可以通过此命令执行该操作：")]),s._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[s._v("wsl "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("set-default")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("version 2\n")])])]),e("p",[s._v("这会将安装的任何新分发版的版本设置为 WSL 2。")])])}),[],!1,null,null,null);e.default=a.exports}}]);