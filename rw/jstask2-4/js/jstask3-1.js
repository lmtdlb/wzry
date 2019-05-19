
var key = sessionStorage.getItem("key");//获取到浏览器中的值
var array = key.split(",");//将字符串拆分为数组
var civilian = document.getElementById("civilian");
var num = document.getElementById("Status");
var Emperor = document.getElementById("emperor");
var Housemaid = document.getElementById("housemaid");
var spanNum = document.getElementById("span-num");//dom获取html ID
var clickNum = 1;
var SpanNum = 1;
var conceal = 1;
var Civilian = 0;
var totality = 0;//定义变量
function CheckTheStatus() {
    if (totality < array.length) {//最外边这层判断是否跳转页面
        if (clickNum % 2 == 0) {//这层判断奇数偶数运行哪个页面
            Emperor.src = "../img/i.png";//dom通过src改变img操作html页面
            SpanNum = SpanNum + 1;
            spanNum.innerHTML = SpanNum;//赋值
            num.innerHTML = "查看" + SpanNum + "号身份";//输出内容
            civilian.innerHTML = "";
        } else {
            totality = totality + 1;
            conceal = conceal + 1;
            num.innerHTML = "隐藏并传递给" + conceal + "号";//输出内容
            Emperor.src = "../img/j.png";//dom通过src改变img操作html页面
            civilian.innerHTML = array[Civilian];//数组下标
            Civilian = Civilian + 1;
        }
        clickNum = clickNum + 1;
    } else {
        window.location.href = "judge diary.html";
    }
}
/*$(document).ready(function(){
    $("#Status").click(function(){
        $("#emperor").toggle();
        $("#housemaid").toggle();
    });
});点击实现隐藏和显示切换*/