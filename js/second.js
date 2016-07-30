/**
 * Created by Administrator on 2016/7/23.
 */
$(document).ready(function(){
    var mySwiper = new Swiper('.swiper-container', {
        direction : 'vertical',
        pagination : '.swiper-pagination',
        freeMode : false,
        followFinger : true,
        loop : true,
        touchRatio : 0.7,
        paginationType : 'progress',
        paginationElement : 'span',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });
    $(".music").css({
        "animation":"Round 1s linear 0s infinite"
    });
    play.play();
    touch.on($(".music"),"touchend",function(){
        console.log(1);
        console.log($(".music").attr("play"));
        if($(".music").attr("play")){
            $(".music").css({
                "animation":"Round 1s linear 0s infinite"
            }).removeAttr("play");
            play.play();
        }else{
            $(".music").css({
                "animation":""
            }).attr({"play":"play"});
            play.pause();
        }
    });
});
