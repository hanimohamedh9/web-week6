// SpendWise Budget App

// ===============================
// 1. EXPENSE DATA
// ===============================

let expenses = [
    {
        id: 1,
        name: "Groceries",
        amount: 2500,
        category: "Food"
    },
    {
        id: 2,
        name: "Transport",
        amount: 1000,
        category: "Transport"
    },
    {
        id: 3,
        name: "Movie",
        amount: 800,
        category: "Entertainment"
    }
];

let budget = 10000;


// ===============================
// 2. GET HTML ELEMENTS
// ===============================

const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");

const budgetInput = document.getElementById("budgetInput");
const budgetButton = document.getElementById("budgetButton");

const budgetDisplay = document.getElementById("budgetDisplay");
const totalExpenses = document.getElementById("totalExpenses");
const remainingBudget = document.getElementById("remainingBudget");

const budgetMessage = document.getElementById("budgetMessage");
const expenseList = document.getElementById("expenseList");
const emptyMessage = document.getElementById("emptyMessage");


// ===============================
// 3. FORMAT MONEY
// ===============================

function formatMoney(amount) {
    return "KSh " + amount.toLocaleString();
}


// ===============================
// 4. CALCULATE TOTAL EXPENSES
// ===============================

function calculateTotal() {

    let total = 0;

    // Loop through the expenses array
    for (let i = 0; i < expenses.length; i++) {
        total = total + expenses[i].amount;
    }

    return total;
}


// ===============================
// 5. DISPLAY EXPENSES
// ===============================

function displayExpenses() {

    expenseList.innerHTML = "";

    if (expenses.length === 0) {

        emptyMessage.style.display = "block";

        return;
    }

    emptyMessage.style.display = "none";


    // Loop through every expense
    for (let i = 0; i < expenses.length; i++) {

        let expense = expenses[i];

        let listItem = document.createElement("li");

        listItem.innerHTML = `
            <div>
                <strong>${expense.name}</strong>
                <br>
                <small>${expense.category}</small>
            </div>

            <div>
                <strong>${formatMoney(expense.amount)}</strong>

                <button onclick="deleteExpense(${expense.id})">
                    Delete
                </button>
            </div>
        `;

        expenseList.appendChild(listItem);
    }
}


// ===============================
// 6. DELETE EXPENSE
// ===============================

function deleteExpense(id) {

    expenses = expenses.filter(function(expense) {
        return expense.id !== id;
    });

    updateDashboard();
}


// ===============================
// 7. UPDATE DASHBOARD
// ===============================

function updateDashboard() {

    let total = calculateTotal();

    let remaining = budget - total;


    // Update webpage
    budgetDisplay.textContent = formatMoney(budget);

    totalExpenses.textContent = formatMoney(total);

    remainingBudget.textContent = formatMoney(remaining);


    // ===============================
    // DECISION MAKING
    // ===============================

    if (remaining < 0) {

        budgetMessage.textContent =
            "You have exceeded your budget!";

        budgetMessage.style.color = "red";

    } else if (remaining === 0) {

        budgetMessage.textContent =
            "You have used your entire budget.";

        budgetMessage.style.color = "orange";

    } else if (remaining <= budget * 0.2) {

        budgetMessage.textContent =
            "Warning! You are close to your budget limit.";

        budgetMessage.style.color = "orange";

    } else {

        budgetMessage.textContent =
            "Great job! You are within your budget.";

        budgetMessage.style.color = "green";
    }


    // Show expenses
    displayExpenses();
}


// ===============================
// 8. ADD NEW EXPENSE
// ===============================

expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = expenseName.value.trim();

    let amount = Number(expenseAmount.value);

    let category = expenseCategory.value;


    // Check expense name
    if (name === "") {

        alert("Please enter an expense name.");

        return;
    }


    // Check amount
    if (amount <= 0 || isNaN(amount)) {

        alert("Please enter a valid amount.");

        return;
    }


    // Check category
    if (category === "") {

        alert("Please select a category.");

        return;
    }


    // Create new expense
    let newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
        category: category
    };


    // Add expense to array
    expenses.push(newExpense);


    // Clear form
    expenseForm.reset();


    // Update dashboard
    updateDashboard();
});


// ===============================
// 9. SET BUDGET
// ===============================

budgetButton.addEventListener("click", function() {

    let newBudget = Number(budgetInput.value);


    if (newBudget <= 0 || isNaN(newBudget)) {

        alert("Please enter a valid budget.");

        return;
    }


    budget = newBudget;

    budgetInput.value = "";

    updateDashboard();
});


// ===============================
// 10. START APPLICATION
// ===============================

updateDashboard();
Important
Your VS Code files should look like this:

SpendWise/
│
├── index.html
├── style.css
└── scripts.js
And at the bottom of index.html, you need:

<script src="scripts.js"></script>
