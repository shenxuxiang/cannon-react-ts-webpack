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
