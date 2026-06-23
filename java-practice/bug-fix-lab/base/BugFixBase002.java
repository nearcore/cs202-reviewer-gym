// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Missing return path
// Topic: Methods
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixBase002 {
    public static int max(int a, int b) {
        if (a > b) {
            return a;
        }
    }

    public static void main(String[] args) {
        System.out.println(max(7, 9));
    }
}
