// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "Henry",
    lastName: "Johnson",
    age: 20,
    location: "Abuja",
  };
  
  const student2: Student = {
    firstName: "Henry",
    lastName: "Smith",
    age: 22,
    location: "Lagos",
  };
  
  // Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // Render the table
  function renderTable(students: Student[]): void {
    // Create table element
    const table = document.createElement("table");
    table.border = "1";
  
    // Create table header row
    const headerRow = document.createElement("tr");
    const headers = ["First Name", "Location"];
    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
  
    // Create rows for each student
    students.forEach((student) => {
      const row = document.createElement("tr");
  
      // Add first name
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = student.firstName;
      row.appendChild(firstNameCell);
  
      // Add location
      const locationCell = document.createElement("td");
      locationCell.textContent = student.location;
      row.appendChild(locationCell);
  
      table.appendChild(row);
    });
  
    // Append the table to the DOM
    document.body.appendChild(table);
  }
  
  // Call the function to render the table
  renderTable(studentsList);
  