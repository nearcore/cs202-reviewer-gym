// Build Challenge data for website-only CS202 mini-project practice. Quality pass v2: acceptance tests, rubrics, and reflection prompts.
(function () {
  window.BUILD_CHALLENGE_DATA = {
  "version": 2,
  "modes": {
    "level1": {
      "label": "Guided Build",
      "support": "Milestones + hints",
      "description": "Base builds plus guided builds with visible milestones and optional hints."
    },
    "level2": {
      "label": "Hinted Build",
      "support": "Hidden hints",
      "description": "Base builds plus Level 2 builds with fewer directions."
    },
    "level3": {
      "label": "Solo Build",
      "support": "No help",
      "description": "Final-style mini projects with task-only support."
    }
  },
  "assumptions": [
    "Plan first, then code. A good mini-project answer starts with classes, fields, methods, and tests.",
    "The website does not compile your answer. Compare your attempt with the official build review after submitting.",
    "Every build should include at least one normal test and one edge or boundary test.",
    "Keep solutions at a CS202 level: clear code, simple methods, readable object design."
  ],
  "base": [
    {
      "id": "BCB001",
      "level": "base",
      "topic": "Java Basics",
      "skill": "variables and output",
      "title": "Receipt Builder",
      "scenario": "Build a tiny receipt program that calculates subtotal, tax, and final total.",
      "goal": "Create variables for item price, quantity, and tax rate. Print subtotal and total with labels.",
      "starter": "public class ReceiptBuilder {\n    public static void main(String[] args) {\n        // build the receipt here\n    }\n}\n",
      "deliverables": [
        "Plan the classes, methods, fields, or data structures before coding.",
        "Write a small but complete CS202-level Java solution or code sketch.",
        "Provide a normal test and one edge/boundary test that proves the build works."
      ],
      "milestones": [
        "Identify which CS202 topics are being combined; start with variables and output.",
        "Write the data/state needed before writing behavior.",
        "Build one working version, then add the required edge-case/test explanation."
      ],
      "hints": [
        "Write the variable declarations first, then the calculation, then the print statement.",
        "Check whether Java will do numeric math or String concatenation at each step."
      ],
      "modelPlan": "Use the variables and output idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
      "modelAnswer": "public class ReceiptBuilder {\n    public static void main(String[] args) {\n        double price = 4.50;\n        int quantity = 3;\n        double taxRate = 0.07;\n        double subtotal = price * quantity;\n        double total = subtotal + subtotal * taxRate;\n        System.out.println(\"Subtotal: \" + subtotal);\n        System.out.println(\"Total: \" + total);\n    }\n}\n",
      "explanation": "Use separate variables so the calculation is readable and easy to trace.",
      "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
      "extension": "Add one extra test case or one small feature after the base version works.",
      "concepts": [
        "variables and output",
        "java",
        "mini-project"
      ],
      "studyGuideFocus": "Midterm 1 focus: variables, data types, arithmetic, String concatenation, and exact console output.",
      "difficultyReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "acceptanceTests": [
        "Normal case: complete \u201cReceipt Builder\u201d with the sample or obvious happy-path values.",
        "Edge case: Check integer vs double results.",
        "Code review case: explain which method/class owns each responsibility."
      ],
      "rubric": [
        "Breaks the build into clear CS202 pieces for variables and output.",
        "Includes readable code with fields/methods/classes separated logically.",
        "Explains at least one test case that proves the build works, including a boundary or edge case."
      ],
      "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for variables and output.",
      "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
    },
    {
      "id": "BCB002",
      "level": "base",
      "topic": "Conditions, Loops, and Operators",
      "skill": "menu loop",
      "title": "Simple Menu Runner",
      "scenario": "Build a console menu loop that stops when the user chooses 0.",
      "goal": "Use a while loop, check the choice, and print a message for at least two options.",
      "starter": "public static void runMenu(int[] choices) {\n    // pretend each array value is a user choice\n}\n",
      "deliverables": [
        "Plan the classes, methods, fields, or data structures before coding.",
        "Write a small but complete CS202-level Java solution or code sketch.",
        "Provide a normal test and one edge/boundary test that proves the build works."
      ],
      "milestones": [
        "Identify which CS202 topics are being combined; start with menu loop.",
        "Write the data/state needed before writing behavior.",
        "Build one working version, then add the required edge-case/test explanation."
      ],
      "hints": [
        "Circle the boundary value in the prompt before choosing <, <=, >, or >=.",
        "Write the first two loop values and the final loop value on paper."
      ],
      "modelPlan": "Use the menu loop idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
      "modelAnswer": "public static void runMenu(int[] choices) {\n    int index = 0;\n    int choice = -1;\n    while (choice != 0 && index < choices.length) {\n        choice = choices[index];\n        if (choice == 1) {\n            System.out.println(\"Review\");\n        } else if (choice == 2) {\n            System.out.println(\"Practice\");\n        } else if (choice != 0) {\n            System.out.println(\"Unknown\");\n        }\n        index++;\n    }\n}\n",
      "explanation": "The loop uses a sentinel value, so 0 is the stopping condition.",
      "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
      "extension": "Add one extra test case or one small feature after the base version works.",
      "concepts": [
        "menu loop",
        "conditions,",
        "mini-project"
      ],
      "studyGuideFocus": "Midterm 1 focus: boolean logic, comparison operators, loop boundaries, updates, and order of operations.",
      "difficultyReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "acceptanceTests": [
        "Normal case: complete \u201cSimple Menu Runner\u201d with the sample or obvious happy-path values.",
        "Edge case: Test the exact boundary value.",
        "Code review case: explain which method/class owns each responsibility."
      ],
      "rubric": [
        "Breaks the build into clear CS202 pieces for menu loop.",
        "Includes readable code with fields/methods/classes separated logically.",
        "Explains at least one test case that proves the build works, including a boundary or edge case."
      ],
      "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for menu loop.",
      "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
    },
    {
      "id": "BCB003",
      "level": "base",
      "topic": "Arrays and ArrayLists",
      "skill": "array statistics",
      "title": "Score Report",
      "scenario": "Build a method that summarizes quiz scores.",
      "goal": "Return the average of an int array. Empty arrays should return 0.0.",
      "starter": "public static double average(int[] scores) {\n    // build the summary here\n}\n",
      "deliverables": [
        "Plan the classes, methods, fields, or data structures before coding.",
        "Write a small but complete CS202-level Java solution or code sketch.",
        "Provide a normal test and one edge/boundary test that proves the build works."
      ],
      "milestones": [
        "Identify which CS202 topics are being combined; start with array statistics.",
        "Decide the data structure and traversal pattern before writing calculations.",
        "Build one working version, then add the required edge-case/test explanation."
      ],
      "hints": [
        "Decide if you need indexes. If you only read values, an enhanced for loop may be enough.",
        "The last valid array index is length - 1. For ArrayList, it is size() - 1."
      ],
      "modelPlan": "Use the array statistics idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
      "modelAnswer": "public static double average(int[] scores) {\n    if (scores == null || scores.length == 0) {\n        return 0.0;\n    }\n    int total = 0;\n    for (int score : scores) {\n        total += score;\n    }\n    return (double) total / scores.length;\n}\n",
      "explanation": "The null/empty check prevents errors and division by zero.",
      "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
      "extension": "Add one extra test case or one small feature after the base version works.",
      "concepts": [
        "array statistics",
        "arrays",
        "mini-project"
      ],
      "studyGuideFocus": "Midterm 1/final focus: indexing, length/size, traversal, accumulators, off-by-one errors, and safe updates.",
      "difficultyReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "acceptanceTests": [
        "Normal case: complete \u201cScore Report\u201d with the sample or obvious happy-path values.",
        "Edge case: Test an array/list with one item.",
        "Code review case: explain which method/class owns each responsibility."
      ],
      "rubric": [
        "Breaks the build into clear CS202 pieces for array statistics.",
        "Includes readable code with fields/methods/classes separated logically.",
        "Explains at least one test case that proves the build works, including a boundary or edge case."
      ],
      "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for array statistics.",
      "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
    },
    {
      "id": "BCB004",
      "level": "base",
      "topic": "Methods",
      "skill": "helper methods",
      "title": "Temperature Toolkit",
      "scenario": "Build helper methods for temperature conversion.",
      "goal": "Write celsiusToFahrenheit and isFreezing methods.",
      "starter": "public class TemperatureToolkit {\n    // add methods here\n}\n",
      "deliverables": [
        "Plan the classes, methods, fields, or data structures before coding.",
        "Write a small but complete CS202-level Java solution or code sketch.",
        "Provide a normal test and one edge/boundary test that proves the build works."
      ],
      "milestones": [
        "Identify which CS202 topics are being combined; start with helper methods.",
        "Write the data/state needed before writing behavior.",
        "Build one working version, then add the required edge-case/test explanation."
      ],
      "hints": [
        "Start from the method header: return type, name, and parameters tell you most of the answer.",
        "A non-void method needs a return statement that gives back the promised type."
      ],
      "modelPlan": "Use the helper methods idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
      "modelAnswer": "public class TemperatureToolkit {\n    public static double celsiusToFahrenheit(double celsius) {\n        return celsius * 9 / 5 + 32;\n    }\n\n    public static boolean isFreezing(double celsius) {\n        return celsius <= 0;\n    }\n}\n",
      "explanation": "Two small methods are clearer than one method that tries to do everything.",
      "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
      "extension": "Add one extra test case or one small feature after the base version works.",
      "concepts": [
        "helper methods",
        "methods",
        "mini-project"
      ],
      "studyGuideFocus": "Final focus: method headers, return types, parameters, return vs print, helper methods, and calling methods correctly.",
      "difficultyReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "acceptanceTests": [
        "Normal case: complete \u201cTemperature Toolkit\u201d with the sample or obvious happy-path values.",
        "Edge case: Check that the method returns instead of only printing when a return type is required.",
        "Code review case: explain which method/class owns each responsibility."
      ],
      "rubric": [
        "Breaks the build into clear CS202 pieces for helper methods.",
        "Includes readable code with fields/methods/classes separated logically.",
        "Explains at least one test case that proves the build works, including a boundary or edge case."
      ],
      "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for helper methods.",
      "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
    },
    {
      "id": "BCB005",
      "level": "base",
      "topic": "Classes and Objects",
      "skill": "fields and methods",
      "title": "Student Badge",
      "scenario": "Build a Student class that can print a badge name.",
      "goal": "Use firstName, lastName, and id fields. Add a method that returns Last, First (#id).",
      "starter": "public class Student {\n    // fields, constructor, and badge method\n}\n",
      "deliverables": [
        "Plan the classes, methods, fields, or data structures before coding.",
        "Write a small but complete CS202-level Java solution or code sketch.",
        "Provide a normal test and one edge/boundary test that proves the build works."
      ],
      "milestones": [
        "Identify which CS202 topics are being combined; start with fields and methods.",
        "Write the class/record header, fields, and constructor before behavior methods.",
        "Build one working version, then add the required edge-case/test explanation."
      ],
      "hints": [
        "List the object state first, then write one behavior that uses that state.",
        "Use this.fieldName when a parameter has the same name as a field."
      ],
      "modelPlan": "Use the fields and methods idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
      "modelAnswer": "public class Student {\n    private String firstName;\n    private String lastName;\n    private int id;\n\n    public Student(String firstName, String lastName, int id) {\n        this.firstName = firstName;\n        this.lastName = lastName;\n        this.id = id;\n    }\n\n    public String badgeName() {\n        return lastName + \", \" + firstName + \" (#\" + id + \")\";\n    }\n}\n",
      "explanation": "Fields store object state; the method builds a string from that state.",
      "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
      "extension": "Add one extra test case or one small feature after the base version works.",
      "concepts": [
        "fields and methods",
        "classes",
        "mini-project"
      ],
      "studyGuideFocus": "Midterm 2/final focus: object state, behaviors, fields vs locals, encapsulation, and using objects from another class.",
      "difficultyReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "acceptanceTests": [
        "Normal case: complete \u201cStudent Badge\u201d with the sample or obvious happy-path values.",
        "Edge case: Create two different objects to make sure fields are not accidentally shared.",
        "Code review case: explain which method/class owns each responsibility."
      ],
      "rubric": [
        "Breaks the build into clear CS202 pieces for fields and methods.",
        "Includes readable code with fields/methods/classes separated logically.",
        "Explains at least one test case that proves the build works, including a boundary or edge case."
      ],
      "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for fields and methods.",
      "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
    },
    {
      "id": "BCB006",
      "level": "base",
      "topic": "Constructors",
      "skill": "constructor overload",
      "title": "Book Shelf Item",
      "scenario": "Build a Book class with two constructors.",
      "goal": "One constructor receives title and author. Another receives only title and uses Unknown Author.",
      "starter": "public class Book {\n    // fields and constructors\n}\n",
      "deliverables": [
        "Plan the classes, methods, fields, or data structures before coding.",
        "Write a small but complete CS202-level Java solution or code sketch.",
        "Provide a normal test and one edge/boundary test that proves the build works."
      ],
      "milestones": [
        "Identify which CS202 topics are being combined; start with constructor overload.",
        "Write the class/record header, fields, and constructor before behavior methods.",
        "Build one working version, then add the required edge-case/test explanation."
      ],
      "hints": [
        "The constructor name must match the class name and has no return type.",
        "Overloaded constructors should initialize the same fields, just from different inputs."
      ],
      "modelPlan": "Use the constructor overload idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
      "modelAnswer": "public class Book {\n    private String title;\n    private String author;\n\n    public Book(String title, String author) {\n        this.title = title;\n        this.author = author;\n    }\n\n    public Book(String title) {\n        this(title, \"Unknown Author\");\n    }\n}\n",
      "explanation": "Constructor chaining avoids repeating field assignments.",
      "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
      "extension": "Add one extra test case or one small feature after the base version works.",
      "concepts": [
        "constructor overload",
        "constructors",
        "mini-project"
      ],
      "studyGuideFocus": "Midterm 2/final focus: constructor purpose, overloaded constructors, copy constructors, this, default values, and initialization order.",
      "difficultyReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "acceptanceTests": [
        "Normal case: complete \u201cBook Shelf Item\u201d with the sample or obvious happy-path values.",
        "Edge case: Test the constructor with normal values.",
        "Code review case: explain which method/class owns each responsibility."
      ],
      "rubric": [
        "Breaks the build into clear CS202 pieces for constructor overload.",
        "Includes readable code with fields/methods/classes separated logically.",
        "Explains at least one test case that proves the build works, including a boundary or edge case."
      ],
      "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for constructor overload.",
      "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
    },
    {
      "id": "BCB007",
      "level": "base",
      "topic": "Inheritance and Polymorphism",
      "skill": "inheritance",
      "title": "Campus Vehicle",
      "scenario": "Build a small superclass/subclass relationship.",
      "goal": "Create Vehicle with move(), then Bike overrides move().",
      "starter": "class Vehicle {\n    // superclass\n}\n\nclass Bike extends Vehicle {\n    // subclass\n}\n",
      "deliverables": [
        "Plan the classes, methods, fields, or data structures before coding.",
        "Write a small but complete CS202-level Java solution or code sketch.",
        "Provide a normal test and one edge/boundary test that proves the build works."
      ],
      "milestones": [
        "Identify which CS202 topics are being combined; start with inheritance.",
        "Write the class/record header, fields, and constructor before behavior methods.",
        "Build one working version, then add the required edge-case/test explanation."
      ],
      "hints": [
        "Use the is-a rule: a subclass object should be usable wherever the superclass is expected.",
        "When a method is overridden, the object type at runtime decides which version runs."
      ],
      "modelPlan": "Use the inheritance idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
      "modelAnswer": "class Vehicle {\n    public String move() {\n        return \"Vehicle is moving\";\n    }\n}\n\nclass Bike extends Vehicle {\n    @Override\n    public String move() {\n        return \"Bike is pedaling\";\n    }\n}\n",
      "explanation": "The subclass keeps the same method header and changes the behavior.",
      "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
      "extension": "Add one extra test case or one small feature after the base version works.",
      "concepts": [
        "inheritance",
        "inheritance",
        "mini-project"
      ],
      "studyGuideFocus": "Final focus: is-a relationships, overriding, dynamic dispatch, protected/private access, and superclass constructor calls.",
      "difficultyReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "acceptanceTests": [
        "Normal case: complete \u201cCampus Vehicle\u201d with the sample or obvious happy-path values.",
        "Edge case: Call the method through a superclass reference.",
        "Code review case: explain which method/class owns each responsibility."
      ],
      "rubric": [
        "Breaks the build into clear CS202 pieces for inheritance.",
        "Includes readable code with fields/methods/classes separated logically.",
        "Explains at least one test case that proves the build works, including a boundary or edge case."
      ],
      "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for inheritance.",
      "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
    },
    {
      "id": "BCB008",
      "level": "base",
      "topic": "Interfaces and KeyListener",
      "skill": "interface implementation",
      "title": "Clickable Button",
      "scenario": "Build a tiny interface example.",
      "goal": "Create an interface Clickable with click(), then implement it in MenuButton.",
      "starter": "interface Clickable {\n    // method header\n}\n\nclass MenuButton {\n    // implement interface\n}\n",
      "deliverables": [
        "Plan the classes, methods, fields, or data structures before coding.",
        "Write a small but complete CS202-level Java solution or code sketch.",
        "Provide a normal test and one edge/boundary test that proves the build works."
      ],
      "milestones": [
        "Identify which CS202 topics are being combined; start with interface implementation.",
        "Write the data/state needed before writing behavior.",
        "Build one working version, then add the required edge-case/test explanation."
      ],
      "hints": [
        "An interface tells you which method names/signatures must exist.",
        "For KeyListener, separate movement logic from drawing logic."
      ],
      "modelPlan": "Use the interface implementation idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
      "modelAnswer": "interface Clickable {\n    void click();\n}\n\nclass MenuButton implements Clickable {\n    private String label;\n\n    public MenuButton(String label) {\n        this.label = label;\n    }\n\n    @Override\n    public void click() {\n        System.out.println(label + \" clicked\");\n    }\n}\n",
      "explanation": "An interface states required behavior; the class provides the body.",
      "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
      "extension": "Add one extra test case or one small feature after the base version works.",
      "concepts": [
        "interface implementation",
        "interfaces",
        "mini-project"
      ],
      "studyGuideFocus": "Final focus: interface contracts, required methods, event-driven thinking, and KeyListener method responsibilities.",
      "difficultyReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "acceptanceTests": [
        "Normal case: complete \u201cClickable Button\u201d with the sample or obvious happy-path values.",
        "Edge case: Confirm every required interface method is present.",
        "Code review case: explain which method/class owns each responsibility."
      ],
      "rubric": [
        "Breaks the build into clear CS202 pieces for interface implementation.",
        "Includes readable code with fields/methods/classes separated logically.",
        "Explains at least one test case that proves the build works, including a boundary or edge case."
      ],
      "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for interface implementation.",
      "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
    },
    {
      "id": "BCB009",
      "level": "base",
      "topic": "equals(), ==, =, and toString()",
      "skill": "toString",
      "title": "Pet Card",
      "scenario": "Build a Pet class with a useful toString method.",
      "goal": "Use name and type fields. Override toString so printing the object is readable.",
      "starter": "public class Pet {\n    // fields, constructor, toString\n}\n",
      "deliverables": [
        "Plan the classes, methods, fields, or data structures before coding.",
        "Write a small but complete CS202-level Java solution or code sketch.",
        "Provide a normal test and one edge/boundary test that proves the build works."
      ],
      "milestones": [
        "Identify which CS202 topics are being combined; start with toString.",
        "Write the data/state needed before writing behavior.",
        "Build one working version, then add the required edge-case/test explanation."
      ],
      "hints": [
        "Use = to assign, == carefully for primitives/reference identity, and equals for object value comparison.",
        "toString should return the useful state of the object as a String."
      ],
      "modelPlan": "Use the toString idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
      "modelAnswer": "public class Pet {\n    private String name;\n    private String type;\n\n    public Pet(String name, String type) {\n        this.name = name;\n        this.type = type;\n    }\n\n    @Override\n    public String toString() {\n        return name + \" the \" + type;\n    }\n}\n",
      "explanation": "toString returns a string version of the object state.",
      "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
      "extension": "Add one extra test case or one small feature after the base version works.",
      "concepts": [
        "toString",
        "equals(),",
        "mini-project"
      ],
      "studyGuideFocus": "Final focus: assignment vs comparison, reference vs value comparison, overriding equals, and useful toString output.",
      "difficultyReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "acceptanceTests": [
        "Normal case: complete \u201cPet Card\u201d with the sample or obvious happy-path values.",
        "Edge case: Check two different objects with the same data.",
        "Code review case: explain which method/class owns each responsibility."
      ],
      "rubric": [
        "Breaks the build into clear CS202 pieces for toString.",
        "Includes readable code with fields/methods/classes separated logically.",
        "Explains at least one test case that proves the build works, including a boundary or edge case."
      ],
      "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for toString.",
      "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
    },
    {
      "id": "BCB010",
      "level": "base",
      "topic": "Exceptions, Files, and Null Pointers",
      "skill": "try/catch",
      "title": "Safe Number Parser",
      "scenario": "Build a method that safely parses numbers.",
      "goal": "Return the parsed integer. If parsing fails, return -1.",
      "starter": "public static int safeParse(String text) {\n    // parse safely\n}\n",
      "deliverables": [
        "Plan the classes, methods, fields, or data structures before coding.",
        "Write a small but complete CS202-level Java solution or code sketch.",
        "Provide a normal test and one edge/boundary test that proves the build works."
      ],
      "milestones": [
        "Identify which CS202 topics are being combined; start with try/catch.",
        "Write the data/state needed before writing behavior.",
        "Build one working version, then add the required edge-case/test explanation."
      ],
      "hints": [
        "Put only the risky operation inside try when possible.",
        "Before using object.method(), ask whether object could be null."
      ],
      "modelPlan": "Use the try/catch idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
      "modelAnswer": "public static int safeParse(String text) {\n    try {\n        return Integer.parseInt(text);\n    } catch (NumberFormatException ex) {\n        return -1;\n    }\n}\n",
      "explanation": "The catch block handles invalid input without crashing the program.",
      "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
      "extension": "Add one extra test case or one small feature after the base version works.",
      "concepts": [
        "try/catch",
        "exceptions,",
        "mini-project"
      ],
      "studyGuideFocus": "Final focus: try/catch flow, file-reading basics, null checks, and avoiding hidden runtime crashes.",
      "difficultyReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "acceptanceTests": [
        "Normal case: complete \u201cSafe Number Parser\u201d with the sample or obvious happy-path values.",
        "Edge case: Test missing or bad input when appropriate.",
        "Code review case: explain which method/class owns each responsibility."
      ],
      "rubric": [
        "Breaks the build into clear CS202 pieces for try/catch.",
        "Includes readable code with fields/methods/classes separated logically.",
        "Explains at least one test case that proves the build works, including a boundary or edge case."
      ],
      "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for try/catch.",
      "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
    },
    {
      "id": "BCB011",
      "level": "base",
      "topic": "Static, Final, Memory, and Garbage Collection",
      "skill": "static counter",
      "title": "Object Counter",
      "scenario": "Build a class that counts how many objects were created.",
      "goal": "Use a static field that increases in the constructor.",
      "starter": "public class Ticket {\n    // static count and constructor\n}\n",
      "deliverables": [
        "Plan the classes, methods, fields, or data structures before coding.",
        "Write a small but complete CS202-level Java solution or code sketch.",
        "Provide a normal test and one edge/boundary test that proves the build works."
      ],
      "milestones": [
        "Identify which CS202 topics are being combined; start with static counter.",
        "Write the data/state needed before writing behavior.",
        "Build one working version, then add the required edge-case/test explanation."
      ],
      "hints": [
        "Ask: should this value belong to the class itself or to each object?",
        "A final variable can be assigned once; a static variable is shared by the class."
      ],
      "modelPlan": "Use the static counter idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
      "modelAnswer": "public class Ticket {\n    private static int count = 0;\n    private int number;\n\n    public Ticket() {\n        count++;\n        number = count;\n    }\n\n    public static int getCount() {\n        return count;\n    }\n}\n",
      "explanation": "Static count belongs to the class, so every object shares it.",
      "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
      "extension": "Add one extra test case or one small feature after the base version works.",
      "concepts": [
        "static counter",
        "static,",
        "mini-project"
      ],
      "studyGuideFocus": "Final focus: static vs instance members, final constants, object references, aliases, and simple memory reasoning.",
      "difficultyReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "acceptanceTests": [
        "Normal case: complete \u201cObject Counter\u201d with the sample or obvious happy-path values.",
        "Edge case: Create two objects and check what is shared vs separate.",
        "Code review case: explain which method/class owns each responsibility."
      ],
      "rubric": [
        "Breaks the build into clear CS202 pieces for static counter.",
        "Includes readable code with fields/methods/classes separated logically.",
        "Explains at least one test case that proves the build works, including a boundary or edge case."
      ],
      "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for static counter.",
      "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
    },
    {
      "id": "BCB012",
      "level": "base",
      "topic": "Graphics",
      "skill": "paintComponent planning",
      "title": "Draw a Target",
      "scenario": "Build the paintComponent body for a simple target drawing.",
      "goal": "Draw three centered ovals with different sizes.",
      "starter": "@Override\nprotected void paintComponent(Graphics g) {\n    super.paintComponent(g);\n    // draw target\n}\n",
      "deliverables": [
        "Plan the classes, methods, fields, or data structures before coding.",
        "Write a small but complete CS202-level Java solution or code sketch.",
        "Provide a normal test and one edge/boundary test that proves the build works."
      ],
      "milestones": [
        "Identify which CS202 topics are being combined; start with paintComponent planning.",
        "Plan coordinates and drawing order before writing paintComponent code.",
        "Build one working version, then add the required edge-case/test explanation."
      ],
      "hints": [
        "Remember: x increases to the right, y increases downward.",
        "Call super.paintComponent(g) before custom drawing in Swing."
      ],
      "modelPlan": "Use the paintComponent planning idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
      "modelAnswer": "@Override\nprotected void paintComponent(Graphics g) {\n    super.paintComponent(g);\n    g.drawOval(50, 50, 100, 100);\n    g.drawOval(75, 75, 50, 50);\n    g.fillOval(95, 95, 10, 10);\n}\n",
      "explanation": "Graphics code uses coordinates and sizes; super.paintComponent clears the panel first.",
      "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
      "extension": "Add one extra test case or one small feature after the base version works.",
      "concepts": [
        "paintComponent planning",
        "graphics",
        "mini-project"
      ],
      "studyGuideFocus": "Midterm/final focus: paintComponent, Graphics methods, coordinates, colors, repaint, and drawing order.",
      "difficultyReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "acceptanceTests": [
        "Normal case: complete \u201cDraw a Target\u201d with the sample or obvious happy-path values.",
        "Edge case: Check x/y coordinates from the top-left corner.",
        "Code review case: explain which method/class owns each responsibility."
      ],
      "rubric": [
        "Breaks the build into clear CS202 pieces for paintComponent planning.",
        "Includes readable code with fields/methods/classes separated logically.",
        "Explains at least one test case that proves the build works, including a boundary or edge case."
      ],
      "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for paintComponent planning.",
      "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
    },
    {
      "id": "BCB013",
      "level": "base",
      "topic": "Records vs Classes",
      "skill": "record basics",
      "title": "Course Record",
      "scenario": "Build a small record for a course.",
      "goal": "Create a Course record with code, title, and credits, plus a fullLabel method.",
      "starter": "public record Course(/* components */) {\n    // method here\n}\n",
      "deliverables": [
        "Plan the classes, methods, fields, or data structures before coding.",
        "Write a small but complete CS202-level Java solution or code sketch.",
        "Provide a normal test and one edge/boundary test that proves the build works."
      ],
      "milestones": [
        "Identify which CS202 topics are being combined; start with record basics.",
        "Write the class/record header, fields, and constructor before behavior methods.",
        "Build one working version, then add the required edge-case/test explanation."
      ],
      "hints": [
        "Records are best for simple data carriers.",
        "Record accessors use the field name, like name(), not getName()."
      ],
      "modelPlan": "Use the record basics idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
      "modelAnswer": "public record Course(String code, String title, int credits) {\n    public String fullLabel() {\n        return code + \" - \" + title + \" (\" + credits + \" credits)\";\n    }\n}\n",
      "explanation": "A record stores simple data and gives accessors automatically.",
      "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
      "extension": "Add one extra test case or one small feature after the base version works.",
      "concepts": [
        "record basics",
        "records",
        "mini-project"
      ],
      "studyGuideFocus": "Final focus: record syntax, generated constructor/accessors, immutability, and when a normal class is better.",
      "difficultyReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "acceptanceTests": [
        "Normal case: complete \u201cCourse Record\u201d with the sample or obvious happy-path values.",
        "Edge case: Check the generated accessor names.",
        "Code review case: explain which method/class owns each responsibility."
      ],
      "rubric": [
        "Breaks the build into clear CS202 pieces for record basics.",
        "Includes readable code with fields/methods/classes separated logically.",
        "Explains at least one test case that proves the build works, including a boundary or edge case."
      ],
      "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for record basics.",
      "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
    },
    {
      "id": "BCB014",
      "level": "base",
      "topic": "Final Exam Mixed Practice",
      "skill": "class + collection",
      "title": "Playlist Builder",
      "scenario": "Build a Playlist class that stores song titles.",
      "goal": "Use an ArrayList<String>, addSong, and songCount methods.",
      "starter": "import java.util.ArrayList;\n\npublic class Playlist {\n    // field and methods\n}\n",
      "deliverables": [
        "Plan the classes, methods, fields, or data structures before coding.",
        "Write a small but complete CS202-level Java solution or code sketch.",
        "Provide a normal test and one edge/boundary test that proves the build works."
      ],
      "milestones": [
        "Split the build into smaller parts: input/state, processing, output, and test.",
        "Write the data/state needed before writing behavior.",
        "Build one working version, then add the required edge-case/test explanation."
      ],
      "hints": [
        "Separate the task into small CS202 ideas before coding.",
        "After writing code, trace one complete sample by hand."
      ],
      "modelPlan": "Use the class + collection idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
      "modelAnswer": "import java.util.ArrayList;\n\npublic class Playlist {\n    private ArrayList<String> songs = new ArrayList<>();\n\n    public void addSong(String title) {\n        songs.add(title);\n    }\n\n    public int songCount() {\n        return songs.size();\n    }\n}\n",
      "explanation": "The ArrayList is object state, and methods control how it changes.",
      "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
      "extension": "Add one extra test case or one small feature after the base version works.",
      "concepts": [
        "class + collection",
        "final",
        "mini-project"
      ],
      "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
      "difficultyReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "acceptanceTests": [
        "Normal case: complete \u201cPlaylist Builder\u201d with the sample or obvious happy-path values.",
        "Edge case: Trace the sample by hand before writing code.",
        "Code review case: explain which method/class owns each responsibility."
      ],
      "rubric": [
        "Breaks the build into clear CS202 pieces for class + collection.",
        "Includes readable code with fields/methods/classes separated logically.",
        "Explains at least one test case that proves the build works, including a boundary or edge case."
      ],
      "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for class + collection.",
      "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
    },
    {
      "id": "BCB015",
      "level": "base",
      "topic": "Final Exam Mixed Practice",
      "skill": "state update",
      "title": "Player Health",
      "scenario": "Build a Player class that updates health safely.",
      "goal": "Health starts at 100. damage lowers health but never below 0.",
      "starter": "public class Player {\n    // health field and damage method\n}\n",
      "deliverables": [
        "Plan the classes, methods, fields, or data structures before coding.",
        "Write a small but complete CS202-level Java solution or code sketch.",
        "Provide a normal test and one edge/boundary test that proves the build works."
      ],
      "milestones": [
        "Split the build into smaller parts: input/state, processing, output, and test.",
        "Write the data/state needed before writing behavior.",
        "Build one working version, then add the required edge-case/test explanation."
      ],
      "hints": [
        "Separate the task into small CS202 ideas before coding.",
        "After writing code, trace one complete sample by hand."
      ],
      "modelPlan": "Use the state update idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
      "modelAnswer": "public class Player {\n    private int health = 100;\n\n    public void damage(int amount) {\n        health -= amount;\n        if (health < 0) {\n            health = 0;\n        }\n    }\n\n    public int getHealth() {\n        return health;\n    }\n}\n",
      "explanation": "The method protects the object's state by enforcing a lower boundary.",
      "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
      "extension": "Add one extra test case or one small feature after the base version works.",
      "concepts": [
        "state update",
        "final",
        "mini-project"
      ],
      "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
      "difficultyReason": "Base practice: reusable in supported levels to strengthen core exam habits.",
      "acceptanceTests": [
        "Normal case: complete \u201cPlayer Health\u201d with the sample or obvious happy-path values.",
        "Edge case: Trace the sample by hand before writing code.",
        "Code review case: explain which method/class owns each responsibility."
      ],
      "rubric": [
        "Breaks the build into clear CS202 pieces for state update.",
        "Includes readable code with fields/methods/classes separated logically.",
        "Explains at least one test case that proves the build works, including a boundary or edge case."
      ],
      "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for state update.",
      "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
    }
  ],
  "extras": {
    "level1": [
      {
        "id": "BCL1-001",
        "level": "level1Extra",
        "topic": "Arrays and ArrayLists",
        "skill": "ArrayList filtering",
        "title": "Passing Students List",
        "scenario": "Build a method that returns names of students with scores at least 70.",
        "goal": "Use parallel ArrayLists for names and scores; add matching names to a result list.",
        "starter": "public static ArrayList<String> passing(ArrayList<String> names, ArrayList<Integer> scores) {\n    // guided build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with ArrayList filtering.",
          "Decide the data structure and traversal pattern before writing calculations.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Decide if you need indexes. If you only read values, an enhanced for loop may be enough.",
          "The last valid array index is length - 1. For ArrayList, it is size() - 1."
        ],
        "modelPlan": "Use the ArrayList filtering idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public static ArrayList<String> passing(ArrayList<String> names, ArrayList<Integer> scores) {\n    ArrayList<String> result = new ArrayList<>();\n    for (int i = 0; i < scores.size(); i++) {\n        if (scores.get(i) >= 70) {\n            result.add(names.get(i));\n        }\n    }\n    return result;\n}\n",
        "explanation": "Use the same index to connect each name to its score.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "ArrayList filtering",
          "arrays",
          "mini-project"
        ],
        "studyGuideFocus": "Midterm 1/final focus: indexing, length/size, traversal, accumulators, off-by-one errors, and safe updates.",
        "difficultyReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "acceptanceTests": [
          "Normal case: complete \u201cPassing Students List\u201d with the sample or obvious happy-path values.",
          "Edge case: Test an array/list with one item.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for ArrayList filtering.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for ArrayList filtering.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL1-002",
        "level": "level1Extra",
        "topic": "Methods",
        "skill": "decomposition",
        "title": "Word Cleaner",
        "scenario": "Build a helper method that trims and lowercases a word.",
        "goal": "Return an empty string for null. Otherwise trim spaces and lowercase it.",
        "starter": "public static String cleanWord(String word) {\n    // guided build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with decomposition.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Start from the method header: return type, name, and parameters tell you most of the answer.",
          "A non-void method needs a return statement that gives back the promised type."
        ],
        "modelPlan": "Use the decomposition idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public static String cleanWord(String word) {\n    if (word == null) {\n        return \"\";\n    }\n    return word.trim().toLowerCase();\n}\n",
        "explanation": "Handle null first so the method calls are safe.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "decomposition",
          "methods",
          "mini-project"
        ],
        "studyGuideFocus": "Final focus: method headers, return types, parameters, return vs print, helper methods, and calling methods correctly.",
        "difficultyReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "acceptanceTests": [
          "Normal case: complete \u201cWord Cleaner\u201d with the sample or obvious happy-path values.",
          "Edge case: Check that the method returns instead of only printing when a return type is required.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for decomposition.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for decomposition.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL1-003",
        "level": "level1Extra",
        "topic": "Classes and Objects",
        "skill": "object state",
        "title": "Locker",
        "scenario": "Build a Locker class with open/close behavior.",
        "goal": "A Locker has a number and an open boolean. Add open(), close(), and isOpen().",
        "starter": "public class Locker {\n    // guided build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with object state.",
          "Write the class/record header, fields, and constructor before behavior methods.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "List the object state first, then write one behavior that uses that state.",
          "Use this.fieldName when a parameter has the same name as a field."
        ],
        "modelPlan": "Use the object state idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public class Locker {\n    private int number;\n    private boolean open;\n\n    public Locker(int number) {\n        this.number = number;\n        this.open = false;\n    }\n\n    public void open() {\n        open = true;\n    }\n\n    public void close() {\n        open = false;\n    }\n\n    public boolean isOpen() {\n        return open;\n    }\n}\n",
        "explanation": "The boolean field remembers the current state.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "object state",
          "classes",
          "mini-project"
        ],
        "studyGuideFocus": "Midterm 2/final focus: object state, behaviors, fields vs locals, encapsulation, and using objects from another class.",
        "difficultyReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "acceptanceTests": [
          "Normal case: complete \u201cLocker\u201d with the sample or obvious happy-path values.",
          "Edge case: Create two different objects to make sure fields are not accidentally shared.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for object state.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for object state.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL1-004",
        "level": "level1Extra",
        "topic": "Constructors",
        "skill": "copy constructor",
        "title": "Point Copy",
        "scenario": "Build a Point class with a copy constructor.",
        "goal": "Store x and y. Add normal and copy constructors.",
        "starter": "public class Point {\n    // guided build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with copy constructor.",
          "Write the class/record header, fields, and constructor before behavior methods.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "The constructor name must match the class name and has no return type.",
          "Overloaded constructors should initialize the same fields, just from different inputs."
        ],
        "modelPlan": "Use the copy constructor idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public class Point {\n    private int x;\n    private int y;\n\n    public Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    public Point(Point other) {\n        this(other.x, other.y);\n    }\n}\n",
        "explanation": "The copy constructor creates a new object with the same values.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "copy constructor",
          "constructors",
          "mini-project"
        ],
        "studyGuideFocus": "Midterm 2/final focus: constructor purpose, overloaded constructors, copy constructors, this, default values, and initialization order.",
        "difficultyReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "acceptanceTests": [
          "Normal case: complete \u201cPoint Copy\u201d with the sample or obvious happy-path values.",
          "Edge case: Test the constructor with normal values.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for copy constructor.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for copy constructor.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL1-005",
        "level": "level1Extra",
        "topic": "Inheritance and Polymorphism",
        "skill": "polymorphic array",
        "title": "Animal Sounds",
        "scenario": "Build a small polymorphism example.",
        "goal": "Create Animal with speak(), Dog overrides speak(), then call speak through Animal reference.",
        "starter": "class Animal {\n    // guided build\n}\n\nclass Dog extends Animal {\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with polymorphic array.",
          "Write the class/record header, fields, and constructor before behavior methods.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Use the is-a rule: a subclass object should be usable wherever the superclass is expected.",
          "When a method is overridden, the object type at runtime decides which version runs."
        ],
        "modelPlan": "Use the polymorphic array idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "class Animal {\n    public String speak() {\n        return \"sound\";\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    public String speak() {\n        return \"bark\";\n    }\n}\n",
        "explanation": "Polymorphism chooses the overridden method at runtime.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "polymorphic array",
          "inheritance",
          "mini-project"
        ],
        "studyGuideFocus": "Final focus: is-a relationships, overriding, dynamic dispatch, protected/private access, and superclass constructor calls.",
        "difficultyReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "acceptanceTests": [
          "Normal case: complete \u201cAnimal Sounds\u201d with the sample or obvious happy-path values.",
          "Edge case: Call the method through a superclass reference.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for polymorphic array.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for polymorphic array.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL1-006",
        "level": "level1Extra",
        "topic": "Interfaces and KeyListener",
        "skill": "event thinking",
        "title": "Move Command",
        "scenario": "Build a method that updates x/y based on a key string.",
        "goal": "Use W, A, S, D strings to change x or y by 5.",
        "starter": "public void move(String key) {\n    // guided build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with event thinking.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "An interface tells you which method names/signatures must exist.",
          "For KeyListener, separate movement logic from drawing logic."
        ],
        "modelPlan": "Use the event thinking idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public void move(String key) {\n    if (key.equals(\"W\")) {\n        y -= 5;\n    } else if (key.equals(\"S\")) {\n        y += 5;\n    } else if (key.equals(\"A\")) {\n        x -= 5;\n    } else if (key.equals(\"D\")) {\n        x += 5;\n    }\n}\n",
        "explanation": "Key-style movement changes state, then the screen can repaint.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "event thinking",
          "interfaces",
          "mini-project"
        ],
        "studyGuideFocus": "Final focus: interface contracts, required methods, event-driven thinking, and KeyListener method responsibilities.",
        "difficultyReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "acceptanceTests": [
          "Normal case: complete \u201cMove Command\u201d with the sample or obvious happy-path values.",
          "Edge case: Confirm every required interface method is present.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for event thinking.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for event thinking.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL1-007",
        "level": "level1Extra",
        "topic": "equals(), ==, =, and toString()",
        "skill": "equals",
        "title": "Username Match",
        "scenario": "Build equals for a User based on username.",
        "goal": "Return true when the other object is a User with the same username.",
        "starter": "@Override\npublic boolean equals(Object obj) {\n    // guided build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with equals.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Use = to assign, == carefully for primitives/reference identity, and equals for object value comparison.",
          "toString should return the useful state of the object as a String."
        ],
        "modelPlan": "Use the equals idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "@Override\npublic boolean equals(Object obj) {\n    if (!(obj instanceof User other)) {\n        return false;\n    }\n    return username.equals(other.username);\n}\n",
        "explanation": "Use equals for String content instead of ==.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "equals",
          "equals(),",
          "mini-project"
        ],
        "studyGuideFocus": "Final focus: assignment vs comparison, reference vs value comparison, overriding equals, and useful toString output.",
        "difficultyReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "acceptanceTests": [
          "Normal case: complete \u201cUsername Match\u201d with the sample or obvious happy-path values.",
          "Edge case: Check two different objects with the same data.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for equals.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for equals.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL1-008",
        "level": "level1Extra",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "file loop",
        "title": "Line Counter",
        "scenario": "Build the core loop for counting file lines.",
        "goal": "Given a Scanner input, count how many lines it has.",
        "starter": "public static int countLines(Scanner input) {\n    // guided build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with file loop.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Put only the risky operation inside try when possible.",
          "Before using object.method(), ask whether object could be null."
        ],
        "modelPlan": "Use the file loop idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public static int countLines(Scanner input) {\n    int count = 0;\n    while (input.hasNextLine()) {\n        input.nextLine();\n        count++;\n    }\n    return count;\n}\n",
        "explanation": "The loop consumes one line each time so it eventually ends.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "file loop",
          "exceptions,",
          "mini-project"
        ],
        "studyGuideFocus": "Final focus: try/catch flow, file-reading basics, null checks, and avoiding hidden runtime crashes.",
        "difficultyReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "acceptanceTests": [
          "Normal case: complete \u201cLine Counter\u201d with the sample or obvious happy-path values.",
          "Edge case: Test missing or bad input when appropriate.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for file loop.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for file loop.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL1-009",
        "level": "level1Extra",
        "topic": "Static, Final, Memory, and Garbage Collection",
        "skill": "final constant",
        "title": "Circle Utility",
        "scenario": "Build a class with a final constant for PI.",
        "goal": "Use a public static final PI and an area method.",
        "starter": "public class CircleUtil {\n    // guided build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with final constant.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Ask: should this value belong to the class itself or to each object?",
          "A final variable can be assigned once; a static variable is shared by the class."
        ],
        "modelPlan": "Use the final constant idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public class CircleUtil {\n    public static final double PI = 3.14159;\n\n    public static double area(double radius) {\n        return PI * radius * radius;\n    }\n}\n",
        "explanation": "A constant should be static final because it belongs to the class and does not change.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "final constant",
          "static,",
          "mini-project"
        ],
        "studyGuideFocus": "Final focus: static vs instance members, final constants, object references, aliases, and simple memory reasoning.",
        "difficultyReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "acceptanceTests": [
          "Normal case: complete \u201cCircle Utility\u201d with the sample or obvious happy-path values.",
          "Edge case: Create two objects and check what is shared vs separate.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for final constant.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for final constant.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL1-010",
        "level": "level1Extra",
        "topic": "Graphics",
        "skill": "drawing sequence",
        "title": "House Drawing",
        "scenario": "Build the paintComponent body for a simple house.",
        "goal": "Draw a square house body, roof line, and door rectangle.",
        "starter": "@Override\nprotected void paintComponent(Graphics g) {\n    super.paintComponent(g);\n    // guided build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with drawing sequence.",
          "Plan coordinates and drawing order before writing paintComponent code.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Remember: x increases to the right, y increases downward.",
          "Call super.paintComponent(g) before custom drawing in Swing."
        ],
        "modelPlan": "Use the drawing sequence idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "@Override\nprotected void paintComponent(Graphics g) {\n    super.paintComponent(g);\n    g.drawRect(60, 80, 100, 80);\n    g.drawLine(60, 80, 110, 40);\n    g.drawLine(110, 40, 160, 80);\n    g.drawRect(100, 120, 20, 40);\n}\n",
        "explanation": "Each drawing call adds one visible part of the picture.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "drawing sequence",
          "graphics",
          "mini-project"
        ],
        "studyGuideFocus": "Midterm/final focus: paintComponent, Graphics methods, coordinates, colors, repaint, and drawing order.",
        "difficultyReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "acceptanceTests": [
          "Normal case: complete \u201cHouse Drawing\u201d with the sample or obvious happy-path values.",
          "Edge case: Check x/y coordinates from the top-left corner.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for drawing sequence.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for drawing sequence.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL1-011",
        "level": "level1Extra",
        "topic": "Records vs Classes",
        "skill": "record with validation idea",
        "title": "Assignment Record",
        "scenario": "Build a record for an assignment score.",
        "goal": "Create an Assignment record and a passed method that checks score >= 70.",
        "starter": "public record Assignment(String name, int score) {\n    // guided build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with record with validation idea.",
          "Write the class/record header, fields, and constructor before behavior methods.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Records are best for simple data carriers.",
          "Record accessors use the field name, like name(), not getName()."
        ],
        "modelPlan": "Use the record with validation idea idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public record Assignment(String name, int score) {\n    public boolean passed() {\n        return score >= 70;\n    }\n}\n",
        "explanation": "Records are useful for small data objects with simple behavior.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "record with validation idea",
          "records",
          "mini-project"
        ],
        "studyGuideFocus": "Final focus: record syntax, generated constructor/accessors, immutability, and when a normal class is better.",
        "difficultyReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "acceptanceTests": [
          "Normal case: complete \u201cAssignment Record\u201d with the sample or obvious happy-path values.",
          "Edge case: Check the generated accessor names.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for record with validation idea.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for record with validation idea.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL1-012",
        "level": "level1Extra",
        "topic": "Final Exam Mixed Practice",
        "skill": "method + array",
        "title": "Highest Temperature",
        "scenario": "Build a method that returns the highest temperature.",
        "goal": "Return Integer.MIN_VALUE for an empty array.",
        "starter": "public static int highest(int[] temps) {\n    // guided build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Split the build into smaller parts: input/state, processing, output, and test.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Separate the task into small CS202 ideas before coding.",
          "After writing code, trace one complete sample by hand."
        ],
        "modelPlan": "Use the method + array idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public static int highest(int[] temps) {\n    if (temps.length == 0) {\n        return Integer.MIN_VALUE;\n    }\n    int best = temps[0];\n    for (int temp : temps) {\n        if (temp > best) {\n            best = temp;\n        }\n    }\n    return best;\n}\n",
        "explanation": "Start with the first value, then update best only when a larger value appears.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "method + array",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "acceptanceTests": [
          "Normal case: complete \u201cHighest Temperature\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for method + array.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for method + array.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL1-013",
        "level": "level1Extra",
        "topic": "Final Exam Mixed Practice",
        "skill": "class + method",
        "title": "Bank Account",
        "scenario": "Build a simple account with deposit and withdraw.",
        "goal": "Balance starts from constructor. Withdraw only if amount is available.",
        "starter": "public class Account {\n    // guided build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Split the build into smaller parts: input/state, processing, output, and test.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Separate the task into small CS202 ideas before coding.",
          "After writing code, trace one complete sample by hand."
        ],
        "modelPlan": "Use the class + method idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public class Account {\n    private double balance;\n\n    public Account(double balance) {\n        this.balance = balance;\n    }\n\n    public void deposit(double amount) {\n        balance += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > balance) {\n            return false;\n        }\n        balance -= amount;\n        return true;\n    }\n}\n",
        "explanation": "The method returns whether the withdrawal happened.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "class + method",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "acceptanceTests": [
          "Normal case: complete \u201cBank Account\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for class + method.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for class + method.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL1-014",
        "level": "level1Extra",
        "topic": "Final Exam Mixed Practice",
        "skill": "2D arrays",
        "title": "Seating Count",
        "scenario": "Build a method that counts occupied seats in a 2D boolean array.",
        "goal": "true means occupied. Return the number of true values.",
        "starter": "public static int occupied(boolean[][] seats) {\n    // guided build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Split the build into smaller parts: input/state, processing, output, and test.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Separate the task into small CS202 ideas before coding.",
          "After writing code, trace one complete sample by hand."
        ],
        "modelPlan": "Use the 2D arrays idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public static int occupied(boolean[][] seats) {\n    int count = 0;\n    for (int row = 0; row < seats.length; row++) {\n        for (int col = 0; col < seats[row].length; col++) {\n            if (seats[row][col]) {\n                count++;\n            }\n        }\n    }\n    return count;\n}\n",
        "explanation": "Nested loops visit every row and every column.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "2D arrays",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "acceptanceTests": [
          "Normal case: complete \u201cSeating Count\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for 2D arrays.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for 2D arrays.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL1-015",
        "level": "level1Extra",
        "topic": "Final Exam Mixed Practice",
        "skill": "debuggable design",
        "title": "Study Timer",
        "scenario": "Build a StudyTimer class with minutes completed.",
        "goal": "Add addMinutes and reset methods. Prevent negative added minutes.",
        "starter": "public class StudyTimer {\n    // guided build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Split the build into smaller parts: input/state, processing, output, and test.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Separate the task into small CS202 ideas before coding.",
          "After writing code, trace one complete sample by hand."
        ],
        "modelPlan": "Use the debuggable design idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public class StudyTimer {\n    private int minutes;\n\n    public void addMinutes(int amount) {\n        if (amount > 0) {\n            minutes += amount;\n        }\n    }\n\n    public void reset() {\n        minutes = 0;\n    }\n}\n",
        "explanation": "Methods protect object state by ignoring invalid input.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "debuggable design",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 1 quality target: guided enough to teach the pattern without giving away every line.",
        "acceptanceTests": [
          "Normal case: complete \u201cStudy Timer\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for debuggable design.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for debuggable design.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      }
    ],
    "level2": [
      {
        "id": "BCL2-001",
        "level": "level2Extra",
        "topic": "Methods",
        "skill": "validation",
        "title": "Password Check",
        "scenario": "Build a method that checks password strength.",
        "goal": "Return true if text is not null, has at least 8 characters, and contains a digit.",
        "starter": "public static boolean strong(String text) {\n    // hinted build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with validation.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Start from the method header: return type, name, and parameters tell you most of the answer.",
          "A non-void method needs a return statement that gives back the promised type."
        ],
        "modelPlan": "Use the validation idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public static boolean strong(String text) {\n    if (text == null || text.length() < 8) {\n        return false;\n    }\n    for (int i = 0; i < text.length(); i++) {\n        if (Character.isDigit(text.charAt(i))) {\n            return true;\n        }\n    }\n    return false;\n}\n",
        "explanation": "Check simple failure cases first, then loop for the digit.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "validation",
          "methods",
          "mini-project"
        ],
        "studyGuideFocus": "Final focus: method headers, return types, parameters, return vs print, helper methods, and calling methods correctly.",
        "difficultyReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "acceptanceTests": [
          "Normal case: complete \u201cPassword Check\u201d with the sample or obvious happy-path values.",
          "Edge case: Check that the method returns instead of only printing when a return type is required.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for validation.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for validation.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL2-002",
        "level": "level2Extra",
        "topic": "Arrays and ArrayLists",
        "skill": "removal",
        "title": "Remove Short Words",
        "scenario": "Build a method that removes words shorter than 3 letters.",
        "goal": "Use an index loop so removing does not skip items.",
        "starter": "public static void removeShort(ArrayList<String> words) {\n    // hinted build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with removal.",
          "Decide the data structure and traversal pattern before writing calculations.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Decide if you need indexes. If you only read values, an enhanced for loop may be enough.",
          "The last valid array index is length - 1. For ArrayList, it is size() - 1."
        ],
        "modelPlan": "Use the removal idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public static void removeShort(ArrayList<String> words) {\n    for (int i = words.size() - 1; i >= 0; i--) {\n        if (words.get(i).length() < 3) {\n            words.remove(i);\n        }\n    }\n}\n",
        "explanation": "Looping backward avoids index shifting problems while removing.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "removal",
          "arrays",
          "mini-project"
        ],
        "studyGuideFocus": "Midterm 1/final focus: indexing, length/size, traversal, accumulators, off-by-one errors, and safe updates.",
        "difficultyReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "acceptanceTests": [
          "Normal case: complete \u201cRemove Short Words\u201d with the sample or obvious happy-path values.",
          "Edge case: Test an array/list with one item.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for removal.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for removal.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL2-003",
        "level": "level2Extra",
        "topic": "Classes and Objects",
        "skill": "encapsulation",
        "title": "Water Bottle",
        "scenario": "Build a WaterBottle class with capacity and current amount.",
        "goal": "fill adds water up to capacity; drink lowers amount but not below 0.",
        "starter": "public class WaterBottle {\n    // hinted build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with encapsulation.",
          "Write the class/record header, fields, and constructor before behavior methods.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "List the object state first, then write one behavior that uses that state.",
          "Use this.fieldName when a parameter has the same name as a field."
        ],
        "modelPlan": "Use the encapsulation idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public class WaterBottle {\n    private int capacity;\n    private int amount;\n\n    public WaterBottle(int capacity) {\n        this.capacity = capacity;\n        this.amount = 0;\n    }\n\n    public void fill(int added) {\n        amount += added;\n        if (amount > capacity) {\n            amount = capacity;\n        }\n    }\n\n    public void drink(int used) {\n        amount -= used;\n        if (amount < 0) {\n            amount = 0;\n        }\n    }\n}\n",
        "explanation": "Both methods enforce boundaries on the private amount field.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "encapsulation",
          "classes",
          "mini-project"
        ],
        "studyGuideFocus": "Midterm 2/final focus: object state, behaviors, fields vs locals, encapsulation, and using objects from another class.",
        "difficultyReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "acceptanceTests": [
          "Normal case: complete \u201cWater Bottle\u201d with the sample or obvious happy-path values.",
          "Edge case: Create two different objects to make sure fields are not accidentally shared.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for encapsulation.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for encapsulation.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL2-004",
        "level": "level2Extra",
        "topic": "Constructors",
        "skill": "default constructor",
        "title": "Game Settings",
        "scenario": "Build GameSettings with default values.",
        "goal": "Default difficulty is Normal and sound is true. Add a second constructor to customize both.",
        "starter": "public class GameSettings {\n    // hinted build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with default constructor.",
          "Write the class/record header, fields, and constructor before behavior methods.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "The constructor name must match the class name and has no return type.",
          "Overloaded constructors should initialize the same fields, just from different inputs."
        ],
        "modelPlan": "Use the default constructor idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public class GameSettings {\n    private String difficulty;\n    private boolean sound;\n\n    public GameSettings() {\n        this(\"Normal\", true);\n    }\n\n    public GameSettings(String difficulty, boolean sound) {\n        this.difficulty = difficulty;\n        this.sound = sound;\n    }\n}\n",
        "explanation": "The no-argument constructor can delegate to the full constructor.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "default constructor",
          "constructors",
          "mini-project"
        ],
        "studyGuideFocus": "Midterm 2/final focus: constructor purpose, overloaded constructors, copy constructors, this, default values, and initialization order.",
        "difficultyReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "acceptanceTests": [
          "Normal case: complete \u201cGame Settings\u201d with the sample or obvious happy-path values.",
          "Edge case: Test the constructor with normal values.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for default constructor.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for default constructor.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL2-005",
        "level": "level2Extra",
        "topic": "Inheritance and Polymorphism",
        "skill": "abstract thinking",
        "title": "Shape Area",
        "scenario": "Build an abstract Shape with Circle subclass.",
        "goal": "Shape has abstract area(); Circle implements it with radius.",
        "starter": "abstract class Shape {\n    // hinted build\n}\n\nclass Circle extends Shape {\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with abstract thinking.",
          "Write the class/record header, fields, and constructor before behavior methods.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Use the is-a rule: a subclass object should be usable wherever the superclass is expected.",
          "When a method is overridden, the object type at runtime decides which version runs."
        ],
        "modelPlan": "Use the abstract thinking idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "abstract class Shape {\n    public abstract double area();\n}\n\nclass Circle extends Shape {\n    private double radius;\n\n    public Circle(double radius) {\n        this.radius = radius;\n    }\n\n    @Override\n    public double area() {\n        return Math.PI * radius * radius;\n    }\n}\n",
        "explanation": "The abstract method forces subclasses to provide the behavior.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "abstract thinking",
          "inheritance",
          "mini-project"
        ],
        "studyGuideFocus": "Final focus: is-a relationships, overriding, dynamic dispatch, protected/private access, and superclass constructor calls.",
        "difficultyReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "acceptanceTests": [
          "Normal case: complete \u201cShape Area\u201d with the sample or obvious happy-path values.",
          "Edge case: Call the method through a superclass reference.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for abstract thinking.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for abstract thinking.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL2-006",
        "level": "level2Extra",
        "topic": "Interfaces and KeyListener",
        "skill": "movement bounds",
        "title": "Bounded Movement",
        "scenario": "Build a moveRight method that respects screen width.",
        "goal": "Increase x by speed only if x + width + speed stays inside maxWidth.",
        "starter": "public void moveRight() {\n    // hinted build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with movement bounds.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "An interface tells you which method names/signatures must exist.",
          "For KeyListener, separate movement logic from drawing logic."
        ],
        "modelPlan": "Use the movement bounds idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public void moveRight() {\n    if (x + width + speed <= maxWidth) {\n        x += speed;\n    }\n}\n",
        "explanation": "The boundary check uses the object's right edge, not just x.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "movement bounds",
          "interfaces",
          "mini-project"
        ],
        "studyGuideFocus": "Final focus: interface contracts, required methods, event-driven thinking, and KeyListener method responsibilities.",
        "difficultyReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "acceptanceTests": [
          "Normal case: complete \u201cBounded Movement\u201d with the sample or obvious happy-path values.",
          "Edge case: Confirm every required interface method is present.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for movement bounds.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for movement bounds.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL2-007",
        "level": "level2Extra",
        "topic": "equals(), ==, =, and toString()",
        "skill": "comparison",
        "title": "Course Equality",
        "scenario": "Build equals for a Course using course code.",
        "goal": "Use instanceof and String equals on code.",
        "starter": "@Override\npublic boolean equals(Object obj) {\n    // hinted build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with comparison.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Use = to assign, == carefully for primitives/reference identity, and equals for object value comparison.",
          "toString should return the useful state of the object as a String."
        ],
        "modelPlan": "Use the comparison idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "@Override\npublic boolean equals(Object obj) {\n    if (!(obj instanceof Course other)) {\n        return false;\n    }\n    return code.equals(other.code);\n}\n",
        "explanation": "Object equality should compare meaningful state, not memory addresses.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "comparison",
          "equals(),",
          "mini-project"
        ],
        "studyGuideFocus": "Final focus: assignment vs comparison, reference vs value comparison, overriding equals, and useful toString output.",
        "difficultyReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "acceptanceTests": [
          "Normal case: complete \u201cCourse Equality\u201d with the sample or obvious happy-path values.",
          "Edge case: Check two different objects with the same data.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for comparison.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for comparison.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL2-008",
        "level": "level2Extra",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "null safety",
        "title": "Safe First Item",
        "scenario": "Build a method that returns the first ArrayList item safely.",
        "goal": "Return empty string if list is null or empty.",
        "starter": "public static String first(ArrayList<String> items) {\n    // hinted build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with null safety.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Put only the risky operation inside try when possible.",
          "Before using object.method(), ask whether object could be null."
        ],
        "modelPlan": "Use the null safety idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public static String first(ArrayList<String> items) {\n    if (items == null || items.isEmpty()) {\n        return \"\";\n    }\n    return items.get(0);\n}\n",
        "explanation": "The || short-circuits before calling isEmpty on a null list.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "null safety",
          "exceptions,",
          "mini-project"
        ],
        "studyGuideFocus": "Final focus: try/catch flow, file-reading basics, null checks, and avoiding hidden runtime crashes.",
        "difficultyReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "acceptanceTests": [
          "Normal case: complete \u201cSafe First Item\u201d with the sample or obvious happy-path values.",
          "Edge case: Test missing or bad input when appropriate.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for null safety.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for null safety.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL2-009",
        "level": "level2Extra",
        "topic": "Static, Final, Memory, and Garbage Collection",
        "skill": "static utility",
        "title": "Math Helper",
        "scenario": "Build a utility method that clamps a value.",
        "goal": "Return min if value is too low, max if too high, otherwise value.",
        "starter": "public static int clamp(int value, int min, int max) {\n    // hinted build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with static utility.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Ask: should this value belong to the class itself or to each object?",
          "A final variable can be assigned once; a static variable is shared by the class."
        ],
        "modelPlan": "Use the static utility idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public static int clamp(int value, int min, int max) {\n    if (value < min) {\n        return min;\n    }\n    if (value > max) {\n        return max;\n    }\n    return value;\n}\n",
        "explanation": "A utility method can be static because it does not use object state.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "static utility",
          "static,",
          "mini-project"
        ],
        "studyGuideFocus": "Final focus: static vs instance members, final constants, object references, aliases, and simple memory reasoning.",
        "difficultyReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "acceptanceTests": [
          "Normal case: complete \u201cMath Helper\u201d with the sample or obvious happy-path values.",
          "Edge case: Create two objects and check what is shared vs separate.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for static utility.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for static utility.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL2-010",
        "level": "level2Extra",
        "topic": "Graphics",
        "skill": "coordinate math",
        "title": "Centered Box",
        "scenario": "Build drawing code that centers a box in a 300x200 panel.",
        "goal": "Draw a 100x60 rectangle centered in the panel.",
        "starter": "protected void paintComponent(Graphics g) {\n    super.paintComponent(g);\n    // hinted build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with coordinate math.",
          "Plan coordinates and drawing order before writing paintComponent code.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Remember: x increases to the right, y increases downward.",
          "Call super.paintComponent(g) before custom drawing in Swing."
        ],
        "modelPlan": "Use the coordinate math idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "protected void paintComponent(Graphics g) {\n    super.paintComponent(g);\n    int x = (300 - 100) / 2;\n    int y = (200 - 60) / 2;\n    g.drawRect(x, y, 100, 60);\n}\n",
        "explanation": "Centering subtracts the shape size from the panel size, then divides by 2.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "coordinate math",
          "graphics",
          "mini-project"
        ],
        "studyGuideFocus": "Midterm/final focus: paintComponent, Graphics methods, coordinates, colors, repaint, and drawing order.",
        "difficultyReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "acceptanceTests": [
          "Normal case: complete \u201cCentered Box\u201d with the sample or obvious happy-path values.",
          "Edge case: Check x/y coordinates from the top-left corner.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for coordinate math.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for coordinate math.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL2-011",
        "level": "level2Extra",
        "topic": "Records vs Classes",
        "skill": "record methods",
        "title": "Name Record",
        "scenario": "Build a Name record with fullName.",
        "goal": "Store first and last, then return first + space + last.",
        "starter": "public record Name(String first, String last) {\n    // hinted build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Identify which CS202 topics are being combined; start with record methods.",
          "Write the class/record header, fields, and constructor before behavior methods.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Records are best for simple data carriers.",
          "Record accessors use the field name, like name(), not getName()."
        ],
        "modelPlan": "Use the record methods idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public record Name(String first, String last) {\n    public String fullName() {\n        return first + \" \" + last;\n    }\n}\n",
        "explanation": "A record can still have methods that use its components.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "record methods",
          "records",
          "mini-project"
        ],
        "studyGuideFocus": "Final focus: record syntax, generated constructor/accessors, immutability, and when a normal class is better.",
        "difficultyReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "acceptanceTests": [
          "Normal case: complete \u201cName Record\u201d with the sample or obvious happy-path values.",
          "Edge case: Check the generated accessor names.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for record methods.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for record methods.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL2-012",
        "level": "level2Extra",
        "topic": "Final Exam Mixed Practice",
        "skill": "composition",
        "title": "Team Roster",
        "scenario": "Build a Team with an ArrayList of player names.",
        "goal": "Add addPlayer, hasPlayer, and size methods.",
        "starter": "public class Team {\n    // hinted build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Split the build into smaller parts: input/state, processing, output, and test.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Separate the task into small CS202 ideas before coding.",
          "After writing code, trace one complete sample by hand."
        ],
        "modelPlan": "Use the composition idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public class Team {\n    private ArrayList<String> players = new ArrayList<>();\n\n    public void addPlayer(String name) {\n        players.add(name);\n    }\n\n    public boolean hasPlayer(String name) {\n        return players.contains(name);\n    }\n\n    public int size() {\n        return players.size();\n    }\n}\n",
        "explanation": "The Team object owns the list and exposes small useful methods.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "composition",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "acceptanceTests": [
          "Normal case: complete \u201cTeam Roster\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for composition.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for composition.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL2-013",
        "level": "level2Extra",
        "topic": "Final Exam Mixed Practice",
        "skill": "sorting logic",
        "title": "Smallest Missing",
        "scenario": "Build a method that returns the smallest value in an array.",
        "goal": "Return 0 if the array is empty.",
        "starter": "public static int smallest(int[] values) {\n    // hinted build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Split the build into smaller parts: input/state, processing, output, and test.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Separate the task into small CS202 ideas before coding.",
          "After writing code, trace one complete sample by hand."
        ],
        "modelPlan": "Use the sorting logic idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public static int smallest(int[] values) {\n    if (values.length == 0) {\n        return 0;\n    }\n    int smallest = values[0];\n    for (int value : values) {\n        if (value < smallest) {\n            smallest = value;\n        }\n    }\n    return smallest;\n}\n",
        "explanation": "Initialize from the first real value before comparing.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "sorting logic",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "acceptanceTests": [
          "Normal case: complete \u201cSmallest Missing\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for sorting logic.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for sorting logic.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL2-014",
        "level": "level2Extra",
        "topic": "Final Exam Mixed Practice",
        "skill": "state machine",
        "title": "Door Lock",
        "scenario": "Build a Door class with lock/unlock/open behavior.",
        "goal": "open should only work when the door is unlocked.",
        "starter": "public class Door {\n    // hinted build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Split the build into smaller parts: input/state, processing, output, and test.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Separate the task into small CS202 ideas before coding.",
          "After writing code, trace one complete sample by hand."
        ],
        "modelPlan": "Use the state machine idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public class Door {\n    private boolean locked = true;\n    private boolean open = false;\n\n    public void unlock() { locked = false; }\n    public void lock() { locked = true; }\n\n    public void open() {\n        if (!locked) {\n            open = true;\n        }\n    }\n}\n",
        "explanation": "Object methods should respect the state rules of the object.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "state machine",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "acceptanceTests": [
          "Normal case: complete \u201cDoor Lock\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for state machine.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for state machine.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL2-015",
        "level": "level2Extra",
        "topic": "Final Exam Mixed Practice",
        "skill": "string loop",
        "title": "Vowel Counter",
        "scenario": "Build a method that counts vowels in a string.",
        "goal": "Count a, e, i, o, u in uppercase or lowercase text.",
        "starter": "public static int countVowels(String text) {\n    // hinted build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [
          "Split the build into smaller parts: input/state, processing, output, and test.",
          "Write the data/state needed before writing behavior.",
          "Build one working version, then add the required edge-case/test explanation."
        ],
        "hints": [
          "Separate the task into small CS202 ideas before coding.",
          "After writing code, trace one complete sample by hand."
        ],
        "modelPlan": "Use the string loop idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public static int countVowels(String text) {\n    int count = 0;\n    String lower = text.toLowerCase();\n    for (int i = 0; i < lower.length(); i++) {\n        char ch = lower.charAt(i);\n        if (\"aeiou\".indexOf(ch) >= 0) {\n            count++;\n        }\n    }\n    return count;\n}\n",
        "explanation": "Lowercasing once makes the comparison simpler.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "string loop",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 2 quality target: less guidance so you practice choosing the pattern yourself.",
        "acceptanceTests": [
          "Normal case: complete \u201cVowel Counter\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for string loop.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for string loop.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      }
    ],
    "level3": [
      {
        "id": "BCL3-001",
        "level": "level3Solo",
        "topic": "Final Exam Mixed Practice",
        "skill": "multi-class design",
        "title": "Mini Gradebook",
        "scenario": "Design a Gradebook with StudentScore objects and an average method.",
        "goal": "Create a small class design that stores scores and computes an average.",
        "starter": "// Solo build: sketch the classes and methods.\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [],
        "hints": [],
        "modelPlan": "Use the multi-class design idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "class StudentScore {\n    private String name;\n    private int score;\n\n    public StudentScore(String name, int score) {\n        this.name = name;\n        this.score = score;\n    }\n\n    public int getScore() { return score; }\n}\n\nclass Gradebook {\n    private ArrayList<StudentScore> scores = new ArrayList<>();\n\n    public void addScore(StudentScore score) {\n        scores.add(score);\n    }\n\n    public double average() {\n        if (scores.isEmpty()) { return 0.0; }\n        int total = 0;\n        for (StudentScore score : scores) {\n            total += score.getScore();\n        }\n        return (double) total / scores.size();\n    }\n}\n",
        "explanation": "This combines classes, ArrayList traversal, getters, and empty-list safety.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "multi-class design",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "acceptanceTests": [
          "Normal case: complete \u201cMini Gradebook\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for multi-class design.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for multi-class design.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL3-002",
        "level": "level3Solo",
        "topic": "Final Exam Mixed Practice",
        "skill": "game loop state",
        "title": "Simple Enemy Patrol",
        "scenario": "Build an Enemy that moves between left and right boundaries.",
        "goal": "Fields should include x, speed, leftLimit, rightLimit. Update reverses direction at boundaries.",
        "starter": "public class Enemy {\n    // solo build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [],
        "hints": [],
        "modelPlan": "Use the game loop state idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public class Enemy {\n    private int x;\n    private int speed;\n    private int leftLimit;\n    private int rightLimit;\n\n    public Enemy(int x, int speed, int leftLimit, int rightLimit) {\n        this.x = x;\n        this.speed = speed;\n        this.leftLimit = leftLimit;\n        this.rightLimit = rightLimit;\n    }\n\n    public void update() {\n        x += speed;\n        if (x <= leftLimit || x >= rightLimit) {\n            speed = -speed;\n        }\n    }\n}\n",
        "explanation": "The update method changes position and flips direction when it hits a boundary.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "game loop state",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "acceptanceTests": [
          "Normal case: complete \u201cSimple Enemy Patrol\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for game loop state.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for game loop state.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL3-003",
        "level": "level3Solo",
        "topic": "Final Exam Mixed Practice",
        "skill": "records + classes",
        "title": "Course Planner",
        "scenario": "Use a Course record inside a Planner class.",
        "goal": "Planner stores courses and returns total credits.",
        "starter": "public record Course(String code, int credits) {}\n\nclass Planner {\n    // solo build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [],
        "hints": [],
        "modelPlan": "Use the records + classes idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public record Course(String code, int credits) {}\n\nclass Planner {\n    private ArrayList<Course> courses = new ArrayList<>();\n\n    public void add(Course course) {\n        courses.add(course);\n    }\n\n    public int totalCredits() {\n        int total = 0;\n        for (Course course : courses) {\n            total += course.credits();\n        }\n        return total;\n    }\n}\n",
        "explanation": "Records provide accessors like credits(), and the class manages the collection.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "records + classes",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "acceptanceTests": [
          "Normal case: complete \u201cCourse Planner\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for records + classes.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for records + classes.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL3-004",
        "level": "level3Solo",
        "topic": "Final Exam Mixed Practice",
        "skill": "file + parsing",
        "title": "CSV Score Reader",
        "scenario": "Build the core logic for reading score lines.",
        "goal": "Each line is name,score. Return the total score for valid lines.",
        "starter": "public static int totalScores(Scanner input) {\n    // solo build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [],
        "hints": [],
        "modelPlan": "Use the file + parsing idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public static int totalScores(Scanner input) {\n    int total = 0;\n    while (input.hasNextLine()) {\n        String line = input.nextLine();\n        String[] parts = line.split(\",\");\n        if (parts.length == 2) {\n            total += Integer.parseInt(parts[1].trim());\n        }\n    }\n    return total;\n}\n",
        "explanation": "This combines file-style looping, split, array indexing, and parsing.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "file + parsing",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "acceptanceTests": [
          "Normal case: complete \u201cCSV Score Reader\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for file + parsing.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for file + parsing.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL3-005",
        "level": "level3Solo",
        "topic": "Final Exam Mixed Practice",
        "skill": "inheritance + collection",
        "title": "Shape List",
        "scenario": "Build a method that sums area for many Shape objects.",
        "goal": "Use polymorphism so each Shape decides its own area.",
        "starter": "public static double totalArea(ArrayList<Shape> shapes) {\n    // solo build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [],
        "hints": [],
        "modelPlan": "Use the inheritance + collection idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public static double totalArea(ArrayList<Shape> shapes) {\n    double total = 0;\n    for (Shape shape : shapes) {\n        total += shape.area();\n    }\n    return total;\n}\n",
        "explanation": "The loop uses the abstract/superclass type while runtime dispatch calls the right area method.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "inheritance + collection",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "acceptanceTests": [
          "Normal case: complete \u201cShape List\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for inheritance + collection.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for inheritance + collection.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL3-006",
        "level": "level3Solo",
        "topic": "Final Exam Mixed Practice",
        "skill": "graphics + state",
        "title": "Moving Square Panel",
        "scenario": "Sketch the fields and methods for a moving square.",
        "goal": "Use x/y fields, move methods, and paintComponent to draw the square.",
        "starter": "public class SquarePanel extends JPanel {\n    // solo build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [],
        "hints": [],
        "modelPlan": "Use the graphics + state idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public class SquarePanel extends JPanel {\n    private int x = 50;\n    private int y = 50;\n\n    public void moveRight() {\n        x += 5;\n        repaint();\n    }\n\n    @Override\n    protected void paintComponent(Graphics g) {\n        super.paintComponent(g);\n        g.fillRect(x, y, 30, 30);\n    }\n}\n",
        "explanation": "State fields remember the square position; repaint asks Swing to redraw it.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "graphics + state",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "acceptanceTests": [
          "Normal case: complete \u201cMoving Square Panel\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for graphics + state.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for graphics + state.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL3-007",
        "level": "level3Solo",
        "topic": "Final Exam Mixed Practice",
        "skill": "algorithm design",
        "title": "Unique Count",
        "scenario": "Build a method that counts unique words without a Set.",
        "goal": "Use an ArrayList to track words already seen.",
        "starter": "public static int uniqueCount(String[] words) {\n    // solo build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [],
        "hints": [],
        "modelPlan": "Use the algorithm design idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public static int uniqueCount(String[] words) {\n    ArrayList<String> seen = new ArrayList<>();\n    for (String word : words) {\n        if (!seen.contains(word)) {\n            seen.add(word);\n        }\n    }\n    return seen.size();\n}\n",
        "explanation": "The seen list grows only when a word has not appeared before.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "algorithm design",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "acceptanceTests": [
          "Normal case: complete \u201cUnique Count\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for algorithm design.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for algorithm design.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL3-008",
        "level": "level3Solo",
        "topic": "Final Exam Mixed Practice",
        "skill": "constructor + validation",
        "title": "Validated Rectangle",
        "scenario": "Build a Rectangle that rejects negative sizes by using 0 instead.",
        "goal": "Constructor should store width and height safely; add area().",
        "starter": "public class Rectangle {\n    // solo build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [],
        "hints": [],
        "modelPlan": "Use the constructor + validation idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public class Rectangle {\n    private int width;\n    private int height;\n\n    public Rectangle(int width, int height) {\n        this.width = Math.max(0, width);\n        this.height = Math.max(0, height);\n    }\n\n    public int area() {\n        return width * height;\n    }\n}\n",
        "explanation": "The constructor protects the object from invalid starting state.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "constructor + validation",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "acceptanceTests": [
          "Normal case: complete \u201cValidated Rectangle\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for constructor + validation.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for constructor + validation.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL3-009",
        "level": "level3Solo",
        "topic": "Final Exam Mixed Practice",
        "skill": "interface design",
        "title": "Rewardable Interface",
        "scenario": "Build a Rewardable interface and a BonusQuest class.",
        "goal": "Rewardable has points(); BonusQuest stores base points and returns double points.",
        "starter": "interface Rewardable {\n    // solo build\n}\n\nclass BonusQuest {\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [],
        "hints": [],
        "modelPlan": "Use the interface design idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "interface Rewardable {\n    int points();\n}\n\nclass BonusQuest implements Rewardable {\n    private int basePoints;\n\n    public BonusQuest(int basePoints) {\n        this.basePoints = basePoints;\n    }\n\n    @Override\n    public int points() {\n        return basePoints * 2;\n    }\n}\n",
        "explanation": "The interface promises a method; the class decides how to calculate it.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "interface design",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "acceptanceTests": [
          "Normal case: complete \u201cRewardable Interface\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for interface design.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for interface design.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL3-010",
        "level": "level3Solo",
        "topic": "Final Exam Mixed Practice",
        "skill": "object aliasing",
        "title": "Inventory Copy",
        "scenario": "Build a copy method for an inventory list.",
        "goal": "Return a new ArrayList with the same item strings.",
        "starter": "public static ArrayList<String> copyInventory(ArrayList<String> items) {\n    // solo build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [],
        "hints": [],
        "modelPlan": "Use the object aliasing idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public static ArrayList<String> copyInventory(ArrayList<String> items) {\n    ArrayList<String> copy = new ArrayList<>();\n    for (String item : items) {\n        copy.add(item);\n    }\n    return copy;\n}\n",
        "explanation": "The returned list is a different object, so list changes do not alias.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "object aliasing",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "acceptanceTests": [
          "Normal case: complete \u201cInventory Copy\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for object aliasing.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for object aliasing.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL3-011",
        "level": "level3Solo",
        "topic": "Final Exam Mixed Practice",
        "skill": "nested loops",
        "title": "Grid Border Count",
        "scenario": "Count cells on the border of a rectangular grid.",
        "goal": "Return how many positions are in the first row, last row, first column, or last column.",
        "starter": "public static int borderCount(int rows, int cols) {\n    // solo build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [],
        "hints": [],
        "modelPlan": "Use the nested loops idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public static int borderCount(int rows, int cols) {\n    int count = 0;\n    for (int r = 0; r < rows; r++) {\n        for (int c = 0; c < cols; c++) {\n            if (r == 0 || r == rows - 1 || c == 0 || c == cols - 1) {\n                count++;\n            }\n        }\n    }\n    return count;\n}\n",
        "explanation": "The condition identifies every border cell while avoiding double-count problems.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "nested loops",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "acceptanceTests": [
          "Normal case: complete \u201cGrid Border Count\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for nested loops.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for nested loops.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL3-012",
        "level": "level3Solo",
        "topic": "Final Exam Mixed Practice",
        "skill": "method overloading",
        "title": "Formatter",
        "scenario": "Build overloaded format methods.",
        "goal": "One method formats a name, another formats name plus id.",
        "starter": "public class Formatter {\n    // solo build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [],
        "hints": [],
        "modelPlan": "Use the method overloading idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public class Formatter {\n    public String format(String name) {\n        return name.trim();\n    }\n\n    public String format(String name, int id) {\n        return format(name) + \" #\" + id;\n    }\n}\n",
        "explanation": "Overloading uses the same method name with different parameter lists.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "method overloading",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "acceptanceTests": [
          "Normal case: complete \u201cFormatter\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for method overloading.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for method overloading.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL3-013",
        "level": "level3Solo",
        "topic": "Final Exam Mixed Practice",
        "skill": "null + equals",
        "title": "Find Student",
        "scenario": "Build a method that finds a student by name.",
        "goal": "Return the matching Student or null if no name matches.",
        "starter": "public static Student find(ArrayList<Student> students, String name) {\n    // solo build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [],
        "hints": [],
        "modelPlan": "Use the null + equals idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public static Student find(ArrayList<Student> students, String name) {\n    for (Student student : students) {\n        if (student.getName().equals(name)) {\n            return student;\n        }\n    }\n    return null;\n}\n",
        "explanation": "Return as soon as the match is found; return null only after the loop finishes.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "null + equals",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "acceptanceTests": [
          "Normal case: complete \u201cFind Student\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for null + equals.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for null + equals.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL3-014",
        "level": "level3Solo",
        "topic": "Final Exam Mixed Practice",
        "skill": "encapsulation + toString",
        "title": "Task List Item",
        "scenario": "Build a Task with complete/incomplete state.",
        "goal": "Add complete(), isComplete(), and toString().",
        "starter": "public class Task {\n    // solo build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [],
        "hints": [],
        "modelPlan": "Use the encapsulation + toString idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public class Task {\n    private String title;\n    private boolean complete;\n\n    public Task(String title) {\n        this.title = title;\n    }\n\n    public void complete() {\n        complete = true;\n    }\n\n    public boolean isComplete() {\n        return complete;\n    }\n\n    @Override\n    public String toString() {\n        return (complete ? \"[x] \" : \"[ ] \") + title;\n    }\n}\n",
        "explanation": "toString can use state to show the object in a readable way.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "encapsulation + toString",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "acceptanceTests": [
          "Normal case: complete \u201cTask List Item\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for encapsulation + toString.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for encapsulation + toString.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      },
      {
        "id": "BCL3-015",
        "level": "level3Solo",
        "topic": "Final Exam Mixed Practice",
        "skill": "full mini design",
        "title": "Review Session Tracker",
        "scenario": "Build a class that records topics studied and total minutes.",
        "goal": "Use an ArrayList<String> topics and an int minutes. Add methods to add study time and report status.",
        "starter": "public class ReviewSession {\n    // solo build\n}\n",
        "deliverables": [
          "Plan the classes, methods, fields, or data structures before coding.",
          "Write a small but complete CS202-level Java solution or code sketch.",
          "Provide a normal test and one edge/boundary test that proves the build works."
        ],
        "milestones": [],
        "hints": [],
        "modelPlan": "Use the full mini design idea as the center of the build. First identify state/data, then write the smallest methods/classes needed, then test the normal case and one boundary/edge case.",
        "modelAnswer": "public class ReviewSession {\n    private ArrayList<String> topics = new ArrayList<>();\n    private int minutes;\n\n    public void study(String topic, int amount) {\n        topics.add(topic);\n        minutes += amount;\n    }\n\n    public int getMinutes() { return minutes; }\n\n    public String summary() {\n        return topics.size() + \" topics, \" + minutes + \" minutes\";\n    }\n}\n",
        "explanation": "This final mini-design combines state, collection, methods, and formatted output.",
        "commonMistake": "Trying to write everything at once instead of building fields, methods, and tests in small pieces.",
        "extension": "Add one extra test case or one small feature after the base version works.",
        "concepts": [
          "full mini design",
          "final",
          "mini-project"
        ],
        "studyGuideFocus": "Final mixed focus: combine tracing, debugging, coding, OOP, arrays, methods, and Java vocabulary in one realistic task.",
        "difficultyReason": "Level 3 quality target: final-style independence with no hints before the official review.",
        "acceptanceTests": [
          "Normal case: complete \u201cReview Session Tracker\u201d with the sample or obvious happy-path values.",
          "Edge case: Trace the sample by hand before writing code.",
          "Code review case: explain which method/class owns each responsibility."
        ],
        "rubric": [
          "Breaks the build into clear CS202 pieces for full mini design.",
          "Includes readable code with fields/methods/classes separated logically.",
          "Explains at least one test case that proves the build works, including a boundary or edge case."
        ],
        "reflectionPrompt": "Explain how your plan separates state, behavior, input/output, or helper methods for full mini design.",
        "examHabit": "Plan before coding, write the smallest complete version, then test one normal case and one edge case."
      }
    ]
  },
  "qualityPass": {
    "name": "Midterm-to-Final Build Quality Pass",
    "goal": "Make Build Challenge mini-projects more realistic by adding acceptance tests, rubrics, topic focus, and stronger planning prompts.",
    "coverage": [
      "Data and control flow",
      "Methods and arrays",
      "Object-oriented design",
      "Final mixed mini-builds"
    ]
  }
};
})();
