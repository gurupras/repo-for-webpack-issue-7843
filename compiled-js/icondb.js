'use strict'
const iconDB = [
  [
    /(?:^|.*(?:\.|-|\/))vault\.ya?ml$$/i, // rule
    'font-awesome', // font
    'lock', // icon
    4, // priority
    '#46788d' // color
  ], [
    /(?:^|\.)fonts\.(?:dir|scale|alias)$/i, // rule
    'octicons', // font
    'database', // icon
    4, // priority
    '#ac4142' // color
  ], [
    /\.lnk$/i, // rule
    'octicons', // font
    'link', // icon
    3, // priority
    '#6a9fb5' // color
  ], [
    /\.alias$/, // rule
    'octicons', // font
    'link', // icon
    3, // priority
    '#6a9fb5' // color
  ], [
    /^phoenix\.ex$/i, // rule
    'file-icons', // font
    'phoenix', // icon
    3, // priority
    '#ac4142' // color
  ], [
    /^phoenix\.js$/i, // rule
    'file-icons', // font
    'phoenix', // icon
    3, // priority
    '#d28445' // color
  ], [
    /^angular[^.]*\.js$/i, // rule
    'devopicons', // font
    'angular', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /(?:^|\.)ansible(?:\.ya?ml)?$/i, // rule
    'file-icons', // font
    'ansible', // icon
    2, // priority
    '#4d9085' // color
  ], [
    /([\\\/])roles\1[^\\\/]+\1(?:tasks|handlers|tests)\1.*\.ya?ml$/i, // rule
    'file-icons', // font
    'ansible', // icon
    2, // priority
    '#4d9085' // color
  ], [
    /([\\\/])roles\1[^\\\/]+\1(?:defaults|vars|meta)\1.*\.ya?ml$|([\\\/])(?:group_vars|host_vars)\1.*\.ya?ml$/i, // rule
    'file-icons', // font
    'ansible', // icon
    2, // priority
    '#46788d' // color
  ], [
    /^ant\.xml$|\.ant$/i, // rule
    'file-icons', // font
    'ant', // icon
    2, // priority
    '#b3008f' // color
  ], [
    /^\.?antwar\.conf(?:ig)?\.js$/i, // rule
    'file-icons', // font
    'antwar', // icon
    2, // priority
    '#825078' // color
  ], [
    /^(?:apache2?|httpd)(?:\.[-\w]+)*.conf$/i, // rule
    'mfixx', // font
    'apache', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /\.apacheconf$/i, // rule
    'mfixx', // font
    'apache', // icon
    2, // priority
    '#742c2d' // color
  ], [
    /apache2[\\\/]magic$/i, // rule
    'mfixx', // font
    'apache', // icon
    2, // priority
    '#aa759f' // color
  ], [
    /\.vhost$/i, // rule
    'mfixx', // font
    'apache', // icon
    2, // priority
    '#66783e' // color
  ], [
    /\.thrift$/i, // rule
    'mfixx', // font
    'apache', // icon
    2, // priority
    '#90a959' // color
  ], [
    /^appcelerator\.js$/i, // rule
    'devopicons', // font
    'appcelerator', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^\.?appveyor\.yml$/i, // rule
    'file-icons', // font
    'appveyor', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /\.atomproject\.[jc]son$/i, // rule
    'devopicons', // font
    'atom', // icon
    2, // priority
    '#66783e' // color
  ], [
    /^\.?atoum(?:\.[^.]+)*\.php/i, // rule
    'file-icons', // font
    'atoum', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^aurelia\.json$/i, // rule
    'file-icons', // font
    'aurelia', // icon
    2, // priority
    '#b3008f' // color
  ], [
    /^backbone(?:[-.]min|dev)?\.js$/i, // rule
    'devopicons', // font
    'backbone', // icon
    2, // priority
    '#46788d' // color
  ], [
    /^behat(?:\.[^.]+)*\.ya?ml$/i, // rule
    'file-icons', // font
    'behat', // icon
    2, // priority
    '#75b5aa' // color
  ], [
    /\.bemjson(?:\.js)?$/i, // rule
    'file-icons', // font
    'bem', // icon
    2, // priority
    '#8f5536' // color
  ], [
    /^\.bintray\.json$/i, // rule
    'file-icons', // font
    'bintray', // icon
    2, // priority
    '#90a959' // color
  ], [
    /^Makefile\.boot$/i, // rule
    'file-icons', // font
    'build-boot', // icon
    2, // priority
    '#90a959' // color
  ], [
    /^(?:custom\.)?bootstrap\S*\.js$/i, // rule
    'devopicons', // font
    'bootstrap', // icon
    2, // priority
    '#f4bf75' // color
  ], [
    /^(?:custom\.)?bootstrap\S*\.css$/i, // rule
    'devopicons', // font
    'bootstrap', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^(?:custom\.)?bootstrap\S*\.less$/i, // rule
    'devopicons', // font
    'bootstrap', // icon
    2, // priority
    '#46788d' // color
  ], [
    /^(?:custom\.)?bootstrap\S*\.scss$/i, // rule
    'devopicons', // font
    'bootstrap', // icon
    2, // priority
    '#ff4ddb' // color
  ], [
    /^(?:custom\.)?bootstrap\S*\.styl$/i, // rule
    'devopicons', // font
    'bootstrap', // icon
    2, // priority
    '#90a959' // color
  ], [
    /\.bootstraprc$/i, // rule
    'devopicons', // font
    'bootstrap', // icon
    2, // priority
    '#d28445' // color
  ], [
    /^(?:\.bowerrc|bower\.json|Bowerfile)$/i, // rule
    'devopicons', // font
    'bower', // icon
    2, // priority
    '#f4bf75' // color
  ], [
    /brakeman\.yml$/i, // rule
    'file-icons', // font
    'brakeman', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^brakeman\.ignore$/i, // rule
    'file-icons', // font
    'brakeman', // icon
    2, // priority
    '#742c2d' // color
  ], [
    /^Brocfile\./i, // rule
    'file-icons', // font
    'broccoli', // icon
    2, // priority
    '#90a959' // color
  ], [
    /^brunch-config\.(?:js|coffee|ts)$/i, // rule
    'file-icons', // font
    'brunch', // icon
    2, // priority
    '#90a959' // color
  ], [
    /^Gemfile(?:\.lock)?$/i, // rule
    'file-icons', // font
    'bundler', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /\.caffe2model$|^(?:init|predict)_net\.pb$/i, // rule
    'file-icons', // font
    'caffe2', // icon
    2, // priority
    '#46788d' // color
  ], [
    /^(?:deploy|solver|train_val)\.prototxt$/i, // rule
    'file-icons', // font
    'caffe2', // icon
    2, // priority
    '#aa759f' // color
  ], [
    /Cargo\.toml$/i, // rule
    'octicons', // font
    'package', // icon
    2, // priority
    '#e1ad83' // color
  ], [
    /Cargo\.lock$/i, // rule
    'octicons', // font
    'package', // icon
    2, // priority
    '#a35f27' // color
  ], [
    /^Cartfile(?:\.|$)/, // rule
    'file-icons', // font
    'carthage', // icon
    2, // priority
    '#b3008f' // color
  ], [
    /^Chart(?:\.bundle)?(?:\.min)?\.js$/i, // rule
    'file-icons', // font
    'chartjs', // icon
    2, // priority
    '#b3008f' // color
  ], [
    /^todo.txt$/i, // rule
    'octicons', // font
    'checklist', // icon
    2, // priority
    '#90a959' // color
  ], [
    /^circle\.yml$/i, // rule
    'file-icons', // font
    'circle-ci', // icon
    2, // priority
    '#90a959' // color
  ], [
    /\.codacy\.ya?ml$/i, // rule
    'file-icons', // font
    'codacy', // icon
    2, // priority
    '#46788d' // color
  ], [
    /\.codeclimate\.yml$/i, // rule
    'file-icons', // font
    'cc', // icon
    2, // priority
    '#90a959' // color
  ], [
    /^codecov\.ya?ml$/i, // rule
    'file-icons', // font
    'codecov', // icon
    2, // priority
    '#b3008f' // color
  ], [
    /^codeship-[\w.-]+\.ya?ml$/i, // rule
    'file-icons', // font
    'codeship', // icon
    2, // priority
    '#46788d' // color
  ], [
    /\.coffee\.ecr$/i, // rule
    'font-awesome', // font
    'coffee', // icon
    2, // priority
    '#75b5aa' // color
  ], [
    /\.coffee\.erb$/i, // rule
    'font-awesome', // font
    'coffee', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^_?(?:compass|lemonade)\.scss$/i, // rule
    'devopicons', // font
    'compass', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^composer\.(?:json|lock)$/i, // rule
    'file-icons', // font
    'composer', // icon
    2, // priority
    '#f4bf75' // color
  ], [
    /^composer\.phar$/i, // rule
    'file-icons', // font
    'composer', // icon
    2, // priority
    '#46788d' // color
  ], [
    /^(?:conanfile\.(?:txt|py)|conan\.conf)$/i, // rule
    'file-icons', // font
    'conan', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^buildozer\.spec$/i, // rule
    'file-icons', // font
    'config', // icon
    2, // priority
    '#46788d' // color
  ], [
    /^cordova(?:[^.]*\.|-(?:\d\.)+)js$/i, // rule
    'file-icons', // font
    'cordova', // icon
    2, // priority
    '#9dc0ce' // color
  ], [
    /^\.coveralls\.ya?ml$/i, // rule
    'file-icons', // font
    'coveralls', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^META\.yml$/, // rule
    'file-icons', // font
    'cpan', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^META\.json$/, // rule
    'file-icons', // font
    'cpan', // icon
    2, // priority
    '#f4bf75' // color
  ], [
    /^crowdin\.ya?ml$/i, // rule
    'file-icons', // font
    'crowdin', // icon
    2, // priority
    '#90a959' // color
  ], [
    /^d3(?:\.v\d+)?[^.]*\.js$/i, // rule
    'file-icons', // font
    'd3', // icon
    2, // priority
    '#d28445' // color
  ], [
    /^METADATA\.pb$/, // rule
    'octicons', // font
    'database', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /\.git[\/\\](?:.*[\/\\])?(?:HEAD|ORIG_HEAD|packed-refs|logs[\/\\](?:.+[\/\\])?[^\/\\]+)$/, // rule
    'octicons', // font
    'database', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^(?:Dockerfile|docker-compose)|\.docker(?:file|ignore)$/i, // rule
    'file-icons', // font
    'dockerfile', // icon
    2, // priority
    '#46788d' // color
  ], [
    /^docker-sync\.yml$/i, // rule
    'file-icons', // font
    'dockerfile', // icon
    2, // priority
    '#a35f27' // color
  ], [
    /\.doclets\.ya?ml$/i, // rule
    'file-icons', // font
    'doclets', // icon
    2, // priority
    '#b2c38b' // color
  ], [
    /^dojo\.js$/i, // rule
    'devopicons', // font
    'dojo', // icon
    2, // priority
    '#c97071' // color
  ], [
    /\.drone\.ya?ml$/i, // rule
    'file-icons', // font
    'drone', // icon
    2, // priority
    '#75b5aa' // color
  ], [
    /\.compilerc(?:\.json)?$/i, // rule
    'file-icons', // font
    'electron', // icon
    2, // priority
    '#46788d' // color
  ], [
    /^ember(?:\.|(?:-[^.]+)?-(?:\d+\.)+(?:debug\.)?)js$/i, // rule
    'file-icons', // font
    'ember', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^\.?esdoc\.js(?:on)?$/i, // rule
    'file-icons', // font
    'esdoc', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /\.eslint(?:cache|ignore)$/i, // rule
    'file-icons', // font
    'eslint', // icon
    2, // priority
    '#aa759f' // color
  ], [
    /\.eslintrc(?:\.(?:js|json|ya?ml))?$/i, // rule
    'file-icons', // font
    'eslint', // icon
    2, // priority
    '#c7a4c0' // color
  ], [
    /\bExtjs(?:-ext)?\.js$/i, // rule
    'devopicons', // font
    'extjs', // icon
    2, // priority
    '#b2c38b' // color
  ], [
    /^fabfile\.py$/i, // rule
    'file-icons', // font
    'fabfile', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^firebase\.json$/i, // rule
    'file-icons', // font
    'firebase', // icon
    2, // priority
    '#f4bf75' // color
  ], [
    /\.fossa\.ya?ml$/i, // rule
    'file-icons', // font
    'fossa', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^fuelux(?:\.min)?\.(?:css|js)$/i, // rule
    'file-icons', // font
    'fuel-ux', // icon
    2, // priority
    '#d28445' // color
  ], [
    /^fuse\.js$/, // rule
    'file-icons', // font
    'fusebox', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /\.indent\.pro$/i, // rule
    'octicons', // font
    'gear', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^\.gitlab-ci\.yml$/, // rule
    'file-icons', // font
    'gitlab', // icon
    2, // priority
    '#d28445' // color
  ], [
    /^glide\.ya?ml$/i, // rule
    'file-icons', // font
    'glide', // icon
    2, // priority
    '#e1ad83' // color
  ], [
    /gruntfile\.js$/i, // rule
    'file-icons', // font
    'grunt', // icon
    2, // priority
    '#f4bf75' // color
  ], [
    /gruntfile\.coffee$/i, // rule
    'file-icons', // font
    'grunt', // icon
    2, // priority
    '#8f5536' // color
  ], [
    /gulpfile\.js$|gulpfile\.babel\.js$/i, // rule
    'file-icons', // font
    'gulp', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /gulpfile\.coffee$/i, // rule
    'file-icons', // font
    'gulp', // icon
    2, // priority
    '#8f5536' // color
  ], [
    /\.hound\.ya?ml$/i, // rule
    'file-icons', // font
    'hound-ci', // icon
    2, // priority
    '#aa759f' // color
  ], [
    /\.html?\.ecr$/i, // rule
    'font-awesome', // font
    'html5', // icon
    2, // priority
    '#75b5aa' // color
  ], [
    /\.(?:html?\.erb(?:\.deface)?|rhtml)$/i, // rule
    'font-awesome', // font
    'html5', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^icomoon(?:\.[-\w]+)*\.json$/i, // rule
    'file-icons', // font
    'icomoon', // icon
    2, // priority
    '#aa759f' // color
  ], [
    /^ionic\.(?:project|config\.json)$/, // rule
    'file-icons', // font
    'ionic-project', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^\.?jasmine\.json$|^jasmine\.(?:[-\w]+\.)?(?:js|ts|coffee)$/i, // rule
    'file-icons', // font
    'jasmine', // icon
    2, // priority
    '#aa759f' // color
  ], [
    /\.js\.ecr$/i, // rule
    'mfixx', // font
    'javascript-alt', // icon
    2, // priority
    '#75b5aa' // color
  ], [
    /\.js\.erb$/i, // rule
    'mfixx', // font
    'javascript-alt', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^_config\.yml$/, // rule
    'devopicons', // font
    'jekyll', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^jest(?:\.config)?\.js(?:on)?$/i, // rule
    'file-icons', // font
    'jest', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /\.jsx?\.snap$/i, // rule
    'file-icons', // font
    'jest', // icon
    2, // priority
    '#f4bf75' // color
  ], [
    /^jquery(?:[-.](?:min|latest|slim|\d\.\d+(?:\.\d+)?))*\.(?:[jt]sx?|es6?|coffee|map)$/i, // rule
    'devopicons', // font
    'jquery', // icon
    2, // priority
    '#46788d' // color
  ], [
    /^jquery(?:[-_.](?:ui[-_.](?:custom|dialog-?\w*)|effects)(?:\.[^.]*)?|[-.]?ui(?:-\d\.\d+(?:\.\d+)?)?(?:\.\w+)?)(?:[-_.]?min|dev)?\.(?:[jt]sx?|es6?|coffee|map|s?css|less|styl)$/i, // rule
    'devopicons', // font
    'jquery-ui', // icon
    2, // priority
    '#46788d' // color
  ], [
    /^karma\.conf(?:ig)?\.js$|^karma\.conf(?:ig)?\.ts$/i, // rule
    'file-icons', // font
    'karma', // icon
    2, // priority
    '#75b5aa' // color
  ], [
    /^karma\.conf(?:ig)?\.coffee$/i, // rule
    'file-icons', // font
    'karma', // icon
    2, // priority
    '#8f5536' // color
  ], [
    /^\.?kitchen(?:\.[-\w]*)*\.ya?ml$/i, // rule
    'file-icons', // font
    'kitchenci', // icon
    2, // priority
    '#90a959' // color
  ], [
    /^leaflet\.(?:draw-src|draw|spin|coordinates-(?:\d+\.)\d+\.\d+\.src)\.(?:js|css)$|^wicket-leaflet\.js$/i, // rule
    'file-icons', // font
    'leaflet', // icon
    2, // priority
    '#90a959' // color
  ], [
    /project\.clj$/i, // rule
    'file-icons', // font
    'clj', // icon
    2, // priority
    'undefined' // color
  ], [
    /^lerna\.json$/i, // rule
    'file-icons', // font
    'lerna', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^mk\.config$/, // rule
    'octicons', // font
    'checklist', // icon
    2, // priority
    '#90a959' // color
  ], [
    /\.css\.map$/i, // rule
    'font-awesome', // font
    '_594', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /\.js\.map$/i, // rule
    'font-awesome', // font
    '_594', // icon
    2, // priority
    '#f4bf75' // color
  ], [
    /\.cidmap$/i, // rule
    'font-awesome', // font
    '_594', // icon
    2, // priority
    '#d28445' // color
  ], [
    /^\.markdownlint/i, // rule
    'file-icons', // font
    'markdownlint', // icon
    2, // priority
    '#66783e' // color
  ], [
    /\.marko$/i, // rule
    'file-icons', // font
    'marko', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /\.marko\.js$/i, // rule
    'file-icons', // font
    'marko', // icon
    2, // priority
    '#8f5536' // color
  ], [
    /^materialize(?:\.min)?\.(?:js|css)$/i, // rule
    'devopicons', // font
    'materialize', // icon
    2, // priority
    '#c97071' // color
  ], [
    /^MathJax[^.]*\.js$/i, // rule
    'file-icons', // font
    'mathjax', // icon
    2, // priority
    '#66783e' // color
  ], [
    /^(?:meson\.build|meson_options\.txt)$/i, // rule
    'file-icons', // font
    'meson', // icon
    2, // priority
    '#90a959' // color
  ], [
    /^\.?mkdocs\.ya?ml$/i, // rule
    'font-awesome', // font
    'book', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /\.mocharc\.(?:json|js|ya?ml)$|^mocha(?:\.min)?\.(?:[jt]sx?|es6?|coffee)$/i, // rule
    'file-icons', // font
    'mocha', // icon
    2, // priority
    '#8f5536' // color
  ], [
    /^mocha(?:\.min)?\.(?:s?css|less|styl)$/i, // rule
    'file-icons', // font
    'mocha', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /mocha\.opts$/i, // rule
    'file-icons', // font
    'mocha', // icon
    2, // priority
    '#be7953' // color
  ], [
    /^modernizr(?:[-\.]custom|-\d\.\d+)(?:\.\d+)?\.js$/i, // rule
    'devopicons', // font
    'modernizr', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^mootools[^.]*\d+\.\d+(?:.\d+)?[^.]*\.js$/i, // rule
    'devopicons', // font
    'mootools-badge', // icon
    2, // priority
    '#aa759f' // color
  ], [
    /^\.?nanoc\.ya?ml$/i, // rule
    'file-icons', // font
    'nanoc', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^run\.n$/, // rule
    'file-icons', // font
    'neko', // icon
    2, // priority
    '#a35f27' // color
  ], [
    /^nestconfig\.json$/i, // rule
    'file-icons', // font
    'nestjs', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^netlify\.toml$/i, // rule
    'file-icons', // font
    'netlify', // icon
    2, // priority
    '#46788d' // color
  ], [
    /^newrelic\.yml/i, // rule
    'file-icons', // font
    'new-relic', // icon
    2, // priority
    '#75b5aa' // color
  ], [
    /^nextflow\.config$/i, // rule
    'file-icons', // font
    'nextflow', // icon
    2, // priority
    '#66783e' // color
  ], [
    /\.ninja\.d$/i, // rule
    'file-icons', // font
    'shuriken', // icon
    2, // priority
    '#4d9085' // color
  ], [
    /^nodemon\.json$|\.nodemonignore$/i, // rule
    'file-icons', // font
    'nodemon', // icon
    2, // priority
    '#90a959' // color
  ], [
    /^normalize(?:\.min)?\.(?:css|less|scss|styl)$/i, // rule
    'file-icons', // font
    'normalize', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^(?:package\.json|\.npmignore|\.?npmrc|npm-debug\.log|npm-shrinkwrap\.json|package-lock\.json)$/i, // rule
    'file-icons', // font
    'npm', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^nuxt\.config\.[jt]s$/i, // rule
    'file-icons', // font
    'nuxt', // icon
    2, // priority
    '#75b5aa' // color
  ], [
    /^paket\.(?:dependencies|lock|references|local|template)$/i, // rule
    'octicons', // font
    'package', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^phpunit\.xml$/i, // rule
    'file-icons', // font
    'phpunit', // icon
    2, // priority
    '#aa759f' // color
  ], [
    /^\.phraseapp\.ya?ml$/i, // rule
    'file-icons', // font
    'phraseapp', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^platformio\.ini$/i, // rule
    'file-icons', // font
    'platformio', // icon
    2, // priority
    '#d28445' // color
  ], [
    /^ecosystem.conf(?:ig)?./i, // rule
    'file-icons', // font
    'pm2', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^polymer\.json$/i, // rule
    'file-icons', // font
    'polymer', // icon
    2, // priority
    '#aa759f' // color
  ], [
    /\.postcssrc(?:\.(?:js|json|ya?ml))?$/i, // rule
    'file-icons', // font
    'postcss', // icon
    2, // priority
    '#d28445' // color
  ], [
    /\bpostcss\.config\.js$/i, // rule
    'file-icons', // font
    'postcss', // icon
    2, // priority
    '#f4bf75' // color
  ], [
    /^\.pre-commit\b.*\.ya?ml$/i, // rule
    'file-icons', // font
    'precommit', // icon
    2, // priority
    '#f4bf75' // color
  ], [
    /\.prettierrc(?:\.(?:js|json|ya?ml))?$|^prettier\.config\.js$/i, // rule
    'file-icons', // font
    'prettier', // icon
    2, // priority
    '#75b5aa' // color
  ], [
    /\.prettierignore$/i, // rule
    'file-icons', // font
    'prettier', // icon
    2, // priority
    '#ee9e2e' // color
  ], [
    /\.proselintrc$/i, // rule
    'file-icons', // font
    'proselint', // icon
    2, // priority
    '#4d9085' // color
  ], [
    /^protractor\.(?:conf|config)\./i, // rule
    'file-icons', // font
    'protractor', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^\.pug-lintrc/i, // rule
    'file-icons', // font
    'pug', // icon
    2, // priority
    '#d28445' // color
  ], [
    /^\.?pullapprove\.ya?ml$/i, // rule
    'file-icons', // font
    'pullapprove', // icon
    2, // priority
    '#46788d' // color
  ], [
    /^requirements\.in$/i, // rule
    'file-icons', // font
    'pypi', // icon
    2, // priority
    '#46788d' // color
  ], [
    /^quasar\.conf\.js$/i, // rule
    'file-icons', // font
    'quasar', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^raphael(?:\.min|\.no-deps)*\.js$/i, // rule
    'devopicons', // font
    'raphael', // icon
    2, // priority
    '#d28445' // color
  ], [
    /^react(?:-[^.]*)?\.js$/i, // rule
    'file-icons', // font
    'jsx', // icon
    2, // priority
    '#46788d' // color
  ], [
    /\.react\.js$/i, // rule
    'file-icons', // font
    'jsx', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^README(?:\b|_)|^(?:licen[sc]es?(?:\.mysql)?|(?:read|readme|click|delete|keep|test)\.me)$|\.(?:readme|1st|licen[sc]es?)$/i, // rule
    'octicons', // font
    'book', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^(?:notice|bugs|changes|change[-_]?log(?:[-._]?\d+)?|contribute|contributing|contributors|copying(?:\.regex)?|faq|hacking|history|install|maintainers|manifest|more\.stuff|notes|problems|projects|revision|terms|thanks|warnings)(?:_\w+)?$/i, // rule
    'octicons', // font
    'book', // icon
    2, // priority
    '#46788d' // color
  ], [
    /^require(?:[-.]min|dev)?\.js$/i, // rule
    'devopicons', // font
    'requirejs', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^riemann\.config$/i, // rule
    'devopicons', // font
    'clojure-alt', // icon
    2, // priority
    '#8f5536' // color
  ], [
    /^tmac\.|^(?:mmn|mmt|toc\.entries)$/i, // rule
    'file-icons', // font
    'man-page', // icon
    2, // priority
    '#66783e' // color
  ], [
    /^rollup\.config\./i, // rule
    'file-icons', // font
    'rollup', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^\.rubocop(?:_todo)?\.ya?ml$/i, // rule
    'file-icons', // font
    'rubocop', // icon
    2, // priority
    '#742c2d' // color
  ], [
    /\.scrutinizer\.yml$/i, // rule
    'file-icons', // font
    'scrutinizer', // icon
    2, // priority
    '#46788d' // color
  ], [
    /^sencha(?:\.min)?\.js$/i, // rule
    'devopicons', // font
    'senchatouch', // icon
    2, // priority
    '#b2c38b' // color
  ], [
    /(?:^|\.)serverless\.ya?ml$/i, // rule
    'file-icons', // font
    'serverless', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^shipitfile(?:\b.+)?\.js$/i, // rule
    'file-icons', // font
    'shipit', // icon
    2, // priority
    '#d28445' // color
  ], [
    /^shippable\.ya?ml$/i, // rule
    'file-icons', // font
    'shippable', // icon
    2, // priority
    '#75b5aa' // color
  ], [
    /^snap\.svg(?:[-.]min)?\.js$/i, // rule
    'devopicons', // font
    'snapsvg', // icon
    2, // priority
    '#75b5aa' // color
  ], [
    /\.(?:story|stories)\.jsx?$/i, // rule
    'file-icons', // font
    'storybook', // icon
    2, // priority
    '#d28445' // color
  ], [
    /\.(?:story|stories)\.tsx?$/i, // rule
    'file-icons', // font
    'storybook', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /\.st\.css$/i, // rule
    'file-icons', // font
    'stylable', // icon
    2, // priority
    '#90a959' // color
  ], [
    /^\.stylelintrc(?:\.|$)/i, // rule
    'file-icons', // font
    'stylelint', // icon
    2, // priority
    '#aa759f' // color
  ], [
    /^stylelint\.config\.js$/i, // rule
    'file-icons', // font
    'stylelint', // icon
    2, // priority
    '#f4bf75' // color
  ], [
    /\.stylelint(?:ignore|cache)$/i, // rule
    'file-icons', // font
    'stylelint', // icon
    2, // priority
    '#46788d' // color
  ], [
    /^(?:openapi|swagger)\.(?:json|yaml|yml)$/i, // rule
    'file-icons', // font
    'swagger', // icon
    2, // priority
    '#90a959' // color
  ], [
    /\.toc$/i, // rule
    'font-awesome', // font
    'list', // icon
    2, // priority
    '#75b5aa' // color
  ], [
    /\.tf\.json$/i, // rule
    'file-icons', // font
    'terraform', // icon
    2, // priority
    '#f4bf75' // color
  ], [
    /[._-](?:spec|test)s?\.(?:rb|ruby)$/i, // rule
    'file-icons', // font
    'test-ruby', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /([\\\x2F])(t|tests?|specs?)\1+(?:(?!\1).)*\.(rb|ruby)$/, // rule
    'file-icons', // font
    'test-ruby', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^hyphen(?:ex)?\.(?:cs|den|det|fr|sv|us)$/, // rule
    'file-icons', // font
    'tex', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /\.8x[pk](?:\.txt)?$/i, // rule
    'font-awesome', // font
    '_462', // icon
    2, // priority
    '#8f5536' // color
  ], [
    /(?:\.|_|^)tmux\.conf$/i, // rule
    'file-icons', // font
    'tmux', // icon
    2, // priority
    '#90a959' // color
  ], [
    /^\.travis/i, // rule
    'devopicons', // font
    'travis', // icon
    2, // priority
    '#ac4142' // color
  ], [
    /^typedoc\.json$/i, // rule
    'file-icons', // font
    'typedoc', // icon
    2, // priority
    '#825078' // color
  ], [
    /^typings\.json$/i, // rule
    'file-icons', // font
    'typings', // icon
    2, // priority
    '#8f5536' // color
  ], [
    /^uikit(?:\.min)?\.js$/i, // rule
    'devopicons', // font
    'uikit', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /\.vcx?proj(?:\.[-\w]+)*$/i, // rule
    'devopicons', // font
    'visualstudio', // icon
    2, // priority
    '#825078' // color
  ], [
    /\.vssettings(?:\.json)?$/i, // rule
    'devopicons', // font
    'visualstudio', // icon
    2, // priority
    '#66783e' // color
  ], [
    /\.vscodeignore(?:\.json)?$/i, // rule
    'devopicons', // font
    'visualstudio', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^\.vsts-ci\.ya?ml$/i, // rule
    'file-icons', // font
    'vsts', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^\.wallaby\.js$/i, // rule
    'file-icons', // font
    'wallaby', // icon
    2, // priority
    '#90a959' // color
  ], [
    /\.watchmanconfig$|^watchman\.json$/i, // rule
    'file-icons', // font
    'watchman', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /(?:^|\.)webpack(?:file)?(?=\.|$).*\.(?:[jt]sx?|json)$/i, // rule
    'file-icons', // font
    'webpack', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /^wercker\.ya?ml$/i, // rule
    'file-icons', // font
    'wercker', // icon
    2, // priority
    '#aa759f' // color
  ], [
    /^workbox-config\.js$/i, // rule
    'file-icons', // font
    'workbox', // icon
    2, // priority
    '#d28445' // color
  ], [
    /^yarn\.lock$|\.yarn-metadata(?:\.json)?$/i, // rule
    'file-icons', // font
    'yarn', // icon
    2, // priority
    '#6a9fb5' // color
  ], [
    /\.yo-rc\.json$/i, // rule
    'devopicons', // font
    'yeoman', // icon
    2, // priority
    '#75b5aa' // color
  ], [
    /^(?:yahoo-|yui)[^.]*\.js$/i, // rule
    'file-icons', // font
    'yui', // icon
    2, // priority
    '#46788d' // color
  ], [
    /\/dev[-\w]+\/(?:[^\/]+\/)*(?:DESC|Foundry|download|symbolmap)(?:\.in|\.proto)?$/, // rule
    'file-icons', // font
    'config', // icon
    1.5, // priority
    '#66783e' // color
  ], [
    /(?:^|[\/\\])\.ssh[\/\\]config$/, // rule
    'file-icons', // font
    'config', // icon
    1.5, // priority
    '#46788d' // color
  ], [
    /^\.icondb\.js$/, // rule
    'octicons', // font
    'database', // icon
    1.5, // priority
    '#742c2d' // color
  ], [
    /(?:^|\.)(?:el|_?emacs|emacs\.desktop|abbrev[-_]defs)$/i, // rule
    'file-icons', // font
    'emacs', // icon
    1.5, // priority
    '#aa759f' // color
  ], [
    /(?:^|\.)(?:elc|eld)$/i, // rule
    'file-icons', // font
    'emacs', // icon
    1.5, // priority
    '#825078' // color
  ], [
    /\.gnus$/i, // rule
    'file-icons', // font
    'emacs', // icon
    1.5, // priority
    '#ac4142' // color
  ], [
    /\.viper$/i, // rule
    'file-icons', // font
    'emacs', // icon
    1.5, // priority
    '#66783e' // color
  ], [
    /^Cask$/, // rule
    'file-icons', // font
    'emacs', // icon
    1.5, // priority
    '#46788d' // color
  ], [
    /^Project\.ede$/i, // rule
    'file-icons', // font
    'emacs', // icon
    1.5, // priority
    '#6a9fb5' // color
  ], [
    /\.hxp$/i, // rule
    'file-icons', // font
    'lime', // icon
    1.5, // priority
    '#90a959' // color
  ], [
    /^project\.pros$/i, // rule
    'file-icons', // font
    'pros', // icon
    1.5, // priority
    '#d28445' // color
  ], [
    /[._-](?:spec|test)s?\.(?:(?:lit)?coffee|iced|cjsx)$/i, // rule
    'file-icons', // font
    'test-coffeescript', // icon
    1.5, // priority
    '#8f5536' // color
  ], [
    /([\\\x2F])t\1t\d+(?:(?!\1).)+\.sh$/i, // rule
    'file-icons', // font
    'test-generic', // icon
    1.5, // priority
    '#90a959' // color
  ], [
    /[._-](?:spec|test)s?\.(?:[_ms]?js|js[bms]|es\d*)$/i, // rule
    'file-icons', // font
    'test-js', // icon
    1.5, // priority
    '#f4bf75' // color
  ], [
    /([\\\x2F])t\1(?:(?!\1).)+\.t$|([\\\x2F])(test|spec)s?(\1((?!\1).)+)*\1((?!\1).)+[._-](spec|test)s?\.p(er)?l$/i, // rule
    'file-icons', // font
    'test-perl', // icon
    1.5, // priority
    '#6a9fb5' // color
  ], [
    /[._-](?:spec|test)s?\.py(?:3|thon)?/i, // rule
    'file-icons', // font
    'test-python', // icon
    1.5, // priority
    '#46788d' // color
  ], [
    /([\\\x2F])(test|spec)s?(\1((?!\1).)+)*\1(((?!\1).)+[._-](?:spec|test)s?|(?:spec|test)s?[._-].+)\.py(3|thon)?$/i, // rule
    'file-icons', // font
    'test-python', // icon
    1.5, // priority
    '#46788d' // color
  ], [
    /[._-](?:spec|test)s?\.(?:jsx|react\.js)$/, // rule
    'file-icons', // font
    'test-react', // icon
    1.5, // priority
    '#6a9fb5' // color
  ], [
    /[._-](?:spec|test)s?\.ts$/i, // rule
    'file-icons', // font
    'test-typescript', // icon
    1.5, // priority
    '#6a9fb5' // color
  ], [
    /[._-](?:spec|test)s?\.tsx$/i, // rule
    'file-icons', // font
    'test-typescript', // icon
    1.5, // priority
    '#9dc0ce' // color
  ], [
    /\.bsl$/i, // rule
    'file-icons', // font
    '1c', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.sdbl$/i, // rule
    'file-icons', // font
    '1c', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.os$/i, // rule
    'file-icons', // font
    '1c', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.mdo$/i, // rule
    'file-icons', // font
    '1c-alt', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.abap$/i, // rule
    'file-icons', // font
    'abap', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.abif$/i, // rule
    'file-icons', // font
    'abif', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.ab1$/i, // rule
    'file-icons', // font
    'abif', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.fsa$/i, // rule
    'file-icons', // font
    'abif', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.swf$/i, // rule
    'file-icons', // font
    'actionscript', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.as$/i, // rule
    'file-icons', // font
    'actionscript', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.jsfl$/i, // rule
    'file-icons', // font
    'actionscript', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.swc$/i, // rule
    'file-icons', // font
    'actionscript', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.(?:ada|adb|ads)$/i, // rule
    'file-icons', // font
    'ada', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.aep$/i, // rule
    'file-icons', // font
    'ae', // icon
    1, // priority
    '#b3008f' // color
  ], [
    /\.aet$/i, // rule
    'file-icons', // font
    'ae', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.ai$/i, // rule
    'file-icons', // font
    'ai', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.ait$/i, // rule
    'file-icons', // font
    'ai', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.indd$|\.idml$/i, // rule
    'file-icons', // font
    'id', // icon
    1, // priority
    '#b3008f' // color
  ], [
    /\.indl$/i, // rule
    'file-icons', // font
    'id', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.indt$/i, // rule
    'file-icons', // font
    'id', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.indb$/i, // rule
    'file-icons', // font
    'id', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.psd$/i, // rule
    'file-icons', // font
    'ps', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.psb$/i, // rule
    'file-icons', // font
    'ps', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.prproj$/i, // rule
    'file-icons', // font
    'premiere', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.prel$/i, // rule
    'file-icons', // font
    'premiere', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.psq$/i, // rule
    'file-icons', // font
    'premiere', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.afdesign$/i, // rule
    'file-icons', // font
    'affinity-designer', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.afphoto$/i, // rule
    'file-icons', // font
    'affinity-designer', // icon
    1, // priority
    '#ff00cc' // color
  ], [
    /\.afpub$/i, // rule
    'file-icons', // font
    'affinity-designer', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.alexrc$/i, // rule
    'file-icons', // font
    'alex', // icon
    1, // priority
    '#ff00cc' // color
  ], [
    /\.alexignore$/i, // rule
    'file-icons', // font
    'alex', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.als$/i, // rule
    'file-icons', // font
    'alloy', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /(?:\.|^)APKBUILD$/, // rule
    'file-icons', // font
    'alpine-linux', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.ampl$/i, // rule
    'file-icons', // font
    'ampl', // icon
    1, // priority
    '#573421' // color
  ], [
    /\.smali$/i, // rule
    'font-awesome', // font
    'android', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.rsh$/i, // rule
    'font-awesome', // font
    'android', // icon
    1, // priority
    '#573421' // color
  ], [
    /\.(?:acs|angelscript)$/i, // rule
    'file-icons', // font
    'angelscript', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.ansiweatherrc$/i, // rule
    'font-awesome', // font
    'sun', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.g$/i, // rule
    'file-icons', // font
    'antlr', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.g4$/i, // rule
    'file-icons', // font
    'antlr', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.any$/i, // rule
    'file-icons', // font
    'anyscript', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.apib$/i, // rule
    'file-icons', // font
    'api-blueprint', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.apl$/i, // rule
    'file-icons', // font
    'apl', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.apl\.history$/i, // rule
    'file-icons', // font
    'apl', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.(?:applescript|scpt)$/i, // rule
    'file-icons', // font
    'apple', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.arc$/i, // rule
    'file-icons', // font
    'arc', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.ino$/i, // rule
    'file-icons', // font
    'arduino', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.(?:ad|adoc|asc|asciidoc)$/i, // rule
    'file-icons', // font
    'asciidoctor', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.asp$/i, // rule
    'devopicons', // font
    'dotnet', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.asax$/i, // rule
    'devopicons', // font
    'dotnet', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.ascx$/i, // rule
    'devopicons', // font
    'dotnet', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.ashx$/i, // rule
    'devopicons', // font
    'dotnet', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.asmx$/i, // rule
    'devopicons', // font
    'dotnet', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.aspx$/i, // rule
    'devopicons', // font
    'dotnet', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.axd$/i, // rule
    'devopicons', // font
    'dotnet', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.aj$/i, // rule
    'devopicons', // font
    'eclipse', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.dats$/i, // rule
    'file-icons', // font
    'ats', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.hats$/i, // rule
    'file-icons', // font
    'ats', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.sats$/i, // rule
    'file-icons', // font
    'ats', // icon
    1, // priority
    '#ee9e2e' // color
  ], [
    /\.aup$/i, // rule
    'file-icons', // font
    'audacity', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.mp3$/i, // rule
    'font-awesome', // font
    'volume_up', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.wav$/i, // rule
    'font-awesome', // font
    'volume_up', // icon
    1, // priority
    '#ee9e2e' // color
  ], [
    /\.(?:aac|ac3|m4p)$/i, // rule
    'font-awesome', // font
    'volume_up', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.aif[fc]?$/i, // rule
    'font-awesome', // font
    'volume_up', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.au$/i, // rule
    'font-awesome', // font
    'volume_up', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.flac$/i, // rule
    'font-awesome', // font
    'volume_up', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.f4[ab]$/i, // rule
    'font-awesome', // font
    'volume_up', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.m4a$/i, // rule
    'font-awesome', // font
    'volume_up', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.(?:mpc|mp\+)$/i, // rule
    'font-awesome', // font
    'volume_up', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.oga$/i, // rule
    'font-awesome', // font
    'volume_up', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.opus$/i, // rule
    'font-awesome', // font
    'volume_up', // icon
    1, // priority
    '#573421' // color
  ], [
    /\.r[am]$/i, // rule
    'font-awesome', // font
    'volume_up', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.wma$/i, // rule
    'font-awesome', // font
    'volume_up', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.aug$/i, // rule
    'file-icons', // font
    'augeas', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.ahk$/i, // rule
    'file-icons', // font
    'auto-hotkey', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.ahkl$/i, // rule
    'file-icons', // font
    'auto-hotkey', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.au3$/i, // rule
    'file-icons', // font
    'autoit', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.av(?:cs|sc|dl)$/i, // rule
    'file-icons', // font
    'avro', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.(?:babelrc|babelrc\.js|languagebabel|babel)$|babel(?:\.[\w\-]+)*\.conf(?:ig)?\./i, // rule
    'file-icons', // font
    'babel', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.babelignore$/i, // rule
    'file-icons', // font
    'babel', // icon
    1, // priority
    '#ee9e2e' // color
  ], [
    /\.(?:bak|old|orig)$/, // rule
    'font-awesome', // font
    '_445', // icon
    1, // priority
    'undefined' // color
  ], [
    /\.bzrignore$/i, // rule
    'file-icons', // font
    'bazaar', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /^(?:\.bazelrc|bazel\.rc|bazel\.bazelrc)$/i, // rule
    'file-icons', // font
    'bazel', // icon
    1, // priority
    '#66783e' // color
  ], [
    /^(?:BUILD|WORKSPACE)(?:.[Bb][Aa][Zz][Ee][Ll])?$/, // rule
    'file-icons', // font
    'bazel', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.bzl$/i, // rule
    'file-icons', // font
    'bazel', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.cbx$/i, // rule
    'file-icons', // font
    'bib', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.bbx$/i, // rule
    'file-icons', // font
    'bib', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.bib$/i, // rule
    'file-icons', // font
    'bib', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.bst$/i, // rule
    'file-icons', // font
    'bib', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.bison$/i, // rule
    'file-icons', // font
    'gnu', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.bithoundrc$/i, // rule
    'file-icons', // font
    'bithound', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.blend$/i, // rule
    'file-icons', // font
    'blender', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.blend\d+$/i, // rule
    'file-icons', // font
    'blender', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.bphys$/i, // rule
    'file-icons', // font
    'blender', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.bsv$/i, // rule
    'file-icons', // font
    'bluespec', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.boo$/i, // rule
    'file-icons', // font
    'boo', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.boot$/i, // rule
    'file-icons', // font
    'build-boot', // icon
    1, // priority
    'undefined' // color
  ], [
    /\.bf?$/i, // rule
    'file-icons', // font
    'brain', // icon
    1, // priority
    '#b3008f' // color
  ], [
    /\.bro$/i, // rule
    'file-icons', // font
    'bro', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.br$/i, // rule
    'file-icons', // font
    'brotli', // icon
    1, // priority
    '#d28445' // color
  ], [
    /^(?:browserslist|\.browserslistrc)$/i, // rule
    'file-icons', // font
    'browserslist', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.buckconfig$/i, // rule
    'file-icons', // font
    'buck', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /^BUCK$/, // rule
    'file-icons', // font
    'buck', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.gemfile$/i, // rule
    'file-icons', // font
    'bundler', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.dm$/i, // rule
    'file-icons', // font
    'byond', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.c$/i, // rule
    'mfixx', // font
    'c', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.h$|\.cats$/i, // rule
    'mfixx', // font
    'c', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.idc$|\.xpm$/i, // rule
    'mfixx', // font
    'c', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.w$/i, // rule
    'mfixx', // font
    'c', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.nc$/i, // rule
    'mfixx', // font
    'c', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.upc$/i, // rule
    'mfixx', // font
    'c', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.xbm$/i, // rule
    'mfixx', // font
    'c', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.cs$/i, // rule
    'mfixx', // font
    'csharp', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.csx$/i, // rule
    'file-icons', // font
    'cs-script', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.c[+px]{2}$|\.cc$/i, // rule
    'mfixx', // font
    'cpp', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.h[+px]{2}$/i, // rule
    'mfixx', // font
    'cpp', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.[it]pp$/i, // rule
    'mfixx', // font
    'cpp', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.(?:tcc|inl)$/i, // rule
    'mfixx', // font
    'cpp', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.cabal$/i, // rule
    'file-icons', // font
    'cabal', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.caffemodel$/i, // rule
    'file-icons', // font
    'caffe', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.solverstate$/i, // rule
    'file-icons', // font
    'caffe', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.cake$/i, // rule
    'file-icons', // font
    'cake', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /^Cakefile$/, // rule
    'file-icons', // font
    'cakefile', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.ctp$/i, // rule
    'file-icons', // font
    'cakephp', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.ceylon$/i, // rule
    'file-icons', // font
    'ceylon', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.chpl$/i, // rule
    'file-icons', // font
    'chapel', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.(?:todo|taskpaper)$/i, // rule
    'octicons', // font
    'checklist', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /^chefignore$|^(?:Berks|Policy)file(?:\.lock)?$/i, // rule
    'file-icons', // font
    'chef', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.crx$/i, // rule
    'devopicons', // font
    'chrome', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.ck$/i, // rule
    'file-icons', // font
    'chuck', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.cirru$/i, // rule
    'file-icons', // font
    'cirru', // icon
    1, // priority
    '#ff00cc' // color
  ], [
    /\.clw$/i, // rule
    'file-icons', // font
    'clarion', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.icl$/i, // rule
    'file-icons', // font
    'clean', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.dcl$/i, // rule
    'file-icons', // font
    'clean', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.abc$/i, // rule
    'file-icons', // font
    'clean', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.click$/i, // rule
    'file-icons', // font
    'click', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.clp$/i, // rule
    'file-icons', // font
    'clips', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.clj$/i, // rule
    'devopicons', // font
    'clojure-alt', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.cl2$/i, // rule
    'devopicons', // font
    'clojure-alt', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.cljc$/i, // rule
    'devopicons', // font
    'clojure-alt', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.cljx$|\.hic$/i, // rule
    'devopicons', // font
    'clojure-alt', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.cljs(?:cm)?$/i, // rule
    'file-icons', // font
    'cljs', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.soy$/i, // rule
    'file-icons', // font
    'closure-template', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.cfignore$/i, // rule
    'file-icons', // font
    'cloudfoundry', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.cmake$/i, // rule
    'file-icons', // font
    'cmake', // icon
    1, // priority
    '#90a959' // color
  ], [
    /^CMakeLists\.txt$/, // rule
    'file-icons', // font
    'cmake', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.(?:cob|ccp|cbl|cobol|cpy)$/i, // rule
    'file-icons', // font
    'cobol', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.podspec$/i, // rule
    'file-icons', // font
    'cocoapods', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /(?:^config)?\.codekit\d*$/i, // rule
    'file-icons', // font
    'codekit', // icon
    1, // priority
    'undefined' // color
  ], [
    /\.coffee$/i, // rule
    'font-awesome', // font
    'coffee', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.cjsx$/i, // rule
    'font-awesome', // font
    'coffee', // icon
    1, // priority
    '#573421' // color
  ], [
    /\.litcoffee$/i, // rule
    'font-awesome', // font
    'coffee', // icon
    1, // priority
    '#be7953' // color
  ], [
    /\.iced$/i, // rule
    'font-awesome', // font
    'coffee', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.cfc$/i, // rule
    'file-icons', // font
    'cold-fusion', // icon
    1, // priority
    '#a7d0c9' // color
  ], [
    /\.cfml?$/i, // rule
    'file-icons', // font
    'cold-fusion', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.dae$/i, // rule
    'file-icons', // font
    'khronos', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.cl$/i, // rule
    'file-icons', // font
    'common-lisp', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.cp$/i, // rule
    'file-icons', // font
    'cp', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.cps$/i, // rule
    'file-icons', // font
    'cp', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.(?:ini|desktop|directory|cfg|conf|prefs)$/i, // rule
    'file-icons', // font
    'config', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.properties$/i, // rule
    'file-icons', // font
    'config', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.ld$/i, // rule
    'file-icons', // font
    'config', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.lds$/i, // rule
    'file-icons', // font
    'config', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.opts$|\.flc$/i, // rule
    'file-icons', // font
    'config', // icon
    1, // priority
    '#90a959' // color
  ], [
    /^mimeapps\.list$/i, // rule
    'file-icons', // font
    'config', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /(?:\.|^)terminal(?:rc)?$/i, // rule
    'file-icons', // font
    'config', // icon
    1, // priority
    '#46788d' // color
  ], [
    /^ld\.script$/i, // rule
    'file-icons', // font
    'config', // icon
    1, // priority
    '#d28445' // color
  ], [
    /^\.?XCompose$/, // rule
    'file-icons', // font
    'config', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.git[\/\\](?:config|info[\/\\]\w+)$/, // rule
    'file-icons', // font
    'config', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /(^|[\/\\])\.fossil-settings\1(?:[^\/\/]+)/, // rule
    'file-icons', // font
    'config', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /^\/(?:private\/)?etc\/(?:[^\/]+\/)*[^\/]*\.(?:cf|conf|ini)(?:\.default)?$/i, // rule
    'file-icons', // font
    'config', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /^\/(?:private\/)?etc\/(?:aliases|auto_(?:home|master)|ftpusers|group|gettytab|hosts(?:\.equiv)?|manpaths|networks|paths|protocols|services|shells|sudoers|ttys)$/i, // rule
    'file-icons', // font
    'config', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.conll$/i, // rule
    'file-icons', // font
    'conll', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.conllu$/i, // rule
    'file-icons', // font
    'conll', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.coq$/i, // rule
    'file-icons', // font
    'coq', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.(?:cmx|ccx)$/i, // rule
    'file-icons', // font
    'coreldraw-alt', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.(?:cdrx?|cdt)$/i, // rule
    'file-icons', // font
    'coreldraw', // icon
    1, // priority
    '#90a959' // color
  ], [
    /^cpanfile$/i, // rule
    'file-icons', // font
    'cpan', // icon
    1, // priority
    '#46788d' // color
  ], [
    /^MANIFEST\.SKIP$/, // rule
    'file-icons', // font
    'cpan', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.creole$/i, // rule
    'file-icons', // font
    'creole', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.e?cr$/i, // rule
    'file-icons', // font
    'crystal', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.orc$/i, // rule
    'file-icons', // font
    'csound', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.udo$/i, // rule
    'file-icons', // font
    'csound', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.csd$/i, // rule
    'file-icons', // font
    'csound', // icon
    1, // priority
    '#573421' // color
  ], [
    /\.sco$/i, // rule
    'file-icons', // font
    'csound', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.css$/i, // rule
    'font-awesome', // font
    'css3', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.less$/i, // rule
    'font-awesome', // font
    'css3', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.feature$/i, // rule
    'file-icons', // font
    'cucumber', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.cu$/i, // rule
    'file-icons', // font
    'nvidia', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.cuh$/i, // rule
    'file-icons', // font
    'nvidia', // icon
    1, // priority
    '#66783e' // color
  ], [
    /^\.curlrc$/i, // rule
    'file-icons', // font
    'glyphs', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.cwl$/i, // rule
    'file-icons', // font
    'cwl', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.pyx$/i, // rule
    'file-icons', // font
    'cython', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.pxd$/i, // rule
    'file-icons', // font
    'cython', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.pxi$/i, // rule
    'file-icons', // font
    'cython', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.di?$/i, // rule
    'devopicons', // font
    'dlang', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.dnh$/i, // rule
    'file-icons', // font
    'yin-yang', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.d(?:arcs)?patch$/i, // rule
    'file-icons', // font
    'darcs', // icon
    1, // priority
    '#90a959' // color
  ], [
    /^\.boringignore$/i, // rule
    'file-icons', // font
    'darcs', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.dart$/i, // rule
    'devopicons', // font
    'dart', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.s[kl]im$/i, // rule
    'file-icons', // font
    'dashboard', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.cpuprofile$/i, // rule
    'file-icons', // font
    'dashboard', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.cloc$/i, // rule
    'file-icons', // font
    'dashboard', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.cson$|\.ston$|^(?:mime\.types|fstab)$/i, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.hson$|\.ndjson$|(?:^|\.)encodings\.dir$/i, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.http$|\.pot?$|\.(?:irb-history|lesshst|wget-hsts)$/i, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.fea$/i, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#9dc0ce' // color
  ], [
    /\.json\.eex$|\.edn$|^(?:magic\.mgc|figmagic)$/i, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.(?:proto|protote?xt|pbte?xt)$/i, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.pytb$/i, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.pydeps$/i, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.ejson$/i, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.eam\.fs$/i, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.qml$/i, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#ff00cc' // color
  ], [
    /\.qbs$/i, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#b3008f' // color
  ], [
    /\.ttl$/i, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.syntax$|\.webmanifest$|^pkginfo$/i, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.yas(?:nippet)?$/i, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.(?:ldj|ldjson|jsonl)$/, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /[\/\\](?:magic[\/\\]Magdir|file[\/\\]magic)[\/\\][-.\w]+$/i, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /(\\|\/)dev[-\w]+\1(?:[^\\\/]+\1)*(?!DESC|NOTES)(?:[A-Z][-A-Z]*)(?:\.in)?$|\.ssh[\/\\](?:authorized_keys|known_hosts)$/, // rule
    'octicons', // font
    'database', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.dwl$/i, // rule
    'file-icons', // font
    'dataweave', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.dbf$/i, // rule
    'file-icons', // font
    'dbase', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.deb$/i, // rule
    'mfixx', // font
    'debian', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /(?:^|\.)(?:control|dsc)$/, // rule
    'mfixx', // font
    'debian', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /^rules$/, // rule
    'mfixx', // font
    'debian', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.dfm$/i, // rule
    'file-icons', // font
    'delphi', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.dpr$/i, // rule
    'file-icons', // font
    'delphi', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.dts$/i, // rule
    'file-icons', // font
    'devicetree', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.dtsi$/i, // rule
    'file-icons', // font
    'devicetree', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.dia$/i, // rule
    'file-icons', // font
    'dia', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.diff$/i, // rule
    'file-icons', // font
    'diff', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.zone$/i, // rule
    'font-awesome', // font
    'globe', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.arpa$/i, // rule
    'font-awesome', // font
    'globe', // icon
    1, // priority
    '#90a959' // color
  ], [
    /^CNAME$/, // rule
    'font-awesome', // font
    'globe', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.eco$/i, // rule
    'file-icons', // font
    'docpad', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /^\.?Doxyfile$/i, // rule
    'file-icons', // font
    'doxygen', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.dyalog$/i, // rule
    'file-icons', // font
    'dyalog', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.(?:dylib|bundle)$/i, // rule
    'file-icons', // font
    'dylib', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.eup$/i, // rule
    'file-icons', // font
    'eagle', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.eb$/i, // rule
    'file-icons', // font
    'easybuild', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.ec$/i, // rule
    'file-icons', // font
    'ec', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.eh$/i, // rule
    'file-icons', // font
    'ec', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.epj$/i, // rule
    'file-icons', // font
    'ecere', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.c?project$/, // rule
    'devopicons', // font
    'eclipse', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.classpath$/i, // rule
    'devopicons', // font
    'eclipse', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.edge$/i, // rule
    'file-icons', // font
    'edge', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.editorconfig$/i, // rule
    'file-icons', // font
    'editorconfig', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.e$/, // rule
    'file-icons', // font
    'eiffel', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.ejs$/i, // rule
    'file-icons', // font
    'ejs', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.ex$/i, // rule
    'mfixx', // font
    'elixir', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.(?:exs|eex)$/i, // rule
    'mfixx', // font
    'elixir', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /^mix\.(?:exs?|lock)$/i, // rule
    'mfixx', // font
    'elixir', // icon
    1, // priority
    '#c7a4c0' // color
  ], [
    /\.elm$/i, // rule
    'file-icons', // font
    'elm', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /^(?:authors|(?:code)?owners)$/i, // rule
    'font-awesome', // font
    '_475', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.emberscript$/i, // rule
    'file-icons', // font
    'emberscript', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.em(?:blem)?$/i, // rule
    'file-icons', // font
    'moustache', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.ensime$/i, // rule
    'file-icons', // font
    'ensime', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.eq$/i, // rule
    'file-icons', // font
    'eq', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.erl$|^rebar(?:\.config)?\.lock$/i, // rule
    'devopicons', // font
    'erlang', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.beam$/i, // rule
    'devopicons', // font
    'erlang', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.hrl$/i, // rule
    'devopicons', // font
    'erlang', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.xrl$/i, // rule
    'devopicons', // font
    'erlang', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.yrl$/i, // rule
    'devopicons', // font
    'erlang', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.app\.src$/i, // rule
    'devopicons', // font
    'erlang', // icon
    1, // priority
    '#573421' // color
  ], [
    /^Emakefile$/, // rule
    'devopicons', // font
    'erlang', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.factor$/i, // rule
    'file-icons', // font
    'factor', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.factor-rc$/i, // rule
    'file-icons', // font
    'factor', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.factor-boot-rc$/i, // rule
    'file-icons', // font
    'factor', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.fal(?:con)?$/i, // rule
    'file-icons', // font
    'falcon', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.fy$/i, // rule
    'file-icons', // font
    'fancy', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.fancypack$/i, // rule
    'file-icons', // font
    'fancy', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /^Fakefile$/, // rule
    'file-icons', // font
    'fancy', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.fan$/i, // rule
    'file-icons', // font
    'fantom', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.(?:fasta|fas?|seq|fsa)$/i, // rule
    'file-icons', // font
    'dna', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.(?:fastq|fq)$/i, // rule
    'file-icons', // font
    'dna', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.(?:faa|mpfa)$/i, // rule
    'file-icons', // font
    'dna', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.fna$/i, // rule
    'file-icons', // font
    'dna', // icon
    1, // priority
    '#ff00cc' // color
  ], [
    /\.ffn$/i, // rule
    'file-icons', // font
    'dna', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.frn$/i, // rule
    'file-icons', // font
    'dna', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.sam$/i, // rule
    'file-icons', // font
    'dna', // icon
    1, // priority
    '#ee9e2e' // color
  ], [
    /\.fbx$/i, // rule
    'file-icons', // font
    'fbx', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /^Icon\r$/, // rule
    'file-icons', // font
    'finder', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.rsrc$/i, // rule
    'file-icons', // font
    'finder', // icon
    1, // priority
    '#46788d' // color
  ], [
    /^firestore\.rules?$|\.firebaserc$/i, // rule
    'file-icons', // font
    'firebase', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.webapp$/i, // rule
    'devopicons', // font
    'firefox', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.flooignore$/i, // rule
    'file-icons', // font
    'floobits', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.(?:flowconfig|js\.flow|flow)$/i, // rule
    'file-icons', // font
    'flow', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.fx$/i, // rule
    'file-icons', // font
    'flux', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.flux$/i, // rule
    'file-icons', // font
    'flux', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.woff2$/i, // rule
    'file-icons', // font
    'font-outline', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.woff$/i, // rule
    'file-icons', // font
    'font-outline', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.eot$/i, // rule
    'file-icons', // font
    'font-outline', // icon
    1, // priority
    '#b2c38b' // color
  ], [
    /\.ttc$/i, // rule
    'file-icons', // font
    'font-outline', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.ttf$/i, // rule
    'file-icons', // font
    'font-outline', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.otf$/i, // rule
    'file-icons', // font
    'font-outline', // icon
    1, // priority
    '#ee9e2e' // color
  ], [
    /\.pfb$/i, // rule
    'file-icons', // font
    'font-outline', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.pfm$/i, // rule
    'file-icons', // font
    'font-outline', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.psfu?$/i, // rule
    'file-icons', // font
    'font-bitmap', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.pcf$/i, // rule
    'file-icons', // font
    'font-bitmap', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.psftx$/i, // rule
    'file-icons', // font
    'font-bitmap', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.bdf$|\.flf$/i, // rule
    'file-icons', // font
    'font-bitmap', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.fnt$/i, // rule
    'file-icons', // font
    'font-bitmap', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.fon$/i, // rule
    'file-icons', // font
    'font-bitmap', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.snf$/i, // rule
    'file-icons', // font
    'font-bitmap', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.tlf$/i, // rule
    'file-icons', // font
    'font-bitmap', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.pe$/i, // rule
    'file-icons', // font
    'fontforge', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.sfd$/i, // rule
    'file-icons', // font
    'fontforge', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.f$/i, // rule
    'file-icons', // font
    'fortran', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.f90$/i, // rule
    'file-icons', // font
    'fortran', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.f03$/i, // rule
    'file-icons', // font
    'fortran', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.f08$/i, // rule
    'file-icons', // font
    'fortran', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.f77$/i, // rule
    'file-icons', // font
    'fortran', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.f95$/i, // rule
    'file-icons', // font
    'fortran', // icon
    1, // priority
    '#b3008f' // color
  ], [
    /\.for$/i, // rule
    'file-icons', // font
    'fortran', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.fpp$/i, // rule
    'file-icons', // font
    'fortran', // icon
    1, // priority
    '#ee9e2e' // color
  ], [
    /\.fossaignore$/i, // rule
    'file-icons', // font
    'fossa', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.fi?dl$/i, // rule
    'file-icons', // font
    'franca', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.fdepl$/i, // rule
    'file-icons', // font
    'franca', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.ftl$/i, // rule
    'file-icons', // font
    'freemarker', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.fr$/i, // rule
    'file-icons', // font
    'frege', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.fs[xi]?$/i, // rule
    'devopicons', // font
    'fsharp', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.gspec$/i, // rule
    'file-icons', // font
    'galen', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.gtest$/i, // rule
    'file-icons', // font
    'galen', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.gml$/i, // rule
    'file-icons', // font
    'yoyo', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.gms$/i, // rule
    'file-icons', // font
    'gams', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.gap$/i, // rule
    'file-icons', // font
    'gap', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.gi$/i, // rule
    'file-icons', // font
    'gap', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.tst$/i, // rule
    'file-icons', // font
    'gap', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.gdb$/i, // rule
    'file-icons', // font
    'gdb', // icon
    1, // priority
    '#90a959' // color
  ], [
    /gdbinit$/i, // rule
    'file-icons', // font
    'gdb', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.gd$/i, // rule
    'file-icons', // font
    'godot', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /^\.htaccess$|\.htmlhintrc$|\.yardopts$/i, // rule
    'octicons', // font
    'gear', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /^\.htpasswd$/i, // rule
    'octicons', // font
    'gear', // icon
    1, // priority
    '#d28445' // color
  ], [
    /^\.env\.|\.pairs$/i, // rule
    'octicons', // font
    'gear', // icon
    1, // priority
    '#66783e' // color
  ], [
    /^\.lesshintrc$/i, // rule
    'octicons', // font
    'gear', // icon
    1, // priority
    '#ee9e2e' // color
  ], [
    /^\.csscomb\.json$|\.csslintrc$|\.jsbeautifyrc$|\.jshintrc$|\.jscsrc$/i, // rule
    'octicons', // font
    'gear', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /^text\.enc$/, // rule
    'octicons', // font
    'gear', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.coffeelintignore$|\.codoopts$/i, // rule
    'octicons', // font
    'gear', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.module$/i, // rule
    'octicons', // font
    'gear', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.arcconfig$|\.python-version$/i, // rule
    'octicons', // font
    'gear', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.lintstagedrc$/i, // rule
    'octicons', // font
    'gear', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.dll$/i, // rule
    'font-awesome', // font
    'cogs', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.kid$/i, // rule
    'file-icons', // font
    'genshi', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.ebuild$/i, // rule
    'file-icons', // font
    'gentoo', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.eclass$/i, // rule
    'file-icons', // font
    'gentoo', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.xcf$/i, // rule
    'file-icons', // font
    'gimp', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.ggr$/i, // rule
    'file-icons', // font
    'gimp', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.gih$/i, // rule
    'file-icons', // font
    'gimp', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.gpl$/i, // rule
    'file-icons', // font
    'gimp', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.vbr$/i, // rule
    'file-icons', // font
    'gimp', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /^\.git|^\.keep$|\.mailmap$/i, // rule
    'devopicons', // font
    'git', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /^MERGE_(?:HEAD|MODE|MSG)$/, // rule
    'octicons', // font
    'git-merge', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.glade$/i, // rule
    'file-icons', // font
    'glade', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.gltf$/i, // rule
    'file-icons', // font
    'gltf', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.glf$/i, // rule
    'file-icons', // font
    'pointwise', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.gn$/i, // rule
    'file-icons', // font
    'gn', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.gni$/i, // rule
    'file-icons', // font
    'gn', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.vala$/i, // rule
    'mfixx', // font
    'gnome', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.vapi$/i, // rule
    'mfixx', // font
    'gnome', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.(?:gnu|gplv[23])$/i, // rule
    'file-icons', // font
    'gnu', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.(?:gp|plo?t|gnuplot)$/i, // rule
    'octicons', // font
    'graph', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.go$/i, // rule
    'file-icons', // font
    'go', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.golo$/i, // rule
    'file-icons', // font
    'golo', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.gs$/i, // rule
    'file-icons', // font
    'gosu', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.gst$/i, // rule
    'file-icons', // font
    'gosu', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.gsx$/i, // rule
    'file-icons', // font
    'gosu', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.vark$/i, // rule
    'file-icons', // font
    'gosu', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.gradle$/i, // rule
    'file-icons', // font
    'gradle', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /gradlew$/i, // rule
    'file-icons', // font
    'gradle', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.gf$/i, // rule
    'file-icons', // font
    'gf', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.graphql$/i, // rule
    'file-icons', // font
    'graphql', // icon
    1, // priority
    '#ff00cc' // color
  ], [
    /\.gql$/i, // rule
    'file-icons', // font
    'graphql', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.gv$/i, // rule
    'file-icons', // font
    'graphviz', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.dot$/i, // rule
    'file-icons', // font
    'graphviz', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.(?:plantuml|[ip]uml|pu)$/i, // rule
    'file-icons', // font
    'graphviz', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.(?:groovy|grt|gtpl|gsp|gvy)$/i, // rule
    'file-icons', // font
    'groovy', // icon
    1, // priority
    '#9dc0ce' // color
  ], [
    /\.hh$/i, // rule
    'file-icons', // font
    'hack', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.haml$/i, // rule
    'file-icons', // font
    'haml', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.hamlc$/i, // rule
    'file-icons', // font
    'haml', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.haml\.deface$/i, // rule
    'file-icons', // font
    'haml', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.hb$/i, // rule
    'file-icons', // font
    'harbour', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.hcl$/i, // rule
    'file-icons', // font
    'hashicorp', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.workflow$/i, // rule
    'file-icons', // font
    'hashicorp', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.hs$/i, // rule
    'mfixx', // font
    'haskell', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.hsc$/i, // rule
    'mfixx', // font
    'haskell', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.c2hs$/i, // rule
    'mfixx', // font
    'haskell', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.lhs$/i, // rule
    'mfixx', // font
    'haskell', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.hx(?:[sm]l|)?$/, // rule
    'file-icons', // font
    'haxe', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.hxproj$/i, // rule
    'file-icons', // font
    'haxedevelop', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /^\.p4ignore$/i, // rule
    'file-icons', // font
    'helix', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /^(?:Proc|Apt)file$/, // rule
    'devopicons', // font
    'heroku', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.buildpacks$/i, // rule
    'devopicons', // font
    'heroku', // icon
    1, // priority
    '#c7a4c0' // color
  ], [
    /\.slugignore$/i, // rule
    'devopicons', // font
    'heroku', // icon
    1, // priority
    '#825078' // color
  ], [
    /^\.vendor_urls$/, // rule
    'devopicons', // font
    'heroku', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.hpgl$/i, // rule
    'file-icons', // font
    'hewlettpackard', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.hjson$/i, // rule
    'file-icons', // font
    'hjson', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.hl$/i, // rule
    'file-icons', // font
    'hoplon', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.x?html?$/i, // rule
    'font-awesome', // font
    'html5', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.cshtml$|\.latte$/i, // rule
    'font-awesome', // font
    'html5', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.gohtml$|\.phtml$/i, // rule
    'font-awesome', // font
    'html5', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.html\.eex$|\.jsp$/i, // rule
    'font-awesome', // font
    'html5', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.kit$|\.swig$/i, // rule
    'font-awesome', // font
    'html5', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.isml$/i, // rule
    'font-awesome', // font
    'html5', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.shtml$/i, // rule
    'font-awesome', // font
    'html5', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.scaml$/i, // rule
    'font-awesome', // font
    'html5', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.vash$/i, // rule
    'font-awesome', // font
    'html5', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.xht$/i, // rule
    'font-awesome', // font
    'html5', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.dtml$/i, // rule
    'font-awesome', // font
    'html5', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.mht(?:ml)?$/i, // rule
    'font-awesome', // font
    'html5', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.hy$/i, // rule
    'file-icons', // font
    'hy', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.dlm$/i, // rule
    'file-icons', // font
    'idl', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.idr$/i, // rule
    'file-icons', // font
    'idris', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.lidr$/i, // rule
    'file-icons', // font
    'idris', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.ipf$/i, // rule
    'file-icons', // font
    'igorpro', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.ni$/i, // rule
    'file-icons', // font
    'inform7', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.i7x$/i, // rule
    'file-icons', // font
    'inform7', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.ink$/i, // rule
    'file-icons', // font
    'ink', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.ink2$/i, // rule
    'file-icons', // font
    'ink', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.iss$/i, // rule
    'file-icons', // font
    'inno', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.io$/i, // rule
    'file-icons', // font
    'io', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.ik$/i, // rule
    'file-icons', // font
    'ioke', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.thy$/i, // rule
    'file-icons', // font
    'isabelle', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /^ROOT$/, // rule
    'file-icons', // font
    'isabelle', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.ijs$/i, // rule
    'file-icons', // font
    'j', // icon
    1, // priority
    '#9dc0ce' // color
  ], [
    /\.jade$/i, // rule
    'file-icons', // font
    'jade', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /^Jakefile$/, // rule
    'file-icons', // font
    'jake', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.jake$/i, // rule
    'file-icons', // font
    'jake', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.java$/i, // rule
    'mfixx', // font
    'java-bold', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.js$|\.es\d?$|\.snap$/i, // rule
    'mfixx', // font
    'javascript-alt', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\._js$/i, // rule
    'mfixx', // font
    'javascript-alt', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.jsb$|\.jse$|\.dust$/i, // rule
    'mfixx', // font
    'javascript-alt', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.jsm$|\.mjs$|\.xsjslib$/i, // rule
    'mfixx', // font
    'javascript-alt', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.jss$/i, // rule
    'mfixx', // font
    'javascript-alt', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.sjs$/i, // rule
    'mfixx', // font
    'javascript-alt', // icon
    1, // priority
    '#ff00cc' // color
  ], [
    /\.ssjs$|\.jscript$|\.jslib$/i, // rule
    'mfixx', // font
    'javascript-alt', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.jspre$/i, // rule
    'mfixx', // font
    'javascript-alt', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.xsjs$/i, // rule
    'mfixx', // font
    'javascript-alt', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.htc$/i, // rule
    'mfixx', // font
    'javascript-alt', // icon
    1, // priority
    '#ee9e2e' // color
  ], [
    /\.pac$/i, // rule
    'mfixx', // font
    'javascript-alt', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.pjs$/i, // rule
    'mfixx', // font
    'javascript-alt', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.nojekyll$/i, // rule
    'devopicons', // font
    'jekyll', // icon
    1, // priority
    '#90a959' // color
  ], [
    /^Jenkinsfile$/, // rule
    'file-icons', // font
    'jenkins', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.jinja$/i, // rule
    'file-icons', // font
    'jinja', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.j(?:inja)?2$/i, // rule
    'file-icons', // font
    'jinja', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.jison$/i, // rule
    'file-icons', // font
    'jison', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.jisonlex$/i, // rule
    'file-icons', // font
    'jison', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.ol$/i, // rule
    'file-icons', // font
    'jolie', // icon
    1, // priority
    '#b3008f' // color
  ], [
    /\.iol$/i, // rule
    'file-icons', // font
    'jolie', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.(?:h|geo|topo)?json$/i, // rule
    'file-icons', // font
    'json-1', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.jsonld$/i, // rule
    'file-icons', // font
    'jsonld', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.json5$/i, // rule
    'file-icons', // font
    'json5', // icon
    1, // priority
    '#ee9e2e' // color
  ], [
    /\.jq$/i, // rule
    'mfixx', // font
    'database', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.jsx$/i, // rule
    'file-icons', // font
    'jsx2-alt', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.jl$/i, // rule
    'file-icons', // font
    'julia', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.jos$/i, // rule
    'file-icons', // font
    'junos', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.slax$/i, // rule
    'file-icons', // font
    'junos', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.ipynb$/i, // rule
    'file-icons', // font
    'jupyter', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /^Notebook$/, // rule
    'file-icons', // font
    'jupyter', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.keynote$/i, // rule
    'file-icons', // font
    'keynote', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.knt$/i, // rule
    'file-icons', // font
    'keynote', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.kicad_pcb$|^fp-lib-table$/i, // rule
    'file-icons', // font
    'kicad', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.kicad_pcb-bak$/i, // rule
    'file-icons', // font
    'kicad', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.kicad_mod$/i, // rule
    'file-icons', // font
    'kicad', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.kicad_wks$/i, // rule
    'file-icons', // font
    'kicad', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.kv$/i, // rule
    'file-icons', // font
    'kivy', // icon
    1, // priority
    '#573421' // color
  ], [
    /\.kml$/i, // rule
    'font-awesome', // font
    'globe', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.kt$/i, // rule
    'file-icons', // font
    'kotlin', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.ktm$/i, // rule
    'file-icons', // font
    'kotlin', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.kts$/i, // rule
    'file-icons', // font
    'kotlin', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.krl$/i, // rule
    'file-icons', // font
    'krl', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.lvproj$/i, // rule
    'file-icons', // font
    'labview', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.blade(?:\.php)?$/i, // rule
    'devopicons', // font
    'laravel', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.lasso$|\.las$/i, // rule
    'file-icons', // font
    'lasso', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.lasso8$/i, // rule
    'file-icons', // font
    'lasso', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.lasso9$/i, // rule
    'file-icons', // font
    'lasso', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.ldml$/i, // rule
    'file-icons', // font
    'lasso', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.lr$/i, // rule
    'file-icons', // font
    'lektor', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.lektorproject$/i, // rule
    'file-icons', // font
    'lektor', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.lfe$/i, // rule
    'file-icons', // font
    'lfe', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.lwo$/i, // rule
    'file-icons', // font
    'lightwave', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.lws$/i, // rule
    'file-icons', // font
    'lightwave', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.url$/i, // rule
    'octicons', // font
    'link', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.lsp$/i, // rule
    'file-icons', // font
    'lisp', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.lisp$/i, // rule
    'file-icons', // font
    'lisp', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.l$|\.nl$/i, // rule
    'file-icons', // font
    'lisp', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.ny$|\.sexp$/i, // rule
    'file-icons', // font
    'lisp', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.podsl$/i, // rule
    'file-icons', // font
    'lisp', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.sbclrc$/i, // rule
    'file-icons', // font
    'lisp', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.ls$/i, // rule
    'file-icons', // font
    'livescript', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\._ls$/i, // rule
    'file-icons', // font
    'livescript', // icon
    1, // priority
    '#46788d' // color
  ], [
    /^Slakefile$/, // rule
    'file-icons', // font
    'livescript', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.ll$/i, // rule
    'file-icons', // font
    'llvm', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.clang-(?:format|tidy)$/i, // rule
    'file-icons', // font
    'llvm', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /^ubsan\.blacklist$/i, // rule
    'file-icons', // font
    'llvm', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.xm$/i, // rule
    'font-awesome', // font
    'mobile_phone', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.xi$/i, // rule
    'font-awesome', // font
    'mobile_phone', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.(?:logtalk|lgt)$/i, // rule
    'file-icons', // font
    'logtalk', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.(?:lookml|lkml)$/i, // rule
    'file-icons', // font
    'lookml', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.lsl$/i, // rule
    'file-icons', // font
    'lsl', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.lslp$/i, // rule
    'file-icons', // font
    'lsl', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.lua$/i, // rule
    'file-icons', // font
    'lua', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.pd_lua$/i, // rule
    'file-icons', // font
    'lua', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.rbxs$/i, // rule
    'file-icons', // font
    'lua', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.wlua$/i, // rule
    'file-icons', // font
    'lua', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /^Makefile|^makefile$/, // rule
    'octicons', // font
    'checklist', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.(?:mk|mak|make)$|^mkfile$/i, // rule
    'octicons', // font
    'checklist', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /^BSDmakefile$|^makefile\.sco$|\.am$/i, // rule
    'octicons', // font
    'checklist', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /^GNUmakefile$/i, // rule
    'octicons', // font
    'checklist', // icon
    1, // priority
    '#90a959' // color
  ], [
    /^Kbuild$/, // rule
    'octicons', // font
    'checklist', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /^\.?qmake$|\.bb$/i, // rule
    'octicons', // font
    'checklist', // icon
    1, // priority
    '#46788d' // color
  ], [
    /^DEPS$/, // rule
    'octicons', // font
    'checklist', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.mms$/i, // rule
    'octicons', // font
    'checklist', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.mmk$/i, // rule
    'octicons', // font
    'checklist', // icon
    1, // priority
    '#9dc0ce' // color
  ], [
    /\.pri$/i, // rule
    'octicons', // font
    'checklist', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.mak?o$/i, // rule
    'file-icons', // font
    'mako', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.mss$/i, // rule
    'file-icons', // font
    'mapbox', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.(?:md|mdown|markdown|mkd|mkdown|mdwn|mkdn|rmd|ron|pmd)$/i, // rule
    'octicons', // font
    'markdown', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /^\.?mdlrc(?:\.style)?\.rb$/i, // rule
    'file-icons', // font
    'markdownlint', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /^\.?mdlrc$/i, // rule
    'file-icons', // font
    'markdownlint', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.mathematica$|\.nbp$/i, // rule
    'file-icons', // font
    'mathematica', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.cdf$/i, // rule
    'file-icons', // font
    'mathematica', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.ma$/i, // rule
    'file-icons', // font
    'mathematica', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.mt$/i, // rule
    'file-icons', // font
    'mathematica', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.nb$/i, // rule
    'file-icons', // font
    'mathematica', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.wl$/i, // rule
    'file-icons', // font
    'mathematica', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.wlt$/i, // rule
    'file-icons', // font
    'mathematica', // icon
    1, // priority
    '#ee9e2e' // color
  ], [
    /\.matlab$/i, // rule
    'file-icons', // font
    'matlab', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.maxpat$/i, // rule
    'file-icons', // font
    'max', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.maxhelp$/i, // rule
    'file-icons', // font
    'max', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.maxproj$/i, // rule
    'file-icons', // font
    'max', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.mxt$/i, // rule
    'file-icons', // font
    'max', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.pat$/i, // rule
    'file-icons', // font
    'max', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.ms$/i, // rule
    'file-icons', // font
    'maxscript', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.mcr$/i, // rule
    'file-icons', // font
    'maxscript', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.mce$/i, // rule
    'file-icons', // font
    'maxscript', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.max$/i, // rule
    'file-icons', // font
    'maxscript', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.3ds$/i, // rule
    'file-icons', // font
    'maxscript', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.mb$/i, // rule
    'file-icons', // font
    'maya', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.mel$/i, // rule
    'file-icons', // font
    'maya', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.mcf[ip]$/i, // rule
    'file-icons', // font
    'maya', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.mdx$/i, // rule
    'file-icons', // font
    'mdx', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.mediawiki$/i, // rule
    'file-icons', // font
    'mediawiki', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.wiki$/i, // rule
    'file-icons', // font
    'mediawiki', // icon
    1, // priority
    '#d28445' // color
  ], [
    /^\.mention-bot$/i, // rule
    'font-awesome', // font
    'bullhorn', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.hgignore$/i, // rule
    'file-icons', // font
    'hg', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.?hgrc$/i, // rule
    'file-icons', // font
    'hg', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.hgsub$/i, // rule
    'file-icons', // font
    'hg', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.hgsubstate$/i, // rule
    'file-icons', // font
    'hg', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.moo$/i, // rule
    'file-icons', // font
    'mercury', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.accda$/i, // rule
    'file-icons', // font
    'access', // icon
    1, // priority
    '#573421' // color
  ], [
    /\.accdb$/i, // rule
    'file-icons', // font
    'access', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.accde$/i, // rule
    'file-icons', // font
    'access', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.accdr$/i, // rule
    'file-icons', // font
    'access', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.accdt$/i, // rule
    'file-icons', // font
    'access', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.adn$|\.laccdb$/i, // rule
    'file-icons', // font
    'access', // icon
    1, // priority
    '#be7953' // color
  ], [
    /\.mdw$/i, // rule
    'file-icons', // font
    'access', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.xls$/i, // rule
    'file-icons', // font
    'excel', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.xlsx$/i, // rule
    'file-icons', // font
    'excel', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.xlsm$/i, // rule
    'file-icons', // font
    'excel', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.xlsb$/i, // rule
    'file-icons', // font
    'excel', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.xlt$/i, // rule
    'file-icons', // font
    'excel', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.(?:infopathxml|xsn|xsf|xtp2)$/i, // rule
    'file-icons', // font
    'microsoft-infopath', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.o?crec$/i, // rule
    'file-icons', // font
    'microsoft-lync', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.one$/i, // rule
    'file-icons', // font
    'onenote', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.pst$|\.oab$/i, // rule
    'file-icons', // font
    'microsoft-outlook', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.bcmx$/i, // rule
    'file-icons', // font
    'microsoft-outlook', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.otm$/i, // rule
    'file-icons', // font
    'microsoft-outlook', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.oft$/i, // rule
    'file-icons', // font
    'microsoft-outlook', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.nk2$/i, // rule
    'file-icons', // font
    'microsoft-outlook', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.pps$/i, // rule
    'file-icons', // font
    'powerpoint', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.ppsx$/i, // rule
    'file-icons', // font
    'powerpoint', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.ppt$/i, // rule
    'file-icons', // font
    'powerpoint', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.pptx$/i, // rule
    'file-icons', // font
    'powerpoint', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.potm$/i, // rule
    'file-icons', // font
    'powerpoint', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.mpp$/i, // rule
    'file-icons', // font
    'powerpoint', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.puz$/i, // rule
    'file-icons', // font
    'microsoft-publisher', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.vsdx$|\.vs[st][mx]?$/i, // rule
    'file-icons', // font
    'visio', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.vdw$/i, // rule
    'file-icons', // font
    'visio', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.vdx$/i, // rule
    'file-icons', // font
    'visio', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.vsd$/i, // rule
    'file-icons', // font
    'visio', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.vsdm$/i, // rule
    'file-icons', // font
    'visio', // icon
    1, // priority
    '#573421' // color
  ], [
    /\.vsw$/i, // rule
    'file-icons', // font
    'visio', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.vsx$|\.vtx$/i, // rule
    'file-icons', // font
    'visio', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.vrd$/i, // rule
    'file-icons', // font
    'visio', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.vsl$/i, // rule
    'file-icons', // font
    'visio', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.doc$/i, // rule
    'file-icons', // font
    'word', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.docx$|\.wll$/i, // rule
    'file-icons', // font
    'word', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.docm$/i, // rule
    'file-icons', // font
    'word', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.docxml$/i, // rule
    'file-icons', // font
    'word', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.dotm$/i, // rule
    'file-icons', // font
    'word', // icon
    1, // priority
    '#573421' // color
  ], [
    /\.dotx$/i, // rule
    'file-icons', // font
    'word', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.wri$/i, // rule
    'file-icons', // font
    'word', // icon
    1, // priority
    '#d28445' // color
  ], [
    /^mcmod\.info$|^pack\.mcmeta$/i, // rule
    'file-icons', // font
    'minecraft', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.mcfunction$/i, // rule
    'file-icons', // font
    'minecraft', // icon
    1, // priority
    '#b2c38b' // color
  ], [
    /\.png\.mcmeta$/, // rule
    'file-icons', // font
    'minecraft', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.mzn$/i, // rule
    'file-icons', // font
    'minizinc', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.dzn$/i, // rule
    'file-icons', // font
    'minizinc', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.dr?uby$/g, // rule
    'file-icons', // font
    'mirah', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.mir(?:ah)?$/g, // rule
    'file-icons', // font
    'mirah', // icon
    1, // priority
    '#9dc0ce' // color
  ], [
    /\.mjml$/i, // rule
    'file-icons', // font
    'MJML', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.mjmlslim$/i, // rule
    'file-icons', // font
    'MJML', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.obj$|\.geo(?:m|metry)?$/i, // rule
    'file-icons', // font
    'obj', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.mtl$/i, // rule
    'file-icons', // font
    'obj', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.shader$/i, // rule
    'file-icons', // font
    'obj', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.comp$/i, // rule
    'file-icons', // font
    'obj', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.tesc$|\.tese$/i, // rule
    'file-icons', // font
    'obj', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.cginc$/i, // rule
    'file-icons', // font
    'obj', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.stl$/i, // rule
    'file-icons', // font
    'obj', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.u3d$/i, // rule
    'file-icons', // font
    'obj', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.(?:rviz|vcg)$/i, // rule
    'file-icons', // font
    'obj', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.mo$/i, // rule
    'font-awesome', // font
    'circle', // icon
    1, // priority
    '#c97071' // color
  ], [
    /\.mod$/i, // rule
    'file-icons', // font
    'modula-2', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.def$/i, // rule
    'file-icons', // font
    'modula-2', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.m2$/i, // rule
    'file-icons', // font
    'modula-2', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.i3$/i, // rule
    'file-icons', // font
    'modula-3', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.ig$/i, // rule
    'file-icons', // font
    'modula-3', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.m3$/i, // rule
    'file-icons', // font
    'modula-3', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.mg$/i, // rule
    'file-icons', // font
    'modula-3', // icon
    1, // priority
    '#66783e' // color
  ], [
    /^m3(?:makefile|overrides)$/i, // rule
    'file-icons', // font
    'modula-3', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.monkey$/i, // rule
    'file-icons', // font
    'monkey', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.moon$/i, // rule
    'font-awesome', // font
    '_366', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.mrb$/i, // rule
    'file-icons', // font
    'mruby', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.dsql$/i, // rule
    'mfixx', // font
    'msqlserver', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.mu$/i, // rule
    'file-icons', // font
    'mupad', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.chord$/i, // rule
    'font-awesome', // font
    'music', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.midi?$/i, // rule
    'font-awesome', // font
    'music', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.ly$/i, // rule
    'font-awesome', // font
    'music', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.ily$/i, // rule
    'font-awesome', // font
    'music', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.pd$/i, // rule
    'font-awesome', // font
    'music', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.(?:hbs|handlebars|(?:mu)?stache)$/i, // rule
    'file-icons', // font
    'moustache', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.nanorc$/i, // rule
    'file-icons', // font
    'nano', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.build$/i, // rule
    'file-icons', // font
    'nant', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.nasm$/i, // rule
    'file-icons', // font
    'nasm', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.ncl$/i, // rule
    'font-awesome', // font
    'globe', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.nd?proj$/i, // rule
    'file-icons', // font
    'ndepend', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.neko$/i, // rule
    'file-icons', // font
    'neko', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.cyp(?:her)?$/i, // rule
    'file-icons', // font
    'neo4j', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.axs$/i, // rule
    'file-icons', // font
    'amx', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.axi$/i, // rule
    'file-icons', // font
    'amx', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.nlogo$/i, // rule
    'file-icons', // font
    'netlogo', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.nf$/i, // rule
    'file-icons', // font
    'nextflow', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.nib$/i, // rule
    'file-icons', // font
    'nib', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.nim(?:rod)?$/i, // rule
    'file-icons', // font
    'nimrod', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.ninja$/i, // rule
    'file-icons', // font
    'shuriken', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.nit$/i, // rule
    'file-icons', // font
    'nit', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.nix$/i, // rule
    'file-icons', // font
    'nix', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.nse$/i, // rule
    'file-icons', // font
    'nmap', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.njs$|\.nvmrc$/i, // rule
    'devopicons', // font
    'nodejs-small', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.node$|\.node-version$/i, // rule
    'devopicons', // font
    'nodejs-small', // icon
    1, // priority
    '#66783e' // color
  ], [
    /^BUNDLED_NODE_VERSION$/, // rule
    'devopicons', // font
    'nodejs-small', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.nomad$/i, // rule
    'file-icons', // font
    'nomad', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.nsi$/i, // rule
    'file-icons', // font
    'nsis', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.nsh$/i, // rule
    'file-icons', // font
    'nsis', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.nu$/i, // rule
    'font-awesome', // font
    '_413', // icon
    1, // priority
    '#b2c38b' // color
  ], [
    /^Nukefile$/, // rule
    'font-awesome', // font
    '_413', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.nuspec$/i, // rule
    'file-icons', // font
    'nuget', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.pkgproj$/i, // rule
    'file-icons', // font
    'nuget', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.numpy$/i, // rule
    'file-icons', // font
    'numpy', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.numpyw$/i, // rule
    'file-icons', // font
    'numpy', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.numsc$/i, // rule
    'file-icons', // font
    'numpy', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.(?:nunjucks|njk)$/i, // rule
    'file-icons', // font
    'nunjucks', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.nxc$/i, // rule
    'file-icons', // font
    'nxc', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.mm?$/i, // rule
    'mfixx', // font
    'objc', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.pch$/i, // rule
    'mfixx', // font
    'objc', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.x$/i, // rule
    'mfixx', // font
    'objc', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.j$/i, // rule
    'file-icons', // font
    'objective-j', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.sj$/i, // rule
    'file-icons', // font
    'objective-j', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.ml$/i, // rule
    'file-icons', // font
    'ocaml', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.mli$/i, // rule
    'file-icons', // font
    'ocaml', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.eliom$/i, // rule
    'file-icons', // font
    'ocaml', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.eliomi$/i, // rule
    'file-icons', // font
    'ocaml', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.ml4$/i, // rule
    'file-icons', // font
    'ocaml', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.mll$/i, // rule
    'file-icons', // font
    'ocaml', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.mly$/i, // rule
    'file-icons', // font
    'ocaml', // icon
    1, // priority
    '#ee9e2e' // color
  ], [
    /\.octave$|\.octave_hist$/i, // rule
    'file-icons', // font
    'octave', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.octaverc$/i, // rule
    'file-icons', // font
    'octave', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.ooc$/i, // rule
    'file-icons', // font
    'ooc', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.opa$/i, // rule
    'file-icons', // font
    'opa', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.opencl$/i, // rule
    'file-icons', // font
    'opencl', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.(?:p|abl)$/i, // rule
    'file-icons', // font
    'progress', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.(?:glslv?|gsh|gshader)$/i, // rule
    'file-icons', // font
    'opengl', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.(?:vert|vrx|vertex|vsh(?:ader)?)$/i, // rule
    'file-icons', // font
    'vertex-shader', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.(?:fra?g|fp|fsh|fshader)$/i, // rule
    'file-icons', // font
    'vertex-shader', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.odt$/i, // rule
    'file-icons', // font
    'openoffice', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.ott$/i, // rule
    'file-icons', // font
    'openoffice', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.fodt$/i, // rule
    'file-icons', // font
    'openoffice', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.ods$/i, // rule
    'file-icons', // font
    'openoffice', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.ots$/i, // rule
    'file-icons', // font
    'openoffice', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.fods$/i, // rule
    'file-icons', // font
    'openoffice', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.odp$/i, // rule
    'file-icons', // font
    'openoffice', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.otp$/i, // rule
    'file-icons', // font
    'openoffice', // icon
    1, // priority
    '#b3008f' // color
  ], [
    /\.fodp$/i, // rule
    'file-icons', // font
    'openoffice', // icon
    1, // priority
    '#ff00cc' // color
  ], [
    /\.odg$/i, // rule
    'file-icons', // font
    'openoffice', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.otg$/i, // rule
    'file-icons', // font
    'openoffice', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.fodg$/i, // rule
    'file-icons', // font
    'openoffice', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.odf$/i, // rule
    'file-icons', // font
    'openoffice', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.odb$/i, // rule
    'file-icons', // font
    'openoffice', // icon
    1, // priority
    '#ff4ddb' // color
  ], [
    /\.scad$/i, // rule
    'file-icons', // font
    'openscad', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.jscad$/i, // rule
    'file-icons', // font
    'openscad', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.hlb$/i, // rule
    'file-icons', // font
    'openvms', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.org$/i, // rule
    'file-icons', // font
    'org', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.dmg$/i, // rule
    'mfixx', // font
    'osx', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.ox$/i, // rule
    'file-icons', // font
    'ox', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.oxh$/i, // rule
    'file-icons', // font
    'ox', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.oxo$/i, // rule
    'file-icons', // font
    'ox', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.oxygene$/i, // rule
    'file-icons', // font
    'oxygene', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.oz$/i, // rule
    'file-icons', // font
    'oz', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.p4$/i, // rule
    'file-icons', // font
    'p4', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.pan$/i, // rule
    'file-icons', // font
    'pan', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.psc$/i, // rule
    'file-icons', // font
    'papyrus', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.parrot$/i, // rule
    'file-icons', // font
    'parrot', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.pasm$/i, // rule
    'file-icons', // font
    'parrot', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.pir$/i, // rule
    'file-icons', // font
    'parrot', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.pas(?:cal)?$/i, // rule
    'file-icons', // font
    'pascal', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.lpr$/i, // rule
    'file-icons', // font
    'pascal', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.patch$/i, // rule
    'file-icons', // font
    'patch', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.pwn$/i, // rule
    'file-icons', // font
    'pawn', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.pcd$/i, // rule
    'file-icons', // font
    'pcd', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.pegjs$/i, // rule
    'file-icons', // font
    'pegjs', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.pegcoffee$/i, // rule
    'file-icons', // font
    'pegjs', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.p(?:er)?l$/i, // rule
    'devopicons', // font
    'perl', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.al$|\.pm$/i, // rule
    'devopicons', // font
    'perl', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.ph$/i, // rule
    'devopicons', // font
    'perl', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.plx$/i, // rule
    'devopicons', // font
    'perl', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.(?:psgi|xs)$/i, // rule
    'devopicons', // font
    'perl', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.pl6$/i, // rule
    'file-icons', // font
    'perl6', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.[tp]6$|\.6pl$/i, // rule
    'file-icons', // font
    'perl6', // icon
    1, // priority
    '#9dc0ce' // color
  ], [
    /\.(?:pm6|p6m)$/i, // rule
    'file-icons', // font
    'perl6', // icon
    1, // priority
    '#b3008f' // color
  ], [
    /\.6pm$/i, // rule
    'file-icons', // font
    'perl6', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.nqp$/i, // rule
    'file-icons', // font
    'perl6', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.p6l$/i, // rule
    'file-icons', // font
    'perl6', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.pod6$/i, // rule
    'file-icons', // font
    'perl6', // icon
    1, // priority
    '#66783e' // color
  ], [
    /^Rexfile$/, // rule
    'file-icons', // font
    'perl6', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.volt$/i, // rule
    'file-icons', // font
    'phalcon', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.php(?:[st\d]|_cs)?$/i, // rule
    'file-icons', // font
    'php', // icon
    1, // priority
    '#46788d' // color
  ], [
    /^Phakefile/, // rule
    'file-icons', // font
    'php', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.pkl$/i, // rule
    'file-icons', // font
    'pickle', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.p8$/i, // rule
    'file-icons', // font
    'pico8', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.pike$/i, // rule
    'file-icons', // font
    'pike', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.pmod$/i, // rule
    'file-icons', // font
    'pike', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.(?:pls|pck|pks|plb|plsql|pkb)$/i, // rule
    'mfixx', // font
    'database', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.pod$/i, // rule
    'file-icons', // font
    'pod', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.pogo$/i, // rule
    'file-icons', // font
    'pogo', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.pony$/i, // rule
    'file-icons', // font
    'pony', // icon
    1, // priority
    '#be7953' // color
  ], [
    /\.p(?:ost)?css$/i, // rule
    'file-icons', // font
    'postcss', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.sss$/i, // rule
    'file-icons', // font
    'postcss', // icon
    1, // priority
    '#b3008f' // color
  ], [
    /\.pgsql$/i, // rule
    'mfixx', // font
    'postgresql', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.ps$/i, // rule
    'file-icons', // font
    'postscript', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.eps$/i, // rule
    'file-icons', // font
    'postscript', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.pfa$/i, // rule
    'file-icons', // font
    'postscript', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.a[fm]m$/i, // rule
    'file-icons', // font
    'postscript', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.gsf$/i, // rule
    'file-icons', // font
    'postscript', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.pbl$|\.sra$/i, // rule
    'file-icons', // font
    'pb', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.pbt$/i, // rule
    'file-icons', // font
    'pb', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.srw$/i, // rule
    'file-icons', // font
    'pb', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.sru$/i, // rule
    'file-icons', // font
    'pb', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.srp$/i, // rule
    'file-icons', // font
    'pb', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.srj$/i, // rule
    'file-icons', // font
    'pb', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.ps1$/i, // rule
    'file-icons', // font
    'powershell', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.psd1$/i, // rule
    'file-icons', // font
    'powershell', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.psm1$/i, // rule
    'file-icons', // font
    'powershell', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.ps1xml$/i, // rule
    'file-icons', // font
    'powershell', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.ppd$/i, // rule
    'font-awesome', // font
    'print', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.prisma$/i, // rule
    'file-icons', // font
    'prisma', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.pde$/i, // rule
    'file-icons', // font
    'processing', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.pro$/i, // rule
    'devopicons', // font
    'prolog', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.prolog$/i, // rule
    'devopicons', // font
    'prolog', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.yap$/i, // rule
    'devopicons', // font
    'prolog', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.spin$/i, // rule
    'file-icons', // font
    'propeller', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.pug$/i, // rule
    'file-icons', // font
    'pug', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.pp$/i, // rule
    'file-icons', // font
    'puppet', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.epp$/i, // rule
    'file-icons', // font
    'puppet', // icon
    1, // priority
    '#d28445' // color
  ], [
    /Modulefile$/i, // rule
    'file-icons', // font
    'puppet', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.purs$/i, // rule
    'file-icons', // font
    'purescript', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.arr$/i, // rule
    'file-icons', // font
    'pyret', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.py$|\.py3$|\.?(?:pypirc|pythonrc|python-venv)$/i, // rule
    'mfixx', // font
    'python', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.ipy$|\.pyi$/i, // rule
    'mfixx', // font
    'python', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.isolate$|\.gypi$|\.pyt$/i, // rule
    'mfixx', // font
    'python', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.pep$|\.pyde$/i, // rule
    'mfixx', // font
    'python', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.gyp$|\.smk$/i, // rule
    'mfixx', // font
    'python', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.pyp$/i, // rule
    'mfixx', // font
    'python', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.pyw$/i, // rule
    'mfixx', // font
    'python', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.tac$/i, // rule
    'mfixx', // font
    'python', // icon
    1, // priority
    '#b3008f' // color
  ], [
    /\.wsgi$/i, // rule
    'mfixx', // font
    'python', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.xpy$/i, // rule
    'mfixx', // font
    'python', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.rpy$/i, // rule
    'mfixx', // font
    'python', // icon
    1, // priority
    '#ff00cc' // color
  ], [
    /^(?:SConstruct|SConscript)$/, // rule
    'mfixx', // font
    'python', // icon
    1, // priority
    '#66783e' // color
  ], [
    /^(?:Snakefile|WATCHLISTS)$/, // rule
    'mfixx', // font
    'python', // icon
    1, // priority
    '#90a959' // color
  ], [
    /^wscript$/, // rule
    'mfixx', // font
    'python', // icon
    1, // priority
    '#573421' // color
  ], [
    /\.q$/i, // rule
    'file-icons', // font
    'kx', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.k$/i, // rule
    'file-icons', // font
    'kx', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.(?:r|Rprofile|Rhistory|rsx|rd)$/i, // rule
    'file-icons', // font
    'r', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.rkt$/i, // rule
    'file-icons', // font
    'racket', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.rktd$/i, // rule
    'file-icons', // font
    'racket', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.rktl$/i, // rule
    'file-icons', // font
    'racket', // icon
    1, // priority
    '#c97071' // color
  ], [
    /\.scrbl$/i, // rule
    'file-icons', // font
    'racket', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.raml$/i, // rule
    'file-icons', // font
    'raml', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.rsc$/i, // rule
    'file-icons', // font
    'rascal', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.rdoc$/i, // rule
    'file-icons', // font
    'rdoc', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.changes$|\.faq$/i, // rule
    'octicons', // font
    'book', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.rbbas$/i, // rule
    'file-icons', // font
    'realbasic', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.rbfrm$/i, // rule
    'file-icons', // font
    'realbasic', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.rbmnu$/i, // rule
    'file-icons', // font
    'realbasic', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.rbres$/i, // rule
    'file-icons', // font
    'realbasic', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.rbtbar$/i, // rule
    'file-icons', // font
    'realbasic', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.rbuistate$/i, // rule
    'file-icons', // font
    'realbasic', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.re$/i, // rule
    'file-icons', // font
    'reason', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.rei$/i, // rule
    'file-icons', // font
    'reason', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.reb(?:ol)?$/i, // rule
    'file-icons', // font
    'rebol', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.r2$/i, // rule
    'file-icons', // font
    'rebol', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.r3$/i, // rule
    'file-icons', // font
    'rebol', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.red$/i, // rule
    'file-icons', // font
    'red', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.reds$/i, // rule
    'file-icons', // font
    'red', // icon
    1, // priority
    '#c97071' // color
  ], [
    /\.rpm(?:macros)?$/i, // rule
    'mfixx', // font
    'redhat', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.spec$/i, // rule
    'mfixx', // font
    'redhat', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.reek$/i, // rule
    'file-icons', // font
    'reek', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.re?st(?:\.txt)?$/i, // rule
    'file-icons', // font
    'rst', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.rexx?$/i, // rule
    'file-icons', // font
    'rexx', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.pprx$/i, // rule
    'file-icons', // font
    'rexx', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.3dm$/i, // rule
    'file-icons', // font
    'rhino', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.rvb$/i, // rule
    'file-icons', // font
    'rhino', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.tag$/i, // rule
    'file-icons', // font
    'riot', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.robot$/i, // rule
    'file-icons', // font
    'robot', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.(?:1(?:[bcmstx]|has|in)?|[24568]|3(?:avl|bsm|cfgadm|in|[cmx]|qt)?|7(?:d|fs|i|ipp|m|p)?|9[efps]?|chem|eqn|groff|man|mandoc|mdoc|me|mom|nr?|nroff|pic|roff?|tmac|tmac-u|tr|troff)$|(?:^|\.)(?:(?:troff|eqn)rc(?:-end)?)$/i, // rule
    'file-icons', // font
    'man-page', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.(?:rnh|rno|run|runoff)$/i, // rule
    'file-icons', // font
    'man-page', // icon
    1, // priority
    '#573421' // color
  ], [
    /(\\|\/)(?:man(\w+)\1[^\\\/]+\.\2|(?:tmac|eqnchar)\.d\1(?:ms\.)?[^\\\/.]+(?:\.in)?|picasso\1(?:defs\.\w+|disclaimer))$/, // rule
    'file-icons', // font
    'man-page', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.rg$/i, // rule
    'devopicons', // font
    'clojure-alt', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.rspec$/i, // rule
    'file-icons', // font
    'rspec', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.rss$/i, // rule
    'font-awesome', // font
    '_303', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.rproj$/i, // rule
    'file-icons', // font
    'rstudio', // icon
    1, // priority
    '#9dc0ce' // color
  ], [
    /\.(?:rb|ru|ruby|erb|gemspec|god|mspec|pluginspec|podspec|rabl|rake|opal)$|^\.?(?:irbrc|gemrc|pryrc|ruby-(?:gemset|version))$/i, // rule
    'octicons', // font
    'ruby', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /^(?:Appraisals|(?:Rake|App|[bB]uild|Cap|Danger|Deliver|Fast|Guard|Jar|Maven|Pod|Puppet|Snap)file(?:\.lock)?)$|^rails$/, // rule
    'octicons', // font
    'ruby', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.(?:jbuilder|rbuild|rb[wx]|builder)$/i, // rule
    'octicons', // font
    'ruby', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.watchr$/i, // rule
    'octicons', // font
    'ruby', // icon
    1, // priority
    '#ee9e2e' // color
  ], [
    /\.rs$/i, // rule
    'devopicons', // font
    'rust', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.rlib$/i, // rule
    'devopicons', // font
    'rust', // icon
    1, // priority
    '#be7953' // color
  ], [
    /^rust-toolchain$/, // rule
    'devopicons', // font
    'rust', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.webarchive$/i, // rule
    'devopicons', // font
    'safari', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.sage$/i, // rule
    'file-icons', // font
    'sage', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.sagews$/i, // rule
    'file-icons', // font
    'sage', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.sls$/i, // rule
    'file-icons', // font
    'saltstack', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.sas$/i, // rule
    'file-icons', // font
    'sas', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.scss$/i, // rule
    'devopicons', // font
    'sass', // icon
    1, // priority
    '#ff4ddb' // color
  ], [
    /\.sass$/i, // rule
    'devopicons', // font
    'sass', // icon
    1, // priority
    '#b3008f' // color
  ], [
    /\.sbt$/i, // rule
    'file-icons', // font
    'sbt', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.(?:sc|scala)$/i, // rule
    'mfixx', // font
    'scala', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.kojo$/i, // rule
    'mfixx', // font
    'scala', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.sci$/i, // rule
    'file-icons', // font
    'scilab', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.sce$/i, // rule
    'file-icons', // font
    'scilab', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.tst$/i, // rule
    'file-icons', // font
    'scilab', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.scilla$/i, // rule
    'file-icons', // font
    'scilla', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.self$/i, // rule
    'file-icons', // font
    'self', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.csv$/i, // rule
    'octicons', // font
    'graph', // icon
    1, // priority
    '#c97071' // color
  ], [
    /\.(?:tab|tsv)$/i, // rule
    'octicons', // font
    'graph', // icon
    1, // priority
    '#b2c38b' // color
  ], [
    /\.dif$/i, // rule
    'octicons', // font
    'graph', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.slk$/i, // rule
    'octicons', // font
    'graph', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.sequelizerc$/i, // rule
    'file-icons', // font
    'sequelize', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.sfproj$/i, // rule
    'file-icons', // font
    'sf', // icon
    1, // priority
    '#e1ad83' // color
  ], [
    /\.(?:sh|rc|bats|bash|tool|install|command)$/i, // rule
    'file-icons', // font
    'terminal', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /^(?:\.?bash(?:rc|[-_]?(?:profile|login|logout|history|prompt))|_osc|config|install-sh|PKGBUILD)$|\.profile$/i, // rule
    'file-icons', // font
    'terminal', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.(?:ksh|mksh|pdksh)$/i, // rule
    'file-icons', // font
    'terminal', // icon
    1, // priority
    '#ee9e2e' // color
  ], [
    /\.sh-session$/i, // rule
    'file-icons', // font
    'terminal', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.zsh(?:-theme|_history)?$|^\.?(?:antigen|zpreztorc|zlogin|zlogout|zprofile|zshenv|zshrc)$|\.tmux$|\.awk$/i, // rule
    'file-icons', // font
    'terminal', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.fish$|^\.fishrc$|\.tcsh$/i, // rule
    'file-icons', // font
    'terminal', // icon
    1, // priority
    '#90a959' // color
  ], [
    /^\.?(?:login|profile)$|^(?:configure|config\.(?:guess|rpath|status|sub)|depcomp|libtool|compile)$/, // rule
    'file-icons', // font
    'terminal', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.inputrc$|\.gawk$/i, // rule
    'file-icons', // font
    'terminal', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /^\/(?:private\/)?etc\/(?:[^\/]+\/)*(?:profile$|nanorc$|rc\.|csh\.)/i, // rule
    'file-icons', // font
    'terminal', // icon
    1, // priority
    '#825078' // color
  ], [
    /^\.?cshrc$/i, // rule
    'file-icons', // font
    'terminal', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.csh$/i, // rule
    'file-icons', // font
    'terminal', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.mawk$/i, // rule
    'file-icons', // font
    'terminal', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.nawk$/i, // rule
    'file-icons', // font
    'terminal', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.auk$/i, // rule
    'file-icons', // font
    'terminal', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.shen$/i, // rule
    'file-icons', // font
    'shen', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.liquid$/i, // rule
    'file-icons', // font
    'shopify', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.(?:sgi|iris)$/i, // rule
    'file-icons', // font
    'silicon-graphics', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.ss$/i, // rule
    'file-icons', // font
    'silverstripe', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.sketch$/i, // rule
    'file-icons', // font
    'sketch', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.layout$/i, // rule
    'file-icons', // font
    'sketchup-layout', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.skp$/i, // rule
    'file-icons', // font
    'sketchup-make', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.style$/i, // rule
    'file-icons', // font
    'sketchup-stylebuilder', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.eskip$/i, // rule
    'font-awesome', // font
    'anchor', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.sl$/i, // rule
    'file-icons', // font
    'slash', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.tpl$/i, // rule
    'font-awesome', // font
    'light_bulb', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.snyk$/i, // rule
    'file-icons', // font
    'snyk', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.sol(?:idity)?$/i, // rule
    'file-icons', // font
    'solidity', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.(?:sma|sp)$/i, // rule
    'devopicons', // font
    'clojure-alt', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.inc$/i, // rule
    'devopicons', // font
    'clojure-alt', // icon
    1, // priority
    '#90a959' // color
  ], [
    /(?:^|\.)spacemacs$/i, // rule
    'file-icons', // font
    'spacemacs', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.sparql$/i, // rule
    'file-icons', // font
    'sparql', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.rq$/i, // rule
    'file-icons', // font
    'sparql', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.sqf$/i, // rule
    'file-icons', // font
    'sqf', // icon
    1, // priority
    '#573421' // color
  ], [
    /\.hqf$/i, // rule
    'file-icons', // font
    'sqf', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.(?:my)?sql$/i, // rule
    'mfixx', // font
    'database', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.ddl$|\.4gl$/i, // rule
    'mfixx', // font
    'database', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.udf$|\.spsql$/i, // rule
    'mfixx', // font
    'database', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.hql$/i, // rule
    'mfixx', // font
    'database', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.viw$/i, // rule
    'mfixx', // font
    'database', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.prc$|\.cql$/i, // rule
    'mfixx', // font
    'database', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.db2$/i, // rule
    'mfixx', // font
    'database', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.per$/i, // rule
    'mfixx', // font
    'database', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.sqlite$/i, // rule
    'file-icons', // font
    'sqlite', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.sqlite3$/i, // rule
    'file-icons', // font
    'sqlite', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.db$/i, // rule
    'file-icons', // font
    'sqlite', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.db3$/i, // rule
    'file-icons', // font
    'sqlite', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.jsont$/i, // rule
    'file-icons', // font
    'squarespace', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.nut$/i, // rule
    'octicons', // font
    'squirrel', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.pub$/i, // rule
    'octicons', // font
    'key', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.pem$/i, // rule
    'octicons', // font
    'key', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.key$|\.crt$/i, // rule
    'octicons', // font
    'key', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.der$/i, // rule
    'octicons', // font
    'key', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /^id_rsa/, // rule
    'octicons', // font
    'key', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.glyphs\d*License$|^git-credential-osxkeychain$/i, // rule
    'octicons', // font
    'key', // icon
    1, // priority
    '#90a959' // color
  ], [
    /^(?:master\.)?passwd$/i, // rule
    'octicons', // font
    'key', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.stan$/i, // rule
    'file-icons', // font
    'stan', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.do$/i, // rule
    'file-icons', // font
    'stata', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.ado$/i, // rule
    'file-icons', // font
    'stata', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.doh$/i, // rule
    'file-icons', // font
    'stata', // icon
    1, // priority
    '#9dc0ce' // color
  ], [
    /\.ihlp$/i, // rule
    'file-icons', // font
    'stata', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.mata$/i, // rule
    'file-icons', // font
    'stata', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.matah$/i, // rule
    'file-icons', // font
    'stata', // icon
    1, // priority
    '#a7d0c9' // color
  ], [
    /\.sthlp$/i, // rule
    'file-icons', // font
    'stata', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.stencil$/i, // rule
    'file-icons', // font
    'stencil', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.story$/i, // rule
    'file-icons', // font
    'storyist', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.strings$/i, // rule
    'file-icons', // font
    'strings', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.(?:stTheme|sublime[-_](?:build|commands|completions|keymap|macro|menu|mousemap|project|settings|theme|workspace|metrics|session|snippet))$/i, // rule
    'file-icons', // font
    'sublime', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.sublime-syntax$/i, // rule
    'file-icons', // font
    'sublime', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.scd$/i, // rule
    'file-icons', // font
    'sc', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.svg$/i, // rule
    'mfixx', // font
    'svg', // icon
    1, // priority
    '#ee9e2e' // color
  ], [
    /\.swagger-codegen-ignore$/i, // rule
    'file-icons', // font
    'swagger', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.swift$/i, // rule
    'devopicons', // font
    'swift', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.sv$/i, // rule
    'file-icons', // font
    'sv', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.svh$/i, // rule
    'file-icons', // font
    'sv', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.vh$/i, // rule
    'file-icons', // font
    'sv', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.?c?tags$/i, // rule
    'file-icons', // font
    'tag', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.gemtags/i, // rule
    'file-icons', // font
    'tag', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.hgtags$|^localtags$/i, // rule
    'file-icons', // font
    'tag', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.pid$/i, // rule
    'file-icons', // font
    'tag', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.tcl$/i, // rule
    'file-icons', // font
    'tcl', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.adp$/i, // rule
    'file-icons', // font
    'tcl', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.tm$/i, // rule
    'file-icons', // font
    'tcl', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.exp$/i, // rule
    'file-icons', // font
    'tcl', // icon
    1, // priority
    '#46788d' // color
  ], [
    /^\.tkcvs/i, // rule
    'file-icons', // font
    'tcl', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /^\.tkdiffrc$/, // rule
    'file-icons', // font
    'tcl', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.tea$/i, // rule
    'font-awesome', // font
    'coffee', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.tfignore$/i, // rule
    'file-icons', // font
    'tfs', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.tl$/i, // rule
    'file-icons', // font
    'telegram', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.xps$/i, // rule
    'file-icons', // font
    'telegram', // icon
    1, // priority
    '#9dc0ce' // color
  ], [
    /\.tf(?:vars)?$/i, // rule
    'file-icons', // font
    'terraform', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.tfstate(?:\.backup)?$/i, // rule
    'file-icons', // font
    'terraform', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.xspec$/i, // rule
    'file-icons', // font
    'test-generic', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.t$/i, // rule
    'file-icons', // font
    'test-perl', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.tex$|\.ltx$|\.lbx$/i, // rule
    'file-icons', // font
    'tex', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.aux$|\.ins$/i, // rule
    'file-icons', // font
    'tex', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.sty$|\.texi$/i, // rule
    'file-icons', // font
    'tex', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.dtx$/i, // rule
    'file-icons', // font
    'tex', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.cls$|\.mkiv$|\.mkvi$|\.mkii$/i, // rule
    'file-icons', // font
    'tex', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.pgf$/i, // rule
    'file-icons', // font
    'tex', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.tikz$/i, // rule
    'file-icons', // font
    'tex', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.tmcg$/i, // rule
    'file-icons', // font
    'textmate', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.tmLanguage$/i, // rule
    'file-icons', // font
    'textmate', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.tmCommand$/i, // rule
    'file-icons', // font
    'textmate', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.tmPreferences$/i, // rule
    'file-icons', // font
    'textmate', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.tmSnippet$/i, // rule
    'file-icons', // font
    'textmate', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.tmTheme$/i, // rule
    'file-icons', // font
    'textmate', // icon
    1, // priority
    '#ff00cc' // color
  ], [
    /\.tmMacro$/i, // rule
    'file-icons', // font
    'textmate', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.yaml-tmlanguage$/i, // rule
    'file-icons', // font
    'textmate', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.JSON-tmLanguage$/i, // rule
    'file-icons', // font
    'textmate', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.thor$/i, // rule
    'file-icons', // font
    'thor', // icon
    1, // priority
    '#d28445' // color
  ], [
    /^Thorfile$/i, // rule
    'file-icons', // font
    'thor', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.tipe$/i, // rule
    'file-icons', // font
    'tipe', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.tla$/i, // rule
    'file-icons', // font
    'tla', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /^.tgitconfig$/i, // rule
    'file-icons', // font
    'tortoisesvn', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.tsx$/i, // rule
    'file-icons', // font
    'tsx-alt', // icon
    1, // priority
    '#9dc0ce' // color
  ], [
    /\.ttcn3?$/i, // rule
    'file-icons', // font
    'ttcn3', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.tu$/i, // rule
    'file-icons', // font
    'turing', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.twig$/i, // rule
    'file-icons', // font
    'twig', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.tw$/i, // rule
    'file-icons', // font
    'twine', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.txl$/i, // rule
    'file-icons', // font
    'txl', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.ts$/i, // rule
    'file-icons', // font
    'typescript-alt', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.(?:typoscript|tsconfig)$/i, // rule
    'devopicons', // font
    'typo3', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.anim$/i, // rule
    'devopicons', // font
    'unity', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.asset$/i, // rule
    'devopicons', // font
    'unity', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.mat$/i, // rule
    'devopicons', // font
    'unity', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.meta$/i, // rule
    'devopicons', // font
    'unity', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.prefab$/i, // rule
    'devopicons', // font
    'unity', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.unity$/i, // rule
    'devopicons', // font
    'unity', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.unityproj$/i, // rule
    'devopicons', // font
    'unity', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.uno$/i, // rule
    'file-icons', // font
    'uno', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.ur$/i, // rule
    'file-icons', // font
    'urweb', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.urs$/i, // rule
    'file-icons', // font
    'urweb', // icon
    1, // priority
    '#46788d' // color
  ], [
    /^\.v8flags\b/, // rule
    'file-icons', // font
    'v8', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.vcl$/i, // rule
    'file-icons', // font
    'vcl', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.vm$/i, // rule
    'file-icons', // font
    'velocity', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.v$/i, // rule
    'file-icons', // font
    'verilog', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.veo$/i, // rule
    'file-icons', // font
    'verilog', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.vhdl$/i, // rule
    'file-icons', // font
    'vhdl', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.vhd$/i, // rule
    'file-icons', // font
    'vhdl', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.vhf$/i, // rule
    'file-icons', // font
    'vhdl', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.vhi$/i, // rule
    'file-icons', // font
    'vhdl', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.vho$/i, // rule
    'file-icons', // font
    'vhdl', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.vhs$/i, // rule
    'file-icons', // font
    'vhdl', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.vht$/i, // rule
    'file-icons', // font
    'vhdl', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.vhw$/i, // rule
    'file-icons', // font
    'vhdl', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.3gpp?$/i, // rule
    'file-icons', // font
    'video', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.(?:mp4|m4v|h264)$/i, // rule
    'file-icons', // font
    'video', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.avi$/i, // rule
    'file-icons', // font
    'video', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.mov$/i, // rule
    'file-icons', // font
    'video', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.mkv$/i, // rule
    'file-icons', // font
    'video', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.flv$/i, // rule
    'file-icons', // font
    'video', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.webm$/i, // rule
    'file-icons', // font
    'video', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.mpe?g$/i, // rule
    'file-icons', // font
    'video', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.(?:asf|wmv)$/i, // rule
    'file-icons', // font
    'video', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.(?:ogm|og[gv])$/i, // rule
    'file-icons', // font
    'video', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.(?:vim|[gn]?vimrc)$/i, // rule
    'devopicons', // font
    'vim', // icon
    1, // priority
    '#90a959' // color
  ], [
    /^[.gn_]?vim(?:rc|info)$/i, // rule
    'devopicons', // font
    'vim', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.vbox(?:-prev)?$/i, // rule
    'file-icons', // font
    'virtualbox', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.(?:vba?|fr[mx]|bas)$/i, // rule
    'devopicons', // font
    'visualstudio', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.vbhtml$/i, // rule
    'devopicons', // font
    'visualstudio', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.vbs$/i, // rule
    'devopicons', // font
    'visualstudio', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.vsix$/i, // rule
    'devopicons', // font
    'visualstudio', // icon
    1, // priority
    '#75b5aa' // color
  ], [
    /\.csproj$/i, // rule
    'devopicons', // font
    'visualstudio', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.vbproj$/i, // rule
    'devopicons', // font
    'visualstudio', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.vstemplate$/i, // rule
    'devopicons', // font
    'visualstudio', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.vsixmanifest$/i, // rule
    'devopicons', // font
    'visualstudio', // icon
    1, // priority
    '#a35f27' // color
  ], [
    /\.builds$/i, // rule
    'devopicons', // font
    'visualstudio', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.sln$/i, // rule
    'devopicons', // font
    'visualstudio', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.njsproj$/i, // rule
    'devopicons', // font
    'visualstudio', // icon
    1, // priority
    '#c97071' // color
  ], [
    /\.vmdk$|\.vmx$|\.vmxf$/i, // rule
    'file-icons', // font
    'vmware', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.nvram$|\.vmss$/i, // rule
    'file-icons', // font
    'vmware', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.vmsd$|\.vmsn$/i, // rule
    'file-icons', // font
    'vmware', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.vmtm$/i, // rule
    'file-icons', // font
    'vmware', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.vue$/i, // rule
    'file-icons', // font
    'vue', // icon
    1, // priority
    '#b2c38b' // color
  ], [
    /\.walt$/i, // rule
    'file-icons', // font
    'walt', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.wdl$/i, // rule
    'file-icons', // font
    'wdl', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.owl$/i, // rule
    'file-icons', // font
    'owl', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.was?t$/i, // rule
    'file-icons', // font
    'wasm', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.wasm$/i, // rule
    'file-icons', // font
    'wasm', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.webgl$/i, // rule
    'file-icons', // font
    'webgl', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.wxml$/i, // rule
    'font-awesome', // font
    'uniF1D7', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.wxss$/i, // rule
    'font-awesome', // font
    'uniF1D7', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.bat$|\.cmd$/i, // rule
    'devopicons', // font
    'windows', // icon
    1, // priority
    '#aa759f' // color
  ], [
    /\.(?:exe|com|msi)$/i, // rule
    'devopicons', // font
    'windows', // icon
    1, // priority
    'undefined' // color
  ], [
    /\.reg$/i, // rule
    'devopicons', // font
    'windows', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.wixproj$/i, // rule
    'file-icons', // font
    'wix', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.wixobj$/i, // rule
    'file-icons', // font
    'wix', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.wxs$/i, // rule
    'file-icons', // font
    'wix', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.wxi$/i, // rule
    'file-icons', // font
    'wix', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.wxl$/i, // rule
    'file-icons', // font
    'wix', // icon
    1, // priority
    '#8f5536' // color
  ], [
    /\.x10$/i, // rule
    'file-icons', // font
    'x10', // icon
    1, // priority
    '#be7953' // color
  ], [
    /\.X(?:authority|clients|initrc|inputrc|profile|resources|session-errors|screensaver)$/i, // rule
    'mfixx', // font
    'x11', // icon
    1, // priority
    '#d28445' // color
  ], [
    /\.workbook$/i, // rule
    'file-icons', // font
    'xamarin', // icon
    1, // priority
    '#9dc0ce' // color
  ], [
    /\.(?:pbxproj|pbxuser|mode\dv3|xcplugindata|xcrequiredplugins)$/i, // rule
    'devopicons', // font
    'appstore', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.xojo_code$/i, // rule
    'file-icons', // font
    'realbasic', // icon
    1, // priority
    '#90a959' // color
  ], [
    /\.xojo_menu$/i, // rule
    'file-icons', // font
    'realbasic', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.xojo_report$/i, // rule
    'file-icons', // font
    'realbasic', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.xojo_script$/i, // rule
    'file-icons', // font
    'realbasic', // icon
    1, // priority
    '#66783e' // color
  ], [
    /\.xojo_toolbar$/i, // rule
    'file-icons', // font
    'realbasic', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.xojo_window$/i, // rule
    'file-icons', // font
    'realbasic', // icon
    1, // priority
    '#4d9085' // color
  ], [
    /\.xsp-config$/i, // rule
    'file-icons', // font
    'xpages', // icon
    1, // priority
    '#6a9fb5' // color
  ], [
    /\.xsp\.metadata$/i, // rule
    'file-icons', // font
    'xpages', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.(?:xquery|xq|xql|xqm|xqy)$/i, // rule
    'mfixx', // font
    'database', // icon
    1, // priority
    '#742c2d' // color
  ], [
    /\.xtend$/i, // rule
    'file-icons', // font
    'xtend', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.yang$/i, // rule
    'file-icons', // font
    'yin-yang', // icon
    1, // priority
    '#f4bf75' // color
  ], [
    /\.yara?$/i, // rule
    'file-icons', // font
    'yara', // icon
    1, // priority
    '#ac4142' // color
  ], [
    /\.(?:yarnrc|yarnclean|yarn-integrity)$/i, // rule
    'file-icons', // font
    'yarn', // icon
    1, // priority
    '#46788d' // color
  ], [
    /\.zpr$/i, // rule
    'file-icons', // font
    'zbrush', // icon
    1, // priority
    '#825078' // color
  ], [
    /\.zep$/i, // rule
    'file-icons', // font
    'zephir', // icon
    1, // priority
    '#ff00cc' // color
  ], [
    /\.(?:zimpl|zmpl|zpl)$/i, // rule
    'file-icons', // font
    'zimpl', // icon
    1, // priority
    '#d28445' // color
  ], [
    /[\/\\]fontforge[\/\\]hotkeys[\/\\][^\/\\]+/i, // rule
    'file-icons', // font
    'config', // icon
    0.75, // priority
    '#46788d' // color
  ], [
    /\.olk14\w*$/i, // rule
    'file-icons', // font
    'microsoft-outlook', // icon
    0.75, // priority
    '#4d9085' // color
  ], [
    /^com\.apple\./, // rule
    'file-icons', // font
    'apple', // icon
    0.5, // priority
    '#6a9fb5' // color
  ], [
    /^term(?:cap|info)/i, // rule
    'octicons', // font
    'database', // icon
    0.5, // priority
    '#66783e' // color
  ], [
    /\.crdownload$/i, // rule
    'font-awesome', // font
    'download_alt', // icon
    0.5, // priority
    '#46788d' // color
  ], [
    /\.git(?:ignore|config|attributes)$/i, // rule
    'devopicons', // font
    'git', // icon
    0.5, // priority
    '#ac4142' // color
  ], [
    /\.map$/i, // rule
    'font-awesome', // font
    '_594', // icon
    0.5, // priority
    '#46788d' // color
  ], [
    /\.m$/i, // rule
    'file-icons', // font
    'miranda', // icon
    0.5, // priority
    '#ac4142' // color
  ], [
    /\.schema$/i, // rule
    'octicons', // font
    'database', // icon
    0.25, // priority
    '#46788d' // color
  ], [
    /\.gtk/, // rule
    'mfixx', // font
    'gnome', // icon
    0.25, // priority
    'undefined' // color
  ], [
    /\.test$/i, // rule
    'file-icons', // font
    'test-generic', // icon
    0.25, // priority
    '#90a959' // color
  ], [
    /\.webarchivexml$/i, // rule
    'font-awesome', // font
    'android', // icon
    0.2, // priority
    '#4d9085' // color
  ], [
    /^httpd\.conf/i, // rule
    'mfixx', // font
    'apache', // icon
    0, // priority
    '#ac4142' // color
  ], [
    /TODO/, // rule
    'octicons', // font
    'checklist', // icon
    0, // priority
    '#f4bf75' // color
  ], [
    /config|settings|option|pref/i, // rule
    'file-icons', // font
    'config', // icon
    0, // priority
    'undefined' // color
  ], [
    /\.djs$/i, // rule
    'file-icons', // font
    'doge', // icon
    0, // priority
    '#f4bf75' // color
  ], [
    /^\._./, // rule
    'file-icons', // font
    'finder', // icon
    0, // priority
    '#46788d' // color
  ], [
    /\.DS_Store$/i, // rule
    'file-icons', // font
    'finder', // icon
    0, // priority
    '#4d9085' // color
  ], [
    /^\./, // rule
    'octicons', // font
    'gear', // icon
    0, // priority
    'undefined' // color
  ], [
    /\b(?:changelog|copying(?:v?\d)?|install|read[-_]?me)\b|^licen[sc]es?[-._]/i, // rule
    'octicons', // font
    'book', // icon
    0, // priority
    '#6a9fb5' // color
  ], [
    /^news(?:[-_.]?[-\d]+)?$/i, // rule
    'octicons', // font
    'book', // icon
    0, // priority
    '#46788d' // color
  ], [
    /\.ssh[\/\\][^\/\\\s]+$/, // rule
    'octicons', // font
    'key', // icon
    0, // priority
    '#46788d' // color
  ], [
    /^(?:[dv]8|v8[-_.][^.]*|mksnapshot|mkpeephole)$/i, // rule
    'file-icons', // font
    'v8', // icon
    0, // priority
    '#6a9fb5' // color
  ]
]
export default iconDB
