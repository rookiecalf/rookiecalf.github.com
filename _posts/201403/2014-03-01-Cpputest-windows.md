---
layout: post
title: "windows下c/c++单元测试框架CppUTest安装与使用简介"
description: "windows下c/c++单元测试框架CppUTest安装简介"
category: "unit test"
tags: [unit,test,CppUTest,windows]
---
{% include JB/setup %}

因为要进行的IQmath_fake项目要使用CppUTest作为单元测试框架，这里要先搭建一下windows下CppUTest的测试环境。

CppUTest是为了支持在多种操作系统上开发嵌入式软件而特别设计的。CppUTest的宏被设计成不需要了解C++也可以写测试用例，这使得像我这样进行嵌入式C语言开发的程序员来说简直就是一大福音。

下载CppUTest请到[官网](http://cpputest.github.io/ "CppUTest官网")，这里使用版本3.3，最新3.5版本按照说明未能配置成功。

<!--break-->

在windows系统下，可以使用Cygwin工具集作为上手的开发环境，等到运行速度不够的时候再转移到linux虚拟机，或者直接转移到linux系统中进行开发。

你可以到[Cygwin官网](http://www.cygwin.com/ "Cygwin官网")下载安装程式，下载完成后运行程式选择要安装的工具集进行安装。

将CppUTest解压到本地目录，按照目录下的安装说明，使用cygwin进行编译，3.3版本只需要在cygwin中切换到CppUTest目录，使用make命令即可编译完成。

以下使用简介翻译自官方网站，更多使用方法，可以到[CppUTest官网](http://cpputest.github.io/ "CppUTest官网")查看使用手册。

编写第一个测试，你只需要新建一个包含测试组和一个测试的c++文件，如下所示：

    TEST_GROUP(FirstTestGroup)
    {
    };
    
    TEST(FirstTestGroup, FirstTest)
    {
       FAIL("Fail me!");
    }
这个测试将会向你报告失败。

在这个测试组中你可以添加更多测试：

    TEST(FirstTestGroup, SecondTest)
    {
       STRCMP_EQUAL("hello", "world");
       LONGS_EQUAL(1, 2);
       CHECK(false);
    }
当然在进行这些测试之前，你还需要这样的一个main函数（通常位于文件AllTests.cpp）：

    int main(int ac, char** av)
    {
       return CommandLineTestRunner::RunAllTests(ac, av);
    }

当然使用GNU make 的话，还需要建立一个makefile，这样才能够正常进行构建。

James W. Grenning 的《TDD for Embedded C》一书中支出makefile要遵循的原则：

- makefile必须很快，要基于依赖关系做增量构建 
- 在每次构建时都运行测试 
- 测试文件覆盖产品代码 
- 在目录树中没有垃圾文件

目录树的结构要组织成测试代码与产品代码分离。产品代码目录下的源文件都会被编译并放入到一个库中，而测试相关目录下的源代码会被编译但保留为对象（.o）文件。AllTests.cpp作为一个特殊的文件也将会被保留为对象文件，他所定义的main函数会调用测试容器来运行所有的测试。

测试.o文件会显示地包含为链接器的输入，只有在有未解决的外部符号时才会去包含产品代码。

通过显示地包含.o文件，在链接时测试替身会覆盖产品代码。

这是产品代码目录和测试代码目录指定示例：

    SRC_DIRS = \
    	src/test0\
    	src/testmock\

    TEST_SRC_DIRS = \
    	tests \
    	mocks\
    	tests/test0\
    	mocks/test0\
    	tests/testmock\




