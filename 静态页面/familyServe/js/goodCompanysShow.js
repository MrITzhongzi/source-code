/**
 * Created by lhw on 2017/5/24.
 */
var timer = null;
var box = document.getElementById("box");
var screen = box.children[0];
var ul = screen.children[0];
var ulLis = ul.children;
var arr = document.getElementById("arr");
var left = arr.children[0];
var right = arr.children[1];
var liWidth = screen.offsetWidth;  //获取轮播图片宽度


//补齐最后一张图片
var firstPic = ulLis[0].cloneNode(true);
ul.appendChild(firstPic);


//设置鼠标经过左右按键消失显现
box.onmouseover = function () {
    clearInterval(timer);
};
box.onmouseout = function () {
    timer = setInterval(function(){
        right.onclick();
    },3000);
};
//添加左右按键
var pic = 0;
right.onclick = function () {
    //设置图片切换
    if (pic < ulLis.length - 1) {
        pic++;
    } else {
        pic = 0;
        ul.style.left = 0;
        pic++;                          //需要看？？？？
    }
    var target = -pic * liWidth;
    animate(ul, target);
};

left.onclick = function () {
    //设置图片切换
    if (pic >0) {
        pic--;
    } else {
        pic = ulLis.length-1;
        ul.style.left =-(ulLis.length-1)*liWidth + "px";
        pic--;                          //需要看？？？？
    }
    var target = -pic * liWidth;
    animate(ul, target);

};

timer = setInterval(function(){
    right.onclick();
},3000);

function animate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 10;
        step = target > leader ? step : -step;
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            clearInterval(obj.timer);
            obj.style.left = target + "px";
        }
    }, 15);
}