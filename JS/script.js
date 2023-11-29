

document.addEventListener('DOMContentLoaded', function () {
    // Array to store student data
    let studentList = [];

    // Form submission event
    document.getElementById('student-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get input values
        let firstName = document.getElementById('firstname').value;
        let lastName = document.getElementById('lastname').value;
        let rollNo = document.getElementById('rollno').value;

        // Validate input
        if (firstName && lastName && rollNo) {
            // Create a new student object
            let newStudent = {
                firstName: firstName,
                lastName: lastName,
                rollNo: rollNo
            };

            // Add the new student to the list
            studentList.push(newStudent);

            // Update the table
            updateTable();

            // Clear the form
            clearForm();
        } else {
            alert('Please enter all details.');
        }
    });

    // Function to update the table with student data
    function updateTable() {
        let tableBody = document.querySelector('.student-list');

        // Clear existing rows
        tableBody.innerHTML = '';

        // Add new rows
        studentList.forEach(function (student, index) {
            let row = tableBody.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);

            cell1.innerHTML = student.firstName;
            cell2.innerHTML = student.lastName;
            cell3.innerHTML = student.rollNo;
            cell4.innerHTML = `<a href="#" class="btn-warning edit" onclick="editStudent(${index})">Edit</a>
                               <a href="#" class="btn-danger delete" onclick="deleteStudent(${index})">Delete</a>`;
        });
    }

    // Function to clear the form
    function clearForm() {
        document.getElementById('firstname').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('rollno').value = '';
    }

    // Function to edit a student
    window.editStudent = function (index) {
        let student = studentList[index];
        document.getElementById('firstname').value = student.firstName;
        document.getElementById('lastname').value = student.lastName;
        document.getElementById('rollno').value = student.rollNo;

        // Remove the edited student from the list
        studentList.splice(index, 1);

        // Update the table
        updateTable();
    };

    // Function to delete a student
    window.deleteStudent = function (index) {
        // Remove the deleted student from the list
        studentList.splice(index, 1);

        // Update the table
        updateTable();
    };
});
