// 密码登陆和验证码登陆切换

var pass = document.getElementsByClassName('pass')[0].children;

var p1 = pass[0];
var p2 = pass[1];
// console.log(p1, p2);

var pass1 = document.getElementsByClassName('pass1')[0];
var pass1_3 = document.getElementsByClassName('pass1_3')[0];
// console.log(pass1, pass1_3);
var pass2 = document.getElementsByClassName('pass2')[0];
var pass2_3 = document.getElementsByClassName('pass2_3')[0];
// console.log(pass2, pass2_3);
// 绑定点击事件
touch.on(p1, 'tap', function () {
    p1.style.borderBottom = '3px solid #FF8A00';
    p2.style.borderBottom = 'none';

    pass1.style.display = 'block';
    pass1_3.style.display = 'block';

    pass2.style.display = 'none';
    pass2_3.style.display = 'none';

})

touch.on(p2, 'tap', function () {
    p2.style.borderBottom = '3px solid #FF8A00';
    p1.style.borderBottom = 'none';

    pass1.style.display = 'none';
    pass1_3.style.display = 'none';

    pass2.style.display = 'block';
    pass2_3.style.display = 'block';

})


// 密码登陆验证部分
// 手机号正则验证
var inp1 = document.getElementsByClassName('inp1')[0];
var str = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;

inp1.onfocus = function () {
    var sp1 = document.getElementsByClassName('sp1')[0];
    sp1.innerHTML = '';
}

inp1.onblur = function () {
    // console.log(inp1.value);
    var sp1 = document.getElementsByClassName('sp1')[0];
    if (inp1.value == '') {
        sp1.innerHTML = '手机号不能为空'
    } else if (!str.test(inp1.value)) {
        sp1.innerHTML = '手机号输入有误'
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


// 立即登录
var pass1_3_1 = document.getElementsByClassName('pass1_3')[0].children;
// console.log(pass1_3_1);

touch.on(pass1_3_1, 'tap', function () {
    // console.log(inp1.value);
    // console.log(inp2.value);
    setCookie('ipone', inp1.value);
    setCookie('pass_', inp2.value);
})



// 验证码登陆部分
// 手机号正则验证
var inp3 = document.getElementsByClassName('inp3')[0];
inp3.onfocus = function () {
    var sp3 = document.getElementsByClassName('sp3')[0];
    sp3.innerHTML = '';
}

inp3.onblur = function () {
    // console.log(inp1.value);
    var sp3 = document.getElementsByClassName('sp3')[0];
    if (inp3.value == '') {
        sp3.innerHTML = '手机号不能为空'
    } else if (!str.test(inp3.value)) {
        sp3.innerHTML = '手机号输入有误'
    }

}

// 发送验证码
var span1 = document.getElementsByClassName('span1')[0];
// console.log(span1);
var timer;
var sum = 60;
touch.on(span1, 'tap', function () {
    clearInterval(timer)
    timer = setInterval(function () {
        sum--;
        if (sum == 0) {
            clearInterval(timer)
            span1.innerHTML = '重新发送'
            sum = 60;
        } else if (sum == 50) {
            alert('12345')
        } else {
            span1.innerHTML = '倒计时' + sum;
        }
    }, 1000)
})

// 判断验证码
var inp4 = document.getElementsByClassName('inp4')[0];
var sp4 = document.getElementsByClassName('sp4')[0];

inp4.onfocus = function () {
    sp4.innerHTML = '';
}

inp4.onblur = function () {
    if (inp4.value == 12345) {
        sp4.innerHTML = '验证码输入正确'
    } else {
        sp4.innerHTML = '验证码输入有误'
    }
}


// 验证并登陆
var pass2_3_ = document.getElementsByClassName('pass2_3')[0].children;
// console.log(pass2_3_);

touch.on(pass2_3_, 'tap', function () {
    // console.log(inp3.value);
    setCookie('ipone', inp3.value);
    // setCookie('pass_', inp2.value);
})

