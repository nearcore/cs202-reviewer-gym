public class ConstructorLab {
    private final String name;
    private final int id;

    public ConstructorLab() {
        this("Unknown", 0);
    }

    public ConstructorLab(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public ConstructorLab(ConstructorLab other) {
        this(other.name, other.id);
    }

    @Override
    public String toString() {
        return name + " (#" + id + ")";
    }

    public static void main(String[] args) {
        ConstructorLab original = new ConstructorLab("Ana", 7);
        ConstructorLab copy = new ConstructorLab(original);
        System.out.println(copy);
    }
}
