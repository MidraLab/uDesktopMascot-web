---
title: ページの追加方法
---

# ページの追加方法

## 単一ページの場合

- `docs/creater` または`docs/developer`に追加したいファイルを作成

## 複数ページを一つのセクションにまとめたい場合

- `docs/creater` に任意のフォルダを作成（例：`docs/creater/site_add`
- 複数のマークダウンファイルを配置
- 以下のコードが記載された`_category_.json`ファイルを追加する

```
{
  "label": "サイトの追加",
  "position": 1,
  "link": {
    "type": "generated-index",
    "description": "サイトの追加する方法です。"
  }
}

```
