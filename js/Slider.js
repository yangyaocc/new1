// JavaScript Document

!function(a,b){function c(a){return function(b){return{}.toString.call(b)=="[object "+a+"]"}}function d(){return A++}function e(a){return a.match(D)[0]}function f(a){for(a=a.replace(E,"/");a.match(F);)a=a.replace(F,"/");return a=a.replace(G,"$1/")}function g(a){var b=a.length-1,c=a.charAt(b);return"#"===c?a.substring(0,b):".js"===a.substring(b-2)||a.indexOf("?")>0||".css"===a.substring(b-3)||"/"===c?a:a+".js"}function h(a){var b=v.alias;return b&&x(b[a])?b[a]:a}function i(a){var b=v.paths,c;return b&&(c=a.match(H))&&x(b[c[1]])&&(a=b[c[1]]+c[2]),a}function j(a){var b=v.vars;return b&&a.indexOf("{")>-1&&(a=a.replace(I,function(a,c){return x(b[c])?b[c]:a})),a}function k(a){var b=v.map,c=a;if(b)for(var d=0,e=b.length;e>d;d++){var f=b[d];if(c=z(f)?f(a)||a:a.replace(f[0],f[1]),c!==a)break}return c}function l(a,b){var c,d=a.charAt(0);if(J.test(a))c=a;else if("."===d)c=f((b?e(b):v.cwd)+a);else if("/"===d){var g=v.cwd.match(K);c=g?g[0]+a.substring(1):a}else c=v.base+a;return 0===c.indexOf("//")&&(c=location.protocol+c),c}function m(a,b){if(!a)return"";a=h(a),a=i(a),a=j(a),a=g(a);var c=l(a,b);return c=k(c)}function n(a){return a.hasAttribute?a.src:a.getAttribute("src",4)}function o(a,b,c){var d=S.test(a),e=L.createElement(d?"link":"script");if(c){var f=z(c)?c(a):c;f&&(e.charset=f)}p(e,b,d,a),d?(e.rel="stylesheet",e.href=a):(e.async=!0,e.src=a),T=e,R?Q.insertBefore(e,R):Q.appendChild(e),T=null}function p(a,c,d,e){function f(){a.onload=a.onerror=a.onreadystatechange=null,d||v.debug||Q.removeChild(a),a=null,c()}var g="onload"in a;return!d||!V&&g?(g?(a.onload=f,a.onerror=function(){C("error",{uri:e,node:a}),f()}):a.onreadystatechange=function(){/loaded|complete/.test(a.readyState)&&f()},b):(setTimeout(function(){q(a,c)},1),b)}function q(a,b){var c=a.sheet,d;if(V)c&&(d=!0);else if(c)try{c.cssRules&&(d=!0)}catch(e){"NS_ERROR_DOM_SECURITY_ERR"===e.name&&(d=!0)}setTimeout(function(){d?b():q(a,b)},20)}function r(){if(T)return T;if(U&&"interactive"===U.readyState)return U;for(var a=Q.getElementsByTagName("script"),b=a.length-1;b>=0;b--){var c=a[b];if("interactive"===c.readyState)return U=c}}function s(a){var b=[];return a.replace(X,"").replace(W,function(a,c,d){d&&b.push(d)}),b}function t(a,b){this.uri=a,this.dependencies=b||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!a.seajs){var u=a.seajs={version:"2.2.0"},v=u.data={},w=c("Object"),x=c("String"),y=Array.isArray||c("Array"),z=c("Function"),A=0,B=v.events={};u.on=function(a,b){var c=B[a]||(B[a]=[]);return c.push(b),u},u.off=function(a,b){if(!a&&!b)return B=v.events={},u;var c=B[a];if(c)if(b)for(var d=c.length-1;d>=0;d--)c[d]===b&&c.splice(d,1);else delete B[a];return u};var C=u.emit=function(a,b){var c=B[a],d;if(c)for(c=c.slice();d=c.shift();)d(b);return u},D=/[^?#]*\//,E=/\/\.\//g,F=/\/[^/]+\/\.\.\//,G=/([^:/])\/\//g,H=/^([^/:]+)(\/.+)$/,I=/{([^{]+)}/g,J=/^\/\/.|:\//,K=/^.*?\/\/.*?\//,L=document,M=e(L.URL),N=L.scripts,O=L.getElementById("seajsnode")||N[N.length-1],P=e(n(O)||M);u.resolve=m;var Q=L.getElementsByTagName("head")[0]||L.documentElement,R=Q.getElementsByTagName("base")[0],S=/\.css(?:\?|$)/i,T,U,V=+navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/,"$1")<536;u.request=o;var W=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,X=/\\\\/g,Y=u.cache={},Z,$={},_={},ab={},bb=t.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};t.prototype.resolve=function(){for(var a=this,b=a.dependencies,c=[],d=0,e=b.length;e>d;d++)c[d]=t.resolve(b[d],a.uri);return c},t.prototype.load=function(){var a=this;if(!(a.status>=bb.LOADING)){a.status=bb.LOADING;var c=a.resolve();C("load",c);for(var d=a._remain=c.length,e,f=0;d>f;f++)e=t.get(c[f]),e.status<bb.LOADED?e._waitings[a.uri]=(e._waitings[a.uri]||0)+1:a._remain--;if(0===a._remain)return a.onload(),b;var g={};for(f=0;d>f;f++)e=Y[c[f]],e.status<bb.FETCHING?e.fetch(g):e.status===bb.SAVED&&e.load();for(var h in g)g.hasOwnProperty(h)&&g[h]()}},t.prototype.onload=function(){var a=this;a.status=bb.LOADED,a.callback&&a.callback();var b=a._waitings,c,d;for(c in b)b.hasOwnProperty(c)&&(d=Y[c],d._remain-=b[c],0===d._remain&&d.onload());delete a._waitings,delete a._remain},t.prototype.fetch=function(a){function c(){u.request(g.requestUri,g.onRequest,g.charset)}function d(){delete $[h],_[h]=!0,Z&&(t.save(f,Z),Z=null);var a,b=ab[h];for(delete ab[h];a=b.shift();)a.load()}var e=this,f=e.uri;e.status=bb.FETCHING;var g={uri:f};C("fetch",g);var h=g.requestUri||f;return!h||_[h]?(e.load(),b):$[h]?(ab[h].push(e),b):($[h]=!0,ab[h]=[e],C("request",g={uri:f,requestUri:h,onRequest:d,charset:v.charset}),g.requested||(a?a[g.requestUri]=c:c()),b)},t.prototype.exec=function(){function a(b){return t.get(a.resolve(b)).exec()}var c=this;if(c.status>=bb.EXECUTING)return c.exports;c.status=bb.EXECUTING;var e=c.uri;a.resolve=function(a){return t.resolve(a,e)},a.async=function(b,c){return t.use(b,c,e+"_async_"+d()),a};var f=c.factory,g=z(f)?f(a,c.exports={},c):f;return g===b&&(g=c.exports),delete c.factory,c.exports=g,c.status=bb.EXECUTED,C("exec",c),g},t.resolve=function(a,b){var c={id:a,refUri:b};return C("resolve",c),c.uri||u.resolve(c.id,b)},t.define=function(a,c,d){var e=arguments.length;1===e?(d=a,a=b):2===e&&(d=c,y(a)?(c=a,a=b):c=b),!y(c)&&z(d)&&(c=s(""+d));var f={id:a,uri:t.resolve(a),deps:c,factory:d};if(!f.uri&&L.attachEvent){var g=r();g&&(f.uri=g.src)}C("define",f),f.uri?t.save(f.uri,f):Z=f},t.save=function(a,b){var c=t.get(a);c.status<bb.SAVED&&(c.id=b.id||a,c.dependencies=b.deps||[],c.factory=b.factory,c.status=bb.SAVED)},t.get=function(a,b){return Y[a]||(Y[a]=new t(a,b))},t.use=function(b,c,d){var e=t.get(d,y(b)?b:[b]);e.callback=function(){for(var b=[],d=e.resolve(),f=0,g=d.length;g>f;f++)b[f]=Y[d[f]].exec();c&&c.apply(a,b),delete e.callback},e.load()},t.preload=function(a){var b=v.preload,c=b.length;c?t.use(b,function(){b.splice(0,c),t.preload(a)},v.cwd+"_preload_"+d()):a()},u.use=function(a,b){return t.preload(function(){t.use(a,b,v.cwd+"_use_"+d())}),u},t.define.cmd={},a.define=t.define,u.Module=t,v.fetchedList=_,v.cid=d,u.require=function(a){var b=t.get(t.resolve(a));return b.status<bb.EXECUTING&&b.exec(),b.exports};var cb=/^(.+?\/)(\?\?)?(seajs\/)+/;v.base=(P.match(cb)||["",P])[1],v.dir=P,v.cwd=M,v.charset="utf-8",v.preload=function(){var a=[],b=location.search.replace(/(seajs-\w+)(&|$)/g,"$1=1$2");return b+=" "+L.cookie,b.replace(/(seajs-\w+)=1/g,function(b,c){a.push(c)}),a}(),u.config=function(a){for(var b in a){var c=a[b],d=v[b];if(d&&w(d))for(var e in c)d[e]=c[e];else y(d)?c=d.concat(c):"base"===b&&("/"!==c.slice(-1)&&(c+="/"),c=l(c)),v[b]=c}return C("config",a),u}}}(this);

(function($){
	/**
	 * Class Slider
	 */
	var Slider = function(element, options){
		this.element = $(element);
		this.options = $.extend({}, Slider.defaults, options);
		this._init();
	}


	/**
	 * prototype
	 */
	Slider.prototype = {
		constructor: Slider,

		/**
	     * 效果函数集
	     * TODO: use css3 transition
	     */
		effectFns: {
			none: function(index){
				this.slides.hide().eq(index).show();
			},

			fade: function(index){
				var curIdx = this.index;
				this.slides.eq(curIdx).stop().animate({ opacity: 0 }, this.speed,function  () {
					$(this).hide();
				});
				this.slides.eq(index).stop().show().animate({opacity: 1}, this.speed);
			},

			scrollX: function(index){
				this.scroller.stop().animate({'left': -index * this.stepWidth}, this.speed);
			},

			scrollY: function(index){
				this.scroller.stop().animate({'top': -index * this.stepWidth}, this.speed);
			}
		},

		/**
	     * 初始化
	     * @private
	     */
		_init: function(){
			var opts = this.options;
			this.scroller = this.element.find(opts.scroller);
			this.slides = this.scroller.children();
			this.element.find(opts.prevBtn).hide();
			this.element.find(opts.nextBtn).hide();
			if (this.slides.length < 2) {
				return ;
			}
			this.nav = this.element.find(opts.nav).children();
			this.prevBtn = this.element.find(opts.prevBtn);
			this.nextBtn = this.element.find(opts.nextBtn);
			this.speed = opts.speed;
			this.autoPlay = opts.autoPlay;
			this.delay = opts.delay;
			this.length = this.slides.length;
			this.maxIndex = this.length - 1;
			this.index = isNaN(opts.index) ? 0 : opts.index;
			this.transition = 'webkitTransition' in document.body.style && opts.useWebkitTransition;
			this._initEffect();
			if (this.autoPlay) {
				this.play();
			}
			if (opts.lazyload) {
				this._loadImg(this.index);
			}
			this._bindEvent();
		},

		/**
	     * 绑定事件
	     * @private
	     */
		_bindEvent: function(){
			var opts = this.options, self = this;
			//导航事件
			this.nav.on(opts.triggerEvent, function(e){
				var index = self.nav.index($(this));
				if (index == self.index) {
					return ;
				}
				self.slideTo(index);
			});

			//hover事件
			this.element.on('mouseenter', function(e){
				self.stop();
				self.prevBtn.fadeIn();
				self.nextBtn.fadeIn();
			}).on('mouseleave', function(e){
				self.play();
				self.prevBtn.fadeOut();
				self.nextBtn.fadeOut();
			});

			//前后按钮
			this.prevBtn.on('click', function(e){
				e.preventDefault();
				self.prev();
			});
			this.nextBtn.on('click', function(e){
				e.preventDefault();
				self.next();
			});
		},

		/**
	     * 初始化效果样式
	     * @private
	     */
		_initEffect: function(){
			var opts = this.options, effect = opts.effect, slides = this.slides, index = this.index;
			this.effectFn = this.effectFns[effect];
			switch(effect){
				case 'none':
					slides.hide().eq(index).show();
					break ;
				case 'fade':
					slides.css({'opacity': 0, 'position': 'absolute', 'top': 0, 'left': 0}).eq(index).css('opacity', 1);
					break ;
				case 'scrollX':
					this.stepWidth = slides.eq(0).width();
					this.scroller.css({'position': 'absolute', 'width': this.length * this.stepWidth, 'left': -index * this.stepWidth});
					slides.css('float', 'left');
					break ;
				case 'scrollY':
					this.stepWidth = this.slides.eq(0).height();
					this.scroller.css({'position': 'absolute', 'top': -index * this.stepWidth});
					break ;
			}
			this._updateNav();
		},

		/**
	     * 获取当前帧索引
	     * @public
	     * @returns 当前索引
	     */
		getIndex: function(){
			return this.index;
		},

		/**
	     * 播放
	     * @public
	     */
		play: function(){
			var self = this;
			if (!this.timer) {
				this.timer = window.setInterval(function(){
					self.next();
				}, this.delay);
			}
		},

		/**
	     * 暂停
	     * @public
	     */
		stop: function(){
			if (this.timer) {
				window.clearInterval(this.timer);
				this.timer = null;	
			}
		},

		/**
	     * 滚动到指定帧
	     * @public
	     * @prama 帧索引
	     */
		slideTo: function(index){
			var opts = this.options;
			if (index == this.index || index < 0 || index > this.maxIndex) {
				return ;
			}
			this.effectFn(index);
			this.index = index;
			this._updateNav();
			if (opts.lazyload) {
				this._loadImg(index);
			}
			//预加载下一帧图片
			if (opts.lazyload && opts.preload) {
				index = index == 0 ? this.maxIndex : index == this.maxIndex ? 0 : index;
				this._loadImg(index); 
			}
		},

		/**
	     * 下一帧
	     * @public
	     */
		next: function(){
			var index = this.index + 1;
			if (index > this.maxIndex) {
				index = index % this.length;
			}
			this.slideTo(index);
		},

		/**
	     * 上一帧
	     * @public
	     */
		prev: function(){
			var index = this.index - 1;
			if (index < 0) {
				index = this.maxIndex;
			}
			this.slideTo(index);
		},

		/**
	     * lazyload 图片
	     * @private
	     * TODO: 增加预加载下一帧功能
	     */
		_loadImg: function(index){
			var img = this.scroller.find('img').eq(index), opts = this.options, lazyAttr = opts.lazyload, loadingCls = opts.loadingCls;
			var src = $(img).attr(lazyAttr);
			if (!src) {
				return ;
			}
			img.parent().addClass(loadingCls);
			var imgObj = new Image();
			$(imgObj).on('load', function(e){
				img.attr('src', src).removeAttr(lazyAttr).parent().removeClass(loadingCls);
			});
			imgObj.src = src;
		},

		/**
	     * 更新导航状态
	     * @private
	     */
	    _updateNav: function(){
	    	var index = this.index, curCls = this.options.curCls;
	    	this.nav.eq(index).addClass(curCls).siblings().removeClass(curCls);
	    }
	}


	/**
	 * default options
	 */

	
	window.Slider = $.Slider = Slider;


})(jQuery);