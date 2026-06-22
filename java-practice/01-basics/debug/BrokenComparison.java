// Intentionally broken: replace = with == in the condition.
public class BrokenComparison {
    public static void main(String[] args) {
        int score = 10;
        if (score = 10) {
            System.out.println("Perfect");
        }
    }
}
