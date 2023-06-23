

## 创建项目---构建Vue脚手架
### vite构建项目
```
npm init vite@latest
```

### 用Vue脚手架构建项目【区别：会比vite配置要更详细，专门定制vue】
```
npm init vue@latest
```

###### env.d.ts 声明文件扩充
找不到模块: 解决
配置 让ts认识.vue后缀的文件
默认没有 【有疑问】
```js
declare module '*.vue' {
    import type { DefineComponent } from "vue"
    const component:DefineComponent<{},{},any>
    export default component
}
    // 在tsconfig.json compilerOptions属性添加 
    "baseUrl": "./",// 解析非相对模块的基础地址，默认是当前目录
    "paths": {
    // 路径映射，相对于baseUrl
      "@/*":["src/*"]
    }
    // 在tsconfig.json include属性引入 'env.d.ts'
   "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue","env.d.ts"],
```




### 插件使用vue3
vue Language Features(volar)
TypeScript Vue Plugin(volar)
##### 禁用vue2
vetur