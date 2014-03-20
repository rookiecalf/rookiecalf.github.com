---
layout: post
title: "使用trello进行github项目管理"
description: "使用trello进行团队协作"
category: "Continuous Integration"
tags: [trello,github,项目管理]
---
{% include JB/setup %}

团队协作中很难进行个人工作内容的跟踪，而trello能够很好的解决这个问题。

Trello 上的工作都围绕“木板（board）”进行，同一小组的用户可以在这里创建待办事项列表（to do list）、创建任务，并分配给同事，当同事完成工作后可以把任务状态标记为完成，类似于 producteev。你可以为每个项目创建一张卡片，里面包括活动、附件、更新、沟通内容等信息。你可以把同事拖拽到这些卡片中，然后把卡片拖到列表里。

和其他的项目管理系统都是以开发者为中心的，过于复杂，对普通用户缺乏吸引力。Trello 则为各种流程设计，既可以当做公司的协作工具，也可以当做个人的列表管理工具。

<!--break-->

以上是关于trello的简单说明，这里主要记录trello与github合作使用的方式。

将github与trello整合在一起，当有新的提交到github中时，可以将提交的内容粘贴到trello公告板中。以下是整合的步骤：

1、登录到github的项目中，设置Webhooks。设置时，需要有trello的授权token来让github访问trello公告板，以及Push List Id,Pull Request List Id。

2、在trello的webhooks设置界面的下方第一步中有链接，点击链接进入到trello授权token获取页面，按照指示，可以获得你的token。

3、设置时，还需要push list Id和Pull Request Id，这两个Id的目的是将github中的提交日志发布到指定的List中。你可以在以下链接得到list Id：

    https://api.trello.com/1/board/BOARDID?token=TOKEN&key=db1e35883bfe8f8da1725a0d7d032a9c&lists=all
上面的TOKEN使用第二步获取的token替换，而BOARDID则是你想要将日志提交到的那一个board的Id，通常是board的url中board名的前一个部分。在这个url下，你可以看到公告板中所有列表的代号，选择你先要将信息提交到的那个列表。

这样使能hooks设置，就可以使用test hook来测试你的配置是否成功了。

Good luck！


