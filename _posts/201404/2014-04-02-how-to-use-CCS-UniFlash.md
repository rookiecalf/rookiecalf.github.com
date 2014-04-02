---
layout: post
title: "使用CCS UniFlash进行DSP的Flash烧写"
description: "CCS UniFlash使用简介"
category: "embedded system"
tags: [TI,CCS,DSP,嵌入式,UniFlash,uniflash,flash]
---
{% include JB/setup %}
CCS UniFlash 是一款烧写TI MCU片上flash的独立工具（并且免费），它使得我们可以脱离IDE进行DSP或是其他芯片的flash烧写。UniFlash提供了图形界面，命令行以及脚本三种操作方式。这里主要进行图形界面操作方式的介绍，另外两款本人涉足不深。

在这里可以下载到UniFlash：[http://processors.wiki.ti.com/index.php/Category:CCS_UniFlash](http://processors.wiki.ti.com/index.php/Category:CCS_UniFlash)

安装过程不再赘述。

UniFlash需要使用目标板配置文件（CCXML）来定义与目标板的链接，CCXML可以在UniFlash中新建也可以从已经拥有的CCS项目中导入。这里建议从CCS项目中导入，因为我在进行菊花链模式目标板配置的时候遇到了麻烦，我发现UniFlash中新建配置似乎并不支持多芯片（或许是我没有找到法门，如果您找到了方法，希望您能够不吝赐教，在这里表示感谢）。

<!--break-->

图形界面对于我来说无疑是更友好的，它是如此的直观便捷，如同我使用其他应用程序一样。在这里只需要在菜单中选择创建或者导入配置文件，你就可以根据提示轻松完成目标板的配置文件的建立。

配置完成后，我们可以使用program菜单栏中的工具进行程序烧写。这些工具包括load program，load binary program，erase cores，Save Memory，verify memory， verify binary memory等。

在左侧目标板配置的下方有一个programs选项卡，这是一个多重下载的配置。如果我们的目标工程有段二进制文件需要下载，这一工具可以帮助我们自动完成这一过程，而不用多次进行操作。在下载多个二进制文件的过程中，将不再做擦除操作。

Session 菜单是关于uniflash配置的保存和加载的，这里不再赘述。

更多相关资源：

1、[http://processors.wiki.ti.com/index.php/UniFlash_Quick_Start_Guide](http://processors.wiki.ti.com/index.php/UniFlash_Quick_Start_Guide)

2、[http://processors.wiki.ti.com/index.php/Category:CCS_UniFlash](http://processors.wiki.ti.com/index.php/Category:CCS_UniFlash)