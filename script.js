const jsonData = require('./food.json');

let result;

function getAllFoodItems(data) {
    return data.map((item) => {
        return item.foodname;
    });
}

function getItemshavingCategory(data, category) {
    if (!data || !Array.isArray(data)) {
        console.log('Data is invalid!');
        return [];
    }

    return data
        .filter((item) => item.category === category && item.foodname)
        .map((item) => item.foodname);
}

function getItemsGreaterThanGivenCalories(data, calories) {
    return data.filter((item) => item.calorie > calories);
}

function getItemsLessThanGivenCalories(data, calories) {
    return data.filter((item) => item.calorie < calories);
}

function getItemsHighestToLowestProtein(data) {
    return data.sort((item1, item2) => item2.protiens - item1.protiens);
}

function getItemsLowestToHighestCab(data) {
    return data.sort((item1, item2) => item1.cab - item2.cab);
}

result = getAllFoodItems(jsonData);
console.log('All food items:', result);
console.log('**********************');

result = getItemshavingCategory(jsonData, 'Vegetable');
console.log('Items having category vegetable:', result);
console.log('**********************');

result = getItemshavingCategory(jsonData, 'Fruit');
console.log('Items having category fruit:', result);
console.log('**********************');

result = getItemshavingCategory(jsonData, 'Protein');
console.log('Items having category protein:', result);
console.log('**********************');

result = getItemshavingCategory(jsonData, 'Nuts');
console.log('Items having category nuts:', result);
console.log('**********************');

result = getItemshavingCategory(jsonData, 'Grain');
console.log('Items having category Grain:', result);
console.log('**********************');

result = getItemshavingCategory(jsonData, 'Dairy');
console.log('Items having category dairy:', result);
console.log('**********************');

result = getItemsGreaterThanGivenCalories(jsonData, 100);
console.log('Items greater than 100 calories:', result);
console.log('**********************');

result = getItemsLessThanGivenCalories(jsonData, 100);
console.log('Items less than 100 calories:', result);
console.log('**********************');

result = getItemsHighestToLowestProtein(jsonData);
console.log('Items having highest protein to lowest content:', result);
console.log('**********************');

result = getItemsLowestToHighestCab(jsonData);
console.log('Items having lowest Cab to highest:', result);
console.log('**********************');
