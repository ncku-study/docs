---
title: "開發注意事項"
metaTitle: "Notice"
---

# Fork
1. 進入 [nkuc-study GitHub 主頁](https://github.com/ncku-study/ncku-study) ，點選右上角 fork 一份專案下來
2. clone 自己的那份儲存庫到本機
3. 在專案目錄下，開啟終端機
4. 加入 upstream
```shell
$ git remote add upstream git@github.com:ncku-study/ncku-study.git
```

# 開發新功能
1. 同步 upstream
```shell
$ git checkout master
$ git pull upstream master
``` 

2. 開一個新分支
```shell
$ git checkout -b branchName
```

- 註：分支名稱格式:
```
<type>/<short summary>  // e.g. feat/new-feature
```

# 提交 Pull request ( PR )
1. 將本地分支推送上 GitHub 後至 `Pull requests` 中點擊新增 PR ，選擇對應的分支及 upstream 提交
2. Assign reviewer

# Commit message
```
<type>: <short summary>
  │                   │
  │                   └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │                              
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```
https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format

# Gitflow
![](https://i.imgur.com/fsKWOjH.png)

# 專案結構
![](https://i.imgur.com/rrcpRfq.png)
