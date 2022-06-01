var fenqu1 = document.getElementsByClassName('fenqu1');

var fenqu2 = document.getElementsByClassName('fenqu2');


var a = document.getElementsByClassName('a')[0];

var b = document.getElementsByClassName('b')[0];

var c = document.getElementsByClassName('c')[0];

var g = document.getElementsByClassName('g')[0];

$(function () {
    $(fenqu1).click(function () {
        $(this).css("color", "#FF8A00");
        $(this).children("span").addClass("fenqu3");
        $(this).siblings(fenqu1).css("color", "#666666")
        $(this).siblings(fenqu1).children("span").removeClass("fenqu3");
        $(this).siblings(fenqu1).children("span").addClass("fenqu2");
    })
})

touch.on(fenqu1[0], 'tap', function () {
    a.style.display = 'block';
    a.style.display = 'flex'
    b.style.display = 'none';
    c.style.display = 'none';
    g.style.display = 'none';
})

touch.on(fenqu1[1], 'tap', function () {
    a.style.display = 'none';
    b.style.display = 'block';
    c.style.display = 'none';
    g.style.display = 'none';
})

touch.on(fenqu1[2], 'tap', function () {
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'block';
    g.style.display = 'none';
})

touch.on(fenqu1[3], 'tap', function () {
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    g.style.display = 'block';
})

a.onclick = function () {
    window.event ? window.event.cancelBubble = true : window.stopPropagation();
    // stopPropagation()
}

b.onclick = function () {
    window.event ? window.event.cancelBubble = true : window.stopPropagation();
    // stopPropagation()
}

c.onclick = function () {
    window.event ? window.event.cancelBubble = true : window.stopPropagation();
    // stopPropagation()
}

g.onclick = function () {
    window.event ? window.event.cancelBubble = true : window.stopPropagation();
    // stopPropagation()
}
window.onclick = function () {
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    g.style.display = 'none';
}

