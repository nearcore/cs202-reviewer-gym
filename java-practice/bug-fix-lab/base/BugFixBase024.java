// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Copy constructor alias
// Topic: Constructors
// This file may be intentionally broken or weak. Read the website instructions before fixing.

import java.util.*; public class BugFixBase024 { static class Scores { int[] values; Scores(int[] values){ this.values=values; } Scores(Scores other){ this.values=other.values; } } public static void main(String[] args){ Scores a=new Scores(new int[]{1,2}); Scores b=new Scores(a); b.values[0]=9; System.out.println(a.values[0]); } }
