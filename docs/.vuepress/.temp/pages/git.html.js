import comp from "/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/git.html.vue"
const data = JSON.parse("{\"path\":\"/git.html\",\"title\":\"页面的标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"页面的标题\",\"description\":\"页面的描述\"},\"headers\":[{\"level\":3,\"title\":\"1.Git简介\",\"slug\":\"_1-git简介\",\"link\":\"#_1-git简介\",\"children\":[]},{\"level\":3,\"title\":\"2.Git工作流程\",\"slug\":\"_2-git工作流程\",\"link\":\"#_2-git工作流程\",\"children\":[]},{\"level\":3,\"title\":\"3.Git工作区、暂存区和版本库\",\"slug\":\"_3-git工作区、暂存区和版本库\",\"link\":\"#_3-git工作区、暂存区和版本库\",\"children\":[]},{\"level\":3,\"title\":\"4.Git创建仓库\",\"slug\":\"_4-git创建仓库\",\"link\":\"#_4-git创建仓库\",\"children\":[]},{\"level\":3,\"title\":\"5.Git基本操作\",\"slug\":\"_5-git基本操作\",\"link\":\"#_5-git基本操作\",\"children\":[]}],\"git\":{\"updatedTime\":1709882408000,\"contributors\":[{\"name\":\"GaoXi\",\"email\":\"gao.xi@ileadsmart.com\",\"commits\":1}]},\"filePathRelative\":\"git.md\"}")
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
