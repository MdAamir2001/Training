import java.util.ArrayList;
import java.util.Collections;

class Student implements Comparable<Student> {
    private int rollNo;
    private String name;

    public Student(int rollNo, String name) {
        this.rollNo = rollNo;
        this.name = name;
    }

    public int getRollNo() {
        return rollNo;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Roll No: " + rollNo + ", Name: " + name;
    }

    @Override
    public int compareTo(Student other) {
        return this.name.compareTo(other.name);
    }
}

public class StudentSortDemo {
    public static void main(String[] args) {
        ArrayList<Student> students = new ArrayList<>();

        students.add(new Student(101, "Anthony Dos"));
        students.add(new Student(102, "Harold Dos"));
        students.add(new Student(103, "Leo das"));
        students.add(new Student(104, "Arun"));
        students.add(new Student(105, "Sandy"));

        System.out.println("Unsorted Student Data:");
        for (Student student : students) {
            System.out.println(student);
        }

        Collections.sort(students);

        System.out.println("\nSorted Student Data:");
        for (Student student : students) {
            System.out.println(student);
        }
    }
}
