public class LoopLab {
    public static void main(String[] args) {
        int total = 0;
        for (int number = 1; number <= 10; number++) {
            if (number % 2 == 0) {
                total += number;
                System.out.println("even: " + number);
            }
        }
        System.out.println("total: " + total);
    }
}
