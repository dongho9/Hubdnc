$(document).on('click', 'a[href="#"]',function(e) {e.preventDefault
    ();})

$(document).ready(function(){
    var prevScrollTop = 0;
    $(window).scroll(function(){
        var nowScrollTop = $(window).scrollTop();
        if(nowScrollTop > prevScrollTop){
            $('header').addClass('header_active');
            $('.snb').addClass('snb_active');
            $('.con01').addClass('con01_active');
            $('.con02').addClass('con02_active');
        }else{
            $('header').removeClass('header_active');
            $('.snb').removeClass('snb_active');
            $('.con01').removeClass('con01_active');
            $('.con02').removeClass('con02_active');
        }
    });
});

$(document).ready(function(){
    $('.profile_slide .profile').click(function(){
        $(this).find('i').toggleClass('profile_active');
        $(this).find('i').removeClass('fa-bookmark');
        $(this).find('i').toggleClass('fa-solid fa-bookmark');
    });
});

$(document).ready(function(){
    $('.snb nav ul li a').click(function(){
        $('.snb nav ul li a').removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function(){
    $('.tab_menu ul li a').click(function(){
        $('.tab_menu ul li a').removeClass('active3');
        $(this).addClass('active3');
    });
});

$(document).ready(function(){
    $(".vid_list figure").slice(0, 10).show(); // 0부터 9번째 요소까지 선택하고 보이게하기
    $(".more_btn").click(function(){ // 더보기버튼 클릭시
        $(".vid_list figure:hidden").slice(0, 5).show(); // 숨겨진 5개 더 보이기
        if($(".vid_list figure:hidden").length == 0){ // 숨겨진 개수가 0인 경우를 확인
            $('.more_btn').hide(); // 0이면 더보기 버튼 숨기기
        }
    });
});

$(document).ready(function(){
    $('.main_profile').click(function(){
        $('.change_profile').toggleClass('change_toggle');
    })
    $('.change_profile .profile').click(function(){
        $(this).find('i').toggleClass('i_toggle');
    });
});