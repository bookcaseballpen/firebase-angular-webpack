export default {
    bindings:{
        data: '=?'
    },
    template: "<input type='text' ng-model='$ctrl.data' /><p>{{$ctrl.data}}</p>",
    controller: function($scope, $element, $attrs) {
        var ctrl = this;
        this.data = "please type something";
    }
};
