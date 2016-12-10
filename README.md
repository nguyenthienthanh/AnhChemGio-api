# AnhChemGio-api
<div class="readme file wiki-content">
                
                <h1 id="markdown-header-react-redux-universal-hot-example">React Redux Universal Hot Example</h1>
<p><a href="https://travis-ci.org/erikras/react-redux-universal-hot-example"><img alt="build status" src="https://img.shields.io/travis/erikras/react-redux-universal-hot-example/master.svg?style=flat-square"></a>
<a href="https://david-dm.org/erikras/react-redux-universal-hot-example"><img alt="Dependency Status" src="https://david-dm.org/erikras/react-redux-universal-hot-example.svg?style=flat-square"></a>
<a href="https://david-dm.org/erikras/react-redux-universal-hot-example#info=devDependencies"><img alt="devDependency Status" src="https://david-dm.org/erikras/react-redux-universal-hot-example/dev-status.svg?style=flat-square"></a>
<a href="https://discord.gg/0ZcbPKXt5bZZb1Ko"><img alt="react-redux-universal channel on discord" src="https://img.shields.io/badge/discord-react--redux--universal%40reactiflux-brightgreen.svg?style=flat-square"></a>
<a href="https://react-redux.herokuapp.com"><img alt="Demo on Heroku" src="https://img.shields.io/badge/demo-heroku-brightgreen.svg?style=flat-square"></a>
<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=E2LK57ZQ9YRMN"><img alt="PayPal donate button" src="https://img.shields.io/badge/donate-paypal-brightgreen.svg?style=flat-square"></a></p>
<hr>
<h2 id="markdown-header-about">About</h2>
<p>This is a starter boilerplate app I've put together using the following technologies:</p>
<ul>
<li><del>Isomorphic</del> <a href="https://medium.com/@mjackson/universal-javascript-4761051b7ae9">Universal</a> rendering</li>
<li>Both client and server make calls to load data from separate API server</li>
<li><a href="https://github.com/facebook/react">React</a></li>
<li><a href="https://github.com/rackt/react-router">React Router</a></li>
<li><a href="http://expressjs.com">Express</a></li>
<li><a href="http://babeljs.io">Babel</a> for ES6 and ES7 magic</li>
<li><a href="http://webpack.github.io">Webpack</a> for bundling</li>
<li><a href="http://webpack.github.io/docs/webpack-dev-middleware.html">Webpack Dev Middleware</a></li>
<li><a href="https://github.com/glenjamin/webpack-hot-middleware">Webpack Hot Middleware</a></li>
<li><a href="https://github.com/rackt/redux">Redux</a>'s futuristic <a href="https://facebook.github.io/react/blog/2014/05/06/flux.html">Flux</a> implementation</li>
<li><a href="https://github.com/gaearon/redux-devtools">Redux Dev Tools</a> for next generation DX (developer experience). Watch <a href="https://www.youtube.com/watch?v=xsSnOQynTHs">Dan Abramov's talk</a>.</li>
<li><a href="https://github.com/reactjs/react-router-redux">React Router Redux</a> Redux/React Router bindings.</li>
<li><a href="http://eslint.org">ESLint</a> to maintain a consistent code style</li>
<li><a href="https://github.com/erikras/redux-form">redux-form</a> to manage form state in Redux</li>
<li><a href="https://github.com/erikras/lru-memoize">lru-memoize</a> to speed up form validation</li>
<li><a href="https://github.com/erikras/multireducer">multireducer</a> to combine single reducers into one key-based reducer</li>
<li><a href="https://github.com/webpack/style-loader">style-loader</a>, <a href="https://github.com/jtangelder/sass-loader">sass-loader</a> and <a href="https://github.com/webpack/less-loader">less-loader</a> to allow import of stylesheets in plain css, sass and less,</li>
<li><a href="https://github.com/shakacode/bootstrap-sass-loader">bootstrap-sass-loader</a> and <a href="https://github.com/gowravshekar/font-awesome-webpack">font-awesome-webpack</a> to customize Bootstrap and FontAwesome</li>
<li><a href="https://github.com/nfl/react-helmet">react-helmet</a> to manage title and meta tag information on both server and client</li>
<li><a href="https://github.com/halt-hammerzeit/webpack-isomorphic-tools">webpack-isomorphic-tools</a> to allow require() work for statics both on client and server</li>
<li><a href="https://mochajs.org/">mocha</a> to allow writing unit tests for the project.</li>
</ul>
<p>I cobbled this together from a wide variety of similar "starter" repositories. As I post this in June 2015, all of these libraries are right at the bleeding edge of web development. They may fall out of fashion as quickly as they have come into it, but I personally believe that this stack is the future of web development and will survive for several years. I'm building my new projects like this, and I recommend that you do, too.</p>
<h2 id="markdown-header-installation">Installation</h2>
<div class="codehilite"><pre><span></span>npm install
</pre></div>


<h2 id="markdown-header-running-dev-server">Running Dev Server</h2>
<div class="codehilite"><pre><span></span>npm run dev
</pre></div>


<p>The first time it may take a little while to generate the first <code>webpack-assets.json</code> and complain with a few dozen <code>[webpack-isomorphic-tools] (waiting for the first Webpack build to finish)</code> printouts, but be patient. Give it 30 seconds.</p>
<h3 id="markdown-header-using-redux-devtools">Using Redux DevTools</h3>
<p><a href="https://github.com/gaearon/redux-devtools">Redux Devtools</a> are enabled by default in development.</p>
<ul>
<li>&lt;kbd&gt;CTRL&lt;/kbd&gt;+&lt;kbd&gt;H&lt;/kbd&gt; Toggle DevTools Dock</li>
<li>&lt;kbd&gt;CTRL&lt;/kbd&gt;+&lt;kbd&gt;Q&lt;/kbd&gt; Move DevTools Dock Position</li>
<li>see <a href="https://github.com/gaearon/redux-devtools-dock-monitor">redux-devtools-dock-monitor</a> for more detailed information.</li>
</ul>
<p>If you have the 
<a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd">Redux DevTools chrome extension</a> installed it will automatically be used on the client-side instead.</p>
<p>If you want to disable the dev tools during development, set <code>__DEVTOOLS__</code> to <code>false</code> in <code>/webpack/dev.config.js</code>.<br>
DevTools are not enabled during production.</p>
<h2 id="markdown-header-building-and-running-production-server">Building and Running Production Server</h2>
<div class="codehilite"><pre><span></span>npm run build
npm run start
</pre></div>


<h2 id="markdown-header-demo">Demo</h2>
<p>A demonstration of this app can be seen <a href="https://react-redux.herokuapp.com">running on heroku</a>, which is a deployment of the <a href="https://github.com/erikras/react-redux-universal-hot-example/tree/heroku">heroku branch</a>.</p>
<h2 id="markdown-header-documentation">Documentation</h2>
<ul>
<li><a href="/teamizerdevteam/teamizer-api/src/4078fe6d620054e5b8b72a23832dbc4cf3565647/docs/ExploringTheDemoApp/ExploringTheDemoApp.md">Exploring the Demo App</a> is a guide that can be used before you install the kit.</li>
<li><a href="/teamizerdevteam/teamizer-api/src/4078fe6d620054e5b8b72a23832dbc4cf3565647/docs/InstallingTheKit/InstallingTheKit.md">Installing the Kit</a> guides you through installation and running the development server locally.</li>
<li><a href="/teamizerdevteam/teamizer-api/src/4078fe6d620054e5b8b72a23832dbc4cf3565647/docs/AddingToHomePage/AddingToHomePage.md">Adding Text to the Home Page</a> guides you through adding "Hello, World!" to the home page.</li>
<li><a href="/teamizerdevteam/teamizer-api/src/4078fe6d620054e5b8b72a23832dbc4cf3565647/docs/AddingAPage/AddingAPage.md">Adding A Page</a> guides you through adding a new page.</li>
<li><a href="http://engineering.wework.com/process/2015/10/01/react-reflux-to-redux/">React Tutorial - Converting Reflux to Redux</a>, by Matt Star
   If you are the kind of person that learns best by following along a tutorial, I can recommend Matt Star's overview and examples.</li>
</ul>
<h2 id="markdown-header-explanation">Explanation</h2>
<p>What initially gets run is <code>bin/server.js</code>, which does little more than enable ES6 and ES7 awesomeness in the
server-side node code. It then initiates <code>server.js</code>. In <code>server.js</code> we proxy any requests to <code>/api/*</code> to the
<a href="#api-server">API server</a>, running at <code>localhost:3030</code>. All the data fetching calls from the client go to <code>/api/*</code>.
Aside from serving the favicon and static content from <code>/static</code>, the only thing <code>server.js</code> does is initiate delegate
rendering to <code>react-router</code>. At the bottom of <code>server.js</code>, we listen to port <code>3000</code> and initiate the API server.</p>
<h4 id="markdown-header-routing-and-html-return">Routing and HTML return</h4>
<p>The primary section of <code>server.js</code> generates an HTML page with the contents returned by <code>react-router</code>. First we instantiate an <code>ApiClient</code>, a facade that both server and client code use to talk to the API server. On the server side, <code>ApiClient</code> is given the request object so that it can pass along the session cookie to the API server to maintain session state. We pass this API client facade to the <code>redux</code> middleware so that the action creators have access to it.</p>
<p>Then we perform <a href="#server-side-data-fetching">server-side data fetching</a>, wait for the data to be loaded, and render the page with the now-fully-loaded <code>redux</code> state.</p>
<p>The last interesting bit of the main routing section of <code>server.js</code> is that we swap in the hashed script and css from the <code>webpack-assets.json</code> that the Webpack Dev Server – or the Webpack build process on production – has spit out on its last run. You won't have to deal with <code>webpack-assets.json</code> manually because <a href="https://github.com/halt-hammerzeit/webpack-isomorphic-tools">webpack-isomorphic-tools</a> take care of that.</p>
<p>We also spit out the <code>redux</code> state into a global <code>window.__data</code> variable in the webpage to be loaded by the client-side <code>redux</code> code.</p>
<h4 id="markdown-header-server-side-data-fetching">Server-side Data Fetching</h4>
<p>The <a href="https://www.npmjs.com/package/redux-async-connect">redux-async-connect</a> package exposes an API to return promises that need to be fulfilled before a route is rendered. It exposes a <code>&lt;ReduxAsyncConnect /&gt;</code> container, which wraps our render tree on both <a href="https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/server.js">server</a> and <a href="https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/client.js">client</a>. More documentation is available on the <a href="https://www.npmjs.com/package/redux-async-connect">redux-async-connect</a> page.</p>
<h4 id="markdown-header-client-side">Client Side</h4>
<p>The client side entry point is reasonably named <code>client.js</code>. All it does is load the routes, initiate <code>react-router</code>, rehydrate the redux state from the <code>window.__data</code> passed in from the server, and render the page over top of the server-rendered DOM. This makes React enable all its event listeners without having to re-render the DOM.</p>
<h4 id="markdown-header-redux-middleware">Redux Middleware</h4>
<p>The middleware, <a href="https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/redux/middleware/clientMiddleware.js"><code>clientMiddleware.js</code></a>, serves two functions:</p>
<ol>
<li>To allow the action creators access to the client API facade. Remember this is the same on both the client and the server, and cannot simply be <code>import</code>ed because it holds the cookie needed to maintain session on server-to-server requests.</li>
<li>To allow some actions to pass a "promise generator", a function that takes the API client and returns a promise. Such actions require three action types, the <code>REQUEST</code> action that initiates the data loading, and a <code>SUCCESS</code> and <code>FAILURE</code> action that will be fired depending on the result of the promise. There are other ways to accomplish this, some discussed <a href="https://github.com/rackt/redux/issues/99">here</a>, which you may prefer, but to the author of this example, the middleware way feels cleanest.</li>
</ol>
<h4 id="markdown-header-redux-modules-what-the-duck">Redux Modules... <em>What the Duck</em>?</h4>
<p>The <code>src/redux/modules</code> folder contains "modules" to help
isolate concerns within a Redux application (aka <a href="https://github.com/erikras/ducks-modular-redux">Ducks</a>, a Redux Style Proposal that I came up with). I encourage you to read the
<a href="https://github.com/erikras/ducks-modular-redux">Ducks Docs</a> and provide feedback.</p>
<h4 id="markdown-header-api-server">API Server</h4>
<p>This is where the meat of your server-side application goes. It doesn't have to be implemented in Node or Express at all. This is where you connect to your database and provide authentication and session management. In this example, it's just spitting out some json with the current time stamp.</p>
<h4 id="markdown-header-getting-data-and-actions-into-components">Getting data and actions into components</h4>
<p>To understand how the data and action bindings get into the components – there's only one, <code>InfoBar</code>, in this example – I'm going to refer to you to the <a href="https://github.com/gaearon/redux">Redux</a> library. The only innovation I've made is to package the component and its wrapper in the same js file. This is to encapsulate the fact that the component is bound to the <code>redux</code> actions and state. The component using <code>InfoBar</code> needn't know or care if <code>InfoBar</code> uses the <code>redux</code> data or not.</p>
<h4 id="markdown-header-images">Images</h4>
<p>Now it's possible to render the image both on client and server. Please refer to issue <a href="https://github.com/erikras/react-redux-universal-hot-example/issues/39">#39</a> for more detail discussion, the usage would be like below (super easy):</p>
<div class="codehilite"><pre><span></span><span class="kd">let</span> <span class="nx">logoImage</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'./logo.png'</span><span class="p">);</span>
</pre></div>


<h4 id="markdown-header-styles">Styles</h4>
<p>This project uses <a href="https://medium.com/seek-ui-engineering/the-end-of-global-css-90d2a4a06284">local styles</a> using <a href="https://github.com/webpack/css-loader">css-loader</a>. The way it works is that you import your stylesheet at the top of the <code>render()</code> function in your React Component, and then you use the classnames returned from that import. Like so:</p>
<div class="codehilite"><pre><span></span><span class="nx">render</span><span class="p">()</span> <span class="p">{</span>
<span class="kr">const</span> <span class="nx">styles</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'./App.scss'</span><span class="p">);</span>
<span class="p">...</span>
</pre></div>


<p>Then you set the <code>className</code> of your element to match one of the CSS classes in your SCSS file, and you're good to go!</p>
<div class="codehilite"><pre><span></span><span class="nt">&lt;div</span> <span class="na">className=</span><span class="s">{styles.mySection}</span><span class="nt">&gt;</span> ... <span class="nt">&lt;/div&gt;</span>
</pre></div>


<h4 id="markdown-header-alternative-to-local-styles">Alternative to Local Styles</h4>
<p>If you'd like to use plain inline styles this is possible with a few modifications to your webpack configuration.</p>
<p><strong>1. Configure Isomorphic Tools to Accept CSS</strong></p>
<p>In <code>webpack-isomorphic-tools.js</code> add <strong>css</strong> to the list of style module extensions</p>
<div class="codehilite"><pre><span></span>    <span class="nx">style_modules</span><span class="o">:</span> <span class="p">{</span>
      <span class="nx">extensions</span><span class="o">:</span> <span class="p">[</span><span class="s1">'less'</span><span class="p">,</span><span class="s1">'scss'</span><span class="p">,</span><span class="s1">'css'</span><span class="p">],</span>
</pre></div>


<p><strong>2. Add a CSS loader to webpack dev config</strong></p>
<p>In <code>dev.config.js</code> modify <strong>module loaders</strong> to include a test and loader for css</p>
<div class="codehilite"><pre><span></span>  <span class="nx">module</span><span class="o">:</span> <span class="p">{</span>
    <span class="nx">loaders</span><span class="o">:</span> <span class="p">[</span>
      <span class="p">{</span> <span class="nx">test</span><span class="o">:</span> <span class="sr">/\.css$/</span><span class="p">,</span> <span class="nx">loader</span><span class="o">:</span> <span class="s1">'style-loader!css-loader'</span><span class="p">},</span>
</pre></div>


<p><strong>3. Add a CSS loader to the webpack prod config</strong></p>
<p>You must use the <strong>ExtractTextPlugin</strong> in this loader. In <code>prod.config.js</code> modify <strong>module loaders</strong> to include a test and loader for css</p>
<div class="codehilite"><pre><span></span>  <span class="nx">module</span><span class="o">:</span> <span class="p">{</span>
    <span class="nx">loaders</span><span class="o">:</span> <span class="p">[</span>
      <span class="p">{</span> <span class="nx">test</span><span class="o">:</span> <span class="sr">/\.css$/</span><span class="p">,</span> <span class="nx">loader</span><span class="o">:</span> <span class="nx">ExtractTextPlugin</span><span class="p">.</span><span class="nx">extract</span><span class="p">(</span><span class="s1">'style-loader'</span><span class="p">,</span> <span class="s1">'css-loader'</span><span class="p">)},</span>
</pre></div>


<p><strong>Now you may simply omit assigning the <code>required</code> stylesheet to a variable and keep it at the top of your <code>render()</code> function.</strong></p>
<div class="codehilite"><pre><span></span><span class="nx">render</span><span class="p">()</span> <span class="p">{</span>
<span class="nx">require</span><span class="p">(</span><span class="s1">'./App.css'</span><span class="p">);</span>
<span class="nx">require</span><span class="p">(</span><span class="s1">'aModule/dist/style.css'</span><span class="p">);</span>
<span class="p">...</span>
</pre></div>


<p><strong>NOTE</strong> In order to use this method with <strong>scss or less</strong> files one more modification must be made. In both <code>dev.config.js</code> and <code>prod.config.js</code> in the loaders for less and scss files remove </p>
<ol>
<li><code>modules</code></li>
<li><code>localIdentName...</code></li>
</ol>
<p>Before:</p>
<div class="codehilite"><pre><span></span><span class="p">{</span> <span class="nx">test</span><span class="o">:</span> <span class="sr">/\.less$/</span><span class="p">,</span> <span class="nx">loader</span><span class="o">:</span> <span class="s1">'style!css?modules&amp;importLoaders=2&amp;sourceMap&amp;localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!less?outputStyle=expanded&amp;sourceMap'</span> <span class="p">},</span>
</pre></div>


<p>After:</p>
<div class="codehilite"><pre><span></span><span class="p">{</span> <span class="nx">test</span><span class="o">:</span> <span class="sr">/\.less$/</span><span class="p">,</span> <span class="nx">loader</span><span class="o">:</span> <span class="s1">'style!css?importLoaders=2&amp;sourceMap!autoprefixer?browsers=last 2 version!less?outputStyle=expanded&amp;sourceMap'</span> <span class="p">},</span>
</pre></div>


<p>After this modification to both loaders you will be able to use scss and less files in the same way as css files.</p>
<h4 id="markdown-header-unit-tests">Unit Tests</h4>
<p>The project uses <a href="https://mochajs.org/">Mocha</a> to run your unit tests, it uses <a href="http://karma-runner.github.io/0.13/index.html">Karma</a> as the test runner, it enables the feature that you are able to render your tests to the browser (e.g: Firefox, Chrome etc.), which means you are able to use the <a href="http://facebook.github.io/react/docs/test-utils.html">Test Utilities</a> from Facebook api like <code>renderIntoDocument()</code>.</p>
<p>To run the tests in the project, just simply run <code>npm test</code> if you have <code>Chrome</code> installed, it will be automatically launched as a test service for you.</p>
<p>To keep watching your test suites that you are working on, just set <code>singleRun: false</code> in the <code>karma.conf.js</code> file. Please be sure set it to <code>true</code> if you are running <code>npm test</code> on a continuous integration server (travis-ci, etc).</p>
<h2 id="markdown-header-deployment-on-heroku">Deployment on Heroku</h2>
<p>To get this project to work on Heroku, you need to:</p>
<ol>
<li>Remove the <code>"PORT": 8080</code> line from the <code>betterScripts</code> / <code>start-prod</code> section of <code>package.json</code>.</li>
<li><code>heroku config:set NODE_ENV=production</code></li>
<li><code>heroku config:set NODE_PATH=./src</code></li>
<li><code>heroku config:set NPM_CONFIG_PRODUCTION=false</code>
  * This is to enable webpack to run the build on deploy.</li>
</ol>
<p>The first deploy might take a while, but after that your <code>node_modules</code> dir should be cached.</p>
<h2 id="markdown-header-faq">FAQ</h2>
<p>This project moves fast and has an active community, so if you have a question that is not answered below please visit our <a href="https://discord.gg/0ZcbPKXt5bZZb1Ko">Discord channel</a> or file an issue.</p>
<h2 id="markdown-header-roadmap">Roadmap</h2>
<p>Although this isn't a library, we recently started versioning to make it easier to track breaking changes and emerging best practices. </p>
<ul>
<li><a href="/teamizerdevteam/teamizer-api/src/4078fe6d620054e5b8b72a23832dbc4cf3565647/docs/InlineStyles.md">Inline Styles</a> - CSS is dead</li>
</ul>
<h2 id="markdown-header-contributing">Contributing</h2>
<p>I am more than happy to accept external contributions to the project in the form of feedback, bug reports and even better - pull requests :) </p>
<p>If you would like to submit a pull request, please make an effort to follow the guide in <a href="/teamizerdevteam/teamizer-api/src/4078fe6d620054e5b8b72a23832dbc4cf3565647/CONTRIBUTING.md">CONTRIBUTING.md</a>. </p>
<hr>
<p>Thanks for checking this out.</p>
<p>– Erik Rasmussen, <a href="https://twitter.com/erikras">@erikras</a></p>
</div>
