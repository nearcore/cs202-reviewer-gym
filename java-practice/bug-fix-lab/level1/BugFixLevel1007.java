// CS202 Reviewer Gym - Bug Fix Lab
// Quest: File Scanner not closed
// Topic: Exceptions, Files, and Null Pointers
// This file may be intentionally broken or weak. Read the website instructions before fixing.

import java.io.*; import java.util.*; public class BugFixLevel1007 { public static void main(String[] args) throws Exception { Scanner in = new Scanner(new File("data.txt")); if(in.hasNextLine()) System.out.println(in.nextLine()); } }
