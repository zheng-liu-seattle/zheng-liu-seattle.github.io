---
layout: post
title: "Why I love Swift protocol extension"
date: 2016-12-31
categories:
  - iOS
description: 
image: /assets/images/xcode.jpg
image-sm: /assets/images/xcode-sm.jpg
comments: true
---

## Swift 是一个Protocol Oriented Programming Language

Swift 从一开始，就强调了这是一个面向protocol的语言，之前一直没有理解，但是当在工作中用到了protocol extension以后，才终于理解了。

protocol extension解决了面向对象一直没有解决的问题，在单继承的情况下，总有一些子类会继承没有用的方法，举个例子更明白些：

```swift
class Dog: Mammal {
	
}
class Mammal {
	func breathe() {
        ...
    }
}
```

看上去是正确的OO设计，狗是哺乳动物，因为所有的哺乳动物都可以呼吸，所以狗继承哺乳类，是天经地义的。但是如果这个时候PM跑过来说，我们想要狗能实现'run'这个方法，那应该在哪里实现呢？如果在'Mammal class'实现，那么'whale class'就会有问题，因为鲸鱼是哺乳动物，但是不会跑，那如果在'dog class'实现，那么'cat class'呢？难道也要实现一遍？我们既要遵守DRY(Don't repeat yourself)的原则，那么多半程序员会实现一个helper class，或者还是写在'Mammal class'里面，只是保证'whale class'不掉用'run()'。

看上去很搞笑，是不是？但是这是现在OO设计中的一个现实存在的问题，很多程序不得不妥协，让子类继承了很多无用的方法。那么我们接下来看看如果用'protocol extenssion'又该如何优雅的解决呢？

```swift
protocol Runnable {}
extension Runnable {
    func run() {
         ....
    }
}
class Dog: Mammal, Runnable {
	
}
class Mammal {
	func breathe() {
        ...
    }
}
```

我们可以看到，凡是继承了Runnable借口的class都会有了'run()'这个方法了。

## The additional powers of protocol extensions
 
在protocol extension中，可以用一个'where'关键字来告诉，这个protocol extension只能哪个class来继承，并且可以直接调用这个class中的变量和方法，比如

```swift
protocol Runnable {}
extension Runnable where Self : Dog {
    func run() {
         print("\(self.name)" is running)
    }
}
class Dog: Mammal, Runnable {
	var name = "Doudou"
}
```

在上面这个例子里面，'Dog' 继承了 'Runnable'，并且'Runnable' 制定(where)了自己必须是'Dog'，所以可以直接调用Dog里面的变量。

但是如果继承这个protocol的类并不在制定(where)内，就会报错，比如下面这个例子。

```swift
class Cat: Mammal, Runnable {
	var name = "Houhou"
}
```

## So are there any drawbacks?

一个语言的feature，就算再powerful，也会有一些缺点，protocol extension也不例外，但是只要team里面定义好coding style, should be easy to overcome。

以下例子：

```swift
protocol Runnable {}
extension Runnable where Self : Dog {
    func run() {
         print("\(self.name)" is running)
    }
}
class Dog: Mammal, Runnable {
	var name = "Doudou"
	func run() {
        print("I am not running")
    }
}
```

当调用dog.run的时候，会输出'I am not running'，这是为什么呢，因为'Dog'自己也实现了'run()'，和protocol extension的一模一样，那么就override了protocol extension里面的方法了，编译器目前并没有给出任何警告，甚至，如果这个class被extension中，有一样的方法，也会override，这个时候，往往会让人费解。所以养成良好的编程习惯很重要。


