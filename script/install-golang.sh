#!/bin/sh
set -e
VERSION=1.17
OS=linux
ARCH=amd64
curl -L https://studygolang.com/dl/golang/go$VERSION.$OS-$ARCH.tar.gz -o go$VERSION.$OS-$ARCH.tar.gz
tar -C /usr/local -xzf go$VERSION.$OS-$ARCH.tar.gz
echo "export PATH=$PATH:/usr/local/go/bin">>/etc/profile
echo "Please reboot or run this command: export PATH=\$PATH:/usr/local/go/bin"