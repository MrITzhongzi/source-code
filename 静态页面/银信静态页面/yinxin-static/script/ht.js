var ht = (function ($) {
    "use strict";
    var ip = {}; // 服务地址
    ip.yinxinservice = "http://yiyk.tunnel.qydev.com/yinxin-wx";
    ip.yinxinapi= "http://yiyk.tunnel.qydev.com/yinxin-api";
    ip.yinxinimg = "http://image.qiangdaoapp.com";

    var apicloud = {};
    apicloud.showProgress = function (str) {
        api.showProgress({
            style: 'default',
            animationType: 'fade',
            title: str ? str : "努力加载中",
            text: '',
            modal: true
        });
    };
    apicloud.hideProgress = function () {
        api.hideProgress();
    };

    /*progress常量*/
    var progress = {
        headerTop: '45px'
    };
    progress.show = function (param) {
        //var marginTop = '0px';
        //if (param && param.top) {
        //    marginTop = param.top;
        //}
        //var html = '<div id="nprogress"><div id="nprogress"><div class="bar" role="bar" style="transform: translate3d(-0.748248%, 0px, 0px); transition: all 350ms linear;margin-top: ' + marginTop + ';"></div></div></div>';
        //NProgress.configure({
        //    template: html // template是用来设置动画样式的属性
        //});
        //NProgress.start();
    };

    progress.hide = function () {
        //NProgress.done();
    };

    var storage = {};
    storage.setSessionStorage = function (key, value) {
        var storage = window.sessionStorage;
        if (!key || !value) {
            console.warn('key or value is empty');
        }
        var v = value;
        if (typeof v == 'object') {
            v = JSON.stringify(v);
            v = 'obj-' + v;
        } else {
            v = 'str-' + v;
        }
        if (storage) {
            storage.setItem(key, v);
        }
    };
    storage.getSessionStorage = function (key) {
        var storage = window.sessionStorage;
        if (!key) {
            console.warn('key is empty');
        }
        if (storage) {
            var v = storage.getItem(key);
            if (!v) {
                return;
            }
            if (v.indexOf('obj-') === 0) {
                v = v.slice(4);
                return JSON.parse(v);
            } else if (v.indexOf('str-') === 0) {
                return v.slice(4);
            }
        }
    };
    storage.removeSessionStorage = function (key) {
        var storage = window.sessionStorage;
        if (!key) {
            console.warn('key is empty');
        }
        if (storage) {
            storage.removeItem(key);
        }
    };
    storage.clearSessionStorage = function () {
        var storage = window.sessionStorage;
        if (storage) {
            storage.clear();
        }
    };
    storage.setLocalStorage = function (key, value) {
        var storage = window.localStorage;
        if (!key || !value) {
            console.warn('key or value is empty');
        }
        var v = value;
        if (typeof v == 'object') {
            v = JSON.stringify(v);
            v = 'obj-' + v;
        } else {
            v = 'str-' + v;
        }
        if (storage) {
            storage.setItem(key, v);
        }
    };
    storage.getLocalStorage = function (key) {
        var storage = window.localStorage;
        if (!key) {
            console.warn('key is empty');
        }
        if (storage) {
            var v = storage.getItem(key);
            if (!v) {
                return;
            }
            if (v.indexOf('obj-') === 0) {
                v = v.slice(4);
                return JSON.parse(v);
            } else if (v.indexOf('str-') === 0) {
                return v.slice(4);
            }
        }
    };
    storage.removeLocalStorage = function (key) {
        var storage = window.localStorage;
        if (!key) {
            console.warn('key is empty');
        }
        if (storage) {
            storage.removeItem(key);
        }
    };
    storage.clearLocalStorage = function () {
        var storage = window.localStorage;
        if (storage) {
            storage.clear();
        }
    };
    var message = {};
    message.toast = function (content, param) {
        if (!content) {
            console.error("content is not null!");
            return;
        }
        var def = {
            content: content,
            className: 'toast',
            time:2
        };
        if (param && param.time) {
            def.time = param.time;
        }
        layer.open(def);
    };
    message.alert = function (content, param) {
        if (!content) {
            console.error("content is not null!");
            return;
        }
        var index;
        var def = {
            content: content,
            btn: ['确认'],
            shadeClose: false,
            yes:function(){
                if (param && param.yes) {
                    param.yes();
                }
                layer.close(index);
            }
        };
        if (param && param.btn) {
            def.btn = param.btn;
        }
        index = layer.open(def);
    };
    message.confrim = function (content, param) {
        if (!content) {
            console.error("content is not null!");
            return;
        }
        var index;
        var def = {
            content: content,
            btn: ['确认', '取消'],
            shadeClose: false,
            yes: function () {
                if (param && param.yes) {
                    param.yes();
                }
                layer.close(index);
            },
            no: function () {
                if (param && param.no) {
                    param.no();
                }
                layer.close(index);
            }
        };
        index = layer.open(def);
    };
    message.openLoading = function(){
        var loadingHtml = '<div id="loadingToast" style="display:none;"><div class="weui-mask_transparent"></div><div class="weui-toast"><i class="weui-loading weui-icon_toast"></i><p class="weui-toast__content">数据加载中</p></div></div>';
        $("body").append(loadingHtml);
        if ($('#loadingToast').css('display') != 'none') return;
        $('#loadingToast').fadeIn(100);
    };
    message.closeLoading = function() {
        $('#loadingToast').fadeOut(100);
        setTimeout(function () {
            $('#loadingToast').remove();
        }, 1000);
    };
    var showPic = {};
    showPic.close = function() {
        $('.pop-big-pic').fadeOut(100);
        $("#cont").removeClass('pop-under');
        $("body").scrollTop(window.topValue);
        setTimeout(function () {
            $('.pop-big-pic').remove();
        }, 100);
    };
    var consts={};
    consts.wxDebug = false; // 微信jssdk debug模式
    var wx = {};
    wx.init = function () {
        ht.ajax({
            type: 'POST',
            //url: 'http://yxwx.qiangdaoapp.com/wxjs/getSignature',
            url: 'http://yiyk.tunnel.qydev.com/yinxin-wx/wxjs/getSignature',
            data: {url: window.location.href},
            dataType: 'json',
            success: function (data) {
                if (data.success) {
                    jWeixin.config({
                        debug: consts.wxDebug,
                        appId: data.data.appid,
                        timestamp: data.data.timestamp,
                        nonceStr: data.data.noncestr,
                        signature: data.data.signature,
                        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice', 'onVoicePlayEnd', 'uploadVoice', 'downloadVoice', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'translateVoice', 'getNetworkType', 'openLocation', 'getLocation', 'hideOptionMenu', 'showOptionMenu', 'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem', 'closeWindow', 'scanQRCode', 'chooseWXPay', 'openProductSpecificView', 'addCard', 'chooseCard', 'openCard', 'openWXDeviceLib', 'closeWXDeviceLib', 'getWXDeviceInfos', 'startScanWXDevice', 'stopScanWXDevice', 'connectWXDevice', 'disconnectWXDevice', 'sendDataToWXDevice', 'getWXDeviceTicket', 'onReceiveDataFromWXDevice']
                    })
                }
            },
            error: function () {
            }
        });
        jWeixin.error(function (res) {
        })
    };
    return {
        ip: ip,
        consts:consts,
        wx:wx,
        apicloud: apicloud,
        progress: progress,
        message: message,
        storage: storage,
        showPic: showPic
    };
})(jQuery);

$.fn.extend({
    openPic: function(imgUrl ,func) {
        window.topValue = $(this).scrollTop();
        var bigPicHtml = '<div class="pop-big-pic" >' +
            '<div class="pop-bg" onclick="ht.showPic.close();"></div>' +
            '<img class="absolute-core width-full" src="' + imgUrl + '" onclick="ht.showPic.close();"/>' +
            '<div class="icon icon-delete absolute-center" id="showPicDelete"></div>' +
            '</div>';
        $("body").append(bigPicHtml);
        //$("body").off("click",'#showPicDelete');
        $(".pop-big-pic").on("click",'#showPicDelete',function(){
            func();
            ht.showPic.close();
        });
        if ($('.pop-big-pic').css('display') != 'none') return;
        $('.pop-big-pic').fadeIn(200);
        $("#cont").addClass('pop-under');

        //监听返回。
        var state = {
            title: "title",
            url: "#"
        };
        window.history.pushState(state, "title", "#");

        window.addEventListener("popstate", function(e) {
            if ($(".pop-big-pic").css("display") == 'block') {
                ht.showPic.close();
            }
        }, false);

    }
});

// form2json
(function(root,factory){if(typeof exports!=='undefined'&&typeof module!=='undefined'&&module.exports){module.exports=factory()}else if(typeof define==='function'&&define.amd){define(factory)}else{root.form2json=factory()}}(this,function(){"use strict";function form2json(rootNode,delimiter,skipEmpty,nodeCallback,useIdIfEmptyName,getDisabled){getDisabled=getDisabled?true:false;if(typeof skipEmpty=='undefined'||skipEmpty==null)skipEmpty=true;if(typeof delimiter=='undefined'||delimiter==null)delimiter='.';if(arguments.length<5)useIdIfEmptyName=false;rootNode=typeof rootNode=='string'?document.getElementById(rootNode):rootNode;var formValues=[],currNode,i=0;if(rootNode.constructor==Array||(typeof NodeList!="undefined"&&rootNode.constructor==NodeList)){while(currNode=rootNode[i++]){formValues=formValues.concat(getFormValues(currNode,nodeCallback,useIdIfEmptyName,getDisabled))}}else{formValues=getFormValues(rootNode,nodeCallback,useIdIfEmptyName,getDisabled)}return processNameValues(formValues,skipEmpty,delimiter)}function processNameValues(nameValues,skipEmpty,delimiter){var result={},arrays={},i,j,k,l,value,nameParts,currResult,arrNameFull,arrName,arrIdx,namePart,name,_nameParts;for(i=0;i<nameValues.length;i++){value=nameValues[i].value;if(skipEmpty&&(value===''||value===null))continue;name=nameValues[i].name;_nameParts=name.split(delimiter);nameParts=[];currResult=result;arrNameFull='';for(j=0;j<_nameParts.length;j++){namePart=_nameParts[j].split('][');if(namePart.length>1){for(k=0;k<namePart.length;k++){if(k==0){namePart[k]=namePart[k]+']'}else if(k==namePart.length-1){namePart[k]='['+namePart[k]}else{namePart[k]='['+namePart[k]+']'}arrIdx=namePart[k].match(/([a-z_]+)?\[([a-z_][a-z0-9_]+?)\]/i);if(arrIdx){for(l=1;l<arrIdx.length;l++){if(arrIdx[l])nameParts.push(arrIdx[l])}}else{nameParts.push(namePart[k])}}}else nameParts=nameParts.concat(namePart)}for(j=0;j<nameParts.length;j++){namePart=nameParts[j];if(namePart.indexOf('[]')>-1&&j==nameParts.length-1){arrName=namePart.substr(0,namePart.indexOf('['));arrNameFull+=arrName;if(!currResult[arrName])currResult[arrName]=[];currResult[arrName].push(value)}else if(namePart.indexOf('[')>-1){arrName=namePart.substr(0,namePart.indexOf('['));arrIdx=namePart.replace(/(^([a-z_]+)?\[)|(\]$)/gi,'');arrNameFull+='_'+arrName+'_'+arrIdx;if(!arrays[arrNameFull])arrays[arrNameFull]={};if(arrName!=''&&!currResult[arrName])currResult[arrName]=[];if(j==nameParts.length-1){if(arrName==''){currResult.push(value);arrays[arrNameFull][arrIdx]=currResult[currResult.length-1]}else{currResult[arrName].push(value);arrays[arrNameFull][arrIdx]=currResult[arrName][currResult[arrName].length-1]}}else{if(!arrays[arrNameFull][arrIdx]){if((/^[0-9a-z_]+\[?/i).test(nameParts[j+1]))currResult[arrName].push({});else currResult[arrName].push([]);arrays[arrNameFull][arrIdx]=currResult[arrName][currResult[arrName].length-1]}}currResult=arrays[arrNameFull][arrIdx]}else{arrNameFull+=namePart;if(j<nameParts.length-1){if(!currResult[namePart])currResult[namePart]={};currResult=currResult[namePart]}else{currResult[namePart]=value}}}}return result}function getFormValues(rootNode,nodeCallback,useIdIfEmptyName,getDisabled){var result=extractNodeValues(rootNode,nodeCallback,useIdIfEmptyName,getDisabled);return result.length>0?result:getSubFormValues(rootNode,nodeCallback,useIdIfEmptyName,getDisabled)}function getSubFormValues(rootNode,nodeCallback,useIdIfEmptyName,getDisabled){var result=[],currentNode=rootNode.firstChild;while(currentNode){result=result.concat(extractNodeValues(currentNode,nodeCallback,useIdIfEmptyName,getDisabled));currentNode=currentNode.nextSibling}return result}function extractNodeValues(node,nodeCallback,useIdIfEmptyName,getDisabled){if(node.disabled&&!getDisabled)return[];var callbackResult,fieldValue,result,fieldName=getFieldName(node,useIdIfEmptyName);callbackResult=nodeCallback&&nodeCallback(node);if(callbackResult&&callbackResult.name){result=[callbackResult]}else if(fieldName!=''&&node.nodeName.match(/INPUT|TEXTAREA/i)){fieldValue=getFieldValue(node,getDisabled);if(null===fieldValue){result=[]}else{result=[{name:fieldName,value:fieldValue}]}}else if(fieldName!=''&&node.nodeName.match(/SELECT/i)){fieldValue=getFieldValue(node,getDisabled);result=[{name:fieldName.replace(/\[\]$/,''),value:fieldValue}]}else{result=getSubFormValues(node,nodeCallback,useIdIfEmptyName,getDisabled)}return result}function getFieldName(node,useIdIfEmptyName){if(node.name&&node.name!='')return node.name;else if(useIdIfEmptyName&&node.id&&node.id!='')return node.id;else return''}function getFieldValue(fieldNode,getDisabled){if(fieldNode.disabled&&!getDisabled)return null;switch(fieldNode.nodeName){case'INPUT':case'TEXTAREA':switch(fieldNode.type.toLowerCase()){case'radio':if(fieldNode.checked&&fieldNode.value==="false")return false;case'checkbox':if(fieldNode.checked&&fieldNode.value==="true")return true;if(!fieldNode.checked&&fieldNode.value==="true")return false;if(fieldNode.checked)return fieldNode.value;break;case'button':case'reset':case'submit':case'image':return'';break;default:return fieldNode.value;break}break;case'SELECT':return getSelectedOptionValue(fieldNode);break;default:break}return null}function getSelectedOptionValue(selectNode){var multiple=selectNode.multiple,result=[],options,i,l;if(!multiple)return selectNode.value;for(options=selectNode.getElementsByTagName("option"),i=0,l=options.length;i<l;i++){if(options[i].selected)result.push(options[i].value)}return result}return form2json}));

/*! layer mobile-v1.7 弹层组件移动版 License LGPL http://layer.layui.com/mobile By 贤心 */
;!function(a){"use strict";var b=document,c="querySelectorAll",d="getElementsByClassName",e=function(a){return b[c](a)},f={type:0,shade:!0,shadeClose:!0,fixed:!0,anim:!0},g={extend:function(a){var b=JSON.parse(JSON.stringify(f));for(var c in a)b[c]=a[c];return b},timer:{},end:{}};g.touch=function(a,b){var c;return/Android|iPhone|SymbianOS|Windows Phone|iPad|iPod/.test(navigator.userAgent)?(a.addEventListener("touchmove",function(){c=!0},!1),void a.addEventListener("touchend",function(a){a.preventDefault(),c||b.call(this,a),c=!1},!1)):a.addEventListener("click",function(a){b.call(this,a)},!1)};var h=0,i=["layermbox"],j=function(a){var b=this;b.config=g.extend(a),b.view()};j.prototype.view=function(){var a=this,c=a.config,f=b.createElement("div");a.id=f.id=i[0]+h,f.setAttribute("class",i[0]+" "+i[0]+(c.type||0)),f.setAttribute("index",h);var g=function(){var a="object"==typeof c.title;return c.title?'<h3 style="'+(a?c.title[1]:"")+'">'+(a?c.title[0]:c.title)+'</h3><button class="layermend"></button>':""}(),j=function(){var a,b=(c.btn||[]).length;return 0!==b&&c.btn?(a='<span type="1">'+c.btn[0]+"</span>",2===b&&(a='<span type="0">'+c.btn[1]+"</span>"+a),'<div class="layermbtn">'+a+"</div>"):""}();if(c.fixed||(c.top=c.hasOwnProperty("top")?c.top:100,c.style=c.style||"",c.style+=" top:"+(b.body.scrollTop+c.top)+"px"),2===c.type&&(c.content='<i></i><i class="laymloadtwo"></i><i></i>'),f.innerHTML=(c.shade?"<div "+("string"==typeof c.shade?'style="'+c.shade+'"':"")+' class="laymshade"></div>':"")+'<div class="layermmain" '+(c.fixed?"":'style="position:static;"')+'><div class="section"><div class="layermchild '+(c.className?c.className:"")+" "+(c.type||c.shade?"":"layermborder ")+(c.anim?"layermanim":"")+'" '+(c.style?'style="'+c.style+'"':"")+">"+g+'<div class="layermcont">'+c.content+"</div>"+j+"</div></div></div>",!c.type||2===c.type){var k=b[d](i[0]+c.type),l=k.length;l>=1&&layer.close(k[0].getAttribute("index"))}document.body.appendChild(f);var m=a.elem=e("#"+a.id)[0];c.success&&c.success(m),a.index=h++,a.action(c,m)},j.prototype.action=function(a,b){var c=this;if(a.time&&(g.timer[c.index]=setTimeout(function(){layer.close(c.index)},1e3*a.time)),a.title){var e=b[d]("layermend")[0],f=function(){a.cancel&&a.cancel(),layer.close(c.index)};g.touch(e,f)}var h=function(){var b=this.getAttribute("type");0==b?(a.no&&a.no(),layer.close(c.index)):a.yes?a.yes(c.index):layer.close(c.index)};if(a.btn)for(var i=b[d]("layermbtn")[0].children,j=i.length,k=0;j>k;k++)g.touch(i[k],h);if(a.shade&&a.shadeClose){var l=b[d]("laymshade")[0];g.touch(l,function(){layer.close(c.index,a.end)})}a.end&&(g.end[c.index]=a.end)},a.layer={v:"1.7",index:h,open:function(a){var b=new j(a||{});return b.index},close:function(a){var c=e("#"+i[0]+a)[0];c&&(c.innerHTML="",b.body.removeChild(c),clearTimeout(g.timer[a]),delete g.timer[a],"function"==typeof g.end[a]&&g.end[a](),delete g.end[a])},closeAll:function(){for(var a=b[d](i[0]),c=0,e=a.length;e>c;c++)layer.close(0|a[0].getAttribute("index"))}},"function"==typeof define?define(function(){return layer}):function(){var a=document.scripts,c=a[a.length-1],d=c.src,e=d.substring(0,d.lastIndexOf("/")+1);c.getAttribute("merge")||document.head.appendChild(function(){var a=b.createElement("link");return true,a.type="text/css",a.rel="styleSheet",a.id="layermcss",a}())}()}(window);