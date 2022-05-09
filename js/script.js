$(function() {

    // 1. 풀페이지를 적용할 선택자 지정
    $('#fullpage').fullpage({

        // 2. 옵션 지정
        // 섹션(슬라이드) 배경색
        // sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', 'cornflowerblue', 'green'],
        // 스크롤 속도
        scrollingSpeed: 500,
        // 연결 링크 (메뉴)
        menu: '#menu',
        anchors: ['page1','page2','page3','page4','page5','footer'],
        // 스크롤바 여부
        scrollBar: false,
        // 키보드 사용 여부
        keyboardScrolling: true,
        // 네비게이션 여부
        navigation: true,
        // 네비게이션 위치
        navigationPosition: 'right',
        
        // 페이지 내 슬라이드 화살표 여부
        controlArrows: false,

        // 이벤트
        // 페이지 이동 시
        onLeave: function(origin, destination, direction){
            console.log('onLeave : 페이지 이동');
            // origin 		: 이동 전 페이지
            // destination	: 이동 후 페이지
            // direction	: 방향	(up/down)
            console.log('origin: ' + origin + ' / destination: ' + destination + " / direction: " + direction);

            // 두 번재 페이지를 떠날 때, 글씨 색 변경(white)
            if( origin == 2 )
                $('#section2 .design_slide_box').removeClass('slide-box')
                $('#section2 .graphic_deisgn_title').removeClass('graphic_deisgn')



            if( origin == 3 )
              $('#section3 .web_design_text').removeClass('web_design')
              
              // ERROR-----------------------------------------------------------
              $('#section3 .web_design_box').removeClass('web_move')
              
              
            },

        // 페이지 로드(이동) 후
        afterLoad: function(origin, destination, direction){
            console.log('afterLoad : 페이지 로드 후');
            // 두 번째 페이지가 로드되고 나서, 글씨 색 변경(red)
            if( destination == 2 )
                $('#section2 .design_slide_box').addClass('slide-box')
                $('#section2 .graphic_deisgn_title').addClass('graphic_deisgn')


            if( destination == 3 )
                $('#section3 .web_design_text').addClass('web_design')                
                // ERROR-----------------------------------------------------------
                $('#section3 .web_design_box').addClass('web_move')
            },



       

        
        
        
        afterRender: function(){},
        afterResize: function(width, height){},
        afterReBuild: function(){},
        afterResponsive: function(isResponsive){},
        // 페이지 내 슬라이드 로드 후
        afterSlideLoad: function(section, origin, destination, direction){},
        // 페이지 내 슬라이드 이동 시
        onSlideLeave: function(section, origin, destination, direction){}
        

    });
});


// SIDE NAV 슬라이드 에니메이션
setTimeout(function(){
  $('.side-nav-box').css({
    right: '0'
  },1000)

  $('#fp-nav ul li, .fp-slidesNav ul li').css({
    opacity: '1'
  },1000)

  $('#footer').css({
    height: '70px'
  },1000)
},2000);
      




//  오른쪽 ABILITY & SKILLS 전체 BOX
$(function(){
    $(".main_title_flex .main_title_box").animate({
        left: "0"
      }, 1000);
    
    
    // 왼쪽 ABOUT ME 전체 박스 
      setTimeout(() => {
        $(".about_me_info_flex .about_me_info_box").animate({
          left: "0"
        });
      }, 2000);

    // 왼쪽 ABOUT ME  텍스트 
      setTimeout(() =>{
        $('.about_me_opacity  .about-me-text').animate({
           left: '60px'
        },1000)
      },2500);
    
    // 왼쪽 안에 있는 컨텐츠 (일러스트 에니메이션, 개인정보)
      setTimeout(function(){
        $('.about_me_info_flex .about_me_opacity').css({
          opacity: "1"
        },1000)
      },3000);

    // 오른쪽에 있는 SKILL & ABILITY 텍스트 
      setTimeout(function(){
        $('.main_title_flex .main_title_box .ability_text').css({
          right: "0px"
        },1000)
      },3500)
    

      
      
      
      //  바그래프 에니메이션     
      setTimeout(function(){
        $('.main_title_flex .main_title_box .animate_chart_box')
        .animate({
            opacity : '1'
        },1000)
      },4000);


      setTimeout(function(){
        $('.main_title_flex .main_title_box .animate_chart_box')
        .css({
          transform : 'rotate(0deg)'
        },1000)
      },4100);
     
      
//  HTML%CSS 바 그래픽
    setTimeout(function(){
        $('.main_title_box .animate_chart_box .bar_active div:nth-child(1)').css({
            width: '90%'
        },1000) 

        $('.main_title_box .animate_chart_box .bar_active .span1').css({
          left: '82%'
       },1000)

    },4300);

    


//  JQUERY 바 그래픽

    setTimeout(function(){
        $('.main_title_box .animate_chart_box .bar_active div:nth-child(2)').css({
            width: '80%'
        },1000) 

        $('.main_title_box .animate_chart_box .bar_active .span2').css({
          left: '72%'
       },1000)

    },4120);

//  FIGMA 바 그래픽

    setTimeout(function(){
        $('.main_title_box .animate_chart_box .bar_active div:nth-child(3)').css({
           width : '70%'
        },1000) 

        $('.main_title_box .animate_chart_box .bar_active .span3').css({
          left: '62%'
       },1000)

    },4130);




    setTimeout(function(){
        $('.main_title_box .animate_chart_box .bar_active div:nth-child(4)').css({
            width: '90%'
        },1000) 

        $('.main_title_box .animate_chart_box .bar_active .span4').css({
          left: '82%'
       },1000)

    },4140);



    setTimeout(function(){
        $('.main_title_box .animate_chart_box .bar_active div:nth-child(5)').css({
          width: '90%'
        },1000) 

        $('.main_title_box .animate_chart_box .bar_active .span5').css({
          left: '82%'
       },1000)

    },4150);


    setTimeout(function(){
        $('.main_title_flex .main_title_box .language_logo').css({
          opacity: '1'
        },1000)
    },4200);

    $('.kakao-img ').on({
      //    attr 속성 선택
      // class,value
         mouseover: function(){
             $('.kakao-img  > label >  a > img').attr('src', "img/kako-profile.png" )
         },
         mouseleave: function(){
          $('.kakao-img  > label >  a > img').attr('src', "img/kakao.png" )
      }
        
     });

  });


 

  



// MAIN TITLE EFFECT
var typingBool = false;
var typingIndex = 0;

// 타이핑 할 텍스트를 가져온다 .text()
var typingTxt = $('.typing_none').text();


typingTxt = typingTxt.split("")
// 한 글자씩 자른다

if (typingBool == false) {
  // 타이핑이 진행되지 않았다면
  typingBool = true;
  // 반복동작 (100 = 0.1s 마다)
  var typingInt = setInterval(typeTx, 100);
}

function typeTx() {
  if (typingIndex <= typingTxt.length) {
    console.log(typingIndex)
    // 타이핑 텍스트 길이만큼 반복
    $(".text").append(typingTxt[typingIndex]);
    // 추가해 한글자씩 이어준다
    typingIndex++;
  } else {
    clearInterval(typingInt);
    delay()
  }

}


function delay(){
  if (typingBool2 == false) {
    // 타이핑이 진행되지 않았다면
    typingBool2 = true;
    // 반복동작 (100 = 0.1s 마다)
    var typingInt2 = setInterval(typeTx2, 100);
  }

}

// SUB TITLE EFFECT
var typingBool2 = false;
var typingIndex2 = 0;

// 타이핑 할 텍스트를 가져온다 .text()
var typingTxt2 = $('.typing_none2').text();


typingTxt2 = typingTxt2.split("")
// 한 글자씩 자른다



function typeTx2() {
  if (typingIndex2 <= typingTxt2.length) {
    console.log(typingIndex)
    // 타이핑 텍스트 길이만큼 반복
    $(".text2").append(typingTxt2[typingIndex2]);
    // 추가해 한글자씩 이어준다
    typingIndex2++;
  } else {
    clearInterval(typingInt2);
  }
}




$(function () {

  // 다양한 옵션은 API 문서를 참조하여 적용하기
  // https://swiperjs.com/swiper-api

  let thumb = new Swiper('.thumb', {
      // Optional parameters
      // 페이지 네비게이션 닷츠 위치
      direction: 'horizontal',  //horizontal ,vertical
      /*  
      사진 loop 실행여부 
      ex) 1,2,3,4 번째 사진후 1번째 사진으로 돌아올것인지
      */
      loop: false,    
      spaceBetween: 5,
      slidesPerView : 6,
      // freeMode: true,
      // watchSlidesProgress: true,

      autoplay: {                          // autoplay
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,        // 마우스 오버시 멈춤
        },
      
      mousewheel: true,       // 마우스 휠 기능 여부
      keyboard: {             // 키보드 기능 여부
          enabled: true,
      },
      
      // centeredSlides : true,

      // And if we need scrollbar
      scrollbar: {
          el: '.swiper-scrollbar',
      },
  });




  // 스와이퍼 시작!
  // 잠시 멈춤  .swiper
  let swiper = new Swiper('.swiper', {
      // Optional parameters
      // 페이지 네비게이션 닷츠 위치
      direction: 'horizontal',  //horizontal ,vertical
      loop: true,
      
      // 오토플레이 잠시멈춤
      autoplay: {                          // autoplay
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,        // 마우스 오버시 멈춤
      },

      mousewheel: true,       // 마우스 휠 기능 여부
      
      keyboard: {             // 키보드 기능 여부
          enabled: true,
      },

      //   const thumb 연결
      thumbs: {
          swiper: thumb,
      },
      

    




      // If we need pagination
      pagination: {
          el: '.swiper-pagination',
          clickable:true,
          renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
      },


      // Navigation arrows
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },


      // And if we need scrollbar
      scrollbar: {
          el: '.swiper-scrollbar',
      },
  });

})

// 스와이퍼 슬라이드에 호버시 슬라이드 작동 중지 
$(".swiper-container").each(function(elem, target){
  var swp = target.swiper;
  $(this).hover(function() {
      swp.autoplay.stop();
  }, function() {
      swp.autoplay.start();
  });
});