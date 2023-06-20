##### bem架构 
> scss 命名规范
熟练使用bem架构编写scss文件


> 全局注册 vite.config.ts配置文件

```ts
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src/'
    }
  },
  plugins: [vue()],
  // this
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/src/style/bem.scss";`
      }
    }
  }
})
```

```scss
$namespace: 'wan' !default;
$block-sel: '-' !default;
$elem-sel: "__" !default;
$mod-sel: '--' !default;

@mixin b($value){
    $B: #{$namespace + $block-sel + $value};
    .#{$B}{
        @content;
    }
}

@mixin e($value){
    $selector: &;
    @at-root{
        #{$selector + $elem-sel + $value}{
            @content
        }
    }
}

@mixin m($value){
    $selector: &;
    @at-root{
        #{$selector + $mod-sel + $value}{
            @content
        }
    }
}
```

```html
<div class="wan-test">
    test
    <div class="wan-test__inner">
        inner
        <div class="wan-test--success">
            success
        </div>
    </div>
</div>
```

```scss
// vue style
@include b(test) {
    color: greenyellow;

    @include e(inner) {
        color: red;
    }

    @include m(success) {
        background-color: green;
    }
}

```
