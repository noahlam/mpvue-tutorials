## 关于升级 mpvue 2.0 改动通知

最近经常收到项目无法运行的反馈，经排查发现大部分原因是相关依赖版本不对导致的，索性直接升级到 2.0.

2.0  提供了不少新特性, 具体参考官方文档 https://github.com/Meituan-Dianping/mpvue/releases/tag/2.0.0

### 使用教程

第一步 克隆项目到本地

    git clone https://github.com/noahlam/mpvue-tutorials.git

第二步 安装项目依赖

    // 前提肯定是要进入项目目录啦 cd mpvue-tutorials
    npm i

第三步 打开你的微信开发者工具，新建一个小程序，项目目录指向`mpvue-tutorials/dist/wx`,没有这个目录的话，就自己建一个


第四步 启动开发环境，并监控文件改动，实时编译

    npm run dev

第五步 在`src/pages`目录下添加或者改动页面，查看效果
如果是添加页面，需要在 `src/main.js` 里面添加对应的路由

### 发布项目
    npm run build
打包的文件，跟` npm run dev`一样，也是放在`mpvue-tutorials/dist/wx`中，同时，发布的是需要注意以下几点
1. 如果之前有 `npm run dev` 那么在发布之前，请先停止dev。
2. 如果打包之后，控制台有报错，请关闭微信开发者工具的 es6代码转换，代码压缩。

