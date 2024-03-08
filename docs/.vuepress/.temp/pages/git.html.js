import comp from "/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/git.html.vue"
const data = JSON.parse("{\"path\":\"/git.html\",\"title\":\"页面的标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"页面的标题\",\"description\":\"页面的描述\"},\"headers\":[{\"level\":3,\"title\":\"1.Git简介\",\"slug\":\"_1-git简介\",\"link\":\"#_1-git简介\",\"children\":[]},{\"level\":3,\"title\":\"2.Git工作流程\",\"slug\":\"_2-git工作流程\",\"link\":\"#_2-git工作流程\",\"children\":[]},{\"level\":3,\"title\":\"3.Git工作区、暂存区和版本库\",\"slug\":\"_3-git工作区、暂存区和版本库\",\"link\":\"#_3-git工作区、暂存区和版本库\",\"children\":[]},{\"level\":3,\"title\":\"4.Git创建仓库\",\"slug\":\"_4-git创建仓库\",\"link\":\"#_4-git创建仓库\",\"children\":[]},{\"level\":3,\"title\":\"5.Git基本操作\",\"slug\":\"_5-git基本操作\",\"link\":\"#_5-git基本操作\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"git.md\",\"excerpt\":\"\\n<h3>1.Git简介</h3>\\n<h4>1.1.什么是Git</h4>\\n<ul>\\n<li>Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。</li>\\n<li>Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。</li>\\n<li>Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。</li>\\n</ul>\\n<h4>1.2.Git与SVN区别</h4>\\n<ul>\\n<li>Git是分布式的，SVN不是：这是Git和其他非分布式版本控制系统，如SVN、CVS最核心的区别。</li>\\n<li>Git把内容按元数据方式存储，而SVN是按文件：所有的资源控制系统都是把文件的辕信息隐藏在一个类似SVN、CVS等文件夹里。</li>\\n<li>Git分支和SVN的分支不同：分支在SVN中一点也不特别，其实他是版本库的另一个目录。</li>\\n<li>Git没有一个全局的版本号，SVN有：目前为止跟SVN相比Git最缺少的一个特征。</li>\\n<li>Git的内容完整性要大于SVN：Git 的内容存储使用的是 SHA-1 哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏。</li>\\n</ul>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
