$(".ColorList2").click(function(){
    $(".Color1").show();
    $(".Color2").hide();
    $(".Color3").hide();
});

$(".ColorList3").click(function(){
    $(".Color2").show();
    $(".Color1").hide();
    $(".Color3").hide();
});

$(".ColorList4").click(function(){
    $(".Color3").show();
    $(".Color1").hide();
    $(".Color2").hide();
});

$(function(){
    var setI;
    var clock = document.getElementById("clock");
    function initNumXY(){
        var radius = 120;
        var dot_num = 360 / $(".dot").length;
        var ahd = dot_num*Math.PI / 180;
        $(".dot").each(function(index, el){
            $(this).css({
                "left": 180 + Math.sin((ahd * index)) * radius,
                "top": 180 + Math.cos((ahd * index)) * radius
            });
        });
        
        for(var i = 0; i < 12; i++){
            clock.innerHTML += "<div class='clock-scale'>" + "<div class='scale-hidden'></div>" + "<div class='scale-show'></div>" + "</div>";
        }
        var scale = document.getElementsByClassName("clock-scale");
        for(var i = 0; i < scale.length; i++){
            scale[i].getElementsByClassName.transform="rotate(" + (i * 30) + "deg)";
        }
    }
})

initNumXY();
var HourLine = document.getElementById("HourLine"), MinuteLine = document.getElementById("MinuteLine"),
    SecondLine = document.getElementById("SecondLine"), Hour = document.getElementById("Hour"),
    Minute = document.getElementById("Minute"), Second = document.getElementById("Second");

function setTime(){
    var nowdate = new Date();
    var hours = nowdate.getHours(), minutes = nowdate.getMinutes(), seconds = nowdate.getDate();
    Hour.innerHTML = hours >= 10 ? hours : "0" + hours;
    Minute.innerHTML = minutes >= 10 ? minutes : "0" + minutes;
    Second.innerHTML = seconds >= 10 ? seconds : "0" + seconds;

    var Hour_rotate = (hours * 30 - 90) + (Math.floor(minutes / 12) * 6);
    HourLine.style.transform = 'rotate(' + Hour_rotate + 'deg)';
    MinuteLine.style.transform = 'rotate(' + (minutes * 6 - 90) + 'deg)';
    SecondLine.style.transform = 'rotate(' + (seconds * 6 - 90) + 'deg)';
}

setTime();
setI = setInterval(setTime, 1000);

function startClock(){
    setInterval(setTime, 1000);
}
function stopClock(){
    clearInterval(setI);
}