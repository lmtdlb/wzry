/*var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4){
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
            alert(xhr.responseText);
        }else {
            alert("Request was unsuccessful：" + xhr.status)
        }
    }
}
xhr.open("GET","xxx.jsp",true);
xhr.send(null);
$("#btn").click(function () {
    $.getJSON("http://dev.admin.carrots.ptteng.com",{
        key:"free",
        appid:0,
        msg:$("#question").val()
    },function (data) {
        $("#answer").text(data.content);
    });
    alert("请输入正确账号");
});*/
$('#btn').click(function () {
    $('.invalid').text('');
    var name=$('#question').val();
    var pwd=$('#answer').val();
    console.log(typeof name);
    console.log(typeof pwd);
    if ((name === null || name === '') || (pwd === null || pwd === '')){
        $('.invalid').text('请输入账号和密码');
    }else {
        $.ajax({
            type:"Post",
            url:"carrots-admin-ajax/a/login",
            contentType: 'application/x-www-form-urlencoded',
            data:{
                name: name,
                pwd: pwd,
            },
            success:function (data) {
                console.log(data.message);
                var json=JSON.parse(data);
                console.log(json);
                console.log(json.code);
                if (json.code === -5003){
                    $('.invalid').text(json.message)
                }else if (json.code === -5004){
                    $('.invalid').text(json.message)
                } else {
                    console.log(json.code)
                }
            }
        })
    }
});
/*
$.ajax({
    url:"",
    type:"GET",
    data:{t:"sd"},
    dataType:"json",
    success:function (data) {
        $("#content").text(data);
    }
})*/
