// 点击我的跳转到我的登录页

var header2 = document.getElementsByClassName('header2')[0];

header2.onclick = function () {
    window.location.href = './wodeyemian.html';
}

function setRem() {
    var ui_w = 375;
    // 获取屏幕的宽度
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;

    // 通过js动态改变html根节点字体大小
    var html_ = document.getElementsByTagName('html')[0];
    html_.style.fontSize = (clientWidth / ui_w) * 10 + 'px';
}
// window.onresize 浏览器被重置大小执行事件
window.onresize = setRem;

// 点击友情链接换颜色
var d = document.getElementsByClassName('d')[0].children;
var d1 = document.getElementsByClassName('d1')[0];
var d2 = document.getElementsByClassName('d2')[0];
touch.on(d[0], 'tap', function () {
    d[0].style.borderBottom = '1px solid #FF8A00';
    d[0].style.color = '#FF8A00';
    d[1].style.borderBottom = 'none'
    d[1].style.color = '#666666';
    d1.style.display = 'block';
    d2.style.display = 'none';

})

touch.on(d[1], 'tap', function () {
    d[1].style.borderBottom = '1px solid #FF8A00';
    d[1].style.color = '#FF8A00';
    d[0].style.borderBottom = 'none'
    d[0].style.color = '#666666';
    d2.style.display = 'block';
    d1.style.display = 'none';
})



// 点击删除广告
var e_1 = document.getElementsByClassName('e_1')[0];
// console.log(e_1);

touch.on(e_1, 'tap', function () {
    // console.log(e_1.parentNode);
    var f = document.getElementsByClassName('f')[0];
    (e_1.parentNode).remove(e_1.parentNode);
    f.style.display = 'none';
})
