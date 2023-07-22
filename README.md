
# Intro

取自于官方仓库的runtime，可以用于本地化调试laf云函数。最佳实践是 本地调试 + VScode插件(待完善)

此仓库本质上是express + mongodb， 路由取自数据库 __functions__ 里面的文档 `name` 

也可以直接跑docker镜像服务

# 依赖条件

此应用开发依赖于mongoDB，为了保留和官方一致，这个需要mongoDB副本集. 
TIPS: 可以设置远程mongodb，也可以本地自己起mongo服务


# Development

```
npm run build
npm run start

# 依赖安装(可选)
npm run init 
```
更多信息请查看 package.json

## 设置环境变量

.env 设置环境变量  


## 挂载本地文件调试

在 src/functions文件下 (文件夹可以自己定义) 新增云函数文件，内容可以直接复制调试
改动地方：
1.support/function-engine invoke 方法内部
2.tsconfig.json 

调试模式可以分为两种，本地调试和远程调试
目前此仓库可以实现本地调试 + 远程数据库，后期可以扩展远程调试 laf应用


1. 本地调试使用文件模式调试，直接在functions文件夹新建文件 设置环境变量为 `LOCAL_DEBUG = true`
2. 本地调试使用数据库模式调试 设置环境变量为 `LOCAL_DEBUG = false`  切记 APPID 要和数据库的 name一致

## 扩展
如需要可视化前端，需要自行前端页面扩展

## 已知问题
如开发本地文件模式，必须在数据库新增一个对应的name，否则报错 Function Not Found

## 推荐

[Art QR艺术二维码](https://hysli.cn)