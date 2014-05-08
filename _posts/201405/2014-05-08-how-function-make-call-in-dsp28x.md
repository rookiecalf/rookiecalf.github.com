---
layout: post
title: " TMS320C28x 中调用函数的步骤"
description: "TMS320C28x中调用函数的寄存器操作"
category: "embedded system"
tags: [embedded,system,DSP,CCS,TI,code composer studio,TMS320C28X,函数调用,参数传递,寄存器]
---
{% include JB/setup %}

TMS320C28x中调用函数将会进行如下操作：

1、任何在被调用函数中没有保存，但是在函数返回之后还会使用的那些寄存器将被压入堆栈。

2、如果被调用函数返回一个结构，那么主叫函数将为此结构分配空间，并将此空间的地址作为被调用函数的地一个参数传递给被调用函数。

3、传递给被调函数的参数将被存放到寄存器，必要时，会被放入堆栈。

传递参数放在使用以下方式寄存器：

（a）如果是浮点型CPU，并且有32位浮点型的参数，前四个浮点型参数将被放置到寄存器ROH- R3H。

（b）如果有任何64位long long型参数，第一个参数放置ACC和P（其中ACC存放高32位，而P存放低32位），其他所有的64位参数将以相反的顺序被压入堆栈。

如果P寄存器用于参数传递，则函数中（序言/结尾）抽象将被禁用。

<!--break-->
 (c) 如果有32位长整形或者32位浮点型参数，则第一个参数将会被放置到累加器ACC，其他所有32位参数均以相反的顺序压入堆栈。
 
（d）指针参数放在XAR4和XAR5 。所有其他指针放置在堆栈中。

（e）剩余的16位参数将会被放入AL，AH ，XAR4 ，XAR5，如果这些寄存器可以使用的话。

这里是一个示例：

    func1(long a, long long b, int c, int* d);
           stack   ACC/P        XAR5   XAR4
 
 首先64long long型数据b占用ACC和P，累加器被b占用，long型a只能被压入堆栈，d是指针型数据被放入XAR4,int行数据c自然归入XAR5。
 
4、任何剩余没有被放入寄存器的参数都将以相反的顺序压入堆栈，即最左边的参数将被压到堆栈最后一个。其中32位数据需要对齐到偶数地址堆栈上。

数据结构型参数仅传递数据结构的地址，被调用函数必须建立局部的副本。
 
以省略号声明的函数表明其有不同的参数数目，可以略做修改。最后一个显式声明参数传递到堆栈上，这样
它的堆栈地址可以作为访问未声明参数的参考。

5、在调用子函数之前，父函数需要先将堆栈指针（SP）偶对齐，如果SP是奇数则需要增1操作。

下面是几个示例：

    func1 (int a, int b. long c)
             XAR4  XAR5   AH/AL
    func1 (long a, int b, long c) ;
             AH/AL  XAR4  stack
    vararg (int a, int b, int c, ...)
              AL    AH    stack

6、函数调用者使用LCR指令。RPC寄存器的值被压入堆栈。返回地址被存储到寄存器中的RPC 。

7，将堆栈与函数边界对齐。

以上内容翻译自TI文档TMS320C28x Optimizing C/C++ Compiler v6.1 User's Guide，留着参考。

