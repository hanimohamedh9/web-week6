SpendWise 💰

SpendWise is an interactive budgeting application that helps users manage their budget and track their expenses.

Improvements Made This Week

This week, SpendWise was improved by adding JavaScript functionality to make the application interactive.

The improvements include:

Added an array to store multiple expense records.
Added loops to calculate and display expenses.
Added conditional statements to check the user's budget status.
Added dynamic updates to the dashboard.
Added event listeners for buttons and forms.
Added the ability to add new expenses.
Added the ability to delete expenses.
Added automatic calculation of total expenses.
Added a budget warning when the user is close to or over their budget.
How Conditionals Are Used

Conditional statements are used to evaluate the user's budget.

The application checks the amount of money remaining after expenses are calculated.

For example:

if (remaining < 0) {
    budgetMessage.textContent = "You have exceeded your budget!";
} else if (remaining <= budget * 0.2) {
    budgetMessage.textContent = "Warning! You are close to your budget limit.";
} else {
    budgetMessage.textContent = "Great job! You are within your budget.";
}


These conditions provide different feedback depending on the user's spending.

How Arrays Are Used

An array is used to store multiple expense records.

Each expense is stored as an object containing an ID, name, amount, and category.

Example:

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
    }
];


Using an array makes it possible to store and manage many expenses instead of creating separate variables for every expense.

How the DOM Is Updated

The Document Object Model (DOM) is used to update information directly on the webpage.

JavaScript changes the dashboard values using properties such as:

budgetDisplay.textContent = formatMoney(budget);
totalExpenses.textContent = formatMoney(total);
remainingBudget.textContent = formatMoney(remaining);


The expense list is also created dynamically using:

document.createElement("li");


This allows new expense records to appear on the webpage without refreshing the page.

How User Interactions Are Handled

Event listeners are used to respond to user actions.

For example, when a user submits the expense form:

expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Add expense
});


The application reads the user's information, creates a new expense record, adds it to the array, and updates the dashboard.

A click event is also used when the user sets a new budget:

budgetButton.addEventListener("click", function() {
    // Update budget
});


Users can also delete expenses by clicking the Delete button.

Challenges Encountered

One challenge was making sure that the dashboard updated whenever an expense was added or deleted.

This was resolved by creating an updateDashboard() function. This function recalculates the total expenses, calculates the remaining budget, updates the budget message, and displays the expense records.

Another challenge was validating user input. The application now checks that the expense name is not empty and that the amount is a valid positive number.

Conclusion

The SpendWise application is now more interactive and user-friendly. It demonstrates JavaScript concepts including:

Conditional statements
Arrays
Loops
DOM manipulation
Event listeners
Functions
User input validation

The application now connects user actions with JavaScript logic, updates the stored data, and displays the results directly on the webpage.
