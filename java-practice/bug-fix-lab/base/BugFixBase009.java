// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Record field access
// Topic: Records vs Classes
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixBase009 {
    record Course(String code, int credits) {}

    public static void main(String[] args) {
        Course course = new Course("CS202", 3);
        System.out.println(course.code);
    }
}
