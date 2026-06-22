public class TraceExceptions {
    public static void main(String[] args) {
        try {
            int value = Integer.parseInt("ten");
            System.out.println(value);
        } catch (NumberFormatException exception) {
            System.out.println("bad number");
        }
    }
}
