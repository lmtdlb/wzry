var peopleCounting = JSON.parse(sessionStorage.getItem("people"));
var key = sessionStorage.getItem("key");
var array = key.split(",");
var player = JSON.parse(sessionStorage.getItem("player"));//存值取值
var x = 0;
var y = 0;
window.onload = function() {
    for(i = 1;i <= array.length;i++) {
        if((player[i-1].name == "杀手") && (player[i-1].state == "live")){
            x++;
        }
        if((player[i-1].name == "平民") && (player[i-1].state == "live")){
            y++;
        }
    }//获取平民和杀手的人数
    for (i = 1; i < peopleCounting.length; i++) {
        $(".day-num").append(` 
            <p>第${i}天</p>
            <p class="killed${i}"></p>
            <p class="writ${i}"></p>
    
        `);
        $(".killed" + i).append(`
            黑夜：${peopleCounting[i - 1][0].num}号被杀死，真实身份是${peopleCounting[i - 1][0].identity}
        `);
        $(".writ" + i).append(`
            白天：${peopleCounting[i - 1][1].num}号被投死，真实身份是${peopleCounting[i - 1][1].identity}
        `);
    }
    $(".player").append(` 
        <p>杀&nbsp;&nbsp;手${x}人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平&nbsp;&nbsp;民${y}人</p>
    `);
}
$("button").click(function () {
    window.location.href="start page.html";
})