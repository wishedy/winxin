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
        onInit: function(swiper){ //Swiper2.x�ĳ�ʼ����onFirstInit
            swiperAnimateCache(swiper); //���ض���Ԫ��
            swiperAnimate(swiper); //��ʼ����ɿ�ʼ����
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //ÿ��slide�л�����ʱҲ���е�ǰslide����
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
