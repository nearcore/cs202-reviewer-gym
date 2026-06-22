import java.util.Objects;

/** Mini Project 7: compare equivalent record and class models. */
public class RecordsVsClassesDemo {
    record StudentRecord(String name, int id) {}

    static class StudentClass {
        private final String name;
        private final int id;
        StudentClass(String name, int id) { this.name = name; this.id = id; }
        @Override public boolean equals(Object obj) {
            if (!(obj instanceof StudentClass other)) return false;
            return id == other.id && Objects.equals(name, other.name);
        }
        @Override public int hashCode() { return Objects.hash(name, id); }
        @Override public String toString() { return "StudentClass[name=" + name + ", id=" + id + "]"; }
    }

    public static void main(String[] args) {
        System.out.println(new StudentRecord("Ana", 7));
        System.out.println(new StudentClass("Ana", 7));
    }
}
