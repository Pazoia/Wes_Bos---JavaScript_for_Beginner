console.log("Working with Arrays - Callback Methods and Function Generation");

/* eslint-disable */
const toppings = [
    "Mushrooms ",
    "Tomatoes",
    "Eggs",
    "Chili",
    "Lettuce",
    "Avocado",
    "Chiles",
    "Bacon",
    "Pickles",
    "Onions",
    "Cheese",
];

const buns = ["egg", "wonder", "brioche"];

const meats = {
    beyond: 10,
    beef: 5,
    pork: 7,
};

const prices = {
    hotDog: 453,
    burger: 765,
    sausage: 634,
    corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
    { comment: "Love the burgs", rating: 4 },
    { comment: "Horrible Service", rating: 2 },
    { comment: "Smoothies are great, liked the burger too", rating: 5 },
    { comment: "Ambiance needs work", rating: 3 },
    { comment: "I DONT LIKE BURGERS", rating: 1 },
];

/*
    Callback Methods
*/
console.group("Callback Methods");
    // find the first rating that talks about a burger with find()
    console.groupCollapsed(".find()");
        /* 
        The functions below are very tight to the word being searched
        making them not very flexible.
        */

        function findBurgRating(singleFeedback) {
            return singleFeedback.comment.includes("burg");
        }

        function findSmoothieRating(singleFeedback) {
            return singleFeedback.comment.includes("Smoothie");
        }

        const burgRating = feedback.find(findBurgRating);
        const SmoothieRating = feedback.find(findSmoothieRating);

        /* 
        Creating a function that will use the given words to 
        search for.
        */

        function findByWord(word) {
            return function (singleFeedback) {
                return singleFeedback.comment.toLowerCase().includes(word);
            }
        }

        const burgRating2 = feedback.find(findByWord("burg"));
        const smoothieRating2 = feedback.find(findByWord("Smoothie"));
        const serviceRating2 = feedback.find(findByWord("Service"));

        console.log(burgRating2);
        console.log(smoothieRating2);
        console.log(serviceRating2);
    console.groupEnd(".find()");

    // find all ratings that are above 2 with filter()
    console.groupCollapsed(".filter(min rating)");
        /*
            Implicit Return
        */
        const goodReviews1 = feedback.filter(singleFeedback => singleFeedback.rating >= 2);
        console.table(goodReviews1);
        /*
            More flexible way of doing it
        */
        function filterByMinRating(minRating) {
            return function(singleFeedback) {
                return singleFeedback.rating >= minRating;
            }
        }
        const goodReviews2 = feedback.filter(filterByMinRating(2));
        console.table(goodReviews2);
    console.groupEnd(".filter(min rating)");

    // find all ratings that talk about a burger with filter()
    console.groupCollapsed(".filter(all ratings with burguer)");
        const feedbackAboutBurguer = feedback.filter(findByWord("burg"));
        console.table(feedbackAboutBurguer);
    console.groupEnd(".filter(all ratings with burguer)");

    // Remove the one star rating however you like!
    console.groupCollapsed("Removing ratings of 1");
        const legitRatings = feedback.filter(single => single.rating !== 1);
        console.table(legitRatings);
    console.groupEnd("Removing ratings of 1");

    // check if there is at least 5 of one type of meat with some()
    console.groupCollapsed(".some()");
        const isThereEnoughOfAtLeastOneMeat = Object.values(meats).some(meatValue => meatValue >= 5);
        console.log(isThereEnoughOfAtLeastOneMeat);
    console.groupEnd(".some()");

    // make sure we have at least 3 of every meat with every()
    console.groupCollapsed(".every()");
        const isThereEnoughOfMeats = Object.values(meats).every(meatValue => meatValue >= 3);
        console.log(isThereEnoughOfMeats);
    console.groupEnd(".every()");

    // sort the toppings alphabetically with sort()
    console.groupCollapsed(".sort(toppings)");
        const numbers = [1, 2, 100, 3, 200, 400, 155];
        console.log("Unsorted array:");
        console.log(numbers);
        const numbersSorted = numbers.sort((a, b) => a - b);
        console.log("Sorted array:");
        console.log(numbersSorted);

        console.log(toppings.sort());
    console.groupEnd(".sort(toppings)");

    // sort the order totals from most expensive to least with .sort()
    console.groupCollapsed(".sort(order totals)");
        function numbersSort(a, b) {
            return a - b;
        }
        const orderTotalsSorted = orderTotals.sort(numbersSort);
        console.log(orderTotalsSorted);
    console.groupEnd(".sort(order totals)");

    // Sort the prices with sort()
    console.groupCollapsed(".sort(prices object)");
        const productsSortedByPrice = Object.entries(prices).sort(function(a, b) {
            const aPrice = a[1];
            const bPrice = b[1];
            return aPrice - bPrice;
        });
        console.table(Object.fromEntries(productsSortedByPrice));
    console.groupEnd(".sort(prices object)");
console.groupEnd("Callback Methods");
/*
Looping Methods (next)
*/