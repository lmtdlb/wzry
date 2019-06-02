var key = sessionStorage.getItem("key");//获取到浏览器中的值
var array = key.split(",");//将字符串拆分为数组
var player = JSON.parse(sessionStorage.getItem("player"));
var b = parseInt(sessionStorage.getItem("b"));
var peopleCounting = JSON.parse(sessionStorage.getItem("people"));
var a;
for(i = 1;i <= array.length;i++) {
    $("#wrap").append(`
            <div class="box" onclick="box()">
                    <div class="civilian ${player[i-1].state}"><span>${array[i - 1]}</span></div>
                    <div class="num"><span>${i + "号"}</span></div>
                    <div class="img"></div>
             </div>
        `);
}

function box() {
    $(".box").children(".live").css('background','#f5c97b');
    $(".box").children('.img').css('opacity','0');
}
$(".box").children(".death").css('background','#F0F0F0');
if(b == 1){
    $("#killer").html("杀手杀人");
    $(".box").click(function() {
        if(array[$(this).index()] == "杀手"){
            alert("不能杀自己人，请选择其他人！！");
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
        }
        if (b == 2) {
            peopleCounting.push([]);
        }
        sessionStorage.setItem("people", JSON.stringify(peopleCounting));
        player[a].state = "death";
        sessionStorage.setItem("player", JSON.stringify(player));
        window.location.href = "judge text.html";//js页面跳转
}



