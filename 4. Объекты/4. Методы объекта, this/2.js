// Создайте калькулятор
// важность: 5
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// Решение:

let calculator = {
    read () {
        this.a =+prompt ('Введите первое значение','');
        this.b =+prompt ('Введите второе значение','');
    },
    sum () {
        return this.a + this.b;
    },
    mul () {
        return this.a * this.b;
    }
  };
  
calculator.read();
alert (calculator.sum());
alert(calculator.mul());
