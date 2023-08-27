<?php
        try {
            // Note: Saving credentials in environment variables is convenient, but not
            // secure - consider a more secure solution such as
            // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help
            // keep secrets safe.
            $username = getenv('DB_USER'); // e.g. 'your_db_user'
            $password = getenv('DB_PASS'); // e.g. 'your_db_password'
            $dbName = getenv('DB_NAME'); // e.g. 'your_db_name'
            $instanceHost = getenv('INSTANCE_HOST'); // e.g. '127.0.0.1' ('172.17.0.1' for GAE Flex)

<<<<<<< HEAD
define('HOST', 'asia-south2.c8413d9b-cba7-4c08-b7f2-7c0e6b294870.gcp.ybdb.io');
define('PORT', '5433');
define('DB_NAME', 'yugabyte');
define('USER', 'lala9211');
define('PASSWORD', 'Lala9211');
define('SSL_MODE', 'verify-full');
define('SSL_ROOT_CERT', './root.crt');

$conn_str = 'postgresql://' . DB_NAME . ':' . PASSWORD . '@' . HOST . ':' . PORT . '/' . DB_NAME . '?ssl=true&sslmode=verify-full&sslrootcert=' .  SSL_ROOT_CERT ;

try {
    $conn = new PDO($conn_str);
    echo "Connect to database sucessful";
} catch (PDOException $e) {
    echo "fail to connect to database" . $e->getMessage();
}

?>
=======
            // Connect using TCP
            $dsn = sprintf('mysql:dbname=%s;host=%s', $dbName, $instanceHost);

            // Connect to the database
            $conn = new PDO(
                $dsn,
                $username,
                $password,
                # [START_EXCLUDE]
                # [START cloud_sql_mysql_pdo_timeout]
                // Here we set the connection timeout to five seconds and ask PDO to
                // throw an exception if any errors occur.
                [
                    PDO::ATTR_TIMEOUT => 5,
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                ]
                # [END cloud_sql_mysql_pdo_timeout]
                # [END_EXCLUDE]
            );
        } catch (TypeError $e) {
            throw new RuntimeException(
                sprintf(
                    'Invalid or missing configuration! Make sure you have set ' .
                        '$username, $password, $dbName, and $instanceHost (for TCP mode). ' .
                        'The PHP error was %s',
                    $e->getMessage()
                ),
                $e->getCode(),
                $e
            );
        } catch (PDOException $e) {
            throw new RuntimeException(
                sprintf(
                    'Could not connect to the Cloud SQL Database. Check that ' .
                        'your username and password are correct, that the Cloud SQL ' .
                        'proxy is running, and that the database exists and is ready ' .
                        'for use. For more assistance, refer to %s. The PDO error was %s',
                    'https://cloud.google.com/sql/docs/mysql/connect-external-app',
                    $e->getMessage()
                ),
                $e->getCode(),
                $e
            );
        }
>>>>>>> b1498e2 (Faltu)
