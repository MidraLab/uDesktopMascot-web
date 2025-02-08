---
title: 任意のモデルを追加する方法
---

uDesktopMascot では、VRM 形式のモデルを使用してデスクトップ上にキャラクターを表示できます。

# 手順

1. モデルファイルを準備する

   - 使用したいモデルの VRM ファイルを用意してください。

2. モデルファイルを配置する

   - アプリケーションの実行ファイルと同じフォルダにある StreamingAssets フォルダを開きます。
   - StreamingAssets フォルダ内にモデルファイル（例: my_model.vrm）をコピーします。

3. モデルを指定する

   - application_settings.txt ファイルを開きます。
   - [Character]セクションの ModelPath を、追加したモデルファイル名に変更します。

[Character]
ModelPath=my_model.vrm

4. アプリケーションを再起動する

- uDesktopMascot を再起動すると、新しいモデルが表示されます。
