// CS202 Reviewer Gym - Bug Fix Lab
// Quest: equals without null/type check 23
// Topic: equals(), ==, =, and toString()
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixLevel3023 { static class ID { int value; ID(int value){this.value=value;} public boolean equals(Object other){ ID id=(ID) other; return value==id.value; } } }
