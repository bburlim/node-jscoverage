/* automatically generated by JSCoverage - do not edit */
if (! top._$jscoverage) {
  top._$jscoverage = {};
}
var _$jscoverage = top._$jscoverage;
if (! _$jscoverage['javascript-destructuring.js']) {
  _$jscoverage['javascript-destructuring.js'] = [];
  _$jscoverage['javascript-destructuring.js'][3] = 0;
  _$jscoverage['javascript-destructuring.js'][5] = 0;
  _$jscoverage['javascript-destructuring.js'][6] = 0;
  _$jscoverage['javascript-destructuring.js'][8] = 0;
  _$jscoverage['javascript-destructuring.js'][10] = 0;
  _$jscoverage['javascript-destructuring.js'][11] = 0;
  _$jscoverage['javascript-destructuring.js'][12] = 0;
  _$jscoverage['javascript-destructuring.js'][15] = 0;
  _$jscoverage['javascript-destructuring.js'][16] = 0;
  _$jscoverage['javascript-destructuring.js'][17] = 0;
  _$jscoverage['javascript-destructuring.js'][20] = 0;
  _$jscoverage['javascript-destructuring.js'][21] = 0;
  _$jscoverage['javascript-destructuring.js'][23] = 0;
  _$jscoverage['javascript-destructuring.js'][24] = 0;
  _$jscoverage['javascript-destructuring.js'][25] = 0;
  _$jscoverage['javascript-destructuring.js'][26] = 0;
  _$jscoverage['javascript-destructuring.js'][27] = 0;
  _$jscoverage['javascript-destructuring.js'][30] = 0;
  _$jscoverage['javascript-destructuring.js'][31] = 0;
  _$jscoverage['javascript-destructuring.js'][32] = 0;
  _$jscoverage['javascript-destructuring.js'][35] = 0;
  _$jscoverage['javascript-destructuring.js'][37] = 0;
  _$jscoverage['javascript-destructuring.js'][38] = 0;
  _$jscoverage['javascript-destructuring.js'][39] = 0;
  _$jscoverage['javascript-destructuring.js'][40] = 0;
  _$jscoverage['javascript-destructuring.js'][41] = 0;
}
_$jscoverage['javascript-destructuring.js'][3]++;
[a, b] = [b, a];
_$jscoverage['javascript-destructuring.js'][5]++;
function f() {
  _$jscoverage['javascript-destructuring.js'][6]++;
  return [1, 2];
}
_$jscoverage['javascript-destructuring.js'][8]++;
[a, b] = f();
_$jscoverage['javascript-destructuring.js'][10]++;
for (let [name, value] in Iterator(obj)) {
  _$jscoverage['javascript-destructuring.js'][11]++;
  print(name);
  _$jscoverage['javascript-destructuring.js'][12]++;
  print(value);
}
_$jscoverage['javascript-destructuring.js'][15]++;
for each (let {name: n, family: {father: f}} in people) {
  _$jscoverage['javascript-destructuring.js'][16]++;
  print(n);
  _$jscoverage['javascript-destructuring.js'][17]++;
  print(f);
}
_$jscoverage['javascript-destructuring.js'][20]++;
var [a, , b] = f();
_$jscoverage['javascript-destructuring.js'][21]++;
[, , ,] = f();
_$jscoverage['javascript-destructuring.js'][23]++;
function g() {
  _$jscoverage['javascript-destructuring.js'][24]++;
  var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  _$jscoverage['javascript-destructuring.js'][25]++;
  if (! parsedURL) {
    _$jscoverage['javascript-destructuring.js'][26]++;
    return null;
  }
  _$jscoverage['javascript-destructuring.js'][27]++;
  var [, protocol, fullhost, fullpath] = parsedURL;
}
_$jscoverage['javascript-destructuring.js'][30]++;
function h(a, [b, c], {foo: d, "bar": e}) {
  _$jscoverage['javascript-destructuring.js'][31]++;
  f();
  _$jscoverage['javascript-destructuring.js'][32]++;
  g();
}
_$jscoverage['javascript-destructuring.js'][35]++;
x = (function ([a, b]) {
  return a + b;
});
_$jscoverage['javascript-destructuring.js'][37]++;
({x: x0, y: y0}) = point;
_$jscoverage['javascript-destructuring.js'][38]++;
var {x: x0, y: y0} = point;
_$jscoverage['javascript-destructuring.js'][39]++;
let ({x: x0, y: y0} = point) {
  _$jscoverage['javascript-destructuring.js'][40]++;
  print(x0);
  _$jscoverage['javascript-destructuring.js'][41]++;
  print(y0);
}
_$jscoverage['javascript-destructuring.js'].source = ["<span class=\"c\">// https://developer.mozilla.org/en/New_in_JavaScript_1.7</span>","","<span class=\"k\">[</span>a<span class=\"k\">,</span> b<span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">[</span>b<span class=\"k\">,</span> a<span class=\"k\">];</span>","","<span class=\"k\">function</span> f<span class=\"k\">()</span> <span class=\"k\">{</span>","  <span class=\"k\">return</span> <span class=\"k\">[</span><span class=\"s\">1</span><span class=\"k\">,</span> <span class=\"s\">2</span><span class=\"k\">];</span>","<span class=\"k\">}</span>","<span class=\"k\">[</span>a<span class=\"k\">,</span> b<span class=\"k\">]</span> <span class=\"k\">=</span> f<span class=\"k\">();</span>","","<span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">let</span> <span class=\"k\">[</span>name<span class=\"k\">,</span> value<span class=\"k\">]</span> <span class=\"k\">in</span> Iterator<span class=\"k\">(</span>obj<span class=\"k\">))</span> <span class=\"k\">{</span>","  print<span class=\"k\">(</span>name<span class=\"k\">);</span>","  print<span class=\"k\">(</span>value<span class=\"k\">);</span>","<span class=\"k\">}</span>","","<span class=\"k\">for</span> each <span class=\"k\">(</span><span class=\"k\">let</span> <span class=\"k\">{</span>name<span class=\"k\">:</span> n<span class=\"k\">,</span> family<span class=\"k\">:</span> <span class=\"k\">{</span> father<span class=\"k\">:</span> f <span class=\"k\">}</span> <span class=\"k\">}</span> <span class=\"k\">in</span> people<span class=\"k\">)</span> <span class=\"k\">{</span>","  print<span class=\"k\">(</span>n<span class=\"k\">);</span>","  print<span class=\"k\">(</span>f<span class=\"k\">);</span>","<span class=\"k\">}</span>","","<span class=\"k\">var</span> <span class=\"k\">[</span>a<span class=\"k\">,</span> <span class=\"k\">,</span> b<span class=\"k\">]</span> <span class=\"k\">=</span> f<span class=\"k\">();</span>","<span class=\"k\">[,,,]</span> <span class=\"k\">=</span> f<span class=\"k\">();</span>","","<span class=\"k\">function</span> g<span class=\"k\">()</span> <span class=\"k\">{</span>","  <span class=\"k\">var</span> parsedURL <span class=\"k\">=</span> <span class=\"s\">/^(\\w+)\\:\\/\\/([^\\/]+)\\/(.*)$/</span><span class=\"k\">.</span>exec<span class=\"k\">(</span>url<span class=\"k\">);</span>","  <span class=\"k\">if</span> <span class=\"k\">(!</span>parsedURL<span class=\"k\">)</span>","    <span class=\"k\">return</span> <span class=\"k\">null</span><span class=\"k\">;</span>","  <span class=\"k\">var</span> <span class=\"k\">[,</span> protocol<span class=\"k\">,</span> fullhost<span class=\"k\">,</span> fullpath<span class=\"k\">]</span> <span class=\"k\">=</span> parsedURL<span class=\"k\">;</span>","<span class=\"k\">}</span>","","<span class=\"k\">function</span> h<span class=\"k\">(</span>a<span class=\"k\">,</span> <span class=\"k\">[</span>b<span class=\"k\">,</span> c<span class=\"k\">],</span> <span class=\"k\">{</span>foo<span class=\"k\">:</span> d<span class=\"k\">,</span> <span class=\"s\">'bar'</span><span class=\"k\">:</span> e<span class=\"k\">}</span><span class=\"k\">)</span> <span class=\"k\">{</span>","  f<span class=\"k\">();</span>","  g<span class=\"k\">();</span>","<span class=\"k\">}</span>","","x <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">([</span>a<span class=\"k\">,</span> b<span class=\"k\">])</span> a <span class=\"k\">+</span> b<span class=\"k\">;</span>","","<span class=\"k\">(</span><span class=\"k\">{</span>x<span class=\"k\">:</span> x0<span class=\"k\">,</span> y<span class=\"k\">:</span> y0<span class=\"k\">}</span><span class=\"k\">)</span> <span class=\"k\">=</span> point<span class=\"k\">;</span>","<span class=\"k\">var</span> <span class=\"k\">{</span>x<span class=\"k\">:</span> x0<span class=\"k\">,</span> y<span class=\"k\">:</span> y0<span class=\"k\">}</span> <span class=\"k\">=</span> point<span class=\"k\">;</span>","<span class=\"k\">let</span> <span class=\"k\">(</span><span class=\"k\">{</span>x<span class=\"k\">:</span> x0<span class=\"k\">,</span> y<span class=\"k\">:</span> y0<span class=\"k\">}</span> <span class=\"k\">=</span> point<span class=\"k\">)</span> <span class=\"k\">{</span>","  print<span class=\"k\">(</span>x0<span class=\"k\">);</span>","  print<span class=\"k\">(</span>y0<span class=\"k\">);</span>","<span class=\"k\">}</span>"];
