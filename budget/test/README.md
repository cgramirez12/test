# test
test
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Budget Tracker</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Budget Tracker</h1>
    </header>

    <div class="container">
        <form id="budgetForm">
            <label for="income">Income:</label>
            <input type="number" id="income" placeholder="Enter income">

            <label for="expenses">Expenses:</label>
            <input type="number" id="expenses" placeholder="Enter expenses">

            <button type="button" onclick="calculateBudget()">Calculate</button>
        </form>

        <div id="result"></div>
    </div>

    <script src="budget.js"></script>
</body>
</html>
