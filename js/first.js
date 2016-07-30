/**
 * Created by Administrator on 2016/7/18.
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
    function musicRun(){
        var animate = ['Cound 1s linear 600ms infinite','Dound 2s linear 200ms infinite','Eound 1s linear 300ms infinite',"Bround 2s linear 0s infinite"];
        $(".animate-ele").each(function(i){
            $(this).css({
                "animation":animate[i],
            });
        });
        $(".animate-elea").each(function(i){
            $(this).css({
                "animation":"Bround 2s linear 0s infinite",
            });
        });
        play.play();
        touch.on($("#music_container"),"touchend",function(){

            if($("#music_container").attr("play")){
                $("#music_container").removeAttr("play");
                $(".animate-ele").each(function(i){
                    $(this).css({
                        "animation":animate[i],
                    });
                });
                $(".animate-elea").each(function(i){
                    $(this).css({
                        "animation":"Bround 2s linear 0s infinite",
                    });
                });
                play.play();
            }else{
                console.log($(".animate-ele"));
                $(".animate-ele").each(function(){
                    $(this).css({
                        "animation":"",
                    });
                });
                $(".animate-elea").each(function(i){
                    $(this).css({
                        "animation":"",
                    });
                });
                $("#music_container").attr({"play":"play"});
                play.pause();
            }
        });
    }
    musicRun();

});
