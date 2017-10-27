!function(){

	var f = f||{};

	f.randomData = [0,1,2,3,4,5];

	f.readyData = [];

	f.getRandom = function(){

		var r = Math.floor(Math.random() * f.randomData.length);
		var n = f.randomData.splice(r,1)[0];
		f.readyData.push(n);
		return n;		
		
	}

	f.getManBitmap= function(showCallback,openCallback,closeCallback,closebCallback,backCallback){

		var data = [];
		var cap = [-300,-178,-178,-178,-178,-178,-178];
		for (var i = 0; i < 6; i++) {
			var man = {
				open: new Frame.bitmap({url:'img/man_'+i+'/open/(x).jpg',sum:21,isBase:true}),
				top: new Frame.bitmap({url:'img/man_'+i+'/top.png',sum:0}),
				body: new Frame.bitmap({url:'img/man_'+i+'/body.png',sum:0}),
				show: window.d.now == i&&new Frame.bitmap({url:'img/man_'+i+'/show/(x).jpg',sum:95,isBase:true}),
				center: new Frame.bitmap({url:'img/man_'+i+'/center/(x).png',sum:17,isBase:true}),
				back: new Frame.bitmap({url:'img/man_'+i+'/back/(x).jpg',sum:10,isBase:true}),
				eye: new Frame.bitmap({url:'img/man_'+i+'/eye/(x).png',sum:17,isBase:true}),
				text:new Frame.bitmap({url:'img/man_'+i+'/above/(x).png',sum:19,isBase:true}),
				closea: new Frame.bitmap({url:'img/man_'+i+'/close_a/(x).jpg',sum:7,isBase:true}),
				closeb: new Frame.bitmap({url:'img/man_'+i+'/close_b/(x).jpg',sum:7,isBase:true}),
				reman: new Frame.bitImg('img/man_'+i+'/reman.png',i)
			}
			man.center.loop = true;

			man.center.isAccept = true;
			man.center.scaleY = 0;
			man.top.isAccept = true;
			man.body.isAccept = true;
			man.center.scaletly = 1;
			man.top.scaletly = -0.5;
			man.body.scaletly = -0.5;

			man.eye.loop = true;
			man.eye.isAccept = true;
			man.eye.scaletly = -0.5;

			man.reman.isHeight = true;
			man.top.y = man.top.scaleY = cap[i];
			man.body.y = man.body.scaleY = 178;
			man.show.isFPS = 0.8;
			man.show.callback = showCallback;
			man.open.callback = openCallback;
			man.back.callback = backCallback;
			man.closea.callback = closeCallback;
			man.closeb.callback = closebCallback;

			man.center.auidoSrc = audioData.heads[i].center;
			man.center.audioLoop = true;
			man.open.auidoSrc = audioData.heads[0].open;

			data.push(man);
		}

		return data;

	}


	f.getTextInfo = function(showCallback,closeCallback,showFrameEvent,closeFrameEvent){

		var data = [];
		for (var i = 0; i < 6; i++) {

			var man = {

				show:new Frame.bitmap({url:'img/man_'+i+'/info_show/(x).png',sum:17,isBase:true}),
				loop:new Frame.bitmap({url:'img/man_'+i+'/info_loop/(x).png',sum:17,isBase:true}),
				close:new Frame.bitmap({url:'img/man_'+i+'/info_show/(x).png',sum:17,isBase:true,order:true})

			};
			man.show.callback = showCallback;
			man.show.isFPS = 1.5;
			man.close.callback = closeCallback;
			man.close.isFPS = 1.5;
			man.loop.loop = true;

			man.show.setFrameCallback(3,showFrameEvent);
			man.close.setFrameCallback(10,closeFrameEvent);

			data.push(man);

		}

		return data;

	}

	f.textInfoRemove = function(data){

		data.forEach(function(el){

			el.show.remove();
			el.loop.remove();
			el.close.remove();

		});

	}

	f.hasReady = function(index){

		var key = false;
		for (var i = 0; i < f.readyData.length; i++) {

			if(index == f.readyData[i]){
				key = true;
			}
		}
		return key;
	}


	f.zoomResize = function(){

	    var ratio = parseFloat(innerWidth / 640);
	    $("#can, #man-all, #icon-all").css("transform", "scale(" + ratio + "," + ratio + ")");
	    $("#can, #man-all, #icon-all").css("-webkit-transform", "scale(" + ratio + "," + ratio + ")");
	    //$("#can").attr("height",innerHeight/ratio);

	}

	f.playAudio = function(src,loop){

		$("#effect")[0].pause();
		loop?$("#effect").attr('loop',''):$("#effect").removeAttr('loop');
		d.isAudio&&$("#effect").attr('src',src)[0].play();

	}

	f.playBgm = function(src){

		$("#bgm")[0].pause();
		d.isAudio&&$("#bgm").attr('src',src)[0].play();

	}

	f.playGear = function(src){

		$("#gearAudio")[0].pause();
		d.isAudio&&$("#gearAudio").attr('src',src)[0].play();

	}

	f.doorCome = function(src){

		$("#doorCome")[0].pause();
		d.isAudio&&$("#doorCome").attr('src',src)[0].play();

	}

	f.audioCon = function(){

		if(d.isAudio){

			d.isAudio = false;
			$("#effect")[0].pause();
			$("#bgm")[0].pause();
			$("#audioCon").addClass('audio-x');
			$("#disc").removeClass('disc-run');

			Omega.trackEvent(d.activeId+'_BIM_close_audio_ck',{'desc':'close_audio_ck'});

		}else{
			$("#bgm")[0].play();
			d.isAudio = true;
			$("#audioCon").removeClass('audio-x');
			$("#disc").addClass('disc-run');
			$("#effect").attr('loop')&&$("#effect")[0].play();

			Omega.trackEvent(d.activeId+'_BIM_open_audio_ck',{'desc':'open_audio_ck'});

		}
	}
	

	f.resetImgSrc = function(){

		var _el;
		$('img').forEach(function(el){
			_el = $(el);
			_el.attr('src',_el.attr('src-data'));
		});
	
	}

	f.isIos = function(){

		var u = navigator.userAgent;

		return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 

	}

	f.getQueryString = function(name){

		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r!=null)return  unescape(r[2]); return null;

	}

	f.setBASE = function(url,ob,key,callback){

		var name = key,
			data,img;

		$.getScript(url+'.js', function(data, textStatus, jqxhr) {

			data = window[name];
			!data&&console.log(key);
			data.forEach(function(el){

				img = new Image();
				img.src = el;
				ob.images.push(img);
			});
			ob.isLoad = true;

			if(ob.order){
				ob.images = ob.images.reverse();
			}
			callback&&callback(ob);

			ob.loadCallback&&ob.loadCallback();

		});

	}

	window.f = f;

}();
