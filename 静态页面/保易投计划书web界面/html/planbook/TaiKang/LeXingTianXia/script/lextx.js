$(document).ready(function(){
    //显示表格的箭头点击事件
    $('#insureInfo_table_btn').click(function(){
        $('.insureInfo-table').toggle();
        
        if($(this).find('i').is('.icon-xiajiantou')){
            $(this).find('i').removeClass('icon-xiajiantou');
            $(this).find('i').addClass('icon-shangjiantou');
        }else {
            $(this).find('i').removeClass('icon-shangjiantou');
            $(this).find('i').addClass('icon-xiajiantou');
        }
        
    });
});