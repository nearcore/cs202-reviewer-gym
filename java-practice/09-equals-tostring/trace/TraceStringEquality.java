public class TraceStringEquality {
    public static void main(String[] args) {
        String a = new String("hi");
        String b = new String("hi");
        System.out.println(a == b);
        System.out.println(a.equals(b));
    }
}
