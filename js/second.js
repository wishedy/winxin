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
        onInit: function(swiper){ //Swiper2.x�ĳ�ʼ����onFirstInit
            swiperAnimateCache(swiper); //���ض���Ԫ��
            swiperAnimate(swiper); //��ʼ����ɿ�ʼ����
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //ÿ��slide�л�����ʱҲ���е�ǰslide����
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
