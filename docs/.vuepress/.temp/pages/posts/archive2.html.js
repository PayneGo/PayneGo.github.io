import comp from "/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/archive2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/archive2.html\",\"title\":\"Archive Article2\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"1998-01-02T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"WWII\"],\"archive\":true},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1709882408000,\"contributors\":[{\"name\":\"GaoXi\",\"email\":\"gao.xi@ileadsmart.com\",\"commits\":1}]},\"filePathRelative\":\"posts/archive2.md\"}")
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
