
// BUDGET CONTROLLER
var budgetController = (function(){

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }; 

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }; 


    var allExpenses = [];
    var allIncomes = [];
    var totalExpenses = 0;

    var data = {
        allItem: {
            exp: [], 
            inc: []
        }, 
        totals: {
            exp: 0, 
            inc: 0
        }
    }
   

})();       // the end of budgetController



// UI CONTROLLER
var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type', 
        inputDescription: '.add__description', 
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    // Some Code
    return {
        getinput: function() {
            return {
                // read the selector option : inc or exp
                type: document.querySelector(DOMstrings.inputType).value, 
                description: document.querySelector(DOMstrings.inputDescription).value, 
                value: document.querySelector(DOMstrings.inputValue).value
            };

        }, 
        getDOMstrings: function() {
            return DOMstrings;
        }
    };


})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
    // Some Code 
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        // document for Event - https://developer.mozilla.org/en-US/docs/Web/Events
        document.addEventListener('keypress', function(event){
            if (event.keyCode === 13 || event.which === 13) {
                // console.log('ENTER was pressed.');
                ctrlAddItem();

            }

        });

    };

    

    var ctrlAddItem = function () {
        // 1. Get the field input data
        var input = UIController.getinput();
        // console.log(input);              // TEST 

        // 2. Add the item to the budget controller


        // 3. Add the item to the UI


        // 4. Calcurate the budget


        // 5. Display the budget on the UI

        // console.log('It works.');    // TEST

    };

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    };


})(budgetController, UIController);



controller.init();