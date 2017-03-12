---
layout: post
title: "NSURLSession"
date: 2017-1-5
categories:
  - iOS
description: 
image: /assets/images/xcode.jpg
image-sm: /assets/images/xcode-sm.jpg
comments: true
---

### Session的类型

* Default 普通的session，缓存存在IO上面，密钥存在keychain里面
* Ephemeral 一次性的session，所有的缓存存在内存，当程序shut down的时候，都没啦
* Background 和Default类似，但是有一个单独的进程去处理数据转化

### Task的类型

* Data 发送和接收NSData object，也是最常见的
* Download 下载文件，支持后台下载
* Upload 上传文件，支持后台上传



