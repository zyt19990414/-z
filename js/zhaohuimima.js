// 验证手机号
var ul1 = document.getElementsByClassName('ul1')[0];
console.log(ul1);
var str = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;

ul1.onfocus = function () {

}

ul1.onblur = function () {
    if (ul1.value == '') {
        ul1.placeholder = '手机号不能为空'
    } else if (!str.test(ul1.value)) {
        ul1.placeholder = '手机号输入有误'
    }
}

var span1_1 = document.getElementsByClassName('span1_1')[0];

var timer;
var sum = 60;
span1_1.onclick = function () {
    clearInterval(timer)
    timer = setInterval(function () {
        sum--;
        if (sum == 0) {
            clearInterval(timer)
            span1_1.innerHTML = '重新发送'
            sum = 60;
        } else if (sum == 50) {
            alert('12345')
        } else {
            span1_1.innerHTML = '倒计时' + sum;
        }
    }, 1000)
}


var ul2 = document.getElementsByClassName('ul2')[0];
var span2_1 = document.getElementsByClassName('span2_1')[0];
ul2.onblur = function () {
    if (ul2.value == '') {

        span2_1.innerHTML = '验证码不能为空';
    } else if (ul2.value != 12345) {
        span2_1.innerHTML = '验证码输入有误';
    }
}

// 密码正则验证
var inp2 = document.getElementsByClassName('inp2')[0];
var mima = /^[a-z0-9]{6,12}$/i;//数字、字母、数字和字母

inp2.onfocus = function () {
    var sp2 = document.getElementsByClassName('sp2')[0];
    sp2.innerHTML = '';
}

inp2.onblur = function () {
    // console.log(inp1.value);
    var sp2 = document.getElementsByClassName('sp2')[0];
    if (inp2.value == '') {
        sp2.innerHTML = '密码不能为空'
    } else if (!mima.test(inp2.value)) {
        sp2.innerHTML = '密码输入有误'
    }
}

// 确认密码
var ul3 = document.getElementsByClassName('ul3')[0];

var sp3 = document.getElementsByClassName('sp3')[0];
ul3.onblur = function () {
    if (ul3.value = '') {
        sp3.innerHTML = '确认密码不能为空'
    } else if (ul3.value != inp2.value) {
        sp3.innerHTML = '两次密码输入不同'
    }
}

// 点击提交
var bu1 = document.getElementsByClassName('bu1')[0];
bu1.onclick = function () {
    if (str.test(ul1.value) && ul2.value != 12345 && mima.test(inp2.value) && ul3.value != inp2.value) {
        window.location.href = './dengluye.html';
    } else {
        alert('信息输入有误，请仔细检查')
    }
}

