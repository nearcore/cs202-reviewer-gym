// CS202 Reviewer Gym - Bug Fix Lab
// Quest: String comparison trap
// Topic: equals(), ==, =, and toString()
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixBase005 {
    public static void main(String[] args) {
        String first = new String("CS202");
        String second = new String("CS202");
        if (first == second) {
            System.out.println("same course");
        } else {
            System.out.println("different course");
        }
    }
}
