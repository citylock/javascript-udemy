
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
        allItems: {
            exp: [], 
            inc: []
        }, 
        totals: {
            exp: 0, 
            inc: 0
        }
    }; 

    return {
        addItem: function(type, des, val){

            var newItem, ID;

            // if [1 2 3 4 5], next ID = 6
            // if [1 2 4 6 8], next ID ??? it should be 9
            // ID = last ID + 1 

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            } else {
                ID = 0;
            }
            

            // Create new item based on 'inc' or 'exp' type
            if(type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type==='inc') {
                newItem = new Income(ID, des, val);
            }

            data.allItems[type].push(newItem);
            return newItem;

        },
        testing: function() {
            console.log(data);
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

        var input, newItem;

        // 1. Get the field input data
        input = UIController.getinput();
        // console.log(input);              // TEST 

        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);


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