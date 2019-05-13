var timer;//定义全局变量
function colors(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+","+g+","+b+")";
}//rgb 颜色获取
function sort() {
    var arr = [0,1,2,3,4,5,6,7,8];
    var newArr = [];
    for(var i = 0, len = arr.length; i < len; i++) {
        var j = Math.floor(Math.random() * (len - i));
        newArr[i] = arr[j];
        arr.splice(j, 1)
    }
    return newArr;
}//洗牌算法
console.log(sort());
function bbox() {
     var myBox = document.getElementsByClassName("box");
    for (var i=0;i<9;i++){
        myBox[i].style.backgroundColor = "orange";
    }
    myBox[sort()[1]].style.backgroundColor = colors();
    myBox[sort()[1]].style.backgroundColor = colors();
    myBox[sort()[1]].style.backgroundColor = colors();
}//颜色随机分配
function myfunction(){
    clearInterval(timer);
     timer = setInterval(bbox ,1000);
}//开始按钮
function end() {
    clearInterval(timer);
    var bg = document.getElementsByClassName("box");
    for (var i=0;i<9;i++){
        bg[i].style.backgroundColor = "orange";
    }
}//结束按钮
