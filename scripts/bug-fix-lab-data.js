// Bug Fix Lab data for CS202 Reviewer Gym.
// Base problems appear in Levels 1 and 2; Level 3 is separate code review/refactor practice.
(function () {
  window.BUG_FIX_LAB_DATA = {
  "version": 1,
  "modes": {
    "level1": {
      "label": "Guided Fix",
      "clues": 1,
      "description": "Broken code with one optional hidden clue."
    },
    "level2": {
      "label": "Solo Fix",
      "clues": 0,
      "description": "Broken code with no clue. Fix it first, then compare."
    },
    "level3": {
      "label": "Code Review Challenge",
      "clues": 0,
      "description": "Code may run or fail; review design, logic, style, concept issues, or multiple mistakes."
    }
  },
  "base": [
    {
      "id": "base-001",
      "title": "Constructor forgot the field",
      "topic": "Constructors",
      "skill": "constructor field assignment",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase001.java",
      "bugReport": "The object prints null and 0 after values were passed into the constructor.",
      "actualBehavior": "null 0",
      "expectedBehavior": "Mina 92",
      "task": "Fix the constructor so the object stores the parameter values.",
      "code": "public class BugFixBase001 {\n    static class Student {\n        private String name;\n        private int score;\n\n        public Student(String name, int score) {\n            name = name;\n            score = score;\n        }\n\n        public String toString() {\n            return name + \" \" + score;\n        }\n    }\n\n    public static void main(String[] args) {\n        Student item = new Student(\"Mina\", 92);\n        System.out.println(item);\n    }\n}\n",
      "clues": [
        "Look for parameters that have the same names as fields."
      ],
      "officialReview": "Use this.name and this.score to assign values to the object's fields.",
      "commonMistake": "Writing name = name only assigns the parameter to itself.",
      "selfCheck": "Why does this.name refer to the field?",
      "concepts": [
        "constructor field assignment"
      ],
      "level": "base"
    },
    {
      "id": "base-002",
      "title": "Missing return path",
      "topic": "Methods",
      "skill": "return statements",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase002.java",
      "bugReport": "The method should return the larger number, but the compiler complains.",
      "actualBehavior": "missing return statement",
      "expectedBehavior": "9",
      "task": "Make sure every possible path in max returns an int.",
      "code": "public class BugFixBase002 {\n    public static int max(int a, int b) {\n        if (a > b) {\n            return a;\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(max(7, 9));\n    }\n}\n",
      "clues": [
        "What happens when a is not greater than b?"
      ],
      "officialReview": "Add a return for the second path, either with else or a final return b.",
      "commonMistake": "Only testing the true branch and forgetting that Java checks all paths.",
      "selfCheck": "Why does a non-void method need a return on every path?",
      "concepts": [
        "return statements"
      ],
      "level": "base"
    },
    {
      "id": "base-003",
      "title": "Array loop walks too far",
      "topic": "Arrays and ArrayLists",
      "skill": "array index boundaries",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase003.java",
      "bugReport": "The program crashes while summing all array values.",
      "actualBehavior": "ArrayIndexOutOfBoundsException",
      "expectedBehavior": "12",
      "task": "Fix the loop condition so it only uses valid indexes.",
      "code": "public class BugFixBase003 {\n    public static int sum(int[] nums) {\n        int total = 0;\n        for (int i = 0; i <= nums.length; i++) {\n            total += nums[i];\n        }\n        return total;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(sum(new int[]{2, 4, 6}));\n    }\n}\n",
      "clues": [
        "The last valid index is length - 1."
      ],
      "officialReview": "Use i < nums.length instead of i <= nums.length.",
      "commonMistake": "Treating nums.length as a valid index.",
      "selfCheck": "What indexes are valid for an array of length 3?",
      "concepts": [
        "array index boundaries"
      ],
      "level": "base"
    },
    {
      "id": "base-004",
      "title": "Null player crash",
      "topic": "Exceptions, Files, and Null Pointers",
      "skill": "null pointer debugging",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase004.java",
      "bugReport": "The program crashes before it can print the player's name.",
      "actualBehavior": "NullPointerException",
      "expectedBehavior": "MINA",
      "task": "Create or assign the Player object before using it.",
      "code": "public class BugFixBase004 {\n    static class Player {\n        String name;\n        Player(String name) { this.name = name; }\n    }\n\n    public static void main(String[] args) {\n        Player player = null;\n        System.out.println(player.name.toUpperCase());\n    }\n}\n",
      "clues": [
        "player currently points to nothing."
      ],
      "officialReview": "Replace null with new Player(\"Mina\") or guard against null before use.",
      "commonMistake": "Checking the line that crashes but not where the reference should have been initialized.",
      "selfCheck": "What does null mean for an object reference?",
      "concepts": [
        "null pointer debugging"
      ],
      "level": "base"
    },
    {
      "id": "base-005",
      "title": "String comparison trap",
      "topic": "equals(), ==, =, and toString()",
      "skill": "equals vs reference comparison",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase005.java",
      "bugReport": "Two strings with the same text are reported as different.",
      "actualBehavior": "different course",
      "expectedBehavior": "same course",
      "task": "Fix the comparison so it checks text value, not reference identity.",
      "code": "public class BugFixBase005 {\n    public static void main(String[] args) {\n        String first = new String(\"CS202\");\n        String second = new String(\"CS202\");\n        if (first == second) {\n            System.out.println(\"same course\");\n        } else {\n            System.out.println(\"different course\");\n        }\n    }\n}\n",
      "clues": [
        "This code creates two different String objects."
      ],
      "officialReview": "Use first.equals(second) to compare the contents.",
      "commonMistake": "Using == for object meaning instead of reference identity.",
      "selfCheck": "When is == okay, and when should equals() be used?",
      "concepts": [
        "equals vs reference comparison"
      ],
      "level": "base"
    },
    {
      "id": "base-006",
      "title": "Override that did not override",
      "topic": "Inheritance and Polymorphism",
      "skill": "method overriding signature",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase006.java",
      "bugReport": "A Dog object stored as Animal still prints sound instead of bark.",
      "actualBehavior": "sound",
      "expectedBehavior": "bark",
      "task": "Fix the subclass method so it actually overrides Animal.speak().",
      "code": "public class BugFixBase006 {\n    static class Animal {\n        public String speak() { return \"sound\"; }\n    }\n    static class Dog extends Animal {\n        public String Speak() { return \"bark\"; }\n    }\n    public static void main(String[] args) {\n        Animal animal = new Dog();\n        System.out.println(animal.speak());\n    }\n}\n",
      "clues": [
        "Java method names are case-sensitive."
      ],
      "officialReview": "Rename Speak() to speak() and add @Override to catch the mistake.",
      "commonMistake": "Changing capitalization or parameters and thinking it is still overriding.",
      "selfCheck": "How would @Override have helped here?",
      "concepts": [
        "method overriding signature"
      ],
      "level": "base"
    },
    {
      "id": "base-007",
      "title": "Shared static counter surprise",
      "topic": "Static, Final, Memory, and Garbage Collection",
      "skill": "static vs instance fields",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase007.java",
      "bugReport": "Each counter should keep its own count, but both objects share the same value.",
      "actualBehavior": "2 and 2",
      "expectedBehavior": "1 and 1",
      "task": "Change the field if each object should have its own count.",
      "code": "public class BugFixBase007 {\n    static class Counter {\n        static int count = 0;\n        Counter() { count++; }\n        int getCount() { return count; }\n    }\n    public static void main(String[] args) {\n        Counter a = new Counter();\n        Counter b = new Counter();\n        System.out.println(a.getCount());\n        System.out.println(b.getCount());\n    }\n}\n",
      "clues": [
        "static fields belong to the class, not one object."
      ],
      "officialReview": "Remove static from count when count should be instance state.",
      "commonMistake": "Using static because it feels convenient, then accidentally sharing state.",
      "selfCheck": "What changes when a field is static?",
      "concepts": [
        "static vs instance fields"
      ],
      "level": "base"
    },
    {
      "id": "base-008",
      "title": "ArrayList remove shift",
      "topic": "Arrays and ArrayLists",
      "skill": "ArrayList indexes after remove",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase008.java",
      "bugReport": "After removing Bo, the code prints Cy when the student expected Bo or an error.",
      "actualBehavior": "Cy",
      "expectedBehavior": "Ana Cy list with correct access",
      "task": "Fix the logic so it accesses the intended remaining element after removal.",
      "code": "import java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class BugFixBase008 {\n    public static void main(String[] args) {\n        ArrayList<String> names = new ArrayList<>(Arrays.asList(\"Ana\", \"Bo\", \"Cy\"));\n        names.remove(1);\n        System.out.println(names.get(1));\n    }\n}\n",
      "clues": [
        "Removing an item shifts later indexes left."
      ],
      "officialReview": "After remove(1), Cy becomes index 1. Use the correct index or adjust the expected behavior.",
      "commonMistake": "Forgetting that ArrayList indexes shift after removal.",
      "selfCheck": "What is at index 1 after removing index 1 from [Ana, Bo, Cy]?",
      "concepts": [
        "ArrayList indexes after remove"
      ],
      "level": "base"
    },
    {
      "id": "base-009",
      "title": "Record field access",
      "topic": "Records vs Classes",
      "skill": "record accessors",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase009.java",
      "bugReport": "The code tries to read a record component like a public field.",
      "actualBehavior": "compiler error: code has private access",
      "expectedBehavior": "CS202",
      "task": "Use the record accessor method.",
      "code": "public class BugFixBase009 {\n    record Course(String code, int credits) {}\n\n    public static void main(String[] args) {\n        Course course = new Course(\"CS202\", 3);\n        System.out.println(course.code);\n    }\n}\n",
      "clues": [
        "Record components use accessor methods with the component name."
      ],
      "officialReview": "Change course.code to course.code().",
      "commonMistake": "Treating a record component like a public field.",
      "selfCheck": "What accessor does record Course(String code) create?",
      "concepts": [
        "record accessors"
      ],
      "level": "base"
    },
    {
      "id": "base-010",
      "title": "KeyListener missing method",
      "topic": "Interfaces and KeyListener",
      "skill": "interface required methods",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase010.java",
      "bugReport": "The class implements KeyListener but does not compile.",
      "actualBehavior": "does not override abstract method keyTyped",
      "expectedBehavior": "class compiles",
      "task": "Add the missing required KeyListener method.",
      "code": "import java.awt.event.KeyEvent;\nimport java.awt.event.KeyListener;\n\npublic class BugFixBase010 implements KeyListener {\n    private int x = 0;\n\n    public void keyPressed(KeyEvent e) {\n        if (e.getKeyCode() == KeyEvent.VK_RIGHT) {\n            x += 5;\n        }\n    }\n\n    public void keyReleased(KeyEvent e) {}\n\n    public int getX() { return x; }\n}\n",
      "clues": [
        "KeyListener requires three methods."
      ],
      "officialReview": "Add public void keyTyped(KeyEvent e) {} even if it is empty.",
      "commonMistake": "Implementing only the event method you personally use.",
      "selfCheck": "What three methods does KeyListener require?",
      "concepts": [
        "interface required methods"
      ],
      "level": "base"
    },
    {
      "id": "base-011",
      "title": "Setter assigns parameter to itself",
      "topic": "Classes and Objects",
      "skill": "field vs local variable",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase011.java",
      "bugReport": "Calling setScore does not change the object's score.",
      "actualBehavior": "0",
      "expectedBehavior": "95",
      "task": "Fix the setter so it updates the field.",
      "code": "public class BugFixBase011 { static class Grade { private int score; void setScore(int score) { score = score; } int getScore(){ return score; } } public static void main(String[] args){ Grade g = new Grade(); g.setScore(95); System.out.println(g.getScore()); } }\n",
      "clues": [
        "The parameter and field have the same name."
      ],
      "officialReview": "Use this.score = score; inside the setter.",
      "commonMistake": "Writing score = score instead of this.score = score.",
      "selfCheck": "Why does this.score matter here?",
      "concepts": [
        "field vs local variable"
      ],
      "level": "base"
    },
    {
      "id": "base-012",
      "title": "Wrong loop update",
      "topic": "Conditions, Loops, and Operators",
      "skill": "loop update",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase012.java",
      "bugReport": "The loop never reaches the stop condition.",
      "actualBehavior": "infinite loop",
      "expectedBehavior": "prints 0 1 2",
      "task": "Fix the update so the loop moves toward the condition becoming false.",
      "code": "public class BugFixBase012 { public static void main(String[] args){ for (int i=0; i<3; i--) { System.out.println(i); } } }\n",
      "clues": [
        "The variable is moving the wrong direction."
      ],
      "officialReview": "Use i++ instead of i--.",
      "commonMistake": "Only checking the condition and not the update direction.",
      "selfCheck": "How do you know a loop will eventually stop?",
      "concepts": [
        "loop update"
      ],
      "level": "base"
    },
    {
      "id": "base-013",
      "title": "Integer average",
      "topic": "Java Basics",
      "skill": "integer vs floating-point division",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase013.java",
      "bugReport": "Average prints 2.0 instead of 2.5.",
      "actualBehavior": "2.0",
      "expectedBehavior": "2.5",
      "task": "Fix the calculation so division uses a double.",
      "code": "public class BugFixBase013 { public static void main(String[] args){ int total = 5; double avg = total / 2; System.out.println(avg); } }\n",
      "clues": [
        "Both operands are int before assignment to double."
      ],
      "officialReview": "Use total / 2.0 or cast one operand to double.",
      "commonMistake": "Thinking a double variable automatically makes the division decimal.",
      "selfCheck": "Which part must be double before division happens?",
      "concepts": [
        "integer vs floating-point division"
      ],
      "level": "base"
    },
    {
      "id": "base-014",
      "title": "Method changes copy",
      "topic": "Methods",
      "skill": "parameters and mutation",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase014.java",
      "bugReport": "The method should update the returned value, but the caller's int stays unchanged.",
      "actualBehavior": "5",
      "expectedBehavior": "6",
      "task": "Return the changed value or use a mutable object if mutation is intended.",
      "code": "public class BugFixBase014 { static void addOne(int x){ x++; } public static void main(String[] args){ int n=5; addOne(n); System.out.println(n); } }\n",
      "clues": [
        "Primitive parameters are copied into the method."
      ],
      "officialReview": "Change the method to return x + 1 and assign the result.",
      "commonMistake": "Expecting a method to mutate a primitive argument directly.",
      "selfCheck": "What is passed into a method when the parameter is int?",
      "concepts": [
        "parameters and mutation"
      ],
      "level": "base"
    },
    {
      "id": "base-015",
      "title": "toString not used",
      "topic": "equals(), ==, =, and toString()",
      "skill": "toString signature",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase015.java",
      "bugReport": "Printing the object shows a class name/hash instead of readable text.",
      "actualBehavior": "CLASS_NAME$Book@...",
      "expectedBehavior": "Book: Java",
      "task": "Fix the method signature so Java recognizes it as toString().",
      "code": "public class BugFixBase015 { static class Book { String title=\"Java\"; public String tostring(){ return \"Book: \" + title; } } public static void main(String[] args){ System.out.println(new Book()); } }\n",
      "clues": [
        "The name must be exactly toString with no parameters."
      ],
      "officialReview": "Use public String toString() and add @Override.",
      "commonMistake": "Writing tostring or adding a parameter.",
      "selfCheck": "Why should @Override be used for toString?",
      "concepts": [
        "toString signature"
      ],
      "level": "base"
    },
    {
      "id": "base-016",
      "title": "Superclass constructor missing",
      "topic": "Inheritance and Polymorphism",
      "skill": "super constructor calls",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase016.java",
      "bugReport": "The subclass does not compile because the superclass has no no-arg constructor.",
      "actualBehavior": "constructor Person cannot be applied",
      "expectedBehavior": "Student: Mina",
      "task": "Call the superclass constructor from the subclass constructor.",
      "code": "public class BugFixBase016 { static class Person { String name; Person(String name){ this.name=name; } } static class Student extends Person { Student(String name){} } public static void main(String[] args){ System.out.println(new Student(\"Mina\").name); } }\n",
      "clues": [
        "Person requires a name."
      ],
      "officialReview": "Add super(name); as the first line in Student's constructor.",
      "commonMistake": "Forgetting that superclass construction happens first.",
      "selfCheck": "Why must super(...) be first?",
      "concepts": [
        "super constructor calls"
      ],
      "level": "base"
    },
    {
      "id": "base-017",
      "title": "Final reassignment",
      "topic": "Static, Final, Memory, and Garbage Collection",
      "skill": "final variables",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase017.java",
      "bugReport": "The code tries to change a final variable.",
      "actualBehavior": "cannot assign a value to final variable",
      "expectedBehavior": "constant remains 10",
      "task": "Remove the reassignment or do not make it final if it must change.",
      "code": "public class BugFixBase017 { public static void main(String[] args){ final int LIMIT = 10; LIMIT = 12; System.out.println(LIMIT); } }\n",
      "clues": [
        "final means the variable cannot be reassigned."
      ],
      "officialReview": "Keep LIMIT unchanged or use a non-final variable for changing state.",
      "commonMistake": "Using final on a value that is supposed to change.",
      "selfCheck": "What does final prevent for a variable?",
      "concepts": [
        "final variables"
      ],
      "level": "base"
    },
    {
      "id": "base-018",
      "title": "Graphics method case",
      "topic": "Graphics",
      "skill": "paintComponent signature",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase018.java",
      "bugReport": "The custom drawing method is never called by Swing.",
      "actualBehavior": "blank panel",
      "expectedBehavior": "draws oval",
      "task": "Fix the method signature so it overrides paintComponent.",
      "code": "import javax.swing.*; import java.awt.*; public class BugFixBase018 extends JPanel { protected void PaintComponent(Graphics g){ super.paintComponent(g); g.drawOval(10,10,30,30); } }\n",
      "clues": [
        "Java method names are case-sensitive."
      ],
      "officialReview": "Use protected void paintComponent(Graphics g), then call super.paintComponent(g).",
      "commonMistake": "Writing PaintComponent or forgetting the Graphics parameter.",
      "selfCheck": "Why does the exact signature matter?",
      "concepts": [
        "paintComponent signature"
      ],
      "level": "base"
    },
    {
      "id": "base-019",
      "title": "Scanner nextLine skip",
      "topic": "Java Basics",
      "skill": "Scanner input order",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase019.java",
      "bugReport": "The name input is skipped after reading an int.",
      "actualBehavior": "empty name",
      "expectedBehavior": "typed name",
      "task": "Consume the leftover newline before calling nextLine for the name.",
      "code": "import java.util.*; public class BugFixBase019 { public static void main(String[] args){ Scanner s = new Scanner(System.in); int age = s.nextInt(); String name = s.nextLine(); System.out.println(name + \" \" + age); } }\n",
      "clues": [
        "nextInt leaves the newline in the input buffer."
      ],
      "officialReview": "Call scanner.nextLine() once after nextInt(), then read the real line.",
      "commonMistake": "Mixing nextInt and nextLine without handling the newline.",
      "selfCheck": "Why does nextLine sometimes read an empty string after nextInt?",
      "concepts": [
        "Scanner input order"
      ],
      "level": "base"
    },
    {
      "id": "base-020",
      "title": "2D array swapped indexes",
      "topic": "Arrays and ArrayLists",
      "skill": "multidimensional arrays",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase020.java",
      "bugReport": "The code reads the wrong cell from a grid.",
      "actualBehavior": "5",
      "expectedBehavior": "6",
      "task": "Use row first, then column.",
      "code": "public class BugFixBase020 { public static void main(String[] args){ int[][] grid={{1,2,3},{4,5,6}}; System.out.println(grid[1][1]); } }\n",
      "clues": [
        "grid[row][column], not grid[column][row]."
      ],
      "officialReview": "Change grid[1][0] or the intended target depending on the question.",
      "commonMistake": "Swapping row and column order.",
      "selfCheck": "Which index is row and which is column?",
      "concepts": [
        "multidimensional arrays"
      ],
      "level": "base"
    },
    {
      "id": "base-021",
      "title": "Catch order",
      "topic": "Exceptions, Files, and Null Pointers",
      "skill": "exception catch order",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase021.java",
      "bugReport": "The code does not compile because a broad catch comes first.",
      "actualBehavior": "unreachable catch block",
      "expectedBehavior": "specific catch first",
      "task": "Put the more specific exception before the broader exception.",
      "code": "public class BugFixBase021 { public static void main(String[] args){ try { String s=null; System.out.println(s.length()); } catch (Exception e) { System.out.println(\"problem\"); } catch (NullPointerException e) { System.out.println(\"null\"); } } }\n",
      "clues": [
        "Exception catches every subclass exception too."
      ],
      "officialReview": "Catch NullPointerException before Exception.",
      "commonMistake": "Catching Exception first and making later specific catches unreachable.",
      "selfCheck": "Why does catch order matter?",
      "concepts": [
        "exception catch order"
      ],
      "level": "base"
    },
    {
      "id": "base-022",
      "title": "Abstract method missing",
      "topic": "Inheritance and Polymorphism",
      "skill": "abstract method implementation",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase022.java",
      "bugReport": "The concrete subclass does not compile.",
      "actualBehavior": "is not abstract and does not override",
      "expectedBehavior": "prints area",
      "task": "Implement the abstract method or make the subclass abstract.",
      "code": "public class BugFixBase022 { static abstract class Shape { abstract double area(); } static class Rectangle extends Shape { double w=3,h=4; } public static void main(String[] args){ System.out.println(new Rectangle().area()); } }\n",
      "clues": [
        "Any concrete subclass must implement all inherited abstract methods."
      ],
      "officialReview": "Add double area() in Rectangle.",
      "commonMistake": "Extending an abstract class without implementing required methods.",
      "selfCheck": "What must a non-abstract subclass provide?",
      "concepts": [
        "abstract method implementation"
      ],
      "level": "base"
    },
    {
      "id": "base-023",
      "title": "ArrayList primitive type",
      "topic": "Arrays and ArrayLists",
      "skill": "generic types",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase023.java",
      "bugReport": "The ArrayList declaration does not compile.",
      "actualBehavior": "unexpected type",
      "expectedBehavior": "ArrayList<Integer>",
      "task": "Use the wrapper class for primitive values.",
      "code": "import java.util.*; public class BugFixBase023 { public static void main(String[] args){ ArrayList<int> nums = new ArrayList<>(); nums.add(3); System.out.println(nums); } }\n",
      "clues": [
        "Generics need reference types, not primitives."
      ],
      "officialReview": "Use ArrayList<Integer> instead of ArrayList<int>.",
      "commonMistake": "Putting primitive types inside generic angle brackets.",
      "selfCheck": "Why does ArrayList use Integer instead of int?",
      "concepts": [
        "generic types"
      ],
      "level": "base"
    },
    {
      "id": "base-024",
      "title": "Copy constructor alias",
      "topic": "Constructors",
      "skill": "copy constructor and object references",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase024.java",
      "bugReport": "The copy shares the same array, so changing one changes the other.",
      "actualBehavior": "both changed",
      "expectedBehavior": "copy independent",
      "task": "Make a defensive copy of mutable fields.",
      "code": "import java.util.*; public class BugFixBase024 { static class Scores { int[] values; Scores(int[] values){ this.values=values; } Scores(Scores other){ this.values=other.values; } } public static void main(String[] args){ Scores a=new Scores(new int[]{1,2}); Scores b=new Scores(a); b.values[0]=9; System.out.println(a.values[0]); } }\n",
      "clues": [
        "The array reference was copied, not the array contents."
      ],
      "officialReview": "Use scores.clone() or Arrays.copyOf in the copy constructor.",
      "commonMistake": "Copying object references when an independent copy is expected.",
      "selfCheck": "What is the difference between copying a reference and copying an object?",
      "concepts": [
        "copy constructor and object references"
      ],
      "level": "base"
    },
    {
      "id": "base-025",
      "title": "Switch colon fall-through",
      "topic": "Conditions, Loops, and Operators",
      "skill": "switch break",
      "filePath": "java-practice/bug-fix-lab/base/BugFixBase025.java",
      "bugReport": "The switch prints more than one label.",
      "actualBehavior": "Tue Other",
      "expectedBehavior": "Tue",
      "task": "Add break statements or use arrow cases.",
      "code": "public class BugFixBase025 { public static void main(String[] args){ int day=2; switch(day){ case 2: System.out.println(\"Tue\"); default: System.out.println(\"Other\"); } } }\n",
      "clues": [
        "Colon switch cases fall through without break."
      ],
      "officialReview": "Add break after case 2.",
      "commonMistake": "Assuming all switch syntax behaves like arrow cases.",
      "selfCheck": "What is fall-through?",
      "concepts": [
        "switch break"
      ],
      "level": "base"
    }
  ],
  "extras": {
    "level1": [
      {
        "id": "level1-001",
        "title": "Loop condition stops too early",
        "topic": "Conditions, Loops, and Operators",
        "skill": "loop condition",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1001.java",
        "bugReport": "The loop misses the last item it should process.",
        "actualBehavior": "prints 0 1",
        "expectedBehavior": "prints 0 1 2",
        "task": "Fix the condition so all intended values are included.",
        "code": "public class BugFixLevel1001 { public static void main(String[] args){ for(int i=0; i<2; i++){ System.out.println(i); } } }\n",
        "clues": [
          "Compare < and <= carefully."
        ],
        "officialReview": "Adjust the boundary to include the final intended value.",
        "commonMistake": "Changing the update instead of the condition.",
        "selfCheck": "Which values should the loop visit?",
        "concepts": [
          "loop condition"
        ],
        "level": "level1"
      },
      {
        "id": "level1-002",
        "title": "Wrong array accumulator start",
        "topic": "Arrays and ArrayLists",
        "skill": "accumulator initialization",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1002.java",
        "bugReport": "The sum is too large because total starts with an old value.",
        "actualBehavior": "16",
        "expectedBehavior": "12",
        "task": "Initialize the accumulator correctly before the loop.",
        "code": "public class BugFixLevel1002 { public static void main(String[] args){ int[] nums={2,4,6}; int total=4; for(int n: nums){ total += n; } System.out.println(total); } }\n",
        "clues": [
          "Check the value before the loop starts."
        ],
        "officialReview": "Set total to 0 before adding array values.",
        "commonMistake": "Looking only inside the loop and ignoring initialization.",
        "selfCheck": "What should total be before any numbers are added?",
        "concepts": [
          "accumulator initialization"
        ],
        "level": "level1"
      },
      {
        "id": "level1-003",
        "title": "Method call ignored",
        "topic": "Methods",
        "skill": "using return values",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1003.java",
        "bugReport": "The method computes a value, but main prints the old value.",
        "actualBehavior": "10",
        "expectedBehavior": "20",
        "task": "Store or print the return value from the method.",
        "code": "public class BugFixLevel1003 { static int doubleIt(int x){ return x*2; } public static void main(String[] args){ int n=10; doubleIt(n); System.out.println(n); } }\n",
        "clues": [
          "The method returns a new value but does not change n by itself."
        ],
        "officialReview": "Use n = doubleIt(n); before printing.",
        "commonMistake": "Calling a return method and ignoring the returned value.",
        "selfCheck": "What happens to a return value if you do not store it?",
        "concepts": [
          "using return values"
        ],
        "level": "level1"
      },
      {
        "id": "level1-004",
        "title": "Constructor name typo",
        "topic": "Constructors",
        "skill": "constructor naming",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1004.java",
        "bugReport": "The class compiles strangely or has no intended constructor.",
        "actualBehavior": "default state",
        "expectedBehavior": "initialized state",
        "task": "Make the constructor name match the class exactly.",
        "code": "public class BugFixLevel1004 { static class Robot { String id; public void robot(String id){ this.id=id; } } public static void main(String[] args){ Robot r=new Robot(); r.robot(\"R2\"); System.out.println(r.id); } }\n",
        "clues": [
          "Constructors must have exactly the same name as the class."
        ],
        "officialReview": "Rename the method-like member to the class name and remove return type if needed.",
        "commonMistake": "Changing capitalization and accidentally making a method.",
        "selfCheck": "How can you tell a constructor from a method?",
        "concepts": [
          "constructor naming"
        ],
        "level": "level1"
      },
      {
        "id": "level1-005",
        "title": "Wrong equals signature",
        "topic": "equals(), ==, =, and toString()",
        "skill": "equals override signature",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1005.java",
        "bugReport": "The custom equals is not used in normal object comparison.",
        "actualBehavior": "false",
        "expectedBehavior": "true",
        "task": "Use the correct equals(Object other) signature.",
        "code": "public class BugFixLevel1005 { static class Book { String title; Book(String title){this.title=title;} public boolean equals(Book other){ return title.equals(other.title); } } public static void main(String[] args){ Object a=new Book(\"Java\"); Object b=new Book(\"Java\"); System.out.println(a.equals(b)); } }\n",
        "clues": [
          "The parameter type must be Object to override Object.equals."
        ],
        "officialReview": "Change equals(Book other) to equals(Object other), check type, then compare fields.",
        "commonMistake": "Overloading equals instead of overriding it.",
        "selfCheck": "Why should equals take Object?",
        "concepts": [
          "equals override signature"
        ],
        "level": "level1"
      },
      {
        "id": "level1-006",
        "title": "Wrong super call",
        "topic": "Inheritance and Polymorphism",
        "skill": "super method use",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1006.java",
        "bugReport": "The subclass method duplicates work but skips superclass behavior.",
        "actualBehavior": "missing base info",
        "expectedBehavior": "base + detail",
        "task": "Call the superclass version when extending behavior.",
        "code": "public class BugFixLevel1006 { static class Person { String describe(){ return \"Person\"; } } static class Student extends Person { String describe(){ return \"Student\"; } } public static void main(String[] args){ System.out.println(new Student().describe()); } }\n",
        "clues": [
          "super.methodName() runs the inherited method."
        ],
        "officialReview": "Use super.describe() and add the subclass detail.",
        "commonMistake": "Replacing behavior when the task asked to extend behavior.",
        "selfCheck": "When should a subclass call super.method()?",
        "concepts": [
          "super method use"
        ],
        "level": "level1"
      },
      {
        "id": "level1-007",
        "title": "File Scanner not closed",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "file resource handling",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1007.java",
        "bugReport": "The code works, but leaves the Scanner open.",
        "actualBehavior": "resource leak warning",
        "expectedBehavior": "scanner closed",
        "task": "Use try-with-resources for file reading.",
        "code": "import java.io.*; import java.util.*; public class BugFixLevel1007 { public static void main(String[] args) throws Exception { Scanner in = new Scanner(new File(\"data.txt\")); if(in.hasNextLine()) System.out.println(in.nextLine()); } }\n",
        "clues": [
          "Objects that manage files should be closed."
        ],
        "officialReview": "Use try (Scanner in = new Scanner(file)) { ... }.",
        "commonMistake": "Ignoring resource warnings because the output looks right.",
        "selfCheck": "Why is try-with-resources helpful?",
        "concepts": [
          "file resource handling"
        ],
        "level": "level1"
      },
      {
        "id": "level1-008",
        "title": "Graphics forgot super",
        "topic": "Graphics",
        "skill": "Swing painting lifecycle",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1008.java",
        "bugReport": "The drawing may leave visual artifacts when repainted.",
        "actualBehavior": "dirty repaint",
        "expectedBehavior": "clean repaint",
        "task": "Call the superclass paintComponent first.",
        "code": "import javax.swing.*; import java.awt.*; public class BugFixLevel1008 extends JPanel { protected void paintComponent(Graphics g){ g.fillRect(10,10,40,40); } }\n",
        "clues": [
          "super.paintComponent(g) clears/prepares the panel."
        ],
        "officialReview": "Add super.paintComponent(g); at the start of paintComponent.",
        "commonMistake": "Drawing directly without letting Swing prepare the component.",
        "selfCheck": "Why call super.paintComponent(g)?",
        "concepts": [
          "Swing painting lifecycle"
        ],
        "level": "level1"
      },
      {
        "id": "level1-009",
        "title": "Interface method too private",
        "topic": "Interfaces and KeyListener",
        "skill": "interface method visibility",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1009.java",
        "bugReport": "The implementation does not compile because the method has weaker access.",
        "actualBehavior": "attempting weaker access",
        "expectedBehavior": "class compiles",
        "task": "Make the implemented method public.",
        "code": "public class BugFixLevel1009 { interface Drawable { void draw(); } static class Icon implements Drawable { void draw(){ System.out.println(\"*\"); } } }\n",
        "clues": [
          "Interface methods are public contracts."
        ],
        "officialReview": "Change void draw() to public void draw().",
        "commonMistake": "Forgetting that implemented interface methods must be public.",
        "selfCheck": "Why cannot an implementation reduce visibility?",
        "concepts": [
          "interface method visibility"
        ],
        "level": "level1"
      },
      {
        "id": "level1-010",
        "title": "Record canonical constructor assignment",
        "topic": "Records vs Classes",
        "skill": "record constructor rules",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1010.java",
        "bugReport": "The record constructor tries to assign component fields directly.",
        "actualBehavior": "cannot assign final field",
        "expectedBehavior": "valid compact constructor",
        "task": "Use a compact constructor or validate parameters correctly.",
        "code": "public class BugFixLevel1010 { record Course(String code, int credits) { public Course(String code, int credits) { this.code = code; this.credits = credits; } } }\n",
        "clues": [
          "Record components are final fields managed by the record."
        ],
        "officialReview": "Use public Course { if (credits < 0) throw ...; } for validation.",
        "commonMistake": "Treating record fields like normal mutable fields.",
        "selfCheck": "What is a compact constructor in a record?",
        "concepts": [
          "record constructor rules"
        ],
        "level": "level1"
      },
      {
        "id": "level1-011",
        "title": "Loop condition stops too early 11",
        "topic": "Conditions, Loops, and Operators",
        "skill": "loop condition",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1011.java",
        "bugReport": "The loop misses the last item it should process.",
        "actualBehavior": "prints 0 1",
        "expectedBehavior": "prints 0 1 2",
        "task": "Fix the condition so all intended values are included.",
        "code": "public class BugFixLevel1011 { public static void main(String[] args){ for(int i=0; i<2; i++){ System.out.println(i); } } }\n",
        "clues": [
          "Compare < and <= carefully."
        ],
        "officialReview": "Adjust the boundary to include the final intended value.",
        "commonMistake": "Changing the update instead of the condition.",
        "selfCheck": "Which values should the loop visit?",
        "concepts": [
          "loop condition"
        ],
        "level": "level1"
      },
      {
        "id": "level1-012",
        "title": "Wrong array accumulator start 12",
        "topic": "Arrays and ArrayLists",
        "skill": "accumulator initialization",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1012.java",
        "bugReport": "The sum is too large because total starts with an old value.",
        "actualBehavior": "16",
        "expectedBehavior": "12",
        "task": "Initialize the accumulator correctly before the loop.",
        "code": "public class BugFixLevel1012 { public static void main(String[] args){ int[] nums={2,4,6}; int total=4; for(int n: nums){ total += n; } System.out.println(total); } }\n",
        "clues": [
          "Check the value before the loop starts."
        ],
        "officialReview": "Set total to 0 before adding array values.",
        "commonMistake": "Looking only inside the loop and ignoring initialization.",
        "selfCheck": "What should total be before any numbers are added?",
        "concepts": [
          "accumulator initialization"
        ],
        "level": "level1"
      },
      {
        "id": "level1-013",
        "title": "Method call ignored 13",
        "topic": "Methods",
        "skill": "using return values",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1013.java",
        "bugReport": "The method computes a value, but main prints the old value.",
        "actualBehavior": "10",
        "expectedBehavior": "20",
        "task": "Store or print the return value from the method.",
        "code": "public class BugFixLevel1013 { static int doubleIt(int x){ return x*2; } public static void main(String[] args){ int n=10; doubleIt(n); System.out.println(n); } }\n",
        "clues": [
          "The method returns a new value but does not change n by itself."
        ],
        "officialReview": "Use n = doubleIt(n); before printing.",
        "commonMistake": "Calling a return method and ignoring the returned value.",
        "selfCheck": "What happens to a return value if you do not store it?",
        "concepts": [
          "using return values"
        ],
        "level": "level1"
      },
      {
        "id": "level1-014",
        "title": "Constructor name typo 14",
        "topic": "Constructors",
        "skill": "constructor naming",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1014.java",
        "bugReport": "The class compiles strangely or has no intended constructor.",
        "actualBehavior": "default state",
        "expectedBehavior": "initialized state",
        "task": "Make the constructor name match the class exactly.",
        "code": "public class BugFixLevel1014 { static class Robot { String id; public void robot(String id){ this.id=id; } } public static void main(String[] args){ Robot r=new Robot(); r.robot(\"R2\"); System.out.println(r.id); } }\n",
        "clues": [
          "Constructors must have exactly the same name as the class."
        ],
        "officialReview": "Rename the method-like member to the class name and remove return type if needed.",
        "commonMistake": "Changing capitalization and accidentally making a method.",
        "selfCheck": "How can you tell a constructor from a method?",
        "concepts": [
          "constructor naming"
        ],
        "level": "level1"
      },
      {
        "id": "level1-015",
        "title": "Wrong equals signature 15",
        "topic": "equals(), ==, =, and toString()",
        "skill": "equals override signature",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1015.java",
        "bugReport": "The custom equals is not used in normal object comparison.",
        "actualBehavior": "false",
        "expectedBehavior": "true",
        "task": "Use the correct equals(Object other) signature.",
        "code": "public class BugFixLevel1015 { static class Book { String title; Book(String title){this.title=title;} public boolean equals(Book other){ return title.equals(other.title); } } public static void main(String[] args){ Object a=new Book(\"Java\"); Object b=new Book(\"Java\"); System.out.println(a.equals(b)); } }\n",
        "clues": [
          "The parameter type must be Object to override Object.equals."
        ],
        "officialReview": "Change equals(Book other) to equals(Object other), check type, then compare fields.",
        "commonMistake": "Overloading equals instead of overriding it.",
        "selfCheck": "Why should equals take Object?",
        "concepts": [
          "equals override signature"
        ],
        "level": "level1"
      },
      {
        "id": "level1-016",
        "title": "Wrong super call 16",
        "topic": "Inheritance and Polymorphism",
        "skill": "super method use",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1016.java",
        "bugReport": "The subclass method duplicates work but skips superclass behavior.",
        "actualBehavior": "missing base info",
        "expectedBehavior": "base + detail",
        "task": "Call the superclass version when extending behavior.",
        "code": "public class BugFixLevel1016 { static class Person { String describe(){ return \"Person\"; } } static class Student extends Person { String describe(){ return \"Student\"; } } public static void main(String[] args){ System.out.println(new Student().describe()); } }\n",
        "clues": [
          "super.methodName() runs the inherited method."
        ],
        "officialReview": "Use super.describe() and add the subclass detail.",
        "commonMistake": "Replacing behavior when the task asked to extend behavior.",
        "selfCheck": "When should a subclass call super.method()?",
        "concepts": [
          "super method use"
        ],
        "level": "level1"
      },
      {
        "id": "level1-017",
        "title": "File Scanner not closed 17",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "file resource handling",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1017.java",
        "bugReport": "The code works, but leaves the Scanner open.",
        "actualBehavior": "resource leak warning",
        "expectedBehavior": "scanner closed",
        "task": "Use try-with-resources for file reading.",
        "code": "import java.io.*; import java.util.*; public class BugFixLevel1017 { public static void main(String[] args) throws Exception { Scanner in = new Scanner(new File(\"data.txt\")); if(in.hasNextLine()) System.out.println(in.nextLine()); } }\n",
        "clues": [
          "Objects that manage files should be closed."
        ],
        "officialReview": "Use try (Scanner in = new Scanner(file)) { ... }.",
        "commonMistake": "Ignoring resource warnings because the output looks right.",
        "selfCheck": "Why is try-with-resources helpful?",
        "concepts": [
          "file resource handling"
        ],
        "level": "level1"
      },
      {
        "id": "level1-018",
        "title": "Graphics forgot super 18",
        "topic": "Graphics",
        "skill": "Swing painting lifecycle",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1018.java",
        "bugReport": "The drawing may leave visual artifacts when repainted.",
        "actualBehavior": "dirty repaint",
        "expectedBehavior": "clean repaint",
        "task": "Call the superclass paintComponent first.",
        "code": "import javax.swing.*; import java.awt.*; public class BugFixLevel1018 extends JPanel { protected void paintComponent(Graphics g){ g.fillRect(10,10,40,40); } }\n",
        "clues": [
          "super.paintComponent(g) clears/prepares the panel."
        ],
        "officialReview": "Add super.paintComponent(g); at the start of paintComponent.",
        "commonMistake": "Drawing directly without letting Swing prepare the component.",
        "selfCheck": "Why call super.paintComponent(g)?",
        "concepts": [
          "Swing painting lifecycle"
        ],
        "level": "level1"
      },
      {
        "id": "level1-019",
        "title": "Interface method too private 19",
        "topic": "Interfaces and KeyListener",
        "skill": "interface method visibility",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1019.java",
        "bugReport": "The implementation does not compile because the method has weaker access.",
        "actualBehavior": "attempting weaker access",
        "expectedBehavior": "class compiles",
        "task": "Make the implemented method public.",
        "code": "public class BugFixLevel1019 { interface Drawable { void draw(); } static class Icon implements Drawable { void draw(){ System.out.println(\"*\"); } } }\n",
        "clues": [
          "Interface methods are public contracts."
        ],
        "officialReview": "Change void draw() to public void draw().",
        "commonMistake": "Forgetting that implemented interface methods must be public.",
        "selfCheck": "Why cannot an implementation reduce visibility?",
        "concepts": [
          "interface method visibility"
        ],
        "level": "level1"
      },
      {
        "id": "level1-020",
        "title": "Record canonical constructor assignment 20",
        "topic": "Records vs Classes",
        "skill": "record constructor rules",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1020.java",
        "bugReport": "The record constructor tries to assign component fields directly.",
        "actualBehavior": "cannot assign final field",
        "expectedBehavior": "valid compact constructor",
        "task": "Use a compact constructor or validate parameters correctly.",
        "code": "public class BugFixLevel1020 { record Course(String code, int credits) { public Course(String code, int credits) { this.code = code; this.credits = credits; } } }\n",
        "clues": [
          "Record components are final fields managed by the record."
        ],
        "officialReview": "Use public Course { if (credits < 0) throw ...; } for validation.",
        "commonMistake": "Treating record fields like normal mutable fields.",
        "selfCheck": "What is a compact constructor in a record?",
        "concepts": [
          "record constructor rules"
        ],
        "level": "level1"
      },
      {
        "id": "level1-021",
        "title": "Loop condition stops too early 21",
        "topic": "Conditions, Loops, and Operators",
        "skill": "loop condition",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1021.java",
        "bugReport": "The loop misses the last item it should process.",
        "actualBehavior": "prints 0 1",
        "expectedBehavior": "prints 0 1 2",
        "task": "Fix the condition so all intended values are included.",
        "code": "public class BugFixLevel1021 { public static void main(String[] args){ for(int i=0; i<2; i++){ System.out.println(i); } } }\n",
        "clues": [
          "Compare < and <= carefully."
        ],
        "officialReview": "Adjust the boundary to include the final intended value.",
        "commonMistake": "Changing the update instead of the condition.",
        "selfCheck": "Which values should the loop visit?",
        "concepts": [
          "loop condition"
        ],
        "level": "level1"
      },
      {
        "id": "level1-022",
        "title": "Wrong array accumulator start 22",
        "topic": "Arrays and ArrayLists",
        "skill": "accumulator initialization",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1022.java",
        "bugReport": "The sum is too large because total starts with an old value.",
        "actualBehavior": "16",
        "expectedBehavior": "12",
        "task": "Initialize the accumulator correctly before the loop.",
        "code": "public class BugFixLevel1022 { public static void main(String[] args){ int[] nums={2,4,6}; int total=4; for(int n: nums){ total += n; } System.out.println(total); } }\n",
        "clues": [
          "Check the value before the loop starts."
        ],
        "officialReview": "Set total to 0 before adding array values.",
        "commonMistake": "Looking only inside the loop and ignoring initialization.",
        "selfCheck": "What should total be before any numbers are added?",
        "concepts": [
          "accumulator initialization"
        ],
        "level": "level1"
      },
      {
        "id": "level1-023",
        "title": "Method call ignored 23",
        "topic": "Methods",
        "skill": "using return values",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1023.java",
        "bugReport": "The method computes a value, but main prints the old value.",
        "actualBehavior": "10",
        "expectedBehavior": "20",
        "task": "Store or print the return value from the method.",
        "code": "public class BugFixLevel1023 { static int doubleIt(int x){ return x*2; } public static void main(String[] args){ int n=10; doubleIt(n); System.out.println(n); } }\n",
        "clues": [
          "The method returns a new value but does not change n by itself."
        ],
        "officialReview": "Use n = doubleIt(n); before printing.",
        "commonMistake": "Calling a return method and ignoring the returned value.",
        "selfCheck": "What happens to a return value if you do not store it?",
        "concepts": [
          "using return values"
        ],
        "level": "level1"
      },
      {
        "id": "level1-024",
        "title": "Constructor name typo 24",
        "topic": "Constructors",
        "skill": "constructor naming",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1024.java",
        "bugReport": "The class compiles strangely or has no intended constructor.",
        "actualBehavior": "default state",
        "expectedBehavior": "initialized state",
        "task": "Make the constructor name match the class exactly.",
        "code": "public class BugFixLevel1024 { static class Robot { String id; public void robot(String id){ this.id=id; } } public static void main(String[] args){ Robot r=new Robot(); r.robot(\"R2\"); System.out.println(r.id); } }\n",
        "clues": [
          "Constructors must have exactly the same name as the class."
        ],
        "officialReview": "Rename the method-like member to the class name and remove return type if needed.",
        "commonMistake": "Changing capitalization and accidentally making a method.",
        "selfCheck": "How can you tell a constructor from a method?",
        "concepts": [
          "constructor naming"
        ],
        "level": "level1"
      },
      {
        "id": "level1-025",
        "title": "Wrong equals signature 25",
        "topic": "equals(), ==, =, and toString()",
        "skill": "equals override signature",
        "filePath": "java-practice/bug-fix-lab/level1/BugFixLevel1025.java",
        "bugReport": "The custom equals is not used in normal object comparison.",
        "actualBehavior": "false",
        "expectedBehavior": "true",
        "task": "Use the correct equals(Object other) signature.",
        "code": "public class BugFixLevel1025 { static class Book { String title; Book(String title){this.title=title;} public boolean equals(Book other){ return title.equals(other.title); } } public static void main(String[] args){ Object a=new Book(\"Java\"); Object b=new Book(\"Java\"); System.out.println(a.equals(b)); } }\n",
        "clues": [
          "The parameter type must be Object to override Object.equals."
        ],
        "officialReview": "Change equals(Book other) to equals(Object other), check type, then compare fields.",
        "commonMistake": "Overloading equals instead of overriding it.",
        "selfCheck": "Why should equals take Object?",
        "concepts": [
          "equals override signature"
        ],
        "level": "level1"
      }
    ],
    "level2": [
      {
        "id": "level2-001",
        "title": "Loop condition stops too early",
        "topic": "Conditions, Loops, and Operators",
        "skill": "loop condition",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2001.java",
        "bugReport": "The loop misses the last item it should process.",
        "actualBehavior": "prints 0 1",
        "expectedBehavior": "prints 0 1 2",
        "task": "Fix the condition so all intended values are included. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2001 { public static void main(String[] args){ for(int i=0; i<2; i++){ System.out.println(i); } } }\n",
        "clues": [],
        "officialReview": "Solo review: Adjust the boundary to include the final intended value.",
        "commonMistake": "Changing the update instead of the condition.",
        "selfCheck": "Which values should the loop visit?",
        "concepts": [
          "loop condition"
        ],
        "level": "level2"
      },
      {
        "id": "level2-002",
        "title": "Wrong array accumulator start",
        "topic": "Arrays and ArrayLists",
        "skill": "accumulator initialization",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2002.java",
        "bugReport": "The sum is too large because total starts with an old value.",
        "actualBehavior": "16",
        "expectedBehavior": "12",
        "task": "Initialize the accumulator correctly before the loop. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2002 { public static void main(String[] args){ int[] nums={2,4,6}; int total=4; for(int n: nums){ total += n; } System.out.println(total); } }\n",
        "clues": [],
        "officialReview": "Solo review: Set total to 0 before adding array values.",
        "commonMistake": "Looking only inside the loop and ignoring initialization.",
        "selfCheck": "What should total be before any numbers are added?",
        "concepts": [
          "accumulator initialization"
        ],
        "level": "level2"
      },
      {
        "id": "level2-003",
        "title": "Method call ignored",
        "topic": "Methods",
        "skill": "using return values",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2003.java",
        "bugReport": "The method computes a value, but main prints the old value.",
        "actualBehavior": "10",
        "expectedBehavior": "20",
        "task": "Store or print the return value from the method. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2003 { static int doubleIt(int x){ return x*2; } public static void main(String[] args){ int n=10; doubleIt(n); System.out.println(n); } }\n",
        "clues": [],
        "officialReview": "Solo review: Use n = doubleIt(n); before printing.",
        "commonMistake": "Calling a return method and ignoring the returned value.",
        "selfCheck": "What happens to a return value if you do not store it?",
        "concepts": [
          "using return values"
        ],
        "level": "level2"
      },
      {
        "id": "level2-004",
        "title": "Constructor name typo",
        "topic": "Constructors",
        "skill": "constructor naming",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2004.java",
        "bugReport": "The class compiles strangely or has no intended constructor.",
        "actualBehavior": "default state",
        "expectedBehavior": "initialized state",
        "task": "Make the constructor name match the class exactly. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2004 { static class Robot { String id; public void robot(String id){ this.id=id; } } public static void main(String[] args){ Robot r=new Robot(); r.robot(\"R2\"); System.out.println(r.id); } }\n",
        "clues": [],
        "officialReview": "Solo review: Rename the method-like member to the class name and remove return type if needed.",
        "commonMistake": "Changing capitalization and accidentally making a method.",
        "selfCheck": "How can you tell a constructor from a method?",
        "concepts": [
          "constructor naming"
        ],
        "level": "level2"
      },
      {
        "id": "level2-005",
        "title": "Wrong equals signature",
        "topic": "equals(), ==, =, and toString()",
        "skill": "equals override signature",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2005.java",
        "bugReport": "The custom equals is not used in normal object comparison.",
        "actualBehavior": "false",
        "expectedBehavior": "true",
        "task": "Use the correct equals(Object other) signature. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2005 { static class Book { String title; Book(String title){this.title=title;} public boolean equals(Book other){ return title.equals(other.title); } } public static void main(String[] args){ Object a=new Book(\"Java\"); Object b=new Book(\"Java\"); System.out.println(a.equals(b)); } }\n",
        "clues": [],
        "officialReview": "Solo review: Change equals(Book other) to equals(Object other), check type, then compare fields.",
        "commonMistake": "Overloading equals instead of overriding it.",
        "selfCheck": "Why should equals take Object?",
        "concepts": [
          "equals override signature"
        ],
        "level": "level2"
      },
      {
        "id": "level2-006",
        "title": "Wrong super call",
        "topic": "Inheritance and Polymorphism",
        "skill": "super method use",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2006.java",
        "bugReport": "The subclass method duplicates work but skips superclass behavior.",
        "actualBehavior": "missing base info",
        "expectedBehavior": "base + detail",
        "task": "Call the superclass version when extending behavior. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2006 { static class Person { String describe(){ return \"Person\"; } } static class Student extends Person { String describe(){ return \"Student\"; } } public static void main(String[] args){ System.out.println(new Student().describe()); } }\n",
        "clues": [],
        "officialReview": "Solo review: Use super.describe() and add the subclass detail.",
        "commonMistake": "Replacing behavior when the task asked to extend behavior.",
        "selfCheck": "When should a subclass call super.method()?",
        "concepts": [
          "super method use"
        ],
        "level": "level2"
      },
      {
        "id": "level2-007",
        "title": "File Scanner not closed",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "file resource handling",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2007.java",
        "bugReport": "The code works, but leaves the Scanner open.",
        "actualBehavior": "resource leak warning",
        "expectedBehavior": "scanner closed",
        "task": "Use try-with-resources for file reading. Work without a clue first, then compare after you attempt it.",
        "code": "import java.io.*; import java.util.*; public class BugFixLevel2007 { public static void main(String[] args) throws Exception { Scanner in = new Scanner(new File(\"data.txt\")); if(in.hasNextLine()) System.out.println(in.nextLine()); } }\n",
        "clues": [],
        "officialReview": "Solo review: Use try (Scanner in = new Scanner(file)) { ... }.",
        "commonMistake": "Ignoring resource warnings because the output looks right.",
        "selfCheck": "Why is try-with-resources helpful?",
        "concepts": [
          "file resource handling"
        ],
        "level": "level2"
      },
      {
        "id": "level2-008",
        "title": "Graphics forgot super",
        "topic": "Graphics",
        "skill": "Swing painting lifecycle",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2008.java",
        "bugReport": "The drawing may leave visual artifacts when repainted.",
        "actualBehavior": "dirty repaint",
        "expectedBehavior": "clean repaint",
        "task": "Call the superclass paintComponent first. Work without a clue first, then compare after you attempt it.",
        "code": "import javax.swing.*; import java.awt.*; public class BugFixLevel2008 extends JPanel { protected void paintComponent(Graphics g){ g.fillRect(10,10,40,40); } }\n",
        "clues": [],
        "officialReview": "Solo review: Add super.paintComponent(g); at the start of paintComponent.",
        "commonMistake": "Drawing directly without letting Swing prepare the component.",
        "selfCheck": "Why call super.paintComponent(g)?",
        "concepts": [
          "Swing painting lifecycle"
        ],
        "level": "level2"
      },
      {
        "id": "level2-009",
        "title": "Interface method too private",
        "topic": "Interfaces and KeyListener",
        "skill": "interface method visibility",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2009.java",
        "bugReport": "The implementation does not compile because the method has weaker access.",
        "actualBehavior": "attempting weaker access",
        "expectedBehavior": "class compiles",
        "task": "Make the implemented method public. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2009 { interface Drawable { void draw(); } static class Icon implements Drawable { void draw(){ System.out.println(\"*\"); } } }\n",
        "clues": [],
        "officialReview": "Solo review: Change void draw() to public void draw().",
        "commonMistake": "Forgetting that implemented interface methods must be public.",
        "selfCheck": "Why cannot an implementation reduce visibility?",
        "concepts": [
          "interface method visibility"
        ],
        "level": "level2"
      },
      {
        "id": "level2-010",
        "title": "Record canonical constructor assignment",
        "topic": "Records vs Classes",
        "skill": "record constructor rules",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2010.java",
        "bugReport": "The record constructor tries to assign component fields directly.",
        "actualBehavior": "cannot assign final field",
        "expectedBehavior": "valid compact constructor",
        "task": "Use a compact constructor or validate parameters correctly. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2010 { record Course(String code, int credits) { public Course(String code, int credits) { this.code = code; this.credits = credits; } } }\n",
        "clues": [],
        "officialReview": "Solo review: Use public Course { if (credits < 0) throw ...; } for validation.",
        "commonMistake": "Treating record fields like normal mutable fields.",
        "selfCheck": "What is a compact constructor in a record?",
        "concepts": [
          "record constructor rules"
        ],
        "level": "level2"
      },
      {
        "id": "level2-011",
        "title": "Loop condition stops too early 11",
        "topic": "Conditions, Loops, and Operators",
        "skill": "loop condition",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2011.java",
        "bugReport": "The loop misses the last item it should process.",
        "actualBehavior": "prints 0 1",
        "expectedBehavior": "prints 0 1 2",
        "task": "Fix the condition so all intended values are included. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2011 { public static void main(String[] args){ for(int i=0; i<2; i++){ System.out.println(i); } } }\n",
        "clues": [],
        "officialReview": "Solo review: Adjust the boundary to include the final intended value.",
        "commonMistake": "Changing the update instead of the condition.",
        "selfCheck": "Which values should the loop visit?",
        "concepts": [
          "loop condition"
        ],
        "level": "level2"
      },
      {
        "id": "level2-012",
        "title": "Wrong array accumulator start 12",
        "topic": "Arrays and ArrayLists",
        "skill": "accumulator initialization",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2012.java",
        "bugReport": "The sum is too large because total starts with an old value.",
        "actualBehavior": "16",
        "expectedBehavior": "12",
        "task": "Initialize the accumulator correctly before the loop. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2012 { public static void main(String[] args){ int[] nums={2,4,6}; int total=4; for(int n: nums){ total += n; } System.out.println(total); } }\n",
        "clues": [],
        "officialReview": "Solo review: Set total to 0 before adding array values.",
        "commonMistake": "Looking only inside the loop and ignoring initialization.",
        "selfCheck": "What should total be before any numbers are added?",
        "concepts": [
          "accumulator initialization"
        ],
        "level": "level2"
      },
      {
        "id": "level2-013",
        "title": "Method call ignored 13",
        "topic": "Methods",
        "skill": "using return values",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2013.java",
        "bugReport": "The method computes a value, but main prints the old value.",
        "actualBehavior": "10",
        "expectedBehavior": "20",
        "task": "Store or print the return value from the method. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2013 { static int doubleIt(int x){ return x*2; } public static void main(String[] args){ int n=10; doubleIt(n); System.out.println(n); } }\n",
        "clues": [],
        "officialReview": "Solo review: Use n = doubleIt(n); before printing.",
        "commonMistake": "Calling a return method and ignoring the returned value.",
        "selfCheck": "What happens to a return value if you do not store it?",
        "concepts": [
          "using return values"
        ],
        "level": "level2"
      },
      {
        "id": "level2-014",
        "title": "Constructor name typo 14",
        "topic": "Constructors",
        "skill": "constructor naming",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2014.java",
        "bugReport": "The class compiles strangely or has no intended constructor.",
        "actualBehavior": "default state",
        "expectedBehavior": "initialized state",
        "task": "Make the constructor name match the class exactly. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2014 { static class Robot { String id; public void robot(String id){ this.id=id; } } public static void main(String[] args){ Robot r=new Robot(); r.robot(\"R2\"); System.out.println(r.id); } }\n",
        "clues": [],
        "officialReview": "Solo review: Rename the method-like member to the class name and remove return type if needed.",
        "commonMistake": "Changing capitalization and accidentally making a method.",
        "selfCheck": "How can you tell a constructor from a method?",
        "concepts": [
          "constructor naming"
        ],
        "level": "level2"
      },
      {
        "id": "level2-015",
        "title": "Wrong equals signature 15",
        "topic": "equals(), ==, =, and toString()",
        "skill": "equals override signature",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2015.java",
        "bugReport": "The custom equals is not used in normal object comparison.",
        "actualBehavior": "false",
        "expectedBehavior": "true",
        "task": "Use the correct equals(Object other) signature. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2015 { static class Book { String title; Book(String title){this.title=title;} public boolean equals(Book other){ return title.equals(other.title); } } public static void main(String[] args){ Object a=new Book(\"Java\"); Object b=new Book(\"Java\"); System.out.println(a.equals(b)); } }\n",
        "clues": [],
        "officialReview": "Solo review: Change equals(Book other) to equals(Object other), check type, then compare fields.",
        "commonMistake": "Overloading equals instead of overriding it.",
        "selfCheck": "Why should equals take Object?",
        "concepts": [
          "equals override signature"
        ],
        "level": "level2"
      },
      {
        "id": "level2-016",
        "title": "Wrong super call 16",
        "topic": "Inheritance and Polymorphism",
        "skill": "super method use",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2016.java",
        "bugReport": "The subclass method duplicates work but skips superclass behavior.",
        "actualBehavior": "missing base info",
        "expectedBehavior": "base + detail",
        "task": "Call the superclass version when extending behavior. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2016 { static class Person { String describe(){ return \"Person\"; } } static class Student extends Person { String describe(){ return \"Student\"; } } public static void main(String[] args){ System.out.println(new Student().describe()); } }\n",
        "clues": [],
        "officialReview": "Solo review: Use super.describe() and add the subclass detail.",
        "commonMistake": "Replacing behavior when the task asked to extend behavior.",
        "selfCheck": "When should a subclass call super.method()?",
        "concepts": [
          "super method use"
        ],
        "level": "level2"
      },
      {
        "id": "level2-017",
        "title": "File Scanner not closed 17",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "file resource handling",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2017.java",
        "bugReport": "The code works, but leaves the Scanner open.",
        "actualBehavior": "resource leak warning",
        "expectedBehavior": "scanner closed",
        "task": "Use try-with-resources for file reading. Work without a clue first, then compare after you attempt it.",
        "code": "import java.io.*; import java.util.*; public class BugFixLevel2017 { public static void main(String[] args) throws Exception { Scanner in = new Scanner(new File(\"data.txt\")); if(in.hasNextLine()) System.out.println(in.nextLine()); } }\n",
        "clues": [],
        "officialReview": "Solo review: Use try (Scanner in = new Scanner(file)) { ... }.",
        "commonMistake": "Ignoring resource warnings because the output looks right.",
        "selfCheck": "Why is try-with-resources helpful?",
        "concepts": [
          "file resource handling"
        ],
        "level": "level2"
      },
      {
        "id": "level2-018",
        "title": "Graphics forgot super 18",
        "topic": "Graphics",
        "skill": "Swing painting lifecycle",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2018.java",
        "bugReport": "The drawing may leave visual artifacts when repainted.",
        "actualBehavior": "dirty repaint",
        "expectedBehavior": "clean repaint",
        "task": "Call the superclass paintComponent first. Work without a clue first, then compare after you attempt it.",
        "code": "import javax.swing.*; import java.awt.*; public class BugFixLevel2018 extends JPanel { protected void paintComponent(Graphics g){ g.fillRect(10,10,40,40); } }\n",
        "clues": [],
        "officialReview": "Solo review: Add super.paintComponent(g); at the start of paintComponent.",
        "commonMistake": "Drawing directly without letting Swing prepare the component.",
        "selfCheck": "Why call super.paintComponent(g)?",
        "concepts": [
          "Swing painting lifecycle"
        ],
        "level": "level2"
      },
      {
        "id": "level2-019",
        "title": "Interface method too private 19",
        "topic": "Interfaces and KeyListener",
        "skill": "interface method visibility",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2019.java",
        "bugReport": "The implementation does not compile because the method has weaker access.",
        "actualBehavior": "attempting weaker access",
        "expectedBehavior": "class compiles",
        "task": "Make the implemented method public. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2019 { interface Drawable { void draw(); } static class Icon implements Drawable { void draw(){ System.out.println(\"*\"); } } }\n",
        "clues": [],
        "officialReview": "Solo review: Change void draw() to public void draw().",
        "commonMistake": "Forgetting that implemented interface methods must be public.",
        "selfCheck": "Why cannot an implementation reduce visibility?",
        "concepts": [
          "interface method visibility"
        ],
        "level": "level2"
      },
      {
        "id": "level2-020",
        "title": "Record canonical constructor assignment 20",
        "topic": "Records vs Classes",
        "skill": "record constructor rules",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2020.java",
        "bugReport": "The record constructor tries to assign component fields directly.",
        "actualBehavior": "cannot assign final field",
        "expectedBehavior": "valid compact constructor",
        "task": "Use a compact constructor or validate parameters correctly. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2020 { record Course(String code, int credits) { public Course(String code, int credits) { this.code = code; this.credits = credits; } } }\n",
        "clues": [],
        "officialReview": "Solo review: Use public Course { if (credits < 0) throw ...; } for validation.",
        "commonMistake": "Treating record fields like normal mutable fields.",
        "selfCheck": "What is a compact constructor in a record?",
        "concepts": [
          "record constructor rules"
        ],
        "level": "level2"
      },
      {
        "id": "level2-021",
        "title": "Loop condition stops too early 21",
        "topic": "Conditions, Loops, and Operators",
        "skill": "loop condition",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2021.java",
        "bugReport": "The loop misses the last item it should process.",
        "actualBehavior": "prints 0 1",
        "expectedBehavior": "prints 0 1 2",
        "task": "Fix the condition so all intended values are included. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2021 { public static void main(String[] args){ for(int i=0; i<2; i++){ System.out.println(i); } } }\n",
        "clues": [],
        "officialReview": "Solo review: Adjust the boundary to include the final intended value.",
        "commonMistake": "Changing the update instead of the condition.",
        "selfCheck": "Which values should the loop visit?",
        "concepts": [
          "loop condition"
        ],
        "level": "level2"
      },
      {
        "id": "level2-022",
        "title": "Wrong array accumulator start 22",
        "topic": "Arrays and ArrayLists",
        "skill": "accumulator initialization",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2022.java",
        "bugReport": "The sum is too large because total starts with an old value.",
        "actualBehavior": "16",
        "expectedBehavior": "12",
        "task": "Initialize the accumulator correctly before the loop. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2022 { public static void main(String[] args){ int[] nums={2,4,6}; int total=4; for(int n: nums){ total += n; } System.out.println(total); } }\n",
        "clues": [],
        "officialReview": "Solo review: Set total to 0 before adding array values.",
        "commonMistake": "Looking only inside the loop and ignoring initialization.",
        "selfCheck": "What should total be before any numbers are added?",
        "concepts": [
          "accumulator initialization"
        ],
        "level": "level2"
      },
      {
        "id": "level2-023",
        "title": "Method call ignored 23",
        "topic": "Methods",
        "skill": "using return values",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2023.java",
        "bugReport": "The method computes a value, but main prints the old value.",
        "actualBehavior": "10",
        "expectedBehavior": "20",
        "task": "Store or print the return value from the method. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2023 { static int doubleIt(int x){ return x*2; } public static void main(String[] args){ int n=10; doubleIt(n); System.out.println(n); } }\n",
        "clues": [],
        "officialReview": "Solo review: Use n = doubleIt(n); before printing.",
        "commonMistake": "Calling a return method and ignoring the returned value.",
        "selfCheck": "What happens to a return value if you do not store it?",
        "concepts": [
          "using return values"
        ],
        "level": "level2"
      },
      {
        "id": "level2-024",
        "title": "Constructor name typo 24",
        "topic": "Constructors",
        "skill": "constructor naming",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2024.java",
        "bugReport": "The class compiles strangely or has no intended constructor.",
        "actualBehavior": "default state",
        "expectedBehavior": "initialized state",
        "task": "Make the constructor name match the class exactly. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2024 { static class Robot { String id; public void robot(String id){ this.id=id; } } public static void main(String[] args){ Robot r=new Robot(); r.robot(\"R2\"); System.out.println(r.id); } }\n",
        "clues": [],
        "officialReview": "Solo review: Rename the method-like member to the class name and remove return type if needed.",
        "commonMistake": "Changing capitalization and accidentally making a method.",
        "selfCheck": "How can you tell a constructor from a method?",
        "concepts": [
          "constructor naming"
        ],
        "level": "level2"
      },
      {
        "id": "level2-025",
        "title": "Wrong equals signature 25",
        "topic": "equals(), ==, =, and toString()",
        "skill": "equals override signature",
        "filePath": "java-practice/bug-fix-lab/level2/BugFixLevel2025.java",
        "bugReport": "The custom equals is not used in normal object comparison.",
        "actualBehavior": "false",
        "expectedBehavior": "true",
        "task": "Use the correct equals(Object other) signature. Work without a clue first, then compare after you attempt it.",
        "code": "public class BugFixLevel2025 { static class Book { String title; Book(String title){this.title=title;} public boolean equals(Book other){ return title.equals(other.title); } } public static void main(String[] args){ Object a=new Book(\"Java\"); Object b=new Book(\"Java\"); System.out.println(a.equals(b)); } }\n",
        "clues": [],
        "officialReview": "Solo review: Change equals(Book other) to equals(Object other), check type, then compare fields.",
        "commonMistake": "Overloading equals instead of overriding it.",
        "selfCheck": "Why should equals take Object?",
        "concepts": [
          "equals override signature"
        ],
        "level": "level2"
      }
    ],
    "level3": [
      {
        "id": "level3-001",
        "title": "Public fields inventory",
        "topic": "Classes and Objects",
        "skill": "encapsulation review",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3001.java",
        "bugReport": "The code runs, but outside code can freely damage item state.",
        "actualBehavior": "public mutable fields",
        "expectedBehavior": "private fields with controlled access",
        "task": "Refactor the class so it protects its own data.",
        "code": "public class BugFixLevel3001 { static class Item { public String name; public int quantity; } public static void main(String[] args){ Item item=new Item(); item.name=\"Plate\"; item.quantity=-99; System.out.println(item.quantity); } }\n",
        "clues": [],
        "officialReview": "Make fields private, add a constructor/getters, and only expose safe behavior.",
        "commonMistake": "Thinking working code is automatically well-designed.",
        "selfCheck": "Why are public mutable fields risky?",
        "concepts": [
          "encapsulation review"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-002",
        "title": "Inheritance that fails is-a",
        "topic": "Inheritance and Polymorphism",
        "skill": "inheritance design",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3002.java",
        "bugReport": "The code compiles, but the class relationship is conceptually weak.",
        "actualBehavior": "Printer extends Document",
        "expectedBehavior": "Printer uses Document instead of extending it",
        "task": "Review the design and refactor away from bad inheritance.",
        "code": "public class BugFixLevel3002 { static class Document { String text; } static class Printer extends Document { void print(){ System.out.println(text); } } }\n",
        "clues": [],
        "officialReview": "A Printer is not a kind of Document. Prefer composition: Printer has/uses a Document.",
        "commonMistake": "Using inheritance only to reuse code.",
        "selfCheck": "Does the subclass truly pass the is-a test?",
        "concepts": [
          "inheritance design"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-003",
        "title": "equals without null/type check",
        "topic": "equals(), ==, =, and toString()",
        "skill": "equals contract review",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3003.java",
        "bugReport": "The equals method can crash or compare the wrong type.",
        "actualBehavior": "unsafe equals",
        "expectedBehavior": "safe equals(Object other)",
        "task": "Review and improve the equals implementation.",
        "code": "public class BugFixLevel3003 { static class ID { int value; ID(int value){this.value=value;} public boolean equals(Object other){ ID id=(ID) other; return value==id.value; } } }\n",
        "clues": [],
        "officialReview": "Check this == other, null/type, then cast and compare meaningful fields.",
        "commonMistake": "Assuming equals will only receive the same class.",
        "selfCheck": "What should equals return for null or a different type?",
        "concepts": [
          "equals contract review"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-004",
        "title": "Method with hidden side effect",
        "topic": "Methods",
        "skill": "side effects",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3004.java",
        "bugReport": "The method name suggests checking, but it also changes the list.",
        "actualBehavior": "method mutates input",
        "expectedBehavior": "method either checks or clearly mutates",
        "task": "Decide whether to rename, copy, or remove the side effect.",
        "code": "import java.util.*; public class BugFixLevel3004 { static boolean hasPassed(ArrayList<Integer> scores){ scores.removeIf(s -> s < 60); return !scores.isEmpty(); } }\n",
        "clues": [],
        "officialReview": "A method named hasPassed should not secretly remove data. Separate command and query behavior.",
        "commonMistake": "Hiding mutation inside a method that sounds harmless.",
        "selfCheck": "What side effect happens here?",
        "concepts": [
          "side effects"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-005",
        "title": "Unnecessary static state",
        "topic": "Static, Final, Memory, and Garbage Collection",
        "skill": "static design review",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3005.java",
        "bugReport": "All accounts share the same balance.",
        "actualBehavior": "shared balance",
        "expectedBehavior": "each account has its own balance",
        "task": "Review whether balance should be static.",
        "code": "public class BugFixLevel3005 { static class Account { static double balance; Account(double balance){ Account.balance=balance; } } public static void main(String[] args){ new Account(10); new Account(99); System.out.println(Account.balance); } }\n",
        "clues": [],
        "officialReview": "balance should be an instance field because each account has its own balance.",
        "commonMistake": "Making fields static because the compiler allows it.",
        "selfCheck": "Which values belong to the class and which belong to each object?",
        "concepts": [
          "static design review"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-006",
        "title": "Record used for changing object",
        "topic": "Records vs Classes",
        "skill": "record vs class choice",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3006.java",
        "bugReport": "The data type is a record, but the concept needs changing state over time.",
        "actualBehavior": "awkward mutable design",
        "expectedBehavior": "use class if state must change",
        "task": "Decide whether a record is appropriate.",
        "code": "public class BugFixLevel3006 { record Player(String name, int health) {} public static void main(String[] args){ Player p = new Player(\"Kai\", 100); p = new Player(p.name(), p.health()-10); } }\n",
        "clues": [],
        "officialReview": "Records are best for simple immutable data carriers. A mutable game character should usually be a class.",
        "commonMistake": "Using records for everything because they are shorter.",
        "selfCheck": "When is a class better than a record?",
        "concepts": [
          "record vs class choice"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-007",
        "title": "Graphics stores drawing in paint",
        "topic": "Graphics",
        "skill": "paintComponent design",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3007.java",
        "bugReport": "The drawing method changes object state every repaint.",
        "actualBehavior": "x changes every repaint",
        "expectedBehavior": "paintComponent only draws current state",
        "task": "Move state updates out of paintComponent.",
        "code": "import javax.swing.*; import java.awt.*; public class BugFixLevel3007 extends JPanel { int x=0; protected void paintComponent(Graphics g){ super.paintComponent(g); x += 5; g.fillRect(x,10,20,20); } }\n",
        "clues": [],
        "officialReview": "paintComponent may run many times. It should draw state, not secretly advance game state.",
        "commonMistake": "Changing game state inside painting code.",
        "selfCheck": "Why should paintComponent avoid unrelated state changes?",
        "concepts": [
          "paintComponent design"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-008",
        "title": "KeyListener without focus plan",
        "topic": "Interfaces and KeyListener",
        "skill": "event-driven review",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3008.java",
        "bugReport": "The class has key methods, but may never receive key events.",
        "actualBehavior": "key presses ignored",
        "expectedBehavior": "component focusable and listening",
        "task": "Review what is missing for key events to reach the component.",
        "code": "import javax.swing.*; import java.awt.event.*; public class BugFixLevel3008 extends JPanel implements KeyListener { public void keyPressed(KeyEvent e){ System.out.println(\"pressed\"); } public void keyReleased(KeyEvent e){} public void keyTyped(KeyEvent e){} }\n",
        "clues": [],
        "officialReview": "A component needs a listener registered and often setFocusable(true)/requestFocusInWindow for key events.",
        "commonMistake": "Writing keyPressed but forgetting focus/listener setup.",
        "selfCheck": "What must happen before keyPressed can run?",
        "concepts": [
          "event-driven review"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-009",
        "title": "Nested loop unclear names",
        "topic": "Conditions, Loops, and Operators",
        "skill": "readability review",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3009.java",
        "bugReport": "The code works, but variable names make tracing harder.",
        "actualBehavior": "hard to read",
        "expectedBehavior": "clear row/col names",
        "task": "Refactor variable names to make the loop purpose clear.",
        "code": "public class BugFixLevel3009 { public static void main(String[] args){ int[][] a={{1,2},{3,4}}; for(int i=0;i<a.length;i++){ for(int j=0;j<a[i].length;j++){ System.out.println(a[i][j]); } } } }\n",
        "clues": [],
        "officialReview": "Use row and col for 2D traversal instead of i and j when it improves clarity.",
        "commonMistake": "Ignoring readability because output is correct.",
        "selfCheck": "How do names help tracing?",
        "concepts": [
          "readability review"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-010",
        "title": "Too much in main",
        "topic": "Java Basics",
        "skill": "program structure review",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3010.java",
        "bugReport": "The program works, but main does all the work.",
        "actualBehavior": "large main method",
        "expectedBehavior": "helper methods with clear purposes",
        "task": "Extract helper methods for calculation and printing.",
        "code": "public class BugFixLevel3010 { public static void main(String[] args){ int[] scores={90,80,70}; int total=0; for(int s:scores) total+=s; double avg=total/(double)scores.length; System.out.println(\"Average: \"+avg); } }\n",
        "clues": [],
        "officialReview": "Move repeated or focused logic into named methods.",
        "commonMistake": "Leaving all logic in main until it becomes hard to test.",
        "selfCheck": "Which helper method would you extract first?",
        "concepts": [
          "program structure review"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-011",
        "title": "Public fields inventory 11",
        "topic": "Classes and Objects",
        "skill": "encapsulation review",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3011.java",
        "bugReport": "The code runs, but outside code can freely damage item state.",
        "actualBehavior": "public mutable fields",
        "expectedBehavior": "private fields with controlled access",
        "task": "Refactor the class so it protects its own data.",
        "code": "public class BugFixLevel3011 { static class Item { public String name; public int quantity; } public static void main(String[] args){ Item item=new Item(); item.name=\"Plate\"; item.quantity=-99; System.out.println(item.quantity); } }\n",
        "clues": [],
        "officialReview": "Make fields private, add a constructor/getters, and only expose safe behavior.",
        "commonMistake": "Thinking working code is automatically well-designed.",
        "selfCheck": "Why are public mutable fields risky?",
        "concepts": [
          "encapsulation review"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-012",
        "title": "Inheritance that fails is-a 12",
        "topic": "Inheritance and Polymorphism",
        "skill": "inheritance design",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3012.java",
        "bugReport": "The code compiles, but the class relationship is conceptually weak.",
        "actualBehavior": "Printer extends Document",
        "expectedBehavior": "Printer uses Document instead of extending it",
        "task": "Review the design and refactor away from bad inheritance.",
        "code": "public class BugFixLevel3012 { static class Document { String text; } static class Printer extends Document { void print(){ System.out.println(text); } } }\n",
        "clues": [],
        "officialReview": "A Printer is not a kind of Document. Prefer composition: Printer has/uses a Document.",
        "commonMistake": "Using inheritance only to reuse code.",
        "selfCheck": "Does the subclass truly pass the is-a test?",
        "concepts": [
          "inheritance design"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-013",
        "title": "equals without null/type check 13",
        "topic": "equals(), ==, =, and toString()",
        "skill": "equals contract review",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3013.java",
        "bugReport": "The equals method can crash or compare the wrong type.",
        "actualBehavior": "unsafe equals",
        "expectedBehavior": "safe equals(Object other)",
        "task": "Review and improve the equals implementation.",
        "code": "public class BugFixLevel3013 { static class ID { int value; ID(int value){this.value=value;} public boolean equals(Object other){ ID id=(ID) other; return value==id.value; } } }\n",
        "clues": [],
        "officialReview": "Check this == other, null/type, then cast and compare meaningful fields.",
        "commonMistake": "Assuming equals will only receive the same class.",
        "selfCheck": "What should equals return for null or a different type?",
        "concepts": [
          "equals contract review"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-014",
        "title": "Method with hidden side effect 14",
        "topic": "Methods",
        "skill": "side effects",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3014.java",
        "bugReport": "The method name suggests checking, but it also changes the list.",
        "actualBehavior": "method mutates input",
        "expectedBehavior": "method either checks or clearly mutates",
        "task": "Decide whether to rename, copy, or remove the side effect.",
        "code": "import java.util.*; public class BugFixLevel3014 { static boolean hasPassed(ArrayList<Integer> scores){ scores.removeIf(s -> s < 60); return !scores.isEmpty(); } }\n",
        "clues": [],
        "officialReview": "A method named hasPassed should not secretly remove data. Separate command and query behavior.",
        "commonMistake": "Hiding mutation inside a method that sounds harmless.",
        "selfCheck": "What side effect happens here?",
        "concepts": [
          "side effects"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-015",
        "title": "Unnecessary static state 15",
        "topic": "Static, Final, Memory, and Garbage Collection",
        "skill": "static design review",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3015.java",
        "bugReport": "All accounts share the same balance.",
        "actualBehavior": "shared balance",
        "expectedBehavior": "each account has its own balance",
        "task": "Review whether balance should be static.",
        "code": "public class BugFixLevel3015 { static class Account { static double balance; Account(double balance){ Account.balance=balance; } } public static void main(String[] args){ new Account(10); new Account(99); System.out.println(Account.balance); } }\n",
        "clues": [],
        "officialReview": "balance should be an instance field because each account has its own balance.",
        "commonMistake": "Making fields static because the compiler allows it.",
        "selfCheck": "Which values belong to the class and which belong to each object?",
        "concepts": [
          "static design review"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-016",
        "title": "Record used for changing object 16",
        "topic": "Records vs Classes",
        "skill": "record vs class choice",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3016.java",
        "bugReport": "The data type is a record, but the concept needs changing state over time.",
        "actualBehavior": "awkward mutable design",
        "expectedBehavior": "use class if state must change",
        "task": "Decide whether a record is appropriate.",
        "code": "public class BugFixLevel3016 { record Player(String name, int health) {} public static void main(String[] args){ Player p = new Player(\"Kai\", 100); p = new Player(p.name(), p.health()-10); } }\n",
        "clues": [],
        "officialReview": "Records are best for simple immutable data carriers. A mutable game character should usually be a class.",
        "commonMistake": "Using records for everything because they are shorter.",
        "selfCheck": "When is a class better than a record?",
        "concepts": [
          "record vs class choice"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-017",
        "title": "Graphics stores drawing in paint 17",
        "topic": "Graphics",
        "skill": "paintComponent design",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3017.java",
        "bugReport": "The drawing method changes object state every repaint.",
        "actualBehavior": "x changes every repaint",
        "expectedBehavior": "paintComponent only draws current state",
        "task": "Move state updates out of paintComponent.",
        "code": "import javax.swing.*; import java.awt.*; public class BugFixLevel3017 extends JPanel { int x=0; protected void paintComponent(Graphics g){ super.paintComponent(g); x += 5; g.fillRect(x,10,20,20); } }\n",
        "clues": [],
        "officialReview": "paintComponent may run many times. It should draw state, not secretly advance game state.",
        "commonMistake": "Changing game state inside painting code.",
        "selfCheck": "Why should paintComponent avoid unrelated state changes?",
        "concepts": [
          "paintComponent design"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-018",
        "title": "KeyListener without focus plan 18",
        "topic": "Interfaces and KeyListener",
        "skill": "event-driven review",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3018.java",
        "bugReport": "The class has key methods, but may never receive key events.",
        "actualBehavior": "key presses ignored",
        "expectedBehavior": "component focusable and listening",
        "task": "Review what is missing for key events to reach the component.",
        "code": "import javax.swing.*; import java.awt.event.*; public class BugFixLevel3018 extends JPanel implements KeyListener { public void keyPressed(KeyEvent e){ System.out.println(\"pressed\"); } public void keyReleased(KeyEvent e){} public void keyTyped(KeyEvent e){} }\n",
        "clues": [],
        "officialReview": "A component needs a listener registered and often setFocusable(true)/requestFocusInWindow for key events.",
        "commonMistake": "Writing keyPressed but forgetting focus/listener setup.",
        "selfCheck": "What must happen before keyPressed can run?",
        "concepts": [
          "event-driven review"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-019",
        "title": "Nested loop unclear names 19",
        "topic": "Conditions, Loops, and Operators",
        "skill": "readability review",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3019.java",
        "bugReport": "The code works, but variable names make tracing harder.",
        "actualBehavior": "hard to read",
        "expectedBehavior": "clear row/col names",
        "task": "Refactor variable names to make the loop purpose clear.",
        "code": "public class BugFixLevel3019 { public static void main(String[] args){ int[][] a={{1,2},{3,4}}; for(int i=0;i<a.length;i++){ for(int j=0;j<a[i].length;j++){ System.out.println(a[i][j]); } } } }\n",
        "clues": [],
        "officialReview": "Use row and col for 2D traversal instead of i and j when it improves clarity.",
        "commonMistake": "Ignoring readability because output is correct.",
        "selfCheck": "How do names help tracing?",
        "concepts": [
          "readability review"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-020",
        "title": "Too much in main 20",
        "topic": "Java Basics",
        "skill": "program structure review",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3020.java",
        "bugReport": "The program works, but main does all the work.",
        "actualBehavior": "large main method",
        "expectedBehavior": "helper methods with clear purposes",
        "task": "Extract helper methods for calculation and printing.",
        "code": "public class BugFixLevel3020 { public static void main(String[] args){ int[] scores={90,80,70}; int total=0; for(int s:scores) total+=s; double avg=total/(double)scores.length; System.out.println(\"Average: \"+avg); } }\n",
        "clues": [],
        "officialReview": "Move repeated or focused logic into named methods.",
        "commonMistake": "Leaving all logic in main until it becomes hard to test.",
        "selfCheck": "Which helper method would you extract first?",
        "concepts": [
          "program structure review"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-021",
        "title": "Public fields inventory 21",
        "topic": "Classes and Objects",
        "skill": "encapsulation review",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3021.java",
        "bugReport": "The code runs, but outside code can freely damage item state.",
        "actualBehavior": "public mutable fields",
        "expectedBehavior": "private fields with controlled access",
        "task": "Refactor the class so it protects its own data.",
        "code": "public class BugFixLevel3021 { static class Item { public String name; public int quantity; } public static void main(String[] args){ Item item=new Item(); item.name=\"Plate\"; item.quantity=-99; System.out.println(item.quantity); } }\n",
        "clues": [],
        "officialReview": "Make fields private, add a constructor/getters, and only expose safe behavior.",
        "commonMistake": "Thinking working code is automatically well-designed.",
        "selfCheck": "Why are public mutable fields risky?",
        "concepts": [
          "encapsulation review"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-022",
        "title": "Inheritance that fails is-a 22",
        "topic": "Inheritance and Polymorphism",
        "skill": "inheritance design",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3022.java",
        "bugReport": "The code compiles, but the class relationship is conceptually weak.",
        "actualBehavior": "Printer extends Document",
        "expectedBehavior": "Printer uses Document instead of extending it",
        "task": "Review the design and refactor away from bad inheritance.",
        "code": "public class BugFixLevel3022 { static class Document { String text; } static class Printer extends Document { void print(){ System.out.println(text); } } }\n",
        "clues": [],
        "officialReview": "A Printer is not a kind of Document. Prefer composition: Printer has/uses a Document.",
        "commonMistake": "Using inheritance only to reuse code.",
        "selfCheck": "Does the subclass truly pass the is-a test?",
        "concepts": [
          "inheritance design"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-023",
        "title": "equals without null/type check 23",
        "topic": "equals(), ==, =, and toString()",
        "skill": "equals contract review",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3023.java",
        "bugReport": "The equals method can crash or compare the wrong type.",
        "actualBehavior": "unsafe equals",
        "expectedBehavior": "safe equals(Object other)",
        "task": "Review and improve the equals implementation.",
        "code": "public class BugFixLevel3023 { static class ID { int value; ID(int value){this.value=value;} public boolean equals(Object other){ ID id=(ID) other; return value==id.value; } } }\n",
        "clues": [],
        "officialReview": "Check this == other, null/type, then cast and compare meaningful fields.",
        "commonMistake": "Assuming equals will only receive the same class.",
        "selfCheck": "What should equals return for null or a different type?",
        "concepts": [
          "equals contract review"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-024",
        "title": "Method with hidden side effect 24",
        "topic": "Methods",
        "skill": "side effects",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3024.java",
        "bugReport": "The method name suggests checking, but it also changes the list.",
        "actualBehavior": "method mutates input",
        "expectedBehavior": "method either checks or clearly mutates",
        "task": "Decide whether to rename, copy, or remove the side effect.",
        "code": "import java.util.*; public class BugFixLevel3024 { static boolean hasPassed(ArrayList<Integer> scores){ scores.removeIf(s -> s < 60); return !scores.isEmpty(); } }\n",
        "clues": [],
        "officialReview": "A method named hasPassed should not secretly remove data. Separate command and query behavior.",
        "commonMistake": "Hiding mutation inside a method that sounds harmless.",
        "selfCheck": "What side effect happens here?",
        "concepts": [
          "side effects"
        ],
        "level": "level3-review"
      },
      {
        "id": "level3-025",
        "title": "Unnecessary static state 25",
        "topic": "Static, Final, Memory, and Garbage Collection",
        "skill": "static design review",
        "filePath": "java-practice/bug-fix-lab/level3/BugFixLevel3025.java",
        "bugReport": "All accounts share the same balance.",
        "actualBehavior": "shared balance",
        "expectedBehavior": "each account has its own balance",
        "task": "Review whether balance should be static.",
        "code": "public class BugFixLevel3025 { static class Account { static double balance; Account(double balance){ Account.balance=balance; } } public static void main(String[] args){ new Account(10); new Account(99); System.out.println(Account.balance); } }\n",
        "clues": [],
        "officialReview": "balance should be an instance field because each account has its own balance.",
        "commonMistake": "Making fields static because the compiler allows it.",
        "selfCheck": "Which values belong to the class and which belong to each object?",
        "concepts": [
          "static design review"
        ],
        "level": "level3-review"
      }
    ]
  },
  "assumptions": [
    "Bug Fix Lab snippets are intentionally broken or weak. Some are supposed to fail before you repair them.",
    "Assume needed lesson context is available. For file-reading examples, you may create a small test file in IntelliJ if needed.",
    "Level 3 may have one issue or multiple issues; the goal is to review code like a programmer, not only fix one red compiler line."
  ]
};
})();
