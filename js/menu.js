layui.use(['jquery', 'element', 'carousel'], function () {
    var $ = layui.jquery
        , element = layui.element
        , carousel = layui.carousel

    //滚动监听
    $(window).scroll(function () {
        var scr = $(document).scrollTop();
        scr > 0 ? $(".nav").addClass('scroll') : $(".nav").removeClass('scroll');
    });


    //导航切换
    var btn = $('.nav').find('.nav-list').children('button')
        , spa = btn.children('span')
        , ul = $('.nav').find('.nav-list').children('.layui-nav');
    btn.on('click', function () {
        if (!$(spa[0]).hasClass('spa1')) {
            spa[0].className = 'spa1';
            spa[1].style.display = 'none';
            spa[2].className = 'spa3';
            $('.nav')[0].style.height = 90 + ul[0].offsetHeight + 'px';
        } else {
            spa[0].className = '';
            spa[1].style.display = 'block';
            spa[2].className = '';
            $('.nav')[0].style.height = 80 + 'px';
        }
    });
});
