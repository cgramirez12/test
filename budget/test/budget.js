// budget.js

class Budget {
    constructor() {
        this.income = 0;
        this.expenses = 0;
    }

    setIncome(income) {
        this.income = income;
    }

    setExpenses(expenses) {
        this.expenses = expenses;
    }

    calculateBudget() {
        const budget = this.income - this.expenses;
        return budget;
    }
}

function calculateBudget() {
    const incomeInput = document.getElementById('income');
    const expensesInput = document.getElementById('expenses');
    const resultDiv = document.getElementById('result');

    const budget = new Budget();
    budget.setIncome(parseFloat(incomeInput.value) || 0);
    budget.setExpenses(parseFloat(expensesInput.value) || 0);

    const calculatedBudget = budget.calculateBudget();

    resultDiv.textContent = `Your budget is $${calculatedBudget.toFixed(2)}`;
}
