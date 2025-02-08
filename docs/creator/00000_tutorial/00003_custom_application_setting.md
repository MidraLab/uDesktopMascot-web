---
title: application_settings.txtで設定を変更する方法
---

application_settings.txt ファイルを編集することで、キャラクターの表示やアプリの動作をカスタマイズできます。

# 手順

1. 設定ファイルを開く

- アプリケーションの実行ファイルと同じフォルダにある application_settings.txt ファイルをテキストエディタで開きます。

2. 設定を変更する

- 必要に応じて以下の設定を変更します。

[Character]
ModelPath=default.vrm ; 使用するモデルファイル名
Scale=3 ; キャラクターの大きさ（倍率）
PositionX=0 ; X 座標位置
PositionY=0 ; Y 座標位置
PositionZ=0 ; Z 座標位置
RotationX=0 ; X 軸の回転角度
RotationY=0 ; Y 軸の回転角度
RotationZ=0 ; Z 軸の回転角度

[Sound]
VoiceVolume=1 ; ボイスの音量（0 ～ 1）
BGMVolume=0.5 ; BGM の音量（0 ～ 1）
SEVolume=1 ; 効果音の音量（0 ～ 1）

[Display]
Opacity=1 ; キャラクターの透明度（0 ～ 1）
AlwaysOnTop=True ; 常に前面に表示するか（True/False）

[Performance]
TargetFrameRate=60 ; フレームレート設定
QualityLevel=2 ; クオリティ設定（0:低～ 5:高）

3. 設定を保存する

- 編集内容を保存します。

4. アプリケーションを再起動する

- uDesktopMascot を再起動すると、設定が反映されます。
