---
layout: post
title: "mediawiki中的infobox安装"
description: "mediawiki中信息框安装简介"
category: "big data"
tags: [mediawiki,infobox]
---
{% include JB/setup %}

看到wikipedia上面的人物传记页面，右侧总是能够看到非常漂亮的人物信息盒子，我一直在想，如果我的mediawiki中也能够集成这样的盒子，那该有多好。

今天兴致来了，就随意搜索了一下，发现还真的是可以实现的。
这里简要记录一下过程（主要参照"http://trog.qgl.org/20110815/setting-up-infobox-templates-in-mediawiki"）：

<!--break-->

1、首先配置ParserFunctions（MediaWiki 1.18以前的版本需要下载此插件），参照 https://www.mediawiki.org/wiki/Extension:ParserFunctions ，解压到extensions目录下。而MediaWiki 1.18以后的版本则无需下载。集成此插件需要设定 LocalSettings.php：

    require_once "$IP/extensions/ParserFunctions/parserFunctions.php";

2、配置Scribunto插件，参照 http://www.mediawiki.org/wiki/Extension:Scribunto ，下载插件解压到插件目录，设定 LocalSettings.php：

    require_once ( "$IP/extensions/Scribunto/Scribunto.php" );
    $wgScribuntoDefaultEngine = 'luastandalone';

安装完两个插件后，可以搜索页面Special:version页面，查看插件安装情况。

3、建立mediawiki全局css文件，建立页面MediaWiki:Common.css，添加css样式，Common.css文件获取地址为 https://en.wikipedia.org/w/index.php?title=MediaWiki:Common.css 。

4、到wikipedia的 https://en.wikipedia.org/wiki/Special:Export 页面，保留Add pages from category:，在中间空白文本框内输入 ：

`Template:Infobox `

确认勾选下边三个复选框，下载infobox模板。下载完成后，将此xml文件中的text/plain用CONTENT_FORMAT_TEXT进行替换。

5、在mediawiki页面导入界面中，将修改后的xml文件导入。
到这里infobox模板就安装完成了。

如果安装完成后出现脚本错误，可以尝试使用更新的Scribunto插件或者将$wgPFEnableStringFunctions = true;代码溢出，我在出现此错误后，做了以上两个操作，目前还没有验证是哪一个动作有影响。

