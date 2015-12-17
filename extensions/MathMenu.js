



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>MathJax/MathMenu.js at master · mathjax/MathJax · GitHub</title>
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

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="995C29EF:35C9:ACF4E57:56729F7C" name="octolytics-dimension-request_id" />
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
      <a class="btn" href="/login?return_to=%2Fmathjax%2FMathJax%2Fblob%2Fmaster%2Fextensions%2FMathMenu.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
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

    

<a href="/mathjax/MathJax/blob/ba9afeb5a743249acdea17540b48b14ebc95dbe4/extensions/MathMenu.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:8e4161288de7daedc34b7174a24cd1b1 -->

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
               href="/mathjax/MathJax/blob/develop/extensions/MathMenu.js"
               data-name="develop"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="develop">
                develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/mathjax/MathJax/blob/master/extensions/MathMenu.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/mathjax-node-2.5/extensions/MathMenu.js"
               data-name="mathjax-node-2.5"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="mathjax-node-2.5">
                mathjax-node-2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/mathjax-node-2.5.1/extensions/MathMenu.js"
               data-name="mathjax-node-2.5.1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="mathjax-node-2.5.1">
                mathjax-node-2.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/mathjax-node/extensions/MathMenu.js"
               data-name="mathjax-node"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="mathjax-node">
                mathjax-node
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v1.1-latest/extensions/MathMenu.js"
               data-name="v1.1-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1-latest">
                v1.1-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.0-latest/extensions/MathMenu.js"
               data-name="v2.0-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v2.0-latest">
                v2.0-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.1-latest/extensions/MathMenu.js"
               data-name="v2.1-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v2.1-latest">
                v2.1-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.2-latest/extensions/MathMenu.js"
               data-name="v2.2-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v2.2-latest">
                v2.2-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.3-latest/extensions/MathMenu.js"
               data-name="v2.3-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v2.3-latest">
                v2.3-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.4-latest/extensions/MathMenu.js"
               data-name="v2.4-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v2.4-latest">
                v2.4-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.5-latest/extensions/MathMenu.js"
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
              <a href="/mathjax/MathJax/tree/v1.1/extensions/MathMenu.js"
                 data-name="v1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1">v1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/v1.1a/extensions/MathMenu.js"
                 data-name="v1.1a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1a">v1.1a</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.6.0-beta.2/extensions/MathMenu.js"
                 data-name="2.6.0-beta.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.6.0-beta.2">2.6.0-beta.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.6.0-beta.1/extensions/MathMenu.js"
                 data-name="2.6.0-beta.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.6.0-beta.1">2.6.0-beta.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.6.0-beta.0/extensions/MathMenu.js"
                 data-name="2.6.0-beta.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.6.0-beta.0">2.6.0-beta.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.5.3/extensions/MathMenu.js"
                 data-name="2.5.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.5.3">2.5.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.5.2/extensions/MathMenu.js"
                 data-name="2.5.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.5.2">2.5.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.5.1/extensions/MathMenu.js"
                 data-name="2.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.5.1">2.5.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.5.0/extensions/MathMenu.js"
                 data-name="2.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.5.0">2.5.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.4.0/extensions/MathMenu.js"
                 data-name="2.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.4.0">2.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.3.0/extensions/MathMenu.js"
                 data-name="2.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.3.0">2.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.2.0/extensions/MathMenu.js"
                 data-name="2.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.2.0">2.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.1.0/extensions/MathMenu.js"
                 data-name="2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.0">2.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mathjax/MathJax/tree/2.0.0/extensions/MathMenu.js"
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
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mathjax/MathJax" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">MathJax</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mathjax/MathJax/tree/master/extensions" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">extensions</span></a></span><span class="separator">/</span><strong class="final-path">MathMenu.js</strong>
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
          <a class="avatar-link tooltipped tooltipped-s" aria-label="dpvc" href="/mathjax/MathJax/commits/master/extensions/MathMenu.js?author=dpvc"><img alt="@dpvc" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/432782?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="fred-wang" href="/mathjax/MathJax/commits/master/extensions/MathMenu.js?author=fred-wang"><img alt="@fred-wang" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/567455?v=3&amp;s=40" width="20" /> </a>


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
      <a href="/mathjax/MathJax/raw/master/extensions/MathMenu.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/mathjax/MathJax/blame/master/extensions/MathMenu.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/mathjax/MathJax/commits/master/extensions/MathMenu.js" class="btn btn-sm " rel="nofollow">History</a>
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
    29.4 KB
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
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  /MathJax/extensions/MathMenu.js</span></td>
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
        <td id="LC19" class="blob-code blob-code-inner js-file-line">(function(c,g,k,f,b){var q=&quot;2.5.0&quot;;var j=MathJax.Callback.Signal(&quot;menu&quot;);MathJax.Extension.MathMenu={version:q,signal:j};var o=function(r){return MathJax.Localization._.apply(MathJax.Localization,[[&quot;MathMenu&quot;,r]].concat([].slice.call(arguments,1)))};var n=c.Browser.isPC,l=c.Browser.isMSIE,e=((document.documentMode||0)&gt;8);var i=(n?null:&quot;5px&quot;);var p=c.CombineConfig(&quot;MathMenu&quot;,{delay:150,closeImg:k.urlRev(b.imageDir+&quot;/CloseX-31.png&quot;),showRenderer:true,showMathPlayer:true,showFontMenu:false,showContext:false,showDiscoverable:false,showLocale:true,showLocaleURL:false,semanticsAnnotations:{TeX:[&quot;TeX&quot;,&quot;LaTeX&quot;,&quot;application/x-tex&quot;],StarMath:[&quot;StarMath 5.0&quot;],Maple:[&quot;Maple&quot;],ContentMathML:[&quot;MathML-Content&quot;,&quot;application/mathml-content+xml&quot;],OpenMath:[&quot;OpenMath&quot;]},windowSettings:{status:&quot;no&quot;,toolbar:&quot;no&quot;,locationbar:&quot;no&quot;,menubar:&quot;no&quot;,directories:&quot;no&quot;,personalbar:&quot;no&quot;,resizable:&quot;yes&quot;,scrollbars:&quot;yes&quot;,width:400,height:300,left:Math.round((screen.width-400)/2),top:Math.round((screen.height-300)/3)},styles:{&quot;#MathJax_About&quot;:{position:&quot;fixed&quot;,left:&quot;50%&quot;,width:&quot;auto&quot;,&quot;text-align&quot;:&quot;center&quot;,border:&quot;3px outset&quot;,padding:&quot;1em 2em&quot;,&quot;background-color&quot;:&quot;#DDDDDD&quot;,color:&quot;black&quot;,cursor:&quot;default&quot;,&quot;font-family&quot;:&quot;message-box&quot;,&quot;font-size&quot;:&quot;120%&quot;,&quot;font-style&quot;:&quot;normal&quot;,&quot;text-indent&quot;:0,&quot;text-transform&quot;:&quot;none&quot;,&quot;line-height&quot;:&quot;normal&quot;,&quot;letter-spacing&quot;:&quot;normal&quot;,&quot;word-spacing&quot;:&quot;normal&quot;,&quot;word-wrap&quot;:&quot;normal&quot;,&quot;white-space&quot;:&quot;nowrap&quot;,&quot;float&quot;:&quot;none&quot;,&quot;z-index&quot;:201,&quot;border-radius&quot;:&quot;15px&quot;,&quot;-webkit-border-radius&quot;:&quot;15px&quot;,&quot;-moz-border-radius&quot;:&quot;15px&quot;,&quot;-khtml-border-radius&quot;:&quot;15px&quot;,&quot;box-shadow&quot;:&quot;0px 10px 20px #808080&quot;,&quot;-webkit-box-shadow&quot;:&quot;0px 10px 20px #808080&quot;,&quot;-moz-box-shadow&quot;:&quot;0px 10px 20px #808080&quot;,&quot;-khtml-box-shadow&quot;:&quot;0px 10px 20px #808080&quot;,filter:&quot;progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color=&#39;gray&#39;, Positive=&#39;true&#39;)&quot;},&quot;.MathJax_Menu&quot;:{position:&quot;absolute&quot;,&quot;background-color&quot;:&quot;white&quot;,color:&quot;black&quot;,width:&quot;auto&quot;,padding:(n?&quot;2px&quot;:&quot;5px 0px&quot;),border:&quot;1px solid #CCCCCC&quot;,margin:0,cursor:&quot;default&quot;,font:&quot;menu&quot;,&quot;text-align&quot;:&quot;left&quot;,&quot;text-indent&quot;:0,&quot;text-transform&quot;:&quot;none&quot;,&quot;line-height&quot;:&quot;normal&quot;,&quot;letter-spacing&quot;:&quot;normal&quot;,&quot;word-spacing&quot;:&quot;normal&quot;,&quot;word-wrap&quot;:&quot;normal&quot;,&quot;white-space&quot;:&quot;nowrap&quot;,&quot;float&quot;:&quot;none&quot;,&quot;z-index&quot;:201,&quot;border-radius&quot;:i,&quot;-webkit-border-radius&quot;:i,&quot;-moz-border-radius&quot;:i,&quot;-khtml-border-radius&quot;:i,&quot;box-shadow&quot;:&quot;0px 10px 20px #808080&quot;,&quot;-webkit-box-shadow&quot;:&quot;0px 10px 20px #808080&quot;,&quot;-moz-box-shadow&quot;:&quot;0px 10px 20px #808080&quot;,&quot;-khtml-box-shadow&quot;:&quot;0px 10px 20px #808080&quot;,filter:&quot;progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color=&#39;gray&#39;, Positive=&#39;true&#39;)&quot;},&quot;.MathJax_MenuItem&quot;:{padding:(n?&quot;2px 2em&quot;:&quot;1px 2em&quot;),background:&quot;transparent&quot;},&quot;.MathJax_MenuArrow&quot;:{position:&quot;absolute&quot;,right:&quot;.5em&quot;,color:&quot;#666666&quot;,&quot;font-family&quot;:(l?&quot;&#39;Arial unicode MS&#39;&quot;:null)},&quot;.MathJax_MenuActive .MathJax_MenuArrow&quot;:{color:&quot;white&quot;},&quot;.MathJax_MenuArrow.RTL&quot;:{left:&quot;.5em&quot;,right:&quot;auto&quot;},&quot;.MathJax_MenuCheck&quot;:{position:&quot;absolute&quot;,left:&quot;.7em&quot;,&quot;font-family&quot;:(l?&quot;&#39;Arial unicode MS&#39;&quot;:null)},&quot;.MathJax_MenuCheck.RTL&quot;:{right:&quot;.7em&quot;,left:&quot;auto&quot;},&quot;.MathJax_MenuRadioCheck&quot;:{position:&quot;absolute&quot;,left:(n?&quot;1em&quot;:&quot;.7em&quot;)},&quot;.MathJax_MenuRadioCheck.RTL&quot;:{right:(n?&quot;1em&quot;:&quot;.7em&quot;),left:&quot;auto&quot;},&quot;.MathJax_MenuLabel&quot;:{padding:(n?&quot;2px 2em 4px 1.33em&quot;:&quot;1px 2em 3px 1.33em&quot;),&quot;font-style&quot;:&quot;italic&quot;},&quot;.MathJax_MenuRule&quot;:{&quot;border-top&quot;:(n?&quot;1px solid #CCCCCC&quot;:&quot;1px solid #DDDDDD&quot;),margin:(n?&quot;4px 1px 0px&quot;:&quot;4px 3px&quot;)},&quot;.MathJax_MenuDisabled&quot;:{color:&quot;GrayText&quot;},&quot;.MathJax_MenuActive&quot;:{&quot;background-color&quot;:(n?&quot;Highlight&quot;:&quot;#606872&quot;),color:(n?&quot;HighlightText&quot;:&quot;white&quot;)},&quot;.MathJax_Menu_Close&quot;:{position:&quot;absolute&quot;,width:&quot;31px&quot;,height:&quot;31px&quot;,top:&quot;-15px&quot;,left:&quot;-15px&quot;}}});var h,d;c.Register.StartupHook(&quot;MathEvents Ready&quot;,function(){h=MathJax.Extension.MathEvents.Event.False;d=MathJax.Extension.MathEvents.Hover});var a=MathJax.Menu=MathJax.Object.Subclass({version:q,items:[],posted:false,title:null,margin:5,Init:function(r){this.items=[].slice.call(arguments,0)},With:function(r){if(r){c.Insert(this,r)}return this},Post:function(s,C,A){if(!s){s=window.event}var r=document.getElementById(&quot;MathJax_MenuFrame&quot;);if(!r){r=a.Background(this);delete m.lastItem;delete m.lastMenu;delete a.skipUp;j.Post([&quot;post&quot;,a.jax]);a.isRTL=(MathJax.Localization.fontDirection()===&quot;rtl&quot;)}var t=g.Element(&quot;div&quot;,{onmouseup:a.Mouseup,ondblclick:h,ondragstart:h,onselectstart:h,oncontextmenu:h,menuItem:this,className:&quot;MathJax_Menu&quot;});if(!A){MathJax.Localization.setCSS(t)}for(var v=0,u=this.items.length;v&lt;u;v++){this.items[v].Create(t)}if(a.isMobile){g.addElement(t,&quot;span&quot;,{className:&quot;MathJax_Menu_Close&quot;,menu:C,ontouchstart:a.Close,ontouchend:h,onmousedown:a.Close,onmouseup:h},[[&quot;img&quot;,{src:p.closeImg,style:{width:&quot;100%&quot;,height:&quot;100%&quot;}}]])}r.appendChild(t);this.posted=true;t.style.width=(t.offsetWidth+2)+&quot;px&quot;;var B=s.pageX,z=s.pageY;if(!B&amp;&amp;!z){B=s.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;z=s.clientY+document.body.scrollTop+document.documentElement.scrollTop}if(!C){if(B+t.offsetWidth&gt;document.body.offsetWidth-this.margin){B=document.body.offsetWidth-t.offsetWidth-this.margin}if(a.isMobile){B=Math.max(5,B-Math.floor(t.offsetWidth/2));z-=20}a.skipUp=s.isContextMenu}else{var w=&quot;left&quot;,D=C.offsetWidth;B=(a.isMobile?30:D-2);z=0;while(C&amp;&amp;C!==r){B+=C.offsetLeft;z+=C.offsetTop;C=C.parentNode}if(!a.isMobile){if((a.isRTL&amp;&amp;B-D-t.offsetWidth&gt;this.margin)||(!a.isRTL&amp;&amp;B+t.offsetWidth&gt;document.body.offsetWidth-this.margin)){w=&quot;right&quot;;B=Math.max(this.margin,B-D-t.offsetWidth+6)}}if(!n){t.style[&quot;borderRadiusTop&quot;+w]=0;t.style[&quot;WebkitBorderRadiusTop&quot;+w]=0;t.style[&quot;MozBorderRadiusTop&quot;+w]=0;t.style[&quot;KhtmlBorderRadiusTop&quot;+w]=0}}t.style.left=B+&quot;px&quot;;t.style.top=z+&quot;px&quot;;if(document.selection&amp;&amp;document.selection.empty){document.selection.empty()}return h(s)},Remove:function(r,s){j.Post([&quot;unpost&quot;,a.jax]);var t=document.getElementById(&quot;MathJax_MenuFrame&quot;);if(t){t.parentNode.removeChild(t);if(this.msieFixedPositionBug){detachEvent(&quot;onresize&quot;,a.Resize)}}if(a.jax.hover){delete a.jax.hover.nofade;d.UnHover(a.jax)}return h(r)},Find:function(r){return this.FindN(1,r,[].slice.call(arguments,1))},FindId:function(r){return this.FindN(0,r,[].slice.call(arguments,1))},FindN:function(v,s,u){for(var t=0,r=this.items.length;t&lt;r;t++){if(this.items[t].name[v]===s){if(u.length){if(!this.items[t].menu){return null}return this.items[t].menu.FindN(v,u[0],u.slice(1))}return this.items[t]}}return null},IndexOf:function(r){return this.IndexOfN(1,r)},IndexOfId:function(r){return this.IndexOfN(0,r)},IndexOfN:function(u,s){for(var t=0,r=this.items.length;t&lt;r;t++){if(this.items[t].name[u]===s){return t}}return null}},{config:p,div:null,Close:function(r){return a.Event(r,this.menu||this.parentNode,(this.menu?&quot;Touchend&quot;:&quot;Remove&quot;))},Remove:function(r){return a.Event(r,this,&quot;Remove&quot;)},Mouseover:function(r){return a.Event(r,this,&quot;Mouseover&quot;)},Mouseout:function(r){return a.Event(r,this,&quot;Mouseout&quot;)},Mousedown:function(r){return a.Event(r,this,&quot;Mousedown&quot;)},Mouseup:function(r){return a.Event(r,this,&quot;Mouseup&quot;)},Touchstart:function(r){return a.Event(r,this,&quot;Touchstart&quot;)},Touchend:function(r){return a.Event(r,this,&quot;Touchend&quot;)},Event:function(t,v,r,u){if(a.skipMouseover&amp;&amp;r===&quot;Mouseover&quot;&amp;&amp;!u){return h(t)}if(a.skipUp){if(r.match(/Mouseup|Touchend/)){delete a.skipUp;return h(t)}if(r===&quot;Touchstart&quot;||(r===&quot;Mousedown&quot;&amp;&amp;!a.skipMousedown)){delete a.skipUp}}if(!t){t=window.event}var s=v.menuItem;if(s&amp;&amp;s[r]){return s[r](t,v)}return null},BGSTYLE:{position:&quot;absolute&quot;,left:0,top:0,&quot;z-index&quot;:200,width:&quot;100%&quot;,height:&quot;100%&quot;,border:0,padding:0,margin:0},Background:function(s){var t=g.addElement(document.body,&quot;div&quot;,{style:this.BGSTYLE,id:&quot;MathJax_MenuFrame&quot;},[[&quot;div&quot;,{style:this.BGSTYLE,menuItem:s,onmousedown:this.Remove}]]);var r=t.firstChild;if(a.msieBackgroundBug){r.style.backgroundColor=&quot;white&quot;;r.style.filter=&quot;alpha(opacity=0)&quot;}if(a.msieFixedPositionBug){t.width=t.height=0;this.Resize();attachEvent(&quot;onresize&quot;,this.Resize)}else{r.style.position=&quot;fixed&quot;}return t},Resize:function(){setTimeout(a.SetWH,0)},SetWH:function(){var r=document.getElementById(&quot;MathJax_MenuFrame&quot;);if(r){r=r.firstChild;r.style.width=r.style.height=&quot;1px&quot;;r.style.width=document.body.scrollWidth+&quot;px&quot;;r.style.height=document.body.scrollHeight+&quot;px&quot;}},saveCookie:function(){g.Cookie.Set(&quot;menu&quot;,this.cookie)},getCookie:function(){this.cookie=g.Cookie.Get(&quot;menu&quot;)},getImages:function(){if(a.isMobile){var r=new Image();r.src=p.closeImg}}});var m=a.ITEM=MathJax.Object.Subclass({name:&quot;&quot;,Create:function(s){if(!this.hidden){var r={onmouseover:a.Mouseover,onmouseout:a.Mouseout,onmouseup:a.Mouseup,onmousedown:a.Mousedown,ondragstart:h,onselectstart:h,onselectend:h,ontouchstart:a.Touchstart,ontouchend:a.Touchend,className:&quot;MathJax_MenuItem&quot;,menuItem:this};if(this.disabled){r.className+=&quot; MathJax_MenuDisabled&quot;}g.addElement(s,&quot;div&quot;,r,this.Label(r,s))}},Name:function(){return o(this.name[0],this.name[1])},Mouseover:function(v,x){if(!this.disabled){this.Activate(x)}if(!this.menu||!this.menu.posted){var w=document.getElementById(&quot;MathJax_MenuFrame&quot;).childNodes,s=x.parentNode.childNodes;for(var t=0,r=s.length;t&lt;r;t++){var u=s[t].menuItem;if(u&amp;&amp;u.menu&amp;&amp;u.menu.posted){u.Deactivate(s[t])}}r=w.length-1;while(r&gt;=0&amp;&amp;x.parentNode.menuItem!==w[r].menuItem){w[r].menuItem.posted=false;w[r].parentNode.removeChild(w[r]);r--}if(this.Timer&amp;&amp;!a.isMobile){this.Timer(v,x)}}},Mouseout:function(r,s){if(!this.menu||!this.menu.posted){this.Deactivate(s)}if(this.timer){clearTimeout(this.timer);delete this.timer}},Mouseup:function(r,s){return this.Remove(r,s)},Touchstart:function(r,s){return this.TouchEvent(r,s,&quot;Mousedown&quot;)},Touchend:function(r,s){return this.TouchEvent(r,s,&quot;Mouseup&quot;)},TouchEvent:function(s,t,r){if(this!==m.lastItem){if(m.lastMenu){a.Event(s,m.lastMenu,&quot;Mouseout&quot;)}a.Event(s,t,&quot;Mouseover&quot;,true);m.lastItem=this;m.lastMenu=t}if(this.nativeTouch){return null}a.Event(s,t,r);return false},Remove:function(r,s){s=s.parentNode.menuItem;return s.Remove(r,s)},Activate:function(r){this.Deactivate(r);r.className+=&quot; MathJax_MenuActive&quot;},Deactivate:function(r){r.className=r.className.replace(/ MathJax_MenuActive/,&quot;&quot;)},With:function(r){if(r){c.Insert(this,r)}return this},isRTL:function(){return a.isRTL},rtlClass:function(){return(this.isRTL()?&quot; RTL&quot;:&quot;&quot;)}});a.ITEM.COMMAND=a.ITEM.Subclass({action:function(){},Init:function(r,t,s){if(!(r instanceof Array)){r=[r,r]}this.name=r;this.action=t;this.With(s)},Label:function(r,s){return[this.Name()]},Mouseup:function(r,s){if(!this.disabled){this.Remove(r,s);j.Post([&quot;command&quot;,this]);this.action.call(this,r)}return h(r)}});a.ITEM.SUBMENU=a.ITEM.Subclass({menu:null,marker:(n&amp;&amp;!c.Browser.isSafari?&quot;\u25B6&quot;:&quot;\u25B8&quot;),markerRTL:(n&amp;&amp;!c.Browser.isSafari?&quot;\u25B0&quot;:&quot;\u25C2&quot;),Init:function(r,t){if(!(r instanceof Array)){r=[r,r]}this.name=r;var s=1;if(!(t instanceof a.ITEM)){this.With(t),s++}this.menu=a.apply(a,[].slice.call(arguments,s))},Label:function(r,s){this.menu.posted=false;return[this.Name()+&quot; &quot;,[&quot;span&quot;,{className:&quot;MathJax_MenuArrow&quot;+this.rtlClass()},[this.isRTL()?this.markerRTL:this.marker]]]},Timer:function(r,s){if(this.timer){clearTimeout(this.timer)}r={clientX:r.clientX,clientY:r.clientY};this.timer=setTimeout(f([&quot;Mouseup&quot;,this,r,s]),p.delay)},Touchend:function(s,u){var t=this.menu.posted;var r=this.SUPER(arguments).Touchend.apply(this,arguments);if(t){this.Deactivate(u);delete m.lastItem;delete m.lastMenu}return r},Mouseup:function(s,u){if(!this.disabled){if(!this.menu.posted){if(this.timer){clearTimeout(this.timer);delete this.timer}this.menu.Post(s,u,this.ltr)}else{var t=document.getElementById(&quot;MathJax_MenuFrame&quot;).childNodes,r=t.length-1;while(r&gt;=0){var v=t[r];v.menuItem.posted=false;v.parentNode.removeChild(v);if(v.menuItem===this.menu){break}r--}}}return h(s)}});a.ITEM.RADIO=a.ITEM.Subclass({variable:null,marker:(n?&quot;\u25CF&quot;:&quot;\u2713&quot;),Init:function(s,r,t){if(!(s instanceof Array)){s=[s,s]}this.name=s;this.variable=r;this.With(t);if(this.value==null){this.value=this.name[0]}},Label:function(s,t){var r={className:&quot;MathJax_MenuRadioCheck&quot;+this.rtlClass()};if(p.settings[this.variable]!==this.value){r={style:{display:&quot;none&quot;}}}return[[&quot;span&quot;,r,[this.marker]],&quot; &quot;+this.Name()]},Mouseup:function(u,v){if(!this.disabled){var w=v.parentNode.childNodes;for(var s=0,r=w.length;s&lt;r;s++){var t=w[s].menuItem;if(t&amp;&amp;t.variable===this.variable){w[s].firstChild.style.display=&quot;none&quot;}}v.firstChild.display=&quot;&quot;;p.settings[this.variable]=this.value;a.cookie[this.variable]=p.settings[this.variable];a.saveCookie();j.Post([&quot;radio button&quot;,this])}this.Remove(u,v);if(this.action&amp;&amp;!this.disabled){this.action.call(a,this)}return h(u)}});a.ITEM.CHECKBOX=a.ITEM.Subclass({variable:null,marker:&quot;\u2713&quot;,Init:function(s,r,t){if(!(s instanceof Array)){s=[s,s]}this.name=s;this.variable=r;this.With(t)},Label:function(s,t){var r={className:&quot;MathJax_MenuCheck&quot;+this.rtlClass()};if(!p.settings[this.variable]){r={style:{display:&quot;none&quot;}}}return[[&quot;span&quot;,r,[this.marker]],&quot; &quot;+this.Name()]},Mouseup:function(r,s){if(!this.disabled){s.firstChild.display=(p.settings[this.variable]?&quot;none&quot;:&quot;&quot;);p.settings[this.variable]=!p.settings[this.variable];a.cookie[this.variable]=p.settings[this.variable];a.saveCookie();j.Post([&quot;checkbox&quot;,this])}this.Remove(r,s);if(this.action&amp;&amp;!this.disabled){this.action.call(a,this)}return h(r)}});a.ITEM.LABEL=a.ITEM.Subclass({Init:function(r,s){if(!(r instanceof Array)){r=[r,r]}this.name=r;this.With(s)},Label:function(r,s){delete r.onmouseover,delete r.onmouseout;delete r.onmousedown;r.className+=&quot; MathJax_MenuLabel&quot;;return[this.Name()]}});a.ITEM.RULE=a.ITEM.Subclass({Label:function(r,s){delete r.onmouseover,delete r.onmouseout;delete r.onmousedown;r.className+=&quot; MathJax_MenuRule&quot;;return null}});a.About=function(){var t=b[&quot;HTML-CSS&quot;]||{};var s=(t.imgFonts?&quot;image&quot;:(t.fontInUse?(t.webFonts?&quot;web&quot;:&quot;local&quot;)+&quot; &quot;+t.fontInUse:(b.SVG?&quot;web SVG&quot;:&quot;generic&quot;)))+&quot; fonts&quot;;var x=(!t.webFonts||t.imgFonts?null:t.allowWebFonts.replace(/otf/,&quot;woff or otf&quot;)+&quot; fonts&quot;);var r=[&quot;MathJax.js v&quot;+MathJax.fileversion,[&quot;br&quot;]];r.push([&quot;div&quot;,{style:{&quot;border-top&quot;:&quot;groove 2px&quot;,margin:&quot;.25em 0&quot;}}]);a.About.GetJax(r,MathJax.InputJax,[&quot;InputJax&quot;,&quot;%1 Input Jax v%2&quot;]);a.About.GetJax(r,MathJax.OutputJax,[&quot;OutputJax&quot;,&quot;%1 Output Jax v%2&quot;]);a.About.GetJax(r,MathJax.ElementJax,[&quot;ElementJax&quot;,&quot;%1 Element Jax v%2&quot;]);r.push([&quot;div&quot;,{style:{&quot;border-top&quot;:&quot;groove 2px&quot;,margin:&quot;.25em 0&quot;}}]);a.About.GetJax(r,MathJax.Extension,[&quot;Extension&quot;,&quot;%1 Extension v%2&quot;],true);r.push([&quot;div&quot;,{style:{&quot;border-top&quot;:&quot;groove 2px&quot;,margin:&quot;.25em 0&quot;}}],[&quot;center&quot;,{},[c.Browser+&quot; v&quot;+c.Browser.version+(x?&quot; \u2014 &quot;+o(x.replace(/ /g,&quot;&quot;),x):&quot;&quot;)]]);a.About.div=a.Background(a.About);var v=g.addElement(a.About.div,&quot;div&quot;,{id:&quot;MathJax_About&quot;},[[&quot;b&quot;,{style:{fontSize:&quot;120%&quot;}},[&quot;MathJax&quot;]],&quot; v&quot;+MathJax.version,[&quot;br&quot;],o(s.replace(/ /g,&quot;&quot;),&quot;using &quot;+s),[&quot;br&quot;],[&quot;br&quot;],[&quot;span&quot;,{style:{display:&quot;inline-block&quot;,&quot;text-align&quot;:&quot;left&quot;,&quot;font-size&quot;:&quot;80%&quot;,&quot;max-height&quot;:&quot;20em&quot;,overflow:&quot;auto&quot;,&quot;background-color&quot;:&quot;#E4E4E4&quot;,padding:&quot;.4em .6em&quot;,border:&quot;1px inset&quot;}},r],[&quot;br&quot;],[&quot;br&quot;],[&quot;a&quot;,{href:&quot;http://www.mathjax.org/&quot;},[&quot;www.mathjax.org&quot;]],[&quot;img&quot;,{src:p.closeImg,style:{width:&quot;21px&quot;,height:&quot;21px&quot;,position:&quot;absolute&quot;,top:&quot;.2em&quot;,right:&quot;.2em&quot;},onclick:a.About.Remove}]]);MathJax.Localization.setCSS(v);var w=(document.documentElement||{});var u=window.innerHeight||w.clientHeight||w.scrollHeight||0;if(a.prototype.msieAboutBug){v.style.width=&quot;20em&quot;;v.style.position=&quot;absolute&quot;;v.style.left=Math.floor((document.documentElement.scrollWidth-v.offsetWidth)/2)+&quot;px&quot;;v.style.top=(Math.floor((u-v.offsetHeight)/3)+document.body.scrollTop)+&quot;px&quot;}else{v.style.marginLeft=Math.floor(-v.offsetWidth/2)+&quot;px&quot;;v.style.top=Math.floor((u-v.offsetHeight)/3)+&quot;px&quot;}};a.About.Remove=function(r){if(a.About.div){document.body.removeChild(a.About.div);delete a.About.div}};a.About.GetJax=function(s,x,v,u){var w=[];for(var y in x){if(x.hasOwnProperty(y)&amp;&amp;x[y]){if((u&amp;&amp;x[y].version)||(x[y].isa&amp;&amp;x[y].isa(x))){w.push(o(v[0],v[1],(x[y].id||y),x[y].version))}}}w.sort();for(var t=0,r=w.length;t&lt;r;t++){s.push(w[t],[&quot;br&quot;])}return s};a.Help=function(){k.Require(&quot;[MathJax]/extensions/HelpDialog.js&quot;,function(){MathJax.Extension.Help.Dialog()})};a.ShowSource=function(v){if(!v){v=window.event}var u={screenX:v.screenX,screenY:v.screenY};if(!a.jax){return}if(this.format===&quot;MathML&quot;){var s=MathJax.ElementJax.mml;if(s&amp;&amp;typeof(s.mbase.prototype.toMathML)!==&quot;undefined&quot;){try{a.ShowSource.Text(a.jax.root.toMathML(&quot;&quot;,a.jax),v)}catch(t){if(!t.restart){throw t}f.After([this,a.ShowSource,u],t.restart)}}else{if(!k.loadingToMathML){k.loadingToMathML=true;a.ShowSource.Window(v);f.Queue(k.Require(&quot;[MathJax]/extensions/toMathML.js&quot;),function(){delete k.loadingToMathML;if(!s.mbase.prototype.toMathML){s.mbase.prototype.toMathML=function(){}}},[this,a.ShowSource,u]);return}}}else{if(this.format===&quot;Error&quot;){a.ShowSource.Text(a.jax.errorText,v)}else{if(p.semanticsAnnotations[this.format]){var r=a.jax.root.getAnnotation(this.format);if(r.data[0]){a.ShowSource.Text(r.data[0].toString())}}else{if(a.jax.originalText==null){alert(o(&quot;NoOriginalForm&quot;,&quot;No original form available&quot;));return}a.ShowSource.Text(a.jax.originalText,v)}}}};a.ShowSource.Window=function(s){if(!a.ShowSource.w){var t=[],r=p.windowSettings;for(var u in r){if(r.hasOwnProperty(u)){t.push(u+&quot;=&quot;+r[u])}}a.ShowSource.w=window.open(&quot;&quot;,&quot;_blank&quot;,t.join(&quot;,&quot;))}return a.ShowSource.w};a.ShowSource.Text=function(v,t){var r=a.ShowSource.Window(t);delete a.ShowSource.w;v=v.replace(/^\s*/,&quot;&quot;).replace(/\s*$/,&quot;&quot;);v=v.replace(/&amp;/g,&quot;&amp;amp;&quot;).replace(/&lt;/g,&quot;&amp;lt;&quot;).replace(/&gt;/g,&quot;&amp;gt;&quot;);var u=o(&quot;EqSource&quot;,&quot;MathJax Equation Source&quot;);if(a.isMobile){r.document.open();r.document.write(&quot;&lt;html&gt;&lt;head&gt;&lt;meta name=&#39;viewport&#39; content=&#39;width=device-width, initial-scale=1.0&#39; /&gt;&lt;title&gt;&quot;+u+&quot;&lt;/title&gt;&lt;/head&gt;&lt;body style=&#39;font-size:85%&#39;&gt;&quot;);r.document.write(&quot;&lt;pre&gt;&quot;+v+&quot;&lt;/pre&gt;&quot;);r.document.write(&quot;&lt;hr&gt;&lt;input type=&#39;button&#39; value=&#39;&quot;+o(&quot;Close&quot;,&quot;Close&quot;)+&quot;&#39; onclick=&#39;window.close()&#39; /&gt;&quot;);r.document.write(&quot;&lt;/body&gt;&lt;/html&gt;&quot;);r.document.close()}else{r.document.open();r.document.write(&quot;&lt;html&gt;&lt;head&gt;&lt;title&gt;&quot;+u+&quot;&lt;/title&gt;&lt;/head&gt;&lt;body style=&#39;font-size:85%&#39;&gt;&quot;);r.document.write(&quot;&lt;table&gt;&lt;tr&gt;&lt;td&gt;&lt;pre&gt;&quot;+v+&quot;&lt;/pre&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;);r.document.write(&quot;&lt;/body&gt;&lt;/html&gt;&quot;);r.document.close();var s=r.document.body.firstChild;setTimeout(function(){var A=(r.outerHeight-r.innerHeight)||30,z=(r.outerWidth-r.innerWidth)||30,w,D;z=Math.max(100,Math.min(Math.floor(0.5*screen.width),s.offsetWidth+z+25));A=Math.max(40,Math.min(Math.floor(0.5*screen.height),s.offsetHeight+A+25));if(a.prototype.msieHeightBug){A+=35}r.resizeTo(z,A);var C;try{C=t.screenX}catch(B){}if(t&amp;&amp;C!=null){w=Math.max(0,Math.min(t.screenX-Math.floor(z/2),screen.width-z-20));D=Math.max(0,Math.min(t.screenY-Math.floor(A/2),screen.height-A-20));r.moveTo(w,D)}},50)}};a.Scale=function(){var s=b[&quot;HTML-CSS&quot;],r=b.NativeMML,v=b.SVG;var u=(s||r||v||{config:{scale:100}}).config.scale;var t=prompt(o(&quot;ScaleMath&quot;,&quot;Scale all mathematics (compared to surrounding text) by&quot;),u+&quot;%&quot;);if(t){if(t.match(/^\s*\d+(\.\d*)?\s*%?\s*$/)){t=parseFloat(t);if(t){if(t!==u){if(s){s.config.scale=t}if(r){r.config.scale=t}if(v){v.config.scale=t}a.cookie.scale=t;a.saveCookie();c.Rerender()}}else{alert(o(&quot;NonZeroScale&quot;,&quot;The scale should not be zero&quot;))}}else{alert(o(&quot;PercentScale&quot;,&quot;The scale should be a percentage (e.g., 120%%)&quot;))}}};a.Zoom=function(){if(!MathJax.Extension.MathZoom){k.Require(&quot;[MathJax]/extensions/MathZoom.js&quot;)}};a.Renderer=function(){var s=c.outputJax[&quot;jax/mml&quot;];if(s[0]!==p.settings.renderer){var v=c.Browser,u,r=a.Renderer.Messages,t;switch(p.settings.renderer){case&quot;NativeMML&quot;:if(!p.settings.warnedMML){if(v.isChrome&amp;&amp;v.version.substr(0,3)!==&quot;24.&quot;){u=r.MML.WebKit}else{if(v.isSafari&amp;&amp;!v.versionAtLeast(&quot;5.0&quot;)){u=r.MML.WebKit}else{if(v.isMSIE){if(!v.hasMathPlayer){u=r.MML.MSIE}}else{u=r.MML[v]}}}t=&quot;warnedMML&quot;}break;case&quot;SVG&quot;:if(!p.settings.warnedSVG){if(v.isMSIE&amp;&amp;!e){u=r.SVG.MSIE}}break}if(u){u=o(u[0],u[1]);u+=&quot;\n\n&quot;;u+=o(&quot;SwitchAnyway&quot;,&quot;Switch the renderer anyway?\n\n(Press OK to switch, CANCEL to continue with the current renderer)&quot;);a.cookie.renderer=s[0].id;a.saveCookie();if(!confirm(u)){a.cookie.renderer=p.settings.renderer=g.Cookie.Get(&quot;menu&quot;).renderer;a.saveCookie();return}if(t){a.cookie.warned=p.settings.warned=true}a.cookie.renderer=p.settings.renderer;a.saveCookie()}c.Queue([&quot;setRenderer&quot;,c,p.settings.renderer,&quot;jax/mml&quot;],[&quot;Rerender&quot;,c])}};a.Renderer.Messages={MML:{WebKit:[&quot;WebkitNativeMMLWarning&quot;,&quot;Your browser doesn&#39;t seem to support MathML natively, so switching to MathML output may cause the mathematics on the page to become unreadable.&quot;],MSIE:[&quot;MSIENativeMMLWarning&quot;,&quot;Internet Explorer requires the MathPlayer plugin in order to process MathML output.&quot;],Opera:[&quot;OperaNativeMMLWarning&quot;,&quot;Opera&#39;s support for MathML is limited, so switching to MathML output may cause some expressions to render poorly.&quot;],Safari:[&quot;SafariNativeMMLWarning&quot;,&quot;Your browser&#39;s native MathML does not implement all the features used by MathJax, so some expressions may not render properly.&quot;],Firefox:[&quot;FirefoxNativeMMLWarning&quot;,&quot;Your browser&#39;s native MathML does not implement all the features used by MathJax, so some expressions may not render properly.&quot;]},SVG:{MSIE:[&quot;MSIESVGWarning&quot;,&quot;SVG is not implemented in Internet Explorer prior to IE9 or when it is emulating IE8 or below. Switching to SVG output will cause the mathematics to not display properly.&quot;]}};a.Font=function(){var r=b[&quot;HTML-CSS&quot;];if(!r){return}document.location.reload()};a.Locale=function(){MathJax.Localization.setLocale(p.settings.locale);MathJax.Hub.Queue([&quot;Reprocess&quot;,MathJax.Hub])};a.LoadLocale=function(){var r=prompt(o(&quot;LoadURL&quot;,&quot;Load translation data from this URL:&quot;));if(r){if(!r.match(/\.js$/)){alert(o(&quot;BadURL&quot;,&quot;The URL should be for a javascript file that defines MathJax translation data.  Javascript file names should end with &#39;.js&#39;&quot;))}k.Require(r,function(s){if(s!=k.STATUS.OK){alert(o(&quot;BadData&quot;,&quot;Failed to load translation data from %1&quot;,r))}})}};a.MPEvents=function(t){var s=p.settings.discoverable,r=a.MPEvents.Messages;if(!e){if(p.settings.mpMouse&amp;&amp;!confirm(o.apply(o,r.IE8warning))){delete a.cookie.mpContext;delete p.settings.mpContext;delete a.cookie.mpMouse;delete p.settings.mpMouse;a.saveCookie();return}p.settings.mpContext=p.settings.mpMouse;a.cookie.mpContext=a.cookie.mpMouse=p.settings.mpMouse;a.saveCookie();MathJax.Hub.Queue([&quot;Rerender&quot;,MathJax.Hub])}else{if(!s&amp;&amp;t.name[1]===&quot;Menu Events&quot;&amp;&amp;p.settings.mpContext){alert(o.apply(o,r.IE9warning))}}};a.MPEvents.Messages={IE8warning:[&quot;IE8warning&quot;,&quot;This will disable the MathJax menu and zoom features, but you can Alt-Click on an expression to obtain the MathJax menu instead.\n\nReally change the MathPlayer settings?&quot;],IE9warning:[&quot;IE9warning&quot;,&quot;The MathJax contextual menu will be disabled, but you can Alt-Click on an expression to obtain the MathJax menu instead.&quot;]};c.Browser.Select({MSIE:function(r){var s=(document.compatMode===&quot;BackCompat&quot;);var t=r.versionAtLeast(&quot;8.0&quot;)&amp;&amp;document.documentMode&gt;7;a.Augment({margin:20,msieBackgroundBug:((document.documentMode||0)&lt;9),msieFixedPositionBug:(s||!t),msieAboutBug:s,msieHeightBug:((document.documentMode||0)&lt;9)});if(e){delete p.styles[&quot;#MathJax_About&quot;].filter;delete p.styles[&quot;.MathJax_Menu&quot;].filter}},Firefox:function(r){a.skipMouseover=r.isMobile&amp;&amp;r.versionAtLeast(&quot;6.0&quot;);a.skipMousedown=r.isMobile}});a.isMobile=c.Browser.isMobile;a.noContextMenu=c.Browser.noContextMenu;a.CreateLocaleMenu=function(){if(!a.menu){return}var w=a.menu.Find(&quot;Language&quot;).menu,t=w.items;var s=[],y=MathJax.Localization.strings;for(var x in y){if(y.hasOwnProperty(x)){s.push(x)}}s=s.sort();w.items=[];for(var u=0,r=s.length;u&lt;r;u++){var v=y[s[u]].menuTitle;if(v){v+=&quot; (&quot;+s[u]+&quot;)&quot;}else{v=s[u]}w.items.push(m.RADIO([s[u],v],&quot;locale&quot;,{action:a.Locale}))}w.items.push(t[t.length-2],t[t.length-1])};a.CreateAnnotationMenu=function(){if(!a.menu){return}var t=a.menu.Find(&quot;Show Math As&quot;,&quot;Annotation&quot;).menu;var s=p.semanticsAnnotations;for(var r in s){if(s.hasOwnProperty(r)){t.items.push(m.COMMAND([r,r],a.ShowSource,{hidden:true,nativeTouch:true,format:r}))}}};c.Register.StartupHook(&quot;End Config&quot;,function(){p.settings=c.config.menuSettings;if(typeof(p.settings.showRenderer)!==&quot;undefined&quot;){p.showRenderer=p.settings.showRenderer}if(typeof(p.settings.showFontMenu)!==&quot;undefined&quot;){p.showFontMenu=p.settings.showFontMenu}if(typeof(p.settings.showContext)!==&quot;undefined&quot;){p.showContext=p.settings.showContext}a.getCookie();a.menu=a(m.SUBMENU([&quot;Show&quot;,&quot;Show Math As&quot;],m.COMMAND([&quot;MathMLcode&quot;,&quot;MathML Code&quot;],a.ShowSource,{nativeTouch:true,format:&quot;MathML&quot;}),m.COMMAND([&quot;Original&quot;,&quot;Original Form&quot;],a.ShowSource,{nativeTouch:true}),m.SUBMENU([&quot;Annotation&quot;,&quot;Annotation&quot;],{disabled:true}),m.RULE(),m.CHECKBOX([&quot;texHints&quot;,&quot;Show TeX hints in MathML&quot;],&quot;texHints&quot;),m.CHECKBOX([&quot;semantics&quot;,&quot;Add original form as annotation&quot;],&quot;semantics&quot;)),m.RULE(),m.SUBMENU([&quot;Settings&quot;,&quot;Math Settings&quot;],m.SUBMENU([&quot;ZoomTrigger&quot;,&quot;Zoom Trigger&quot;],m.RADIO([&quot;Hover&quot;,&quot;Hover&quot;],&quot;zoom&quot;,{action:a.Zoom}),m.RADIO([&quot;Click&quot;,&quot;Click&quot;],&quot;zoom&quot;,{action:a.Zoom}),m.RADIO([&quot;DoubleClick&quot;,&quot;Double-Click&quot;],&quot;zoom&quot;,{action:a.Zoom}),m.RADIO([&quot;NoZoom&quot;,&quot;No Zoom&quot;],&quot;zoom&quot;,{value:&quot;None&quot;}),m.RULE(),m.LABEL([&quot;TriggerRequires&quot;,&quot;Trigger Requires:&quot;]),m.CHECKBOX((c.Browser.isMac?[&quot;Option&quot;,&quot;Option&quot;]:[&quot;Alt&quot;,&quot;Alt&quot;]),&quot;ALT&quot;),m.CHECKBOX([&quot;Command&quot;,&quot;Command&quot;],&quot;CMD&quot;,{hidden:!c.Browser.isMac}),m.CHECKBOX([&quot;Control&quot;,&quot;Control&quot;],&quot;CTRL&quot;,{hidden:c.Browser.isMac}),m.CHECKBOX([&quot;Shift&quot;,&quot;Shift&quot;],&quot;Shift&quot;)),m.SUBMENU([&quot;ZoomFactor&quot;,&quot;Zoom Factor&quot;],m.RADIO(&quot;125%&quot;,&quot;zscale&quot;),m.RADIO(&quot;133%&quot;,&quot;zscale&quot;),m.RADIO(&quot;150%&quot;,&quot;zscale&quot;),m.RADIO(&quot;175%&quot;,&quot;zscale&quot;),m.RADIO(&quot;200%&quot;,&quot;zscale&quot;),m.RADIO(&quot;250%&quot;,&quot;zscale&quot;),m.RADIO(&quot;300%&quot;,&quot;zscale&quot;),m.RADIO(&quot;400%&quot;,&quot;zscale&quot;)),m.RULE(),m.SUBMENU([&quot;Renderer&quot;,&quot;Math Renderer&quot;],{hidden:!p.showRenderer},m.RADIO(&quot;HTML-CSS&quot;,&quot;renderer&quot;,{action:a.Renderer}),m.RADIO(&quot;Fast HTML&quot;,&quot;renderer&quot;,{action:a.Renderer,value:&quot;CommonHTML&quot;}),m.RADIO(&quot;MathML&quot;,&quot;renderer&quot;,{action:a.Renderer,value:&quot;NativeMML&quot;}),m.RADIO(&quot;SVG&quot;,&quot;renderer&quot;,{action:a.Renderer}),m.RULE(),m.CHECKBOX(&quot;Fast Preview&quot;,&quot;CHTMLpreview&quot;)),m.SUBMENU(&quot;MathPlayer&quot;,{hidden:!c.Browser.isMSIE||!p.showMathPlayer,disabled:!c.Browser.hasMathPlayer},m.LABEL([&quot;MPHandles&quot;,&quot;Let MathPlayer Handle:&quot;]),m.CHECKBOX([&quot;MenuEvents&quot;,&quot;Menu Events&quot;],&quot;mpContext&quot;,{action:a.MPEvents,hidden:!e}),m.CHECKBOX([&quot;MouseEvents&quot;,&quot;Mouse Events&quot;],&quot;mpMouse&quot;,{action:a.MPEvents,hidden:!e}),m.CHECKBOX([&quot;MenuAndMouse&quot;,&quot;Mouse and Menu Events&quot;],&quot;mpMouse&quot;,{action:a.MPEvents,hidden:e})),m.SUBMENU([&quot;FontPrefs&quot;,&quot;Font Preference&quot;],{hidden:!p.showFontMenu},m.LABEL([&quot;ForHTMLCSS&quot;,&quot;For HTML-CSS:&quot;]),m.RADIO([&quot;Auto&quot;,&quot;Auto&quot;],&quot;font&quot;,{action:a.Font}),m.RULE(),m.RADIO([&quot;TeXLocal&quot;,&quot;TeX (local)&quot;],&quot;font&quot;,{action:a.Font}),m.RADIO([&quot;TeXWeb&quot;,&quot;TeX (web)&quot;],&quot;font&quot;,{action:a.Font}),m.RADIO([&quot;TeXImage&quot;,&quot;TeX (image)&quot;],&quot;font&quot;,{action:a.Font}),m.RULE(),m.RADIO([&quot;STIXLocal&quot;,&quot;STIX (local)&quot;],&quot;font&quot;,{action:a.Font}),m.RADIO([&quot;STIXWeb&quot;,&quot;STIX (web)&quot;],&quot;font&quot;,{action:a.Font}),m.RULE(),m.RADIO([&quot;AsanaMathWeb&quot;,&quot;Asana Math (web)&quot;],&quot;font&quot;,{action:a.Font}),m.RADIO([&quot;GyrePagellaWeb&quot;,&quot;Gyre Pagella (web)&quot;],&quot;font&quot;,{action:a.Font}),m.RADIO([&quot;GyreTermesWeb&quot;,&quot;Gyre Termes (web)&quot;],&quot;font&quot;,{action:a.Font}),m.RADIO([&quot;LatinModernWeb&quot;,&quot;Latin Modern (web)&quot;],&quot;font&quot;,{action:a.Font}),m.RADIO([&quot;NeoEulerWeb&quot;,&quot;Neo Euler (web)&quot;],&quot;font&quot;,{action:a.Font})),m.SUBMENU([&quot;ContextMenu&quot;,&quot;Contextual Menu&quot;],{hidden:!p.showContext},m.RADIO(&quot;MathJax&quot;,&quot;context&quot;),m.RADIO([&quot;Browser&quot;,&quot;Browser&quot;],&quot;context&quot;)),m.COMMAND([&quot;Scale&quot;,&quot;Scale All Math ...&quot;],a.Scale),m.RULE().With({hidden:!p.showDiscoverable,name:[&quot;&quot;,&quot;discover_rule&quot;]}),m.CHECKBOX([&quot;Discoverable&quot;,&quot;Highlight on Hover&quot;],&quot;discoverable&quot;,{hidden:!p.showDiscoverable})),m.SUBMENU([&quot;Locale&quot;,&quot;Language&quot;],{hidden:!p.showLocale,ltr:true},m.RADIO(&quot;en&quot;,&quot;locale&quot;,{action:a.Locale}),m.RULE().With({hidden:!p.showLocaleURL,name:[&quot;&quot;,&quot;localURL_rule&quot;]}),m.COMMAND([&quot;LoadLocale&quot;,&quot;Load from URL ...&quot;],a.LoadLocale,{hidden:!p.showLocaleURL})),m.RULE(),m.COMMAND([&quot;About&quot;,&quot;About MathJax&quot;],a.About),m.COMMAND([&quot;Help&quot;,&quot;MathJax Help&quot;],a.Help));if(a.isMobile){(function(){var s=p.settings;var r=a.menu.Find(&quot;Math Settings&quot;,&quot;Zoom Trigger&quot;).menu;r.items[0].disabled=r.items[1].disabled=true;if(s.zoom===&quot;Hover&quot;||s.zoom==&quot;Click&quot;){s.zoom=&quot;None&quot;}r.items=r.items.slice(0,4);if(navigator.appVersion.match(/[ (]Android[) ]/)){a.ITEM.SUBMENU.Augment({marker:&quot;\u00BB&quot;})}})()}a.CreateLocaleMenu();a.CreateAnnotationMenu()});a.showRenderer=function(r){a.cookie.showRenderer=p.showRenderer=r;a.saveCookie();a.menu.Find(&quot;Math Settings&quot;,&quot;Math Renderer&quot;).hidden=!r};a.showMathPlayer=function(r){a.cookie.showMathPlayer=p.showMathPlayer=r;a.saveCookie();a.menu.Find(&quot;Math Settings&quot;,&quot;MathPlayer&quot;).hidden=!r};a.showFontMenu=function(r){a.cookie.showFontMenu=p.showFontMenu=r;a.saveCookie();a.menu.Find(&quot;Math Settings&quot;,&quot;Font Preference&quot;).hidden=!r};a.showContext=function(r){a.cookie.showContext=p.showContext=r;a.saveCookie();a.menu.Find(&quot;Math Settings&quot;,&quot;Contextual Menu&quot;).hidden=!r};a.showDiscoverable=function(r){a.cookie.showDiscoverable=p.showDiscoverable=r;a.saveCookie();a.menu.Find(&quot;Math Settings&quot;,&quot;Highlight on Hover&quot;).hidden=!r;a.menu.Find(&quot;Math Settings&quot;,&quot;discover_rule&quot;).hidden=!r};a.showLocale=function(r){a.cookie.showLocale=p.showLocale=r;a.saveCookie();a.menu.Find(&quot;Language&quot;).hidden=!r};MathJax.Hub.Register.StartupHook(&quot;HTML-CSS Jax Ready&quot;,function(){if(!MathJax.OutputJax[&quot;HTML-CSS&quot;].config.imageFont){a.menu.Find(&quot;Math Settings&quot;,&quot;Font Preference&quot;,&quot;TeX (image)&quot;).disabled=true}});f.Queue(c.Register.StartupHook(&quot;End Config&quot;,{}),[&quot;getImages&quot;,a],[&quot;Styles&quot;,k,p.styles],[&quot;Post&quot;,c.Startup.signal,&quot;MathMenu Ready&quot;],[&quot;loadComplete&quot;,k,&quot;[MathJax]/extensions/MathMenu.js&quot;])})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.CallBack,MathJax.OutputJax);</td>
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
      <li>&copy; 2015 <span title="0.04297s from github-fe132-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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

