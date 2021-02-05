module.exports = {
    publicPath:process.env.NODE_ENV === "production" ? "" : "/",
    // 打包路径
    outputDir:process.env.NODE_ENV === "production" ? "dist" : "devdist",
    //语法检查开关
    lintOnSave: true,
    //样式文件配置
    css: {
        loaderOptions: {
            // // 给 sass-loader 传递选项
            // sass: {
            //     // @/ 是 src/ 的别名
            //     // 所以这里假设你有 `src/variables.sass` 这个文件
            //     // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
            //     prependData: `@import "~@/variables.sass"`
            // },
            // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
            // 因为 `scss` 语法在内部也是由 sass-loader 处理的
            // 但是在配置 `prependData` 选项的时候
            // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
            // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
            scss: {
                prependData: `@import "./src/styles/main.scss";`
            },
            // 给 less-loader 传递 Less.js 相关选项
            // less: {
            //     // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
            //     // `primary` is global variables fields name
            //     globalVars: {
            //         primary: '#fff'
            //     }
            // }
        }
    }
}