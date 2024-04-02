
/////////////////////////////////////Excersice////////////////////////////////
// Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem("firstName", "Tara");
localStorage.setItem("lastName", "Bell");
localStorage.setItem("age", "26");
localStorage.setItem("country", "United States");
localStorage.setItem("city", "Knoxville");

// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
  firstName: "Tara",
  lastName: "Bell",
  age: 26,
  skills: ["drawing", "writing", "web-development"],
  country: "United States",
  enrolled: true
}

const studentJson = JSON.stringify(student, undefined, 6)
localStorage.setItem("student", studentJson)

// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

