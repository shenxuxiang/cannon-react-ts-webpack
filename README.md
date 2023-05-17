# npm run dev
启动开发服务器

# npm run build
构建打包

# env.json
env.json 文件未项目提供环境变量，你可以通过 process.env[key] 的形式进行反问，在生产构建时会直接被替换成字符串。

该文件中定义的环境变量在开发和生产构建时通用。

## env.[mode].json
mode 可以是 development、也可以是 production。

env.development.json、env.production.json 分别表示开发环境的环境变量配置，生产环境的环境变量配置。

webpack 会根据当前环境自动加载这些配置文件，env.[mode].json 会覆盖 env.json 中的环境变量配置。



# 项目目录
```shell
.
├─babel.config.cjs     babel 配置
├─postcss.config.cjs   postcss 配置
└─src
│   ├─components       组件
│   ├─pages            页面
│   │  user              案例1
│   │  │  ├─user-list
│   │  │  └─role-list
│   │  ├─home            案例2
│   │  └─login           登录页面
│   ├─models           数据模型
│   │  ├─index           公共数据模型
│   │  ├─home            home页面的数据
│   │  └─login           login页面的数据
│   ├─routers          项目路由
│   ├─redux            redux 数据状态管理
│   ├─assets           静态文件
│   │  └─images
│   ├─assets           mock 数据
│   ├─global.d.ts      公共ts类型定义
│   └─utils            基础工具包
├─ env.json          环境变量定义文件（webpack 构建时，env 是一个 json 文件）
├─ public
├─ config            webpack 配置（vite 构建时，配置文件是以 vite.config.ts 文件的形式存在）
├─ tsconfig.json     ts 配置
├─ .eslintrc.yml     eslint 配置
├─ .prettierrc.cts   prettier 配置
├─ .gitignore        git忽略配置
└─ eidtorconfig
```

