import comp from "/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/article2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article2.html\",\"title\":\"Article 2\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-01-02T00:00:00.000Z\",\"category\":[\"CategoryA\"],\"tag\":[\"tag A\",\"tag B\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1709882408000,\"contributors\":[{\"name\":\"GaoXi\",\"email\":\"gao.xi@ileadsmart.com\",\"commits\":1}]},\"filePathRelative\":\"posts/article2.md\"}")
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
