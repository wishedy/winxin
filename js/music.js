/**
 * Created by Administrator on 2016/7/28.
 */
/*
var music = {

}
*/
/*$(document).ready(function(){*/
    /*function person(name,sex){
        this.name = name;
        this.sex = sex;
    }
    person.prototype.showName = function(){
        console.log(this.name);
    }
    person.prototype.showSex = function(){
        console.log(this.sex);
    }
    var p1 = new person("吴威威","男");
    p1.showName();
    p1.showSex();*/
    function Music(selector,json){
        $(selector).addClass("music-container");

        if(json.width){
            $(".music-container").css({
                "width":json.width,
            });
        }else{
            $(".music-container").css({
                "width":json.width,
            });
        }
        if(json.height){
            $(".music-container").css({
                "height":json.height,
            });
        }else{
            $(".music-container").css({
                "height":"30px",
            });
        }
        var mainWidth = parseInt($(".music-container").eq(0).css("width"))*0.9+"px";
        var mainHeight = parseInt($(".music-container").eq(0).css("height"))*0.9+"px";
        $(".music-container #main").css({
            "width":mainWidth,
            "height":mainHeight,
        });
        function musicRun(){
            var animate = ['Cound 1s linear 600ms infinite','Dound 2s linear 200ms infinite','Eound 1s linear 300ms infinite',"Bround 2s linear 0s infinite"];
            $(".animate-ele").each(function(i){
                $(this).css({
                    "animation":animate[i],
                });
            });
            $("#playmusic").attr({
                "src":json.src,
            });
            $(".animate-elea").each(function(i){
                $(this).css({
                    "animation":"Bround 2s linear 0s infinite",
                });
            });
            playmusic.play();
            var musicobj = document.getElementsByClassName("music-container")[0];
            musicobj.addEventListener("touchend",playOrpause,false);
            function playOrpause(){
                if($(".music-container").eq(0).attr("play")){
                    $(".music-container").eq(0).removeAttr("play");
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
                    playmusic.play();
                }else{
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
                    $(".music-container").eq(0).attr({"play":"play"});
                    playmusic.pause();
                }
            }
        }
        musicRun();
    }
/*function Demo(_selector,_obj){
    _obj.method();
}
var _demo=new Demo("div",{"name":1000,"method":function(){
    alert("demo");
    alert(this["name"]);
}});*/
/*
(function(){
    function Swipers(obj,jd){
        this.obj = obj;
        this.options = jd;
    }

    Swipers.prototype.init = (function(){
        cc();
    })

    window.Swipers = Swipers;
})()


var s  = new Swipers("ad",{
    aa:"ss",
    cc:function(){
        alert(1)
    }
});
s.init();*/
