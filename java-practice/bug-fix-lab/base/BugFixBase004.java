// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Null player crash
// Topic: Exceptions, Files, and Null Pointers
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixBase004 {
    static class Player {
        String name;
        Player(String name) { this.name = name; }
    }

    public static void main(String[] args) {
        Player player = null;
        System.out.println(player.name.toUpperCase());
    }
}
