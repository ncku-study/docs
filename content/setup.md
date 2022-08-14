---
title: Setup
metaTitle: Setup environment
---

# PHP 版

## pre-requirement
- PHP: 7.3.30
- Apache: 2.4.48
- Composer: 1.10.22
- Node.js: 14.17.6
- MySQL: 5.0.12

## windows: 安裝 xampp ( Apache + php + phpMyAdmin )

### Part. 1: 下載 php
1. 下載 php > 7
[( https://www.apachefriends.org/zh_tw/download.html )](https://www.apachefriends.org/zh_tw/download.html)

2. 選擇以下選項
![](https://i.imgur.com/j7KaI6V.png)

3. 開啟 Apache 和 php
![](https://i.imgur.com/aCMC8mx.png)

4. 開啟 phpMyAdmin
![](https://i.imgur.com/zt4n75f.png)

5. 新增使用者
![](https://i.imgur.com/vikxemd.png)
![](https://i.imgur.com/Vv5A1rj.png)

6. 名稱為 `nckutrans`，密碼任意
![](https://i.imgur.com/4nivKaX.png)

### Part.2 安裝 composer
https://getcomposer.org/download/
windows系統請重新開機

### Part.3 安裝 node.js LTS
https://nodejs.org/zh-tw/download/
windows系統請重新開機

### Part.4 安裝 git
#### 安裝
https://git-scm.com/downloads

#### 設定
https://git-scm.com/book/zh-tw/v2/%E9%96%8B%E5%A7%8B-%E5%88%9D%E6%AC%A1%E8%A8%AD%E5%AE%9A-Git

### Part.5 專案設定
1. Fork專案
![](https://i.imgur.com/cBIXffX.png)

2. 下載 **你 fork 的那份** 專案
```
git clone git@github.com:你的帳號/NCKU_Trans.git
```
![](https://i.imgur.com/gThzdiR.png)

3. 安裝 php 相關套件
```
composer install
```

### 備註
如果出現以下訊息
```
In PackageManifest.php line 122:

  Undefined index: name

Script @php artisan package:discover handling the post-autoload-dump event returned with error code 1
```

請執行以下指令
```
composer self-update --1
```

4. 安裝node.js相關套件
```
npm i
```

### Part.6 初始化資料庫
1. 拉取遠端 develop 分支的最新版本
```
git remote add upstream git@github.com:ncku-study/ncku-study.git
git checkout -b develop
git pull upstream develop
```

2. 複製專案中的 `.env.sample` ，重新命名貼上為 `.env` 後，把以下欄位 `=` 後改為在 phpMyAdmin 所設定的值
```
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```

3. 將 `.env` 以下欄位 `=` 後改為在你想設定的值
```
DISCORD_WEBHOOK // 請看此教學 Part.9

ADMIN_NAME=後臺介面管理員名稱
ADMIN_EMAIL=後臺介面管理員登入用 email
ADMIN_PASSWORD=後臺介面管理員登入用密碼 ( 請使用你看得懂的，不需要和 DB 密碼一樣 )
```

4. 在專案執行下面兩個指令

- 建立需要的資料表
```
php artisan migrate
```

- 建立預設的資料
```
composer dump-autoload
php artisan db:seed
```

### Part.7 開發
分別執行以下的指令後，網頁會運作在 `http://127.0.0.1:8000`

- 後端
```
php artisan serve
```

第一次執行時可能會出現以下錯誤: `RuntimeException No application encryption key has been specified.` 。請執行以下指令後，再重新執行 `php artisan serve` 即可
```
php artisan key:generate
```

- 前端
```
npm run watch
```

### Part.8 打包
```
npm run prod
```

### Part.9 ( Optional ) 取得 Discord webhook
![](https://i.imgur.com/QgpYKyy.png)
![](https://i.imgur.com/foQAhGL.png)
![](https://i.imgur.com/qAAW3Om.png)

### 常見問題
** Q: 打開 `http://127.0.0.1:8000` 一直轉圈圈？ **
1. 請確認你使用的Apache和MySQL正在運作中，且MySQL執行於3306 port。以此教學為例，請確認xampp開啟中並將Apache和MySQL設為start。

2. 查看後端回傳的錯誤訊息，若為 `In Connection.php line 1262: Class 'PDO' not found` ，請運行以下指令
```
yum install php-pdo
yum install php-pdo_mysql

service httpd restart
```


## nextjs 版
