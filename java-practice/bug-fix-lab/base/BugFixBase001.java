// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Constructor forgot the field
// Topic: Constructors
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixBase001 {
    static class Student {
        private String name;
        private int score;

        public Student(String name, int score) {
            name = name;
            score = score;
        }

        public String toString() {
            return name + " " + score;
        }
    }

    public static void main(String[] args) {
        Student item = new Student("Mina", 92);
        System.out.println(item);
    }
}
