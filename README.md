
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Page Navigation</title>
</head>
<body>

    <button onclick="redirectToAnotherPage()">Go to Another Page</button>

    <script>
        function redirectToAnotherPage() {
            // Set the URL of the page you want to navigate to
            var destinationPage = "anotherpage.html";
            
            // Use window.location to navigate to the specified page
            window.location.href = destinationPage;
        }
    </script>

</body>
</html>
