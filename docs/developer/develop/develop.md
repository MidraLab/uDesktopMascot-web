---
id: develop
title: 開発ガイド
---

# 開発ガイド

uDesktopMascot は、デスクトップマスコットを作成・カスタマイズするための Unity ベースのプロジェクトです。  
このプロジェクトを通じて、誰でも自由にマスコットを作成し、共有できることを目指しています！  
自由にカスタマイズして楽しむだけでなく、ぜひプロジェクトに貢献してください。
どんどん開発して、X にて発信していただけると嬉しいです！

---

## プロジェクトへの貢献

問題点や新機能の開発は、大歓迎です！
どんどん Issue 起票、PR お願いします。

### 問題点を報告

- こちらの[Issues タブ](https://github.com/MidraLab/uDesktopMascot/issues)にアクセス
- 「New Issue」をクリックし、内容を記載
- 「Labels」から起票する Issue の種類を選択。（例：`bug`）
- 「Create Issue」をクリックして作成。

### PR する

- `develop`ブランチをベースに新規ブランチを作成してください。
- develop ブランチに PR お願いします。
- ブランチについては、[こちら](#バージョン管理)をご参照ください。

## 開発環境のセットアップ

### 必要なツール

- Unity 6000.0.31f1(IL2CPP)
- Git

### 初期セットアップ

1. Unityhub から Unity 6000.0.31f1(IL2CPP)をインストール
2. リポジトリをクローン。
   ```bash
   git clone https://github.com/MidraLab/uDesktopMascot.git
   ```
3. Unity Hub でプロジェクトを開くリポジトリを追加
4. 開いて、開発を始めてください！

### バージョン管理

- **ブランチモデル**:
  - `main`: 安定したリリース版。
  - `develop`: 開発中の最新コード。
  - 機能ごとのブランチを作成（例: `feature/add-animation`、`fix/add-animation`）。

## クラス設計

- 詳細な設計は現在作成中です
