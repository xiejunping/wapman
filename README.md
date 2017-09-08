# wapman

#### vue 多页应用

* 基于apicloud应用开发框架，结合现在最流行的vue前端框架，打造一个体验相对完美的手机app
* 这款app是一套h5的代码适用ios，Android两个平台，而且可以在平台市场上架成功

#### 适合人群

* 对node已经管理可以玩得转了，对于构建、编译开发环境，测试环境都比较熟悉的同学
* 对vue基础比较熟悉，而且参与过至少一个vue前端开发的同学
* 项目开发有组件开发基础，了解过vuex或是redux状态管理的同学

###  安装说明
---

准备工作：<br/>

1､下载node.js。http://nodejs.cn/download/<br/>
2､安装node.js。不要更改任何 一直下一步，直到完成。<br/>
3､下载git。https://git-scm.com/downloads<br/>
4､安装git。<br/>

###  极简教程

1、在工作盘(e)根目录下，建立一个`workspace`的文件夹。<br/>
2、进入电脑的dos模式，（window win+r cmd , Mac 进入终端管理）用cd命令进入`workspace`文件夹<br/>
3、用git命令 `git clone https://github.com/xiejunping/wapman.git`下载项目代码到工作空间<br/>
4、进入项目`cd wapman`, 下载依耐模块包`npm install`。<br/>
5、如果没有提示错误，进行后面的操作 ^_^。<br/>
6、执行命令脚本`npm run dev`,本地构建http服务，自动启用浏览器调试项目。<br/>
7、执行命令脚本`npm run build`，编译源代码生成`dist`目录,代发布到apicloud应用里。<br/>


###  更新项目代码

更新可能会出现代码冲突问题，大家可以先把你项目里的`dist`目录删除再用 `git pull --rebase` 更新项目代码，更新完了直接跑会报错，因为 `pageage.json` 包里加了一些依赖，需重新执行 `npm install` 安装依赖。<br/>
祝你成功！ 如果运行报错，随时可以在群里提问 QQ群 `607631721`


###  项目构建说明
---

#### 目录

* wapman
  * build --------- 编译配置文件
  * config -------- 配置开发、生产环境
  * dist ---------- build生成上线的文件
  * src ----------- 项目源文件
    * api --------- 业务数据请求
    * base -------- 基础组件
    * common ------ 公共的方法、函数
    * components -- 业务组件
    * modules ----- 多页面
  * static -------- 静态资源
  * .babelrc ------ es6 配置文件
  * .editorconfig - eslint 配置文件
  * .eslintignore - eslint 过滤文件夹
  * .eslintrc.js -- eslint 检查规则
  * .postcssrc.js -
  * pageage.json -- node 项目管理文件
  * README.md ----- 项目说明文档

 #### 项目构成模块说明

* 请求接口方法`axios`


* 提示组件`toast`


* 对话框组件`vc-dialog`


* 列表组件`list-view`


* 滚动组件`scroll`


* 输入框组件`input-group`


* 按钮组件`vc-button`


* 加载动画组件`loader` `loader-rack`  `loading`


* 暂无数据组件`no-result`


* 搜索组件 `search`


* 页面组件 `page`


* 页头组件 `top-bar`
