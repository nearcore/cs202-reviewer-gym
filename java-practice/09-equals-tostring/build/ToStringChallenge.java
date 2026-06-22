public class ToStringChallenge {
    private final String name;
    private final int id;

    public ToStringChallenge(String name, int id) {
        this.name = name;
        this.id = id;
    }

    @Override
    public String toString() {
        return "Student{name='" + name + "', id=" + id + "}";
    }
}
