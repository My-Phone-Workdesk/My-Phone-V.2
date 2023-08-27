<?php

define('HOST', 'asia-south2.c8413d9b-cba7-4c08-b7f2-7c0e6b294870.gcp.ybdb.io');
define('PORT', '5433');
define('DB_NAME', 'yugabyte');
define('USER', 'lala9211');
define('PASSWORD', 'Lala9211');
define('SSL_MODE', 'verify-full');
define('SSL_ROOT_CERT', './root.crt');

$conn_str = 'postgresql://' . DB_NAME . ':' . PASSWORD . '@' . HOST . ':' . PORT . '/' . DB_NAME . '?ssl=true&sslmode=verify-full&sslrootcert=' .  SSL_ROOT_CERT ;

try {
    $conn = new PDO('pgsql:host=' . HOST . ';port=' . PORT . ';dbname=' . DB_NAME . ';sslmode=' . SSL_MODE . ';sslrootcert=' . SSL_ROOT_CERT, USER, PASSWORD, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => true, PDO::ATTR_PERSISTENT => true));
    echo "fail to connect to database";
} catch (PDOException $e) {
    echo "Connected to database sucessfully but Oops... " . $e->getMessage();
}

?>