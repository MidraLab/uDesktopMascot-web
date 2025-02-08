---
title: メニュー画面の背景画像と背景色を変更する方法
---

uDesktopMascot では、メニュー画面の背景画像や背景色をカスタマイズすることができます。

# 手順

カスタム画像や色を準備する

- メニュー背景に使用したい画像ファイル（対応フォーマットは下記参照）を用意してください。
- 色を指定する場合は、カラーコード（例: #FFFFFF）を用意してください。

画像ファイルを配置する

1. アプリケーションの StreamingAssets フォルダを開きます。
2. 画像ファイルを以下のように配置します:
   - メニューの背景画像の場合:
     - StreamingAssets フォルダ内に画像ファイルを配置します。
       - 例: MenuBackground.png

application_settings.txt ファイルを編集する

application_settings.txt ファイルを開きます。

以下の設定セクションを追加または編集します。

[MenuUI]
BackgroundColor=#333333 ; メニュー背景の色（カラーコード）
BackgroundImagePath=MenuBackground.png ; メニュー背景の画像ファイルパス

**注意点:**

- `BackgroundColor`は省略可能です。指定しない場合、デフォルトの色が使用されます。
- `BackgroundImagePath`は、StreamingAssets フォルダからの相対パスで指定します。
- カラーコードは`#RRGGBB`または`#RRGGBBAA`の形式で指定します。

アプリケーションを再起動する

uDesktopMascot を再起動すると、メニュー画面の外観が変更されます。

**補足情報**

画像形式について

- 使用できる画像形式は、以下の通りです:

  対応している画像フォーマット:

  - PNG
  - JPEG
  - BMP
  - TIFF
  - TGA
  - GIF（静止画のみ）
  - WEBP（Unity 2021.2 以降）

- 透過を扱いたい場合は、`.png`形式を使用してください。

カラーコードについて

- カラーコードは、16 進数のカラーコード（例: `#FF0000`）を使用してください。
- 不透明度（アルファ値）を指定したい場合は、`#RRGGBBAA`の形式で指定します（例: `#FF000080`は 50%の透明度の赤色）。

画像ファイルの配置例

- メニュー背景画像: `StreamingAssets/MenuBackground.png`

設定の例

- メニュー背景を白色に設定し、背景画像を指定しない場合:

  [MenuUI]
  BackgroundColor=#FFFFFF
  BackgroundImagePath=
