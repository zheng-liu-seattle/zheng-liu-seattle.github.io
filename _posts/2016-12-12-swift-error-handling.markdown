---
layout: post
title: "Swift Error Handling"
date: 2016-12-4
categories:
  - iOS
description: 
image: /assets/images/xcode.jpg
image-sm: /assets/images/xcode-sm.jpg
comments: true
---

# 抛出异常

* 定义自己的异常，必须继承Error，可以通过自定义参数，传达一些信息

	``` 
	enum FetchMoneyError: Error {
		case insurricientFunds(moneyNeeded: Int)
		case notMyMoney
	}
	
	throw FetchMoneyError.insurricientFunds(moneyNeeded: 100)
	throw FetchMoneyError. notMyMoney
	```
	
# Hanlding Errors

## 向上传递异常
	```
	func canThrowErrors() throws -> String
	func cannotThrowErrors() -> String
	```
	抛出异常的function，叫做 *throwing function*
	
## Do Catch
	```
	do {
		try ...
	} catch pattern {
		...
	} catch {
		...
	}
	```
	
## Use Optional
	```
		let x = try? getMoney()
	```
	如果getMoney抛出异常，x就是nil
	
## Use !
	```
		let y = try! getMoney()
	```
	
## Cleanup Actions
	```
	defer {
		...
	}
	```
	和Java里面的final类似，不管程序怎么样，保证当前scope内最后会被执行。如果定义了多个defer，按照定义的反向顺序执行
		

	
	
	