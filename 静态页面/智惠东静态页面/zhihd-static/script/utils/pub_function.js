var utils = {}

utils.setCss = function (element, styleObj) {
    for (var key in styleObj) {
        element.style[key] = styleObj[key]
    }
}

// 获取浏览器窗口的可视区域的宽度
utils.getViewPortWidth = function () {
    return document.documentElement.clientWidth || document.body.clientWidth;
}

// 获取浏览器窗口的可视区域的高度
utils.getViewPortHeight = function () {
    return document.documentElement.clientHeight || document.body.clientHeight;
}

// 获取浏览器窗口水平滚动条的位置
utils.getScrollLeft = function () {
    return document.documentElement.scrollLeft || document.body.scrollLeft;
}

// 获取浏览器窗口垂直滚动条的位置
utils.getScrollTop = function () {
    return document.documentElement.scrollTop || document.body.scrollTop;
}