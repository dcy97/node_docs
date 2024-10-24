import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小...坏@蛋",
  description: "人民万岁",
  outDir: "docs", // 打包输出目录
  base: "/docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/database/database" },
    ],

    sidebar: [
      {
        text: "简介",
        items: [
          {
            text: "数据库",
            link: "/guide/database/database",
          },
          { text: "http", link: "/guide/http/http" },
        ],
      },
    ],

    //搜索
    search: {
      provider: "local",
    },
    //修改页脚
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    lastUpdated: {
      text: "更新时间",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "short",
      },
    },
    //页脚
    footer: {
      message: "Made with ❤️ by 小燚cy",
      copyright: "Copyright © 2022-2023 小燚cy",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
