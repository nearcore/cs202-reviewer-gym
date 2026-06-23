// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Setter assigns parameter to itself
// Topic: Classes and Objects
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixBase011 { static class Grade { private int score; void setScore(int score) { score = score; } int getScore(){ return score; } } public static void main(String[] args){ Grade g = new Grade(); g.setScore(95); System.out.println(g.getScore()); } }
