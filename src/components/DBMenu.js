const dbMenu = {
    burger: [
        {
            name: 'Mr Donalds Burger', 
            img: '/menu/mr-donalds-burger.png',
            id: 1,
            price: 5.99,
            toppings: ['Bacon', 'Ketchup', 'Cheddar Cheese', 'Pickles', 'Tomato', 'Jalapeño'],
        },
        {
            name: 'Red Burger',
            img: '/menu/red-burger.png',
            id: 2,
            price: 8.99,
            toppings: ['Bacon', 'Red Onion'],
        },
        {
            name: 'Great Great Cheeseburger', 
            img: '/menu/great-great-burger.png',
            id: 3,
            price: 4.99,
            toppings: ['Pineapple', 'Mayonnaise'], 
        },
        {
            name: 'Black&Yellow Burger',
            img: '/menu/black-and-yellow-burger.png',
            id: 4,
            price: 3.49,
        },
        {
            name: 'Doubled Burger',
            img: '/menu/doubled-burger.png',
            id: 5,
            price: 4.99,
            toppings: ['Ketchup', 'Cheddar Cheese'],
        },
        {
            name: 'Sun Burger', // Допустим это McChicken
            img: '/menu/sun-burger.png',
            id: 6,
            price: 3.99,
            toppings: ['Cheddar Cheese', 'Red Onion'], // Необычно, но оставим
        },
    ],
    other: [
        {
            name: 'Soft Drinks',
            img: '/menu/soft-drinks.png',
            id: 1,
            price: 1.99,
            choices: ['Coca-cola', 'Fanta', 'Mirinda', 'Sprite'],
        },
        {
            name: 'Tea',
            img: '/menu/tea.png',
            id: 2,
            price: 1.49,
            choices: ['Black', 'Green'],
        },
        {
            name: 'French Fries',
            img: '/menu/french-fries.png',
            id: 3,
            price: 2.49,
        },
        {
            name: 'Chicken Nuggets',
            img: '/menu/nuggets.png',
            id: 4,
            price: 3.99,
            choices: ['Fillet', 'Wings'],
        },
        {
            name: 'Coffee',
            img: '/menu/coffee.png',
            id: 5,
            price: 1.99,
            choices: ['Espresso', 'Cappuccino'],
        },
        {
            name: 'Matcha Latte', 
            img: '/menu/matcha-latte.png',
            id: 6,
            price: 2.99
        },
    ]
};

export default dbMenu;