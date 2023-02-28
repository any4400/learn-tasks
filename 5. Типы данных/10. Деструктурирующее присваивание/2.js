// У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

//Решение:

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 300
  };

function topSalary(salaries) {

    let max = 0;
    let maxEmployee = null;
  
    for(let [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxEmployee = name;
      }
    }
  
    return maxEmployee;
  }

  alert(topSalary(salaries));