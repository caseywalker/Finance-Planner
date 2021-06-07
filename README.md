# Capstone Planning

## Planing Documents

[ERD](https://dbdiagram.io/d/60b25254b29a09603d1718fb)

[Figma](https://www.figma.com/file/uhrouKRO2WY8E0MheAPESq/Finance-Planner?node-id=0%3A1)

[Project-Board](https://github.com/caseywalker/Finance-Planner/projects/1?add_cards_query=is%3Aopen)

[Milestones](https://github.com/caseywalker/Finance-Planner/milestones)

## Features

- [ ] Net Income 
- [ ] Monthly Expenses
- [ ] Surplus/Deficit Tracker
- [ ] Simulator for changing income/expenses
- [ ] Savings Tracker
- [ ] Steps to Financial Success

## User Story

### Landing Page
* On a landing page, user will get a quick intro to the app and then be asked to sign in
* There will be a navbar at the top of each view to go to income, expenses, tracker, simulator, savings, and steps components
### Income View
* Users can click on Income and see their monthly incomes in cards. 
* A user can click on 'New Income' to add a new monthly income, a form will render below current incomes to add a new income 
* A user can update or delete incomes from this view 

### Expense View
* Users can click on Expense and see their monthly expenses in cards. 
* A user can click on 'New Expense' to add a new monthly expense, a form will render below current incomes to add a new income 
* A user can update or delete expenses from this view 

### Tracker View
* This page will have three components: Total Income, Total Expenses, and Surplus/Deficit
* Total Income will show monthly and annual income amounts
* There will be a button to link to the Income view
* Total expenses will show monthly and annual expenses 
* There will be a button to link to Expense view
* The Surplus/Deficit will show either a surplus or deficit for a month and annually
* STRETCH: Pie Chart that shows the income vs debts

### Savings View
* Users can click on Savings and see their savings goals in cards. 
* A user can click on 'New Savings Goal' to add a new saving goal, a form will render below current incomes to add a new income 
* A user can update or delete goals from this view 
* A user will be able to set a target amount, and current saved up
* STRETCH: Once the target is reached, the card will update to show that goal is met

### Simulator View
* A user will see a view that mirrors the Tracker view
* A user will see their current monthly income, and can type in a new Monthly income figure
* A user will see their current monthly expenses, and can type in a new expense figure
* When user clicks 'Simulate' the Surplus/Deficit Component will update

### Steps for Financial Success View
* There will be 7 suggested steps to take for financial success
* Each step can only be completed one at a time. Step one must be completed to move onto step two, and so on
* Once the user has completed each step, they can click on a checkbox within that step to unlock the next step
* When a step is in progress, the component will be unlocked, with a checkbox that is unchecked with the ability to mark complete 
