

## 创建项目---构建Vue脚手架
### vite构建项目
```
npm init vite@latest
```

### 用Vue脚手架构建项目【区别：会比vite配置要更详细，专门定制vue】
```
npm init vue@latest
```

######vite-env.d.ts 声明文件扩充
配置 让ts认识.vue后缀的文件
默认没有 【有疑问】
```
declare module '*.vue' {
    import type { DefineComponent } from "vue"
    const component:DefineComponent<{},{},any>
    export default component
}
```

### 插件使用vue3
vue Language Features(volar)
TypeScript Vue Plugin(volar)
##### 禁用vue2
vetur