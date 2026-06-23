// CS202 Reviewer Gym - Bug Fix Lab
// Quest: ArrayList remove shift
// Topic: Arrays and ArrayLists
// This file may be intentionally broken or weak. Read the website instructions before fixing.

import java.util.ArrayList;
import java.util.Arrays;

public class BugFixBase008 {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>(Arrays.asList("Ana", "Bo", "Cy"));
        names.remove(1);
        System.out.println(names.get(1));
    }
}
