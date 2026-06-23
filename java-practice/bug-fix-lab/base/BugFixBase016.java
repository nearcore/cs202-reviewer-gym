// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Superclass constructor missing
// Topic: Inheritance and Polymorphism
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixBase016 { static class Person { String name; Person(String name){ this.name=name; } } static class Student extends Person { Student(String name){} } public static void main(String[] args){ System.out.println(new Student("Mina").name); } }
