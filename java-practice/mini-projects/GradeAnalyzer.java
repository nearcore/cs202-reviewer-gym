import java.util.Arrays;

/** Mini Project 1: arrays, loops, methods, returns, and decimal averages. */
public class GradeAnalyzer {
    public static double average(int[] grades) {
        int total = 0;
        for (int grade : grades) total += grade;
        return total / (double) grades.length;
    }

    public static int countPassing(int[] grades) {
        int passing = 0;
        for (int grade : grades) if (grade >= 60) passing++;
        return passing;
    }

    public static void main(String[] args) {
        int[] grades = {88, 72, 95, 59, 81};
        System.out.println("grades: " + Arrays.toString(grades));
        System.out.printf("average: %.2f%n", average(grades));
        System.out.println("highest: " + Arrays.stream(grades).max().orElse(0));
        System.out.println("lowest: " + Arrays.stream(grades).min().orElse(0));
        System.out.println("passing: " + countPassing(grades));
    }
}
