public class ArrayAverageChallenge {
    public static double average(int[] values) {
        int total = 0;
        for (int value : values) {
            total += value;
        }
        return total / (double) values.length;
    }

    public static void main(String[] args) {
        System.out.println(average(new int[] {2, 4, 9}));
    }
}
