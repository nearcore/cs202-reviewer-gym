public class TraceConstructors {
    private int size;

    public TraceConstructors() { this(4); }
    public TraceConstructors(int size) { this.size = size; }

    public static void main(String[] args) {
        System.out.println(new TraceConstructors().size);
    }
}
