---
layout: post
title: "文档生成器doxygen在github中的设置"
description: "github中使用doxygen的简单教程"
category: "Continuous Integration"
tags: [github,doxygen,配置,教程,文档生成器,版本控制]
---
{% include JB/setup %}
Doxygen是一个编写软件参考文档的工具。该文档是直接写在代码中，因此比较容易保持更新。 Doxygen可以交叉引用文档和代码，使文件的读者可以很容易地引用实际的代码。

如果你的代码托管在Github中，则可以通过gh-pages生成文档，保持你的代码和文档的持续演进。

这里是我在github中使用doxygen的demo：

    https://github.com/rookiecalf/doxygenDemo

doxygen生成文档效果：

    http://softci.com/doxygenDemo/index.html

<!--break-->

此处假定你的个人电脑上已经安装了doxygen和git，并且拥有github账号。下面主要介绍配置过程。

首先创建git本地仓库，并push到github：

    # Make your gitHub project. 
    mkdir doxygenDemo
    cd doxygenDemo/
    git init
    echo "# doxygenDemo README file" > README.md
    git add .
    git commit -m "doxygenDemo README added"
    git remote add origin git@github.com:rookiecalf/doxygenDemo.git
    git push origin master

当然你也可以在github中创建仓库，然后使用git将clone到本地。

接下来需要创建html子目录，并在git中ignore此目录：

    # Make a new html directory, and tell git to ignore it. 
    mkdir html
    echo "html/" > .gitignore
    git add .
    git commit -m ".gitignore html/ folder (contains gh-pages branch)"
    git push origin master

创建本项目的gh-pages：

在settings选项内，点击automatic page genorator ，点击load README.md，点击 continue to layouts，最后点击publish。在代码库中生成gh-pages分支。

clone仓库到html子目录：
    
    cd html/
    git clone git@github.com:rookiecalf/doxygenDemo.git .
    git checkout origin/gh-pages -b gh-pages

使用命令git branch可以看到gh-pages和master两个分支，删除master分支：

    git branch -d master

删除有github生成的html文件：

	rm -r *.*
	rm -rf images/ javascripts/ stylesheets/

添加README.md文件并push到gh-pages分支：

	echo "# html README file" > README.textile
	git add . 
	git commit -m "html README added"
	git push origin gh-pages

到这里，将在doxygenDemo得到master分支，html目录下得到gh-pages分支。

在doxygenDemo目录下建立docs目录，并生成doxygen配置文件：

    mkdir docs
    cd docs
    doxygen -s -g

配置Doxyfile，将INPUT设定为你需要生成文档的目录或文件，在doxygenDemo目录中运行doxygen生成文档（更直观的方式为使用doxygen图形化工具来生成，生成目录设定为html）：

	doxygen ./docs/Doxyfile

将修改push到master分支：

	git push origin master

最后将生成的html文件push到gh-pages分支：

    cd html
    git add .
    git commit -m "add doxygen html files to doxygenDemo"
    git push origin gh-pages

如此，可以看到如此效果的doxygen：

[rookiecalf.github.io/doxygenDemo](rookiecalf.github.io/doxygenDemo)

可以参考的文章和文件：

1、[http://rickfoosusa.blogspot.com/2011/10/howto-use-doxygen-with-github.html](http://rickfoosusa.blogspot.com/2011/10/howto-use-doxygen-with-github.html)


2、[http://www.admb-project.org/developers/workshop/reykjavik-2013/doxygen-github.pdf/at_download/file](http://www.admb-project.org/developers/workshop/reykjavik-2013/doxygen-github.pdf/at_download/file)