function com_google_gwt_demos_pinnedpanel_PinnedPanelDemo(){var l=window,k=document,t=l.external,ab,v,q,p='',y={},db=[],E=[],o=[],B,D;if(!l.__gwt_stylesLoaded){l.__gwt_stylesLoaded={};}if(!l.__gwt_scriptsLoaded){l.__gwt_scriptsLoaded={};}function u(){try{return t&&(t.gwtOnLoad&&l.location.search.indexOf('gwt.hybrid')== -1);}catch(a){return false;}}
function x(){if(ab&&(v&&q)){var c=k.getElementById('com.google.gwt.demos.pinnedpanel.PinnedPanelDemo');var b=c.contentWindow;b.__gwt_initHandlers=com_google_gwt_demos_pinnedpanel_PinnedPanelDemo.__gwt_initHandlers;if(u()){b.__gwt_getProperty=function(a){return r(a);};}com_google_gwt_demos_pinnedpanel_PinnedPanelDemo=null;b.gwtOnLoad(B,'com.google.gwt.demos.pinnedpanel.PinnedPanelDemo',p);}}
function s(){var j,h='__gwt_marker_com.google.gwt.demos.pinnedpanel.PinnedPanelDemo',i;k.write('<script id="'+h+'"><\/script>');i=k.getElementById(h);j=i&&i.previousSibling;while(j&&j.tagName!='SCRIPT'){j=j.previousSibling;}function d(b){var a=b.lastIndexOf('/');return a>=0?b.substring(0,a+1):'';}
;if(j&&j.src){p=d(j.src);}if(p==''){var c=k.getElementsByTagName('base');if(c.length>0){p=c[c.length-1].href;}else{var g=k.location;var e=g.href;p=d(e.substr(0,e.length-g.hash.length));}}else if(p.match(/^\w+:\/\//)){}else{var f=k.createElement('img');f.src=p+'clear.cache.gif';p=d(f.src);}if(i){i.parentNode.removeChild(i);}}
function C(){var f=document.getElementsByTagName('meta');for(var d=0,g=f.length;d<g;++d){var e=f[d],h=e.getAttribute('name'),b;if(h){if(h=='gwt:property'){b=e.getAttribute('content');if(b){var i,c=b.indexOf('=');if(c>=0){h=b.substring(0,c);i=b.substring(c+1);}else{h=b;i='';}y[h]=i;}}else if(h=='gwt:onPropertyErrorFn'){b=e.getAttribute('content');if(b){try{D=eval(b);}catch(a){alert('Bad handler "'+b+'" for "gwt:onPropertyErrorFn"');}}}else if(h=='gwt:onLoadErrorFn'){b=e.getAttribute('content');if(b){try{B=eval(b);}catch(a){alert('Bad handler "'+b+'" for "gwt:onLoadErrorFn"');}}}}}}
function n(a,b){return b in db[a];}
function m(a){var b=y[a];return b==null?null:b;}
function cb(d,e){var a=o;for(var b=0,c=d.length-1;b<c;++b){a=a[d[b]]||(a[d[b]]=[]);}a[d[c]]=e;}
function r(d){var e=E[d](),b=db[d];if(e in b){return e;}var a=[];for(var c in b){a[b[c]]=c;}if(D){D(d,a,e);}throw null;}
E['user.agent']=function(){var d=navigator.userAgent.toLowerCase();var b=function(a){return parseInt(a[1])*1000+parseInt(a[2]);};if(d.indexOf('opera')!= -1){return 'opera';}else if(d.indexOf('webkit')!= -1){return 'safari';}else if(d.indexOf('msie')!= -1){var c=/msie ([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=6000){return 'ie6';}}}else if(d.indexOf('gecko')!= -1){var c=/rv:([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=1008)return 'gecko1_8';}return 'gecko';}return 'unknown';};db['user.agent']={'gecko':0,'gecko1_8':1,'ie6':2,'opera':3,'safari':4};com_google_gwt_demos_pinnedpanel_PinnedPanelDemo.onInjectionDone=function(){ab=true;x();};com_google_gwt_demos_pinnedpanel_PinnedPanelDemo.onScriptLoad=function(){v=true;x();};s();C();var bb;if(u()){bb='hosted.html?com_google_gwt_demos_pinnedpanel_PinnedPanelDemo';}else{try{cb(['opera'],'0F63A2536DB33DF50A0DD1E8FECB7F98');cb(['ie6'],'49917546EA7005C7F9547137AE4EC911');cb(['safari'],'4A7B6586C1BE1DD6B8A6E089E3A9EC43');cb(['gecko1_8'],'73C11F0570625D39680EC0BF58606CDC');cb(['gecko'],'E2EE677946D6A1F13600F27945834B2A');bb=o[r('user.agent')];}catch(a){return;}bb+='.cache.html';}var A;function z(){if(!q){q=true;x();if(k.removeEventListener){k.removeEventListener('DOMContentLoaded',z,false);}if(A){clearInterval(A);}}}
var F;function w(){if(!F&&k.body){F=true;var a=k.createElement('iframe');a.src="javascript:''";a.id='com.google.gwt.demos.pinnedpanel.PinnedPanelDemo';a.style.cssText='position:absolute;width:0;height:0;border:none';k.body.appendChild(a);a.src=p+bb;}}
if(k.addEventListener){k.addEventListener('DOMContentLoaded',function(){w();z();},false);}var A=setInterval(function(){w();if(/loaded|complete/.test(k.readyState)){z();}},50);if(!__gwt_stylesLoaded['PinnedPanelDemo.css']){__gwt_stylesLoaded['PinnedPanelDemo.css']=true;document.write('<link rel="stylesheet" href="'+p+'PinnedPanelDemo.css">');}k.write("<script>com_google_gwt_demos_pinnedpanel_PinnedPanelDemo.onInjectionDone('com.google.gwt.demos.pinnedpanel.PinnedPanelDemo')<\/script>");}
com_google_gwt_demos_pinnedpanel_PinnedPanelDemo.__gwt_initHandlers=function(i,e,j){var d=window,g=d.onresize,f=d.onbeforeunload,h=d.onunload;d.onresize=function(a){try{i();}finally{g&&g(a);}};d.onbeforeunload=function(a){var c,b;try{c=e();}finally{b=f&&f(a);}if(c!=null){return c;}if(b!=null){return b;}};d.onunload=function(a){try{j();}finally{h&&h(a);}};};com_google_gwt_demos_pinnedpanel_PinnedPanelDemo();