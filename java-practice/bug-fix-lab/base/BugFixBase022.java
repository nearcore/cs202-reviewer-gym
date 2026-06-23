// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Abstract method missing
// Topic: Inheritance and Polymorphism
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixBase022 { static abstract class Shape { abstract double area(); } static class Rectangle extends Shape { double w=3,h=4; } public static void main(String[] args){ System.out.println(new Rectangle().area()); } }
