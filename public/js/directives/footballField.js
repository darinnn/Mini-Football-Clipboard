/**
 * Created by darin on 5/16/2015.
 */
app.directive('footballField',function(){
    return{
        restrict: 'E',
        templateUrl: '../../templates/football-field.html',
        replace: true,
        link: function (scope, element, attr) {
            setTimeout(function(){
                $('.draggableArea').width($('.imgField').width() - $('.playerWrapper').width());
                $('.draggableArea').css({left: $('.imgField').position().left});
                $(window).on('resize', function () {
                    $('.draggableArea').width($('.imgField').width() - $('.playerWrapper').width());
                    $('.draggableArea').css({left: $('.imgField').position().left});
                });
            },100)
        }
    }
});
