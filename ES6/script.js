// --------------------------------------------------------------------------
// ----------------------------- Taks 1--------------------------------------
// --------------------------------------------------------------------------
let IIFE = document.querySelector(".IIFE");
IIFE.onclick = (num1, num2) => {
    num1 = prompt("Enter The First NUM.");
    num2 = prompt("Enter The Second NUM.");
    return alert(`The Sum Of Two Number = ${Number(num1) + Number(num2)}`);
};

// --------------------------------------------------------------------------
// ----------------------------- Taks 2--------------------------------------
// --------------------------------------------------------------------------

let arrayDiv = document.querySelector(".array");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let p = document.createElement("p");
p.textContent = `The array that we'll Work on it [${arr}]`;
arrayDiv.appendChild(p);

for (i in arr) {
    document.body.appendChild(document.createElement("br"));

    arrayDiv.appendChild(document.createTextNode(arr[i]));
}
// for (i of arr) {
//     document.body.appendChild(document.createElement("br"));

//     arrayDiv.appendChild(document.createTextNode(arr[i]));
// }

// --------------------------------------------------------------------------
// ----------------------------- Taks 3--------------------------------------
// --------------------------------------------------------------------------

let array = ["HTML", "CSS", "JS", "Reactjs", "Express"];
let [...array2] = array;
console.log(`Result of array usingspread operator ${array2}`);
console.log(array2);
// --------------------------------------------------------------------------
// ----------------------------- Taks 4--------------------------------------
// --------------------------------------------------------------------------

class student {
    constructor(
        std_name = "Mohamed Ramadan",
        university = "Benha",
        faculty = "Computer and AI",
        final_grade = "3.16"
    ) {
        this.std_name = std_name;
        this.university = university;
        this.faculty = faculty;
        this.final_grade = final_grade;
    }

    display() {
        console.log(
            `${this.std_name} is a student in the faculty of ${this.faculty} at ${this.university} with a final grade of ${this.final_grade}`
        );
    }
}

let std = new student();
std.display();
