<?php
$host = getenv("DB_HOST");
$user = getenv("DB_USER");
$pass = getenv("DB_PASSWORD");
$db   = getenv("DB_NAME");

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Connection failed: " . $conn->connect_error]);
    exit();
}

$search = isset($_GET['search']) ? $_GET['search'] : '';

$sql = "SELECT * FROM figures WHERE name LIKE ?";
$stmt = $conn->prepare($sql);
$searchParam = "%" . $search . "%";
$stmt->bind_param("s", $searchParam);
$stmt->execute();
$result = $stmt->get_result();

$figures = [];
while ($row = $result->fetch_assoc()) {
    $figures[] = $row;
}

header('Content-Type: application/json');
echo json_encode($figures);
?>
