var peopleCounting = JSON.parse(sessionStorage.getItem("people"));
var c = parseInt(sessionStorage.getItem("c"));
var a = 1;

var key = sessionStorage.getItem("key");
var array = key.split(",");
var player = JSON.parse(sessionStorage.getItem("player"));
var x = 0;
var y = 0;
for(i = 1;i <= array.length;i++) {
    if((player[i-1].name == "杀手") && (player[i-1].state == "live")){
      x++;
  }
  if((player[i-1].name == "平民") && (player[i-1].state == "live")){
      y++;
  }
}
 if(x == 0){
     alert("平民胜利");
     window.location.href="end page.html";
 }
 if(y == 0 || x == y){
     alert("杀手胜利");
     window.location.href="end page.html";
 }


window.onload = function() {
    $("p").click(function () {
        $(this).next().toggle();
        $(this).next().next().toggle();
    });
};

for(i = 1;i <= peopleCounting.length;i++) {
    $("main").append(`
        <p>第${i}天</p>
        <div class="white-triangle night-wrap${i}"><img src="../img/k.png"></div>
        <div class="night-wrap night-wrap${i}">
            <div class="night">
                <div><img src="../img/l.png"></div>
                <div class="triangle triangle-a triangle${i}"></div>
                <span class="killer ${i}" onclick="killer()">杀手杀人</span>
            </div>
            <div class="empty"><span class="killed killed${i}"></span></div>
            <div class="night">
                <div><img src="../img/m.png"></div>
                <div class="triangle triangle-b triangle${i}"></div>
                <span class="ghost ${i}" onclick="ghost()">亡灵发表遗言</span>
            </div>
            <div class="empty"><span></span></div>
            <div class="night">
                <div style="width: 42px"></div>
                <div class="triangle triangle-c triangle${i}"></div>
                <span class="say ${i}" onclick="say()">玩家依次发言</span>
            </div>
            <div class="empty"><span style="height: 68px; margin-top: -36px;margin-bottom: -30px;"></span></div>
            <div class="night">
                <div style="width: 42px"></div>
                <div class="triangle triangle-d triangle${i}"></div>
                <span class="vote ${i}" onclick="vote()">全民投票</span>
            </div>
            <div class="empty"><span class="writ writ${i}"></span></div>
        </div>
        <div class="height"></div>
        `);

    if (c == 1) {
        $(".killer").css("background-color", "#191970");
        $(".triangle-a").css("border-right", "12px solid #191970");
        $(".killer").removeAttr('onclick');
    }


    if(peopleCounting.length >= 2){
        $("."+ (i - 1)).css("background-color", "#191970");
        $(".triangle"+ (i - 1)).css("border-right", "12px solid #191970");
        $("."+ (i - 1)).removeAttr('onclick');
        $(".night-wrap"+ (i - 1)).css('display','none');
    }

    $(".killed"+i).append(`
        ${peopleCounting[i-1][0].num}号被杀死，真实身份是${peopleCounting[i-1][0].identity}
    `);
    $(".writ" + i).append(`
        ${peopleCounting[i - 1][1].num}号被投死，真实身份是${peopleCounting[i - 1][1].identity}
    `);
}

function ghost() {
    if(c == 1) {
       a = a + 1;
        alert("请说出自己的冤情");
        $(".ghost").css("background-color", "#191970");
        $(".triangle-b").css("border-right", "12px solid #191970");
        $(".ghost").removeAttr('onclick');
    }
    else{
        alert("请按顺序点击");
    }
}

function say() {
    if(a == 2) {
        a= a + 1;
        alert("请开始你们的表演");
        $(".say").css("background-color", "#191970");
        $(".triangle-c").css("border-right", "12px solid #191970");
        $(".say").removeAttr('onclick');
    }
    else{
        alert("请按顺序点击");
    }
}
function vote() {
    if(a == 3) {
        window.location.href = "killer page.html";
    }
    else{
        alert("请按顺序点击");
    }
    var b = 2;
    sessionStorage.setItem("b",b);
    var c = 2;
    sessionStorage.setItem("c",c);
}
function killer() {
    var b = 1;
    sessionStorage.setItem("b",b);
    var c = 1;
    sessionStorage.setItem("c",c);
    window.location.href = "killer page.html";
}


