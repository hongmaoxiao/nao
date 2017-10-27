!function(){

	var Frame = Frame||{}; 


	// bitmap  start

	var bitmap = function(ob){

		this.type = 'bitmap';
		this.x = 0;
		this.y = 0;
		this.isAccept = false;

		this.now = 0;
		this.url = ob.url;
		this.sum = ob.sum;
		this.loadSum = 0;
		this.isFPS = 0.5;

		this.images = [];
		this.loop = false;
		this.audioLoop = false;
		this.isHeight = false;
		this.order = ob.order||false;
		this.isBase = ob.isBase||false;
		this.isPlay = false;
		this.isPause = false;
		this.callback = null;
		this.loadCallback = null;
		this.opacity = 1;
		this.isGOOpacity = false;
		this.init();

	}
	

	bitmap.prototype.init = function(){

		var _self = this,
			_images = _self.images,
			_url = _self.url,
			_sum = _self.sum,
			_order = _self.order,
			_img,_i;

		if(!_self.isBase){

			for (_i = 0;_i <= _sum; _i++) {

				_img = new Image();
				_img.src = _url.replace('(x)',_order?_sum-_i:_i);
				_img.onload = function(){

					_self.loadSum++;
					
					if(_self.loadSum == _self.sum+1){
						_self.isLoad = true;
						_self.loadCallback && _self.loadCallback();
					}

				}
				_images.push(_img);
			}
		}
		

		Frame.data.push(this);

	}

	bitmap.prototype.hide = function(){

		this.isGOOpacity = true;

	}

	bitmap.prototype.play = function(){

		if(this.isLoad){
			this.now = 0;
			this.opacity = 1;
			this.isGOOpacity = false;
			this.isPlay = true;
			this.isPause = false;	
			$("#loading").addClass('hide');
			this.auidoSrc&&this.audioPlay();
		}else{
			$("#rate").addClass('hide');
			$("#loading").removeClass('hide');

			this.loadCallback = function(){
				this.play();
			}
		}
	}

	bitmap.prototype.audioPlay = function(){

		var effect = $("#effect");
		effect[0].pause();
		this.audioLoop?effect.attr('loop',''):effect.removeAttr('loop');
		effect.attr('src',this.auidoSrc);
		d.isAudio&&effect[0].play();

	}

	bitmap.prototype.remove = function(){
		
		this.isPlay = false;

	}

	bitmap.prototype.reset = function(){

		this.now = 0;
		this.isPlay = false;
		this.isPause = false;

	}

	bitmap.prototype.setFrameCallback = function(index,callback){

		this.frameEvent = index;
		this.frameCallback = callback;

	}

	Frame.bitmap = bitmap;


	//img bitmap 
	var bitImg = function(url,i){

		this.url = url;
		this.label = null;
		this.callback = null;	
		this.init(i);

	}

	bitImg.prototype.init = function(i){

		this.label = $(".man-body").eq(i);

	}

	bitImg.prototype.play = function(){

		this.callback&&that.callback();
		this.label.removeClass('hide');

	}

	bitImg.prototype.remove = function(){

		var that = this;
		setTimeout(function(){
			that.label.addClass('hide');
		},100);

	}

	Frame.bitImg = bitImg;


	// frame init start


	Frame.setArrayIndex = function(i){

		var d = this.data;
		this.data = d.slice(i).concat(d.slice(0,i));
		

	}

	Frame.init = function(id){

		this.can = document.getElementById(id);
		this.ctx = this.can.getContext('2d');
		this.data = [];
	
	};

	
	var drawBitmap = function(){


		var _self = this,
			_w = 640,
			_h = 1138,
			_img,_imgHeight,_imgWidth,_r,_n;
			

		_self.ctx.clearRect(0,0,_w,_h);
		_self.data.forEach(function(el){

			if(el.isPlay){
				
				_n = Math.floor(el.now) >= el.sum ? el.sum : Math.floor(el.now);
				_img = el.images[_n];
				_r = _img.width/_img.height;

				if(el.isHeight){

					_imgWidth = _h*_r;
					_imgHeight = _h;

				}else{

					_imgWidth = _w;
					_imgHeight = _w/_r;

				}
				if(el.isAccept){
					el.x = caitlyn.x*el.scaletly||0;
					el.y = caitlyn.y*el.scaletly+el.scaleY||0;
				}
				if(el.isGOOpacity){

					el.opacity = (el.opacity - 0.1).toFixed(1);
					if(el.opacity <= 0.1){
						el.isGOOpacity = false;
						el.isPlay = false;
						el.opacity = 0;
					}
				}

				_self.ctx.globalAlpha = el.opacity;
				_self.ctx.drawImage(_img,0,0,_img.width,_img.height,el.x,el.y,_imgWidth,_imgHeight);	
				
				if(_n == el.frameEvent){
					el.frameCallback&&el.frameCallback();
				}

				// frame callback
				el.onFrameRun&&el.onFrameRun(_n);

				if(el.loop){

					if(_n == el.sum){

						el.now = 0;
						el.callback&&el.callback();

					}else{
						el.now+=0.3;
					};

				}else{

					if(_n >= el.sum){
						el.now = el.sum;

						!el.isPause&&el.callback&&el.callback();
						el.isPause = true;
					}else{

						el.now+=el.isFPS;

					}
				}
			}
		});


	    setTimeout(function(){

	        requestAnimationFrame(_self.drawBitmap.bind(_self));

	    },1000/60);

	} 

	Frame.drawBitmap = drawBitmap;

	// swipe
	var swipe = function(els,ob){
		
		this.els = els;
		this.key = true;
		this.sum = 60;
		this.ob = ob;

	}

	swipe.prototype.go = function(r){

		if(!this.key)return false;
		this.key = false;
		$(".swipe-hide").addClass('hide');
		f.playAudio(audioData.headCome.run,false);
		var that = this,
			sum = that.sum,
			next = 0;
			time = 0,
			className = r==1?'moveTo-right':'moveTo-left';
			classRate = r==1?'-a':'-b';

			if(this.ob.now+r >= 6){
				next = 0;
			}else if(this.ob.now+r <= -1){
				next = 5;
			}else{
				next = that.ob.now+r;
			}
		
			ela = that.els.eq(that.ob.now),
			elb = that.els.eq(next);
			elb.css('left',r==1?'500px':'-500px');

 
		ela.addClass(className+'-a');
		elb.removeClass('hide').addClass(className+'-b');

		setTimeout(function(){
			that.ob.now = next;
			ela.addClass('hide').removeClass(className+'-a');
			elb.removeClass(className+'-b').css('left',0);
			d.manBitmap[d.now].text.play();
			that.key = true;
			that.panup = true;
			d.isPaning = false;
			$(".swipe-hide").removeClass('hide');
			$("#man-open, #open-hand").removeClass('hide');
		},1500);

	}

	Frame.swipe = swipe;

	window.Frame = Frame;

}();

