/**
 * Created by darin on 5/16/2015.
 */
'use strict';
app.directive('footballField',function(){
    return{
        restrict: 'E',
        templateUrl: '../../templates/football-field.html',
        replace: true
    }
});