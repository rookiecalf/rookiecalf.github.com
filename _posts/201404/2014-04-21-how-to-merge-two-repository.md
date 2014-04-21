---
layout: post
title: "合并两个独立的svn版本库"
description: "合并两个独立的svn版本库简介"
category: "continuous integration"
tags: [svn,subversion,版本控制,cvs,scm]
---
{% include JB/setup %}

在项目中使用双芯片进行系统控制，当初建立版本库的时候，建立了两个完全独立的版本库，进行分别控制。现在感觉分别进行管理，增加了管理复杂度，经常要注意两个版本库的匹配性，很不方便，也很容易犯错。

今天将两个版本库（设为a和b）进行了合并（设为c）：

1、建立新的版本库c，并在版本库中建立目录a和b（可以使用提交的方式，也可以使用tortoise SVN在repo-browser界面建立）。

2、分别备份版本库a和b：

    svnadmin dump "存放版本库a的目录"/a > "版本库备份目录"/svn_a.dump
    svnadmin dump "存放版本库b的目录"/b > "版本库备份目录"/svn_b.dump

3、导入版本库a和b到版本库c中：

    svnadmin load "版本库c的目录"/c --parent-dir a < "版本库备份目录"/svn_a.dump
    svnadmin load "版本库c的目录"/c --parent-dir b < "版本库备份目录"/svn_b.dump

参数“--parent-dir”是为了指定版本库导入的具体路径。

这样，两个独立的版本库就可以合并为一个版本库了，重要的是之前的提交都不会被删除。

<!--break-->

