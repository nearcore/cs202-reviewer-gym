// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Catch order
// Topic: Exceptions, Files, and Null Pointers
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixBase021 { public static void main(String[] args){ try { String s=null; System.out.println(s.length()); } catch (Exception e) { System.out.println("problem"); } catch (NullPointerException e) { System.out.println("null"); } } }
