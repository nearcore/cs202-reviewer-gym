// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Public fields inventory 21
// Topic: Classes and Objects
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixLevel3021 { static class Item { public String name; public int quantity; } public static void main(String[] args){ Item item=new Item(); item.name="Plate"; item.quantity=-99; System.out.println(item.quantity); } }
