/**
 * Created by Administrator on 2017/2/5.
 */
/*
$(document).ready(function(){
    alert("ha")
});*/
$(function(){
    $('#dowebok').fullpage({
        sectionsColor:['red','blue','hotpink','#123456','#000'],
        afterLoad:function(anchorLink,index){
            $('.section').removeClass('current');
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current');
            },100);
        }
    });
});