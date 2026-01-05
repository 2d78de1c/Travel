# TravelEase 旅游网站

这是一个现代化的旅游网站，使用Vue 3和TypeScript构建，提供旅游目的地展示、服务介绍等功能。

## 项目特性

- 响应式设计，支持移动设备
- 现代化的用户界面
- 清晰的信息架构
- 模块化组件设计

## 技术栈

- Vue 3 (Composition API)
- TypeScript
- Vite 构建工具
- CSS3

## 项目结构

```
src/
├── components/
│   ├── Header.vue      # 网站头部导航
│   ├── Hero.vue        # 首页横幅
│   ├── Destinations.vue # 热门目的地
│   ├── Features.vue    # 服务特色
│   ├── Testimonials.vue # 客户评价
│   └── Footer.vue      # 网站页脚
└── App.vue             # 主应用组件
```

## 安装与运行

1. 确保已安装 Node.js (v18.0 或更高版本)
2. 安装项目依赖:
   ```bash
   npm install
   ```
3. 启动开发服务器:
   ```bash
   npm run dev
   ```
4. 在浏览器中访问 `http://localhost:5173` (或自动分配的其他端口)

## 构建生产版本

```bash
npm run build
```

## 项目截图

![旅游网站截图](./src/assets/screenshot.png) <!-- 如果您添加了截图 -->

## 功能模块

- 首页横幅展示
- 热门旅游目的地展示
- 服务特色介绍
- 客户评价展示
- 响应式导航
- 页脚信息

## 自定义开发

您可以根据需要修改以下内容：

- 在 [Destinations.vue](./src/components/Destinations.vue) 中添加更多旅游目的地
- 在 [Features.vue](./src/components/Features.vue) 中添加新的服务项目
- 修改颜色主题和样式
- 添加更多页面如联系表单、预订系统等

## 许可证

MIT