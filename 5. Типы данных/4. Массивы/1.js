// Скопирован ли массив?
// важность: 3
// Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?

// Решение:

// alert( fruits.length ) выведет 4, т.к присваивание массива происходит по ссылке, а значит оба массива теперь ссылаются на один и тот же и его длина увеличилась после добавления нового элеммента