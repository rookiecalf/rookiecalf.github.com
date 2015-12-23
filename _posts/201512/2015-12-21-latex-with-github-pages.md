---
layout: post
title: "github pages 中使用Latex公式"
description: "github pages 中使用Latex公式"
category: "big data"
tags: [github,pages,latex,公式,blog]
---
{% include JB/setup %}

github pages是支持kramdown包，可以实现Latex公式的显示。

1、把下面的代码插入<head>和</head>标签中间：

	`
	<!-- mathjax config similar to math.stackexchange -->

	<script type="text/x-mathjax-config">
		MathJax.Hub.Config({
			tex2jax: {
  			inlineMath: [ ['$','$'], ["\\(","\\)"] ],
  			processEscapes: true
			}
		});
	</script>

	<script type="text/x-mathjax-config">
	    MathJax.Hub.Config({
	      tex2jax: {
	        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
	      }
	    });
	</script>

	<script type="text/x-mathjax-config">
	    MathJax.Hub.Queue(function() {
	        var all = MathJax.Hub.getAllJax(), i;
	        for(i=0; i < all.length; i += 1) {
	            all[i].SourceElement().parentNode.className += ' has-jax';
	        }
	    });
	</script>

	<script type="text/javascript"
   		src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
	</script>
	`

2、显示效果：

$$
\[\begin{array}{l}
\sqrt {{a^2} + {b^2}} \mathop {\lim }\limits_{x \to \infty } \sqrt {{b^2} - 4ac} \\
\sqrt {{b^2} - 4ac} 
\end{array}\]
$$

$$
	\begin{align*}
	  	& \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
	  	= \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
	  	& (x_1, \ldots, x_n) \left( \begin{array}{ccc}
		      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
		      \vdots & \ddots & \vdots \\
		      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
		    \end{array} \right)
	  	\left( \begin{array}{c}
		      y_1 \\
		      \vdots \\
		      y_n
		    \end{array} \right)
	\end{align*}
$$

