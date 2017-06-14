/**
 * Created by lhw on 2017/5/24.
 */
(function () {
    var simbleTimer = null;
    var simble = document.getElementById("simble");
    var simbleScreen = simble.children[0];
    var simbleUl = simbleScreen.children[0];
    var simbleUlLis = simbleUl.children;
    var ol = simbleScreen.children[1];
    var simbleArr = document.getElementById("simbleArr");
    var simbleLeft = simbleArr.children[0];
    var simbleRight = simbleArr.children[1];
    var imgWidth = simbleScreen.offsetWidth;  //获取轮播图片宽度

    //第一步：动态生成元素
    for (var i = 0; i < simbleUlLis.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = i + 1;
        ol.appendChild(li);
    }
    var olLis = ol.children;
    olLis[0].className = "current";

    //补齐最后一张图片
    var firstPic = simbleUlLis[0].cloneNode(true);
    simbleUl.appendChild(firstPic);

    //设置小按钮的鼠标经过效果
    for (var i = 0; i < olLis.length; i++) {
        olLis[i].index = i;
        olLis[i].onmousemove = function () {
            //排他  当前高亮
            for (var i = 0; i < olLis.length; i++) {
                olLis[i].className = "";
            }
            this.className = "current";

            var target = -this.index * imgWidth;
            animate(simbleUl, target);

            //鼠标经过小方块的时候把控制图片的pic 和square 也切换到该索引对应的图.解决 小方块的鼠标已离开事件的图片  跳动bug
            pic = this.index;
            square = this.index;
        };
    }
    //设置鼠标经过左右按键消失显现
    simble.onmouseover = function () {
        simbleArr.style.display = "block";
        clearInterval(simbleTimer);
    };
    simble.onmouseout = function () {
        simbleArr.style.display = "none";
        simbleTimer = setInterval(function(){
            simbleRight.onclick();
        },2000);
    };
    //添加左右按键
    var pic = 0;
    var square = 0;
    simbleRight.onclick = function () {
        //设置图片切换
        if (pic < simbleUlLis.length - 1) {
            pic++;
        } else {
            pic = 0;
            simbleUl.style.left = 0;
            pic++;                          //需要看？？？？
        }
        var target = -pic * imgWidth;
        animate(simbleUl, target);


        //图片切换时小方块
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        if (square < olLis.length-1) {
            square++;
        }else {
            square = 0;
        }
        olLis[square].className = "current";
    };

    simbleLeft.onclick = function () {
        //设置图片切换
        if (pic >0) {
            pic--;
        } else {
            pic = simbleUlLis.length-1;
            simbleUl.style.left =-(simbleUlLis.length-1)*imgWidth + "px";
            pic--;                          //需要看？？？？
        }
        var target = -pic * imgWidth;
        animate(simbleUl, target);


        //图片切换时小方块
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        if (square > 0) {
            square--;
        }else {
            square = olLis.length-1;
        }
        olLis[square].className = "current";
    };

    simbleTimer = setInterval(function(){
        simbleRight.onclick();
    },2000);

    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = 15;
            step = target > leader ? step : -step;
            if (Math.abs(leader - target) >= Math.abs(step)) {
                leader = leader + step;
                obj.style.left = leader + "px";
            } else {
                clearInterval(obj.timer);
                obj.style.left = target + "px";
            }
        }, 35);
    }
})();
