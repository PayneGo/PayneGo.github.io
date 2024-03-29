<template><div><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>Git</span></a></h1>
<h3 id="_1-git简介" tabindex="-1"><a class="header-anchor" href="#_1-git简介"><span>1.Git简介</span></a></h3>
<h4 id="_1-1-什么是git" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是git"><span>1.1.什么是Git</span></a></h4>
<ul>
<li>Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。</li>
<li>Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。</li>
<li>Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。</li>
</ul>
<h4 id="_1-2-git与svn区别" tabindex="-1"><a class="header-anchor" href="#_1-2-git与svn区别"><span>1.2.Git与SVN区别</span></a></h4>
<ul>
<li>Git是分布式的，SVN不是：这是Git和其他非分布式版本控制系统，如SVN、CVS最核心的区别。</li>
<li>Git把内容按元数据方式存储，而SVN是按文件：所有的资源控制系统都是把文件的辕信息隐藏在一个类似SVN、CVS等文件夹里。</li>
<li>Git分支和SVN的分支不同：分支在SVN中一点也不特别，其实他是版本库的另一个目录。</li>
<li>Git没有一个全局的版本号，SVN有：目前为止跟SVN相比Git最缺少的一个特征。</li>
<li>Git的内容完整性要大于SVN：Git 的内容存储使用的是 SHA-1 哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏。</li>
</ul>
<h3 id="_2-git工作流程" tabindex="-1"><a class="header-anchor" href="#_2-git工作流程"><span>2.Git工作流程</span></a></h3>
<h4 id="_2-1-git的工程流程" tabindex="-1"><a class="header-anchor" href="#_2-1-git的工程流程"><span>2.1.Git的工程流程</span></a></h4>
<ul>
<li>克隆Git资源作为工作目录</li>
<li>在克隆的资源上修改添加文件</li>
<li>如果别人更新了代码文件，你可以拉取最新的资源</li>
<li>在提交前查看修改</li>
<li>提交修改</li>
<li>在修改完成后，如果发现错误，可以撤回并且再次修改并提交</li>
</ul>
<h3 id="_3-git工作区、暂存区和版本库" tabindex="-1"><a class="header-anchor" href="#_3-git工作区、暂存区和版本库"><span>3.Git工作区、暂存区和版本库</span></a></h3>
<h4 id="_3-1-git工作区、暂存区和版本库" tabindex="-1"><a class="header-anchor" href="#_3-1-git工作区、暂存区和版本库"><span>3.1.Git工作区、暂存区和版本库</span></a></h4>
<ul>
<li>
<p>工作区：就是自己电脑中能看到的目录，工作空间。</p>
</li>
<li>
<p>暂存区：英文叫stage和index，一般存在.git目录下的index文件中，所以把暂存区有时也叫索引区。</p>
</li>
<li>
<p>版本库：工作区有一个隐藏目录 <strong>.git</strong>，这个不算工作区，而是 Git 的版本库。</p>
</li>
<li>
<p>图中左侧为工作区，右侧为版本库。在版本库中标记为 &quot;index&quot; 的区域是暂存区（stage/index），标记为 &quot;master&quot; 的是 master 分支所代表的目录树。</p>
</li>
<li>
<p>图中我们可以看出此时 &quot;HEAD&quot; 实际是指向 master 分支的一个&quot;游标&quot;。所以图示的命令中出现 HEAD 的地方可以用 master 来替换。</p>
</li>
<li>
<p>图中的 objects 标识的区域为 Git 的对象库，实际位于 &quot;.git/objects&quot; 目录下，里面包含了创建的各种对象及内容。</p>
</li>
<li>
<p>当对工作区修改（或新增）的文件执行 <strong>git add</strong> 命令时，暂存区的目录树被更新，同时工作区修改（或新增）的文件内容被写入到对象库中的一个新的对象中，而该对象的ID被记录在暂存区的文件索引中。</p>
</li>
<li>
<p>当执行提交操作（git commit）时，暂存区的目录树写到版本库（对象库）中，master 分支会做相应的更新。即 master 指向的目录树就是提交时暂存区的目录树。</p>
</li>
<li>
<p>当执行 <strong>git reset HEAD</strong> 命令时，暂存区的目录树会被重写，被 master 分支指向的目录树所替换，但是工作区不受影响。</p>
</li>
<li>
<p>当执行 <strong>git rm --cached &lt;file&gt;</strong> 命令时，会直接从暂存区删除文件，工作区则不做出改变。</p>
</li>
<li>
<p>当执行 <strong>git checkout .</strong> 或者 <strong>git checkout -- &lt;file&gt;</strong> 命令时，会用暂存区全部或指定的文件替换工作区的文件。这个操作很危险，会清除工作区中未添加到暂存区中的改动。</p>
</li>
<li>
<p>当执行 <strong>git checkout HEAD .</strong> 或者 <strong>git checkout HEAD &lt;file&gt;</strong> 命令时，会用 HEAD 指向的 master 分支中的全部或者部分文件替换暂存区和以及工作区中的文件。这个命令也是极具危险性的，因为不但会清除工作区中未提交的改动，也会清除暂存区中未提交的改动。</p>
</li>
</ul>
<h3 id="_4-git创建仓库" tabindex="-1"><a class="header-anchor" href="#_4-git创建仓库"><span>4.Git创建仓库</span></a></h3>
<h4 id="_4-1-git-init" tabindex="-1"><a class="header-anchor" href="#_4-1-git-init"><span>4.1.git init</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>Git 使用git init命令来初始化一个 Git 仓库，Git 的很多命令都需要在 Git 的仓库中运行，所以git init是使用 Git 的第一个命令。

在执行完成git init命令后，Git 仓库会生成一个 .git 目录，该目录包含了资源的所有元数据，其他的项目目录保持不变。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法</p>
<ul>
<li>使用当前目录作为Git仓库</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>使用我们指定目录作为Git仓库</li>
</ul>
<div class="language-bash\ line-numbers-mode" data-ext="bash\" data-title="bash\"><pre v-pre class="language-bash\"><code>git init newrepo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>将文件添加到暂存区</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> ./*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>将暂存区里的文件提交到本地仓库</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"提交说明"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-2-git-clone" tabindex="-1"><a class="header-anchor" href="#_4-2-git-clone"><span>4.2.git clone</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>我们使用 <span class="token function">git</span> clone 从现有 Git 仓库中拷贝项目（类似 svn checkout）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>克隆仓库的命令格式为</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone <span class="token punctuation">\</span><span class="token operator">&lt;</span>repo<span class="token punctuation">\</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>如果我们需要克隆到指定的目录</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone <span class="token punctuation">\</span><span class="token operator">&lt;</span>repo<span class="token punctuation">\</span><span class="token operator">></span> <span class="token punctuation">\</span><span class="token operator">&lt;</span>directory<span class="token punctuation">\</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>参数说明
<ul>
<li>**repo:**Git 仓库。</li>
<li>**directory:**本地目录。</li>
</ul>
</li>
</ul>
<h4 id="_4-3-git-config" tabindex="-1"><a class="header-anchor" href="#_4-3-git-config"><span>4.3.git config</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> 的设置使用 <span class="token function">git</span> config 命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>显示当前的git信息</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>编辑 git 配置文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">-e</span>    <span class="token comment"># 针对当前仓库 </span>
<span class="token function">git</span> config <span class="token parameter variable">-e</span> <span class="token parameter variable">--global</span>   <span class="token comment"># 针对系统上所有仓库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>设置提交代码时的用户信息</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"runoob"</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email test@runoob.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-git基本操作" tabindex="-1"><a class="header-anchor" href="#_5-git基本操作"><span>5.Git基本操作</span></a></h3>
<p><strong>（1）提交与修改</strong></p>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>git add</td>
<td>添加文件到仓库</td>
</tr>
<tr>
<td>git status</td>
<td>查看当前仓库状态，显示有变更的文件</td>
</tr>
<tr>
<td>git diff</td>
<td>比较文件的不同，即暂存区和工作区的差异</td>
</tr>
<tr>
<td>git commit</td>
<td>提交暂存区到本地仓库</td>
</tr>
<tr>
<td>git reset</td>
<td>回退版本</td>
</tr>
<tr>
<td>git rm</td>
<td>删除工作区中的文件</td>
</tr>
<tr>
<td>git mv</td>
<td>移动或者重命名工作区文件</td>
</tr>
</tbody>
</table>
<p><strong>（2）提交日志</strong></p>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>git log</td>
<td>查看历史提交记录</td>
</tr>
<tr>
<td>git blame</td>
<td>以表格的形式插卡你指定文件的历史修改记录</td>
</tr>
</tbody>
</table>
<p><strong>（3）远程操作</strong></p>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>git remote</td>
<td>远程仓库操作</td>
</tr>
<tr>
<td>git fetch</td>
<td>从远程获取代码库</td>
</tr>
<tr>
<td>git pull</td>
<td>下载远程代码并合并</td>
</tr>
<tr>
<td>git push</td>
<td>上传远程代码并合并</td>
</tr>
</tbody>
</table>
<p><strong>（4）创建分支命令</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（5）切换分支</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout 分支名
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> 分支名 <span class="token comment">#创建新分支并且切换到此分支</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（6）合并分支</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>get merge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（7）删除分支</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-d</span> 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（8）git文件的删除</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只是 git rm --cache 仅删除暂存区里的文件 如果不加--cache 会删除工作区里的文件 并提交到暂存区</p>
<p><strong>（9）git log命令</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> log -数字 <span class="token comment">#表示查看最近几次提交的不同点</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-p</span> -数字 <span class="token comment">#表示最近几次提交的不同点</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--graph</span> <span class="token comment">#以一个简单的线串联起整个提交历史</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h4>
</div></template>


