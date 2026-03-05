# LUMIÈRE - Cosmetic Brand Landing Page

**Live Demo**: https://shingo-ops.github.io/cosmetic-lp-portfolio/

## Project Overview

A modern landing page design for LUMIÈRE, a cosmetic brand focused on natural beauty enhancement.

### Links

- **Live Demo**: https://shingo-ops.github.io/cosmetic-lp-portfolio/
- **GitHub Repository**: https://github.com/shingo-ops/cosmetic-lp-portfolio

### Concept

Designed with the theme "Discover Your Natural Beauty" - bringing out the inherent beauty through natural radiance.

## 技術スタック

- HTML5
- CSS3（CSS Grid, Flexbox, CSS Variables, Animations）
- Vanilla JavaScript（Intersection Observer API, Smooth Scroll）

## デザイン特徴

### カラースキーム
- **プライマリカラー**: ソフトピンク (#FFE4E9)
- **アクセントカラー**: ゴールド (#D4AF37)
- **テキスト**: ダークグレー (#333333)
- **背景**: ホワイト、クリーム

### レイアウト構成
1. **Hero Section** - メインビジュアル + キャッチコピー
2. **About** - ブランドストーリー
3. **Features** - 3つの特徴（スキンケア成分、長時間持続、低刺激処方）
4. **Products** - 商品ラインナップ
5. **Reviews** - お客様の声
6. **CTA** - 購入促進セクション
7. **Footer** - 企業情報

### 実装機能
- レスポンシブデザイン（モバイル、タブレット、デスクトップ対応）
- スクロールアニメーション（Intersection Observer API）
- スムーススクロール
- ホバーエフェクト（3D変形、カード浮遊効果）
- パララックス効果
- リップルエフェクト（ボタンクリック時）
- スタガーアニメーション（順次表示）

## 画像について

本サイトは**Unsplash**のフリー素材を使用しています。
すべての画像は商用利用可能で、クレジット表記不要のライセンスです。

使用している画像：
- Hero画像: 化粧品ボトル（Unsplash提供）
- About画像: ブランドコンセプト（Unsplash提供）
- 商品画像: クッションファンデーション、リップティント、アイシャドウパレット（Unsplash提供）

### 画像の差し替え方法

画像を差し替える場合は、以下のフリー素材サイトをご利用ください。

### おすすめフリー素材サイト

1. **Unsplash** (https://unsplash.com/)
   - 高品質な写真素材
   - 商用利用可能
   - 検索例: "cosmetics", "makeup", "beauty"

2. **Pexels** (https://www.pexels.com/)
   - 無料の写真・動画素材
   - クレジット表記不要

3. **Pixabay** (https://pixabay.com/)
   - 写真・イラスト・動画
   - 商用利用可能

### 画像サイズ推奨

- **Hero Image**: 800x500px
- **About Image**: 600x400px
- **Product Images**: 400x300px

### 画像の配置方法

1. `images/` フォルダに画像を保存
2. CSSまたはHTMLで以下のように置き換え

```css
/* CSS での置き換え例 */
.hero-image-placeholder {
    background-image: url('../images/hero-image.jpg');
    background-size: cover;
    background-position: center;
}
```

または

```html
<!-- HTML での置き換え例 -->
<div class="hero-image">
    <img src="images/hero-image.jpg" alt="LUMIÈRE メインビジュアル">
</div>
```

## ファイル構成

```
cosmetic-lp/
├── index.html          # メインHTML
├── style.css           # スタイルシート
├── script.js           # JavaScript
├── README.md           # このファイル
└── images/             # 画像フォルダ（空）
```

## ローカルでの実行方法

1. このフォルダをブラウザで開く
```bash
# ディレクトリに移動
cd 02_apps/03_dev_projects/portfolio/cosmetic-lp

# ローカルサーバーを起動（Python 3の場合）
python3 -m http.server 8000

# ブラウザで以下にアクセス
# http://localhost:8000
```

2. または、index.htmlを直接ブラウザにドラッグ&ドロップ

## カスタマイズ方法

### ブランド名の変更
`index.html` と `style.css` で「LUMIÈRE」を検索して置き換えてください。

### カラースキームの変更
`style.css` の `:root` セクションで色変数を変更できます。

```css
:root {
    --color-primary: #FFE4E9;      /* メインカラー */
    --color-accent: #D4AF37;       /* アクセントカラー */
    --color-text: #333333;         /* テキストカラー */
}
```

### フォントの変更
Google Fontsを使用しています。`index.html` のheadセクションで変更可能です。

## Features

Built with modern web technologies:
- Responsive design for all devices
- Smooth scroll animations
- Interactive hover effects
- Performance optimized

## License

MIT License - Free to use and modify for your own projects.

## Design References

- Modern cosmetic brand landing page patterns
- Contemporary web design best practices
- User experience focused layout
