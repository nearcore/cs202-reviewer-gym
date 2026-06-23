// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Method with hidden side effect 14
// Topic: Methods
// This file may be intentionally broken or weak. Read the website instructions before fixing.

import java.util.*; public class BugFixLevel3014 { static boolean hasPassed(ArrayList<Integer> scores){ scores.removeIf(s -> s < 60); return !scores.isEmpty(); } }
