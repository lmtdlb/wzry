
var player = document.getElementById("player");//玩家总人数
var slide  = document.getElementById("slide");//滑块设置
function  determine(){
    if (3 < player.value && player.value < 19  ){
       slide.value = player.value;
    }else {
        alert("人数错误")
    }
}//限制输入框人数为4——18
function kill(){
    var a = document.getElementById("kill");
    var b = Math.floor(player.value/3);
    var c = player.value - b;
    a.innerHTML = "杀&nbsp;&nbsp;手&nbsp;"+b+"&nbsp;人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平&nbsp;&nbsp;民&nbsp;"+c+"&nbsp;人";
}//定义杀手与平民的人数
function less() {
    player.value --;
    slide.value --;
    kill();
    if (player.value <=3) {
        alert("人数太少");
        player.value = 4;
    }
}//减号与滑块绑定
function plus() {
    player.value ++;
    slide.value ++;
    kill();
    if (player.value >=18) {
        alert("人数太多");
        player.value = 18;
    }
}//加号与滑块绑定
function sliding_block(){
    player.value = slide.value;
    kill();
}//滑块与输入框绑定

function sort() {
    var d = Array(Math.floor(player.value / 3)).fill("杀手");
    var e = Array(player.value - Math.floor(player.value / 3)).fill("平民");//将数字转换为文本
    var f= d.concat(e);
    var newArr = [];
    for(var i = 0, len = f.length; i < len; i++) {
        var j = Math.floor(Math.random() * (len - i));
        newArr[i] = f[j];
        f.splice(j, 1)
    }
    return newArr;
}//洗牌算法
function wet() {
    sort();//调用被打乱的数组
    sessionStorage.setItem("key",sort());//将数据存储
    window.location.href="Status page.html";//js页面跳转
}
function back() {
    window.location.href="start page.html";//js页面跳转
}



