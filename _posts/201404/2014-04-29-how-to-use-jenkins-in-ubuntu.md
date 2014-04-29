---
layout: post
title: "基于jenkins与CCS命令行的DSP项目持续构建"
description: "基于jenkins与CCS的DSP项目持续构建"
category: "continuous integration"
tags: [ubuntu,linux,jenkins,continuous,integration,持续构建,DSP,CCS,TI,code composer studio,命令行,安装,配置]
---
{% include JB/setup %}

jenkins作为一款久负盛名的持续集成软件，它开源易用，相信大家都对其很是熟悉，而这里所要探究的则是其在嵌入式DSP开发项目中的应用。

使用的系统环境是UBUNTU，[jenkins官网](http://jenkins-ci.org/)有debian安装包，可以使用ubuntu的软件管理中心进行安装，安装完成后都不用担心开机启动的问题，因为安装过程这些问题都解决了。

<!--break-->

jenkins要进行持续构建，除了配置好版本库，还需要触发构建脚本，而DSP项目中比较难以实现的就是这一步了。但是基于eclipse架构的高版本CCS使得这一难度大大降低，CCSV5版本中的命令行工具相当易用。

[CCS命令行wiki](http://processors.wiki.ti.com/index.php/Projects_-_Command_Line_Build/Create) 有很好的介绍。

CCS的命令行工具主要有三个：

1、工程创建

```ini
eclipsec –noSplash -data <workspace_path> -application com.ti.ccstudio.apps.projectCreate -ccs.name -ccs.device [-options]
```

2、工程构建

```ini
eclipsec –noSplash -data <workspace_path> -application com.ti.ccstudio.apps.projectBuild (-ccs.projects | -ccs.workspace) [-options]
```

3、工程导入

```ini
eclipsec –noSplash -data <workspace_path> -application com.ti.ccstudio.apps.projectImport -ccs.location [-options]
```

而linux系统中则需要将eclipsec命令更换为eclipse(实践检验ubuntu中需要使用./eclipse来启用命令)，以下遇到的都需要作此替换。

-noSplash 设置eclipse启动时不启动splash window

-data <workspace_path> 是用户指定的工作空间的路径

-application 指定使用的工具应用。分别指上面的三个工具。

-ccs.name -ccs.device 设定工程创建时的名称以及器件。

(-ccs.projects | -ccs.workspace) 指定编译工程或是空间

-ccs.location 指定要导入工程的路径。

[-options] 其他的操作设定

CCS命令行工具还提供了非常友好的选项帮助查询命令“-ccs.help”，所以如果想要知道这些工具的应用，我们大可以使用此帮助命令来了解工具的更多细节。如我们需要更多的项目构建工具的细节，只需要输入命令：

```ini
./eclipse –noSplash -data <workspace_path> -application com.ti.ccstudio.apps.projectBuild -ccs.help
```

如此，我们只要写好构建脚本，然后，在jenkins中运行脚本，就可以实现基于CCS命令行工具的持续构建了。最简单的持续构建可能只需一个工程编译，而更复杂的则要牵涉到更多的测试等工具，有待大家继续挖掘。

更多参考资料：

1、[http://processors.wiki.ti.com/index.php/Projects_-_Command_Line_Build/Create](http://processors.wiki.ti.com/index.php/Projects_-_Command_Line_Build/Create)

2、[http://www.deyisupport.com/question_answer/dsp_arm/c6000_multicore/f/53/t/10178.aspx](http://www.deyisupport.com/question_answer/dsp_arm/c6000_multicore/f/53/t/10178.aspx)

