app.directive('ngStateful',function(){
   'use strict';

    return {
      restrict: 'A',
        link: function link(scope, element, attrs){
            element.bind('click',function(){
               scope.$apply(function(){
                   if(!element.hasClass(attrs.ngStateful)){
                       element.addClass(attrs.ngStateful);
                   }else{
                       element.removeClass(attrs.ngStateful);

                   }
               })
            });
        }
    };
});
