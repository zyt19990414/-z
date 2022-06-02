// var top = document.getElementsByClassName('active')
// var main = document.getElementsByClassName('main')[0]
// top.onclick = function () {
//     main.style.display = 'block';
//     main.style.position = 'fixed';
//     main.style.top = 0;

// }
var area = document.getElementById('area')
var one = document.getElementsByClassName('one')[0]
var mask = document.getElementsByClassName('mask')[0]
var area_ = document.getElementById('area_')
var price_01 = document.getElementById('price_01')
var house_01 = document.getElementById('house_01')
var area_01 = document.getElementById('area_01')
var more_01 = document.getElementById('more_01')
area_.onclick = function () {
    one.style.display = 'block';
    mask.style.display = 'block';
}
area.onclick = function () {
    one.style.display = 'none';
    mask.style.display = 'none';
}
mask.onclick = function () {
    mask.style.display = 'none';
    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none'
}
price_01.onclick = function () {
    one.style.display = 'none'
    two.style.display = 'block'
    three.style.display = 'none'
    mask.style.display = 'block'
}
house_01.onclick = function () {
    three.style.display = 'block'
    one.style.display = 'none'
    two.style.display = 'none'
    mask.style.display = 'block'
}
area_01.onclick = function () {
    one.style.display = 'block'
    two.style.display = 'none'
    three.style.display = 'none'
    mask.style.display = 'block'
}
more_01.onclick = function () {
    one.style.display = 'none'
    two.style.display = 'none'
    three.style.display = 'none'
    four.style.display = 'block'
    mask.style.display = 'none'
}
var price = document.getElementById('price')
var price_ = document.getElementById('price_')
var two = document.getElementsByClassName('two')[0]
var area_02 = document.getElementById('area_02')
var house_02 = document.getElementById('house_02')
var price_02 = document.getElementById('price_02')
var more_02 = document.getElementById('more_02')
price_.onclick = function () {
    two.style.display = 'block'
    mask.style.display = 'block'
}
price.onclick = function () {
    two.style.display = 'none'
    mask.style.display = 'none'
}
area_02.onclick = function () {
    two.style.display = 'none'
    one.style.display = 'block'
    three.style.display = 'none'
    four.style.display = 'none'
    mask.style.display = 'block'
}
house_02.onclick = function () {
    one.style.display = 'none'
    two.style.display = 'none'
    three.style.display = 'block'
    four.style.display = 'none'
    mask.style.display = 'block'
}
more_02.onclick = function () {
    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none'
    four.style.display = 'block';
    mask.style.display = 'blcok';
}
var house = document.getElementById('house')
var three = document.getElementsByClassName('three')[0]
var house_ = document.getElementById('house_')
var area_03 = document.getElementById('area_03')
var price_03 = document.getElementById('price_03')
var more_03 = document.getElementById('more_03')
house_.onclick = function () {
    three.style.display = 'block'
    mask.style.display = 'block'
}
house.onclick = function () {
    three.style.display = 'none'
    mask.style.display = 'none'
}
area_03.onclick = function () {
    three.style.display = 'none'
    two.style.display = 'none'
    one.style.display = 'block'
    four.style.display = 'none'
    mask.style.display = 'block'
}
price_03.onclick = function () {
    three.style.display = 'none'
    two.style.display = 'block'
    one.style.display = 'none'
    four.style.display = 'none'
    mask.style.display = 'block'
}
more_03.onclick = function () {
    one.style.display = 'none'
    two.style.display = 'none'
    three.style.display = 'none'
    four.style.display = 'block'
    mask.style.display = 'block'
}
var more = document.getElementById('more')
var four = document.getElementsByClassName('four')[0]
var area_04 = document.getElementById('area_04')
var price_04 = document.getElementById('price_04')
var house_04 = document.getElementById('house_04')
var more_04 = document.getElementById('more_04')
var more_ = document.getElementById('more_')
// console.log(area_04);
more_.onclick = function () {
    four.style.display = 'block';
    mask.style.display = 'block'
}
more.onclick = function () {
    four.style.display = 'none';
    mask.style.display = 'none';
}
area_04.onclick = function () {
    one.style.display = 'block';
    two.style.display = 'none';
    three.style.display = 'none'
    four.style.display = 'none';
    mask.style.display = 'blcok';
}
price_04.onclick = function () {
    one.style.display = 'none';
    two.style.display = 'block';
    three.style.display = 'none'
    four.style.display = 'none';
    mask.style.display = 'blcok';
}
house_04.onclick = function () {
    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'block';
    four.style.display = 'none';
    mask.style.display = 'blcok';
}