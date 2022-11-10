# Linux 初级自动化打包部署

## 🍦 前言

大家好，我是[田同学](https://github.com/hiliyongke)，大家可以加我微信 `VirgoTyh` 一起共同学习。

近期开始学习了一些关于 `Linux` 相关的命令和新的可玩性的骚操作，一些命令笔记和遇到的问题，在这里记录一下，分享给大家~

## 🦚 配置服务器

配置服务器推荐使用 [宝塔](https://www.bt.cn/new/index.html) 进行配置，一键配置，非常方便快捷。

另外这里推荐两款服务器管理软件：

- [WinSCP](https://winscp.net/eng/docs/lang:chs) WinSCP 是一个 Windows 环境下使用的 SSH 的开源图形化 SFTP 客户端。同时支持 SCP 协议。它的主要功能是在本地与远程计算机间安全地复制文件，并且可以直接编辑文件。
- [xShell](https://www.xshell.com/zh/xshell/) 这是业界最强大的 SSH 客户机。

## 🚀 安装 node

1. 首先需要在 [node](http://kik.cn/download/) 官网下载 `Linux 二进制文件 (x64)` 安装包

2. 将下载的压缩包上传到 linux 服务器 `/usr/local` 目录下

3. 将 `tar` 文件解压，执行命令：

```shell
tar -xvf node-xxxx.tar
```

4. 改文件夹的名字，改成 `node`，执行命令

```shell
mv node-xxx node
```

5. 建立软连接，按序执行下面命令：

```shell
ln -s /usr/local/nodejs/bin/node /usr/local/bin

ln -s /usr/local/nodejs/bin/npm /usr/local/bin
```

6. 修改环境变量，执行命令：

```shell
export PATH=$PATH:/usr/local/node/bin
```

7. 修改以后执行生效，执行命令：

```shell
source /etc/profile
```

8. 测试：

```shell
node -v
```

## 🛰️ 安装 Git

在 [Git 官网](https://git-scm.com/download/linux) 提供了简单快捷的安装命令，一行命令即可实现安装。

## 🥕 安装 Pnpm

安装了 `node` 之后，可以直接执行命令进行安装，但是安装完成之后需要重启终端，否则不生效。

```shell
npm install -g pnpm
```

或者也可以通过 [Pnpm 官网](https://pnpm.io/zh/installation) 提供的脚本命令进行安装：

```shell
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

## 🚧 基本命令

```shell
ssh name@ip # 登陆服务器

cd xxx # 进入指定目录

cd .. # 退到上一层目录

cd / # 进入主目录

sudo -i # 切换 root 用户

rm -rf xxx/* # 删除 xxx 目录中的所有文件

mkdir xxx # 新建文件夹

touch xxx # 新建文件

vim xxx # 编辑/新建文件

vi xxx # 编辑/新建文件

cat xxx # 查看文件内容

ll # 查看当前目录所有文件
```

## ⏳ 错误处理

- 错误 1

```shell
-bash: ./tyh-blog.sh: Permission denied
```

需要添加上可执行权限，执行命令：

```shell
chmod 777 xxx.sh
```

- 错误 2

```shell
rm: cannot remove 'blog/.user.ini': Operation not permitted
```

执行下面命令再删除：

```shell
chattr -i .user.ini
```

## 🐬 自动化打包部署

安装了 `node` `git` `pnpm` 之后，就可以直接在服务器上拉取 github 仓库的代码，接下来安装依赖就可以在服务器上搭建一个和远程仓库一样的项目了。

接下来就可以编写一个 `shell` 脚本进行自动化执行，自动拉取最新代码，自动安装依赖，自动打包，新建 `xxx.sh` 文件，代码如下：

```shell
cd /xxx/xxxx/xxx # 进入服务器仓库的地址

git pull # 拉取最新代码

pnpm i # 安装依赖

pnpm build # 打包
```

接下来每次需要更新网站的时候，就可以执行一下脚本，就可以实现自动化了，再使用宝塔工具将网站目录指向打包后的 `dist` 文件夹即可。

执行脚本命令：

```shell
./xxx.sh
```

## 🍀 写在最后

也欢迎加我微信共同学习：

- 仓库：`https://github.com/hiliyongke/Linux-shell`
（加好友邀请加入微信群）
- Github: `https://github.com/hiliyongke`
