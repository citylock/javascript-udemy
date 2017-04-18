var budgetController = (function(){
    var x = 23;

    var add = function(a) {
        return x+a;
    }

    // closure.. for public access
    return {
        publicTest: function(b){
            return add(b);
        }
    }
})();       // the end of budgetController

var UIController = (function(){

    // Some Code

})();


var Controller = (function(budgetCtrl, UICtrl){
    // Some Code 
    var z=budgetCtrl.publicTest(5);

    return {
        anotherPublic: function(){
            console.log(z);
        }
    }
})(budgetController, UIController);