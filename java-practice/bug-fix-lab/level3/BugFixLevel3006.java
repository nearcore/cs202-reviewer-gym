// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Record used for changing object
// Topic: Records vs Classes
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixLevel3006 { record Player(String name, int health) {} public static void main(String[] args){ Player p = new Player("Kai", 100); p = new Player(p.name(), p.health()-10); } }
