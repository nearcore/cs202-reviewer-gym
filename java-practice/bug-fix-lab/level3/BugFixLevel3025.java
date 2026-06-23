// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Unnecessary static state 25
// Topic: Static, Final, Memory, and Garbage Collection
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixLevel3025 { static class Account { static double balance; Account(double balance){ Account.balance=balance; } } public static void main(String[] args){ new Account(10); new Account(99); System.out.println(Account.balance); } }
