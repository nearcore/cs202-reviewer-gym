// Intentionally broken: the condition visits one index too many.
public class BrokenArrayLoop {
    public static void main(String[] args) {
        int[] values = {2, 4, 6};
        for (int i = 0; i <= values.length; i++) {
            System.out.println(values[i]);
        }
    }
}
