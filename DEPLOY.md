# 网站公开发布（可分享链接）

## 方案 A：GitHub Pages（推荐）
1. 在 GitHub 新建仓库。
2. 把当前目录 `/Users/liyuzhi/Downloads/website` 推送到仓库的 `main` 分支。
3. 在仓库 `Settings -> Pages` 中将 `Build and deployment` 设为 `GitHub Actions`。
4. 推送后会自动执行 `.github/workflows/deploy-pages.yml`。
5. 发布完成后，分享链接格式：
   - `https://<你的GitHub用户名>.github.io/<仓库名>/`

## 方案 B：Netlify
1. 在 Netlify 新建站点并连接该仓库。
2. Netlify 会自动读取 `netlify.toml`，发布目录是 `猫目录`。
3. 部署完成后可直接分享 Netlify 域名。

## 方案 C：Vercel
1. 在 Vercel 导入该仓库。
2. Vercel 会读取 `vercel.json`，输出目录是 `猫目录`。
3. 部署完成后可直接分享 Vercel 域名。
