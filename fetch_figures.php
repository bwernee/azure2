<?php
// Get database credentials from environment variables (Azure Configuration)
$host = getenv("DB_HOST");
$user = getenv("DB_USER");
$pass = getenv("DB_PASSWORD");
$db   = getenv("DB_NAME");

// Connect to the MySQL database
$conn = new mysqli($host, $user, $pass, $db);

// Handle connection error
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed: " . $conn->connect_error]);
    exit();
}

// Read search query from GET
$search = isset($_GET['search']) ? $_GET['search'] : '';

// Prepare and execute SQL query
$sql = "SELECT * FROM figures WHERE name LIKE ?";
$stmt = $conn->prepare($sql);
$searchParam = "%" . $search . "%";
$stmt->bind_param("s", $searchParam);
$stmt->execute();
$result = $stmt->get_result();

// Fetch results
$figures = [];
while ($row = $result->fetch_assoc()) {
    $figures[] = $row;
}

// Output results as JSON
header('Content-Type: application/json');
echo json_encode($figures);

// Close connections
$stmt->close();
$conn->close();
?>
