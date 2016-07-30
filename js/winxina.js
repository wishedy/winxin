/**
 * Created by Administrator on 2016/7/27.
 */
$(document).ready(function(){
    var music = new Music("#music_container",{
        "width":"30px",
        "height":"30px",
        "src":"audio/tree.mp3"
    });
    var mySwiper = new Swiper('.swiper-container', {
        speed:1000,
        direction : 'vertical',
        loop : true,
        pagination : '.swiper-pagination',
        paginationType : 'bullets',
        threshold : 20,
        touchAngle : 40,
        slideActiveClass : 'swiper-slide-active',
        onSlideChangeEnd: function(swiper){
            animateInit();
        }


        /*根据此方法自制进度条，但存在bug,mySwiper.activeIndex与loop模式冲突，*/
        /*onSlideChangeStart: function(swiper){

         var progress = $(".slide").length;
         var iNow = 1/progress;
         var now = (mySwiper.activeIndex+1)*iNow;
         $(".myprogress").css({
         "transform":"scaleX("+(mySwiper.activeIndex*iNow)+")",
         "transform": "translate3d(0px, 0px, 0px) scaleX("+now+") scaleY(1)",
         "transition-duration": "1000ms",
         });

         },
         */
    });
    /*页面内运动的元素需要加入以下自定义属性 set-during-time：代表过度时间 set-func 代表运动函数 set-delay代表运动的延时 set-tran 也是一个自定义属性 需要你自己设置他的运动形式*/
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
    /*根据翻页触发的原理 在翻页结束后给当前页添加一个自定义属性 init-animate 让后让本页面所有的类名为animate-active 的元素根据之前的自定义属性 动起来 且仅仅在第一次出现时动起来  这里暂时没有考虑动画效果*/
    function animateInit(){
            var animateInit = ($(".swiper-wrapper .swiper-slide-active").attr("init-animate"))?false:true;
            if(animateInit){
                $(".swiper-wrapper .swiper-slide-active").attr({
                    "init-animate":"had",
                });
                var animateAobj = $(".swiper-wrapper .swiper-slide-active .animate-active");
                animateAobj.each(function(){
                    $(this).css({
                        "transition":setTransition($(this)),
                        "transform":setTransform($(this)),
                    });
                });
            }else{
                return ;
            }
    };
    animateInit();
});
