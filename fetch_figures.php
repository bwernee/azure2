<?php
$host = "mythology-db.mysql.database.azure.com";
$user = "myadmin@mythology-db";
$pass = "zaqzaq@123"; 
$db = "mythology_db";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
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

echo json_encode($figures);
?>
