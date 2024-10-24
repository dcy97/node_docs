---
outline: deep
next:
  text: HTTP
  link: /guide/http/http
---

## 数据库简介

# 数据库是按照数据结构来组织、存储和管理数据的仓库，它是一个长期存储在计算机内的、有组织的、可共享的数据集合。数据库技术是计算机应用技术的一个重要分支，它研究数据的存储、检索、管理和处理方法，为计算机应用系统提供数据支持。

# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

## 贡献责

本指南由 [VitePress](https://github.com/vuejs/vitepress) 生成。

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [{
  name:'vitePress',
  title: 'VitePress',
  avatar: 'https://vitejs.dev/logo.svg',
  link:'https://vitejs.dev'
  
}]


 </script>

 <VPTeamMembers size='small' :members="members" />
