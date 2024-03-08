---
lang: zh-CN
title: 页面的标题
description: 页面的描述
---

# Git

### 1.Git简介

#### 1.1.什么是Git

- Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。
- Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。
- Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。

#### 1.2.Git与SVN区别

- Git是分布式的，SVN不是：这是Git和其他非分布式版本控制系统，如SVN、CVS最核心的区别。
- Git把内容按元数据方式存储，而SVN是按文件：所有的资源控制系统都是把文件的辕信息隐藏在一个类似SVN、CVS等文件夹里。
- Git分支和SVN的分支不同：分支在SVN中一点也不特别，其实他是版本库的另一个目录。
- Git没有一个全局的版本号，SVN有：目前为止跟SVN相比Git最缺少的一个特征。
- Git的内容完整性要大于SVN：Git 的内容存储使用的是 SHA-1 哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏。



### 2.Git工作流程

#### 2.1.Git的工程流程

- 克隆Git资源作为工作目录
- 在克隆的资源上修改添加文件
- 如果别人更新了代码文件，你可以拉取最新的资源
- 在提交前查看修改
- 提交修改
- 在修改完成后，如果发现错误，可以撤回并且再次修改并提交



### 3.Git工作区、暂存区和版本库

#### 3.1.Git工作区、暂存区和版本库

- 工作区：就是自己电脑中能看到的目录，工作空间。
- 暂存区：英文叫stage和index，一般存在.git目录下的index文件中，所以把暂存区有时也叫索引区。
- 版本库：工作区有一个隐藏目录 **.git**，这个不算工作区，而是 Git 的版本库。



- 图中左侧为工作区，右侧为版本库。在版本库中标记为 "index" 的区域是暂存区（stage/index），标记为 "master" 的是 master 分支所代表的目录树。
- 图中我们可以看出此时 "HEAD" 实际是指向 master 分支的一个"游标"。所以图示的命令中出现 HEAD 的地方可以用 master 来替换。
- 图中的 objects 标识的区域为 Git 的对象库，实际位于 ".git/objects" 目录下，里面包含了创建的各种对象及内容。
- 当对工作区修改（或新增）的文件执行 **git add** 命令时，暂存区的目录树被更新，同时工作区修改（或新增）的文件内容被写入到对象库中的一个新的对象中，而该对象的ID被记录在暂存区的文件索引中。
- 当执行提交操作（git commit）时，暂存区的目录树写到版本库（对象库）中，master 分支会做相应的更新。即 master 指向的目录树就是提交时暂存区的目录树。
- 当执行 **git reset HEAD** 命令时，暂存区的目录树会被重写，被 master 分支指向的目录树所替换，但是工作区不受影响。
- 当执行 **git rm --cached \<file\>** 命令时，会直接从暂存区删除文件，工作区则不做出改变。
- 当执行 **git checkout .** 或者 **git checkout -- \<file\>** 命令时，会用暂存区全部或指定的文件替换工作区的文件。这个操作很危险，会清除工作区中未添加到暂存区中的改动。
- 当执行 **git checkout HEAD .** 或者 **git checkout HEAD \<file\>** 命令时，会用 HEAD 指向的 master 分支中的全部或者部分文件替换暂存区和以及工作区中的文件。这个命令也是极具危险性的，因为不但会清除工作区中未提交的改动，也会清除暂存区中未提交的改动。

### 4.Git创建仓库

#### 4.1.git init

```bash
Git 使用git init命令来初始化一个 Git 仓库，Git 的很多命令都需要在 Git 的仓库中运行，所以git init是使用 Git 的第一个命令。

在执行完成git init命令后，Git 仓库会生成一个 .git 目录，该目录包含了资源的所有元数据，其他的项目目录保持不变。
```

使用方法

- 使用当前目录作为Git仓库

```bash
git init
```

- 使用我们指定目录作为Git仓库

```bash\
git init newrepo
```

- 将文件添加到暂存区

```bash
git add ./*
```

- 将暂存区里的文件提交到本地仓库

```bash
git commit -m "提交说明"
```

#### 4.2.git clone

```bash
我们使用 git clone 从现有 Git 仓库中拷贝项目（类似 svn checkout）
```

- 克隆仓库的命令格式为

```bash
git clone \<repo\>
```

- 如果我们需要克隆到指定的目录

```bash
git clone \<repo\> \<directory\>
```

- 参数说明
  - **repo:**Git 仓库。
  - **directory:**本地目录。

#### 4.3.git config

```bash
git 的设置使用 git config 命令
```

- 显示当前的git信息

```bash
git config --list
```

- 编辑 git 配置文件

```bash
git config -e    # 针对当前仓库 
git config -e --global   # 针对系统上所有仓库
```

- 设置提交代码时的用户信息

```bash
git config --global user.name "runoob"
git config --global user.email test@runoob.com
```

### 5.Git基本操作



**（1）提交与修改**

| 命令       | 说明                                   |
| ---------- | -------------------------------------- |
| git add    | 添加文件到仓库                         |
| git status | 查看当前仓库状态，显示有变更的文件     |
| git diff   | 比较文件的不同，即暂存区和工作区的差异 |
| git commit | 提交暂存区到本地仓库                   |
| git reset  | 回退版本                               |
| git rm     | 删除工作区中的文件                     |
| git mv     | 移动或者重命名工作区文件               |

**（2）提交日志**

| 命令      | 说明                                     |
| --------- | ---------------------------------------- |
| git log   | 查看历史提交记录                         |
| git blame | 以表格的形式插卡你指定文件的历史修改记录 |

**（3）远程操作**

| 命令       | 说明               |
| ---------- | ------------------ |
| git remote | 远程仓库操作       |
| git fetch  | 从远程获取代码库   |
| git pull   | 下载远程代码并合并 |
| git push   | 上传远程代码并合并 |

**（4）创建分支命令**

```bash
git branch 分支名
```

**（5）切换分支**

```bash
git checkout 分支名
git checkout -b 分支名 #创建新分支并且切换到此分支
```



**（6）合并分支**

```bash
get merge
```

**（7）删除分支**

```bash
git branch -d 分支名
```

**（8）git文件的删除**

```bash
git rm 文件名
```



如果只是 git rm --cache 仅删除暂存区里的文件 如果不加--cache 会删除工作区里的文件 并提交到暂存区

**（9）git log命令**

```bash
git log -数字 #表示查看最近几次提交的不同点
```



```bash
git log -p -数字 #表示最近几次提交的不同点
```


```bash
git log --graph #以一个简单的线串联起整个提交历史
```

#### 
