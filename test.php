<?php
echo "✅ PHP is working!<br>";

// Check MySQL connection too (optional)
$host = "mythology-db.mysql.database.azure.com";
$user = "myadmin@mythology-db";
$pass = "zaqzaq@123";
$db   = "mythology_db";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    echo "❌ Database connection failed: " . $conn->connect_error;
} else {
    echo "✅ Connected to MySQL successfully!";
}
?>
