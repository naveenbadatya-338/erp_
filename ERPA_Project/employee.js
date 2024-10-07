// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPPkzDt3cY3DT-sodGvu7uZy_is0GzrZc",
    authDomain: "erp-employees-84883.firebaseapp.com",
    databaseURL: "https://erp-employees-84883-default-rtdb.firebaseio.com",
    projectId: "erp-employees-84883",
    storageBucket: "erp-employees-84883.appspot.com",
    messagingSenderId: "1076821963095",
    appId: "1:1076821963095:web:8ae8d1f6ae4ba388894e12",
    measurementId: "G-DK1B84SPWM"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Toggle employee details
document.getElementById('toggle-employees').addEventListener('click', () => {
    toggleEmployeeDetails('admin'); // Change to 'developer', 'dbadmin', or 'awsengineer'
});

// Function to toggle employee details
function toggleEmployeeDetails(role) {
    const employeeDetails = document.getElementById("employee-details");
    const employeeRoleTitle = document.getElementById("employee-role-title");
    const employeeTable = document.getElementById("employee-table");

    // Set the role name in the title
    employeeRoleTitle.textContent = role.charAt(0).toUpperCase() + role.slice(1) + " Employees";

    // Clear previous employee rows
    employeeTable.innerHTML = `
        <tr>
            <th>Employee Name</th>
            <th>Role</th>
        </tr>
    `;

    // Fetch employee data from Firebase
    db.ref(`employees/${role}`).once('value')
        .then(snapshot => {
            const employees = snapshot.val();
            Object.keys(employees).forEach(employeeKey => {
                const employee = employees[employeeKey];
                const row = `<tr><td>${employee.name}</td><td>${employee.role}</td></tr>`;
                employeeTable.innerHTML += row;
            });
        })
        .catch(error => {
            console.error('Error fetching employee data:', error);
        });

    // Toggle employee details visibility
    if (employeeDetails.classList.contains("active")) {
        employeeDetails.classList.remove("active"); // Collapse if already open
    } else {
        employeeDetails.classList.add("active"); // Expand to show details
    }
}