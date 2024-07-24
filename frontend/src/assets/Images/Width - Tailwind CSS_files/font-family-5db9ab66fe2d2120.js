(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3046],{2347:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/font-family",function(){return a(31619)}])},31619:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return g}});var t=a(85893),p=a(11151),e=a(72788),o=a(36336),l=a(34898),c=a(63034),i=a(5824);let u=e.L,r=o.X_;function k(n){let s=Object.assign({p:"p",pre:"pre",hr:"hr",code:"code",strong:"strong",a:"a"},(0,p.ah)(),n.components),{Heading:a,Example:e,Editor:o}=s;return o||f("Editor",!0),e||f("Example",!0),a||f("Heading",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,t.jsx)(a,{level:3,id:"setting-the-font-family",children:"Setting the font family"}),"\n",(0,t.jsx)(s.p,{children:"You can control the typeface of text using the font family utilities."}),"\n",(0,t.jsx)(e,{containerClassName:"mt-4 -mb-3",html:'<div class="flex flex-col gap-8">\n  <div>\n    <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">font-sans</span>\n    <p class="font-sans text-lg font-medium text-slate-900 dark:text-slate-200">\n      The quick brown fox jumps over the lazy dog.\n    </p>\n  </div>\n  <div>\n    <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">font-serif</span>\n    <p class="font-serif text-lg font-medium text-slate-900 dark:text-slate-200">\n      The quick brown fox jumps over the lazy dog.\n    </p>\n  </div>\n  <div>\n    <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">font-mono</span>\n    <p class="font-mono text-lg font-medium text-slate-900 dark:text-slate-200">\n      The quick brown fox jumps over the lazy dog.\n    </p>\n  </div>\n</div>'}),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">font-sans</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">font-serif</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">font-mono</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,t.jsx)(i.k,{defaultClass:"font-sans",featuredClass:"font-serif",element:"p"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,t.jsx)(c.p,{defaultClass:"font-sans",featuredClass:"font-serif",element:"p"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,t.jsx)(a,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,t.jsxs)(s.p,{children:["By default, Tailwind provides three font family utilities: a cross-browser sans-serif stack, a cross-browser serif stack, and a cross-browser monospaced stack. You can change, add, or remove these by editing the ",(0,t.jsx)(s.code,{children:"theme.fontFamily"})," section of your Tailwind config."]}),"\n",(0,t.jsx)(o,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">fontFamily</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js deleted"><span class="token plain">      </span><span class="token string-property property">\'sans\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">[</span><span class="token string">\'ui-sans-serif\'</span><span class="token punctuation">,</span><span class="token plain"> </span><span class="token string">\'system-ui\'</span><span class="token punctuation">,</span><span class="token plain"> </span><span class="token spread operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js deleted"><span class="token plain">      </span><span class="token string-property property">\'serif\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">[</span><span class="token string">\'ui-serif\'</span><span class="token punctuation">,</span><span class="token plain"> </span><span class="token string">\'Georgia\'</span><span class="token punctuation">,</span><span class="token plain"> </span><span class="token spread operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js deleted"><span class="token plain">      </span><span class="token string-property property">\'mono\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">[</span><span class="token string">\'ui-monospace\'</span><span class="token punctuation">,</span><span class="token plain"> </span><span class="token string">\'SFMono-Regular\'</span><span class="token punctuation">,</span><span class="token plain"> </span><span class="token spread operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token string-property property">\'display\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">[</span><span class="token string">\'Oswald\'</span><span class="token punctuation">,</span><span class="token plain"> </span><span class="token spread operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token string-property property">\'body\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">[</span><span class="token string">\'"Open Sans"\'</span><span class="token punctuation">,</span><span class="token plain"> </span><span class="token spread operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsx)(s.p,{children:"Font families can be specified as an array or as a simple comma-delimited string:"}),"\n",(0,t.jsx)(s.pre,{className:"language-js",dangerouslySetInnerHTML:{__html:'<code class="language-js"><span class="token punctuation">{</span>\n  <span class="token comment">// Array format:</span>\n  <span class="token string-property property">\'sans\'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'Helvetica\'</span><span class="token punctuation">,</span> <span class="token string">\'Arial\'</span><span class="token punctuation">,</span> <span class="token string">\'sans-serif\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// Comma-delimited format:</span>\n  <span class="token string-property property">\'sans\'</span><span class="token operator">:</span> <span class="token string">\'Helvetica, Arial, sans-serif\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,t.jsxs)(s.p,{children:["Note that ",(0,t.jsx)(s.strong,{children:"Tailwind does not automatically escape font names"})," for you. If you’re using a font that contains an invalid identifier, wrap it in quotes or escape the invalid characters."]}),"\n",(0,t.jsx)(s.pre,{className:"language-js",dangerouslySetInnerHTML:{__html:'<code class="language-js"><span class="token punctuation">{</span>\n  <span class="token comment">// Won\'t work:</span>\n  <span class="token string-property property">\'sans\'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'Exo 2\'</span><span class="token punctuation">,</span> <span class="token spread operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// Add quotes:</span>\n  <span class="token string-property property">\'sans\'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'"Exo 2"\'</span><span class="token punctuation">,</span> <span class="token spread operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// ...or escape the space:</span>\n  <span class="token string-property property">\'sans\'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'Exo\\\\ 2\'</span><span class="token punctuation">,</span> <span class="token spread operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,t.jsxs)(s.p,{children:["Like any other web project, make sure to include the necessary ",(0,t.jsx)(s.code,{children:"@font-face"})," or ",(0,t.jsx)(s.code,{children:"@import"})," rules in your CSS for any custom fonts you’re using so that those fonts are loaded by the browser for your site:"]}),"\n",(0,t.jsx)(o,{filename:"app.css",code:'<pre class="language-css"><code class="language-css"><span class="token atrule"><span class="token rule">@tailwind</span> base<span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@tailwind</span> components<span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@tailwind</span> utilities<span class="token punctuation">;</span></span>\n\n<span class="token atrule"><span class="token rule">@layer</span> base</span> <span class="token punctuation">{</span>\n  <span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>\n    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">\'Roboto\'</span><span class="token punctuation">;</span>\n    <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>\n    <span class="token property">font-weight</span><span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">;</span>\n    <span class="token property">font-display</span><span class="token punctuation">:</span> swap<span class="token punctuation">;</span>\n    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/fonts/Roboto.woff2<span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'woff2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>'}),"\n",(0,t.jsxs)(s.p,{children:["Learn more about customizing the default theme in the ",(0,t.jsx)(s.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,t.jsx)(a,{level:4,id:"providing-default-font-settings",children:"Providing default font settings"}),"\n",(0,t.jsxs)(s.p,{children:["You can optionally provide default ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings",children:"font-feature-settings"})," and ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-variation-settings",children:"font-variation-settings"})," for each font in your project using a tuple of the form ",(0,t.jsx)(s.code,{children:"[fontFamilies, { fontFeatureSettings, fontVariationSettings }]"})," when configuring custom fonts."]}),"\n",(0,t.jsx)(o,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">fontFamily</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">      </span><span class="token literal-property property">sans</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">[</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">        </span><span class="token string">\'"Inter var", sans-serif\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">          </span><span class="token literal-property property">fontFeatureSettings</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'"cv11", "ss01"\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">          </span><span class="token literal-property property">fontVariationSettings</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'"opsz" 32\'</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">      </span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsx)(a,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,t.jsx)(l.k,{property:"font-family",featuredClass:"font-['Open_Sans']",element:"p"}),"\n",(0,t.jsx)(a,{level:3,id:"customizing-the-default-font",children:"Customizing the default font"}),"\n",(0,t.jsxs)(s.p,{children:["For convenience, ",(0,t.jsx)(s.a,{href:"/docs/preflight",children:"Preflight"})," sets the font family on the ",(0,t.jsx)(s.code,{children:"html"})," element to match your configured ",(0,t.jsx)(s.code,{children:"sans"})," font, so one way to change the default font for your project is to customize the ",(0,t.jsx)(s.code,{children:"sans"})," key in your ",(0,t.jsx)(s.code,{children:"fontFamily"})," configuration:"]}),"\n",(0,t.jsx)(o,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token keyword">const</span><span class="token plain"> defaultTheme </span><span class="token operator">=</span><span class="token plain"> </span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'tailwindcss/defaultTheme\'</span><span class="token punctuation">)</span><span class="token plain"></span>\n</span><span class="token plain language-js unchanged">\n</span><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">      </span><span class="token literal-property property">fontFamily</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'sans\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">[</span><span class="token string">\'"Proxima Nova"\'</span><span class="token punctuation">,</span><span class="token plain"> </span><span class="token spread operator">...</span><span class="token plain">defaultTheme</span><span class="token punctuation">.</span><span class="token property-access">fontFamily</span><span class="token punctuation">.</span><span class="token property-access">sans</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsxs)(s.p,{children:["You can also customize the default font used in your project by ",(0,t.jsx)(s.a,{href:"/docs/adding-custom-styles#adding-base-styles",children:"adding a custom base style"})," that sets the ",(0,t.jsx)(s.code,{children:"font-family"})," property explicitly:"]}),"\n",(0,t.jsx)(o,{filename:"main.css",code:'<pre class="language-css"><code class="language-css"><span class="token atrule"><span class="token rule">@tailwind</span> base<span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@tailwind</span> components<span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@tailwind</span> utilities<span class="token punctuation">;</span></span>\n\n<span class="token atrule"><span class="token rule">@layer</span> base</span> <span class="token punctuation">{</span>\n  <span class="token selector">html</span> <span class="token punctuation">{</span>\n    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Proxima Nova"</span><span class="token punctuation">,</span> system-ui<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>'}),"\n",(0,t.jsxs)(s.p,{children:["This is the best approach if you have customized your font family utilities to have different names and don’t want there to be ",(0,t.jsx)(s.code,{children:"font-sans"})," utility available in your project."]})]})}function d(n={}){return(0,t.jsx)(r,Object.assign({},n,{children:(0,t.jsx)(k,n)}))}var g=d;function f(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}d.layoutProps={Layout:u,classes:{utilities:{".font-sans":{"font-family":'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'},".font-serif":{"font-family":'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'},".font-mono":{"font-family":'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}},meta:{title:"Font Family",description:"Utilities for controlling the font family of an element."},slug:"font-family",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the font family",slug:"setting-the-font-family",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[{title:"Providing default font settings",slug:"providing-default-font-settings"}]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]},{title:"Customizing the default font",slug:"customizing-the-default-font",children:[]}]}]}},11151:function(n,s,a){"use strict";a.d(s,{Zo:function(){return l},ah:function(){return e}});var t=a(67294);let p=t.createContext({});function e(n){let s=t.useContext(p);return t.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let o={};function l({components:n,children:s,disableParentContext:a}){let l;return l=a?"function"==typeof n?n({}):n||o:e(n),t.createElement(p.Provider,{value:l},s)}}},function(n){n.O(0,[3430,4150,9495,224,7308,681,9774,2888,179],function(){return n(n.s=2347)}),_N_E=n.O()}]);