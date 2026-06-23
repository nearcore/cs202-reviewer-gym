// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Wrong super call
// Topic: Inheritance and Polymorphism
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixLevel1006 { static class Person { String describe(){ return "Person"; } } static class Student extends Person { String describe(){ return "Student"; } } public static void main(String[] args){ System.out.println(new Student().describe()); } }
