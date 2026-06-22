import java.util.ArrayList;

/** Mini Project 2: objects, constructors, getters/setters, ArrayList, toString. */
public class StudentDirectory {
    private final ArrayList<Student> students = new ArrayList<>();

    public void add(Student student) { students.add(student); }
    public void printAll() { students.forEach(System.out::println); }

    public static void main(String[] args) {
        StudentDirectory directory = new StudentDirectory();
        directory.add(new Student("Ana", 7));
        directory.add(new Student("Ben", 8));
        directory.printAll();
    }

    static class Student {
        private String name;
        private final int id;

        Student(String name, int id) { this.name = name; this.id = id; }
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        @Override public String toString() { return name + " (#" + id + ")"; }
    }
}
