import {
  computed,
  readonly,
  shallowRef
} from "./chunk-3DXR62HT.js";

// docs/.vuepress/.temp/blog/category.js
var categoriesMap = { "category": { "/": { "path": "/category/", "map": { "History": { "path": "/category/history/", "indexes": [0, 1] }, "CategoryA": { "path": "/category/categorya/", "indexes": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] }, "CategoryB": { "path": "/category/categoryb/", "indexes": [2, 3, 4, 5, 6, 7, 8, 10, 11, 12] }, "CategoryC": { "path": "/category/categoryc/", "indexes": [14, 15] } } } }, "tag": { "/": { "path": "/tag/", "map": { "WWI": { "path": "/tag/wwi/", "indexes": [1] }, "WWII": { "path": "/tag/wwii/", "indexes": [0] }, "tag A": { "path": "/tag/tag-a/", "indexes": [5, 6, 7, 8, 9, 13] }, "tag B": { "path": "/tag/tag-b/", "indexes": [5, 6, 7, 8, 9, 13] }, "tag C": { "path": "/tag/tag-c/", "indexes": [2, 3, 4, 10, 11, 12] }, "tag D": { "path": "/tag/tag-d/", "indexes": [2, 3, 4, 10, 11, 12] }, "tag E": { "path": "/tag/tag-e/", "indexes": [14, 15] } } } } };
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}
if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap: categoriesMap2 }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap2);
  });

// docs/.vuepress/.temp/blog/store.js
var store = ["/posts/archive2.html", "/posts/archive1.html", "/posts/article9.html", "/posts/article8.html", "/posts/article7.html", "/posts/article6.html", "/posts/article5.html", "/posts/article4.html", "/posts/article3.html", "/posts/article2.html", "/posts/article12.html", "/posts/article11.html", "/posts/article10.html", "/posts/article1.html", "/posts/sticky2.html", "/posts/sticky.html"];

// node_modules/.pnpm/@vuepress+plugin-blog@2.0.0-rc.18_vuepress@2.0.0-rc.8/node_modules/@vuepress/plugin-blog/lib/client/composables/useBlogCategory.js
import { resolveRoute, usePageData, usePageFrontmatter, useRouteLocale } from "vuepress/client";
var categoryMapRef = shallowRef(categoriesMap);
var blogCategoryMap = readonly(categoryMapRef);
var useBlogCategory = (key) => {
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  const routeLocale = useRouteLocale();
  return computed(() => {
    var _a;
    const mapKey = key ?? ((_a = frontmatter.value.blog) == null ? void 0 : _a.key) ?? "";
    if (!mapKey) {
      console.warn(`useBlogCategory: key not found`);
      return { path: "/", map: {} };
    }
    if (!categoryMapRef.value[mapKey])
      throw new Error(`useBlogCategory: key ${mapKey} is invalid`);
    const currentMap = categoryMapRef.value[mapKey][routeLocale.value];
    const result = {
      path: currentMap.path,
      map: {}
    };
    for (const category in currentMap.map) {
      const categoryMap = currentMap.map[category];
      result.map[category] = { path: categoryMap.path, items: [] };
      for (const index of categoryMap.indexes) {
        const { path, meta } = resolveRoute(store[index]);
        result.map[category].items.push({
          path,
          info: __BLOG_META_SCOPE__ === "" ? meta : meta[__BLOG_META_SCOPE__]
        });
      }
      if (page.value.path === categoryMap.path)
        result.currentItems = result.map[category].items;
    }
    return result;
  });
};
if (__VUEPRESS_DEV__ && (import.meta.webpackHot || import.meta.hot))
  __VUE_HMR_RUNTIME__.updateBlogCategory = (categoriesMap2) => {
    categoryMapRef.value = categoriesMap2;
  };

// docs/.vuepress/.temp/blog/type.js
var typesMap = { "article": { "/": { "path": "/article/", "indexes": [14, 15, 10, 11, 12, 2, 3, 4, 5, 6, 7, 8, 9, 13] } }, "timeline": { "/": { "path": "/timeline/", "indexes": [10, 11, 12, 2, 3, 4, 5, 6, 7, 8, 9, 13, 15, 14, 0, 1] } } };
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}
if (import.meta.hot)
  import.meta.hot.accept(({ typesMap: typesMap2 }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap2);
  });

// node_modules/.pnpm/@vuepress+plugin-blog@2.0.0-rc.18_vuepress@2.0.0-rc.8/node_modules/@vuepress/plugin-blog/lib/client/composables/useBlogType.js
import { resolveRoute as resolveRoute2, usePageFrontmatter as usePageFrontmatter2, useRouteLocale as useRouteLocale2 } from "vuepress/client";
var typeMapRef = shallowRef(typesMap);
var blogTypeMap = readonly(typeMapRef);
var useBlogType = (key) => {
  const frontmatter = usePageFrontmatter2();
  const routeLocale = useRouteLocale2();
  return computed(() => {
    var _a;
    const mapKey = key ?? ((_a = frontmatter.value.blog) == null ? void 0 : _a.key) ?? "";
    if (!mapKey) {
      console.warn(`useBlogType: key not found`);
      return { path: "/", items: [] };
    }
    if (!typeMapRef.value[mapKey])
      throw new Error(`useBlogType: key ${key} is invalid`);
    const configMap = typeMapRef.value[mapKey][routeLocale.value];
    const result = {
      path: configMap.path,
      items: []
    };
    for (const index of configMap.indexes) {
      const { path, meta } = resolveRoute2(store[index]);
      result.items.push({
        path,
        info: __BLOG_META_SCOPE__ === "" ? meta : meta[__BLOG_META_SCOPE__]
      });
    }
    return result;
  });
};
if (__VUEPRESS_DEV__ && (import.meta.webpackHot || import.meta.hot))
  __VUE_HMR_RUNTIME__.updateBlogType = (typesMap2) => {
    typeMapRef.value = typesMap2;
  };
export {
  blogCategoryMap,
  blogTypeMap,
  useBlogCategory,
  useBlogType
};
//# sourceMappingURL=@vuepress_plugin-blog_client.js.map
