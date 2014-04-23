---
layout: post
title: "cpputest单元测试框架添加数学链接库"
description: "cpputest单元测试框架添加数学链接库"
category: "continuous integration"
tags: [cpputest,单元测试,math,数学库,gcc,IQmath,fake]
---
{% include JB/setup %}

今天建立新项目工程，将之前建立的简单的IQmath的测试替身（[https://github.com/rookiecalf/IQmath_fake](https://github.com/rookiecalf/IQmath_fake)）添加到项目框架下。IQmath_fake是在windows环境下完成的，结果今天搬移到ubuntu 14.04下make时出现了如下到错误：

    undefined reference to symbol 'cos@@GLIBC_2.2.5'
    //lib/x86_64-linux-gnu/libm.so.6: error adding symbols: DSO missing from command line
    collect2: error: ld returned 1 exit status

虽然源代码中添加了#include "math.h"，gcc在链接的时候还是需要指定链接数据库的。修改cpputest下build目录下的MakefileWorker.mk：

将350行（不同版本的cpputest可能有所不同，我用的版本是3.5，如果版本不同请自行找到相应到位置）LD_LIBRARIES += -lstdc++后添加一行代码：

    LD_LIBRARIES += -lm
    
保存后再次make，错误就可以得到解决。

<!--break-->

