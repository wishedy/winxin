/**
 * Created by Administrator on 2016/7/28.
 */
$(document).ready(function(){
    var onTouchStart = function(){
        var music = Music("#music_container",{
            "width":"30px",
            "height":"30px",
            "src":"audio/ido.mp3"
        });
    };
    $(".play-icon").on("click",function(){
        var isThis = $(this);
        isThis.fadeOut(2700);
        startSnow();
        onTouchStart();
        setTimeout(function(){
            $(".snow-container").fadeOut(2500);
            var mySwiper = new Swiper('.swiper-container', {
                speed: 1000,
                direction: 'vertical',
                loop: true,
                pagination: '.swiper-pagination',
                paginationType: 'bullets',
                threshold: 20,
                touchAngle: 40,
                slideActiveClass: 'swiper-slide-active',
                onSlideChangeEnd: function (swiper) {
                    animateInit();
                }
            });
        },24000);
    });
    function setTransition(animateObj){
        var animateTime = animateObj.attr('set-during-time');
        var animateFunc = animateObj.attr('set-func');
        var animateDelay =animateObj.attr('set-delay');

        return "all "+animateTime+"ms "+animateFunc+" "+animateDelay+"ms";
    }
    function setTransform(animateObj){
        var transform = (animateObj.attr("set-tran"))?true:false;
        if(transform){
            return animateObj.attr("set-tran");
        }else{
            return '';
        }
    }
    function setAnimation(animateObj){
        var animation = (animateObj.attr("set-animate"))?true:false;
        if(animation){
            return animateObj.attr("set-animate");
        }else{
            return '';
        }
    }
    function animateInit(){
        var animateInit = ($(".swiper-wrapper .swiper-slide-active").attr("init-animate"))?false:true;
        if(animateInit){
            $(".swiper-wrapper .swiper-slide-active").attr({
                "init-animate":"had",
            });
            var animateAobj = $($(".swiper-wrapper .swiper-slide-active .animate-active"));
            animateAobj.each(function(){
                $(this).css({
                    "transition":setTransition($(this)),
                    "transform":setTransform($(this)),
                    "animation":setAnimation($(this)),
                });
            });
        }else{
            return ;
        }
    };
    animateInit();
});
