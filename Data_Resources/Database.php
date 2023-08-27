<?php

define('HOST', 'asia-south2.c8413d9b-cba7-4c08-b7f2-7c0e6b294870.gcp.ybdb.io');
define('PORT', '5433');
define('DB_NAME', 'yugabyte');
define('USER', 'lala9211');
define('PASSWORD', 'Lala9211');
define('SSL_MODE', 'enable');
define('SSL_ROOT_CERT', 'root.crt');

$conn_str = 'pgsql:host=' . HOST . ';port=' . PORT . ';dbname=' . DB_NAME .
    ';sslmode=' . SSL_MODE;

try {
    $conn = new PDO($conn_str);
    echo "Connection to database sucessful";
} catch (PDOException $e) {
    echo "failed to connect to database. Error: " . $e->getMessage() . "\n";
}

?>