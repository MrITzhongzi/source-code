/**
 * Created by lhw on 2017/5/24.
 */

(function () {
    var totalH = $('.l-home .l-home-r').height() - 30;
    var sliderUl = $('.l-home .l-home-r ul.l-pub-content').height();
    var sliderLi = $('.l-home .l-home-r ul.l-pub-content li').height();
    /*如果ul的高度大于div的高度，则内容上下滚动*/
    if (sliderUl > totalH) {
        setInterval(function () {
            $('.l-home .l-home-r ul.l-pub-content').animate({
                top: 30 - (sliderUl - totalH) + 'px'
            },2000,'swing',function () {
                $('.l-home .l-home-r ul.l-pub-content').css('top','30px');
            });
        },2000);
    }
})();