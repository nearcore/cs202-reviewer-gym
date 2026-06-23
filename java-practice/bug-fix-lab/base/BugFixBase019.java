// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Scanner nextLine skip
// Topic: Java Basics
// This file may be intentionally broken or weak. Read the website instructions before fixing.

import java.util.*; public class BugFixBase019 { public static void main(String[] args){ Scanner s = new Scanner(System.in); int age = s.nextInt(); String name = s.nextLine(); System.out.println(name + " " + age); } }
