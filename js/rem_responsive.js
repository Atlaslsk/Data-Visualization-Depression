function magicpx(itempx,maxwidth,minwidth,numValue){var windows_w;var rempx=numValue;windows_w=document.documentElement.clientWidth||document.body.clientWidth
if(windows_w>maxwidth){windows_w=maxwidth}
else if(windows_w<minwidth){windows_w=minwidth}
var bili=windows_w/itempx;rempx=rempx*bili;document.getElementsByTagName("html")[0].style.fontSize=rempx+"px"
console.log(window.screen.width)}
if(window.screen.width>800){magicpx(1920,1920,1200,100);window.onresize=function(){magicpx(1920,1920,1200,100);}}else{function goPAGE(){if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){}
else{$('body').css({"width":"640px","margin":"0 auto","display":"block","left":"0","right":"0",})}}
!function(win,lib){var timer,doc=win.document,docElem=doc.documentElement,vpMeta=doc.querySelector('meta[name="viewport"]'),flexMeta=doc.querySelector('meta[name="flexible"]'),dpr=0,scale=0,flexible=lib.flexible||(lib.flexible={});if(vpMeta){console.warn("将根据已有的meta标签来设置缩放比例");var initial=vpMeta.getAttribute("content").match(/initial\-scale=([\d\.]+)/);if(initial){scale=parseFloat(initial[1]);dpr=parseInt(1/scale);}}
else if(flexMeta){var flexMetaContent=flexMeta.getAttribute("content");if(flexMetaContent){var initial=flexMetaContent.match(/initial\-dpr=([\d\.]+)/),maximum=flexMetaContent.match(/maximum\-dpr=([\d\.]+)/);if(initial){dpr=parseFloat(initial[1]);scale=parseFloat((1/dpr).toFixed(2));}
if(maximum){dpr=parseFloat(maximum[1]);scale=parseFloat((1/dpr).toFixed(2));}}}
if(!dpr&&!scale){var u=(win.navigator.appVersion.match(/android/gi),win.navigator.appVersion.match(/iphone/gi)),_dpr=win.devicePixelRatio;dpr=u?((_dpr>=3&&(!dpr||dpr>=3))?3:(_dpr>=2&&(!dpr||dpr>=2))?2:1):1;scale=1/dpr;}
docElem.setAttribute("data-dpr",dpr);if(!vpMeta){vpMeta=doc.createElement("meta");vpMeta.setAttribute("name","viewport");vpMeta.setAttribute("content","initial-scale="+scale+", maximum-scale="+scale+", minimum-scale="+scale+", user-scalable=no");if(docElem.firstElementChild){docElem.firstElementChild.appendChild(vpMeta)}else{var div=doc.createElement("div");div.appendChild(vpMeta);doc.write(div.innerHTML);}}
function setFontSize(){var winWidth=docElem.getBoundingClientRect().width;if(winWidth/dpr>540){(winWidth=540*dpr);}
var baseSize=winWidth/10;docElem.style.fontSize=baseSize+"px";flexible.rem=win.rem=baseSize;}
win.addEventListener("resize",function(){clearTimeout(timer);timer=setFontSize;},false);win.addEventListener("orientationchange",function(){clearTimeout(timer);timer=setFontSize;},false);win.addEventListener("pageshow",function(e){if(e.persisted){clearTimeout(timer);timer=setFontSize;}},false);if("complete"===doc.readyState){doc.body.style.fontSize=12*dpr+"px";}else{doc.addEventListener("DOMContentLoaded",function(){doc.body.style.fontSize=12*dpr+"px";},false);}
setFontSize();flexible.dpr=win.dpr=dpr;flexible.refreshRem=setFontSize;flexible.rem2px=function(d){var c=parseFloat(d)*this.rem;if("string"==typeof d&&d.match(/rem$/)){c+="px";}
return c;};flexible.px2rem=function(d){var c=parseFloat(d)/this.rem;if("string"==typeof d&&d.match(/px$/)){c+="rem";}
return c;}}(window,window.lib||(window.lib={}));}