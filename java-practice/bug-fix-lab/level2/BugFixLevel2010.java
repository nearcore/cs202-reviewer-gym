// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Record canonical constructor assignment
// Topic: Records vs Classes
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixLevel2010 { record Course(String code, int credits) { public Course(String code, int credits) { this.code = code; this.credits = credits; } } }
