<?php
$host = "mythology-db.mysql.database.azure.com";
$user = "myadmin@mythology-db";
$pass = "zaqzaq@123";
$db   = "mythology_db";

// Connect using PDO
try {
    $conn = new PDO("sqlsrv:server=$server;Database=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Connection failed: " . $e->getMessage()]);
    exit();
}

$search = isset($_GET['search']) ? $_GET['search'] : '';
$query = "SELECT * FROM figures WHERE name LIKE :search";
$stmt = $conn->prepare($query);
$stmt->execute(['search' => "%$search%"]);

$figures = $stmt->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode($figures);
?>
