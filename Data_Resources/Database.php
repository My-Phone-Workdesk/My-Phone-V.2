<?php
declare(strict_types=1);

# [START cloud_sql_mysql_pdo_connect_tcp]
namespace My_Phone_V2\Data_Resources;

use PDO;
use PDOException;
use RuntimeException;
use TypeError;

class Database
{
    public static function initDatabaseConnection(): PDO
    {
        try {
            // Note: Saving credentials in environment variables is convenient, but not
            // secure - consider a more secure solution such as
            // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help
            // keep secrets safe.
            $username = getenv('DB_USER'); // e.g. 'your_db_user'
            $password = getenv('DB_PASS'); // e.g. 'your_db_password'
            $dbName = getenv('DB_NAME'); // e.g. 'your_db_name'
            $instanceHost = getenv('INSTANCE_HOST'); // e.g. '127.0.0.1' ('172.17.0.1' for GAE Flex)

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

        return $conn;
    }
}
# [END cloud_sql_mysql_pdo_connect_tcp]