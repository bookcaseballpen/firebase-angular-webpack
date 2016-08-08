export default {
    bindings:{
    },
    template: "<button>{{text}}</button>",
    controller: function($scope, $element, $attrs) {
        $scope.text = $attrs.text;
    }
};
