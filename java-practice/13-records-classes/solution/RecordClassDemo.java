import java.util.Objects;

record StudentRecord(String name, int id) {
    StudentRecord {
        if (name == null || name.isBlank()) name = "Unknown";
    }
}

class StudentClass {
    private final String name;
    private final int id;

    StudentClass(String name, int id) {
        this.name = Objects.requireNonNullElse(name, "Unknown");
        this.id = id;
    }

    public String getName() { return name; }
    public int getId() { return id; }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof StudentClass other)) return false;
        return id == other.id && Objects.equals(name, other.name);
    }

    @Override
    public int hashCode() { return Objects.hash(name, id); }

    @Override
    public String toString() { return "StudentClass[name=" + name + ", id=" + id + "]"; }
}

public class RecordClassDemo {
    public static void main(String[] args) {
        StudentRecord record = new StudentRecord("Ana", 7);
        StudentClass regular = new StudentClass("Ana", 7);
        System.out.println(record.name());
        System.out.println(regular.getName());
        System.out.println(record);
        System.out.println(regular);
        System.out.println(record.equals(new StudentRecord("Ana", 7)));
        System.out.println(regular.equals(new StudentClass("Ana", 7)));
    }
}
