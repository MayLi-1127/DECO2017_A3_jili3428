var sti;
function startTime(){
        var clock = document.getElementById("clock");
        function initNumXY(){
            var radius = 120;
            var dot_num = 360/$(".dot").length;

            var ahd = dot_num*Math.PI/180;
            $(".dot").each(function(index, el) {
                $(this).css({
                    "left":180+Math.sin((ahd*index))*radius,
                    "top":180+Math.cos((ahd*index))*radius
                });
            });

            for(var i = 0; i < 12; i++) {
                clock.innerHTML += "<div class='clock-scale'> " + "<div class='scale-hidden'></div>" +
                "<div class='scale-show'></div>" + "</div>";
            }
            var scale = document.getElementsByClassName("clock-scale");
                for(var i = 0; i < scale.length; i++) {
                    scale[i].style.transform="rotate(" + (i * 30) + "deg)";
            }
        }
        initNumXY();

        var HourLine = document.getElementById("HourLine"),
            MinuteLine = document.getElementById("MinuteLine"),
            SecondLine = document.getElementById("SecondLine"),
            Hour = document.getElementById("Hour"),
            Minute = document.getElementById("Minute"),
            Second = document.getElementById("Second");

        function setTime(){
            var nowdate = new Date();

            var year = nowdate.getFullYear(),
                month = nowdate.getMonth()+1,
                day = nowdate.getDay(),
                hours = nowdate.getHours(),
                minutes = nowdate.getMinutes(),
                seconds = nowdate.getSeconds(),
                date = nowdate.getDate();


            Hour.innerHTML = hours >=10 ? hours : "0"+hours;
            Minute.innerHTML = minutes >=10 ? minutes : "0"+minutes;
            Second.innerHTML = seconds >=10 ? seconds : "0"+seconds;
            var hour_rotate = (hours*30-90) + (Math.floor(minutes / 12) * 6);
            HourLine.style.transform = 'rotate(' + hour_rotate + 'deg)';
            MinuteLine.style.transform = 'rotate(' + (minutes*6 - 90) + 'deg)';
            SecondLine.style.transform = 'rotate(' + (seconds*6 - 90)+'deg)';
        }
        setTime();
        sti= setInterval(setTime, 1000);
}

function startClock(){
    startTime();
}
function stopClock(){
    clearInterval(sti);
}

function playMusic(){
    $("audio")[0].play();
    $("#PlaySvg").hide();
    $("#StopSvg").show();
}

function stopMusic(){
    $("audio")[0].pause();
    $("#PlaySvg").show();
    $("#StopSvg").hide();
}

function changeMusic(){
    var src=$("#AlbumCover").attr("src");
    console.log(src);
    if(src=="Image/BLUE.JPG"){
        $("#AlbumCover").attr("src", "Image/LOVE.JPG");
        $("#MusicName").html("LOVE-May Li");
        $("audio").attr("src", "Music/LOVE.mp3");
        $("audio")[0].play();
        $("#PlaySvg").hide();
        $("#StopSvg").show();

    }else{
        $("#AlbumCover").attr("src", "Image/BLUE.JPG");
        $("#MusicName").html("BLUE-May Li");
        $("audio").attr("src", "Music/BLUE.mp3");
        $("audio")[0].play();
        $("#PlaySvg").hide();
        $("#StopSvg").show();
    }
}

$(".ColorList1").click(function(){
    $(".TaskInfo ul li").show();
});

$(".ColorList2").click(function(){
    console.log("aaa");
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

$(".fa-close").click(function(){
    $(this).parent().parent().hide();
});

$("#SearchIcon").click(function(){
    var SearchInput = $("#SearchInput").val();
    if(SearchInput==""){
        $(".Tips").html("Please type your words!");
    }else{
        $(".Tips").html("No result!");
    }
});