let employees = [];

function addEmployee(event) {
  event.preventDefault(); // Prevent form submission

  const nameInput = document.getElementById("name");
  const professionInput = document.getElementById("profession");
  const ageInput = document.getElementById("age");

  // Check if all required fields are filled
  if (!nameInput.value || !professionInput.value || !ageInput.value) {
    showMessage("Please fill in all the required fields.", "error");
    return;
  }

  const employee = {
    id: employees.length + 1,
    name: nameInput.value,
    profession: professionInput.value,
    age: parseInt(ageInput.value)
  };

  employees.push(employee);
  renderEmployees();
  showMessage("Employee added successfully.", "success");

  // Reset form fields
  nameInput.value = "";
  professionInput.value = "";
  ageInput.value = "";
}

function renderEmployees() {
  const employeeList = document.getElementById("employeeList");
  employeeList.innerHTML = ""; // Clear previous employee data

  employees.forEach(employee => {
    const employeeDiv = document.createElement("div");
    employeeDiv.innerHTML = `ID: ${employee.id}, Name: ${employee.name}, Profession: ${employee.profession}, Age: ${employee.age}`;
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteEmployee(employee.id));
    
    employeeDiv.appendChild(deleteButton);
    employeeList.appendChild(employeeDiv);
  });
}

function deleteEmployee(employeeId) {
  employees = employees.filter(employee => employee.id !== employeeId);
  renderEmployees();
}

function showMessage(message, className) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  messageDiv.classList.add(className);
  document.body.appendChild(messageDiv);
  
  // Remove message after 3 seconds
  setTimeout(() => {
    document.body.removeChild(messageDiv);
  }, 3000);
}

const form = document.getElementById("employeeForm");
form.addEventListener("submit", addEmployee);
