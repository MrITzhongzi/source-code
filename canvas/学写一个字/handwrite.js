/**
 * Created by Administrator on 2017/3/9.
 */
var canvasWidth = Math.min(800,$(window).width()-20);//比较当前屏幕和800 大于800取800 ，小于八百的话去较小的值（手机屏幕）
var canvasHeight = canvasWidth;

var strokeColor = 'black';
var isMouseDown = false;
var lastLoc = {x: 0, y: 0};
var lastTimestamp = 0;
var lastLineWidth = -1;

var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

canvas.width = canvasWidth;
canvas.height = canvasHeight;

//设置控制颜色样式适配移动端
//$('#controller').css('width',canvasWidth+'px');
$('#controller').width(canvasWidth);

//绘制田字格
drawGrid();

//清除按钮操作
$('#clear_btn').click(function(){
    context.clearRect(0,0,canvasWidth,canvasHeight);
    drawGrid();
});
//颜色选择
$('.color_btn').click(function(e){
    $('.color_btn').removeClass('color_btn_selected');
    $(this).addClass('color_btn_selected');
    strokeColor = $(this).css('background-color');
});

/**
 * 开始绘制
 * @param point
 */
function beginStroke(point){
    isMouseDown = true;
    lastLoc = windowToCanvas(point.x, point.y);
    lastTimestamp = new Date().getTime();

    console.log('b');
}
/**
 * 结束绘制
 */
function endStroke(){
    isMouseDown = false;
}

function moveStroke(point){
    var curLoc = windowToCanvas(point.x, point.y);
    var curTimestamp = new Date().getTime();
    var s = calcDistance(curLoc, lastLoc);
    var t = curTimestamp - lastTimestamp;

    var lineWidth = calcLineWidth(t, s);

    //draw
    context.beginPath();
    context.moveTo(lastLoc.x, lastLoc.y);
    context.lineTo(curLoc.x, curLoc.y);

    context.strokeStyle = strokeColor;
    context.lineWidth = lineWidth;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.stroke();

    lastLoc = curLoc;
    lastTimestamp = curTimestamp;
    lastLineWidth = lineWidth;
}

canvas.onmousedown = function (e) {
    e.preventDefault();
    beginStroke({x: e.clientX,y: e.clientY});
}
canvas.onmouseup = function (e) {
    e.preventDefault();
   endStroke();
}
canvas.onmouseout = function (e) {
    e.preventDefault();
    endStroke();
}
canvas.onmousemove = function (e) {
    e.preventDefault();
    if (isMouseDown) {
        moveStroke({x:e.clientX, y:e.clientY});
    }
}

//移动端触碰事件
var touch;
canvas.addEventListener('touchstart',function(e){
    e.preventDefault();
     touch = e.touches[0];
    beginStroke({x: touch.pageX,y: touch.pageY});
});
canvas.addEventListener('touchmove',function(e){
    e.preventDefault();
    if (isMouseDown) {
         touch = e.touches[0];
        moveStroke({x: touch.pageX,y: touch.pageY});
    }
});
canvas.addEventListener('touchend',function(e){
    e.preventDefault();
    endStroke();
});



/**
 * 计算线条的宽度
 * @param t
 * @param s
 * @returns {*}
 */
function calcLineWidth(t, s) {
    var maxLineWidth = 30;
    var minLineWidth = 1;
    var maxStrokeV = 10;
    var minStrokeV = 0.1;

    var v = s / t;
    var resultLineWidth;
    if (v <= 0.1) {
        resultLineWidth = maxLineWidth;
    } else if (v >= maxStrokeV) {
        resultLineWidth = minLineWidth;
    } else {
        resultLineWidth = maxLineWidth - (v - minStrokeV) / (maxStrokeV - minStrokeV) * (maxLineWidth - minLineWidth);
    }
    //笔画粗细优化
    if(lastLineWidth == -1){
        return resultLineWidth;
    }
    return lastLineWidth*2/3 + resultLineWidth*1/3;
}

/**
 * 计算华东的距离
 * @param loc1
 * @param loc2
 * @returns {number}
 */
function calcDistance(loc1, loc2) {

    return Math.sqrt((loc1.x-loc2.x)*(loc1.x-loc2.x) + (loc1.y-loc2.y)*(loc1.y-loc2.y));
}

/**
 * 把浏览器坐标转化为canvas坐标
 * @param x
 * @param y
 * @returns {{x: number, y: number}}
 */
function windowToCanvas(x, y) {
    var bbox = canvas.getBoundingClientRect();

    return {
        x: Math.round(x - bbox.left),
        y: Math.round(y - bbox.top)
    };
}
/**
 * 绘制田字格
 */
function drawGrid() {

    context.save();

    context.strokeStyle = 'rgb(230,11,9)';
//绘制 口 子边框
    context.beginPath();
    context.moveTo(3, 3);
    context.lineTo(canvasWidth - 3, 3);
    context.lineTo(canvasWidth - 3, canvasHeight - 3);
    context.lineTo(3, canvasHeight - 3);
    context.closePath();

    context.lineWidth = 6;
    context.stroke();

//绘制田字格
    context.setLineDash([5]);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(canvasWidth, canvasHeight);

    context.moveTo(canvasWidth, 0);
    context.lineTo(0, canvasHeight);

    context.moveTo(0, canvasHeight / 2);
    context.lineTo(canvasWidth, canvasHeight / 2);

    context.moveTo(canvasWidth / 2, 0);
    context.lineTo(canvasWidth / 2, canvasHeight);

    context.lineWidth = 1;
    context.stroke();

    context.restore();
}














