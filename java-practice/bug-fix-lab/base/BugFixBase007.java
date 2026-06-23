// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Shared static counter surprise
// Topic: Static, Final, Memory, and Garbage Collection
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixBase007 {
    static class Counter {
        static int count = 0;
        Counter() { count++; }
        int getCount() { return count; }
    }
    public static void main(String[] args) {
        Counter a = new Counter();
        Counter b = new Counter();
        System.out.println(a.getCount());
        System.out.println(b.getCount());
    }
}
