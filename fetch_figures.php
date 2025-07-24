<?php
// Use environment variables (set in Azure App Service > Configuration)
$host = getenv("DB_HOST");
$user = getenv("DB_USER");
$pass = getenv("DB_PASSWORD");
$db   = getenv("DB_NAME");

// Connect to the MySQL database
$conn = new mysqli($host, $user, $pass, $db);

// Check for connection error
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Connection failed: " . $conn->connect_error]);
    exit();
}

// Get the search query if any
$search = isset($_GET['search']) ? $_GET['search'] : '';

// Prepare and execute SQL query
$sql = "SELECT * FROM figures WHERE name LIKE ?";
$stmt = $conn->prepare($sql);
$searchParam = "%" . $search . "%";
$stmt->bind_param("s", $searchParam);
$stmt->execute();

// Get results
$result = $stmt->get_result();
$figures = [];
while ($row = $result->fetch_assoc()) {
    $figures[] = $row;
}

// Send JSON response
header('Content-Type: application/json');
echo json_encode($figures);

// Close connections
$stmt->close();
$conn->close();
?>
