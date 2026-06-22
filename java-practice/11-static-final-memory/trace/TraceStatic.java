public class TraceStatic {
    private static int count = 0;

    public TraceStatic() { count++; }

    public static void main(String[] args) {
        new TraceStatic();
        new TraceStatic();
        System.out.println(count);
    }
}
