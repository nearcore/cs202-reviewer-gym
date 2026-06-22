public class StudentPractice {
    private String name;
    private int id;

    public StudentPractice(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return name + " (#" + id + ")";
    }

    public static void main(String[] args) {
        StudentPractice first = new StudentPractice("Ana", 7);
        StudentPractice second = first;
        second.setName("Bella");
        System.out.println(first);
    }
}
