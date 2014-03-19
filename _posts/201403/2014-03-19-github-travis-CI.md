---
layout: post
title: "使用travis CI 集成github项目"
description: "使用travis CI云集成github中小项目的简单介绍"
category: "Continuous Integration"
tags: [travis-CI,github,travis,持续集成]
---
{% include JB/setup %}

对于团队开发来说，持续集成（CI）无疑是非常重要的一个环节。持续集成确保开发人员向代码库提交新的代码时，都能够触发构建活动，构建活动可能包括单元测试，功能测试，复杂一些的集成过程则要包括更多的构建及测试。使用持续集成可以快速检测错误，保证项目健康稳定发展。

我们在实际项目中可能使用类似Jenkins（前身为hudson）等持续集成软件，而托管在github中的小型项目则有更好的选择，那就是travis CI。当然travis CI也不会只限于小项目。

<!--break-->

travis CI是专门为开源项目打造的持续集成环境，对于托管在github中的项目，可以通过很简单的设置就可以实现项目的持续集成。

以下简要说明一个使用makefile管理的C++语言项目，如何进行travis CI持续集成的设置。

此过程假定你已经拥有github账号，并且使用github托管你要持续集成的项目。项目大概如[这里](https://github.com/rookiecalf/IQmath_fake)所示。

1、使用github账号登陆[Travis CI](https://travis-ci.org/)服务器.

2、在右上角你的账户名点击进入 account，在Repositories tab页点击Sync now同步你的github项目，

3、选中需要集成的项目，将默认的off改变为on开启项目的持续集成。

4、在你项目的根目录建立一个.travis.yml文件，此文件用于持续集成：

    ---
    language: cpp
    compiler: 
    - gcc
    
    # Change this to your needs
    script:  cd cpputest && make && cd .. && make

文件中设定项目的语言，以及编译器，示例为C++项目，使用gcc进行编译。script部分则是寻找到你管理工程所用makefile目录并进行make，travis CI将会为你进行项目构建。更复杂的.travis.yml文件设置方法，请参照[官方文档](http://http://docs.travis-ci.com/user/getting-started/)。

在进行1、2步骤时，应该能够在github代码库中自动添加hook，如果未能成功添加，则需要再项目的hook链接中自行设置。

设置完成后，每当有新的代码提交到版本库中时，就能够自动触发构建。

travis CI构建项目的示例在[这里]( https://travis-ci.org/rookiecalf/IQmath_fake/builds)。





