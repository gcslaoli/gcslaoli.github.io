#！ /bin/sh
# 安装containerd
# 下载containerd
wget https://download.docker.com/linux/static/stable/x86_64/containerd-1.4.3-linux-amd64.tar.gz
# 解压containerd
tar -xvf containerd-1.4.3-linux-amd64.tar.gz
# 创建containerd配置文件
mkdir -p /etc/containerd
# 创建containerd运行目录
mkdir -p /var/run/containerd
# 创建containerd日志目录
mkdir -p /var/log/containerd
# 创建containerd数据目录
mkdir -p /var/lib/containerd
# 创建containerd配置文件
containerd config default > /etc/containerd/config.toml
# 创建containerd.service文件
cat > /usr/lib/systemd/system/containerd.service <<EOF
[Unit]
Description=containerd container runtime
Documentation=https://containerd.io
After=network.target
[Service]
ExecStartPre=/sbin/modprobe overlay
ExecStartPre=/sbin/modprobe br_netfilter
EOF
# 安装Docker CE v20.10.7
# 下载安装包
wget https://download.docker.com/linux/static/stable/x86_64/docker-20.10.7.tgz
# 解压安装包
tar -zxvf docker-20.10.7.tgz
# 进入解压后的目录
cd docker
# 复制文件到/usr/bin目录
cp docker* /usr/bin
# 创建docker组
groupadd docker
# 将当前用户加入docker组
usermod -aG docker $USER
# 创建docker配置文件目录
mkdir /etc/docker
# 创建daemon.json文件
touch /etc/docker/daemon.json
# 编辑daemon.json文件
cat > /etc/docker/daemon.json << EOF
{
  "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]
}
EOF
# 创建docker.service文件
touch /etc/systemd/system/docker.service
# 编辑docker.service文件
cat > /etc/systemd/system/docker.service << EOF
[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target
Wants=network-online.target
[Service]
Type=notify
ExecStart=/usr/bin/dockerd
ExecReload=/bin/kill -s HUP \$MAINPID
TimeoutSec=0
RestartSec=2
Restart=always
[Install]
WantedBy=multi-user.target
EOF
# 加载docker.service文件
systemctl daemon-reload
# 启动docker服务
systemctl start docker
# 设置docker服务开机启动
systemctl enable docker
# 查看docker版本
docker version

