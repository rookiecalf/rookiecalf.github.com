



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>MathJax/MathZoom.js at master · mathjax/MathJax · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="mathjax/MathJax" name="twitter:title" /><meta content="MathJax - Beautiful math in all browsers" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/252187?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/252187?v=3&amp;s=400" property="og:image" /><meta content="mathjax/MathJax" property="og:title" /><meta content="https://github.com/mathjax/MathJax" property="og:url" /><meta content="MathJax - Beautiful math in all browsers" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="995C29EF:35C9:ACF522F:56729F81" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="b72c2d12ff432ffc5dbe02e1071792238873f9cb" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-502ab50993b65c1ac75efa286ffd5304245f6c9bb4171ac014fbcf92f6f688de.css" integrity="sha256-UCq1CZO2XBrHXvoob/1TBCRfbJu0FxrAFPvPkvb2iN4=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-36c3357696d7a0b54cfebf9eae59bf8e7739f834491862e897feaa0f6118eddc.css" integrity="sha256-NsM1dpbXoLVM/r+erlm/jnc5+DRJGGLol/6qD2EY7dw=" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="195ae401c97e46d288957f281c222cba">

      
  <meta name="description" content="MathJax - Beautiful math in all browsers">
  <meta name="go-import" content="github.com/mathjax/MathJax git https://github.com/mathjax/MathJax.git">

  <meta content="252187" name="octolytics-dimension-user_id" /><meta content="mathjax" name="octolytics-dimension-user_login" /><meta content="847885" name="octolytics-dimension-repository_id" /><meta content="mathjax/MathJax" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="847885" name="octolytics-dimension-repository_network_root_id" /><meta content="mathjax/MathJax" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mathjax/MathJax/commits/master.atom" rel="alternate" title="Recent Commits to MathJax:master" type="application/atom+xml">

  </head>


  <body class="logged_out   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fmathjax%2FMathJax%2Fblob%2Fmaster%2Fextensions%2FMathZoom.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/mathjax/MathJax/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/mathjax/MathJax/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fmathjax%2FMathJax"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/mathjax/MathJax/watchers">
    145
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fmathjax%2FMathJax"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/mathjax/MathJax/stargazers">
      2,577
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fmathjax%2FMathJax"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="/mathjax/MathJax/network" class="social-count">
      417
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="octicon octicon-repo"></span>
  <span class="author"><a href="/mathjax" class="url fn" itemprop="url" rel="author"><span itemprop="title">mathjax</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/mathjax/MathJax" data-pjax="#js-repo-pjax-container">MathJax</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/mathjax/MathJax" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /mathjax/MathJax">
    <span class="octicon octicon-code"></span>
    Code
</a>
    <a href="/mathjax/MathJax/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /mathjax/MathJax/issues">
      <span class="octicon octicon-issue-opened"></span>
      Issues
      <span class="counter">236</span>
</a>
  <a href="/mathjax/MathJax/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /mathjax/MathJax/pulls">
    <span class="octicon octicon-git-pull-request"></span>
    Pull requests
    <span class="counter">2</span>
</a>
    <a href="/mathjax/MathJax/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /mathjax/MathJax/wiki">
      <span class="octicon octicon-book"></span>
      Wiki
</a>
  <a href="/mathjax/MathJax/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /mathjax/MathJax/pulse">
    <span class="octicon octicon-pulse"></span>
    Pulse
</a>
  <a href="/mathjax/MathJax/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /mathjax/MathJax/graphs">
    <span class="octicon octicon-graph"></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/mathjax/MathJax/blob/ba9afeb5a743249acdea17540b48b14ebc95dbe4/extensions/MathZoom.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:3ca2b91e1ad08b2383c21fca3546cda7 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/develop/extensions/MathZoom.js"
               data-name="develop"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="develop">
                develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/mathjax/MathJax/blob/master/extensions/MathZoom.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/mathjax-node-2.5/extensions/MathZoom.js"
               data-name="mathjax-node-2.5"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="mathjax-node-2.5">
                mathjax-node-2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/mathjax-node-2.5.1/extensions/MathZoom.js"
               data-name="mathjax-node-2.5.1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="mathjax-node-2.5.1">
                mathjax-node-2.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/mathjax-node/extensions/MathZoom.js"
               data-name="mathjax-node"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="mathjax-node">
                mathjax-node
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v1.1-latest/extensions/MathZoom.js"
               data-name="v1.1-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1-latest">
                v1.1-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.0-latest/extensions/MathZoom.js"
               data-name="v2.0-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v2.0-latest">
                v2.0-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.1-latest/extensions/MathZoom.js"
               data-name="v2.1-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v2.1-latest">
                v2.1-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.2-latest/extensions/MathZoom.js"
               data-name="v2.2-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v2.2-latest">
                v2.2-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.3-latest/extensions/MathZoom.js"
               data-name="v2.3-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v2.3-latest">
                v2.3-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.4-latest/extensions/MathZoom.js"
               data-name="v2.4-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v2.4-latest">
                v2.4-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.5-latest/extensions/MathZoom.js"
               data-name="v2.5-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v2.5-latest">
                v2.5-latest
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/v1.1/extensions/MathZoom.js"
                 data-name="v1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1">v1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/v1.1a/extensions/MathZoom.js"
                 data-name="v1.1a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1a">v1.1a</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.6.0-beta.2/extensions/MathZoom.js"
                 data-name="2.6.0-beta.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.6.0-beta.2">2.6.0-beta.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.6.0-beta.1/extensions/MathZoom.js"
                 data-name="2.6.0-beta.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.6.0-beta.1">2.6.0-beta.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.6.0-beta.0/extensions/MathZoom.js"
                 data-name="2.6.0-beta.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.6.0-beta.0">2.6.0-beta.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.5.3/extensions/MathZoom.js"
                 data-name="2.5.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.5.3">2.5.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.5.2/extensions/MathZoom.js"
                 data-name="2.5.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.5.2">2.5.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.5.1/extensions/MathZoom.js"
                 data-name="2.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.5.1">2.5.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.5.0/extensions/MathZoom.js"
                 data-name="2.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.5.0">2.5.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.4.0/extensions/MathZoom.js"
                 data-name="2.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.4.0">2.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.3.0/extensions/MathZoom.js"
                 data-name="2.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.3.0">2.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.2.0/extensions/MathZoom.js"
                 data-name="2.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.2.0">2.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.1.0/extensions/MathZoom.js"
                 data-name="2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.0">2.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.0.0/extensions/MathZoom.js"
                 data-name="2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.0">2.0.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/mathjax/MathJax/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mathjax/MathJax" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">MathJax</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mathjax/MathJax/tree/master/extensions" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">extensions</span></a></span><span class="separator">/</span><strong class="final-path">MathZoom.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/mathjax/MathJax/commit/a9dbd626287964704f090847b6bf08397f5d994e" data-pjax>
          a9dbd62
        </a>
        <time datetime="2015-01-29T16:02:39Z" is="relative-time">Jan 29, 2015</time>
      </span>
      <div>
        <img alt="@dpvc" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/432782?v=3&amp;s=40" width="20" />
        <a href="/dpvc" class="user-mention" rel="contributor">dpvc</a>
          <a href="/mathjax/MathJax/commit/a9dbd626287964704f090847b6bf08397f5d994e" class="message" data-pjax="true" title="Repack and recombine for v2.5">Repack and recombine for v2.5</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>2</strong>
         contributors
      </a>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="dpvc" href="/mathjax/MathJax/commits/master/extensions/MathZoom.js?author=dpvc"><img alt="@dpvc" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/432782?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="fred-wang" href="/mathjax/MathJax/commits/master/extensions/MathZoom.js?author=fred-wang"><img alt="@fred-wang" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/567455?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@dpvc" height="24" src="https://avatars2.githubusercontent.com/u/432782?v=3&amp;s=48" width="24" />
            <a href="/dpvc">dpvc</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@fred-wang" height="24" src="https://avatars2.githubusercontent.com/u/567455?v=3&amp;s=48" width="24" />
            <a href="/fred-wang">fred-wang</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/mathjax/MathJax/raw/master/extensions/MathZoom.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/mathjax/MathJax/blame/master/extensions/MathZoom.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/mathjax/MathJax/commits/master/extensions/MathZoom.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

        <button type="button" class="octicon-btn disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-pencil"></span>
        </button>
        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </button>
  </div>

  <div class="file-info">
      20 lines (18 sloc)
      <span class="file-info-divider"></span>
    8.37 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  /MathJax/extensions/MathZoom.js</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  Copyright (c) 2009-2015 The MathJax Consortium</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  you may not use this file except in compliance with the License.</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  You may obtain a copy of the License at</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *      http://www.apache.org/licenses/LICENSE-2.0</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  Unless required by applicable law or agreed to in writing, software</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  See the License for the specific language governing permissions and</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  limitations under the License.</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">(function(a,d,f,c,j){var k=&quot;2.5.0&quot;;var i=a.CombineConfig(&quot;MathZoom&quot;,{styles:{&quot;#MathJax_Zoom&quot;:{position:&quot;absolute&quot;,&quot;background-color&quot;:&quot;#F0F0F0&quot;,overflow:&quot;auto&quot;,display:&quot;block&quot;,&quot;z-index&quot;:301,padding:&quot;.5em&quot;,border:&quot;1px solid black&quot;,margin:0,&quot;font-weight&quot;:&quot;normal&quot;,&quot;font-style&quot;:&quot;normal&quot;,&quot;text-align&quot;:&quot;left&quot;,&quot;text-indent&quot;:0,&quot;text-transform&quot;:&quot;none&quot;,&quot;line-height&quot;:&quot;normal&quot;,&quot;letter-spacing&quot;:&quot;normal&quot;,&quot;word-spacing&quot;:&quot;normal&quot;,&quot;word-wrap&quot;:&quot;normal&quot;,&quot;white-space&quot;:&quot;nowrap&quot;,&quot;float&quot;:&quot;none&quot;,&quot;box-shadow&quot;:&quot;5px 5px 15px #AAAAAA&quot;,&quot;-webkit-box-shadow&quot;:&quot;5px 5px 15px #AAAAAA&quot;,&quot;-moz-box-shadow&quot;:&quot;5px 5px 15px #AAAAAA&quot;,&quot;-khtml-box-shadow&quot;:&quot;5px 5px 15px #AAAAAA&quot;,filter:&quot;progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color=&#39;gray&#39;, Positive=&#39;true&#39;)&quot;},&quot;#MathJax_ZoomOverlay&quot;:{position:&quot;absolute&quot;,left:0,top:0,&quot;z-index&quot;:300,display:&quot;inline-block&quot;,width:&quot;100%&quot;,height:&quot;100%&quot;,border:0,padding:0,margin:0,&quot;background-color&quot;:&quot;white&quot;,opacity:0,filter:&quot;alpha(opacity=0)&quot;},&quot;#MathJax_ZoomFrame&quot;:{position:&quot;relative&quot;,display:&quot;inline-block&quot;,height:0,width:0},&quot;#MathJax_ZoomEventTrap&quot;:{position:&quot;absolute&quot;,left:0,top:0,&quot;z-index&quot;:302,display:&quot;inline-block&quot;,border:0,padding:0,margin:0,&quot;background-color&quot;:&quot;white&quot;,opacity:0,filter:&quot;alpha(opacity=0)&quot;}}});var e,b,g;MathJax.Hub.Register.StartupHook(&quot;MathEvents Ready&quot;,function(){g=MathJax.Extension.MathEvents.Event;e=MathJax.Extension.MathEvents.Event.False;b=MathJax.Extension.MathEvents.Hover});var h=MathJax.Extension.MathZoom={version:k,settings:a.config.menuSettings,scrollSize:18,HandleEvent:function(n,l,m){if(h.settings.CTRL&amp;&amp;!n.ctrlKey){return true}if(h.settings.ALT&amp;&amp;!n.altKey){return true}if(h.settings.CMD&amp;&amp;!n.metaKey){return true}if(h.settings.Shift&amp;&amp;!n.shiftKey){return true}if(!h[l]){return true}return h[l](n,m)},Click:function(m,l){if(this.settings.zoom===&quot;Click&quot;){return this.Zoom(m,l)}},DblClick:function(m,l){if(this.settings.zoom===&quot;Double-Click&quot;||this.settings.zoom===&quot;DoubleClick&quot;){return this.Zoom(m,l)}},Hover:function(m,l){if(this.settings.zoom===&quot;Hover&quot;){this.Zoom(m,l);return true}return false},Zoom:function(o,u){this.Remove();b.ClearHoverTimer();g.ClearSelection();var s=MathJax.OutputJax[u.jaxID];var p=s.getJaxFromMath(u);if(p.hover){b.UnHover(p)}var q=this.findContainer(u);var l=Math.floor(0.85*q.clientWidth),t=Math.max(document.body.clientHeight,document.documentElement.clientHeight);if(this.getOverflow(q)!==&quot;visible&quot;){t=Math.min(q.clientHeight,t)}t=Math.floor(0.85*t);var n=d.Element(&quot;span&quot;,{id:&quot;MathJax_ZoomFrame&quot;},[[&quot;span&quot;,{id:&quot;MathJax_ZoomOverlay&quot;,onmousedown:this.Remove}],[&quot;span&quot;,{id:&quot;MathJax_Zoom&quot;,onclick:this.Remove,style:{visibility:&quot;hidden&quot;,fontSize:this.settings.zscale}},[[&quot;span&quot;,{style:{display:&quot;inline-block&quot;,&quot;white-space&quot;:&quot;nowrap&quot;}}]]]]);var z=n.lastChild,w=z.firstChild,r=n.firstChild;u.parentNode.insertBefore(n,u);u.parentNode.insertBefore(u,n);if(w.addEventListener){w.addEventListener(&quot;mousedown&quot;,this.Remove,true)}var m=z.offsetWidth||z.clientWidth;l-=m;t-=m;z.style.maxWidth=l+&quot;px&quot;;z.style.maxHeight=t+&quot;px&quot;;if(this.msieTrapEventBug){var y=d.Element(&quot;span&quot;,{id:&quot;MathJax_ZoomEventTrap&quot;,onmousedown:this.Remove});n.insertBefore(y,z)}if(this.msieZIndexBug){var v=d.addElement(document.body,&quot;img&quot;,{src:&quot;about:blank&quot;,id:&quot;MathJax_ZoomTracker&quot;,width:0,height:0,style:{width:0,height:0,position:&quot;relative&quot;}});n.style.position=&quot;relative&quot;;n.style.zIndex=i.styles[&quot;#MathJax_ZoomOverlay&quot;][&quot;z-index&quot;];n=v}var x=s.Zoom(p,w,u,l,t);if(this.msiePositionBug){if(this.msieSizeBug){z.style.height=x.zH+&quot;px&quot;;z.style.width=x.zW+&quot;px&quot;}if(z.offsetHeight&gt;t){z.style.height=t+&quot;px&quot;;z.style.width=(x.zW+this.scrollSize)+&quot;px&quot;}if(z.offsetWidth&gt;l){z.style.width=l+&quot;px&quot;;z.style.height=(x.zH+this.scrollSize)+&quot;px&quot;}}if(this.operaPositionBug){z.style.width=Math.min(l,x.zW)+&quot;px&quot;}if(z.offsetWidth&gt;m&amp;&amp;z.offsetWidth-m&lt;l&amp;&amp;z.offsetHeight-m&lt;t){z.style.overflow=&quot;visible&quot;}this.Position(z,x);if(this.msieTrapEventBug){y.style.height=z.clientHeight+&quot;px&quot;;y.style.width=z.clientWidth+&quot;px&quot;;y.style.left=(parseFloat(z.style.left)+z.clientLeft)+&quot;px&quot;;y.style.top=(parseFloat(z.style.top)+z.clientTop)+&quot;px&quot;}z.style.visibility=&quot;&quot;;if(this.settings.zoom===&quot;Hover&quot;){r.onmouseover=this.Remove}if(window.addEventListener){addEventListener(&quot;resize&quot;,this.Resize,false)}else{if(window.attachEvent){attachEvent(&quot;onresize&quot;,this.Resize)}else{this.onresize=window.onresize;window.onresize=this.Resize}}a.signal.Post([&quot;math zoomed&quot;,p]);return e(o)},Position:function(p,r){p.style.display=&quot;none&quot;;var q=this.Resize(),m=q.x,s=q.y,l=r.mW;p.style.display=&quot;&quot;;var o=-l-Math.floor((p.offsetWidth-l)/2),n=r.Y;p.style.left=Math.max(o,10-m)+&quot;px&quot;;p.style.top=Math.max(n,10-s)+&quot;px&quot;;if(!h.msiePositionBug){h.SetWH()}},Resize:function(m){if(h.onresize){h.onresize(m)}var q=document.getElementById(&quot;MathJax_ZoomFrame&quot;),l=document.getElementById(&quot;MathJax_ZoomOverlay&quot;);var o=h.getXY(q),n=h.findContainer(q);if(h.getOverflow(n)!==&quot;visible&quot;){l.scroll_parent=n;var p=h.getXY(n);o.x-=p.x;o.y-=p.y;p=h.getBorder(n);o.x-=p.x;o.y-=p.y}l.style.left=(-o.x)+&quot;px&quot;;l.style.top=(-o.y)+&quot;px&quot;;if(h.msiePositionBug){setTimeout(h.SetWH,0)}else{h.SetWH()}return o},SetWH:function(){var l=document.getElementById(&quot;MathJax_ZoomOverlay&quot;);if(!l){return}l.style.display=&quot;none&quot;;var m=l.scroll_parent||document.documentElement||document.body;l.style.width=m.scrollWidth+&quot;px&quot;;l.style.height=Math.max(m.clientHeight,m.scrollHeight)+&quot;px&quot;;l.style.display=&quot;&quot;},findContainer:function(l){l=l.parentNode;while(l.parentNode&amp;&amp;l!==document.body&amp;&amp;h.getOverflow(l)===&quot;visible&quot;){l=l.parentNode}return l},getOverflow:(window.getComputedStyle?function(l){return getComputedStyle(l).overflow}:function(l){return(l.currentStyle||{overflow:&quot;visible&quot;}).overflow}),getBorder:function(o){var m={thin:1,medium:2,thick:3};var n=(window.getComputedStyle?getComputedStyle(o):(o.currentStyle||{borderLeftWidth:0,borderTopWidth:0}));var l=n.borderLeftWidth,p=n.borderTopWidth;if(m[l]){l=m[l]}else{l=parseInt(l)}if(m[p]){p=m[p]}else{p=parseInt(p)}return{x:l,y:p}},getXY:function(o){var l=0,n=0,m;m=o;while(m.offsetParent){l+=m.offsetLeft;m=m.offsetParent}if(h.operaPositionBug){o.style.border=&quot;1px solid&quot;}m=o;while(m.offsetParent){n+=m.offsetTop;m=m.offsetParent}if(h.operaPositionBug){o.style.border=&quot;&quot;}return{x:l,y:n}},Remove:function(n){var p=document.getElementById(&quot;MathJax_ZoomFrame&quot;);if(p){var o=MathJax.OutputJax[p.previousSibling.jaxID];var l=o.getJaxFromMath(p.previousSibling);a.signal.Post([&quot;math unzoomed&quot;,l]);p.parentNode.removeChild(p);p=document.getElementById(&quot;MathJax_ZoomTracker&quot;);if(p){p.parentNode.removeChild(p)}if(h.operaRefreshBug){var m=d.addElement(document.body,&quot;div&quot;,{style:{position:&quot;fixed&quot;,left:0,top:0,width:&quot;100%&quot;,height:&quot;100%&quot;,backgroundColor:&quot;white&quot;,opacity:0},id:&quot;MathJax_OperaDiv&quot;});document.body.removeChild(m)}if(window.removeEventListener){removeEventListener(&quot;resize&quot;,h.Resize,false)}else{if(window.detachEvent){detachEvent(&quot;onresize&quot;,h.Resize)}else{window.onresize=h.onresize;delete h.onresize}}}return e(n)}};a.Browser.Select({MSIE:function(l){var n=(document.documentMode||0);var m=(n&gt;=9);h.msiePositionBug=!m;h.msieSizeBug=l.versionAtLeast(&quot;7.0&quot;)&amp;&amp;(!document.documentMode||n===7||n===8);h.msieZIndexBug=(n&lt;=7);h.msieInlineBlockAlignBug=(n&lt;=7);h.msieTrapEventBug=!window.addEventListener;if(document.compatMode===&quot;BackCompat&quot;){h.scrollSize=52}if(m){delete i.styles[&quot;#MathJax_Zoom&quot;].filter}},Opera:function(l){h.operaPositionBug=true;h.operaRefreshBug=true}});h.topImg=(h.msieInlineBlockAlignBug?d.Element(&quot;img&quot;,{style:{width:0,height:0,position:&quot;relative&quot;},src:&quot;about:blank&quot;}):d.Element(&quot;span&quot;,{style:{width:0,height:0,display:&quot;inline-block&quot;}}));if(h.operaPositionBug||h.msieTopBug){h.topImg.style.border=&quot;1px solid&quot;}MathJax.Callback.Queue([&quot;StartupHook&quot;,MathJax.Hub.Register,&quot;Begin Styles&quot;,{}],[&quot;Styles&quot;,f,i.styles],[&quot;Post&quot;,a.Startup.signal,&quot;MathZoom Ready&quot;],[&quot;loadComplete&quot;,f,&quot;[MathJax]/extensions/MathZoom.js&quot;])})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.OutputJax[&quot;HTML-CSS&quot;],MathJax.OutputJax.NativeMML);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

        <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.12887s from github-fe129-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-7460qJ7p88i3YTMH/liaj1cFgX987ie+xRzl6WMjSr8=" src="https://assets-cdn.github.com/assets/frameworks-ef8eb4a89ee9f3c8b7613307fe589a8f5705817f7cee27bec51ce5e963234abf.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-QQ/fyDvlG8+ub5XjaMUJm15L2Hf78jJjgj3I9Vybb4Y=" src="https://assets-cdn.github.com/assets/github-410fdfc83be51bcfae6f95e368c5099b5e4bd877fbf23263823dc8f55c9b6f86.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

