// Coding Quest data for website-only CS202 practice. Quality pass v2: study-guide focus, edge cases, rubrics, and reflection prompts.
(function () {
  window.CODING_QUEST_DATA = {
  "version": 2,
  "modes": {
    "level1": {
      "label": "Guided Quest",
      "support": "Full steps",
      "description": "Base quests plus Level 1 extras with visible guidance and optional hints."
    },
    "level2": {
      "label": "Hinted Quest",
      "support": "Hidden hints",
      "description": "Base quests plus Level 2 extras with no full walkthroughs."
    },
    "level3": {
      "label": "Solo Quest",
      "support": "No help",
      "description": "Solo final-style coding tasks with task-only support."
    }
  },
  "assumptions": [
    "Write answers at a CS202 level. Short, correct code is better than fancy code.",
    "Attempt before revealing the official solution; the site is for practice, not just reading answers.",
    "Use the starter code shape unless the task clearly asks for a full class.",
    "For every task, check one normal case and one boundary/edge case."
  ],
  "base": [
    {
      "id": "CQB001",
      "level": "base",
      "topic": "Java Basics",
      "skill": "variables and output",
      "title": "Print a labeled total",
      "prompt": "Use variables and one print statement to show a total price.",
      "task": "Complete main so it stores price and quantity, calculates total, and prints Total: 12.5.",
      "starter": "public class PriceTotal {\n    public static void main(String[] args) {\n        double price = 2.5;\n        int quantity = 5;\n        // your code here\n    }\n}\n",
      "required": [
        "Demonstrate variables and output clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: variables and output.",
        "Write the method/class/loop shape first before filling in details for \u201cPrint a labeled total.\u201d",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Write the variable declarations first, then the calculation, then the print statement.",
        "Check whether Java will do numeric math or String concatenation at each step."
      ],
      "modelAnswer": "public class PriceTotal {\n    public static void main(String[] args) {\n        double price = 2.5;\n        int quantity = 5;\n        double total = price * quantity;\n        System.out.println(\"Total: \" + total);\n    }\n}\n",
      "explanation": "Multiplication happens before concatenation because it is stored first in total.",
      "commonMistake": "Concatenating before multiplying, such as \"Total: \" + price * quantity.",
      "selfCheck": "Does the output include the label and the numeric total?",
      "concepts": [
        "variables",
        "arithmetic",
        "println"
      ],
      "studyGuideFocus": "Midterm 1 focus: variables, data types, arithmetic, String concatenation, and exact console output.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Check integer vs double results.",
        "Confirm the output label and spacing exactly match the prompt.",
        "Trace what happens when values are changed before printing."
      ],
      "rubric": [
        "Uses the correct Java structure for variables and output.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for variables and output.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB002",
      "level": "base",
      "topic": "Conditions, Loops, and Operators",
      "skill": "if/else",
      "title": "Pass or retry",
      "prompt": "Write a simple condition for a quiz score.",
      "task": "Complete the method so scores 70 or higher return \"Pass\" and lower scores return \"Retry\".",
      "starter": "public static String result(int score) {\n    // your code here\n}\n",
      "required": [
        "Demonstrate if/else clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: if/else.",
        "Write the method/class/loop shape first before filling in details for \u201cPass or retry.\u201d",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Circle the boundary value in the prompt before choosing <, <=, >, or >=.",
        "Write the first two loop values and the final loop value on paper."
      ],
      "modelAnswer": "public static String result(int score) {\n    if (score >= 70) {\n        return \"Pass\";\n    } else {\n        return \"Retry\";\n    }\n}\n",
      "explanation": "The >= boundary includes exactly 70 as passing.",
      "commonMistake": "Using > 70 and accidentally making 70 fail.",
      "selfCheck": "What should result(70) return?",
      "concepts": [
        "if else",
        "comparison",
        "return"
      ],
      "studyGuideFocus": "Midterm 1 focus: boolean logic, comparison operators, loop boundaries, updates, and order of operations.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Test the exact boundary value.",
        "Check the first and last loop iteration.",
        "Confirm the condition eventually becomes false."
      ],
      "rubric": [
        "Uses the correct Java structure for if/else.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for if/else.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB003",
      "level": "base",
      "topic": "Conditions, Loops, and Operators",
      "skill": "for loop",
      "title": "Print even numbers",
      "prompt": "Use a loop to print even values.",
      "task": "Write a loop that prints 2, 4, 6, 8, and 10, each on its own line.",
      "starter": "public class Evens {\n    public static void main(String[] args) {\n        // your loop here\n    }\n}\n",
      "required": [
        "Demonstrate for loop clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: for loop.",
        "Write the method/class/loop shape first before filling in details for \u201cPrint even numbers.\u201d",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Circle the boundary value in the prompt before choosing <, <=, >, or >=.",
        "Write the first two loop values and the final loop value on paper."
      ],
      "modelAnswer": "public class Evens {\n    public static void main(String[] args) {\n        for (int number = 2; number <= 10; number += 2) {\n            System.out.println(number);\n        }\n    }\n}\n",
      "explanation": "The loop starts at 2, stops at 10, and changes by 2 each time.",
      "commonMistake": "Using number < 10 and missing 10.",
      "selfCheck": "Can you name the start, stop, and update?",
      "concepts": [
        "for loop",
        "boundary",
        "update"
      ],
      "studyGuideFocus": "Midterm 1 focus: boolean logic, comparison operators, loop boundaries, updates, and order of operations.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Test the exact boundary value.",
        "Check the first and last loop iteration.",
        "Confirm the condition eventually becomes false."
      ],
      "rubric": [
        "Uses the correct Java structure for for loop.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for for loop.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB004",
      "level": "base",
      "topic": "Arrays and ArrayLists",
      "skill": "array traversal",
      "title": "Sum an array",
      "prompt": "Practice a common final-exam loop pattern.",
      "task": "Complete the method so it returns the sum of all values in the array.",
      "starter": "public static int sum(int[] values) {\n    int total = 0;\n    // your loop here\n    return total;\n}\n",
      "required": [
        "Demonstrate array traversal clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: array traversal.",
        "Decide whether this needs an index loop, enhanced for loop, or ArrayList method before coding.",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Decide if you need indexes. If you only read values, an enhanced for loop may be enough.",
        "The last valid array index is length - 1. For ArrayList, it is size() - 1."
      ],
      "modelAnswer": "public static int sum(int[] values) {\n    int total = 0;\n    for (int value : values) {\n        total += value;\n    }\n    return total;\n}\n",
      "explanation": "An enhanced for loop is safe when you only need each value.",
      "commonMistake": "Returning inside the loop before every value is added.",
      "selfCheck": "What should sum(new int[] {2, 3, 4}) return?",
      "concepts": [
        "arrays",
        "enhanced for",
        "accumulator"
      ],
      "studyGuideFocus": "Midterm 1/final focus: indexing, length/size, traversal, accumulators, off-by-one errors, and safe updates.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Test an array/list with one item.",
        "Test the first and last index.",
        "Check whether an enhanced for loop or index loop is safer for this task."
      ],
      "rubric": [
        "Uses the correct Java structure for array traversal.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for array traversal.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB005",
      "level": "base",
      "topic": "Arrays and ArrayLists",
      "skill": "index loop",
      "title": "Find the last item",
      "prompt": "Use array length correctly.",
      "task": "Complete the method so it returns the last element of a non-empty array.",
      "starter": "public static String last(String[] names) {\n    // your code here\n}\n",
      "required": [
        "Demonstrate index loop clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: index loop.",
        "Decide whether this needs an index loop, enhanced for loop, or ArrayList method before coding.",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Decide if you need indexes. If you only read values, an enhanced for loop may be enough.",
        "The last valid array index is length - 1. For ArrayList, it is size() - 1."
      ],
      "modelAnswer": "public static String last(String[] names) {\n    return names[names.length - 1];\n}\n",
      "explanation": "The last valid index is length - 1.",
      "commonMistake": "Using names[names.length], which is outside the array.",
      "selfCheck": "What is the last index when length is 4?",
      "concepts": [
        "arrays",
        "index",
        "length"
      ],
      "studyGuideFocus": "Midterm 1/final focus: indexing, length/size, traversal, accumulators, off-by-one errors, and safe updates.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Test an array/list with one item.",
        "Test the first and last index.",
        "Check whether an enhanced for loop or index loop is safer for this task."
      ],
      "rubric": [
        "Uses the correct Java structure for index loop.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for index loop.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB006",
      "level": "base",
      "topic": "Methods",
      "skill": "method return",
      "title": "Double a number",
      "prompt": "Write a small non-void method.",
      "task": "Write a method named doubleIt that takes an int and returns twice its value.",
      "starter": "// Write this method in a class.\n// Method name: doubleIt\n",
      "required": [
        "Demonstrate method return clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: method return.",
        "Copy the method header idea first: return type, name, parameters, then body.",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Start from the method header: return type, name, and parameters tell you most of the answer.",
        "A non-void method needs a return statement that gives back the promised type."
      ],
      "modelAnswer": "public static int doubleIt(int number) {\n    return number * 2;\n}\n",
      "explanation": "The return type is int because the method gives back a number.",
      "commonMistake": "Printing the answer instead of returning it.",
      "selfCheck": "Would another method be able to use the returned value?",
      "concepts": [
        "methods",
        "return",
        "parameters"
      ],
      "studyGuideFocus": "Final focus: method headers, return types, parameters, return vs print, helper methods, and calling methods correctly.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Check that the method returns instead of only printing when a return type is required.",
        "Test one normal value and one boundary value.",
        "Confirm the parameter names are used correctly."
      ],
      "rubric": [
        "Uses the correct Java structure for method return.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for method return.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB007",
      "level": "base",
      "topic": "Methods",
      "skill": "parameters",
      "title": "Greeting method",
      "prompt": "Use a parameter in a returned String.",
      "task": "Write a method named greet that returns Hello, name! using the parameter.",
      "starter": "// Write this method in a class.\n// Method name: greet\n",
      "required": [
        "Demonstrate parameters clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: parameters.",
        "Copy the method header idea first: return type, name, parameters, then body.",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Start from the method header: return type, name, and parameters tell you most of the answer.",
        "A non-void method needs a return statement that gives back the promised type."
      ],
      "modelAnswer": "public static String greet(String name) {\n    return \"Hello, \" + name + \"!\";\n}\n",
      "explanation": "The parameter supplies the name each time the method is called.",
      "commonMistake": "Hard-coding one name instead of using the parameter.",
      "selfCheck": "What should greet(\"Ana\") return?",
      "concepts": [
        "methods",
        "String",
        "parameter"
      ],
      "studyGuideFocus": "Final focus: method headers, return types, parameters, return vs print, helper methods, and calling methods correctly.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Check that the method returns instead of only printing when a return type is required.",
        "Test one normal value and one boundary value.",
        "Confirm the parameter names are used correctly."
      ],
      "rubric": [
        "Uses the correct Java structure for parameters.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for parameters.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB008",
      "level": "base",
      "topic": "Classes and Objects",
      "skill": "class fields",
      "title": "Create a Book class",
      "prompt": "Practice fields and a constructor.",
      "task": "Write a Book class with title and pages fields, a constructor, and a getPages method.",
      "starter": "// Write the full Book class here.\n// Include fields, constructor, and getPages.\n",
      "required": [
        "Demonstrate class fields clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: class fields.",
        "Write fields first, then constructor, then one method that uses the fields.",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "List the object state first, then write one behavior that uses that state.",
        "Use this.fieldName when a parameter has the same name as a field."
      ],
      "modelAnswer": "public class Book {\n    private String title;\n    private int pages;\n\n    public Book(String title, int pages) {\n        this.title = title;\n        this.pages = pages;\n    }\n\n    public int getPages() {\n        return pages;\n    }\n}\n",
      "explanation": "The constructor uses this to assign parameter values into fields.",
      "commonMistake": "Writing title = title and leaving the field unchanged.",
      "selfCheck": "Where is the object state stored?",
      "concepts": [
        "classes",
        "fields",
        "constructor"
      ],
      "studyGuideFocus": "Midterm 2/final focus: object state, behaviors, fields vs locals, encapsulation, and using objects from another class.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Create two different objects to make sure fields are not accidentally shared.",
        "Check that fields are initialized through the constructor.",
        "Confirm public methods use private state correctly."
      ],
      "rubric": [
        "Uses the correct Java structure for class fields.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for class fields.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB009",
      "level": "base",
      "topic": "Constructors",
      "skill": "constructor syntax",
      "title": "Make a Student constructor",
      "prompt": "Use the correct constructor form.",
      "task": "Write a Student constructor that stores name and id in private fields.",
      "starter": "public class Student {\n    private String name;\n    private int id;\n\n    // constructor here\n}\n",
      "required": [
        "Demonstrate constructor syntax clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: constructor syntax.",
        "Write the fields, then make sure every constructor initializes them consistently.",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "The constructor name must match the class name and has no return type.",
        "Overloaded constructors should initialize the same fields, just from different inputs."
      ],
      "modelAnswer": "public class Student {\n    private String name;\n    private int id;\n\n    public Student(String name, int id) {\n        this.name = name;\n        this.id = id;\n    }\n}\n",
      "explanation": "A constructor has the same name as the class and no return type.",
      "commonMistake": "Adding void before the constructor name.",
      "selfCheck": "How can you tell this is a constructor, not a method?",
      "concepts": [
        "constructors",
        "this",
        "fields"
      ],
      "studyGuideFocus": "Midterm 2/final focus: constructor purpose, overloaded constructors, copy constructors, this, default values, and initialization order.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Test the constructor with normal values.",
        "Check overloaded constructors use consistent defaults.",
        "Confirm fields are initialized before methods depend on them."
      ],
      "rubric": [
        "Uses the correct Java structure for constructor syntax.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for constructor syntax.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB010",
      "level": "base",
      "topic": "Inheritance and Polymorphism",
      "skill": "override",
      "title": "Override speak",
      "prompt": "Practice subclass behavior.",
      "task": "Complete Dog so it overrides speak and returns \"woof\".",
      "starter": "class Animal {\n    public String speak() {\n        return \"sound\";\n    }\n}\n\nclass Dog extends Animal {\n    // your code here\n}\n",
      "required": [
        "Demonstrate override clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: override.",
        "Write the superclass behavior first, then decide which method the subclass should override.",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Use the is-a rule: a subclass object should be usable wherever the superclass is expected.",
        "When a method is overridden, the object type at runtime decides which version runs."
      ],
      "modelAnswer": "class Animal {\n    public String speak() {\n        return \"sound\";\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    public String speak() {\n        return \"woof\";\n    }\n}\n",
      "explanation": "The subclass method has the same signature, so it overrides the parent method.",
      "commonMistake": "Changing the parameter list and accidentally overloading instead.",
      "selfCheck": "Would Animal pet = new Dog(); call the Dog version?",
      "concepts": [
        "inheritance",
        "override",
        "polymorphism"
      ],
      "studyGuideFocus": "Final focus: is-a relationships, overriding, dynamic dispatch, protected/private access, and superclass constructor calls.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Call the method through a superclass reference.",
        "Check which overridden method runs at runtime.",
        "Confirm the subclass still satisfies the superclass is-a relationship."
      ],
      "rubric": [
        "Uses the correct Java structure for override.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for override.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB011",
      "level": "base",
      "topic": "Interfaces and KeyListener",
      "skill": "interface methods",
      "title": "Implement Printable",
      "prompt": "Practice an interface contract.",
      "task": "Write a Receipt class that implements Printable and returns \"receipt\" from print().",
      "starter": "interface Printable {\n    String print();\n}\n\n// write Receipt here\n",
      "required": [
        "Demonstrate interface methods clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: interface methods.",
        "List the required interface methods before writing the behavior inside them.",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "An interface tells you which method names/signatures must exist.",
        "For KeyListener, separate movement logic from drawing logic."
      ],
      "modelAnswer": "interface Printable {\n    String print();\n}\n\nclass Receipt implements Printable {\n    @Override\n    public String print() {\n        return \"receipt\";\n    }\n}\n",
      "explanation": "A class that implements an interface must provide the required method.",
      "commonMistake": "Using extends instead of implements for an interface.",
      "selfCheck": "What promise does Receipt make?",
      "concepts": [
        "interfaces",
        "implements",
        "override"
      ],
      "studyGuideFocus": "Final focus: interface contracts, required methods, event-driven thinking, and KeyListener method responsibilities.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Confirm every required interface method is present.",
        "Check what should happen on keyPressed vs keyReleased.",
        "Make sure state changes are followed by repaint when drawing is involved."
      ],
      "rubric": [
        "Uses the correct Java structure for interface methods.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for interface methods.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB012",
      "level": "base",
      "topic": "equals(), ==, =, and toString()",
      "skill": "toString",
      "title": "Describe an object",
      "prompt": "Write a helpful toString method.",
      "task": "Complete toString so it returns Item: pencil.",
      "starter": "public class Item {\n    private String name;\n\n    public Item(String name) {\n        this.name = name;\n    }\n\n    // toString here\n}\n",
      "required": [
        "Demonstrate toString clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: toString.",
        "Write the method/class/loop shape first before filling in details for \u201cDescribe an object.\u201d",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Use = to assign, == carefully for primitives/reference identity, and equals for object value comparison.",
        "toString should return the useful state of the object as a String."
      ],
      "modelAnswer": "public class Item {\n    private String name;\n\n    public Item(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public String toString() {\n        return \"Item: \" + name;\n    }\n}\n",
      "explanation": "toString returns a String representation of the object state.",
      "commonMistake": "Making toString void and printing instead of returning.",
      "selfCheck": "What appears when the object is printed?",
      "concepts": [
        "toString",
        "override",
        "object state"
      ],
      "studyGuideFocus": "Final focus: assignment vs comparison, reference vs value comparison, overriding equals, and useful toString output.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Check two different objects with the same data.",
        "Check assignment, reference comparison, and value comparison separately.",
        "Confirm toString returns a String and does not print directly."
      ],
      "rubric": [
        "Uses the correct Java structure for toString.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for toString.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB013",
      "level": "base",
      "topic": "equals(), ==, =, and toString()",
      "skill": "equals vs ==",
      "title": "Compare two Strings",
      "prompt": "Use equals for meaningful String comparison.",
      "task": "Write a method that returns true when two codes have the same text.",
      "starter": "public static boolean sameCode(String a, String b) {\n    // your code here\n}\n",
      "required": [
        "Demonstrate equals vs == clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: equals vs ==.",
        "Write the method/class/loop shape first before filling in details for \u201cCompare two Strings.\u201d",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Use = to assign, == carefully for primitives/reference identity, and equals for object value comparison.",
        "toString should return the useful state of the object as a String."
      ],
      "modelAnswer": "public static boolean sameCode(String a, String b) {\n    return a.equals(b);\n}\n",
      "explanation": "equals compares the String contents.",
      "commonMistake": "Using == and comparing references instead of text.",
      "selfCheck": "What is being compared: reference or contents?",
      "concepts": [
        "equals",
        "String",
        "boolean"
      ],
      "studyGuideFocus": "Final focus: assignment vs comparison, reference vs value comparison, overriding equals, and useful toString output.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Check two different objects with the same data.",
        "Check assignment, reference comparison, and value comparison separately.",
        "Confirm toString returns a String and does not print directly."
      ],
      "rubric": [
        "Uses the correct Java structure for equals vs ==.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for equals vs ==.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB014",
      "level": "base",
      "topic": "Exceptions, Files, and Null Pointers",
      "skill": "try/catch",
      "title": "Parse safely",
      "prompt": "Practice a simple exception handler.",
      "task": "Complete the method so invalid integers return 0 instead of crashing.",
      "starter": "public static int parseOrZero(String text) {\n    // your code here\n}\n",
      "required": [
        "Demonstrate try/catch clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: try/catch.",
        "Write the method/class/loop shape first before filling in details for \u201cParse safely.\u201d",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Put only the risky operation inside try when possible.",
        "Before using object.method(), ask whether object could be null."
      ],
      "modelAnswer": "public static int parseOrZero(String text) {\n    try {\n        return Integer.parseInt(text);\n    } catch (NumberFormatException error) {\n        return 0;\n    }\n}\n",
      "explanation": "The catch block handles invalid number text.",
      "commonMistake": "Catching the exception but forgetting to return a fallback value.",
      "selfCheck": "What should parseOrZero(\"abc\") return?",
      "concepts": [
        "exceptions",
        "try catch",
        "parseInt"
      ],
      "studyGuideFocus": "Final focus: try/catch flow, file-reading basics, null checks, and avoiding hidden runtime crashes.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Test missing or bad input when appropriate.",
        "Check what happens before and after the catch block.",
        "Look for null before calling methods on an object."
      ],
      "rubric": [
        "Uses the correct Java structure for try/catch.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for try/catch.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB015",
      "level": "base",
      "topic": "Static, Final, Memory, and Garbage Collection",
      "skill": "static method",
      "title": "Utility add method",
      "prompt": "Write a method that belongs to the class.",
      "task": "Write a public static method add that returns the sum of two ints.",
      "starter": "public class MathTools {\n    // method here\n}\n",
      "required": [
        "Demonstrate static method clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: static method.",
        "Write the method/class/loop shape first before filling in details for \u201cUtility add method.\u201d",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Ask: should this value belong to the class itself or to each object?",
        "A final variable can be assigned once; a static variable is shared by the class."
      ],
      "modelAnswer": "public class MathTools {\n    public static int add(int a, int b) {\n        return a + b;\n    }\n}\n",
      "explanation": "static lets the method be called from the class without creating an object.",
      "commonMistake": "Forgetting static when the prompt expects MathTools.add(2, 3).",
      "selfCheck": "How would you call the method?",
      "concepts": [
        "static",
        "methods",
        "return"
      ],
      "studyGuideFocus": "Final focus: static vs instance members, final constants, object references, aliases, and simple memory reasoning.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Create two objects and check what is shared vs separate.",
        "Check whether a value belongs to the class or one object.",
        "Confirm constants are not changed after initialization."
      ],
      "rubric": [
        "Uses the correct Java structure for static method.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for static method.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB016",
      "level": "base",
      "topic": "Static, Final, Memory, and Garbage Collection",
      "skill": "final",
      "title": "Use a constant",
      "prompt": "Practice a simple constant.",
      "task": "Create a final double TAX_RATE of 0.07 and use it to calculate tax.",
      "starter": "public static double tax(double subtotal) {\n    // your code here\n}\n",
      "required": [
        "Demonstrate final clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: final.",
        "Write the method/class/loop shape first before filling in details for \u201cUse a constant.\u201d",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Ask: should this value belong to the class itself or to each object?",
        "A final variable can be assigned once; a static variable is shared by the class."
      ],
      "modelAnswer": "public static double tax(double subtotal) {\n    final double TAX_RATE = 0.07;\n    return subtotal * TAX_RATE;\n}\n",
      "explanation": "final communicates that the rate should not be reassigned.",
      "commonMistake": "Trying to change TAX_RATE later in the method.",
      "selfCheck": "Why is final useful here?",
      "concepts": [
        "final",
        "constant",
        "method"
      ],
      "studyGuideFocus": "Final focus: static vs instance members, final constants, object references, aliases, and simple memory reasoning.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Create two objects and check what is shared vs separate.",
        "Check whether a value belongs to the class or one object.",
        "Confirm constants are not changed after initialization."
      ],
      "rubric": [
        "Uses the correct Java structure for final.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for final.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB017",
      "level": "base",
      "topic": "Graphics",
      "skill": "paintComponent",
      "title": "Draw a rectangle",
      "prompt": "Practice the Swing drawing method shape.",
      "task": "Write the basic paintComponent method that calls super and draws a rectangle.",
      "starter": "// Inside a JPanel subclass.\n// Write the paintComponent method here.\n",
      "required": [
        "Demonstrate paintComponent clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: paintComponent.",
        "Sketch the coordinates before writing the draw calls.",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Remember: x increases to the right, y increases downward.",
        "Call super.paintComponent(g) before custom drawing in Swing."
      ],
      "modelAnswer": "@Override\nprotected void paintComponent(Graphics g) {\n    super.paintComponent(g);\n    g.drawRect(20, 30, 80, 40);\n}\n",
      "explanation": "Custom Swing drawing usually belongs in paintComponent, and super clears the panel first.",
      "commonMistake": "Forgetting super.paintComponent(g).",
      "selfCheck": "What object does the drawing?",
      "concepts": [
        "Graphics",
        "paintComponent",
        "Swing"
      ],
      "studyGuideFocus": "Midterm/final focus: paintComponent, Graphics methods, coordinates, colors, repaint, and drawing order.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Check x/y coordinates from the top-left corner.",
        "Check drawing order when shapes overlap.",
        "Confirm drawing code belongs in paintComponent."
      ],
      "rubric": [
        "Uses the correct Java structure for paintComponent.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for paintComponent.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB018",
      "level": "base",
      "topic": "Records vs Classes",
      "skill": "record",
      "title": "Create a record",
      "prompt": "Practice record syntax.",
      "task": "Write a record named Point with int x and int y components.",
      "starter": "// Write the full record declaration.\n// Name: Point\n",
      "required": [
        "Demonstrate record clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: record.",
        "Write the method/class/loop shape first before filling in details for \u201cCreate a record.\u201d",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Records are best for simple data carriers.",
        "Record accessors use the field name, like name(), not getName()."
      ],
      "modelAnswer": "public record Point(int x, int y) {\n}\n",
      "explanation": "A record declares simple data components in its header.",
      "commonMistake": "Writing private fields and getters like a normal class when the prompt asks for a record.",
      "selfCheck": "What accessor names will this record have?",
      "concepts": [
        "records",
        "components",
        "data"
      ],
      "studyGuideFocus": "Final focus: record syntax, generated constructor/accessors, immutability, and when a normal class is better.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Check the generated accessor names.",
        "Confirm record fields are initialized in the header.",
        "Decide whether you need mutable state; if yes, use a class."
      ],
      "rubric": [
        "Uses the correct Java structure for record.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for record.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB019",
      "level": "base",
      "topic": "Classes and Objects",
      "skill": "encapsulation",
      "title": "Getter method",
      "prompt": "Return a private field safely.",
      "task": "Complete getBalance so outside code can read balance without directly accessing the field.",
      "starter": "public class Account {\n    private double balance;\n\n    public Account(double balance) {\n        this.balance = balance;\n    }\n\n    // getter here\n}\n",
      "required": [
        "Demonstrate encapsulation clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: encapsulation.",
        "Write fields first, then constructor, then one method that uses the fields.",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "List the object state first, then write one behavior that uses that state.",
        "Use this.fieldName when a parameter has the same name as a field."
      ],
      "modelAnswer": "public class Account {\n    private double balance;\n\n    public Account(double balance) {\n        this.balance = balance;\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}\n",
      "explanation": "The field stays private, but a method gives controlled read access.",
      "commonMistake": "Making the field public instead of writing a getter.",
      "selfCheck": "What part is protected by private?",
      "concepts": [
        "encapsulation",
        "getter",
        "fields"
      ],
      "studyGuideFocus": "Midterm 2/final focus: object state, behaviors, fields vs locals, encapsulation, and using objects from another class.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Create two different objects to make sure fields are not accidentally shared.",
        "Check that fields are initialized through the constructor.",
        "Confirm public methods use private state correctly."
      ],
      "rubric": [
        "Uses the correct Java structure for encapsulation.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for encapsulation.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB020",
      "level": "base",
      "topic": "Arrays and ArrayLists",
      "skill": "ArrayList add",
      "title": "Build a list",
      "prompt": "Use ArrayList add and return.",
      "task": "Complete the method so it returns an ArrayList containing \"A\" and \"B\".",
      "starter": "public static ArrayList<String> letters() {\n    ArrayList<String> list = new ArrayList<>();\n    // your code here\n    return list;\n}\n",
      "required": [
        "Demonstrate ArrayList add clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: ArrayList add.",
        "Decide whether this needs an index loop, enhanced for loop, or ArrayList method before coding.",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Decide if you need indexes. If you only read values, an enhanced for loop may be enough.",
        "The last valid array index is length - 1. For ArrayList, it is size() - 1."
      ],
      "modelAnswer": "public static ArrayList<String> letters() {\n    ArrayList<String> list = new ArrayList<>();\n    list.add(\"A\");\n    list.add(\"B\");\n    return list;\n}\n",
      "explanation": "ArrayList grows as items are added.",
      "commonMistake": "Using list[0] like an array.",
      "selfCheck": "Which method adds to an ArrayList?",
      "concepts": [
        "ArrayList",
        "add",
        "return"
      ],
      "studyGuideFocus": "Midterm 1/final focus: indexing, length/size, traversal, accumulators, off-by-one errors, and safe updates.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Test an array/list with one item.",
        "Test the first and last index.",
        "Check whether an enhanced for loop or index loop is safer for this task."
      ],
      "rubric": [
        "Uses the correct Java structure for ArrayList add.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for ArrayList add.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB021",
      "level": "base",
      "topic": "Methods",
      "skill": "boolean method",
      "title": "Is adult",
      "prompt": "Return a boolean expression.",
      "task": "Write isAdult so it returns true when age is at least 18.",
      "starter": "public static boolean isAdult(int age) {\n    // your code here\n}\n",
      "required": [
        "Demonstrate boolean method clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: boolean method.",
        "Copy the method header idea first: return type, name, parameters, then body.",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Start from the method header: return type, name, and parameters tell you most of the answer.",
        "A non-void method needs a return statement that gives back the promised type."
      ],
      "modelAnswer": "public static boolean isAdult(int age) {\n    return age >= 18;\n}\n",
      "explanation": "A boolean method can directly return a comparison.",
      "commonMistake": "Writing an if/else that returns strings instead of booleans.",
      "selfCheck": "What does isAdult(18) return?",
      "concepts": [
        "boolean",
        "comparison",
        "methods"
      ],
      "studyGuideFocus": "Final focus: method headers, return types, parameters, return vs print, helper methods, and calling methods correctly.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Check that the method returns instead of only printing when a return type is required.",
        "Test one normal value and one boundary value.",
        "Confirm the parameter names are used correctly."
      ],
      "rubric": [
        "Uses the correct Java structure for boolean method.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for boolean method.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB022",
      "level": "base",
      "topic": "Inheritance and Polymorphism",
      "skill": "super constructor",
      "title": "Call parent constructor",
      "prompt": "Practice super in a subclass constructor.",
      "task": "Complete OnlineStudent so it passes name to the Student constructor and stores platform.",
      "starter": "class Student {\n    private String name;\n\n    public Student(String name) {\n        this.name = name;\n    }\n}\n\nclass OnlineStudent extends Student {\n    private String platform;\n\n    public OnlineStudent(String name, String platform) {\n        // your code here\n    }\n}\n",
      "required": [
        "Demonstrate super constructor clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: super constructor.",
        "Write the superclass behavior first, then decide which method the subclass should override.",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Use the is-a rule: a subclass object should be usable wherever the superclass is expected.",
        "When a method is overridden, the object type at runtime decides which version runs."
      ],
      "modelAnswer": "class Student {\n    private String name;\n\n    public Student(String name) {\n        this.name = name;\n    }\n}\n\nclass OnlineStudent extends Student {\n    private String platform;\n\n    public OnlineStudent(String name, String platform) {\n        super(name);\n        this.platform = platform;\n    }\n}\n",
      "explanation": "super(name) calls the parent constructor before setting subclass state.",
      "commonMistake": "Trying to assign the private parent field directly.",
      "selfCheck": "Which part belongs to the parent?",
      "concepts": [
        "super",
        "constructors",
        "inheritance"
      ],
      "studyGuideFocus": "Final focus: is-a relationships, overriding, dynamic dispatch, protected/private access, and superclass constructor calls.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Call the method through a superclass reference.",
        "Check which overridden method runs at runtime.",
        "Confirm the subclass still satisfies the superclass is-a relationship."
      ],
      "rubric": [
        "Uses the correct Java structure for super constructor.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for super constructor.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB023",
      "level": "base",
      "topic": "Exceptions, Files, and Null Pointers",
      "skill": "null check",
      "title": "Safe length",
      "prompt": "Avoid a NullPointerException.",
      "task": "Complete the method so null returns 0 and non-null text returns its length.",
      "starter": "public static int safeLength(String text) {\n    // your code here\n}\n",
      "required": [
        "Demonstrate null check clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: null check.",
        "Write the method/class/loop shape first before filling in details for \u201cSafe length.\u201d",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Put only the risky operation inside try when possible.",
        "Before using object.method(), ask whether object could be null."
      ],
      "modelAnswer": "public static int safeLength(String text) {\n    if (text == null) {\n        return 0;\n    }\n    return text.length();\n}\n",
      "explanation": "The null check happens before calling a method on the object.",
      "commonMistake": "Calling text.length() before checking for null.",
      "selfCheck": "What happens if text is null?",
      "concepts": [
        "null",
        "if",
        "String"
      ],
      "studyGuideFocus": "Final focus: try/catch flow, file-reading basics, null checks, and avoiding hidden runtime crashes.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Test missing or bad input when appropriate.",
        "Check what happens before and after the catch block.",
        "Look for null before calling methods on an object."
      ],
      "rubric": [
        "Uses the correct Java structure for null check.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for null check.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB024",
      "level": "base",
      "topic": "Interfaces and KeyListener",
      "skill": "KeyListener method",
      "title": "Key pressed skeleton",
      "prompt": "Write one required KeyListener method header.",
      "task": "Write a keyPressed method that moves x right by 5 when the right arrow is pressed.",
      "starter": "private int x = 0;\n\n// method here\n",
      "required": [
        "Demonstrate KeyListener method clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: KeyListener method.",
        "List the required interface methods before writing the behavior inside them.",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "An interface tells you which method names/signatures must exist.",
        "For KeyListener, separate movement logic from drawing logic."
      ],
      "modelAnswer": "private int x = 0;\n\n@Override\npublic void keyPressed(KeyEvent event) {\n    if (event.getKeyCode() == KeyEvent.VK_RIGHT) {\n        x += 5;\n    }\n}\n",
      "explanation": "keyPressed receives the KeyEvent and checks the key code.",
      "commonMistake": "Using keyTyped for arrow keys.",
      "selfCheck": "Which method is best for arrow movement?",
      "concepts": [
        "KeyListener",
        "keyPressed",
        "events"
      ],
      "studyGuideFocus": "Final focus: interface contracts, required methods, event-driven thinking, and KeyListener method responsibilities.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Confirm every required interface method is present.",
        "Check what should happen on keyPressed vs keyReleased.",
        "Make sure state changes are followed by repaint when drawing is involved."
      ],
      "rubric": [
        "Uses the correct Java structure for KeyListener method.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for KeyListener method.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    },
    {
      "id": "CQB025",
      "level": "base",
      "topic": "Final Exam Mixed Practice",
      "skill": "mixed method and object",
      "title": "Course summary",
      "prompt": "Combine object state and a method.",
      "task": "Write a Course class with a title field and a toString that returns Course: CS202.",
      "starter": "// Write the full Course class here.\n// Include a title field and toString.\n",
      "required": [
        "Demonstrate mixed method and object clearly.",
        "Use readable CS202-level Java, not advanced shortcuts.",
        "Match the required return value, output, or object behavior exactly."
      ],
      "guidelines": [
        "Read the task and identify the exact CS202 concept: mixed method and object.",
        "Write the method/class/loop shape first before filling in details for \u201cCourse summary.\u201d",
        "Trace one small example by hand before showing the official solution."
      ],
      "hints": [
        "Separate the task into small CS202 ideas before coding.",
        "After writing code, trace one complete sample by hand."
      ],
      "modelAnswer": "public class Course {\n    private String title;\n\n    public Course(String title) {\n        this.title = title;\n    }\n\n    @Override\n    public String toString() {\n        return \"Course: \" + title;\n    }\n}\n",
      "explanation": "This combines fields, constructor assignment, and toString.",
      "commonMistake": "Forgetting this.title in the constructor.",
      "selfCheck": "Which three CS202 ideas are used?",
      "concepts": [
        "constructor",
        "field",
        "toString"
      ],
      "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
      "levelReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "edgeCases": [
        "Trace the sample by hand before writing code.",
        "Identify which CS202 topics are being combined.",
        "Test a boundary case and a normal case."
      ],
      "rubric": [
        "Uses the correct Java structure for mixed method and object.",
        "Produces the exact return value or output required by the task.",
        "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
      ],
      "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for mixed method and object.",
      "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
    }
  ],
  "extras": {
    "level1": [
      {
        "id": "CQL1-001",
        "level": "level1Extra",
        "topic": "Java Basics",
        "skill": "Scanner input",
        "title": "Read and echo a name",
        "prompt": "Practice input and output.",
        "task": "Complete main so it reads one word and prints Hi, name.",
        "starter": "import java.util.Scanner;\n\npublic class EchoName {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // your code here\n    }\n}\n",
        "required": [
          "Demonstrate Scanner input clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: Scanner input.",
          "Write the method/class/loop shape first before filling in details for \u201cRead and echo a name.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Write the variable declarations first, then the calculation, then the print statement.",
          "Check whether Java will do numeric math or String concatenation at each step."
        ],
        "modelAnswer": "import java.util.Scanner;\n\npublic class EchoName {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        String name = input.next();\n        System.out.println(\"Hi, \" + name);\n    }\n}\n",
        "explanation": "Use Scanner to read first, then concatenate the result into the output.",
        "commonMistake": "Printing before reading the input.",
        "selfCheck": "What type should store the name?",
        "concepts": [
          "Scanner",
          "String",
          "input"
        ],
        "studyGuideFocus": "Midterm 1 focus: variables, data types, arithmetic, String concatenation, and exact console output.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Check integer vs double results.",
          "Confirm the output label and spacing exactly match the prompt.",
          "Trace what happens when values are changed before printing."
        ],
        "rubric": [
          "Uses the correct Java structure for Scanner input.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for Scanner input.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-002",
        "level": "level1Extra",
        "topic": "Conditions, Loops, and Operators",
        "skill": "while loop",
        "title": "Countdown",
        "prompt": "Write a countdown using while.",
        "task": "Print 3, 2, 1, Go using a while loop.",
        "starter": "public class Countdown {\n    public static void main(String[] args) {\n        int count = 3;\n        // your loop here\n        System.out.println(\"Go\");\n    }\n}\n",
        "required": [
          "Demonstrate while loop clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: while loop.",
          "Write the method/class/loop shape first before filling in details for \u201cCountdown.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Circle the boundary value in the prompt before choosing <, <=, >, or >=.",
          "Write the first two loop values and the final loop value on paper."
        ],
        "modelAnswer": "public class Countdown {\n    public static void main(String[] args) {\n        int count = 3;\n        while (count >= 1) {\n            System.out.println(count);\n            count--;\n        }\n        System.out.println(\"Go\");\n    }\n}\n",
        "explanation": "The update count-- moves the loop toward stopping.",
        "commonMistake": "Forgetting count-- and creating an infinite loop.",
        "selfCheck": "What value makes the loop stop?",
        "concepts": [
          "while",
          "decrement",
          "loop"
        ],
        "studyGuideFocus": "Midterm 1 focus: boolean logic, comparison operators, loop boundaries, updates, and order of operations.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Test the exact boundary value.",
          "Check the first and last loop iteration.",
          "Confirm the condition eventually becomes false."
        ],
        "rubric": [
          "Uses the correct Java structure for while loop.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for while loop.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-003",
        "level": "level1Extra",
        "topic": "Arrays and ArrayLists",
        "skill": "array search",
        "title": "Contains value",
        "prompt": "Return true if target appears in the array.",
        "task": "Complete contains using a loop.",
        "starter": "public static boolean contains(int[] values, int target) {\n    // your code here\n}\n",
        "required": [
          "Demonstrate array search clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: array search.",
          "Decide whether this needs an index loop, enhanced for loop, or ArrayList method before coding.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Decide if you need indexes. If you only read values, an enhanced for loop may be enough.",
          "The last valid array index is length - 1. For ArrayList, it is size() - 1."
        ],
        "modelAnswer": "public static boolean contains(int[] values, int target) {\n    for (int value : values) {\n        if (value == target) {\n            return true;\n        }\n    }\n    return false;\n}\n",
        "explanation": "Return true as soon as a match is found; return false only after the whole loop.",
        "commonMistake": "Putting return false inside the loop too early.",
        "selfCheck": "When should false be returned?",
        "concepts": [
          "arrays",
          "search",
          "boolean"
        ],
        "studyGuideFocus": "Midterm 1/final focus: indexing, length/size, traversal, accumulators, off-by-one errors, and safe updates.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Test an array/list with one item.",
          "Test the first and last index.",
          "Check whether an enhanced for loop or index loop is safer for this task."
        ],
        "rubric": [
          "Uses the correct Java structure for array search.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for array search.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-004",
        "level": "level1Extra",
        "topic": "Methods",
        "skill": "void method",
        "title": "Print line",
        "prompt": "Write a void method that prints a separator.",
        "task": "Write printLine so it prints five dashes.",
        "starter": "// Write this method in a class.\n// It should print five dashes.\n",
        "required": [
          "Demonstrate void method clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: void method.",
          "Copy the method header idea first: return type, name, parameters, then body.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Start from the method header: return type, name, and parameters tell you most of the answer.",
          "A non-void method needs a return statement that gives back the promised type."
        ],
        "modelAnswer": "public static void printLine() {\n    System.out.println(\"-----\");\n}\n",
        "explanation": "void is correct because the method prints instead of returning a value.",
        "commonMistake": "Trying to return \"-----\" from a void method.",
        "selfCheck": "Does the prompt ask you to return or print?",
        "concepts": [
          "void",
          "method",
          "println"
        ],
        "studyGuideFocus": "Final focus: method headers, return types, parameters, return vs print, helper methods, and calling methods correctly.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Check that the method returns instead of only printing when a return type is required.",
          "Test one normal value and one boundary value.",
          "Confirm the parameter names are used correctly."
        ],
        "rubric": [
          "Uses the correct Java structure for void method.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for void method.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-005",
        "level": "level1Extra",
        "topic": "Classes and Objects",
        "skill": "setter",
        "title": "Set a score",
        "prompt": "Write a setter method with validation.",
        "task": "Complete setScore so negative scores become 0.",
        "starter": "public class Game {\n    private int score;\n\n    public void setScore(int score) {\n        // your code here\n    }\n}\n",
        "required": [
          "Demonstrate setter clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: setter.",
          "Write fields first, then constructor, then one method that uses the fields.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "List the object state first, then write one behavior that uses that state.",
          "Use this.fieldName when a parameter has the same name as a field."
        ],
        "modelAnswer": "public class Game {\n    private int score;\n\n    public void setScore(int score) {\n        if (score < 0) {\n            this.score = 0;\n        } else {\n            this.score = score;\n        }\n    }\n}\n",
        "explanation": "The setter protects the field from invalid state.",
        "commonMistake": "Assigning score = score instead of this.score = score.",
        "selfCheck": "Why is this needed?",
        "concepts": [
          "setter",
          "validation",
          "this"
        ],
        "studyGuideFocus": "Midterm 2/final focus: object state, behaviors, fields vs locals, encapsulation, and using objects from another class.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Create two different objects to make sure fields are not accidentally shared.",
          "Check that fields are initialized through the constructor.",
          "Confirm public methods use private state correctly."
        ],
        "rubric": [
          "Uses the correct Java structure for setter.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for setter.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-006",
        "level": "level1Extra",
        "topic": "Constructors",
        "skill": "overloaded constructor",
        "title": "Default pages",
        "prompt": "Add a second constructor.",
        "task": "Add a constructor that accepts only title and sets pages to 1.",
        "starter": "public class Notebook {\n    private String title;\n    private int pages;\n\n    public Notebook(String title, int pages) {\n        this.title = title;\n        this.pages = pages;\n    }\n\n    // overloaded constructor here\n}\n",
        "required": [
          "Demonstrate overloaded constructor clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: overloaded constructor.",
          "Write the fields, then make sure every constructor initializes them consistently.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "The constructor name must match the class name and has no return type.",
          "Overloaded constructors should initialize the same fields, just from different inputs."
        ],
        "modelAnswer": "public class Notebook {\n    private String title;\n    private int pages;\n\n    public Notebook(String title, int pages) {\n        this.title = title;\n        this.pages = pages;\n    }\n\n    public Notebook(String title) {\n        this.title = title;\n        this.pages = 1;\n    }\n}\n",
        "explanation": "Overloaded constructors share a class name but have different parameter lists.",
        "commonMistake": "Giving both constructors the same parameter list.",
        "selfCheck": "How does Java tell overloaded constructors apart?",
        "concepts": [
          "constructors",
          "overloading",
          "parameters"
        ],
        "studyGuideFocus": "Midterm 2/final focus: constructor purpose, overloaded constructors, copy constructors, this, default values, and initialization order.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Test the constructor with normal values.",
          "Check overloaded constructors use consistent defaults.",
          "Confirm fields are initialized before methods depend on them."
        ],
        "rubric": [
          "Uses the correct Java structure for overloaded constructor.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for overloaded constructor.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-007",
        "level": "level1Extra",
        "topic": "Inheritance and Polymorphism",
        "skill": "abstract class",
        "title": "Complete subclass method",
        "prompt": "Implement an abstract area method.",
        "task": "Write Square so area returns side * side.",
        "starter": "abstract class Shape {\n    public abstract double area();\n}\n\nclass Square extends Shape {\n    private double side;\n\n    public Square(double side) {\n        this.side = side;\n    }\n\n    // area here\n}\n",
        "required": [
          "Demonstrate abstract class clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: abstract class.",
          "Write the superclass behavior first, then decide which method the subclass should override.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Use the is-a rule: a subclass object should be usable wherever the superclass is expected.",
          "When a method is overridden, the object type at runtime decides which version runs."
        ],
        "modelAnswer": "abstract class Shape {\n    public abstract double area();\n}\n\nclass Square extends Shape {\n    private double side;\n\n    public Square(double side) {\n        this.side = side;\n    }\n\n    @Override\n    public double area() {\n        return side * side;\n    }\n}\n",
        "explanation": "A concrete subclass must implement inherited abstract methods.",
        "commonMistake": "Leaving area out and making Square abstract by accident.",
        "selfCheck": "Why is @Override helpful here?",
        "concepts": [
          "abstract",
          "override",
          "inheritance"
        ],
        "studyGuideFocus": "Final focus: is-a relationships, overriding, dynamic dispatch, protected/private access, and superclass constructor calls.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Call the method through a superclass reference.",
          "Check which overridden method runs at runtime.",
          "Confirm the subclass still satisfies the superclass is-a relationship."
        ],
        "rubric": [
          "Uses the correct Java structure for abstract class.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for abstract class.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-008",
        "level": "level1Extra",
        "topic": "Interfaces and KeyListener",
        "skill": "interface implementation",
        "title": "Comparable-style compare",
        "prompt": "Return a simple comparison result.",
        "task": "Complete compareTo so higher points returns positive, lower returns negative, same returns 0.",
        "starter": "public int compareTo(Player other) {\n    // your code here\n}\n",
        "required": [
          "Demonstrate interface implementation clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: interface implementation.",
          "List the required interface methods before writing the behavior inside them.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "An interface tells you which method names/signatures must exist.",
          "For KeyListener, separate movement logic from drawing logic."
        ],
        "modelAnswer": "public int compareTo(Player other) {\n    return this.points - other.points;\n}\n",
        "explanation": "Subtracting gives positive, negative, or zero based on score order.",
        "commonMistake": "Returning only true or false from compareTo.",
        "selfCheck": "What does zero mean?",
        "concepts": [
          "compareTo",
          "interface",
          "objects"
        ],
        "studyGuideFocus": "Final focus: interface contracts, required methods, event-driven thinking, and KeyListener method responsibilities.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Confirm every required interface method is present.",
          "Check what should happen on keyPressed vs keyReleased.",
          "Make sure state changes are followed by repaint when drawing is involved."
        ],
        "rubric": [
          "Uses the correct Java structure for interface implementation.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for interface implementation.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-009",
        "level": "level1Extra",
        "topic": "equals(), ==, =, and toString()",
        "skill": "assignment vs equality",
        "title": "Fix flag logic",
        "prompt": "Write a condition that checks a boolean.",
        "task": "Complete the if statement so it prints Ready only when ready is true.",
        "starter": "boolean ready = true;\nif (/* condition */) {\n    System.out.println(\"Ready\");\n}\n",
        "required": [
          "Demonstrate assignment vs equality clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: assignment vs equality.",
          "Write the method/class/loop shape first before filling in details for \u201cFix flag logic.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Use = to assign, == carefully for primitives/reference identity, and equals for object value comparison.",
          "toString should return the useful state of the object as a String."
        ],
        "modelAnswer": "boolean ready = true;\nif (ready) {\n    System.out.println(\"Ready\");\n}\n",
        "explanation": "A boolean variable can be used directly as the condition.",
        "commonMistake": "Writing ready = true inside the if condition.",
        "selfCheck": "Are you checking or assigning?",
        "concepts": [
          "boolean",
          "condition",
          "assignment"
        ],
        "studyGuideFocus": "Final focus: assignment vs comparison, reference vs value comparison, overriding equals, and useful toString output.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Check two different objects with the same data.",
          "Check assignment, reference comparison, and value comparison separately.",
          "Confirm toString returns a String and does not print directly."
        ],
        "rubric": [
          "Uses the correct Java structure for assignment vs equality.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for assignment vs equality.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-010",
        "level": "level1Extra",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "file reading concept",
        "title": "Scanner loop",
        "prompt": "Read all lines from a Scanner.",
        "task": "Write a loop that prints every line while input has another line.",
        "starter": "Scanner input = new Scanner(file);\n// your loop here\n",
        "required": [
          "Demonstrate file reading concept clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: file reading concept.",
          "Write the method/class/loop shape first before filling in details for \u201cScanner loop.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Put only the risky operation inside try when possible.",
          "Before using object.method(), ask whether object could be null."
        ],
        "modelAnswer": "Scanner input = new Scanner(file);\nwhile (input.hasNextLine()) {\n    String line = input.nextLine();\n    System.out.println(line);\n}\n",
        "explanation": "Check hasNextLine before calling nextLine.",
        "commonMistake": "Calling nextLine without checking and running out of input.",
        "selfCheck": "What method checks first?",
        "concepts": [
          "Scanner",
          "file",
          "while"
        ],
        "studyGuideFocus": "Final focus: try/catch flow, file-reading basics, null checks, and avoiding hidden runtime crashes.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Test missing or bad input when appropriate.",
          "Check what happens before and after the catch block.",
          "Look for null before calling methods on an object."
        ],
        "rubric": [
          "Uses the correct Java structure for file reading concept.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for file reading concept.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-011",
        "level": "level1Extra",
        "topic": "Static, Final, Memory, and Garbage Collection",
        "skill": "instance vs static",
        "title": "Count objects",
        "prompt": "Increment a static count in a constructor.",
        "task": "Complete the constructor so each new Counter increases objectCount.",
        "starter": "public class Counter {\n    private static int objectCount = 0;\n\n    public Counter() {\n        // your code here\n    }\n}\n",
        "required": [
          "Demonstrate instance vs static clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: instance vs static.",
          "Write the method/class/loop shape first before filling in details for \u201cCount objects.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Ask: should this value belong to the class itself or to each object?",
          "A final variable can be assigned once; a static variable is shared by the class."
        ],
        "modelAnswer": "public class Counter {\n    private static int objectCount = 0;\n\n    public Counter() {\n        objectCount++;\n    }\n}\n",
        "explanation": "The static field is shared by all Counter objects.",
        "commonMistake": "Making objectCount a local variable in the constructor.",
        "selfCheck": "Should each object get its own count?",
        "concepts": [
          "static",
          "constructor",
          "field"
        ],
        "studyGuideFocus": "Final focus: static vs instance members, final constants, object references, aliases, and simple memory reasoning.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Create two objects and check what is shared vs separate.",
          "Check whether a value belongs to the class or one object.",
          "Confirm constants are not changed after initialization."
        ],
        "rubric": [
          "Uses the correct Java structure for instance vs static.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for instance vs static.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-012",
        "level": "level1Extra",
        "topic": "Graphics",
        "skill": "coordinates",
        "title": "Draw a face oval",
        "prompt": "Use fillOval with x, y, width, and height.",
        "task": "Write one statement that draws a filled oval at x=40, y=50, width=100, height=80.",
        "starter": "public void drawFace(Graphics g) {\n    // your drawing line here\n}\n",
        "required": [
          "Demonstrate coordinates clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: coordinates.",
          "Sketch the coordinates before writing the draw calls.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Remember: x increases to the right, y increases downward.",
          "Call super.paintComponent(g) before custom drawing in Swing."
        ],
        "modelAnswer": "public void drawFace(Graphics g) {\n    g.fillOval(40, 50, 100, 80);\n}\n",
        "explanation": "Graphics methods usually use x, y, width, and height.",
        "commonMistake": "Thinking the last two numbers are ending coordinates.",
        "selfCheck": "What do width and height mean?",
        "concepts": [
          "Graphics",
          "coordinates",
          "fillOval"
        ],
        "studyGuideFocus": "Midterm/final focus: paintComponent, Graphics methods, coordinates, colors, repaint, and drawing order.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Check x/y coordinates from the top-left corner.",
          "Check drawing order when shapes overlap.",
          "Confirm drawing code belongs in paintComponent."
        ],
        "rubric": [
          "Uses the correct Java structure for coordinates.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for coordinates.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-013",
        "level": "level1Extra",
        "topic": "Records vs Classes",
        "skill": "record accessor",
        "title": "Use record accessor",
        "prompt": "Return a record component.",
        "task": "Given a Point record, write xPlusY that returns x plus y.",
        "starter": "public record Point(int x, int y) { }\n\npublic static int xPlusY(Point point) {\n    // your code here\n}\n",
        "required": [
          "Demonstrate record accessor clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: record accessor.",
          "Write the method/class/loop shape first before filling in details for \u201cUse record accessor.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Records are best for simple data carriers.",
          "Record accessors use the field name, like name(), not getName()."
        ],
        "modelAnswer": "public record Point(int x, int y) { }\n\npublic static int xPlusY(Point point) {\n    return point.x() + point.y();\n}\n",
        "explanation": "Record accessors use the component name with parentheses.",
        "commonMistake": "Trying to use point.x as a public field.",
        "selfCheck": "What is the accessor for x?",
        "concepts": [
          "record",
          "accessor",
          "method"
        ],
        "studyGuideFocus": "Final focus: record syntax, generated constructor/accessors, immutability, and when a normal class is better.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Check the generated accessor names.",
          "Confirm record fields are initialized in the header.",
          "Decide whether you need mutable state; if yes, use a class."
        ],
        "rubric": [
          "Uses the correct Java structure for record accessor.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for record accessor.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-014",
        "level": "level1Extra",
        "topic": "Java Basics",
        "skill": "casting",
        "title": "Average as double",
        "prompt": "Avoid integer division.",
        "task": "Return the average of two ints as a double.",
        "starter": "public static double average(int a, int b) {\n    // your code here\n}\n",
        "required": [
          "Demonstrate casting clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: casting.",
          "Write the method/class/loop shape first before filling in details for \u201cAverage as double.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Write the variable declarations first, then the calculation, then the print statement.",
          "Check whether Java will do numeric math or String concatenation at each step."
        ],
        "modelAnswer": "public static double average(int a, int b) {\n    return (a + b) / 2.0;\n}\n",
        "explanation": "Using 2.0 forces floating-point division.",
        "commonMistake": "Using / 2 and losing decimals.",
        "selfCheck": "What should average(1, 2) return?",
        "concepts": [
          "division",
          "double",
          "casting"
        ],
        "studyGuideFocus": "Midterm 1 focus: variables, data types, arithmetic, String concatenation, and exact console output.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Check integer vs double results.",
          "Confirm the output label and spacing exactly match the prompt.",
          "Trace what happens when values are changed before printing."
        ],
        "rubric": [
          "Uses the correct Java structure for casting.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for casting.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-015",
        "level": "level1Extra",
        "topic": "Conditions, Loops, and Operators",
        "skill": "modulo",
        "title": "Odd check",
        "prompt": "Use modulo to test odd numbers.",
        "task": "Write isOdd so it returns true for odd numbers.",
        "starter": "public static boolean isOdd(int number) {\n    // your code here\n}\n",
        "required": [
          "Demonstrate modulo clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: modulo.",
          "Write the method/class/loop shape first before filling in details for \u201cOdd check.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Circle the boundary value in the prompt before choosing <, <=, >, or >=.",
          "Write the first two loop values and the final loop value on paper."
        ],
        "modelAnswer": "public static boolean isOdd(int number) {\n    return number % 2 != 0;\n}\n",
        "explanation": "Modulo gives the remainder after division.",
        "commonMistake": "Using number / 2 instead of number % 2.",
        "selfCheck": "What is 5 % 2?",
        "concepts": [
          "modulo",
          "boolean",
          "operators"
        ],
        "studyGuideFocus": "Midterm 1 focus: boolean logic, comparison operators, loop boundaries, updates, and order of operations.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Test the exact boundary value.",
          "Check the first and last loop iteration.",
          "Confirm the condition eventually becomes false."
        ],
        "rubric": [
          "Uses the correct Java structure for modulo.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for modulo.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-016",
        "level": "level1Extra",
        "topic": "Arrays and ArrayLists",
        "skill": "2D array",
        "title": "First row sum",
        "prompt": "Sum the first row of a 2D array.",
        "task": "Complete firstRowSum for a non-empty grid.",
        "starter": "public static int firstRowSum(int[][] grid) {\n    int total = 0;\n    // your loop here\n    return total;\n}\n",
        "required": [
          "Demonstrate 2D array clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: 2D array.",
          "Decide whether this needs an index loop, enhanced for loop, or ArrayList method before coding.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Decide if you need indexes. If you only read values, an enhanced for loop may be enough.",
          "The last valid array index is length - 1. For ArrayList, it is size() - 1."
        ],
        "modelAnswer": "public static int firstRowSum(int[][] grid) {\n    int total = 0;\n    for (int col = 0; col < grid[0].length; col++) {\n        total += grid[0][col];\n    }\n    return total;\n}\n",
        "explanation": "The first row is grid[0], and its columns go from 0 to length - 1.",
        "commonMistake": "Using grid.length for the number of columns.",
        "selfCheck": "Which length belongs to the first row?",
        "concepts": [
          "2D arrays",
          "indexes",
          "loop"
        ],
        "studyGuideFocus": "Midterm 1/final focus: indexing, length/size, traversal, accumulators, off-by-one errors, and safe updates.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Test an array/list with one item.",
          "Test the first and last index.",
          "Check whether an enhanced for loop or index loop is safer for this task."
        ],
        "rubric": [
          "Uses the correct Java structure for 2D array.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for 2D array.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-017",
        "level": "level1Extra",
        "topic": "Methods",
        "skill": "helper method",
        "title": "Reuse a helper",
        "prompt": "Call a helper method inside another method.",
        "task": "Complete totalCost by calling subtotal and adding tax.",
        "starter": "public static double subtotal(double price, int quantity) {\n    return price * quantity;\n}\n\npublic static double totalCost(double price, int quantity) {\n    // your code here\n}\n",
        "required": [
          "Demonstrate helper method clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: helper method.",
          "Copy the method header idea first: return type, name, parameters, then body.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Start from the method header: return type, name, and parameters tell you most of the answer.",
          "A non-void method needs a return statement that gives back the promised type."
        ],
        "modelAnswer": "public static double subtotal(double price, int quantity) {\n    return price * quantity;\n}\n\npublic static double totalCost(double price, int quantity) {\n    double beforeTax = subtotal(price, quantity);\n    return beforeTax * 1.07;\n}\n",
        "explanation": "A helper method keeps one calculation in one place.",
        "commonMistake": "Rewriting subtotal incorrectly instead of calling it.",
        "selfCheck": "What values must be passed to subtotal?",
        "concepts": [
          "methods",
          "helper",
          "return"
        ],
        "studyGuideFocus": "Final focus: method headers, return types, parameters, return vs print, helper methods, and calling methods correctly.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Check that the method returns instead of only printing when a return type is required.",
          "Test one normal value and one boundary value.",
          "Confirm the parameter names are used correctly."
        ],
        "rubric": [
          "Uses the correct Java structure for helper method.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for helper method.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-018",
        "level": "level1Extra",
        "topic": "Classes and Objects",
        "skill": "object creation",
        "title": "Create and use object",
        "prompt": "Instantiate a Book and call a method.",
        "task": "Write code that creates Book b with 200 pages and prints b.getPages().",
        "starter": "// Inside main.\n// Create one Book object and print pages.\n",
        "required": [
          "Demonstrate object creation clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: object creation.",
          "Write fields first, then constructor, then one method that uses the fields.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "List the object state first, then write one behavior that uses that state.",
          "Use this.fieldName when a parameter has the same name as a field."
        ],
        "modelAnswer": "Book b = new Book(\"CS202\", 200);\nSystem.out.println(b.getPages());\n",
        "explanation": "new creates the object and the reference b lets you call its methods.",
        "commonMistake": "Calling getPages without an object.",
        "selfCheck": "What does new return?",
        "concepts": [
          "object",
          "new",
          "method call"
        ],
        "studyGuideFocus": "Midterm 2/final focus: object state, behaviors, fields vs locals, encapsulation, and using objects from another class.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Create two different objects to make sure fields are not accidentally shared.",
          "Check that fields are initialized through the constructor.",
          "Confirm public methods use private state correctly."
        ],
        "rubric": [
          "Uses the correct Java structure for object creation.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for object creation.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-019",
        "level": "level1Extra",
        "topic": "Constructors",
        "skill": "copy constructor",
        "title": "Copy fields",
        "prompt": "Write a copy constructor for a simple class.",
        "task": "Complete the copy constructor so it copies x and y from other.",
        "starter": "public class Dot {\n    private int x;\n    private int y;\n\n    public Dot(Dot other) {\n        // your code here\n    }\n}\n",
        "required": [
          "Demonstrate copy constructor clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: copy constructor.",
          "Write the fields, then make sure every constructor initializes them consistently.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "The constructor name must match the class name and has no return type.",
          "Overloaded constructors should initialize the same fields, just from different inputs."
        ],
        "modelAnswer": "public class Dot {\n    private int x;\n    private int y;\n\n    public Dot(Dot other) {\n        this.x = other.x;\n        this.y = other.y;\n    }\n}\n",
        "explanation": "A copy constructor creates a new object using another object as the source.",
        "commonMistake": "Assigning this = other, which is not how Java copies objects.",
        "selfCheck": "Are you copying the reference or the fields?",
        "concepts": [
          "copy constructor",
          "fields",
          "object"
        ],
        "studyGuideFocus": "Midterm 2/final focus: constructor purpose, overloaded constructors, copy constructors, this, default values, and initialization order.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Test the constructor with normal values.",
          "Check overloaded constructors use consistent defaults.",
          "Confirm fields are initialized before methods depend on them."
        ],
        "rubric": [
          "Uses the correct Java structure for copy constructor.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for copy constructor.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-020",
        "level": "level1Extra",
        "topic": "Inheritance and Polymorphism",
        "skill": "polymorphic array",
        "title": "Call overridden method",
        "prompt": "Loop through animals and print speak.",
        "task": "Write a loop that prints speak() for each Animal in the array.",
        "starter": "Animal[] animals = { new Dog(), new Cat() };\n// your loop here\n",
        "required": [
          "Demonstrate polymorphic array clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: polymorphic array.",
          "Write the superclass behavior first, then decide which method the subclass should override.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Use the is-a rule: a subclass object should be usable wherever the superclass is expected.",
          "When a method is overridden, the object type at runtime decides which version runs."
        ],
        "modelAnswer": "Animal[] animals = { new Dog(), new Cat() };\nfor (Animal animal : animals) {\n    System.out.println(animal.speak());\n}\n",
        "explanation": "Polymorphism calls the correct overridden method based on the real object.",
        "commonMistake": "Checking every subclass manually with if statements.",
        "selfCheck": "Which version of speak runs?",
        "concepts": [
          "polymorphism",
          "array",
          "override"
        ],
        "studyGuideFocus": "Final focus: is-a relationships, overriding, dynamic dispatch, protected/private access, and superclass constructor calls.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Call the method through a superclass reference.",
          "Check which overridden method runs at runtime.",
          "Confirm the subclass still satisfies the superclass is-a relationship."
        ],
        "rubric": [
          "Uses the correct Java structure for polymorphic array.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for polymorphic array.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-021",
        "level": "level1Extra",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "finally concept",
        "title": "Close resource idea",
        "prompt": "Use finally for cleanup.",
        "task": "Write a try/catch/finally skeleton that prints Done in finally.",
        "starter": "try {\n    riskyWork();\n} catch (Exception error) {\n    // handle here\n} finally {\n    // cleanup here\n}\n",
        "required": [
          "Demonstrate finally concept clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: finally concept.",
          "Write the method/class/loop shape first before filling in details for \u201cClose resource idea.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Put only the risky operation inside try when possible.",
          "Before using object.method(), ask whether object could be null."
        ],
        "modelAnswer": "try {\n    riskyWork();\n} catch (Exception error) {\n    System.out.println(\"Problem found\");\n} finally {\n    System.out.println(\"Done\");\n}\n",
        "explanation": "finally runs after try/catch whether an exception happened or not.",
        "commonMistake": "Putting cleanup only inside catch.",
        "selfCheck": "When does finally run?",
        "concepts": [
          "try catch",
          "finally",
          "exceptions"
        ],
        "studyGuideFocus": "Final focus: try/catch flow, file-reading basics, null checks, and avoiding hidden runtime crashes.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Test missing or bad input when appropriate.",
          "Check what happens before and after the catch block.",
          "Look for null before calling methods on an object."
        ],
        "rubric": [
          "Uses the correct Java structure for finally concept.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for finally concept.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-022",
        "level": "level1Extra",
        "topic": "Interfaces and KeyListener",
        "skill": "event update",
        "title": "Repaint after movement",
        "prompt": "Call repaint after changing position.",
        "task": "Write code inside keyPressed that moves x left and calls repaint.",
        "starter": "if (event.getKeyCode() == KeyEvent.VK_LEFT) {\n    // your code here\n}\n",
        "required": [
          "Demonstrate event update clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: event update.",
          "List the required interface methods before writing the behavior inside them.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "An interface tells you which method names/signatures must exist.",
          "For KeyListener, separate movement logic from drawing logic."
        ],
        "modelAnswer": "if (event.getKeyCode() == KeyEvent.VK_LEFT) {\n    x -= 5;\n    repaint();\n}\n",
        "explanation": "Changing the coordinate updates state; repaint asks Swing to redraw.",
        "commonMistake": "Changing x but never repainting the panel.",
        "selfCheck": "What makes the screen refresh?",
        "concepts": [
          "KeyListener",
          "repaint",
          "state"
        ],
        "studyGuideFocus": "Final focus: interface contracts, required methods, event-driven thinking, and KeyListener method responsibilities.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Confirm every required interface method is present.",
          "Check what should happen on keyPressed vs keyReleased.",
          "Make sure state changes are followed by repaint when drawing is involved."
        ],
        "rubric": [
          "Uses the correct Java structure for event update.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for event update.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-023",
        "level": "level1Extra",
        "topic": "equals(), ==, =, and toString()",
        "skill": "equals method",
        "title": "Compare id fields",
        "prompt": "Write equals for a simple ID class.",
        "task": "Complete equals so two Badge objects are equal when ids match.",
        "starter": "@Override\npublic boolean equals(Object obj) {\n    if (!(obj instanceof Badge other)) {\n        return false;\n    }\n    // compare ids here\n}\n",
        "required": [
          "Demonstrate equals method clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: equals method.",
          "Write the method/class/loop shape first before filling in details for \u201cCompare id fields.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Use = to assign, == carefully for primitives/reference identity, and equals for object value comparison.",
          "toString should return the useful state of the object as a String."
        ],
        "modelAnswer": "@Override\npublic boolean equals(Object obj) {\n    if (!(obj instanceof Badge other)) {\n        return false;\n    }\n    return this.id == other.id;\n}\n",
        "explanation": "After the instanceof check, other can be used as a Badge.",
        "commonMistake": "Casting before checking the object type.",
        "selfCheck": "What field decides equality?",
        "concepts": [
          "equals",
          "instanceof",
          "object"
        ],
        "studyGuideFocus": "Final focus: assignment vs comparison, reference vs value comparison, overriding equals, and useful toString output.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Check two different objects with the same data.",
          "Check assignment, reference comparison, and value comparison separately.",
          "Confirm toString returns a String and does not print directly."
        ],
        "rubric": [
          "Uses the correct Java structure for equals method.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for equals method.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-024",
        "level": "level1Extra",
        "topic": "Static, Final, Memory, and Garbage Collection",
        "skill": "garbage collection concept",
        "title": "Drop a reference",
        "prompt": "Show when an object can be collected.",
        "task": "Write the line that makes item stop referring to the object.",
        "starter": "Item item = new Item(\"pen\");\n// your line here\n",
        "required": [
          "Demonstrate garbage collection concept clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: garbage collection concept.",
          "Write the method/class/loop shape first before filling in details for \u201cDrop a reference.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Ask: should this value belong to the class itself or to each object?",
          "A final variable can be assigned once; a static variable is shared by the class."
        ],
        "modelAnswer": "Item item = new Item(\"pen\");\nitem = null;\n",
        "explanation": "When no references point to an object, it becomes eligible for garbage collection.",
        "commonMistake": "Thinking null deletes the object immediately.",
        "selfCheck": "What does the variable point to after this?",
        "concepts": [
          "null",
          "reference",
          "garbage collection"
        ],
        "studyGuideFocus": "Final focus: static vs instance members, final constants, object references, aliases, and simple memory reasoning.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Create two objects and check what is shared vs separate.",
          "Check whether a value belongs to the class or one object.",
          "Confirm constants are not changed after initialization."
        ],
        "rubric": [
          "Uses the correct Java structure for garbage collection concept.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for garbage collection concept.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL1-025",
        "level": "level1Extra",
        "topic": "Final Exam Mixed Practice",
        "skill": "mini integration",
        "title": "Small grade method",
        "prompt": "Combine array traversal and condition logic.",
        "task": "Return the number of passing scores in the array.",
        "starter": "public static int countPassing(int[] scores) {\n    int count = 0;\n    // your loop here\n    return count;\n}\n",
        "required": [
          "Demonstrate mini integration clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: mini integration.",
          "Write the method/class/loop shape first before filling in details for \u201cSmall grade method.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Separate the task into small CS202 ideas before coding.",
          "After writing code, trace one complete sample by hand."
        ],
        "modelAnswer": "public static int countPassing(int[] scores) {\n    int count = 0;\n    for (int score : scores) {\n        if (score >= 70) {\n            count++;\n        }\n    }\n    return count;\n}\n",
        "explanation": "This combines an accumulator, an enhanced for loop, and a boundary condition.",
        "commonMistake": "Using > 70 and missing a score of exactly 70.",
        "selfCheck": "Which scores count as passing?",
        "concepts": [
          "arrays",
          "if",
          "accumulator"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "levelReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "edgeCases": [
          "Trace the sample by hand before writing code.",
          "Identify which CS202 topics are being combined.",
          "Test a boundary case and a normal case."
        ],
        "rubric": [
          "Uses the correct Java structure for mini integration.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for mini integration.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      }
    ],
    "level2": [
      {
        "id": "CQL2-001",
        "level": "level2Extra",
        "topic": "Java Basics",
        "skill": "String conversion",
        "title": "Number label",
        "prompt": "Return \"ID-\" plus the integer id.",
        "task": "Write labelId so 42 becomes ID-42.",
        "starter": "public static String labelId(int id) {\n    // code\n}\n",
        "required": [
          "Demonstrate String conversion clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: String conversion.",
          "Write the method/class/loop shape first before filling in details for \u201cNumber label.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Write the variable declarations first, then the calculation, then the print statement.",
          "Check whether Java will do numeric math or String concatenation at each step."
        ],
        "modelAnswer": "public static String labelId(int id) {\n    return \"ID-\" + id;\n}\n",
        "explanation": "String concatenation converts the int to text automatically.",
        "commonMistake": "Trying to call parseInt when no parsing is needed.",
        "selfCheck": "What is the return type?",
        "concepts": [
          "String",
          "concatenation",
          "int"
        ],
        "studyGuideFocus": "Midterm 1 focus: variables, data types, arithmetic, String concatenation, and exact console output.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Check integer vs double results.",
          "Confirm the output label and spacing exactly match the prompt.",
          "Trace what happens when values are changed before printing."
        ],
        "rubric": [
          "Uses the correct Java structure for String conversion.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for String conversion.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-002",
        "level": "level2Extra",
        "topic": "Conditions, Loops, and Operators",
        "skill": "nested if",
        "title": "Letter grade",
        "prompt": "Return A, B, C, or F based on a score.",
        "task": "Use 90, 80, and 70 as the cutoffs.",
        "starter": "public static String grade(int score) {\n    // code\n}\n",
        "required": [
          "Demonstrate nested if clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: nested if.",
          "Write the method/class/loop shape first before filling in details for \u201cLetter grade.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Circle the boundary value in the prompt before choosing <, <=, >, or >=.",
          "Write the first two loop values and the final loop value on paper."
        ],
        "modelAnswer": "public static String grade(int score) {\n    if (score >= 90) {\n        return \"A\";\n    } else if (score >= 80) {\n        return \"B\";\n    } else if (score >= 70) {\n        return \"C\";\n    } else {\n        return \"F\";\n    }\n}\n",
        "explanation": "Order matters because the first true branch returns.",
        "commonMistake": "Checking >= 70 first and making every passing score a C.",
        "selfCheck": "What should 95 return?",
        "concepts": [
          "if else",
          "ordering",
          "return"
        ],
        "studyGuideFocus": "Midterm 1 focus: boolean logic, comparison operators, loop boundaries, updates, and order of operations.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Test the exact boundary value.",
          "Check the first and last loop iteration.",
          "Confirm the condition eventually becomes false."
        ],
        "rubric": [
          "Uses the correct Java structure for nested if.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for nested if.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-003",
        "level": "level2Extra",
        "topic": "Conditions, Loops, and Operators",
        "skill": "loop conversion",
        "title": "While to for",
        "prompt": "Rewrite the while loop as a for loop.",
        "task": "Produce the same output as the starter.",
        "starter": "int i = 1;\nwhile (i <= 4) {\n    System.out.println(i);\n    i++;\n}\n",
        "required": [
          "Demonstrate loop conversion clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: loop conversion.",
          "Write the method/class/loop shape first before filling in details for \u201cWhile to for.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Circle the boundary value in the prompt before choosing <, <=, >, or >=.",
          "Write the first two loop values and the final loop value on paper."
        ],
        "modelAnswer": "for (int i = 1; i <= 4; i++) {\n    System.out.println(i);\n}\n",
        "explanation": "A for loop groups initialization, condition, and update in one line.",
        "commonMistake": "Changing the boundary while converting.",
        "selfCheck": "What are the start, stop, and update?",
        "concepts": [
          "while",
          "for loop",
          "conversion"
        ],
        "studyGuideFocus": "Midterm 1 focus: boolean logic, comparison operators, loop boundaries, updates, and order of operations.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Test the exact boundary value.",
          "Check the first and last loop iteration.",
          "Confirm the condition eventually becomes false."
        ],
        "rubric": [
          "Uses the correct Java structure for loop conversion.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for loop conversion.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-004",
        "level": "level2Extra",
        "topic": "Arrays and ArrayLists",
        "skill": "minimum",
        "title": "Find minimum",
        "prompt": "Return the smallest value in a non-empty array.",
        "task": "Complete min.",
        "starter": "public static int min(int[] values) {\n    // code\n}\n",
        "required": [
          "Demonstrate minimum clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: minimum.",
          "Decide whether this needs an index loop, enhanced for loop, or ArrayList method before coding.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Decide if you need indexes. If you only read values, an enhanced for loop may be enough.",
          "The last valid array index is length - 1. For ArrayList, it is size() - 1."
        ],
        "modelAnswer": "public static int min(int[] values) {\n    int smallest = values[0];\n    for (int value : values) {\n        if (value < smallest) {\n            smallest = value;\n        }\n    }\n    return smallest;\n}\n",
        "explanation": "Initialize with the first actual value so negative numbers work.",
        "commonMistake": "Starting smallest at 0 and failing when all values are positive or negative.",
        "selfCheck": "Why use values[0]?",
        "concepts": [
          "arrays",
          "minimum",
          "loop"
        ],
        "studyGuideFocus": "Midterm 1/final focus: indexing, length/size, traversal, accumulators, off-by-one errors, and safe updates.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Test an array/list with one item.",
          "Test the first and last index.",
          "Check whether an enhanced for loop or index loop is safer for this task."
        ],
        "rubric": [
          "Uses the correct Java structure for minimum.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for minimum.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-005",
        "level": "level2Extra",
        "topic": "Arrays and ArrayLists",
        "skill": "ArrayList remove",
        "title": "Remove short names",
        "prompt": "Remove names shorter than 3 characters safely.",
        "task": "Use an index loop that does not skip after removal.",
        "starter": "public static void removeShort(ArrayList<String> names) {\n    // code\n}\n",
        "required": [
          "Demonstrate ArrayList remove clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: ArrayList remove.",
          "Decide whether this needs an index loop, enhanced for loop, or ArrayList method before coding.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Decide if you need indexes. If you only read values, an enhanced for loop may be enough.",
          "The last valid array index is length - 1. For ArrayList, it is size() - 1."
        ],
        "modelAnswer": "public static void removeShort(ArrayList<String> names) {\n    for (int i = names.size() - 1; i >= 0; i--) {\n        if (names.get(i).length() < 3) {\n            names.remove(i);\n        }\n    }\n}\n",
        "explanation": "Looping backward avoids index shifting problems.",
        "commonMistake": "Looping forward and skipping an element after removal.",
        "selfCheck": "What happens to indexes after remove?",
        "concepts": [
          "ArrayList",
          "remove",
          "index loop"
        ],
        "studyGuideFocus": "Midterm 1/final focus: indexing, length/size, traversal, accumulators, off-by-one errors, and safe updates.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Test an array/list with one item.",
          "Test the first and last index.",
          "Check whether an enhanced for loop or index loop is safer for this task."
        ],
        "rubric": [
          "Uses the correct Java structure for ArrayList remove.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for ArrayList remove.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-006",
        "level": "level2Extra",
        "topic": "Methods",
        "skill": "overloading",
        "title": "Overloaded area",
        "prompt": "Write two area methods: square and rectangle.",
        "task": "Use one parameter for square and two for rectangle.",
        "starter": "// Write two overloaded area methods.\n// One method has one parameter; one has two.\n",
        "required": [
          "Demonstrate overloading clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: overloading.",
          "Copy the method header idea first: return type, name, parameters, then body.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Start from the method header: return type, name, and parameters tell you most of the answer.",
          "A non-void method needs a return statement that gives back the promised type."
        ],
        "modelAnswer": "public static int area(int side) {\n    return side * side;\n}\n\npublic static int area(int width, int height) {\n    return width * height;\n}\n",
        "explanation": "Overloading uses the same name with different parameter lists.",
        "commonMistake": "Changing only the return type, which does not overload a method.",
        "selfCheck": "How does Java choose the method?",
        "concepts": [
          "methods",
          "overloading",
          "parameters"
        ],
        "studyGuideFocus": "Final focus: method headers, return types, parameters, return vs print, helper methods, and calling methods correctly.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Check that the method returns instead of only printing when a return type is required.",
          "Test one normal value and one boundary value.",
          "Confirm the parameter names are used correctly."
        ],
        "rubric": [
          "Uses the correct Java structure for overloading.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for overloading.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-007",
        "level": "level2Extra",
        "topic": "Methods",
        "skill": "return paths",
        "title": "Find sign",
        "prompt": "Return positive, negative, or zero.",
        "task": "Make sure every path returns a String.",
        "starter": "public static String sign(int number) {\n    // code\n}\n",
        "required": [
          "Demonstrate return paths clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: return paths.",
          "Copy the method header idea first: return type, name, parameters, then body.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Start from the method header: return type, name, and parameters tell you most of the answer.",
          "A non-void method needs a return statement that gives back the promised type."
        ],
        "modelAnswer": "public static String sign(int number) {\n    if (number > 0) {\n        return \"positive\";\n    } else if (number < 0) {\n        return \"negative\";\n    }\n    return \"zero\";\n}\n",
        "explanation": "A non-void method must return on every possible path.",
        "commonMistake": "Forgetting the zero case.",
        "selfCheck": "What happens when number is 0?",
        "concepts": [
          "methods",
          "return",
          "if else"
        ],
        "studyGuideFocus": "Final focus: method headers, return types, parameters, return vs print, helper methods, and calling methods correctly.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Check that the method returns instead of only printing when a return type is required.",
          "Test one normal value and one boundary value.",
          "Confirm the parameter names are used correctly."
        ],
        "rubric": [
          "Uses the correct Java structure for return paths.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for return paths.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-008",
        "level": "level2Extra",
        "topic": "Classes and Objects",
        "skill": "composition",
        "title": "Backpack has Item",
        "prompt": "Store an Item object in another class.",
        "task": "Write a Backpack constructor that stores the Item parameter.",
        "starter": "public class Backpack {\n    private Item item;\n\n    public Backpack(Item item) {\n        // code\n    }\n}\n",
        "required": [
          "Demonstrate composition clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: composition.",
          "Write fields first, then constructor, then one method that uses the fields.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "List the object state first, then write one behavior that uses that state.",
          "Use this.fieldName when a parameter has the same name as a field."
        ],
        "modelAnswer": "public class Backpack {\n    private Item item;\n\n    public Backpack(Item item) {\n        this.item = item;\n    }\n}\n",
        "explanation": "An object can have a field that references another object.",
        "commonMistake": "Creating a new Item instead of storing the one passed in.",
        "selfCheck": "Which object is passed to the constructor?",
        "concepts": [
          "objects",
          "composition",
          "constructor"
        ],
        "studyGuideFocus": "Midterm 2/final focus: object state, behaviors, fields vs locals, encapsulation, and using objects from another class.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Create two different objects to make sure fields are not accidentally shared.",
          "Check that fields are initialized through the constructor.",
          "Confirm public methods use private state correctly."
        ],
        "rubric": [
          "Uses the correct Java structure for composition.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for composition.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-009",
        "level": "level2Extra",
        "topic": "Classes and Objects",
        "skill": "UML to class",
        "title": "Class from UML",
        "prompt": "Turn a small UML idea into code.",
        "task": "Create a Lamp class with a private boolean on and a public turnOn method.",
        "starter": "// Lamp\n// - on: boolean\n// + turnOn(): void\n",
        "required": [
          "Demonstrate UML to class clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: UML to class.",
          "Write fields first, then constructor, then one method that uses the fields.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "List the object state first, then write one behavior that uses that state.",
          "Use this.fieldName when a parameter has the same name as a field."
        ],
        "modelAnswer": "public class Lamp {\n    private boolean on;\n\n    public void turnOn() {\n        on = true;\n    }\n}\n",
        "explanation": "Minus means private and plus means public in UML-style notation.",
        "commonMistake": "Making the field public because the method is public.",
        "selfCheck": "What do - and + mean?",
        "concepts": [
          "UML",
          "class",
          "access modifiers"
        ],
        "studyGuideFocus": "Midterm 2/final focus: object state, behaviors, fields vs locals, encapsulation, and using objects from another class.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Create two different objects to make sure fields are not accidentally shared.",
          "Check that fields are initialized through the constructor.",
          "Confirm public methods use private state correctly."
        ],
        "rubric": [
          "Uses the correct Java structure for UML to class.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for UML to class.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-010",
        "level": "level2Extra",
        "topic": "Constructors",
        "skill": "canonical constructor",
        "title": "Validate record component",
        "prompt": "Write a compact constructor for a record.",
        "task": "Make a Score record that throws IllegalArgumentException if points is negative.",
        "starter": "public record Score(int points) {\n    // compact constructor here\n}\n",
        "required": [
          "Demonstrate canonical constructor clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: canonical constructor.",
          "Write the fields, then make sure every constructor initializes them consistently.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "The constructor name must match the class name and has no return type.",
          "Overloaded constructors should initialize the same fields, just from different inputs."
        ],
        "modelAnswer": "public record Score(int points) {\n    public Score {\n        if (points < 0) {\n            throw new IllegalArgumentException(\"points cannot be negative\");\n        }\n    }\n}\n",
        "explanation": "A compact record constructor can validate components before the record is created.",
        "commonMistake": "Trying to assign this.points directly in a record.",
        "selfCheck": "What value is invalid?",
        "concepts": [
          "record",
          "constructor",
          "validation"
        ],
        "studyGuideFocus": "Midterm 2/final focus: constructor purpose, overloaded constructors, copy constructors, this, default values, and initialization order.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Test the constructor with normal values.",
          "Check overloaded constructors use consistent defaults.",
          "Confirm fields are initialized before methods depend on them."
        ],
        "rubric": [
          "Uses the correct Java structure for canonical constructor.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for canonical constructor.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-011",
        "level": "level2Extra",
        "topic": "Constructors",
        "skill": "constructor chaining",
        "title": "Use this(...)",
        "prompt": "Chain a default constructor to another constructor.",
        "task": "Make the no-arg Box constructor create a Box with size 1.",
        "starter": "public class Box {\n    private int size;\n\n    public Box() {\n        // code\n    }\n\n    public Box(int size) {\n        this.size = size;\n    }\n}\n",
        "required": [
          "Demonstrate constructor chaining clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: constructor chaining.",
          "Write the fields, then make sure every constructor initializes them consistently.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "The constructor name must match the class name and has no return type.",
          "Overloaded constructors should initialize the same fields, just from different inputs."
        ],
        "modelAnswer": "public class Box {\n    private int size;\n\n    public Box() {\n        this(1);\n    }\n\n    public Box(int size) {\n        this.size = size;\n    }\n}\n",
        "explanation": "this(1) calls another constructor in the same class.",
        "commonMistake": "Putting this(1) after another statement; constructor calls must be first.",
        "selfCheck": "Which constructor does this(1) call?",
        "concepts": [
          "constructors",
          "this",
          "chaining"
        ],
        "studyGuideFocus": "Midterm 2/final focus: constructor purpose, overloaded constructors, copy constructors, this, default values, and initialization order.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Test the constructor with normal values.",
          "Check overloaded constructors use consistent defaults.",
          "Confirm fields are initialized before methods depend on them."
        ],
        "rubric": [
          "Uses the correct Java structure for constructor chaining.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for constructor chaining.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-012",
        "level": "level2Extra",
        "topic": "Inheritance and Polymorphism",
        "skill": "protected",
        "title": "Use inherited helper",
        "prompt": "Call a protected method from a subclass.",
        "task": "Complete Teacher.describe using the inherited label method.",
        "starter": "class Person {\n    protected String label() {\n        return \"person\";\n    }\n}\n\nclass Teacher extends Person {\n    public String describe() {\n        // code\n    }\n}\n",
        "required": [
          "Demonstrate protected clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: protected.",
          "Write the superclass behavior first, then decide which method the subclass should override.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Use the is-a rule: a subclass object should be usable wherever the superclass is expected.",
          "When a method is overridden, the object type at runtime decides which version runs."
        ],
        "modelAnswer": "class Person {\n    protected String label() {\n        return \"person\";\n    }\n}\n\nclass Teacher extends Person {\n    public String describe() {\n        return label() + \" teacher\";\n    }\n}\n",
        "explanation": "protected members are available inside subclasses.",
        "commonMistake": "Trying to recreate the label logic instead of using the inherited method.",
        "selfCheck": "Why can Teacher call label?",
        "concepts": [
          "protected",
          "inheritance",
          "method call"
        ],
        "studyGuideFocus": "Final focus: is-a relationships, overriding, dynamic dispatch, protected/private access, and superclass constructor calls.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Call the method through a superclass reference.",
          "Check which overridden method runs at runtime.",
          "Confirm the subclass still satisfies the superclass is-a relationship."
        ],
        "rubric": [
          "Uses the correct Java structure for protected.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for protected.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-013",
        "level": "level2Extra",
        "topic": "Inheritance and Polymorphism",
        "skill": "instanceof",
        "title": "Safe cast",
        "prompt": "Return true only for Circle objects with radius over 10.",
        "task": "Use instanceof pattern matching.",
        "starter": "public static boolean isLargeCircle(Shape shape) {\n    // code\n}\n",
        "required": [
          "Demonstrate instanceof clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: instanceof.",
          "Write the superclass behavior first, then decide which method the subclass should override.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Use the is-a rule: a subclass object should be usable wherever the superclass is expected.",
          "When a method is overridden, the object type at runtime decides which version runs."
        ],
        "modelAnswer": "public static boolean isLargeCircle(Shape shape) {\n    return shape instanceof Circle circle && circle.getRadius() > 10;\n}\n",
        "explanation": "instanceof checks the runtime type before using Circle-specific methods.",
        "commonMistake": "Casting before checking the type.",
        "selfCheck": "What prevents ClassCastException?",
        "concepts": [
          "instanceof",
          "polymorphism",
          "boolean"
        ],
        "studyGuideFocus": "Final focus: is-a relationships, overriding, dynamic dispatch, protected/private access, and superclass constructor calls.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Call the method through a superclass reference.",
          "Check which overridden method runs at runtime.",
          "Confirm the subclass still satisfies the superclass is-a relationship."
        ],
        "rubric": [
          "Uses the correct Java structure for instanceof.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for instanceof.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-014",
        "level": "level2Extra",
        "topic": "Interfaces and KeyListener",
        "skill": "multiple interfaces",
        "title": "Runnable-style method",
        "prompt": "Implement a simple Startable interface.",
        "task": "Write Machine so it implements Startable and returns true from start.",
        "starter": "interface Startable {\n    boolean start();\n}\n\n// Machine here\n",
        "required": [
          "Demonstrate multiple interfaces clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: multiple interfaces.",
          "List the required interface methods before writing the behavior inside them.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "An interface tells you which method names/signatures must exist.",
          "For KeyListener, separate movement logic from drawing logic."
        ],
        "modelAnswer": "interface Startable {\n    boolean start();\n}\n\nclass Machine implements Startable {\n    @Override\n    public boolean start() {\n        return true;\n    }\n}\n",
        "explanation": "The class fulfills the interface by providing the method.",
        "commonMistake": "Forgetting public on the implemented method.",
        "selfCheck": "Can an implementing method be less visible?",
        "concepts": [
          "interface",
          "implements",
          "visibility"
        ],
        "studyGuideFocus": "Final focus: interface contracts, required methods, event-driven thinking, and KeyListener method responsibilities.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Confirm every required interface method is present.",
          "Check what should happen on keyPressed vs keyReleased.",
          "Make sure state changes are followed by repaint when drawing is involved."
        ],
        "rubric": [
          "Uses the correct Java structure for multiple interfaces.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for multiple interfaces.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-015",
        "level": "level2Extra",
        "topic": "Interfaces and KeyListener",
        "skill": "listener registration",
        "title": "Add key listener",
        "prompt": "Register this object as a key listener.",
        "task": "Write the two common lines in a panel constructor to receive key events.",
        "starter": "public GamePanel() {\n    // code\n}\n",
        "required": [
          "Demonstrate listener registration clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: listener registration.",
          "List the required interface methods before writing the behavior inside them.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "An interface tells you which method names/signatures must exist.",
          "For KeyListener, separate movement logic from drawing logic."
        ],
        "modelAnswer": "public GamePanel() {\n    addKeyListener(this);\n    setFocusable(true);\n}\n",
        "explanation": "The panel must listen for keys and be focusable.",
        "commonMistake": "Implementing KeyListener but never registering the listener.",
        "selfCheck": "Why is setFocusable needed?",
        "concepts": [
          "KeyListener",
          "focus",
          "constructor"
        ],
        "studyGuideFocus": "Final focus: interface contracts, required methods, event-driven thinking, and KeyListener method responsibilities.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Confirm every required interface method is present.",
          "Check what should happen on keyPressed vs keyReleased.",
          "Make sure state changes are followed by repaint when drawing is involved."
        ],
        "rubric": [
          "Uses the correct Java structure for listener registration.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for listener registration.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-016",
        "level": "level2Extra",
        "topic": "equals(), ==, =, and toString()",
        "skill": "hashCode concept",
        "title": "Pair equals with hashCode",
        "prompt": "Write a hashCode that matches equals by id.",
        "task": "Return Integer.hashCode(id).",
        "starter": "@Override\npublic int hashCode() {\n    // code\n}\n",
        "required": [
          "Demonstrate hashCode concept clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: hashCode concept.",
          "Write the method/class/loop shape first before filling in details for \u201cPair equals with hashCode.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Use = to assign, == carefully for primitives/reference identity, and equals for object value comparison.",
          "toString should return the useful state of the object as a String."
        ],
        "modelAnswer": "@Override\npublic int hashCode() {\n    return Integer.hashCode(id);\n}\n",
        "explanation": "Objects that are equal should have matching hash codes.",
        "commonMistake": "Overriding equals but ignoring hashCode completely.",
        "selfCheck": "Which field does equality use?",
        "concepts": [
          "equals",
          "hashCode",
          "object"
        ],
        "studyGuideFocus": "Final focus: assignment vs comparison, reference vs value comparison, overriding equals, and useful toString output.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Check two different objects with the same data.",
          "Check assignment, reference comparison, and value comparison separately.",
          "Confirm toString returns a String and does not print directly."
        ],
        "rubric": [
          "Uses the correct Java structure for hashCode concept.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for hashCode concept.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-017",
        "level": "level2Extra",
        "topic": "equals(), ==, =, and toString()",
        "skill": "StringBuilder",
        "title": "Build output",
        "prompt": "Use StringBuilder to build a comma list.",
        "task": "Return a comma-separated list of names.",
        "starter": "public static String join(ArrayList<String> names) {\n    StringBuilder builder = new StringBuilder();\n    // code\n    return builder.toString();\n}\n",
        "required": [
          "Demonstrate StringBuilder clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: StringBuilder.",
          "Write the method/class/loop shape first before filling in details for \u201cBuild output.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Use = to assign, == carefully for primitives/reference identity, and equals for object value comparison.",
          "toString should return the useful state of the object as a String."
        ],
        "modelAnswer": "public static String join(ArrayList<String> names) {\n    StringBuilder builder = new StringBuilder();\n    for (int i = 0; i < names.size(); i++) {\n        if (i > 0) {\n            builder.append(\", \");\n        }\n        builder.append(names.get(i));\n    }\n    return builder.toString();\n}\n",
        "explanation": "The i > 0 check avoids a leading comma.",
        "commonMistake": "Adding a comma after every item and leaving a trailing comma.",
        "selfCheck": "When should the comma be added?",
        "concepts": [
          "StringBuilder",
          "ArrayList",
          "loop"
        ],
        "studyGuideFocus": "Final focus: assignment vs comparison, reference vs value comparison, overriding equals, and useful toString output.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Check two different objects with the same data.",
          "Check assignment, reference comparison, and value comparison separately.",
          "Confirm toString returns a String and does not print directly."
        ],
        "rubric": [
          "Uses the correct Java structure for StringBuilder.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for StringBuilder.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-018",
        "level": "level2Extra",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "throws",
        "title": "Declare file exception",
        "prompt": "Write a method header that may throw FileNotFoundException.",
        "task": "Complete the method header and Scanner creation.",
        "starter": "// Write a method that returns a Scanner for a File.\n// It may throw FileNotFoundException.\n",
        "required": [
          "Demonstrate throws clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: throws.",
          "Write the method/class/loop shape first before filling in details for \u201cDeclare file exception.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Put only the risky operation inside try when possible.",
          "Before using object.method(), ask whether object could be null."
        ],
        "modelAnswer": "public static Scanner open(File file) throws FileNotFoundException {\n    return new Scanner(file);\n}\n",
        "explanation": "A method can declare that it throws a checked exception.",
        "commonMistake": "Catching nothing and declaring nothing for FileNotFoundException.",
        "selfCheck": "Where does throws appear?",
        "concepts": [
          "throws",
          "Scanner",
          "file"
        ],
        "studyGuideFocus": "Final focus: try/catch flow, file-reading basics, null checks, and avoiding hidden runtime crashes.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Test missing or bad input when appropriate.",
          "Check what happens before and after the catch block.",
          "Look for null before calling methods on an object."
        ],
        "rubric": [
          "Uses the correct Java structure for throws.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for throws.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-019",
        "level": "level2Extra",
        "topic": "Static, Final, Memory, and Garbage Collection",
        "skill": "static final",
        "title": "Class constant",
        "prompt": "Create a class constant for max size.",
        "task": "Declare MAX_SIZE as public static final int 100.",
        "starter": "public class Limits {\n    // constant here\n}\n",
        "required": [
          "Demonstrate static final clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: static final.",
          "Write the method/class/loop shape first before filling in details for \u201cClass constant.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Ask: should this value belong to the class itself or to each object?",
          "A final variable can be assigned once; a static variable is shared by the class."
        ],
        "modelAnswer": "public class Limits {\n    public static final int MAX_SIZE = 100;\n}\n",
        "explanation": "static final constants belong to the class and should not change.",
        "commonMistake": "Making it an instance field that every object repeats.",
        "selfCheck": "How would outside code access it?",
        "concepts": [
          "static final",
          "constant",
          "class field"
        ],
        "studyGuideFocus": "Final focus: static vs instance members, final constants, object references, aliases, and simple memory reasoning.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Create two objects and check what is shared vs separate.",
          "Check whether a value belongs to the class or one object.",
          "Confirm constants are not changed after initialization."
        ],
        "rubric": [
          "Uses the correct Java structure for static final.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for static final.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-020",
        "level": "level2Extra",
        "topic": "Graphics",
        "skill": "drawString",
        "title": "Label a shape",
        "prompt": "Draw text at a position.",
        "task": "Write a paint line that draws \"Hi\" at x=10 and y=20.",
        "starter": "protected void paintComponent(Graphics g) {\n    super.paintComponent(g);\n    // code\n}\n",
        "required": [
          "Demonstrate drawString clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: drawString.",
          "Sketch the coordinates before writing the draw calls.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Remember: x increases to the right, y increases downward.",
          "Call super.paintComponent(g) before custom drawing in Swing."
        ],
        "modelAnswer": "protected void paintComponent(Graphics g) {\n    super.paintComponent(g);\n    g.drawString(\"Hi\", 10, 20);\n}\n",
        "explanation": "drawString uses text, x, and y baseline coordinates.",
        "commonMistake": "Using fillRect because text is not a rectangle.",
        "selfCheck": "What does the y coordinate mean for text?",
        "concepts": [
          "Graphics",
          "drawString",
          "coordinates"
        ],
        "studyGuideFocus": "Midterm/final focus: paintComponent, Graphics methods, coordinates, colors, repaint, and drawing order.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Check x/y coordinates from the top-left corner.",
          "Check drawing order when shapes overlap.",
          "Confirm drawing code belongs in paintComponent."
        ],
        "rubric": [
          "Uses the correct Java structure for drawString.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for drawString.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-021",
        "level": "level2Extra",
        "topic": "Records vs Classes",
        "skill": "record method",
        "title": "Add method to record",
        "prompt": "Add a distanceFromOrigin method to Point.",
        "task": "Use Math.sqrt and the record accessors/components.",
        "starter": "public record Point(int x, int y) {\n    // method here\n}\n",
        "required": [
          "Demonstrate record method clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: record method.",
          "Write the method/class/loop shape first before filling in details for \u201cAdd method to record.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Records are best for simple data carriers.",
          "Record accessors use the field name, like name(), not getName()."
        ],
        "modelAnswer": "public record Point(int x, int y) {\n    public double distanceFromOrigin() {\n        return Math.sqrt(x * x + y * y);\n    }\n}\n",
        "explanation": "Records can still contain methods.",
        "commonMistake": "Trying to write getX() even though the component accessor is x().",
        "selfCheck": "Can records have methods?",
        "concepts": [
          "record",
          "method",
          "Math.sqrt"
        ],
        "studyGuideFocus": "Final focus: record syntax, generated constructor/accessors, immutability, and when a normal class is better.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Check the generated accessor names.",
          "Confirm record fields are initialized in the header.",
          "Decide whether you need mutable state; if yes, use a class."
        ],
        "rubric": [
          "Uses the correct Java structure for record method.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for record method.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-022",
        "level": "level2Extra",
        "topic": "Methods",
        "skill": "recursion concept",
        "title": "Factorial loop",
        "prompt": "Write factorial with a loop, not recursion.",
        "task": "Return n! for non-negative n.",
        "starter": "public static int factorial(int n) {\n    // code\n}\n",
        "required": [
          "Demonstrate recursion concept clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: recursion concept.",
          "Copy the method header idea first: return type, name, parameters, then body.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Start from the method header: return type, name, and parameters tell you most of the answer.",
          "A non-void method needs a return statement that gives back the promised type."
        ],
        "modelAnswer": "public static int factorial(int n) {\n    int result = 1;\n    for (int i = 2; i <= n; i++) {\n        result *= i;\n    }\n    return result;\n}\n",
        "explanation": "The accumulator starts at 1 because multiplying by 0 would ruin the result.",
        "commonMistake": "Starting result at 0.",
        "selfCheck": "What should factorial(0) return?",
        "concepts": [
          "loop",
          "accumulator",
          "methods"
        ],
        "studyGuideFocus": "Final focus: method headers, return types, parameters, return vs print, helper methods, and calling methods correctly.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Check that the method returns instead of only printing when a return type is required.",
          "Test one normal value and one boundary value.",
          "Confirm the parameter names are used correctly."
        ],
        "rubric": [
          "Uses the correct Java structure for recursion concept.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for recursion concept.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-023",
        "level": "level2Extra",
        "topic": "Classes and Objects",
        "skill": "array of objects",
        "title": "Find matching object",
        "prompt": "Return the first Student with a matching id, or null.",
        "task": "Search the array by calling getId.",
        "starter": "public static Student find(Student[] students, int id) {\n    // code\n}\n",
        "required": [
          "Demonstrate array of objects clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: array of objects.",
          "Write fields first, then constructor, then one method that uses the fields.",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "List the object state first, then write one behavior that uses that state.",
          "Use this.fieldName when a parameter has the same name as a field."
        ],
        "modelAnswer": "public static Student find(Student[] students, int id) {\n    for (Student student : students) {\n        if (student.getId() == id) {\n            return student;\n        }\n    }\n    return null;\n}\n",
        "explanation": "Return null only after checking all students.",
        "commonMistake": "Returning null inside the loop after the first non-match.",
        "selfCheck": "When should the search stop?",
        "concepts": [
          "objects",
          "arrays",
          "search"
        ],
        "studyGuideFocus": "Midterm 2/final focus: object state, behaviors, fields vs locals, encapsulation, and using objects from another class.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Create two different objects to make sure fields are not accidentally shared.",
          "Check that fields are initialized through the constructor.",
          "Confirm public methods use private state correctly."
        ],
        "rubric": [
          "Uses the correct Java structure for array of objects.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for array of objects.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-024",
        "level": "level2Extra",
        "topic": "Final Exam Mixed Practice",
        "skill": "mixed collections",
        "title": "Average scores",
        "prompt": "Return the average of scores in an ArrayList.",
        "task": "Assume the list is non-empty.",
        "starter": "public static double average(ArrayList<Integer> scores) {\n    // code\n}\n",
        "required": [
          "Demonstrate mixed collections clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: mixed collections.",
          "Write the method/class/loop shape first before filling in details for \u201cAverage scores.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Separate the task into small CS202 ideas before coding.",
          "After writing code, trace one complete sample by hand."
        ],
        "modelAnswer": "public static double average(ArrayList<Integer> scores) {\n    int total = 0;\n    for (int score : scores) {\n        total += score;\n    }\n    return (double) total / scores.size();\n}\n",
        "explanation": "Casting total to double prevents integer division.",
        "commonMistake": "Dividing two ints and losing decimals.",
        "selfCheck": "Which part forces double division?",
        "concepts": [
          "ArrayList",
          "average",
          "casting"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Trace the sample by hand before writing code.",
          "Identify which CS202 topics are being combined.",
          "Test a boundary case and a normal case."
        ],
        "rubric": [
          "Uses the correct Java structure for mixed collections.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for mixed collections.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL2-025",
        "level": "level2Extra",
        "topic": "Final Exam Mixed Practice",
        "skill": "mixed OOP",
        "title": "Describe subclass",
        "prompt": "Return a formatted subclass description.",
        "task": "Complete LabSection toString using inherited getName and its room field.",
        "starter": "class Section {\n    private String name;\n    public Section(String name) { this.name = name; }\n    public String getName() { return name; }\n}\n\nclass LabSection extends Section {\n    private String room;\n    public LabSection(String name, String room) {\n        super(name);\n        this.room = room;\n    }\n\n    // toString here\n}\n",
        "required": [
          "Demonstrate mixed OOP clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [
          "Read the task and identify the exact CS202 concept: mixed OOP.",
          "Write the method/class/loop shape first before filling in details for \u201cDescribe subclass.\u201d",
          "Trace one small example by hand before showing the official solution."
        ],
        "hints": [
          "Separate the task into small CS202 ideas before coding.",
          "After writing code, trace one complete sample by hand."
        ],
        "modelAnswer": "class Section {\n    private String name;\n    public Section(String name) { this.name = name; }\n    public String getName() { return name; }\n}\n\nclass LabSection extends Section {\n    private String room;\n    public LabSection(String name, String room) {\n        super(name);\n        this.room = room;\n    }\n\n    @Override\n    public String toString() {\n        return getName() + \" in \" + room;\n    }\n}\n",
        "explanation": "The subclass uses a public inherited method instead of directly accessing the private parent field.",
        "commonMistake": "Trying to use name directly from the subclass.",
        "selfCheck": "Why use getName?",
        "concepts": [
          "inheritance",
          "toString",
          "private field"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "levelReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "edgeCases": [
          "Trace the sample by hand before writing code.",
          "Identify which CS202 topics are being combined.",
          "Test a boundary case and a normal case."
        ],
        "rubric": [
          "Uses the correct Java structure for mixed OOP.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for mixed OOP.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      }
    ],
    "level3": [
      {
        "id": "CQL3-001",
        "level": "level3Solo",
        "topic": "Java Basics",
        "skill": "text block choice",
        "title": "Clean output method",
        "prompt": "Write a method that returns a two-line menu string: Start and Quit.",
        "task": "Use a normal String with \n or a text block.",
        "starter": "public static String menu() {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate text block choice clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public static String menu() {\n    return \"Start\nQuit\";\n}\n",
        "explanation": "The important part is returning the exact two-line String, not printing it.",
        "commonMistake": "Using println in a method that should return.",
        "selfCheck": "Does the method return exact text?",
        "concepts": [
          "String",
          "escape sequence",
          "return"
        ],
        "studyGuideFocus": "Midterm 1 focus: variables, data types, arithmetic, String concatenation, and exact console output.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Check integer vs double results.",
          "Confirm the output label and spacing exactly match the prompt.",
          "Trace what happens when values are changed before printing."
        ],
        "rubric": [
          "Uses the correct Java structure for text block choice.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for text block choice.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-002",
        "level": "level3Solo",
        "topic": "Conditions, Loops, and Operators",
        "skill": "compound boolean",
        "title": "Valid username",
        "prompt": "Return true when length is at least 4 and contains no spaces.",
        "task": "Use String methods and &&.",
        "starter": "public static boolean validUsername(String name) {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate compound boolean clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public static boolean validUsername(String name) {\n    return name.length() >= 4 && !name.contains(\" \");\n}\n",
        "explanation": "Both conditions must be true, so && is the right operator.",
        "commonMistake": "Using || and accepting names that only satisfy one rule.",
        "selfCheck": "Which operator means both?",
        "concepts": [
          "boolean",
          "String",
          "operators"
        ],
        "studyGuideFocus": "Midterm 1 focus: boolean logic, comparison operators, loop boundaries, updates, and order of operations.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Test the exact boundary value.",
          "Check the first and last loop iteration.",
          "Confirm the condition eventually becomes false."
        ],
        "rubric": [
          "Uses the correct Java structure for compound boolean.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for compound boolean.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-003",
        "level": "level3Solo",
        "topic": "Conditions, Loops, and Operators",
        "skill": "nested loops",
        "title": "Rectangle stars",
        "prompt": "Print rows by columns of stars.",
        "task": "Write nested loops to print 3 rows of 4 stars.",
        "starter": "public static void printRectangle() {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate nested loops clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public static void printRectangle() {\n    for (int row = 0; row < 3; row++) {\n        for (int col = 0; col < 4; col++) {\n            System.out.print(\"*\");\n        }\n        System.out.println();\n    }\n}\n",
        "explanation": "The inner loop prints one row; the outer loop repeats rows.",
        "commonMistake": "Using println inside the inner loop and making one star per line.",
        "selfCheck": "Which loop controls rows?",
        "concepts": [
          "nested loops",
          "print",
          "boundary"
        ],
        "studyGuideFocus": "Midterm 1 focus: boolean logic, comparison operators, loop boundaries, updates, and order of operations.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Test the exact boundary value.",
          "Check the first and last loop iteration.",
          "Confirm the condition eventually becomes false."
        ],
        "rubric": [
          "Uses the correct Java structure for nested loops.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for nested loops.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-004",
        "level": "level3Solo",
        "topic": "Arrays and ArrayLists",
        "skill": "parallel arrays",
        "title": "Find price by name",
        "prompt": "Given item names and prices, return the price for a matching name or -1.",
        "task": "Use the same index in both arrays.",
        "starter": "public static double priceOf(String[] names, double[] prices, String target) {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate parallel arrays clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public static double priceOf(String[] names, double[] prices, String target) {\n    for (int i = 0; i < names.length; i++) {\n        if (names[i].equals(target)) {\n            return prices[i];\n        }\n    }\n    return -1;\n}\n",
        "explanation": "Parallel arrays connect related values by index.",
        "commonMistake": "Using == to compare the target String.",
        "selfCheck": "What index should be used for prices?",
        "concepts": [
          "parallel arrays",
          "equals",
          "search"
        ],
        "studyGuideFocus": "Midterm 1/final focus: indexing, length/size, traversal, accumulators, off-by-one errors, and safe updates.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Test an array/list with one item.",
          "Test the first and last index.",
          "Check whether an enhanced for loop or index loop is safer for this task."
        ],
        "rubric": [
          "Uses the correct Java structure for parallel arrays.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for parallel arrays.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-005",
        "level": "level3Solo",
        "topic": "Arrays and ArrayLists",
        "skill": "2D traversal",
        "title": "Count zeros",
        "prompt": "Return how many zeroes are in a 2D int array.",
        "task": "Use nested loops over rows and values.",
        "starter": "public static int countZeros(int[][] grid) {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate 2D traversal clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public static int countZeros(int[][] grid) {\n    int count = 0;\n    for (int[] row : grid) {\n        for (int value : row) {\n            if (value == 0) {\n                count++;\n            }\n        }\n    }\n    return count;\n}\n",
        "explanation": "Enhanced for loops work well when every value is inspected.",
        "commonMistake": "Only checking grid[0].",
        "selfCheck": "Are all rows visited?",
        "concepts": [
          "2D arrays",
          "nested loop",
          "count"
        ],
        "studyGuideFocus": "Midterm 1/final focus: indexing, length/size, traversal, accumulators, off-by-one errors, and safe updates.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Test an array/list with one item.",
          "Test the first and last index.",
          "Check whether an enhanced for loop or index loop is safer for this task."
        ],
        "rubric": [
          "Uses the correct Java structure for 2D traversal.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for 2D traversal.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-006",
        "level": "level3Solo",
        "topic": "Methods",
        "skill": "method design",
        "title": "Normalize score",
        "prompt": "Return 0 for negative scores, 100 for over 100, otherwise score.",
        "task": "Write a clean clamp-style method.",
        "starter": "public static int normalize(int score) {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate method design clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public static int normalize(int score) {\n    if (score < 0) {\n        return 0;\n    }\n    if (score > 100) {\n        return 100;\n    }\n    return score;\n}\n",
        "explanation": "Early returns keep each boundary easy to read.",
        "commonMistake": "Forgetting the normal middle case.",
        "selfCheck": "What should normalize(88) return?",
        "concepts": [
          "methods",
          "conditions",
          "return"
        ],
        "studyGuideFocus": "Final focus: method headers, return types, parameters, return vs print, helper methods, and calling methods correctly.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Check that the method returns instead of only printing when a return type is required.",
          "Test one normal value and one boundary value.",
          "Confirm the parameter names are used correctly."
        ],
        "rubric": [
          "Uses the correct Java structure for method design.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for method design.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-007",
        "level": "level3Solo",
        "topic": "Methods",
        "skill": "method composition",
        "title": "Initials",
        "prompt": "Return initials from first and last name.",
        "task": "Use charAt and concatenation.",
        "starter": "public static String initials(String first, String last) {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate method composition clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public static String initials(String first, String last) {\n    return \"\" + first.charAt(0) + last.charAt(0);\n}\n",
        "explanation": "The empty String at the front makes the chars concatenate as text.",
        "commonMistake": "Adding chars numerically by accident.",
        "selfCheck": "Why start with \"\"?",
        "concepts": [
          "String",
          "charAt",
          "methods"
        ],
        "studyGuideFocus": "Final focus: method headers, return types, parameters, return vs print, helper methods, and calling methods correctly.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Check that the method returns instead of only printing when a return type is required.",
          "Test one normal value and one boundary value.",
          "Confirm the parameter names are used correctly."
        ],
        "rubric": [
          "Uses the correct Java structure for method composition.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for method composition.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-008",
        "level": "level3Solo",
        "topic": "Classes and Objects",
        "skill": "mutator method",
        "title": "Deposit money",
        "prompt": "Write deposit so positive amounts increase balance and non-positive amounts do nothing.",
        "task": "Use a private balance field.",
        "starter": "public void deposit(double amount) {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate mutator method clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public void deposit(double amount) {\n    if (amount > 0) {\n        balance += amount;\n    }\n}\n",
        "explanation": "The method protects object state from invalid changes.",
        "commonMistake": "Allowing negative deposits to reduce balance.",
        "selfCheck": "What amounts should be ignored?",
        "concepts": [
          "objects",
          "mutator",
          "validation"
        ],
        "studyGuideFocus": "Midterm 2/final focus: object state, behaviors, fields vs locals, encapsulation, and using objects from another class.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Create two different objects to make sure fields are not accidentally shared.",
          "Check that fields are initialized through the constructor.",
          "Confirm public methods use private state correctly."
        ],
        "rubric": [
          "Uses the correct Java structure for mutator method.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for mutator method.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-009",
        "level": "level3Solo",
        "topic": "Classes and Objects",
        "skill": "constructor and getter",
        "title": "Immutable-ish class",
        "prompt": "Write a NameTag class with final name field, constructor, and getName.",
        "task": "Keep the field private final.",
        "starter": "// Write the full NameTag class.\n// Use a private final name field.\n",
        "required": [
          "Demonstrate constructor and getter clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public class NameTag {\n    private final String name;\n\n    public NameTag(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n",
        "explanation": "final means the field must be assigned once and cannot be reassigned later.",
        "commonMistake": "Leaving a final field unassigned in the constructor.",
        "selfCheck": "Where is final assigned?",
        "concepts": [
          "final",
          "class",
          "constructor"
        ],
        "studyGuideFocus": "Midterm 2/final focus: object state, behaviors, fields vs locals, encapsulation, and using objects from another class.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Create two different objects to make sure fields are not accidentally shared.",
          "Check that fields are initialized through the constructor.",
          "Confirm public methods use private state correctly."
        ],
        "rubric": [
          "Uses the correct Java structure for constructor and getter.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for constructor and getter.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-010",
        "level": "level3Solo",
        "topic": "Constructors",
        "skill": "default constructor",
        "title": "Default object state",
        "prompt": "Write a Timer no-arg constructor that sets seconds to 60.",
        "task": "Assume seconds is an int field.",
        "starter": "public Timer() {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate default constructor clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public Timer() {\n    seconds = 60;\n}\n",
        "explanation": "A no-arg constructor still initializes object state.",
        "commonMistake": "Writing void Timer and creating a method instead.",
        "selfCheck": "Why no return type?",
        "concepts": [
          "constructor",
          "default",
          "field"
        ],
        "studyGuideFocus": "Midterm 2/final focus: constructor purpose, overloaded constructors, copy constructors, this, default values, and initialization order.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Test the constructor with normal values.",
          "Check overloaded constructors use consistent defaults.",
          "Confirm fields are initialized before methods depend on them."
        ],
        "rubric": [
          "Uses the correct Java structure for default constructor.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for default constructor.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-011",
        "level": "level3Solo",
        "topic": "Constructors",
        "skill": "object aliasing",
        "title": "Defensive copy idea",
        "prompt": "Write a constructor that copies an int array parameter into a field.",
        "task": "Avoid storing the caller array directly.",
        "starter": "private int[] scores;\n\npublic ScoreBook(int[] scores) {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate object aliasing clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "private int[] scores;\n\npublic ScoreBook(int[] scores) {\n    this.scores = new int[scores.length];\n    for (int i = 0; i < scores.length; i++) {\n        this.scores[i] = scores[i];\n    }\n}\n",
        "explanation": "Copying prevents outside code from changing the object through the original array reference.",
        "commonMistake": "Assigning this.scores = scores and creating an alias.",
        "selfCheck": "Are there two arrays or one shared array?",
        "concepts": [
          "constructor",
          "arrays",
          "aliasing"
        ],
        "studyGuideFocus": "Midterm 2/final focus: constructor purpose, overloaded constructors, copy constructors, this, default values, and initialization order.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Test the constructor with normal values.",
          "Check overloaded constructors use consistent defaults.",
          "Confirm fields are initialized before methods depend on them."
        ],
        "rubric": [
          "Uses the correct Java structure for object aliasing.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for object aliasing.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-012",
        "level": "level3Solo",
        "topic": "Inheritance and Polymorphism",
        "skill": "abstract method",
        "title": "Payment subclasses",
        "prompt": "Write a CashPayment class that extends Payment and returns \"cash\" from type.",
        "task": "Assume Payment has abstract String type().",
        "starter": "abstract class Payment {\n    public abstract String type();\n}\n\n// solo subclass\n",
        "required": [
          "Demonstrate abstract method clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "abstract class Payment {\n    public abstract String type();\n}\n\nclass CashPayment extends Payment {\n    @Override\n    public String type() {\n        return \"cash\";\n    }\n}\n",
        "explanation": "The subclass becomes concrete by implementing the abstract method.",
        "commonMistake": "Forgetting the public visibility on the overriding method.",
        "selfCheck": "What method must be implemented?",
        "concepts": [
          "abstract",
          "inheritance",
          "override"
        ],
        "studyGuideFocus": "Final focus: is-a relationships, overriding, dynamic dispatch, protected/private access, and superclass constructor calls.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Call the method through a superclass reference.",
          "Check which overridden method runs at runtime.",
          "Confirm the subclass still satisfies the superclass is-a relationship."
        ],
        "rubric": [
          "Uses the correct Java structure for abstract method.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for abstract method.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-013",
        "level": "level3Solo",
        "topic": "Inheritance and Polymorphism",
        "skill": "dynamic dispatch",
        "title": "Describe list",
        "prompt": "Write a method that joins description() from each Shape.",
        "task": "Assume each Shape subclass overrides description.",
        "starter": "public static String describeAll(ArrayList<Shape> shapes) {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate dynamic dispatch clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public static String describeAll(ArrayList<Shape> shapes) {\n    String result = \"\";\n    for (Shape shape : shapes) {\n        result += shape.description() + \"\n\";\n    }\n    return result;\n}\n",
        "explanation": "Dynamic dispatch calls each object\u2019s overridden method.",
        "commonMistake": "Using instanceof for every subclass unnecessarily.",
        "selfCheck": "Who decides which description runs?",
        "concepts": [
          "polymorphism",
          "ArrayList",
          "override"
        ],
        "studyGuideFocus": "Final focus: is-a relationships, overriding, dynamic dispatch, protected/private access, and superclass constructor calls.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Call the method through a superclass reference.",
          "Check which overridden method runs at runtime.",
          "Confirm the subclass still satisfies the superclass is-a relationship."
        ],
        "rubric": [
          "Uses the correct Java structure for dynamic dispatch.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for dynamic dispatch.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-014",
        "level": "level3Solo",
        "topic": "Interfaces and KeyListener",
        "skill": "interface reference",
        "title": "Use interface type",
        "prompt": "Write playAll that calls play on every Playable item.",
        "task": "Use an enhanced for loop.",
        "starter": "public static void playAll(Playable[] items) {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate interface reference clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public static void playAll(Playable[] items) {\n    for (Playable item : items) {\n        item.play();\n    }\n}\n",
        "explanation": "Interface references let different classes be handled through shared behavior.",
        "commonMistake": "Trying to create a new Playable directly.",
        "selfCheck": "What method does the interface promise?",
        "concepts": [
          "interface",
          "array",
          "polymorphism"
        ],
        "studyGuideFocus": "Final focus: interface contracts, required methods, event-driven thinking, and KeyListener method responsibilities.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Confirm every required interface method is present.",
          "Check what should happen on keyPressed vs keyReleased.",
          "Make sure state changes are followed by repaint when drawing is involved."
        ],
        "rubric": [
          "Uses the correct Java structure for interface reference.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for interface reference.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-015",
        "level": "level3Solo",
        "topic": "Interfaces and KeyListener",
        "skill": "key release",
        "title": "Stop movement",
        "prompt": "Set movingRight false when the right arrow is released.",
        "task": "Write the relevant keyReleased code.",
        "starter": "@Override\npublic void keyReleased(KeyEvent event) {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate key release clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "@Override\npublic void keyReleased(KeyEvent event) {\n    if (event.getKeyCode() == KeyEvent.VK_RIGHT) {\n        movingRight = false;\n    }\n}\n",
        "explanation": "keyReleased is useful for stopping continuous movement state.",
        "commonMistake": "Putting stop logic only in keyPressed.",
        "selfCheck": "Which event means the key is no longer down?",
        "concepts": [
          "KeyListener",
          "keyReleased",
          "state"
        ],
        "studyGuideFocus": "Final focus: interface contracts, required methods, event-driven thinking, and KeyListener method responsibilities.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Confirm every required interface method is present.",
          "Check what should happen on keyPressed vs keyReleased.",
          "Make sure state changes are followed by repaint when drawing is involved."
        ],
        "rubric": [
          "Uses the correct Java structure for key release.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for key release.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-016",
        "level": "level3Solo",
        "topic": "equals(), ==, =, and toString()",
        "skill": "robust equals",
        "title": "Equals with same object check",
        "prompt": "Write the first two checks of equals: same reference and correct type.",
        "task": "Use this == obj and instanceof.",
        "starter": "@Override\npublic boolean equals(Object obj) {\n    // first checks here\n    return id == other.id;\n}\n",
        "required": [
          "Demonstrate robust equals clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "@Override\npublic boolean equals(Object obj) {\n    if (this == obj) {\n        return true;\n    }\n    if (!(obj instanceof Card other)) {\n        return false;\n    }\n    return id == other.id;\n}\n",
        "explanation": "The same-object check is fast; the instanceof check keeps the cast safe.",
        "commonMistake": "Casting obj before checking its type.",
        "selfCheck": "What does this == obj mean?",
        "concepts": [
          "equals",
          "instanceof",
          "reference"
        ],
        "studyGuideFocus": "Final focus: assignment vs comparison, reference vs value comparison, overriding equals, and useful toString output.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Check two different objects with the same data.",
          "Check assignment, reference comparison, and value comparison separately.",
          "Confirm toString returns a String and does not print directly."
        ],
        "rubric": [
          "Uses the correct Java structure for robust equals.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for robust equals.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-017",
        "level": "level3Solo",
        "topic": "equals(), ==, =, and toString()",
        "skill": "formatted toString",
        "title": "Inventory output",
        "prompt": "Return name + \" x\" + quantity from toString.",
        "task": "Use the fields directly inside the class.",
        "starter": "@Override\npublic String toString() {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate formatted toString clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "@Override\npublic String toString() {\n    return name + \" x\" + quantity;\n}\n",
        "explanation": "A toString should return a useful String, not print it.",
        "commonMistake": "Forgetting @Override is not fatal, but printing instead of returning is wrong.",
        "selfCheck": "What should System.out.println(object) show?",
        "concepts": [
          "toString",
          "String",
          "object state"
        ],
        "studyGuideFocus": "Final focus: assignment vs comparison, reference vs value comparison, overriding equals, and useful toString output.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Check two different objects with the same data.",
          "Check assignment, reference comparison, and value comparison separately.",
          "Confirm toString returns a String and does not print directly."
        ],
        "rubric": [
          "Uses the correct Java structure for formatted toString.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for formatted toString.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-018",
        "level": "level3Solo",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "multi-catch idea",
        "title": "Parse positive",
        "prompt": "Return -1 for invalid text or negative numbers.",
        "task": "Use try/catch and an if check.",
        "starter": "public static int parsePositive(String text) {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate multi-catch idea clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public static int parsePositive(String text) {\n    try {\n        int value = Integer.parseInt(text);\n        if (value < 0) {\n            return -1;\n        }\n        return value;\n    } catch (NumberFormatException error) {\n        return -1;\n    }\n}\n",
        "explanation": "The method handles both invalid format and invalid negative values.",
        "commonMistake": "Only catching bad text but allowing negative values.",
        "selfCheck": "What are the two failure cases?",
        "concepts": [
          "exceptions",
          "parseInt",
          "validation"
        ],
        "studyGuideFocus": "Final focus: try/catch flow, file-reading basics, null checks, and avoiding hidden runtime crashes.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Test missing or bad input when appropriate.",
          "Check what happens before and after the catch block.",
          "Look for null before calling methods on an object."
        ],
        "rubric": [
          "Uses the correct Java structure for multi-catch idea.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for multi-catch idea.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-019",
        "level": "level3Solo",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "null object",
        "title": "Optional default",
        "prompt": "Return \"guest\" when user is null, otherwise user.getName().",
        "task": "Avoid calling a method on null.",
        "starter": "public static String displayName(User user) {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate null object clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public static String displayName(User user) {\n    if (user == null) {\n        return \"guest\";\n    }\n    return user.getName();\n}\n",
        "explanation": "The null path returns before the method call.",
        "commonMistake": "Calling user.getName() in the condition before checking null.",
        "selfCheck": "Which line prevents NullPointerException?",
        "concepts": [
          "null",
          "object",
          "return"
        ],
        "studyGuideFocus": "Final focus: try/catch flow, file-reading basics, null checks, and avoiding hidden runtime crashes.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Test missing or bad input when appropriate.",
          "Check what happens before and after the catch block.",
          "Look for null before calling methods on an object."
        ],
        "rubric": [
          "Uses the correct Java structure for null object.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for null object.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-020",
        "level": "level3Solo",
        "topic": "Static, Final, Memory, and Garbage Collection",
        "skill": "static state",
        "title": "Next id",
        "prompt": "Write nextId that returns current nextId then increments it.",
        "task": "Assume private static int nextId = 1;",
        "starter": "public static int nextId() {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate static state clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public static int nextId() {\n    int id = nextId;\n    nextId++;\n    return id;\n}\n",
        "explanation": "The method returns the old value and prepares the next one.",
        "commonMistake": "Incrementing before saving when the first id should be 1.",
        "selfCheck": "Should the first call return 1 or 2?",
        "concepts": [
          "static",
          "increment",
          "return"
        ],
        "studyGuideFocus": "Final focus: static vs instance members, final constants, object references, aliases, and simple memory reasoning.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Create two objects and check what is shared vs separate.",
          "Check whether a value belongs to the class or one object.",
          "Confirm constants are not changed after initialization."
        ],
        "rubric": [
          "Uses the correct Java structure for static state.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for static state.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-021",
        "level": "level3Solo",
        "topic": "Static, Final, Memory, and Garbage Collection",
        "skill": "reference assignment",
        "title": "Swap references",
        "prompt": "Write code to swap two String references a and b.",
        "task": "Use a temporary variable.",
        "starter": "String a = \"left\";\nString b = \"right\";\n// solo answer\n",
        "required": [
          "Demonstrate reference assignment clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "String a = \"left\";\nString b = \"right\";\nString temp = a;\na = b;\nb = temp;\n",
        "explanation": "A temporary variable prevents losing the first reference.",
        "commonMistake": "Assigning a = b and then b = a, which makes both the same.",
        "selfCheck": "What would be lost without temp?",
        "concepts": [
          "references",
          "variables",
          "assignment"
        ],
        "studyGuideFocus": "Final focus: static vs instance members, final constants, object references, aliases, and simple memory reasoning.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Create two objects and check what is shared vs separate.",
          "Check whether a value belongs to the class or one object.",
          "Confirm constants are not changed after initialization."
        ],
        "rubric": [
          "Uses the correct Java structure for reference assignment.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for reference assignment.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-022",
        "level": "level3Solo",
        "topic": "Graphics",
        "skill": "animation state",
        "title": "Move and repaint",
        "prompt": "Write a tick method that moves x by dx and repaints.",
        "task": "Assume x and dx are fields.",
        "starter": "public void tick() {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate animation state clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public void tick() {\n    x += dx;\n    repaint();\n}\n",
        "explanation": "Animation changes state then asks Swing to redraw.",
        "commonMistake": "Drawing directly inside the tick method instead of changing state.",
        "selfCheck": "What method schedules redraw?",
        "concepts": [
          "Graphics",
          "animation",
          "repaint"
        ],
        "studyGuideFocus": "Midterm/final focus: paintComponent, Graphics methods, coordinates, colors, repaint, and drawing order.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Check x/y coordinates from the top-left corner.",
          "Check drawing order when shapes overlap.",
          "Confirm drawing code belongs in paintComponent."
        ],
        "rubric": [
          "Uses the correct Java structure for animation state.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for animation state.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-023",
        "level": "level3Solo",
        "topic": "Records vs Classes",
        "skill": "records vs classes",
        "title": "Convert class to record",
        "prompt": "Replace a simple immutable class with a record.",
        "task": "Write a record Product(String name, double price).",
        "starter": "// Write the Product record.\n// Components: String name, double price.\n",
        "required": [
          "Demonstrate records vs classes clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public record Product(String name, double price) {\n}\n",
        "explanation": "The record automatically provides accessors, equals, hashCode, and toString.",
        "commonMistake": "Adding unnecessary boilerplate for fields and getters.",
        "selfCheck": "What methods does a record give you?",
        "concepts": [
          "record",
          "immutable data",
          "toString"
        ],
        "studyGuideFocus": "Final focus: record syntax, generated constructor/accessors, immutability, and when a normal class is better.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Check the generated accessor names.",
          "Confirm record fields are initialized in the header.",
          "Decide whether you need mutable state; if yes, use a class."
        ],
        "rubric": [
          "Uses the correct Java structure for records vs classes.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for records vs classes.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-024",
        "level": "level3Solo",
        "topic": "Final Exam Mixed Practice",
        "skill": "debug by writing",
        "title": "Safe first character",
        "prompt": "Return the first character as a String, or empty String if text is null/empty.",
        "task": "Handle both failure cases before charAt.",
        "starter": "public static String firstChar(String text) {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate debug by writing clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public static String firstChar(String text) {\n    if (text == null || text.length() == 0) {\n        return \"\";\n    }\n    return \"\" + text.charAt(0);\n}\n",
        "explanation": "The || short-circuits, so length is not called when text is null.",
        "commonMistake": "Checking text.length() before text == null.",
        "selfCheck": "Why is the order important?",
        "concepts": [
          "null",
          "String",
          "short-circuit"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Trace the sample by hand before writing code.",
          "Identify which CS202 topics are being combined.",
          "Test a boundary case and a normal case."
        ],
        "rubric": [
          "Uses the correct Java structure for debug by writing.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for debug by writing.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      },
      {
        "id": "CQL3-025",
        "level": "level3Solo",
        "topic": "Final Exam Mixed Practice",
        "skill": "small class design",
        "title": "Playlist duration",
        "prompt": "Write totalMinutes for a Playlist with an ArrayList<Song> songs field.",
        "task": "Sum song.getMinutes().",
        "starter": "public int totalMinutes() {\n    // solo answer\n}\n",
        "required": [
          "Demonstrate small class design clearly.",
          "Use readable CS202-level Java, not advanced shortcuts.",
          "Match the required return value, output, or object behavior exactly."
        ],
        "guidelines": [],
        "hints": [],
        "modelAnswer": "public int totalMinutes() {\n    int total = 0;\n    for (Song song : songs) {\n        total += song.getMinutes();\n    }\n    return total;\n}\n",
        "explanation": "This combines object fields, ArrayList traversal, and method calls.",
        "commonMistake": "Trying to add Song objects directly to an int.",
        "selfCheck": "What value is accumulated?",
        "concepts": [
          "objects",
          "ArrayList",
          "method call"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "levelReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "edgeCases": [
          "Trace the sample by hand before writing code.",
          "Identify which CS202 topics are being combined.",
          "Test a boundary case and a normal case."
        ],
        "rubric": [
          "Uses the correct Java structure for small class design.",
          "Produces the exact return value or output required by the task.",
          "Handles the listed edge case or boundary check without a hidden off-by-one/null/reference mistake."
        ],
        "reflectionPrompt": "In one sentence, explain why your answer fits the method/class/loop pattern for small class design.",
        "examHabit": "Attempt first, then compare. Do not reveal the solution until you can explain your own code path."
      }
    ]
  },
  "qualityPass": {
    "name": "Midterm-to-Final Quality Pass",
    "goal": "Make Coding Quest tasks more exam-sharp by adding study-guide focus, edge cases, rubrics, and reflection prompts.",
    "coverage": [
      "Midterm 1 Java basics, loops, arrays, graphics",
      "Midterm 2 constructors, classes, inheritance, UML/OOP habits",
      "Final topics: methods, interfaces, exceptions/files/null, static/final/memory, records, mixed practice"
    ]
  }
};
})();
