'use strict'
var Employee = function(name, employeeNumber, baseSalary, reviewScore){
  this.name = name;
  this.employeeNumber = employeeNumber;
  this.baseSalary = baseSalary;
  this.reviewScore = reviewScore;
};

var EmployeeAltered = function(name, bonusSTI, adjCompensation, bonusTotal){
    this.name = name;
    this.bonusSTI = bonusSTI;
    this.adjCompensation = adjCompensation;
    this.bonusTotal = bonusTotal;
  };

var Atticus = new Employee("Atticus", "2405", "47000", 3);
var Jem = new Employee("Jem", "62347", "63500", 4);
var Boo = new Employee("Boo", "11435", "54000", 3);
var Scout = new Employee("Scout", "6243", "74750", 5);

var array = [Atticus, Jem, Boo, Scout];

var newEl, newText, position;
position = document.getElementById('content');

for(var i = 0; i < array.length; i++){
  var result = calculateSTI(array[i]);
  newEl = document.createElement('li');
  newText = document.createTextNode(result.name + ", " + result.bonusSTI + ", " + result.adjCompensation + ", " + result.bonusTotal);
  newEl.appendChild(newText);
  position.appendChild(newEl);
  console.log(calculateSTI(array[i]));
}

function calculateSTI(employee){
  // var result = '';
  var name = employee.name;
  var employeeNumber = employee.employeeNumber;
  var baseSalary = employee.baseSalary;
  var reviewScore = employee.reviewScore;

  var bonusSTI = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);

  if(bonusSTI > 0.13){
    bonusSTI = 0.13;
  } 

  var name = employee.name;
  var adjCompensation = Math.round(baseSalary * (1.0 + bonusSTI));
  var bonusTotal = Math.round(baseSalary * bonusSTI);
  var result = new EmployeeAltered(name, bonusSTI, adjCompensation, bonusTotal);
  return result;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}