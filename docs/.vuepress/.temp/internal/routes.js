export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello VuePress"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/git.html", { loader: () => import(/* webpackChunkName: "git.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/git.html.js"), meta: {"title":"页面的标题"} }],
  ["/posts/archive1.html", { loader: () => import(/* webpackChunkName: "archive1.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/archive1.html.js"), meta: {"title":"Archive Article1"} }],
  ["/posts/archive2.html", { loader: () => import(/* webpackChunkName: "archive2.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/archive2.html.js"), meta: {"title":"Archive Article2"} }],
  ["/posts/article1.html", { loader: () => import(/* webpackChunkName: "article1.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/article1.html.js"), meta: {"title":"Article 1"} }],
  ["/posts/article10.html", { loader: () => import(/* webpackChunkName: "article10.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/article10.html.js"), meta: {"title":"Article 10"} }],
  ["/posts/article11.html", { loader: () => import(/* webpackChunkName: "article11.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/article11.html.js"), meta: {"title":"Article 11"} }],
  ["/posts/article12.html", { loader: () => import(/* webpackChunkName: "article12.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/article12.html.js"), meta: {"title":"Article 12"} }],
  ["/posts/article2.html", { loader: () => import(/* webpackChunkName: "article2.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/article2.html.js"), meta: {"title":"Article 2"} }],
  ["/posts/article3.html", { loader: () => import(/* webpackChunkName: "article3.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/article3.html.js"), meta: {"title":"Article 3"} }],
  ["/posts/article4.html", { loader: () => import(/* webpackChunkName: "article4.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/article4.html.js"), meta: {"title":"Article 4"} }],
  ["/posts/article5.html", { loader: () => import(/* webpackChunkName: "article5.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/article5.html.js"), meta: {"title":"Article 5"} }],
  ["/posts/article6.html", { loader: () => import(/* webpackChunkName: "article6.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/article6.html.js"), meta: {"title":"Article 6"} }],
  ["/posts/article7.html", { loader: () => import(/* webpackChunkName: "article7.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/article7.html.js"), meta: {"title":"Article 7"} }],
  ["/posts/article8.html", { loader: () => import(/* webpackChunkName: "article8.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/article8.html.js"), meta: {"title":"Article 8"} }],
  ["/posts/article9.html", { loader: () => import(/* webpackChunkName: "article9.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/article9.html.js"), meta: {"title":"Article 9"} }],
  ["/posts/sticky.html", { loader: () => import(/* webpackChunkName: "sticky.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/sticky.html.js"), meta: {"title":"Sticky Article"} }],
  ["/posts/sticky2.html", { loader: () => import(/* webpackChunkName: "sticky2.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/posts/sticky2.html.js"), meta: {"title":"Sticky Article with Higher Priority"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/payne/vue/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
