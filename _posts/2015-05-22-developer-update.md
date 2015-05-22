---

layout: post
title: "Weekly Technology Deep-Dive: The CSS Edition"
excerpt: We're passionate about our craft and spend significant time and effort exploring the (near) future of web and mobile development. We'd like to share the results of that research in hopes that we can learn together.
legacy: false
author:
  name: Matt Dean
  twitter: trabianmatt
  bio: Founder and CEO of Trabian
  image: authors/matt.png
---

As Trey mentioned in [Dusting off Open Source CU](/2015/05/19/back/), we want Open Source CU to serve as a platform for discussing technology trends and sharing code in addition to more strategic discussions. We're passionate about our craft and spend significant time and effort exploring the (near) future of web and mobile development. Over time we'll present this research within the context of building high-quality member experience and show how these pieces fit together, but we also want to engage those who are building the next generation of banking.

This week our focus is on some of the changes happening in the world of CSS. Here are some articles we found interesting:
  
- ### [The End of Global CSS](https://medium.com/seek-ui-engineering/the-end-of-global-css-90d2a4a06284) <span class="badge-blue">CSS</span> <span class="badge-blue">React</span> <span class="badge-blue">Webpack</span>

  Organizing CSS becomes more difficult as the size of the user interface increases, and this seems like an interesting way to reduce the complexity, particularly when combined with [React](http://facebook.github.io/react/) (we'll be talking more about React in the future).

  Related links:

  - [Block, Element, Modifying Your JavaScript Components](https://medium.com/seek-ui-engineering/block-element-modifying-your-javascript-components-d7f99fcab52b)
  - [PostCSS Local Scope](https://github.com/markdalgleish/postcss-local-scope)
  - [CSS Loader: Local Scope](https://github.com/webpack/css-loader#local-scope)

- ### [Solved by Flexbox](http://philipwalton.github.io/solved-by-flexbox/) <span class="badge-blue">CSS</span> <span class="badge-blue">Flexbox</span>

  Layout in CSS is painful but important, particularly to support multiple screen sizes. We've used grid systems like those provided by [Bootstrap](http://getbootstrap.com/css/#grid) and [Neat](http://neat.bourbon.io/) (in addition to some custom solutions), but they're still constrained by the limitations of CSS and require significant amounts of work. [Flexbox](http://www.w3.org/TR/css3-flexbox/) is the solution to this problem and it's becoming [more widely available](http://caniuse.com/#feat=flexbox) (including its use in [React Native](https://facebook.github.io/react-native/)). We're not able to use it in production yet (thanks, IE), but we're able to use it in prototypes and look forward to the day when controlling layout via CSS is straightforward.

  This site shows how to solve common layout challenges using Flexbox.

  Related links:

  - [React: CSS in JS](http://blog.vjeux.com/2014/javascript/react-css-in-js-nationjs.html)
  - [Flexbox in 5 minutes](http://flexboxin5.com/)

- ### [PostCSS](https://github.com/postcss/postcss) <span class="badge-blue">CSS</span> <span class="badge-blue">Build Tools</span>

  Layout isn't the only issue with CSS. It's not the most elegant of languages and browser vendors often outpace the standards development process (which is a good thing). These rough edges are often handled by preprocesors such as [Sass](http://sass-lang.com/), [Stylus](https://learnboost.github.io/stylus/), and [Less](http://lesscss.org/). PostCSS fills the same need but does so by, as the name implies, post-processing the CSS. The big win here is speed, flexibility, and easier extension via a vibrant plugin ecosystem. I'm particularly interested in it because the processing is done via JavaScript, which means that I can use familiar tools and can include the PostCSS processor without having to use another language stack (my previous favorite, Sass, requires a compiler written in either Ruby or C++).

  The most popular PostCSS plugin is [Autoprefixer](https://github.com/postcss/autoprefixer), and if you're going to use newer CSS then it's a huge time-saver. From the "Solved by Flexbox" site referenced above:

  > If you're writing Flexbox code and not using autoprefixer, well, you're making a horrible mistake.

  Last night was the first time I used it, but so far I'm impressed.

  Related articles you may find interesting:

  - [Breaking up with Sass: it's not you, it's me](http://benfrain.com/breaking-up-with-sass-postcss/)
  - [PostCSS: the Future after Sass and Less](http://ai.github.io/about-postcss/en/)
  - [I'm Excited About PostCSS (But I'm Scared to Leave Sass)](http://davidtheclark.com/excited-about-postcss/)


---

This week we also released a small module for using
[RAML-based API specifications](http://raml.org/) in JavaScript projects: [https://github.com/opensourcecu/raml-loader](https://github.com/opensourcecu/raml-loader). We're using it to build tools for documenting and exploring APIs and will talk more about those tools when they're ready (you can follow the progress at [https://github.com/opensourcecu/react-raml](https://github.com/opensourcecu/react-raml) if you'd like). We'll also be using those tools to facilitate future API discussions and explorations on Open Source CU.
