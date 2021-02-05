module.exports = {
    publicPath:process.env.NODE_ENV === "production" ? "" : "/",
    // 打包路径
    outputDir:process.env.NODE_ENV === "production" ? "dist" : "devdist",
    //语法检查开关
    lintOnSave: true

}