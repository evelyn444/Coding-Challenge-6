// Task 1: Create an Employees Array of Employee Objects

const employees = [
      { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
      { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
      { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
     { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
    ]; // sample data array

// Task 2: Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employee) {
    console.log(`Employee: ${employee.name}`);
    employee.shifts.forEach(shift => {console.log (`Day: ${shift.day}, Hours: ${shift.hours}`);
});
}
employees.forEach(employee => {
    displayEmployeeShifts (employee);
}); // displays employee information and shifts

//Task 3: Create a Function to Assign a New Shift
function assignShift (employeeName, day, hours){
    const employee = employees.find (emp => emp.name === employeeName); //find employee
    if (employee){
        const shiftAlready = employee.shifts.find (shift => shift.day === day);
        if (shiftAlready) {
            console.log (`Error ${employeeName} already has a shift that day`); // error for shift already on that day
        } else {
            employee.shifts.push({ day, hours});
            console.log(`Shift Assigned for ${employeeName} on ${day} for ${hours} hours`) // adding a new shift
        }
    }
}
console.log ("Assigning shift for:");
assignShift('John', 'Tuesday', 6);

//Task 4: Create a Function to Calculate Total Hours Worked

function calculateTotalHours (name){
    const employee = employees.find(employ => employ.name === employee);


    if (employee){
        let totalHours = employee.shifts.reduce((total, shift) => total + shift.hours, 0);
        console.log (`${employee} has worked ${totalHours}`);
        return totalHours;
    }
}
calculateTotalHours('John');

