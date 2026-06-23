// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Wrong equals signature 15
// Topic: equals(), ==, =, and toString()
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixLevel2015 { static class Book { String title; Book(String title){this.title=title;} public boolean equals(Book other){ return title.equals(other.title); } } public static void main(String[] args){ Object a=new Book("Java"); Object b=new Book("Java"); System.out.println(a.equals(b)); } }
