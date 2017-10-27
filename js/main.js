! function() {
  var w, h, manTextInfo, manBitmap, d, last, swipe,
    doorOpen, doorBg, doorLoop, doorAway, doorAbove, manBg, macBgFar, macShow, macLine, macBg, macLoop, macClose;

  w = innerWidth;
  h = innerHeight;
  d = d || {};
  last = null;
  FastClick.attach(document.body);
  Frame.init('can');
  Frame.drawBitmap();

  d.now = f.getRandom();
  d.frist = d.now;
  caitlyn.key = true;

  window.d = d;
  d.loadSource = 0;
  d.activeId = f.getQueryString('source');

  document.addEventListener('touchmove', function(e) {

    e.target.tagName != 'VIDEO' && e.preventDefault();

  }, false);


  var data = [
    'img/disc.png',
    'img/arrow.png',
    'img/audio.png',
    'img/door_above.png',
    'img/door_bg_0.jpg',
    'img/left.png',
    'img/mac_bg.png',
    'img/mac_bg_far.png',
    'img/man_bg_0.jpg',
    'img/play.png',
    'img/right.png',
    'img/left.png',
    'img/loading/text.png',
    'img/loading/hand.png',
    'img/man_' + d.now + '/body.png',
    'img/man_' + d.now + '/reman.png',
    'img/man_' + d.now + '/top.png'
  ];

  //注入数据
  Teemo.self.setData(data);

  //开始加载
  // Teemo.load.start();

  Teemo.load.on('loading', function(e) {

    d.nowLoad = Math.floor((e.nowProgress / e.allProgress) * 99);

  });

  d.nowLoad = 0;
  d.prLoad = 0;

  var setTimeLoad = function() {

    var _p,
      time = setInterval(function() {

        d.prLoad < d.nowLoad && d.prLoad++;

        _p = d.prLoad.toString();
        $('.k').eq(0).css('background-position-x', (-(-_p[_p.length - 1]) + 1) + '0%');
        $('.s').eq(0).css('background-position-x', (-(-_p[_p.length - 2]) + 1) + '0%');
        $('.m').eq(0).css('background-position-x', (-(-_p[_p.length - 3]) + 1) + '0%');
        $('.k').eq(1).css('background-position-x', (-(-_p[_p.length - 1]) + 1) + '0%');
        $('.s').eq(1).css('background-position-x', (-(-_p[_p.length - 2]) + 1) + '0%');
        $('.m').eq(1).css('background-position-x', (-(-_p[_p.length - 3]) + 1) + '0%');

        if (d.prLoad == 100) {
          $(".m").removeClass('hide');
          clearInterval(time);
        } else if (d.prLoad == 99) {
          baseCallback();
        }

      }, 30);

  };


  //监听加载中事件
  Teemo.load.on('complete', function(e) {

    baseCallback();

  });


  var loadComplete = function() {

    setTimeout(function() {

      $("#loading, .rate-wrap").addClass('hide');
      $("#disc, #audioCon").removeClass('hide');
      $("#open-1").attr('src', 'img/man_' + d.now + '/open_1.png');
      $("#open-2").attr('src', 'img/man_' + d.now + '/open_2.png');

      doorOpen.play();
      d.isAudio = true;
      f.playAudio(audioData.door.create, false);
      swipe = new Frame.swipe($('.man-body'), d);

    }, 150);

  }

  var setBaseMan = function() {

    for (var i = 0; i < 6; i++) {

      f.setBASE('img/man_' + i + '/info_show', manTextInfo[i].show, '_' + i + '_info_show');
      f.setBASE('img/man_' + i + '/info_loop', manTextInfo[i].loop, '_' + i + '_info_loop');
      f.setBASE('img/man_' + i + '/info_show', manTextInfo[i].close, '_' + i + '_info_show');

      f.setBASE('img/man_' + i + '/above', manBitmap[i].text, '_' + i + '_above');
      f.setBASE('img/man_' + i + '/back', manBitmap[i].back, '_' + i + '_back');
      f.setBASE('img/man_' + i + '/close_a', manBitmap[i].closea, '_' + i + '_close_a');
      f.setBASE('img/man_' + i + '/close_b', manBitmap[i].closeb, '_' + i + '_close_b');
      f.setBASE('img/man_' + i + '/eye', manBitmap[i].eye, '_' + i + '_eye');
      f.setBASE('img/man_' + i + '/open', manBitmap[i].open, '_' + i + '_open');
      f.setBASE('img/man_' + i + '/center', manBitmap[i].center, '_' + i + '_center');
      window.d.now == i && f.setBASE('img/man_' + i + '/show', manBitmap[i].show, '_' + i + '_show');

    }

  }

  var showFrame = function() {

    if (!d.isHandCome) return false;
    macRight.remove();
    macHand.remove();
    macCome.play();

  }

  var closeFrame = function() {

    if (!d.isReturn) {
      macRight.remove();
      macCome.remove();
      macHand.play();
    }

  }

  // textInfo
  var showCallback = function() {

    manTextInfo[d.now].show.remove();
    macShow.remove();
    macLine.play();
    macBg.play();
    macLoop.play();
    manTextInfo[d.now].loop.play();
    d.isIconReady = true;
    d.isHandCome = true;

  }

  var closeCallback = function() {

    if (!d.isReturn) {
      last && manTextInfo[last].close.remove();
      manTextInfo[d.now].show.play();
    } else {
      macLoop.remove();
      macClose.play();
      macRight.remove();
      macCome.remove();
      macHand.remove();
      $("#icon-all, #btn").addClass('hide');
    }

  }

  var manShowCallback = function() {

    $("#man-open, .arrow, #open-hand, #wipe-con").removeClass('hide');
    manBitmap[d.now].reman.play();
    manBitmap[d.now].text.play();
    manBg.play();
    console.log(1)
    setTimeout(function() {

      manBitmap[d.now].show.remove();
      console.log(2)
    }, 300);

    Omega.trackEvent(d.activeId + '_BIM_into_page_2', { 'desc': 'into_page_2' });

  }

  var manOpenCallback = function() {

    setTimeout(function() {

      caitlyn.isFrist = false;
      $("#man-center").removeClass('hide');
      manBitmap[d.now].open.remove();
      doorAway.remove();
      manBg.play();
      manBitmap[d.now].center.play();
      manBitmap[d.now].top.play();
      manBitmap[d.now].body.play();
      manBitmap[d.now].eye.play();
      d.isOpening = false;

    }, 0);

  }

  var manCloseaCallback = function() {

    manBitmap[d.now].closea.remove();
    macBgFar.play();
    macShow.play();
    f.playBgm(audioData.bgm.b);

  }


  var manbackCallback = function() {

    manBitmap[d.now].back.remove();
    manBitmap[d.now].reman.play();
    manBitmap[d.now].text.play();
    manBg.play();
    d.isAudio && f.playBgm(audioData.bgm.a);
    $("#man-open, .arrow, #open-hand, #wipe-con").removeClass('hide');

  }

  var manClosebCallback = function() {

    d.isOpen = false;
    d.isPaning = true;
    d.panup = false;
    manBitmap[d.now].closeb.remove();
    manBitmap[d.now].text.hide();
    manBitmap[d.now].reman.play();
    swipe.go(d.swipe);

    setTimeout(function() {

      $("#open-1").attr('src', 'img/man_' + d.now + '/open_1.png');
      $("#open-2").attr('src', 'img/man_' + d.now + '/open_2.png');

    }, 600);

  }

  function initDoorAndMac() {

    doorOpen = new Frame.bitmap({ url: 'img/door_0/(x).jpg', sum: 21, isBase: true });
    doorBg = new Frame.bitmap({ url: 'img/door_bg_0.jpg', sum: 0 });
    doorLoop = new Frame.bitmap({ url: 'img/door_1/(x).png', sum: 30, isBase: true });
    doorAway = new Frame.bitmap({ url: 'img/door_2/(x).png', sum: 12, isBase: true });
    doorAbove = new Frame.bitmap({ url: 'img/door_above.png', sum: 0 });
    shadow = new Frame.bitmap({ url: 'img/shadow.png', sum: 0 });
    tipsCome = new Frame.bitmap({ url: 'img/tips/come/(x).png', sum: 18, isBase: true });
    tipsDialogue = new Frame.bitmap({ url: 'img/tips/dialogue/(x).png', sum: 116, isBase: true });
    tipsLoop = new Frame.bitmap({ url: 'img/tips/loop/(x).png', sum: 16, isBase: true });
    tipsOut = new Frame.bitmap({ url: 'img/tips/out/(x).png', sum: 7, isBase: true });

    tipsLoop.loop = true;

    tipsCome.callback = function() {

      // tipsCome.remove();
      tipsDialogue.play();
      $(".tips-close, .tips-btn").removeClass('hide');

      Omega.trackEvent(d.activeId + '_BIM_into_tips', { 'desc': 'into_tips' });
    }

    tipsDialogue.callback = function() {

      tipsDialogue.remove();
      tipsLoop.play();

    }

    tipsOut.callback = function() {

      tipsDialogue.remove();
      tipsLoop.remove();
      tipsOut.remove();
      shadow.remove();
      $("#door-open").removeClass('hide');
      Omega.trackEvent(d.activeId + '_BIM_into_page_1', { 'desc': 'into_page_1' });

    }

    tipsDialogue.onFrameRun = function(now) {

      if (now == 2) {
        f.playAudio(audioData.tips.a, false);
      } else if (now == 28) {
        f.playAudio(audioData.tips.b, false);
      } else if (now == 50 || now == 65) {
        f.playAudio(audioData.tips.c, false);
      } else if (now == 85) {
        f.playAudio(audioData.tips.d, false);
      }

    }


    manBg = new Frame.bitmap({ url: 'img/man_bg_0.jpg', sum: 0 });

    doorOpen.y = doorBg.y = doorLoop.y = doorAway.y = doorAbove.y = -(innerHeight - (parseFloat(innerWidth / 640) * 1138)) / 2;

    doorAway.callback = function() {

      doorAway.remove();

    }

    doorAway.setFrameCallback(9, function() {

      manBitmap[d.now].show.play();

      f.playGear(audioData.gear, false);

      setTimeout(function() {

        f.playAudio(audioData.headCome.scale, false);

      }, 1000);

    });

    macBgFar = new Frame.bitmap({ url: 'img/mac_bg_far.png', sum: 0 });
    macShow = new Frame.bitmap({ url: 'img/mac_show/(x).jpg', sum: 63, isBase: true });
    macLine = new Frame.bitmap({ url: 'img/mac_line/(x).png', sum: 17, isBase: true });
    macBg = new Frame.bitmap({ url: 'img/mac_bg.png', sum: 0 });

    macLoop = new Frame.bitmap({ url: 'img/mac_loop/(x).png', sum: 17, isBase: true });
    macClose = new Frame.bitmap({ url: 'img/mac_close/(x).jpg', sum: 10, isBase: true });
    macHand = new Frame.bitmap({ url: 'img/mac_hand/(x).png', sum: 2, isBase: true });
    macCome = new Frame.bitmap({ url: 'img/mac_come/(x).png', sum: 11, isBase: true });
    macRight = new Frame.bitmap({ url: 'img/mac_come/10.png', sum: 0 });


    macShow.setFrameCallback(5, function() {

      $("#macText").removeClass('hide');
      setTimeout(function() {
        f.playAudio(audioData.mac.headShow, false);
      }, 400);
      setTimeout(function() {

        $("#macText").addClass('manToHide');
        setTimeout(function() {
          $("#macText").removeClass('manToHide').addClass('hide');
        }, 600);

      }, 1200);

    });

    macClose.setFrameCallback(5, function() {

      f.playAudio(audioData.mac.close, false);

    });

    // mancallback
    doorLoop.loop = true;
    macLine.loop = true;
    macLoop.loop = true;


    doorOpen.callback = function() {

      doorOpen.remove();
      doorLoop.play();
      doorAbove.play();
      doorBg.play();
      f.playBgm(audioData.bgm.a);
      shadow.play();
      tipsCome.play();
      f.playGear(audioData.tips.open, false);

    }


    macShow.callback = function() {

      manTextInfo[d.now].show.play();
      $("#icon-all").removeClass('hide');
      $("#macText").addClass('hide');
      macRight.play();
      Omega.trackEvent(d.activeId + '_BIM_into_page_3', { 'desc': 'into_page_3' });

    }

    macClose.callback = function() {

      f.textInfoRemove(manTextInfo);
      d.isVideoEnd = false;
      macClose.remove();
      macBg.remove();
      macLine.remove();
      macBgFar.remove();
      manBitmap[d.now].back.play();
      d.isReturn = false;
      d.panup = false;
      d.isHandCome = false;
      d.isIconReady = false;

    }
  }


  // video callback

  var videoCallback = function() {

    if (d.isVideoEnd && d.isOrientation) return false;

    d.isVideoPlaying = false;
    d.isVideoEnd = false;
    $('.man-video').attr('src', '')[0].pause();
    $('.man-video, #open-2, #video-wrap').addClass('hide');
    $("#open-1, #open-2").addClass('fadeOut');
    $("#orientLayer").removeClass('hide');
    d.lastIndex = d.now;
    f.readyData.push(d.now);
    manBg.remove();
    manBitmap[d.now].center.remove();
    manBitmap[d.now].top.remove();
    manBitmap[d.now].body.remove();
    manBitmap[d.now].eye.remove();
    manBitmap[d.now].closea.play();
    f.playAudio(audioData.headCome.headClose, false);
    f.playBgm(audioData.bgm.b, false);
    d.isManVideoEnd = false;

  }

  $('.man-video')[0].addEventListener('ended', function() {

    videoCallback();
    Omega.trackEvent(d.activeId + '_BIM_callback_video', { 'desc': 'callback_video', 'videoIndex': d.now });

  });

  $(".back-video").click(function() {

    videoCallback();
    Omega.trackEvent(d.activeId + '_BIM_jump_video', { 'desc': 'jump_video', 'videoIndex': d.now });

  });

  $(".close-video").click(function() {

    var video = $('.man-video');
    d.isOpen = true;
    video[0].pause();
    video.attr('src', '').addClass('hide');
    $("#video-wrap").addClass('hide');
    $("#left, #right, .play, #man-center, #right-wrap, #left-wrap").removeClass('hide');
    $(".arrow, #wipe-con, #wipe-con").removeClass('hide');
    d.isAudio && $("#effect")[0].play();
    d.isAudio && $("#bgm")[0].play();
    Omega.trackEvent(d.activeId + '_BIM_close_video', { 'desc': 'close_video', 'videoIndex': d.now });

  });

  $(".door-foucs").click(function() {

    $("#door-open").addClass('hide');
    doorBg.remove();
    doorLoop.remove();
    doorAbove.remove();
    doorAway.play();
    f.doorCome(audioData.headCome.doorClose, false);
    Omega.trackEvent(d.activeId + '_BIM_page_1_to_page_2', { 'desc': 'page_1_to_page_2' });

  });

  $(".tips-close").click(function() {

    tipsCome.remove();
    tipsDialogue.remove();
    tipsLoop.remove();
    tipsOut.play();
    f.doorCome(audioData.tips.open, false);
    $(".tips-btn, .tips-close").addClass('hide');
    Omega.trackEvent(d.activeId + '_BIM_cl_tips_close', { 'desc': 'cl_tips_close' });

    initAudio();

  });

  $(".tips-btn").click(function() {

    tipsCome.remove();
    tipsDialogue.remove();
    tipsLoop.remove();
    tipsOut.play();
    f.doorCome(audioData.tips.open, false);
    $(".tips-btn, .tips-close").addClass('hide');
    Omega.trackEvent(d.activeId + '_BIM_cl_tips_btn', { 'desc': 'cl_tips_btn' });

    bgm.paused && initAudio(false);

  });

  var swipePan = function(r, info) {

    if (d.isOpening || d.isPaning) return false;

    d.swipe = r;

    Omega.trackEvent(d.activeId + '_BIM_' + info, { 'desc': info, 'videoIndex': d.now });
    manBitmap[d.frist].show.remove();
    if (d.isOpen) {
      d.isPaning = true;
      $("#man-center").addClass('hide');
      manBitmap[d.now].center.remove();
      manBitmap[d.now].top.remove();
      manBitmap[d.now].body.remove();
      manBitmap[d.now].eye.remove();
      manBitmap[d.now].closeb.play();
      f.playAudio(audioData.headCome.headClose, false);

    } else {

      manClosebCallback();
      $("#open-hand, #man-open").addClass('hide');

    }

    $("#open-1, #open-2").addClass('fadeOut');

  }

  var manOpen = function(info) {

    if (!d.panup && !d.isPaning) {

      d.panup = true;

      $("#man-open, #open-hand").addClass('hide');
      $("#open-1, #open-2").removeClass('fadeOut hide');

      $("#open-1").attr('src', 'img/man_' + d.now + '/open_1.png');
      $("#open-2").attr('src', 'img/man_' + d.now + '/open_2.png');
      manBitmap[d.frist].show.remove();
      manBitmap[d.now].reman.remove();
      manBitmap[d.now].text.hide();
      manBitmap[d.now].open.play();
      d.isOpen = true;
      d.isOpening = true;
      Omega.trackEvent(d.activeId + '_BIM_' + info, { 'desc': info, 'videoIndex': d.now });
    }

  }


  var mc_c = new Hammer(document.getElementById('wipe-con'));
  mc_c.get('pan').set({ direction: Hammer.DIRECTION_ALL });
  mc_c.on("panleft", function(ev) {

    swipePan(1, 'page_2_left_arrow_slide');


  });
  mc_c.on("panright", function(ev) {

    swipePan(-1, 'page_2_right_arrow_slide');


  });

  var mc_1 = new Hammer(document.getElementById('man-open-foucs'));
  mc_1.get('pan').set({ direction: Hammer.DIRECTION_ALL });
  mc_1.on("panup", function(ev) {

    manOpen('page_2_up_arrow_slide');

  });

  $("#man-open-foucs").click(function() {

    manOpen('page_2_up_arrow_ck');

  });

  mc_1.on("panleft", function(ev) {

    swipePan(1, 'page_2_left_arrow_slide');

  });
  mc_1.on("panright", function(ev) {

    swipePan(-1, 'page_2_right_arrow_slide');

  });

  $("#man-center").click(function() {

    d.isOpen = false;
    d.isVideoPlaying = true;
    $(this).addClass('hide');
    $(".arrow, #wipe-con, #orientLayer").addClass('hide');
    $("#video-wrap,.close-tips, .close-video").removeClass('hide');
    $('.man-video').attr('src', 'video/' + d.now + '.mp4').removeClass('hide')[0].play();
    $("#effect")[0].pause();
    $("#bgm")[0].pause();
    Omega.trackEvent(d.activeId + '_BIM_page_2_play_video_ck', { 'desc': 'page_2_play_video_ck', 'videoIndex': d.now });

  });

  var gotoIcon = function(r, that) {

    var index = d.now + r;
    if (index >= 6) {
      index = 0
    }
    if (index == -1) {
      index = 5;
    }
    if (d.isReturn) return false;
    if (index != d.now && d.isIconReady) {
      $(that).parent().addClass('scale-btn');
      f.playAudio(audioData.mac.icon, false);
      $(".icon-show").css('background-position-x', index * 2 + '0%');
      $(".icon").removeClass('icon-bg');
      $(this).addClass('icon-bg');
      manTextInfo[d.now].loop.remove();
      manTextInfo[d.now].close.play();
      last = d.now;
      d.now = index;
      d.isIconReady = false;
      setTimeout(function() {
        $(that).parent().removeClass('scale-btn');
      }, 400);
    }

  }

  var goback = function() {

    if (d.isReturn || !d.isIconReady) return false;
    f.playAudio(audioData.mac.icon, false);
    manTextInfo[d.now].loop.remove();
    manTextInfo[d.now].close.play();
    d.isReturn = true;
    d.panup = false;
    $("#btn-all").removeClass('btn-b-right').addClass('btn-b-left');
    setTimeout(function() {
      $("#btn-all").removeClass('btn-b-right btn-b-left');
    }, 200);

  }

  $("#toRight").click(function() {

    gotoIcon(1, this);
    Omega.trackEvent(d.activeId + '_BIM_page_3_right_arrow_ck', { 'desc': 'page_3_right_arrow_ck', 'videoIndex': d.now });

  })


  $("#toLeft").click(function() {

    gotoIcon(-1, this);
    Omega.trackEvent(d.activeId + '_BIM_page_3_left_arrow_ck', { 'desc': 'page_3_left_arrow_ck', 'videoIndex': d.now });

  });


  $("#left,#left-wrap").click(function() {

    swipePan(-1);
    Omega.trackEvent(d.activeId + '_BIM_page_2_left_arrow_ck', { 'desc': 'page_2_left_arrow_ck', 'videoIndex': d.now });

  });

  $("#right,#right-wrap").click(function() {

    swipePan(1);
    Omega.trackEvent(d.activeId + '_BIM_page_2_right_arrow_ck', { 'desc': 'page_2_right_arrow_ck', 'videoIndex': d.now });

  });

  $("#goback").click(function() {

    goback();
    Omega.trackEvent(d.activeId + '_BIM_page_3_back_page_2_ck', { 'desc': 'page_3_back_page_2_ck', 'videoIndex': d.now });

  });

  $("#center-goback").click(function() {

    goback();
    Omega.trackEvent(d.activeId + '_BIM_page_3_back_page_2_center_ck', { 'desc': 'page_3_back_page_2_center_ck', 'videoIndex': d.now });

  });

  $("#share").click(function() {

    f.playAudio(audioData.mac.icon, false);
    $("#share-wrap").removeClass('hide');
    $("#btn-all").addClass('btn-b-right').removeClass('btn-b-left');
    setTimeout(function() {
      $("#btn-all").removeClass('btn-b-right btn-b-left');
    }, 200);

    // didi.dbridge.invokeEntrance();

    Omega.trackEvent(d.activeId + '_BIM_page_3_share_btn_ck', { 'desc': 'page_3_share_btn_ck', 'videoIndex': d.now });

  });

  $("#share-wrap").click(function() {

    $(this).addClass('hide');

  });

  $("#disc, #audioCon").click(function() {

    f.audioCon();

  });

  var initBase = function() {

    f.setBASE('img/door/door_0', doorOpen, 'door_0', baseCallback);
    f.setBASE('img/door/door_1', doorLoop, 'door_1', baseCallback);
    f.setBASE('img/door/door_2', doorAway, 'door_2', baseCallback);
    f.setBASE('img/tips/tips_come', tipsCome, 'tips_come', baseCallback);
    f.setBASE('img/tips/tips_dialogue', tipsDialogue, 'tips_dialogue', baseCallback);
    f.setBASE('img/tips/tips_loop', tipsLoop, 'tips_loop', baseCallback);
    f.setBASE('img/tips/tips_out', tipsOut, 'tips_out', baseCallback);
    f.setBASE('img/mac/mac_close', macClose, 'mac_close');
    f.setBASE('img/mac/mac_loop', macLoop, 'mac_loop');
    f.setBASE('img/mac/mac_come', macCome, 'mac_come');
    f.setBASE('img/mac/mac_hand', macHand, 'mac_hand');
    f.setBASE('img/mac/mac_line', macLine, 'mac_line');
    f.setBASE('img/mac/mac_show', macShow, 'mac_show');

  }

  var preloadMan = function() {

    d.manTextInfo = manTextInfo = f.getTextInfo(showCallback, closeCallback, showFrame, closeFrame);
    d.manBitmap = manBitmap = f.getManBitmap(manShowCallback, manOpenCallback, manCloseaCallback, manClosebCallback, manbackCallback);
    manBitmap[d.now].show.setFrameCallback(75, function() {

      f.playAudio(audioData.headCome.scale, false);

    });

    setBaseMan();

    Frame.setArrayIndex(10);

  }

  var baseCallback = function() {

    d.loadSource++;
    if (d.loadSource == 9) {
      d.nowLoad = 100;
      loadComplete();
    } else if (d.loadSource == 6) {
      preloadMan();
    }
    console.log(d.loadSource)
  }

  var initAudio = function(key) {

    effect.play();
    effect.pause();
    bgm.play();
    key && bgm.pause();
    gearAudio.play();
    gearAudio.pause();
    doorCome.play();
    doorCome.pause();

  }



  window.onload = function() {

    setTimeout(function() {

      f.zoomResize();
      !f.isIos() && $(".close-tips").remove();
      $(".load-head").addClass("load-head-run");
      Teemo.load.start();
      setTimeLoad();
      initDoorAndMac();
      initBase();
      f.resetImgSrc();
      Omega.trackEvent(d.activeId + '_BIM_into_loading', { 'desc': 'into_loading' });

    }, 0);

  }

  window.addEventListener("orientationchange", function() {

    if (window.orientation != 0) {

      d.isOrientation = false;

    } else {

      d.isOrientation = true;
    }

  }, false);

  document.addEventListener("WeixinJSBridgeReady", function() {

    initAudio(true);

  }, false);


}();
