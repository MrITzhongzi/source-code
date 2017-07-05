/**
 * Created by Administrator on 2017/1/3.
 */
/**
 * �ܹ��� ���������������Ըı䵽����ֵ(����˻ص���������ִ������������֮���ִ�лص�����)�����͸���ȺͲ㼶
 * @param obj
 * @param json
 * @param fn
 */
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                //opacity ��С��
                var leader = getStyle(obj, k) * 100;//opacity����ҪҲ���ܸ�Ĭ��ֵ
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;//opacityû�е�λ
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//����ǲ㼶��ֱ�����õ�Ŀ��ֵ
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
}



/**
 * ��ȡ����������������ԣ��������ڻ������������Ի�ȡ��
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}

