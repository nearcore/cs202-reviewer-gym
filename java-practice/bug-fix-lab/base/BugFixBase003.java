// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Array loop walks too far
// Topic: Arrays and ArrayLists
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixBase003 {
    public static int sum(int[] nums) {
        int total = 0;
        for (int i = 0; i <= nums.length; i++) {
            total += nums[i];
        }
        return total;
    }

    public static void main(String[] args) {
        System.out.println(sum(new int[]{2, 4, 6}));
    }
}
