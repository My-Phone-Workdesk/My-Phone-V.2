import java.sql.Connection;

public class Database {
    //Datbase Connections Variables

    static Connection connection = null;
    static String database_Name = "";
    static String url = "jdbc:mysql://localhost:3306/" + database_Name;

    static String username = "";

    public static void main(String[] args) {
        
    }

}