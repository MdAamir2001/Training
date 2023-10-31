import java.util.HashMap;
import java.util.Set;

class Student {
    private HashMap<String, String> empNames = new HashMap<>();
    
    public void setNames() {
        empNames.put("001", "harold das");
        empNames.put("002", "anthony Das");
        empNames.put("003", "leo Das");
    }

    public void printNames() {
        System.out.println("Names:");
        for (String name : empNames.values()) {
            System.out.println(name);
        }
    }

    public void getName(String key) {
        if (empNames.containsKey(key)) {
            System.out.println("Name for roll number " + key + " is: " + empNames.get(key));
        } else {
            System.out.println("No name found for roll number " + key);
        }
    }

    public void printNamesKeySet() {
        System.out.println("Names using Key Set:");
        Set<String> keys = empNames.keySet();
        for (String key : keys) {
            System.out.println(empNames.get(key));
        }
    }

    public void printSize() {
        System.out.println("Size of HashMap: " + empNames.size());
    }

    public void remove(String key) {
        if (empNames.containsKey(key)) {
            empNames.remove(key);
            System.out.println("Removed entry for roll number " + key);
        } else {
            System.out.println("No entry found for roll number " + key);
        }
    }
}
public class TestHashMap {
    public static void main(String[] args) {
        Student student = new Student(); //instance of student class

        student.setNames();

        student.printNames();

        student.getName("002");

        student.printNamesKeySet();

        student.printSize();

        student.remove("003");
    }
}
