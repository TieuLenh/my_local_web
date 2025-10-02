**download babel**: `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loader`
**download webpack**: `npm install --save-dev webpack webpack-cli webpack-dev-server`

# 🔹 1. **Webpack**

* **`development` mode**

  * Source map: đầy đủ (`eval-source-map`) để dễ debug.
  * Code không bị nén, đặt tên biến giữ nguyên.
  * Thường dùng **webpack-dev-server** → output lưu trong memory.
  * HMR (hot reload) hoạt động.

* **`production` mode**

  * Minify, tree-shaking, loại bỏ code chết.
  * Không có source map (hoặc rút gọn).
  * Output build thật ra `dist/` → deploy được.
  * Tối ưu performance, nhưng build chậm hơn dev.

* **`none` mode**

  * Không apply bất kỳ tối ưu mặc định nào.
  * Giữ cấu hình "thô" → chỉ nên dùng khi bạn muốn tự config 100%.

---

# 🔹 2. **Vite**

* **`vite dev` (Development mode)**

  * Không build ra bundle.
  * Dùng **ESM native** + **esbuild** → chỉ compile file bạn import.
  * Siêu nhanh khi start project và hot reload.
  * File được serve từ bộ nhớ + compile on-demand.

* **`vite build` (Production mode)**

  * Build toàn bộ project bằng **Rollup**.
  * Xuất ra `dist/` với code minify, tree-shaking.
  * Output tĩnh để deploy.

* **`vite preview`**

  * Chạy thử production build trên local (serve file từ `dist/`) để test trước khi deploy.

---

# 🔹 3. **Create React App (CRA)**

* **`npm start`**

  * Thực chất là chạy **webpack-dev-server** với `development mode`.
  * Bundle trong memory, hot reload, source map đầy đủ.
* **`npm run build`**

  * Tương đương **webpack production build**.
  * Xuất ra `build/` với code minify, tối ưu cho deploy.

---

# 🔹 4. **Next.js**

* **`next dev`**

  * Dev server, hot reload, React Fast Refresh (giữ state khi reload).
  * Code chạy trong memory, compile theo page bạn mở.
* **`next build`**

  * Build production ra `.next/`.
  * Tối ưu SSR/SSG, tree-shaking, minify.
* **`next start`**

  * Serve production build từ `.next/` như khi deploy.

---

# 🔹 5. **So sánh tổng quan**

| Tool / Mode | Dev mode (serve)                       | Prod build                    | Prod serve                   | Output                      |
| ----------- | -------------------------------------- | ----------------------------- | ---------------------------- | --------------------------- |
| **Webpack** | `webpack serve` → build vào memory     | `webpack build` → dist/       | Tùy server (Express, nginx…) | Memory (dev), dist (prod)   |
| **Vite**    | `vite dev` → compile on-demand, memory | `vite build` → dist/ (Rollup) | `vite preview`               | Memory (dev), dist (prod)   |
| **CRA**     | `npm start` → webpack-dev-server       | `npm run build` → build/      | `serve -s build`             | Memory (dev), build/ (prod) |
| **Next.js** | `next dev` → dev server + fast refresh | `next build` → .next/         | `next start`                 | Memory (dev), .next/ (prod) |

---

📌 **Kết luận**:

* **Dev mode**: luôn chạy trong memory hoặc compile on-demand để **nhanh + hot reload**.
* **Prod mode**: luôn tạo file tĩnh để deploy.
* Khác nhau chủ yếu ở **cơ chế dev server**:

  * Webpack = build toàn bộ rồi serve từ memory.
  * Vite = compile on-demand → nhanh hơn với project lớn.
  * CRA = wrapper của Webpack, giống Webpack dev server.
  * Next.js = hybrid: compile theo page, hỗ trợ SSR/SSG.

---

