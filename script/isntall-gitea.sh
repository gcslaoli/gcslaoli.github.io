#下载gieta
wget -O gitea https://dl.gitea.io/gitea/1.13.0/gitea-1.13.0-linux-amd64
chmod +x gitea
#安装git
yum install git -y
#创建git用户及组
useradd git
#创建目录及权限
mkdir -p ./{custom,data,log}
chown -R git:git ./
chmod -R 750 ./
