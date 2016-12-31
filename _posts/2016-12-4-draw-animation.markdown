---
layout: post
title: "iOS Draw things animation"
date: 2016-12-4
categories:
  - iOS
description: 
image: /assets/images/xcode.jpg
image-sm: /assets/images/xcode-sm.jpg
comments: true
---

最近工作需要，开始做了一些动态画图的活儿，顺便记录一下。

主要分为三个部分，1. 画路径 2. 加Layer 3.设置动画。 如果不需要动画，直接skip last step.


* **CGMutablePath** 
通过CGMutablePath来定义想要画画的路径 [Apple Doc](https://developer.apple.com/reference/coregraphics/cgmutablepath)

	* ```swift func move(to point: CGPoint, transform: CGAffineTransform = default) ```
	把当前画笔的点挪到指定的点
	* ```swift func addLine(to point: CGPoint, transform: CGAffineTransform = default) ```
	从当点的点，到指定的点，画一个线
	* ```swift func addRect(_ rect: CGRect, transform: CGAffineTransform = default) ```
	从当前点开始，画一个给定的矩形
	* ```swift func addArc(center: CGPoint, radius: CGFloat, startAngle: CGFloat, endAngle: CGFloat, clockwise: Bool, transform: CGAffineTransform = default) ```
	最复杂的一个，如果需要画rounded corner的时候，必须要用。注意第一个参数是圆形的圆心，```startAngle``` 和 ```endAngle```是pai的相对值，如图所示:
	![角度计算](/assets/images/draw-angle-diagram.png)
	
	
* **CAShapeLayer**
Layer，告诉UIView如何显示。[Apple Doc](https://developer.apple.com/reference/quartzcore/cashapelayer)
	
	* ```swift var fillColor: CGColor? { get set } ```
	填充的颜色
	* ```swift var strokeColor: CGColor? { get set } ```
	画的颜色
	* ```swift var path: CGPath? { get set } ```
	画的路径，**CGMutablePath**
	* ```swift var strokeEnd: CGFloat { get set } ```
	注意，如果设置为0，是不画的，如果需要第三部，动画效果，要先设置成0，否则1就可以
	* ```swift func add(_ anim: CAAnimation, 
  forKey key: String?) ```
   如果需要动画效果，需要call这个方法，key很关键，不能重复
   
* **CABasicAnimation** 动画定义 [Apple Doc](https://developer.apple.com/reference/quartzcore/cabasicanimation)

	* ```swift convenience init(keyPath path: String?) ```
	此时的**keyPath** value如果不正确，是没有动画效果的，如果是画线，可以用**```strokeEnd```**
	* ```swift animation.timingFunction = CAMediaTimingFunction(name: kCAMediaTimingFunctionLinear) ``` 加入合适的时间方法
	
	
源代码在[GitHub](https://github.com/zheng-liu-seattle/iOS-animation-demo)