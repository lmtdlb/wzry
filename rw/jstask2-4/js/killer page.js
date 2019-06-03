var key = sessionStorage.getItem("key");
var array = key.split(",");
var player = JSON.parse(sessionStorage.getItem("player"));
var b = parseInt(sessionStorage.getItem("b"));
var peopleCounting = JSON.parse(sessionStorage.getItem("people"));//存值取值
var a;
for(i = 1;i <= array.length;i++) {
    $("#wrap").append(`
            <div class="box" onclick="box()">
                    <div class="civilian ${player[i-1].state}"><span>${array[i - 1]}</span></div>
                    <div class="num"><span>${i + "号"}</span></div>
                    <div class="img"></div>
             </div>
        `);
}//遍历渲染

function box() {
    $(".box").children(".live").css('background','#f5c97b');
    $(".box").children('.img').css('opacity','0');
}
$(".box").children(".death").css('background','#F0F0F0');
if(b == 1){
    $("#killer").html("杀手杀人");
    $(".box").click(function() {
        if(array[$(this).index()] == "杀手"){
            alert("不能杀自己人，请选择其他人！！");//设置杀手不能杀自己人
        }
        else {
            $(this).children('.img').css('opacity','1');
            $(this).children('.civilian').css('background','#F0F0F0');
        }
        a = $(this).index();
    });
}
else {
    $("#killer").html("投票页面");
    $(".box").click(function() {
        $(this).children('.img').css('opacity','1');
        $(this).children('.civilian').css('background','#F0F0F0');
        a = $(this).index();
    });
}
function start() {
        for (x = 1; x <= peopleCounting.length; x++) {
            peopleCounting[x - 1].push({num: a + 1, identity: array[a]})
        }//向数组中存入死亡的人
        if (b == 2) {
            peopleCounting.push([]);
        }
        sessionStorage.setItem("people", JSON.stringify(peopleCounting));
        player[a].state = "death";
        sessionStorage.setItem("player", JSON.stringify(player));
        window.location.href = "judge text.html";//js页面跳转
}



