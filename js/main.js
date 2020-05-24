/*-------CONSTANTS--------*/ 
const fruitArray = ['apple', 'banana', 'pear', 'grapes', 'blueberry', 'peach', 'honewydew', 'strawberries', 'orange'];
const vegArray = ['kale', 'potato', 'onion', 'pepper', 'tomato', 'squash', 'carrot', 'celery', 'beet', 'broccoli', 'spinach', 'zucchini' ];
const snackArray = ['popcorn', 'chocolate', 'candy', 'pretzel', 'granola', 'chips', 'muffin', 'biscuit' ];
// const animalArray = ['hamster', 'zebra', 'hippopotamus', 'leopard', 'panda', 'whale', 'monkey', 'giraffe', 'kangaroo'];
const foodDishArray = ['perogies', 'lasagna', 'pho', 'poutine', 'sushi', 'souvlaki', 'pizza', 'kebab', 'falafel', 'burger'];
// const cityArray = ['Dublin', 'Montreal', 'Berlin', 'Sydney', 'Dallas', 'Kyoto', 'Athens', 'Havana', 'Lisbon', 'Seoul'];
// const celebrityArray = ['Chris Pratt', 'Kim Kardashian', 'Britney Spears', 'Tom Hanks', 'Usher', 'The Rock', 'Brad Pitt', 'Leonardo DiCaprio'];
// const companyBrandArray = ['Amazon', 'Nike', 'McDonalds', 'Pepsi', 'Microsoft', 'Adidas', 'Doritos', 'Apple', 'Samsung', 'Loreal',];


/*-------APP'S STATE (VARIABLES)--------*/ 


/*-------CACHED ELEMENT REFERENCES--------*/ 


/*-------EVENT LISTENERS--------*/ 

//user chooses category
//user clicks on letters
//user clicks on reset button

/*-------FUNCTIONS--------*/ 

function selectCategory() {
    if (//user clicks animal) {
        fruitArray[Math.floor(Math.random() * fruitArray.length)];
    } else if (//user clicks food) {
        vegArray[Math.floor(Math.random() * vegArray.length)];
    } else if (//user clicks city) {
        snackArray[Math.floor(Math.random() * snackArray.length)];
    } else (//user clicks company) {
        foodDishArray[Math.floor(Math.random() * foodDishArray.length)];
    }
}

//reset the game
//user chooses letter --> if right: add it to all underscores VS if wrong: tell user
//update progress: how many are tries remaining, how many have they got, 
//
