#! /bin/sh
# 安装traefik
set -e
# 指定版本号
version="v2.8.1"
# 获取操作系统类型
os_type=$(uname -s)
echo "os_type: $os_type"
# 操作系统不是Linux退出
if [ "$os_type" != "Linux" ]; then
    echo "This script only supports Linux"
    exit 1
fi
# 获取CPU架构
arch=$(uname -m)
echo "CPU架构: $arch"
# 根据CPU架构生成下载地址参数
if [ "$arch" = "x86_64" ]; then
    arch="amd64"
elif [ "$arch" = "i386" ]; then
    arch="386"
elif [ "$arch" = "i686" ]; then
    arch="386"
elif [ "$arch" = "aarch64" ]; then
    arch="arm64"
else
    echo "Unsupported CPU architecture: $arch"
    exit 1
fi
echo "CPU架构: $arch"
# 获取脚本所在目录
SCRIPT_DIR=$(cd $(dirname $0); pwd)
echo "应用安装目录: $SCRIPT_DIR"
# 下载traefik安装包
curl -L -o $SCRIPT_DIR/traefik_${version}_linux_$arch.tar.gz https://gh.hjmcloud.cn/github.com/traefik/traefik/releases/download/${version}/traefik_${version}_linux_$arch.tar.gz
# 解压安装包
tar -zxvf $SCRIPT_DIR/traefik_${version}_linux_$arch.tar.gz -C $SCRIPT_DIR
# 删除安装包
rm -rf $SCRIPT_DIR/traefik_${version}_linux_$arch.tar.gz
创建traefik配置文件
touch $SCRIPT_DIR/traefik.yaml
编辑traefik配置文件
cat > $SCRIPT_DIR/traefik.yaml << EOF
# traefik.yaml
providers:
  http:
    endpoint: "https://config.lidong.xin/getconfig?id=xxxxxx&filename=traefik.yaml&dl=true"
    pollInterval: 5s
entryPoints:
  web:
    address: ":80"
    forwardedHeaders:
      insecure: true
  websecure:
    address: ":443"
    forwardedHeaders:
      insecure: true
api:
  insecure: true
  dashboard: true
EOF


