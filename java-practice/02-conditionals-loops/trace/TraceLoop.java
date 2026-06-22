public class TraceLoop {
    public static void main(String[] args) {
        int total = 0;
        for (int i = 1; i <= 4; i++) {
            total += i;
            System.out.println("i=" + i + ", total=" + total);
        }
    }
}
