var key = sessionStorage.getItem("key");//获取到浏览器中的值
var array = key.split(",");//将字符串拆分为数组
for(i = 1;i <= array.length;i++){
        $("main").append(`
            <div class="box">
                    <div class="civilian"><span>${array[i-1]}</span></div>
                    <div class="num"><span>${i + "号"}</span></div>
             </div>
        `);
}
function start() {
    window.location.href="judge text.html";//js页面跳转
}
