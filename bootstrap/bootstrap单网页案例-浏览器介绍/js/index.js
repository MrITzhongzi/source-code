/**
 * Created by Administrator on 2017/3/24.
 */

$(document).ready(function () {
    /*
     * 调用模态框
     * */
    $('#aAbout').click(function () {
        $('#about').modal($('#aAbout'));
    });

    /*
     * 点解导航中的下拉菜单，切换标签页
     *
     * */

    $('#demo-navbar .dropdown-menu a').click(function () {
        var href = $(this).attr('href');

        $('#tab-list a[href ="'+ href +'"]').tab('show');
    });

});