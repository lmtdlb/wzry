var key = sessionStorage.getItem("key");//获取到浏览器中的值
var array = key.split(",");//将字符串拆分为数组
var player = [];//定义一个数组
var peopleCounting = [[]];//定义一个数组套数组
for(i = 1;i <= array.length;i++){
        $("main").append(`
            <div class="box">
                    <div class="civilian"><span>${array[i-1]}</span></div>
                    <div class="num"><span>${i + "号"}</span></div>
             </div>
        `);
    player.push(({name: array[i-1], state: "live",num: i + "号",whoKill:"none"}));//向player数组中存入值
}//通过模板字符串向页面加入内容
sessionStorage.setItem("player", JSON.stringify(player));//将数据传送到页面
sessionStorage.setItem("people", JSON.stringify(peopleCounting));//将数据传送到页面
function start() {
    window.location.href="judge text.html";//js页面跳转
}