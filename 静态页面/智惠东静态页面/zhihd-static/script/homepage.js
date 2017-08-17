
(function (window) {

    var homeHeadEle = document.querySelector('.home-head')
    /**
     * 设置页面滑动时，头部渐变
     */
    document.addEventListener('scroll',function (e) {
        var bodyScroll = document.body.scrollTop;
        if(bodyScroll <= 225){
            var bgcPercent = bodyScroll / 225
            homeHeadEle.style.backgroundColor = "rgba(255,0,0,"+ bgcPercent +")"
        }
    })

    //初始化swiper对象
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 2000,//可选选项，自动滑动
        loop: true, //循环方式
        pagination : '.swiper-pagination',  //底部分页器
    })
    //nav 广告 轮播初始化
    var navSwiper = new Swiper('.advertising-container', {
        autoplay: 3000,
        direction : 'vertical',
        loop: true,

    })

}(window))