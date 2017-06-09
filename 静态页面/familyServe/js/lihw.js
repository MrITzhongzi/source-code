
$(document).ready(function () {
    /*
     * 给index页面的公共内容中的li标签  增加清除浮动的类
     * */
    $('.l-pub-content li').addClass('clearfix');

    /*家庭课堂右方切换页及效*/

    $('.l-home-m .l-pub-title ul li a').click(function ($e) {
        $e.preventDefault();
        $(this).css('color','#fe0000');
        $(this).parent().siblings().find('a').css('color','#666');
    });
});
