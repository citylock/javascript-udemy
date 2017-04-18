
// BUDGET CONTROLLER
var budgetController = (function(){
    

})();       // the end of budgetController


// UI CONTROLLER
var UIController = (function(){

    // Some Code

})();


// GLOBAL APP CONTROLLER
var Controller = (function(budgetCtrl, UICtrl){
    // Some Code 
    var ctrlAddItem = function () {
        // 1. Get the field input data

        // 2. Add the item to the budget controller


        // 3. Add the item to the UI


        // 4. Calcurate the budget


        // 5. Display the budget on the UI

        console.log('It works.');

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);


    // document for Event - https://developer.mozilla.org/en-US/docs/Web/Events
    document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13) {
            // console.log('ENTER was pressed.');
            ctrlAddItem();

        }

    });

})(budgetController, UIController);