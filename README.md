# koa2-api-ts-boilerplate

项目是一个基于koa2框架开发的api接口模板

## 目录结构

```
├── src                         # 源码路径
│   ├── config                  # 服务配置项
│   │   ├── env                 # 环境的具体配置
│   │   │   ├── development.ts
│   │   │   └── production.ts
│   │   ├── common.ts           # 公共配置
│   │   ├── index.ts            # 配置入口-出口配置根据环境和共享   
│   ├── modules
│   │   ├── init                # 项目初始化
│   │   │   ├── controller.ts   # 初始化控制器
│   │   │   └── router.ts       # 初始化路由
│   │   └── article             # 项目路由案例
│   │       ├── controller.ts   # 控制器
│   │       └── router.ts       # 路由
│   ├── models                  # 数据库模型方法
│   │   └── article.ts          # 数据模型案例
│   ├── middleware              # 自定义中间件
│   │   └── auth.ts             # 验证中间价
│   │   └── error.ts            # 错误中间件
│   └── utils
│       └── db.ts               # 数据库连接
│       └── index.ts            # util 输出口     
└── tsconfig.json               # tsc编译配置
```

### 命令
```
npm run start              //启动项目
npm run build              //ts编译成js
npm run watch              //监听ts文件并编译成js文件
npm run docs               //生成api文档 
```