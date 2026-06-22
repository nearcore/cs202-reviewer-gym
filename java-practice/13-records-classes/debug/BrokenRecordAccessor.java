// Intentionally broken: records create name(), not getName().
record BrokenRecordStudent(String name) {}

public class BrokenRecordAccessor {
    public static void main(String[] args) {
        BrokenRecordStudent student = new BrokenRecordStudent("Ana");
        System.out.println(student.getName());
    }
}
