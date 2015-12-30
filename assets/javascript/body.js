// Bundled with Fusion v0.1



/*
 * File: vendor\jquery.unveil.js
 */
/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

!function(t){t.fn.unveil=function(i,e){function n(){var i=a.filter(function(){var i=t(this);if(!i.is(":hidden")){var e=o.scrollTop(),n=e+o.height(),r=i.offset().top,s=r+i.height();return s>=e-u&&n+u>=r}});r=i.trigger("unveil"),a=a.not(r)}var r,o=t(window),u=i||0,s=window.devicePixelRatio>1,l=s?"data-src-retina":"data-src",a=this;return this.one("unveil",function(){var t=this.getAttribute(l);t=t||this.getAttribute("data-src"),t&&(this.setAttribute("src",t),"function"==typeof e&&e.call(this))}),o.on("scroll.unveil resize.unveil lookup.unveil",n),n(),this}}(window.jQuery);

$(document).ready(function() {
  $("img").unveil(50);
});


/*
 * File: mw.Gadgy.js
 */
var mw = mw || {};

mw.Gadgy = {};

var iterator = mw.Gadgy;

jQuery(document).ready(function moovwebmoduleLoad() {
  for(var moduleKey in iterator) {
    var module = iterator[moduleKey];
    if(module.name && (jQuery("body").hasClass(module.name) || module.name === "mw-global") && typeof module.init !== 'undefined') {
      console.log(module.name);
      module.init();
    }
  }
});





/*
 * File: uranium.js
 */
(function(b){function y(c,f,d){var e={},j="[data-ur-set='"+f+"']",n="data-ur-"+f+"-component",k="["+n+"],"+j+":empty";b(c).find(k).addBack(k).each(function(){if(!b(this).data("urCompInit")){var c=[];this!=document&&(c=b(this).attr("data-ur-id")?b(this):b(this).closest(j));if(c[0]&&!c.data("urInit")){b(this).data("urCompInit",f);var k=c.attr("data-ur-id");k||(k=ma(),c.attr("data-ur-id",k));e[k]=e[k]||{};e[k]._id=k;if(c.is(j))e[k].set=c[0];if(d)d(e[k],this);else if(c=b(this).attr(n))e[k][c]=e[k][c]||
[],e[k][c].push(this)}}});return e}function v(c,f,d){var e=ma();b.each(c,function(j,e){typeof e=="string"&&(c[j]=e=b(e));for(var R=e.length-1;R>=0;R--){var l=b(e[R]);l[0]instanceof Node&&(l.data("urCompInit")?b(e).splice(R,1):b(this).data("urCompInit",f))}!d&&j!="set"&&b(e).attr("data-ur-"+f+"-component",j)});c.set&&c.set.length!==0?b(c.set).attr("data-ur-set",f).attr("data-ur-id",e):b.each(c,function(){b(this).attr("data-ur-id",e)});d&&d(c);var j={};j[e]=b.extend({_id:e},c);return j}function S(b){var f=
b.originalEvent.touches||[],d=b.originalEvent.changedTouches||[],b=f[0]||d[0]||b,b={x:b.clientX,y:b.clientY};if(f[1])b.x2=f[1].clientX,b.y2=f[1].clientY;return b}function V(b){b.preventDefault();b.stopPropagation()}function o(b,f){return Math.max(f[0],Math.min(b,f[1]))}function oa(b){return typeof b=="string"?b!="disabled"&&b!="false":b}function z(b){return typeof b=="object"&&Object.getPrototypeOf(b)==Object.prototype}var p=b.fn.jquery.split(".");if(p[0]==1&&p[1]<4)p=b,b=b.extend(function(c,f){return new b.fn.init(c||
[],f)},b),b.prototype=p.prototype;b.fn.on||b.fn.extend({on:function(b,f,d,e){d==null&&e==null?(e=f,f=null):e==null&&typeof f!="string"&&(e=d,d=f,f=null);return f?this.delegate(f,b,d,e):this.bind(b,d,e)},off:function(b,f,d){d==null&&(d=f,f=null);return f?this.undelegate(f,b,d):this.unbind(b,d)}});if(!b.fn.addBack)b.fn.addBack=b.fn.andSelf;if(!b.error)b.error=function(b){throw Error(b);};if(b.fn.closest.length==1)b.fn._closest=b.fn.closest,b.fn.closest=function(b,f){var d=this._closest(b);f&&(d=d.filter(function(b,
j){return f.contains(j)}));return d};var ma=function(){var b=0;return function(){return"ur"+ ++b}}(),na=/Android [12]/.test(navigator.userAgent),O=!na;O&&(p=b("<a>").css({webkitTransform:"translate3d(0, 0, 0)",MozTransform:"translate3d(0, 0, 0)",msTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)"}),O=(p.css("WebkitTransform")+p.css("MozTransform")+p.css("msTransform")+p.css("transform")+"").indexOf("(")!=-1);var P="ontouchstart"in window,ca=(P?"touchstart":"mousedown")+".ur",da=(P?
"touchmove":"mousemove")+".ur",ha=(P?"touchend":"mouseup")+".ur",H={toggler:function(c){c=z(c)?v(c,"toggler"):y(c,"toggler");b.each(c,function(c,d){d.button||b.error("no button found for toggler with id: "+c);d.content||b.error("no content found for toggler with id: "+c);var e=b(d.button).attr("data-ur-state")||"disabled";b(d.button).add(d.content).attr("data-ur-state",e);b(d.button).on("click.ur.toggler",function(){var e=b(d.button).attr("data-ur-state")=="enabled",c=e?"disabled":"enabled";b(d.button).add(d.content).attr("data-ur-state",
c);e||b(d.drawer).attr("data-ur-state",c)});b(d.drawer).on("webkitTransitionEnd.ur.toggler transitionend.ur.toggler",function(){b(this).attr("data-ur-state",b(d.button).attr("data-ur-state"))});b(d.set).data("urInit",!0)})},tabs:function(c,f){var f=f||{},d=z(c)?v(c,"tabs",function(e){b.each(e.tabs,function(e){b.each(this,function(c){b(this).attr({"data-ur-id":e,"data-ur-tabs-component":c})})})}):y(c,"tabs",function(e,c){var f=b(c).attr("data-ur-tab-id");e.tabs=e.tabs||{};e.tabs[f]=e.tabs[f]||{};var d=
b(c).attr("data-ur-tabs-component");e.tabs[f][d]=e.tabs[f][d]||[];e.tabs[f][d].push(c)});b.each(d,function(c,d){d.closeable=oa(b(d.set).attr("data-ur-closeable")||f.closeable);b.each(d.tabs,function(){var c=b(this.button).attr("data-ur-state")||"disabled";b(this.button).add(this.content).attr("data-ur-state",c)});b.each(d.tabs,function(c,e){b(e.button).on("click.ur.tabs",function(){var c=b(this).attr("data-ur-state")=="enabled";b.each(d.tabs,function(){b(this.button).add(this.content).attr("data-ur-state",
"disabled")});(!c||!d.closeable)&&b(e.button).add(e.content).attr("data-ur-state","enabled")})});b(d.set).data("urInit",!0)})},inputclear:function(c){c=z(c)?v(c,"input-clear"):y(c,"input-clear");b.each(c,function(c,d){var e=b("<div class='data-ur-input-clear-ex'></div>").hide();b(d.set).append(e);e.on(P?"touchstart.ur.inputclear":"click.ur.inputclear",function(){j[0].value="";j[0].focus()}).on("touchend.ur.inputclear",function(){j[0].blur()});var j=b(d.set).find("input");j.on("focus.ur.inputclear",
function(){j[0].value!=""&&e.show()}).on("keydown.ur.inputclear",function(){e.show()}).on("blur.ur.inputclear",function(){setTimeout(function(){e.hide()},150)});b(d.set).data("urInit",!0)})},geocode:function(c,f){var f=f||{},d=z(c)?v(c,"reverse-geocode",function(c){c.elements=c.elements||{};b.each(c,function(d,f){d!="set"&&(c.elements[d]=b(f))})}):y(c,"reverse-geocode",function(c,d){c.elements=c.elements||{};c.elements[b(d).attr("data-ur-reverse-geocode-component")]=d});b.each(d,function(c,d){function n(c,
d,e){var f=0,a=null,i=null,g=null;switch(b(c).attr("data-ur-reverse-geocode-component")){case "rg-city":i="locality";break;case "rg-street":i="street_number";break;case "rg-zip":i="postal_code";break;case "rg-state":i="administrative_area_level_1";break;case "rg-country":i="country"}for(var g=d[0],j=null,k=g.address_components.length,n=0;n<k;n++)for(var m=g.address_components[n].types.length,l=0;l<m;l++)if(j=g.address_components[n].types[l],i==j){switch(j){case "street_number":f=n;a=n+1;break;case "locality":f=
n;break;case "postal_code":f=n;break;case "administrative_area_level_1":f=n;break;case "country":f=n}break}if(e==="input")c.value=a===null?d[0].address_components[f].long_name:d[0].address_components[f].long_name+" "+d[0].address_components[a].long_name;else if(e==="select"){d=d[0].address_components[f];e=0;for(f=c.length;e<f;e++)if(c[e].value===d.long_name||c[e].value.toUpperCase()===d.short_name)c.selectedIndex=e}}var k=this.set,o=b(k).attr("data-ur-callback")||f.callback,l=b(k).attr("data-ur-error-callback")||
f.errorCallback,m,I,w;this.setupCallbacks=function(){w=this;var c=this.elements["rg-button"];if(c)b(c).on("click.ur.inputclear",function(b){return function(){b.geocodeInit()}}(this));else console.warn("no button for triggering reverse geocoding present"),this.geocodeInit()};this.geoSuccess=function(b){b={lat:b.coords.latitude,lng:b.coords.longitude};this.codeLatLng(b.lat,b.lng)};this.geoError=function(b){console.error("Ur geolocation error -- Error Getting Your Coordinates!");switch(b.code){case b.TIMEOUT:console.error("Ur geolocation error -- Timeout");
break;case b.POSITION_UNAVAILABLE:console.error("Ur geolocation error -- Position unavailable");break;case b.PERMISSION_DENIED:console.error("Ur geolocation error -- Permission denied");break;case b.UNKNOWN_ERROR:console.error("Ur geolocation error -- Unknown error")}typeof l=="function"?l():eval(l)};this.geoDenied=function(){console.error("Ur geolocation error -- User Denied Geolocation")};this.codeLatLng=function(b,c){var d=new google.maps.LatLng(b,c);m.geocode({latLng:d},function(b,a){if(a==google.maps.GeocoderStatus.OK)if(b[1]){I=
b;var c=w.elements;for(elm in c)c[elm].localName==="input"?n(c[elm],I,"input"):c[elm].localName==="select"&&n(c[elm],I,"select");typeof o=="function"?o():eval(o);return b}else console.error("Geocoder failed due to: "+a)})};this.geocodeInit=function(){navigator.geolocation&&(m=new google.maps.Geocoder,navigator.geolocation.getCurrentPosition(function(b){return function(c){b.geoSuccess(c)}}(this),function(b){return function(c){b.geoError(c)}}(this),this.geoDenied))};UrGeocode=function(b){return function(){b.setupCallbacks()}}(this);
k=document.createElement("script");k.type="text/javascript";k.src="https://maps.googleapis.com/maps/api/js?sensor=true&callback=UrGeocode";b("head").append(k);b(d.set).data("urInit",!0)})},zoom:function(c,f){function d(c){function d(a){if(w&&a!=w[0]){l.state="enabled-out";var c=w.data("urZoomImg");c.transform(0,0,1);c.transitionEnd()}w=b(a)}function e(c){function n(){I.attr("data-ur-transform3d",m.transform3d?"enabled":"disabled");ja=ja||h.parent().outerWidth();ka=ka||h.parent().outerHeight();T=T||
parseInt(h.attr("width"))||parseInt(h.css("width"))||h[0].width;ea=ea||parseInt(h.attr("height"))||parseInt(h.css("height"))||h[0].height;Z=parseInt(h.attr("data-ur-width"))||h[0].naturalWidth;fa=parseInt(h.attr("data-ur-height"))||h[0].naturalHeight;h.attr("data-ur-src")||h.attr("data-ur-src",h.attr("src"));if(h.attr("data-ur-width")&&h.attr("data-ur-height")||h.attr("src")==h.attr("data-ur-src"))W=!0;J=Z/T;E=(Z-ja)/2;F=(fa-ka)/2}function l(b){if(m.state=="enabled-slide"){U("enabled");var c=(Date.now()-
K)/300;if(c<1){clearTimeout($);var s=1-Math.pow(1-c,1.685),c=o(g+s*la,[-E,E]),s=o(r+s*x,[-F,F]);X(c,s,J)}}C=!1;ia=b.pageX;G=b.pageY;B=!0;c=S(b);ia=c.x;G=c.y;c=h[0].style;window.WebKitCSSMatrix?(c=new WebKitCSSMatrix(c.webkitTransform),a=c.m41,i=c.m42):(c=c.MozTransform||c.msTransform||c.transform||"translate(0, 0)",c=c.replace(/.*?\(|\)/,"").split(","),a=parseInt(c[0]),i=parseInt(c[1]));V(b)}function w(b){if(B){V(b);var c=S(b),b=c.x-ia,c=c.y-G;if(Math.abs(b)>5||Math.abs(c)>5)C=!0;g=o(a+b,[-E,E]);
r=o(i+c,[-F,F]);X(g,r,J);aa=L;ba=M;L=b;M=c;s=ga;ga=Date.now()}}function R(a){C?Date.now()<ga+50&&P():H.zoomOut();V(a);B=!1;C=!0}function P(){U("enabled-slide");var a=L-aa,b=M-ba,a=100*Math.sqrt((a*a+b*b)/(L*L+M*M))/(ga-s);la=a*L;x=a*M;a=o(g+la,[-E,E]);b=o(r+x,[-F,F]);X(a,b,J);K=Date.now();$=setTimeout(function(){U("enabled")},300)}function U(a){m.state=a;h.attr("data-ur-state",a);m.img.length==1&&I.attr("data-ur-state",a)}function O(a,b){D.attr("data-ur-state","enabled");U("enabled-in");X(a||0,b||
0,J)}function N(a){var b=S(a),a=a.target.getBoundingClientRect();return{x:b.x-a.left,y:b.y-a.top,x2:b.x2-a.left,y2:b.y2-a.top}}function X(a,b,c){var s="";a!=null&&(s=Q+a+"px, "+b+"px"+t);c!=null&&(s+=q+c+", "+c+v);return h.css({webkitTransform:s,MozTransform:s,msTransform:s,transform:s})}var H=this,h=b(c),ja,ka,T,ea,Z,fa,E,F,J,W;this.transitionEnd=function(){m.state=="enabled-in"?(h.css({webkitTransitionDelay:"",MozTransitionDelay:"",OTransitionDelay:"",transitionDelay:""}),h.attr("src",h.attr("data-ur-src")),
j.indexOf(h.attr("data-ur-src"))==-1&&setTimeout(function(){j.indexOf(h.attr("data-ur-src"))==-1&&p.attr("data-ur-state","enabled")},16),U("enabled"),h.on(ca+".zoom",l).on(da+".zoom",w).on(ha+".zoom",R)):m.state=="enabled-out"&&(U("disabled"),h.off(ca+".zoom",l).off(da+".zoom",w).off(ha+".zoom",R))};this.transform=X;this.zoomIn=function(a){if(m.state=="disabled")if(T||(n(),h.css("width",T+"px"),h.css("height",ea+"px")),a=N(a),y=a.x,A=a.y,W){var a=o(Z/2-J*y,[-E,E]),b=o(fa/2-J*A,[-F,F]);O(a,b)}else m.state=
"enabled-in",h.attr("src",h.attr("data-ur-src")),setTimeout(function(){W||p.attr("data-ur-state","enabled")},0)};this.zoomOut=function(){m.state=="enabled"&&(D.attr("data-ur-state","disabled"),U("enabled-out"),X(0,0,1))};if(I.attr("data-ur-touch")!="disabled"||f.touch)h.on(ca+".zoom",function(a){Y=u=!0;z=S(a)}),h.on(da+".zoom",function(a){a=S(a);u&&Math.abs(z.x-a.x)+Math.abs(z.x-a.x)>0&&(Y=!1)}),h.on("click.ur.zoom",function(a){Y&&(d(this),this==h[0]&&H.zoomIn(a))});h.on("load.ur.zoom",function(){h.attr("src")==
h.attr("data-ur-src")&&j.push(h.attr("src"));p.attr("data-ur-state","disabled");if(!W&&m.state=="enabled-in"){W=!0;n();var a=o(Z/2-J*y,[-E,E]),b=o(fa/2-J*A,[-F,F]);h.css({webkitTransitionDelay:"0.3s",MozTransitionDelay:"0.3s",OTransitionDelay:"0.3s",transitionDelay:"0.3s"});O(a,b)}});this.zoom=function(){m.state=="disabled"?(T||(n(),h.css("width",T+"px"),h.css("height",ea+"px")),W?O(0,0):(m.state="enabled-in",h.attr("src",h.attr("data-ur-src")),setTimeout(function(){j.indexOf(h.attr("data-ur-src"))==
-1&&p.attr("data-ur-state","enabled")},0))):H.zoomOut()};h.on("webkitTransitionEnd.ur.zoom transitionend.ur.zoom",this.transitionEnd)}var l=this,m=this;this.container=c.set;this.img=c.img;this.state="disabled";this.button=c.button;this.idler=c.loading;var I=b(this.container),w,p=b(this.idler),D=b(this.button),y,A,a=0,i=0,g=0,r=0,ia=0,G=0,B=!1,C=!0,Q="translate(",t=")",q=" scale(",v=")",z,Y,u,K,$,aa=0,ba=0,L=0,M=0,s=0,ga=0,la,x;this.transform3d=O;if(c=I.attr("data-ur-transform3d"))this.transform3d=
c!="disabled";else if("transform3d"in f)this.transform3d=f.transform3d;l.transform3d&&(Q="translate3d(",t=",0)",q=" scale3d(",v=",1)");b(l.img).each(function(){j.push(b(this).attr("src"));b(this).data("urZoomImg",new e(this))});b(l.button).on(P?"touchstart.ur.zoom":"click.ur.zoom",function(){l.img.length>1?d(b(l.img).filter(I.find("[data-ur-state='active'] *"))[0]):d(l.img[0]);w.data("urZoomImg").zoom()})}var f=b.extend({touch:!0},f),e=z(c)?v(c,"zoom",function(c){c.img=[];b.each(c.imgs,function(){b(this.img).attr({"data-ur-zoom-component":"img",
"data-ur-width":this.width,"data-ur-height":this.height,"data-ur-src":this.src});c.img.push(b(this.img))});b(c.loading).attr({"data-ur-zoom-component":"loading","data-ur-state":"disabled"})}):y(c,"zoom"),j=[];b.each(e,function(c,e){Uranium.zoom[c]=new d(this);b(e.set).data("urInit",!0)})},carousel:function(c,f){function d(c,d){function e(){a.options.transform3d||($="translate(",aa=")");g.each(function(c,d){if(b(d).attr("data-ur-state")=="active")return a.itemIndex=c,!1});f();l();m(a.options.center?
a.itemIndex+a.options.cloneLength:a.itemIndex);a.update();b(a.scroller).on("dragstart.ur.carousel",function(){return!1});a.options.touch&&(b(a.scroller).on(ca+".carousel",p).on(da+".carousel",w).on(ha+".carousel",y),b(a.scroller).each(function(){this.addEventListener("click",function(b){a.flag.click||V(b)},!0)}));a.button.prev.on("click.ur.carousel",function(){D(1)});a.button.next.on("click.ur.carousel",function(){D(-1)});if("onorientationchange"in window&&!/Android/.test(navigator.userAgent))b(window).on("orientationchange.ur.carousel",
function(){a.update()});else b(window).on("resize.ur.carousel",function(){u!=i.outerWidth()&&a.update()});g.find("img").addBack("img").on("load.ur.carousel",function(){a.update()});a.autoscrollStart();i.triggerHandler("load.ur.carousel");Y=!1}function f(){if(a.options.infinite){if(a.options.cloneLength==0)if(a.options.fill)a.options.cloneLength=a.options.center?Math.min(1,a.options.fill-1):a.options.fill;else if(a.options.center){for(var c=[0,0],d=u/2+g[t].offsetWidth/2,e=t;d>0;e=(e-1+a.count)%a.count)d-=
g[e].offsetWidth,c[0]++;d=u/2+g[0].offsetWidth/2;for(e=0;d>0;e=(e+1)%a.count)d-=g[e].offsetWidth,c[1]++;a.options.cloneLength=Math.max(c[0],c[1])}else{d=u;for(e=0;d>0;)d-=g[e].offsetWidth,a.options.cloneLength++,e=(e+1)%g.length}i.attr("data-ur-clones",a.options.cloneLength);c=document.createDocumentFragment();for(e=0;e<a.options.cloneLength;e++){var x=e%a.count,x=g.eq(x).clone(!0).attr("data-ur-clone",x).attr("data-ur-state","inactive");c.appendChild(x[0])}g.parent().append(c);if(a.options.center){c=
document.createDocumentFragment();for(e=d=a.count-a.options.cloneLength%a.count;e<d+a.options.cloneLength;e++)x=e%a.count,x=g.eq(x).clone(!0).attr("data-ur-clone",x).attr("data-ur-state","inactive"),c.appendChild(x[0]);g.parent().prepend(c)}g=b(a.scroller).find("[data-ur-carousel-component='item']");t=g.length-1}else a.options.cloneLength=0,i.attr("data-ur-clones",0)}function l(){if(a.dots){var c=b(a.dots).find("[data-ur-carousel-component='dot']");if(c.length!=a.count){c.remove();for(var c=b("<div data-ur-carousel-component='dot'>"),
d=document.createDocumentFragment(),e=0;e<a.count;e++){var f=c.clone();d.appendChild(f[0])}b(a.dots).append(d)}}}function m(c){if(c!==void 0){a.itemIndex=c;if(a.itemIndex<0)a.itemIndex=0;else if(a.itemIndex>t)a.itemIndex=t;var d=a.itemIndex;a.options.infinite&&a.options.center&&(d=a.itemIndex-a.options.cloneLength);d%=a.count;b(a.counter).html(function(){return(b(this).attr("data-ur-template")||"{{index}} of {{count}}").replace("{{index}}",d+1).replace("{{count}}",a.count)});g.attr("data-ur-state",
"inactive");g.eq(a.options.center?a.itemIndex:d).attr("data-ur-state","active");b(a.dots).find("[data-ur-carousel-component='dot']").attr("data-ur-state","inactive").eq(d).attr("data-ur-state","active");a.options.infinite?b([a.button.prev,a.button.next]).attr("data-ur-state","enabled"):(b(a.button.prev).attr("data-ur-state",a.itemIndex==0?"disabled":"enabled"),b(a.button.next).attr("data-ur-state",a.itemIndex==a.count-Math.max(a.options.fill,1)?"disabled":"enabled"));Y||i.triggerHandler("itemChange",
{index:c})}}function p(b){a.autoscrollStop();a.flag.touched=!0;a.flag.lock=null;a.flag.click=!0;G=v=r=S(b);K=a.translate}function w(b){if(a.flag.touched){v=r;r=S(b);if(Math.abs(G.y-r.y)+Math.abs(G.x-r.x)>0)a.flag.click=!1;if(P){var c=Math.abs((G.y-r.y)/(G.x-r.x));if(a.flag.lock){if(a.flag.lock=="y")return}else if(c>1.2){a.flag.lock="y";return}else if(c<=1.2)a.flag.lock="x";else return}V(b);if(r!==null){var b=K+(r.x-G.x),d=-b;a.options.center&&(d+=u/2);g.each(function(b,c){var e=c.offsetLeft;if(e+
c.offsetWidth>d)return a.itemIndex=b,B=(d-e)/c.offsetWidth,a.options.center&&(B-=0.5),!1});a.options.infinite&&(a.options.center?a.itemIndex<a.options.cloneLength?(K-=q,b-=q,a.itemIndex+=a.count):a.itemIndex>=a.count+a.options.cloneLength&&(K+=q,b+=q,a.itemIndex-=a.count):B<0?(K-=q,b-=q,a.itemIndex+=a.count,c=g[a.itemIndex],B=(-b-c.offsetLeft)/c.offsetWidth):a.itemIndex>=a.count&&(c=g[a.count].offsetLeft-g[0].offsetLeft,K+=c,b+=c,a.itemIndex-=a.count));A(b)}}}function y(b){if(a.flag.touched){if(!a.flag.click||
a.flag.lock)V(b);else if(b.target.tagName=="AREA")location.href=b.target.href;a.flag.touched=!1;b=r.x-v.x;a.options.center?b<0&&B>0?D(-1):b>0&&B<0?D(1):D(0):D(b<0?-1:0)}}function D(b){a.autoscrollStop();clearTimeout(N);var c=a.itemIndex-b;a.options.infinite||(c=a.options.fill>0&&!a.options.center?o(c,[0,a.count-a.options.fill]):o(c,[0,t]));if(a.options.infinite){var d=a.translate;if(a.options.center)if(c<a.options.cloneLength)A(d-q),c+=a.count,a.itemIndex=c+b;else{if(c>=a.count+a.options.cloneLength)A(d+
q),c-=a.count,a.itemIndex=c+b}else if(c<0)A(d-q),c+=a.count,a.itemIndex=c+b;else if(c>a.count)A(d+q),c-=a.count,a.itemIndex=c+b}C=g[c];i.triggerHandler("slidestart",{index:c});setTimeout(function(){z();m(c)},0)}function z(){function b(){if(!a.flag.touched){var c=a.translate,d=Q-c;d-=d/a.options.speed>=0?Math.floor(d/a.options.speed):Math.ceil(d/a.options.speed);Math.abs(d)<0.01&&(d=0);A(c+d);a.flag.snapping=d!=0;a.flag.snapping?N=setTimeout(b,16):(a.options.infinite&&!a.options.center&&a.itemIndex>=
a.count&&(A(a.translate+q),a.itemIndex-=a.count),B=0,a.flag.click=!0,a.autoscrollStart(),i.triggerHandler("slideend",{index:a.itemIndex}))}}Q=-C.offsetLeft;a.options.center&&(Q+=Math.floor((u-C.offsetWidth)/2));b()}function A(c){a.translate=c;c=$+c+"px, 0px"+aa;b(a.scroller).css({webkitTransform:c,MozTransform:c,msTransform:c,transform:c})}var a=this;a.urId=c._id;a.container=c.set;a.scroller=c.scroll_container;a.scroller||b.error("carousel missing item components");a.items=c.item||[];a.button={prev:b(c.button).filter("[data-ur-carousel-button-type='prev']"),
next:b(c.button).filter("[data-ur-carousel-button-type='next']")};a.counter=c.count;a.dots=c.dots;a.flag={click:!0,snapping:!1,lock:null,touched:!1};a.options={autoscroll:!1,autoscrollDelay:5E3,autoscrollForward:!0,center:!1,cloneLength:0,fill:0,infinite:!0,speed:1.1,transform3d:O,touch:!0};b.extend(a.options,d);a.count=a.items.length;a.itemIndex=0;a.translate=0;var i=b(a.container),g=b(a.items),r=null,v,G={x:0,y:0},B=0,C=g[0],Q,t=a.count-1,q,H,N,Y=!0,u=i.outerWidth(),K=null,$="translate3d(",aa=", 0)";
a.update=function(c){c&&b.extend(a.options,c);c=g.length;g=b(a.scroller).find("[data-ur-carousel-component='item']");if(c!=g.length){a.items=g.filter(":not([data-ur-clone])").toArray();a.count=a.items.length;t=g.length-1;g.each(function(c,d){if(b(d).attr("data-ur-state")=="active")return a.itemIndex=c,!1});if(a.itemIndex>=g.length-a.options.cloneLength)a.itemIndex=t-a.options.cloneLength,g.eq(a.itemIndex).attr("data-ur-state","active");a.scroller.contains(C)||(C=g[a.itemIndex]);l();m(a.options.center?
a.itemIndex+a.options.cloneLength:a.itemIndex)}u=i.outerWidth();var c=0,d=[];if(a.options.fill>0)for(var e=u,f=a.options.fill;f>0;f--){var j=Math.round(e/f);d.push(j);e-=j}for(f=q=0;f<g.length;f++)if(a.options.fill>0?(j=d[f%a.options.fill],e=g.eq(f),e.css("width",j+parseInt(e.css("width"))-e.outerWidth()),c+=j):c+=g[f].offsetWidth,f<=t-a.options.cloneLength&&f>=(a.options.center?a.options.cloneLength:0))q+=g[f].offsetWidth;b(a.scroller).width(c);c=g[a.itemIndex];d=-(c.offsetLeft+B*c.offsetWidth);
Q=-C.offsetLeft;a.options.center&&(d+=Math.floor((u-c.offsetWidth)/2),Q+=Math.floor((u-C.offsetWidth)/2));A(d)};a.autoscrollStart=function(){a.options.autoscroll&&(H=setTimeout(function(){u!=0?!a.options.infinite&&a.itemIndex==t&&a.options.autoscrollForward?a.jumpToIndex(0):!a.options.infinite&&a.itemIndex==0&&!a.options.autoscrollForward?a.jumpToIndex(t):D(a.options.autoscrollForward?-1:1):a.autoscrollStart()},a.options.autoscrollDelay))};a.autoscrollStop=function(){clearTimeout(H)};a.jumpToIndex=
function(b){D(a.itemIndex-b)};(function(){var c=i.attr("data-ur-android3d")||i.attr("data-ur-transform3d");if(c)a.options.transform3d=c!="disabled";i.attr("data-ur-transform3d",a.options.transform3d?"enabled":"disabled");if(na&&!a.options.transform3d)c=parseFloat(i.attr("data-ur-speed")),a.options.speed=c>1?c:1.3;i.attr("data-ur-speed",a.options.speed);c=parseInt(i.attr("data-ur-fill"));if(c>0)a.options.fill=c;i.attr("data-ur-fill",a.options.fill);if(c=i.attr("data-ur-clones"))a.options.cloneLength=
parseInt(c);i.attr("data-ur-clones",a.options.cloneLength);c=parseInt(i.attr("data-ur-autoscroll-delay"));if(c>=0)a.options.autoscrollDelay=c;i.attr("data-ur-autoscroll-delay",a.options.autoscrollDelay);if(c=i.attr("data-ur-autoscroll-dir"))a.options.autoscrollForward=c!="prev";i.attr("data-ur-autoscroll-dir",a.options.autoscrollForward?"next":"prev");b.each(["autoscroll","center","infinite","touch"],function(b,c){var d="data-ur-"+c.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}),e=i.attr(d);
e=="enabled"?a.options[c]=!0:e=="disabled"&&(a.options[c]=!1);i.attr(d,a.options[c]?"enabled":"disabled")})})();var ba=!1;a.options.infinite&&!a.options.fill&&a.options.cloneLength==0&&g.width(function(a,b){b==0&&(ba=!0)});if(ba){console.warn("carousel with id: "+a.urId+" will be late loaded");var L=g.find("img").addBack("img").filter(function(){return this.naturalWidth==0||this.width==0}),M=L.length;if(M>0)L.on("load.ur.carousel",function(){--M==0&&e()});else b(window).on("load.ur.carousel",e)}else e()}
var e=z(c)?v(c,"carousel"):y(c,"carousel");b.each(e,function(c,e){b(e.buttons).each(function(){var d=b(this).attr("data-ur-carousel-button-type");d||b.error("malformed carousel button type for carousel with id: "+c);b(this).attr("data-ur-state",d=="prev"?"disabled":"enabled")});Uranium.carousel[c]=new d(e,f);b(e.set).data("urInit",!0);b(e.set).attr("data-ur-state","enabled")})}},N={lib:H,options:{}};window.Uranium=N;b.each(H,function(b){N[b]={}});b.fn.Uranium=function(){var c=this;b.each(H,function(){this(c)});
return this};N.options.setup=function(){b(document).Uranium()};b(function(){N.options.setup()})})(jQuery);



/*
 * File: application.js
 */

// Animate Menu

$(document).ready(function (){
  $( ".mw_menu_btn" ).click(function() {
    if($("#Menu").css("display") == 'none')
    {
      $( "#Menu" ).slideDown( 700, function() {
        // Animation complete.
      });
    }
    else
    {
      $( "#Menu" ).slideUp();
    }
});

});

// Update Cart Count in Header

function UpdateCart()
{
    if (!$(".count")[0]){ $(".sprites-cart").html("<div class='count'>0</div>"); }
    var count = parseInt($(".count").text())
    console.log(count)   
    count = count + 1;
    $(".count").text(count);
}



/*
 * File: quicksearch.js
 */
var QuickSearch = {
	minimum_length: 3,
	search_delay: 125,
	cache: new Object(),
	init: function()
	{
		$('#search_query').bind("keydown", QuickSearch.on_keydown);
		$('#search_query').bind("keyup", QuickSearch.on_keyup);
		$('#search_query').bind("change", QuickSearch.on_change);
		$('#search_query').blur(QuickSearch.on_blur);
		$('#search_query').attr('autocomplete', 'off');

	},

	on_blur: function(event)
	{
		if(!QuickSearch.item_selected && !QuickSearch.over_all)
		{
			QuickSearch.hide_popup();
		}
	},

	on_keydown: function(event)
	{
		if(event.keyCode == 13 && !event.altKey)
		{
			if(QuickSearch.selected)
			{
				try {
					event.preventDefault();
					event.stopPropagation();
				} catch(e) { }
				window.location = QuickSearch.selected.url;
				return false;
			}
			else
			{
				QuickSearch.hide_popup();
			}
		}
		else if(event.keyCode == 27)
		{
			if(document.getElementById('QuickSearch'))
			{
				try {
					event.preventDefault();
					event.stopPropagation();
				} catch(e) { }
			}
			QuickSearch.hide_popup();
		}
	},

	on_keyup: function(event)
	{
		if(QuickSearch.timeout)
		{
			clearTimeout(QuickSearch.timeout);
		}

		// Down key was pressed
		if(event.keyCode == 40 && QuickSearch.results)
		{
			if(QuickSearch.selected && QuickSearch.results.length >= QuickSearch.selected.index+1)
			{
				QuickSearch.highlight_item(QuickSearch.selected.index+1, true);
			}
			if(!QuickSearch.selected && QuickSearch.results.length > 0)
			{
				QuickSearch.highlight_item(0, true);
			}
			try {
				event.preventDefault();
				event.stopPropagation();
			} catch(e) { }
			return false;
		}
		else if(event.keyCode == 38 && QuickSearch.results)
		{
			if(QuickSearch.selected && QuickSearch.selected.index > 0)
			{
				QuickSearch.highlight_item(QuickSearch.selected.index-1, true);
			}
			try {
				event.preventDefault();
				event.stopPropagation();
			} catch(e) { }
		}
		else if(event.keyCode == 27)
		{
			QuickSearch.hide_popup();
		}
		else
		{
			if($('#search_query').val() == QuickSearch.last_query)
			{
				return false;
			}
			QuickSearch.selected = false;
			if($('#search_query').val().replace(/^\s+|\s+$/g, '').length >= QuickSearch.minimum_length)
			{
				QuickSearch.last_query = $('#search_query').val().replace(/^\s+|\s+$/g, '');
				if(QuickSearch.timeout)
				{
					window.clearTimeout(QuickSearch.timeout);
				}
				QuickSearch.timeout = window.setTimeout(QuickSearch.do_search, QuickSearch.search_delay);
			}
			else {
				if(document.getElementById('QuickSearch'))
				{
					$('#QuickSearch').remove();
				}
			}
		}
	},

	on_change: function(event)
	{
		return (QuickSearch.on_keydown(event) && QuickSearch.on_keyup(event));
	},

	do_search: function()
	{
		var cache_name = $('#search_query').val().length+$('#search_query').val();
		if(QuickSearch.cache[cache_name])
		{
			QuickSearch.search_done(QuickSearch.cache[cache_name]);
		}
		else
		{
			$.ajax({
				type: 'GET',
				dataType: 'xml',
				url: '/search.php?action=AjaxSearch&search_query='+encodeURIComponent($('#search_query').val()),
				success: function(response) { QuickSearch.search_done(response); }
			});
		}
	},

	search_done: function(response)
	{
		// Cache results	
		console.log(response);		
		var cache_name = $('#search_query').val().length+$('#search_query').val();
		QuickSearch.cache[cache_name] = response;

		if(document.getElementById('QuickSearch')) {
			$('#QuickSearch').remove();
		}

		if ($('result', response).length > 0) {
			var popup_container = document.createElement('TABLE');
			popup_container.className = 'QuickSearch';
			popup_container.id = 'QuickSearch';
			popup_container.cellPadding = "0";
			popup_container.cellSpacing = "0";
			popup_container.border = "0";

			var popup = document.createElement('TBODY');
			popup_container.appendChild(popup);

			var counter = 0;

			$('result', response).each(
				function()
				{
					var tr = $($(this).text());
					var url = $('.QuickSearchResultName a', tr).attr('href');
					url = url.replace(/www.i/, 'mlocal.i')
					$('.QuickSearchResultName a', tr).attr('href', url);
					console.log(url);
					var tmpCounter = counter;

					$(tr).attr('id', 'QuickSearchResult' + tmpCounter);
					$(tr).bind('mouseover', function() { QuickSearch.item_selected = true; QuickSearch.highlight_item(tmpCounter, false); });
					$(tr).bind('mouseup', function() { window.location = url; });
					$(tr).bind('mouseout', function() { QuickSearch.item_selected = false; QuickSearch.unhighlight_item(tmpCounter) });
					$(popup).append(tr);

					counter++;
				}
			);

			// More results than we're showing?
			var all_results_count = $('viewmoreurl', response).size();

			if(all_results_count)
			{
				var tr = document.createElement('TR');
				var td = document.createElement('TD');
				tr.className = "QuickSearchAllResults";
				tr.onmouseover = function() { QuickSearch.over_all = true; };
				tr.onmouseout = function() { QuickSearch.over_all = false; };
				td.colSpan = 2;
				td.innerHTML = $('viewmoreurl', response).text();
				tr.appendChild(td);
				popup.appendChild(tr);
			}

			var clone = popup.cloneNode(true);
			document.body.appendChild(clone);
			clone.style.top = "10px";
			clone.style.left = "10px";
			offset_height = clone.offsetHeight;
			offset_width = clone.offsetWidth;
			clone.parentNode.removeChild(clone);

			var offset_top = offset_left = 0;
			var element = document.getElementById('search_query');
			if(typeof(QuickSearchAlignment) != 'undefined' && QuickSearchAlignment == 'left') {
				offset_left = 0;
			}
			else {
				offset_left += element.offsetWidth - $('#SearchForm').width();
			}

			offset_top = -3;
			do
			{
				offset_top += element.offsetTop || 0;
				offset_left += element.offsetLeft || 0;
				element = element.offsetParent;
			} while(element);

			popup_container.style.position = "absolute";
			popup_container.style.left = offset_left + 1 + "px";
			popup_container.style.top = offset_top + document.getElementById('search_query').offsetHeight + "px";
			if(typeof(QuickSearchWidth) != 'undefined') {
				popup_container.style.width = QuickSearchWidth;
			}
			else {
				popup_container.style.width = document.getElementById('SearchForm').offsetWidth - 2 + "px";
			}
			if($('#QuickSearch'))
			{
				$('#QuickSearch').remove();
			}
			document.body.appendChild(popup_container);
			popup_container.style.display = '';
		}
		else
		{
			if(document.getElementById('QuickSearch'))
			{
				$('#QuickSearch').remove();
			}
		}
	},


	hide_popup: function()
	{
		$('#QuickSearch').remove();
		QuickSearch.selected = null;
	},

	highlight_item: function(index, keystroke)
	{
		element = $('#QuickSearchResult'+index);
		if(keystroke == true)
		{
			if(QuickSearch.selected) QuickSearch.selected.className = 'QuickSearchResult';
			QuickSearch.selected = document.getElementById('QuickSearchResult'+index);
		}
		element.addClass("QuickSearchHover");
	},

	unhighlight_item: function(index)
	{
		element = $('#QuickSearchResult'+index);
		element.removeClass('QuickSearchHover');
	}
};

$(document).ready(function()
{
	QuickSearch.init();
});


/*
 * File: body\mw.Gadgy.base.js
 */
mw.Gadgy.Base = function() {

  function initialize() {
    
  }


  return {
    init: initialize,
    name: "mw-global"
  }
}();

