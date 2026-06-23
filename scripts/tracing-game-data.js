// Tracing Game data for CS202 Reviewer Gym.
// Base problems are reused across support modes; extras are distinct per mode.
(function () {
  window.TRACING_GAME_DATA = {
  "version": 1,
  "modes": {
    "level1": {
      "label": "Guided",
      "clues": 2
    },
    "level2": {
      "label": "Hinted",
      "clues": 1
    },
    "level3": {
      "label": "Solo",
      "clues": 0
    }
  },
  "base": [
    {
      "id": "base-001",
      "title": "Integer division and modulo",
      "topic": "Java Basics",
      "skill": "integer math and modulo",
      "code": "int a = 17;\nint b = 5;\nSystem.out.println(a / b);\nSystem.out.println(a % b);",
      "question": "What prints?",
      "answer": "3\n2",
      "answerAliases": [],
      "explanation": "Integer division drops the decimal part, so 17 / 5 is 3. The remainder after taking out 15 is 2.",
      "commonMistake": "Writing 3.4 for 17 / 5. Java keeps this as integer division because both operands are int.",
      "clues": [
        "Check the data types first.",
        "Modulo gives the remainder after division."
      ],
      "examTags": [
        "midterm1",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-002",
      "title": "Loop total",
      "topic": "Conditions, Loops, and Operators",
      "skill": "for-loop accumulation",
      "code": "int total = 0;\nfor (int i = 1; i <= 4; i++) {\n    total += i;\n}\nSystem.out.println(total);",
      "question": "What prints?",
      "answer": "10",
      "answerAliases": [],
      "explanation": "The loop adds 1 + 2 + 3 + 4, so total becomes 10.",
      "commonMistake": "Stopping at 3 because you read i < 4 instead of i <= 4.",
      "clues": [
        "Write total after each iteration.",
        "The loop includes i = 4."
      ],
      "examTags": [
        "midterm1",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-003",
      "title": "While loop countdown",
      "topic": "Conditions, Loops, and Operators",
      "skill": "while-loop update order",
      "code": "int x = 6;\nwhile (x > 1) {\n    x -= 2;\n}\nSystem.out.println(x);",
      "question": "What prints?",
      "answer": "0",
      "answerAliases": [],
      "explanation": "x goes 6 -> 4 -> 2 -> 0. When x is 0, x > 1 is false.",
      "commonMistake": "Stopping at 2 because you forget the body still runs when x starts the iteration at 2.",
      "clues": [
        "Track x at the end of each loop body.",
        "The condition is checked before each new iteration."
      ],
      "examTags": [
        "midterm1",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-004",
      "title": "Boolean branch",
      "topic": "Conditions, Loops, and Operators",
      "skill": "boolean expressions",
      "code": "int score = 82;\nboolean late = true;\nif (score >= 90 || !late) {\n    System.out.println(\"A\");\n} else if (score >= 80 && late) {\n    System.out.println(\"B-late\");\n} else {\n    System.out.println(\"Review\");\n}",
      "question": "What prints?",
      "answer": "B-late",
      "answerAliases": [],
      "explanation": "The first condition is false because score >= 90 is false and !late is false. The else-if is true because score >= 80 and late are both true.",
      "commonMistake": "Treating !late as true even though late is true.",
      "clues": [
        "Evaluate !late carefully.",
        "The second condition uses &&, so both parts must be true."
      ],
      "examTags": [
        "midterm1",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-005",
      "title": "Switch fall-through",
      "topic": "Switch Statements and Expressions",
      "skill": "switch fall-through",
      "code": "int day = 2;\nswitch (day) {\n    case 1 -> System.out.println(\"Mon\");\n    case 2 -> System.out.println(\"Tue\");\n    default -> System.out.println(\"Other\");\n}",
      "question": "What prints?",
      "answer": "Tue",
      "answerAliases": [],
      "explanation": "This is a switch expression-style arrow case. The matching case 2 prints Tue and does not fall through.",
      "commonMistake": "Thinking all switch cases fall through. Arrow switch cases do not.",
      "clues": [
        "Look at whether the switch uses -> or colon cases.",
        "The matching value is 2."
      ],
      "examTags": [
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-006",
      "title": "Array mutation",
      "topic": "Arrays and ArrayLists",
      "skill": "array indexing and mutation",
      "code": "int[] nums = {2, 4, 6};\nnums[1] = nums[0] + nums[2];\nSystem.out.println(nums[1]);",
      "question": "What prints?",
      "answer": "8",
      "answerAliases": [],
      "explanation": "nums[0] is 2 and nums[2] is 6, so nums[1] becomes 8.",
      "commonMistake": "Forgetting indexes start at 0 and thinking nums[1] is the first element.",
      "clues": [
        "Write the indexes over the array values.",
        "nums[1] is the middle element."
      ],
      "examTags": [
        "midterm1",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-007",
      "title": "Array loop output",
      "topic": "Arrays and ArrayLists",
      "skill": "array traversal",
      "code": "int[] values = {3, 1, 4};\nfor (int i = values.length - 1; i >= 0; i--) {\n    System.out.print(values[i]);\n}",
      "question": "What prints?",
      "answer": "413",
      "answerAliases": [],
      "explanation": "The loop starts at index 2 and moves backward: values[2] is 4, values[1] is 1, values[0] is 3.",
      "commonMistake": "Printing 314 because you ignore that the loop starts at the last index.",
      "clues": [
        "The first index used is values.length - 1.",
        "No spaces or newlines are printed."
      ],
      "examTags": [
        "midterm1",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-008",
      "title": "ArrayList remove",
      "topic": "Arrays and ArrayLists",
      "skill": "ArrayList index shifting",
      "code": "ArrayList<String> names = new ArrayList<>();\nnames.add(\"Ari\");\nnames.add(\"Bo\");\nnames.add(\"Cy\");\nnames.remove(1);\nSystem.out.println(names.get(1));",
      "question": "What prints?",
      "answer": "Cy",
      "answerAliases": [],
      "explanation": "remove(1) removes Bo. Cy shifts into index 1, so names.get(1) prints Cy.",
      "commonMistake": "Thinking remove(1) removes the value \"1\" or that Cy stays at index 2.",
      "clues": [
        "After remove, the later elements shift left.",
        "Index 1 originally holds Bo."
      ],
      "examTags": [
        "midterm2",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-009",
      "title": "Method return trace",
      "topic": "Methods",
      "skill": "parameters and return values",
      "code": "public static int addTwice(int x) {\n    x += 2;\n    return x * 2;\n}\nSystem.out.println(addTwice(3));",
      "question": "What prints?",
      "answer": "10",
      "answerAliases": [],
      "explanation": "x starts as 3, becomes 5, then returns 5 * 2.",
      "commonMistake": "Using the original 3 in the return after x was changed.",
      "clues": [
        "Parameters are local variables inside the method.",
        "Trace x before the return line."
      ],
      "examTags": [
        "midterm2",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-010",
      "title": "String split count",
      "topic": "Java Basics",
      "skill": "String split",
      "code": "String text = \"red,blue,green\";\nString[] parts = text.split(\",\");\nSystem.out.println(parts.length);\nSystem.out.println(parts[0]);",
      "question": "What prints?",
      "answer": "3\nred",
      "answerAliases": [],
      "explanation": "Splitting by comma creates three pieces: red, blue, and green. The first index is 0, so parts[0] is red.",
      "commonMistake": "Thinking the first item is at index 1.",
      "clues": [
        "split(\",\") separates at commas.",
        "Arrays start at index 0."
      ],
      "examTags": [
        "midterm1",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-011",
      "title": "2D array diagonal",
      "topic": "Arrays and ArrayLists",
      "skill": "2D array indexing",
      "code": "int[][] grid = {{1, 2}, {3, 4}};\nint sum = grid[0][0] + grid[1][1];\nSystem.out.println(sum);",
      "question": "What prints?",
      "answer": "5",
      "answerAliases": [],
      "explanation": "grid[0][0] is 1 and grid[1][1] is 4, so the sum is 5.",
      "commonMistake": "Mixing row and column positions or using grid[1][0] accidentally.",
      "clues": [
        "First bracket is the row.",
        "This adds the top-left and bottom-right values."
      ],
      "examTags": [
        "midterm1",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-012",
      "title": "Constructor state",
      "topic": "Constructors",
      "skill": "constructor initializes fields",
      "code": "class Pet {\n    String name;\n    Pet(String n) {\n        name = n;\n    }\n}\nPet p = new Pet(\"Milo\");\nSystem.out.println(p.name);",
      "question": "What prints?",
      "answer": "Milo",
      "answerAliases": [],
      "explanation": "The constructor receives \"Milo\" as n and assigns it to the name field.",
      "commonMistake": "Thinking the field stays null even though the constructor assigns it.",
      "clues": [
        "new Pet(\"Milo\") calls the constructor.",
        "The field name receives n."
      ],
      "examTags": [
        "midterm2",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-013",
      "title": "Field versus local",
      "topic": "Classes and Objects",
      "skill": "fields vs locals",
      "code": "class Box {\n    int size = 5;\n    void change() {\n        int size = 9;\n    }\n}\nBox b = new Box();\nb.change();\nSystem.out.println(b.size);",
      "question": "What prints?",
      "answer": "5",
      "answerAliases": [],
      "explanation": "The method creates a local variable named size. It does not change the field b.size.",
      "commonMistake": "Thinking the local size automatically changes the object field.",
      "clues": [
        "Look for int size inside the method.",
        "A local variable can hide a field with the same name."
      ],
      "examTags": [
        "midterm2",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-014",
      "title": "Static counter",
      "topic": "Static, Final, Memory, and Garbage Collection",
      "skill": "static field sharing",
      "code": "class Ticket {\n    static int count = 0;\n    Ticket() { count++; }\n}\nnew Ticket();\nnew Ticket();\nSystem.out.println(Ticket.count);",
      "question": "What prints?",
      "answer": "2",
      "answerAliases": [],
      "explanation": "count is static, so all Ticket objects share it. The constructor runs twice, so count becomes 2.",
      "commonMistake": "Thinking each object has its own count of 1.",
      "clues": [
        "static belongs to the class.",
        "The constructor is called two times."
      ],
      "examTags": [
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-015",
      "title": "Final constant calculation",
      "topic": "Static, Final, Memory, and Garbage Collection",
      "skill": "final constants",
      "code": "final int BONUS = 5;\nint score = 70;\nscore += BONUS;\nSystem.out.println(score);",
      "question": "What prints?",
      "answer": "75",
      "answerAliases": [],
      "explanation": "BONUS is a constant value of 5. Adding it to score changes score to 75.",
      "commonMistake": "Thinking final means score cannot change. Only BONUS is final here.",
      "clues": [
        "Which variable is final?",
        "score is still a normal int."
      ],
      "examTags": [
        "midterm1",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-016",
      "title": "Overload choice",
      "topic": "Methods",
      "skill": "method overloading",
      "code": "static void show(int x) { System.out.println(\"int\"); }\nstatic void show(String x) { System.out.println(\"String\"); }\nshow(\"7\");",
      "question": "What prints?",
      "answer": "String",
      "answerAliases": [],
      "explanation": "The argument \"7\" is a String literal, so Java chooses show(String).",
      "commonMistake": "Seeing 7 and treating it like an int even though quotes make it a String.",
      "clues": [
        "Quotes matter.",
        "Overloading is chosen by parameter type."
      ],
      "examTags": [
        "midterm2",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-017",
      "title": "Override dispatch",
      "topic": "Inheritance and Polymorphism",
      "skill": "polymorphism and overriding",
      "code": "class Animal { String speak() { return \"?\"; } }\nclass Dog extends Animal { String speak() { return \"woof\"; } }\nAnimal a = new Dog();\nSystem.out.println(a.speak());",
      "question": "What prints?",
      "answer": "woof",
      "answerAliases": [],
      "explanation": "The reference type is Animal, but the actual object is Dog. Overridden methods use the actual object type.",
      "commonMistake": "Using the reference type Animal to choose the method result.",
      "clues": [
        "Look at the object created after new.",
        "Overridden instance methods are polymorphic."
      ],
      "examTags": [
        "midterm2",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-018",
      "title": "Super constructor trace",
      "topic": "Inheritance and Polymorphism",
      "skill": "super constructor call",
      "code": "class A {\n    A() { System.out.print(\"A\"); }\n}\nclass B extends A {\n    B() { System.out.print(\"B\"); }\n}\nnew B();",
      "question": "What prints?",
      "answer": "AB",
      "answerAliases": [],
      "explanation": "Creating B first runs the superclass constructor A, then the B constructor body.",
      "commonMistake": "Printing B only because you forget the parent constructor runs first.",
      "clues": [
        "A subclass construction starts with its superclass part.",
        "System.out.print does not add a newline."
      ],
      "examTags": [
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-019",
      "title": "equals versus double equals",
      "topic": "equals(), ==, =, and toString()",
      "skill": "String equality",
      "code": "String a = new String(\"hi\");\nString b = new String(\"hi\");\nSystem.out.println(a == b);\nSystem.out.println(a.equals(b));",
      "question": "What prints?",
      "answer": "false\ntrue",
      "answerAliases": [],
      "explanation": "a and b are different String objects, so == is false. Their text is the same, so equals() is true.",
      "commonMistake": "Using == for meaningful object equality.",
      "clues": [
        "new creates separate objects.",
        "equals checks String content."
      ],
      "examTags": [
        "midterm2",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-020",
      "title": "toString in print",
      "topic": "equals(), ==, =, and toString()",
      "skill": "toString override",
      "code": "class Point {\n    int x;\n    Point(int x) { this.x = x; }\n    public String toString() { return \"Point:\" + x; }\n}\nSystem.out.println(new Point(4));",
      "question": "What prints?",
      "answer": "Point:4",
      "answerAliases": [],
      "explanation": "Printing an object calls its toString() method. This class returns Point:4.",
      "commonMistake": "Expecting a memory address even though toString() was overridden.",
      "clues": [
        "System.out.println can call toString() automatically.",
        "The constructor stores 4 in x."
      ],
      "examTags": [
        "midterm2",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-021",
      "title": "Null reference",
      "topic": "Exceptions, Files, and Null Pointers",
      "skill": "NullPointerException",
      "code": "String name = null;\nSystem.out.println(name.length());",
      "question": "What happens?",
      "answer": "NullPointerException",
      "answerAliases": [],
      "explanation": "name points to null, so calling length() on it causes a NullPointerException.",
      "commonMistake": "Thinking null is the same as an empty string.",
      "clues": [
        "Can you call a method on null?",
        "An empty string would be \"\", not null."
      ],
      "examTags": [
        "midterm2",
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-022",
      "title": "Try catch flow",
      "topic": "Exceptions, Files, and Null Pointers",
      "skill": "exception handling flow",
      "code": "try {\n    int x = 10 / 0;\n    System.out.println(\"done\");\n} catch (ArithmeticException e) {\n    System.out.println(\"caught\");\n}",
      "question": "What prints?",
      "answer": "caught",
      "answerAliases": [],
      "explanation": "10 / 0 throws ArithmeticException before printing done. The catch block handles it and prints caught.",
      "commonMistake": "Thinking done prints before the exception is thrown.",
      "clues": [
        "The exception happens on the division line.",
        "After the exception, control jumps to catch."
      ],
      "examTags": [
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-023",
      "title": "Record accessor",
      "topic": "Records vs Classes",
      "skill": "record generated methods",
      "code": "record Student(String name, int credits) {}\nStudent s = new Student(\"Kai\", 12);\nSystem.out.println(s.name());\nSystem.out.println(s.credits());",
      "question": "What prints?",
      "answer": "Kai\n12",
      "answerAliases": [],
      "explanation": "Records create accessor methods with the component names: name() and credits().",
      "commonMistake": "Trying to use getName() automatically. Records do not generate getName() style accessors.",
      "clues": [
        "Look at the component names in the record header.",
        "Record accessors use name(), not getName()."
      ],
      "examTags": [
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-024",
      "title": "Interface method call",
      "topic": "Interfaces and KeyListener",
      "skill": "interface reference and implementation",
      "code": "interface Printable { void print(); }\nclass Note implements Printable {\n    public void print() { System.out.println(\"note\"); }\n}\nPrintable p = new Note();\np.print();",
      "question": "What prints?",
      "answer": "note",
      "answerAliases": [],
      "explanation": "The Note object implements Printable, so the interface reference can call print(), and the Note version runs.",
      "commonMistake": "Thinking an interface reference cannot call implemented methods.",
      "clues": [
        "The variable type is the interface, but the object is Note.",
        "The class promises to implement print()."
      ],
      "examTags": [
        "final"
      ],
      "level": "base"
    },
    {
      "id": "base-025",
      "title": "Object reference alias",
      "topic": "Classes and Objects",
      "skill": "object references and aliasing",
      "code": "class Counter { int value; }\nCounter a = new Counter();\nCounter b = a;\nb.value = 7;\nSystem.out.println(a.value);",
      "question": "What prints?",
      "answer": "7",
      "answerAliases": [],
      "explanation": "a and b refer to the same Counter object. Changing b.value changes the object that a also sees.",
      "commonMistake": "Thinking b is a separate copy of the object.",
      "clues": [
        "b = a copies the reference, not the object.",
        "There is only one Counter object created."
      ],
      "examTags": [
        "midterm2",
        "final"
      ],
      "level": "base"
    }
  ],
  "extras": {
    "level1": [
      {
        "id": "l1-001",
        "title": "Print order",
        "topic": "Java Basics",
        "skill": "statement order",
        "code": "System.out.println(\"A\");\nSystem.out.println(\"B\");",
        "question": "What prints?",
        "answer": "A\nB",
        "answerAliases": [],
        "explanation": "Java executes these statements from top to bottom.",
        "commonMistake": "Expecting both words on one line even though println moves to a new line.",
        "clues": [
          "println adds a newline.",
          "Read statements in order."
        ],
        "examTags": [
          "midterm1"
        ],
        "level": "level1"
      },
      {
        "id": "l1-002",
        "title": "Shortcut add",
        "topic": "Conditions, Loops, and Operators",
        "skill": "shortcut operators",
        "code": "int x = 4;\nx += 3;\nSystem.out.println(x);",
        "question": "What prints?",
        "answer": "7",
        "answerAliases": [],
        "explanation": "x += 3 means x = x + 3.",
        "commonMistake": "Treating += as a comparison.",
        "clues": [
          "Rewrite x += 3 as x = x + 3.",
          "Start x at 4."
        ],
        "examTags": [
          "midterm1"
        ],
        "level": "level1"
      },
      {
        "id": "l1-003",
        "title": "Simple if",
        "topic": "Conditions, Loops, and Operators",
        "skill": "if condition",
        "code": "int age = 18;\nif (age >= 18) {\n    System.out.println(\"adult\");\n} else {\n    System.out.println(\"minor\");\n}",
        "question": "What prints?",
        "answer": "adult",
        "answerAliases": [],
        "explanation": "18 >= 18 is true, so the if branch runs.",
        "commonMistake": "Thinking greater than or equal excludes 18.",
        "clues": [
          ">= includes equality.",
          "Only one branch runs."
        ],
        "examTags": [
          "midterm1"
        ],
        "level": "level1"
      },
      {
        "id": "l1-004",
        "title": "Loop prints numbers",
        "topic": "Conditions, Loops, and Operators",
        "skill": "for-loop output",
        "code": "for (int i = 0; i < 3; i++) {\n    System.out.print(i);\n}",
        "question": "What prints?",
        "answer": "012",
        "answerAliases": [],
        "explanation": "i takes values 0, 1, and 2. The loop stops before 3.",
        "commonMistake": "Including 3 even though the condition is i < 3.",
        "clues": [
          "The loop starts at 0.",
          "System.out.print does not add spaces."
        ],
        "examTags": [
          "midterm1"
        ],
        "level": "level1"
      },
      {
        "id": "l1-005",
        "title": "Array first item",
        "topic": "Arrays and ArrayLists",
        "skill": "array indexing",
        "code": "String[] colors = {\"red\", \"blue\"};\nSystem.out.println(colors[0]);",
        "question": "What prints?",
        "answer": "red",
        "answerAliases": [],
        "explanation": "Index 0 is the first array element.",
        "commonMistake": "Using index 1 for the first item.",
        "clues": [
          "Arrays start at 0.",
          "colors[0] is first."
        ],
        "examTags": [
          "midterm1"
        ],
        "level": "level1"
      },
      {
        "id": "l1-006",
        "title": "Array length",
        "topic": "Arrays and ArrayLists",
        "skill": "array length",
        "code": "int[] nums = {8, 9, 10, 11};\nSystem.out.println(nums.length);",
        "question": "What prints?",
        "answer": "4",
        "answerAliases": [],
        "explanation": "There are four values in the array.",
        "commonMistake": "Thinking length is the last index. The last index is 3, but length is 4.",
        "clues": [
          "Count the items.",
          "length is not the last index."
        ],
        "examTags": [
          "midterm1"
        ],
        "level": "level1"
      },
      {
        "id": "l1-007",
        "title": "Method parameter",
        "topic": "Methods",
        "skill": "method call with parameter",
        "code": "static void greet(String name) {\n    System.out.println(\"Hi \" + name);\n}\ngreet(\"Mia\");",
        "question": "What prints?",
        "answer": "Hi Mia",
        "answerAliases": [],
        "explanation": "The argument \"Mia\" is copied into the parameter name.",
        "commonMistake": "Thinking name prints literally instead of its value.",
        "clues": [
          "The parameter receives the argument.",
          "String concatenation joins the text."
        ],
        "examTags": [
          "midterm2"
        ],
        "level": "level1"
      },
      {
        "id": "l1-008",
        "title": "Return value",
        "topic": "Methods",
        "skill": "method return",
        "code": "static int triple(int n) {\n    return n * 3;\n}\nSystem.out.println(triple(4));",
        "question": "What prints?",
        "answer": "12",
        "answerAliases": [],
        "explanation": "triple(4) returns 4 * 3.",
        "commonMistake": "Forgetting that the returned value is printed by println.",
        "clues": [
          "Find what the method returns.",
          "Then substitute the argument 4."
        ],
        "examTags": [
          "midterm2"
        ],
        "level": "level1"
      },
      {
        "id": "l1-009",
        "title": "Object field",
        "topic": "Classes and Objects",
        "skill": "field access",
        "code": "class Book { String title = \"Java\"; }\nBook b = new Book();\nSystem.out.println(b.title);",
        "question": "What prints?",
        "answer": "Java",
        "answerAliases": [],
        "explanation": "The new Book object has a title field initialized to Java.",
        "commonMistake": "Thinking the class name prints instead of the field value.",
        "clues": [
          "The object is b.",
          "b.title accesses the field."
        ],
        "examTags": [
          "midterm2"
        ],
        "level": "level1"
      },
      {
        "id": "l1-010",
        "title": "Constructor parameter",
        "topic": "Constructors",
        "skill": "constructor parameter assignment",
        "code": "class User {\n    String name;\n    User(String n) { name = n; }\n}\nUser u = new User(\"Ana\");\nSystem.out.println(u.name);",
        "question": "What prints?",
        "answer": "Ana",
        "answerAliases": [],
        "explanation": "The constructor stores the parameter n into the name field.",
        "commonMistake": "Thinking the field name stays null.",
        "clues": [
          "new User(\"Ana\") passes Ana as n.",
          "name = n assigns the field."
        ],
        "examTags": [
          "midterm2"
        ],
        "level": "level1"
      },
      {
        "id": "l1-011",
        "title": "Simple inheritance",
        "topic": "Inheritance and Polymorphism",
        "skill": "inheritance method access",
        "code": "class Parent { void say() { System.out.println(\"parent\"); } }\nclass Child extends Parent {}\nnew Child().say();",
        "question": "What prints?",
        "answer": "parent",
        "answerAliases": [],
        "explanation": "Child inherits say() from Parent.",
        "commonMistake": "Thinking the child cannot call parent methods unless it writes them again.",
        "clues": [
          "extends means Child inherits from Parent.",
          "Child did not override say()."
        ],
        "examTags": [
          "midterm2"
        ],
        "level": "level1"
      },
      {
        "id": "l1-012",
        "title": "Public private idea",
        "topic": "Classes and Objects",
        "skill": "access modifiers concept",
        "code": "class Safe {\n    private int code = 4;\n    int reveal() { return code; }\n}\nSystem.out.println(new Safe().reveal());",
        "question": "What prints?",
        "answer": "4",
        "answerAliases": [],
        "explanation": "The private field is accessible inside the class, and reveal() returns it.",
        "commonMistake": "Thinking private means the class itself cannot use the field.",
        "clues": [
          "private blocks outside access, not inside access.",
          "reveal() is inside Safe."
        ],
        "examTags": [
          "final"
        ],
        "level": "level1"
      },
      {
        "id": "l1-013",
        "title": "toString basic",
        "topic": "equals(), ==, =, and toString()",
        "skill": "toString",
        "code": "class Tag {\n    public String toString() { return \"tag\"; }\n}\nSystem.out.println(new Tag());",
        "question": "What prints?",
        "answer": "tag",
        "answerAliases": [],
        "explanation": "println calls toString() on the object.",
        "commonMistake": "Expecting Tag@something even though toString() exists.",
        "clues": [
          "Look for toString().",
          "println can use it automatically."
        ],
        "examTags": [
          "midterm2"
        ],
        "level": "level1"
      },
      {
        "id": "l1-014",
        "title": "Static method call",
        "topic": "Static, Final, Memory, and Garbage Collection",
        "skill": "static method",
        "code": "class MathHelp {\n    static int doubleIt(int x) { return x * 2; }\n}\nSystem.out.println(MathHelp.doubleIt(6));",
        "question": "What prints?",
        "answer": "12",
        "answerAliases": [],
        "explanation": "The static method is called on the class and returns 6 * 2.",
        "commonMistake": "Thinking an object must be created for every method call.",
        "clues": [
          "static methods can be called with the class name.",
          "doubleIt returns x * 2."
        ],
        "examTags": [
          "final"
        ],
        "level": "level1"
      },
      {
        "id": "l1-015",
        "title": "Switch default",
        "topic": "Switch Statements and Expressions",
        "skill": "switch default",
        "code": "int code = 9;\nswitch (code) {\n    case 1 -> System.out.println(\"one\");\n    case 2 -> System.out.println(\"two\");\n    default -> System.out.println(\"other\");\n}",
        "question": "What prints?",
        "answer": "other",
        "answerAliases": [],
        "explanation": "No case matches 9, so default runs.",
        "commonMistake": "Thinking nothing prints when no case matches.",
        "clues": [
          "Look for a matching case.",
          "default handles everything else."
        ],
        "examTags": [
          "final"
        ],
        "level": "level1"
      },
      {
        "id": "l1-016",
        "title": "ArrayList size",
        "topic": "Arrays and ArrayLists",
        "skill": "ArrayList size",
        "code": "ArrayList<Integer> list = new ArrayList<>();\nlist.add(5);\nlist.add(8);\nSystem.out.println(list.size());",
        "question": "What prints?",
        "answer": "2",
        "answerAliases": [],
        "explanation": "Two items were added to the ArrayList.",
        "commonMistake": "Using list.length instead of size mentally.",
        "clues": [
          "ArrayList uses size().",
          "Count the add calls."
        ],
        "examTags": [
          "midterm2"
        ],
        "level": "level1"
      },
      {
        "id": "l1-017",
        "title": "Record print",
        "topic": "Records vs Classes",
        "skill": "record toString",
        "code": "record Point(int x, int y) {}\nSystem.out.println(new Point(2, 3));",
        "question": "What prints?",
        "answer": "Point[x=2, y=3]",
        "answerAliases": [],
        "explanation": "Records get a generated toString() that includes the record name and components.",
        "commonMistake": "Expecting Point:2,3 like a custom toString.",
        "clues": [
          "Records generate toString automatically.",
          "The format includes component names."
        ],
        "examTags": [
          "final"
        ],
        "level": "level1"
      },
      {
        "id": "l1-018",
        "title": "Try no exception",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "try/catch no exception",
        "code": "try {\n    System.out.println(\"safe\");\n} catch (Exception e) {\n    System.out.println(\"caught\");\n}",
        "question": "What prints?",
        "answer": "safe",
        "answerAliases": [],
        "explanation": "No exception is thrown, so the catch block does not run.",
        "commonMistake": "Thinking catch always runs after try.",
        "clues": [
          "catch only runs if an exception is thrown.",
          "The try block just prints safe."
        ],
        "examTags": [
          "final"
        ],
        "level": "level1"
      },
      {
        "id": "l1-019",
        "title": "String length",
        "topic": "Java Basics",
        "skill": "String method",
        "code": "String word = \"Java\";\nSystem.out.println(word.length());",
        "question": "What prints?",
        "answer": "4",
        "answerAliases": [],
        "explanation": "The string Java has four characters.",
        "commonMistake": "Counting indexes instead of length.",
        "clues": [
          "length() counts characters.",
          "Java has J, a, v, a."
        ],
        "examTags": [
          "midterm1"
        ],
        "level": "level1"
      },
      {
        "id": "l1-020",
        "title": "Boolean not",
        "topic": "Conditions, Loops, and Operators",
        "skill": "boolean negation",
        "code": "boolean done = false;\nSystem.out.println(!done);",
        "question": "What prints?",
        "answer": "true",
        "answerAliases": [],
        "explanation": "! flips false to true.",
        "commonMistake": "Forgetting that ! means not.",
        "clues": [
          "done is false.",
          "! means the opposite."
        ],
        "examTags": [
          "midterm1"
        ],
        "level": "level1"
      },
      {
        "id": "l1-021",
        "title": "Simple cast",
        "topic": "Java Basics",
        "skill": "type casting",
        "code": "double price = 9.99;\nint dollars = (int) price;\nSystem.out.println(dollars);",
        "question": "What prints?",
        "answer": "9",
        "answerAliases": [],
        "explanation": "Casting double to int drops the decimal part.",
        "commonMistake": "Rounding 9.99 to 10. Java truncates here.",
        "clues": [
          "Casting to int cuts off the decimal.",
          "It does not round."
        ],
        "examTags": [
          "midterm1"
        ],
        "level": "level1"
      },
      {
        "id": "l1-022",
        "title": "Concatenation",
        "topic": "Java Basics",
        "skill": "String concatenation",
        "code": "int x = 2;\nSystem.out.println(\"x=\" + x);",
        "question": "What prints?",
        "answer": "x=2",
        "answerAliases": [],
        "explanation": "The string and int are joined into one output.",
        "commonMistake": "Thinking it prints x=x.",
        "clues": [
          "The variable x contributes its value.",
          "+ joins when one side is String."
        ],
        "examTags": [
          "midterm1"
        ],
        "level": "level1"
      },
      {
        "id": "l1-023",
        "title": "Break in loop",
        "topic": "Conditions, Loops, and Operators",
        "skill": "break",
        "code": "for (int i = 0; i < 5; i++) {\n    if (i == 2) break;\n    System.out.print(i);\n}",
        "question": "What prints?",
        "answer": "01",
        "answerAliases": [],
        "explanation": "The loop prints 0 and 1. When i is 2, break stops the loop before printing 2.",
        "commonMistake": "Printing 012 because you ignore break.",
        "clues": [
          "break exits the loop immediately.",
          "The print happens after the if."
        ],
        "examTags": [
          "final"
        ],
        "level": "level1"
      },
      {
        "id": "l1-024",
        "title": "Continue in loop",
        "topic": "Conditions, Loops, and Operators",
        "skill": "continue",
        "code": "for (int i = 0; i < 4; i++) {\n    if (i == 1) continue;\n    System.out.print(i);\n}",
        "question": "What prints?",
        "answer": "023",
        "answerAliases": [],
        "explanation": "continue skips the print when i is 1, then the loop continues.",
        "commonMistake": "Thinking continue stops the whole loop like break.",
        "clues": [
          "continue skips the rest of this iteration.",
          "Only i = 1 is skipped."
        ],
        "examTags": [
          "final"
        ],
        "level": "level1"
      },
      {
        "id": "l1-025",
        "title": "Default constructor value",
        "topic": "Constructors",
        "skill": "default field values",
        "code": "class Score { int value; }\nScore s = new Score();\nSystem.out.println(s.value);",
        "question": "What prints?",
        "answer": "0",
        "answerAliases": [],
        "explanation": "Instance int fields default to 0 when not explicitly initialized.",
        "commonMistake": "Thinking all uninitialized variables are illegal. Local variables are different from fields.",
        "clues": [
          "value is a field, not a local variable.",
          "int fields default to 0."
        ],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level1"
      }
    ],
    "level2": [
      {
        "id": "l2-001",
        "title": "Nested loop count",
        "topic": "Conditions, Loops, and Operators",
        "skill": "nested loops",
        "code": "int count = 0;\nfor (int r = 0; r < 2; r++) {\n    for (int c = 0; c < 3; c++) {\n        count++;\n    }\n}\nSystem.out.println(count);",
        "question": "What prints?",
        "answer": "6",
        "answerAliases": [],
        "explanation": "The outer loop runs 2 times and the inner loop runs 3 times per outer iteration, so count increments 6 times.",
        "commonMistake": "Adding 2 + 3 instead of multiplying loop repetitions.",
        "clues": [
          "Count how many times the inner body runs total."
        ],
        "examTags": [
          "midterm1",
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-002",
        "title": "Array sum even indexes",
        "topic": "Arrays and ArrayLists",
        "skill": "loop with array indexes",
        "code": "int[] a = {5, 6, 7, 8};\nint sum = 0;\nfor (int i = 0; i < a.length; i += 2) {\n    sum += a[i];\n}\nSystem.out.println(sum);",
        "question": "What prints?",
        "answer": "12",
        "answerAliases": [],
        "explanation": "The loop uses indexes 0 and 2, so it adds 5 + 7.",
        "commonMistake": "Adding all even values instead of values at even indexes.",
        "clues": [
          "i is the index, not the value."
        ],
        "examTags": [
          "midterm1",
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-003",
        "title": "ArrayList remove object",
        "topic": "Arrays and ArrayLists",
        "skill": "ArrayList remove overload",
        "code": "ArrayList<String> list = new ArrayList<>();\nlist.add(\"1\");\nlist.add(\"2\");\nlist.add(\"3\");\nlist.remove(\"2\");\nSystem.out.println(list);",
        "question": "What prints?",
        "answer": "[1, 3]",
        "answerAliases": [],
        "explanation": "remove(\"2\") removes the matching object, not index 2.",
        "commonMistake": "Thinking remove always takes an index.",
        "clues": [
          "The argument is a String, not an int."
        ],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-004",
        "title": "Method call chain",
        "topic": "Methods",
        "skill": "nested method calls",
        "code": "static int f(int x) { return x + 1; }\nstatic int g(int x) { return f(x) * 2; }\nSystem.out.println(g(4));",
        "question": "What prints?",
        "answer": "10",
        "answerAliases": [],
        "explanation": "g(4) calls f(4), which returns 5. Then 5 * 2 is 10.",
        "commonMistake": "Multiplying 4 by 2 before f happens.",
        "clues": [
          "Evaluate the inner method call first."
        ],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-005",
        "title": "Parameter does not change caller",
        "topic": "Methods",
        "skill": "primitive parameter copy",
        "code": "static void bump(int x) { x++; }\nint num = 4;\nbump(num);\nSystem.out.println(num);",
        "question": "What prints?",
        "answer": "4",
        "answerAliases": [],
        "explanation": "The parameter x is a copy of num. Changing x does not change num.",
        "commonMistake": "Thinking primitives are passed by reference.",
        "clues": [
          "x is local to bump."
        ],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-006",
        "title": "Object state through method",
        "topic": "Classes and Objects",
        "skill": "object reference mutation",
        "code": "class Cup { int amount; }\nstatic void fill(Cup c) { c.amount = 10; }\nCup cup = new Cup();\nfill(cup);\nSystem.out.println(cup.amount);",
        "question": "What prints?",
        "answer": "10",
        "answerAliases": [],
        "explanation": "The method receives a copy of the reference, but it still points to the same Cup object, so it can mutate the object.",
        "commonMistake": "Treating object references exactly like primitive copies.",
        "clues": [
          "The reference is copied, but the object is shared."
        ],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-007",
        "title": "Constructor this",
        "topic": "Constructors",
        "skill": "this disambiguation",
        "code": "class Player {\n    String name;\n    Player(String name) { this.name = name; }\n}\nPlayer p = new Player(\"Lee\");\nSystem.out.println(p.name);",
        "question": "What prints?",
        "answer": "Lee",
        "answerAliases": [],
        "explanation": "this.name means the field, while name means the parameter. The field receives Lee.",
        "commonMistake": "Thinking this is optional in every constructor. It matters when names collide.",
        "clues": [
          "this.name is the object field."
        ],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-008",
        "title": "Constructor overload",
        "topic": "Constructors",
        "skill": "overloaded constructors",
        "code": "class Level {\n    int n;\n    Level() { this(1); }\n    Level(int n) { this.n = n; }\n}\nSystem.out.println(new Level().n);",
        "question": "What prints?",
        "answer": "1",
        "answerAliases": [],
        "explanation": "The no-argument constructor calls this(1), which calls the int constructor and sets n to 1.",
        "commonMistake": "Thinking the default constructor leaves n at 0.",
        "clues": [
          "this(1) calls another constructor in the same class."
        ],
        "examTags": [
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-009",
        "title": "Overriding with reference",
        "topic": "Inheritance and Polymorphism",
        "skill": "dynamic dispatch",
        "code": "class Shape { String name() { return \"shape\"; } }\nclass Circle extends Shape { String name() { return \"circle\"; } }\nShape s = new Circle();\nSystem.out.println(s.name());",
        "question": "What prints?",
        "answer": "circle",
        "answerAliases": [],
        "explanation": "The actual object is Circle, so the overridden Circle method runs.",
        "commonMistake": "Choosing based only on the variable type Shape.",
        "clues": [
          "Actual object type decides overridden method behavior."
        ],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-010",
        "title": "Not actually overriding",
        "topic": "Inheritance and Polymorphism",
        "skill": "overloading vs overriding",
        "code": "class Base { void show(int x) { System.out.println(\"int\"); } }\nclass Sub extends Base { void show(String x) { System.out.println(\"String\"); } }\nSub s = new Sub();\ns.show(3);",
        "question": "What prints?",
        "answer": "int",
        "answerAliases": [],
        "explanation": "Sub adds an overloaded show(String), but it does not override show(int). Calling show(3) uses the inherited int version.",
        "commonMistake": "Thinking any same-name method overrides.",
        "clues": [
          "Parameters must match to override."
        ],
        "examTags": [
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-011",
        "title": "equals not overridden",
        "topic": "equals(), ==, =, and toString()",
        "skill": "Object equals default",
        "code": "class Pen { int color = 1; }\nPen a = new Pen();\nPen b = new Pen();\nSystem.out.println(a.equals(b));",
        "question": "What prints?",
        "answer": "false",
        "answerAliases": [],
        "explanation": "Without overriding equals(), Object.equals behaves like reference comparison. a and b are different objects.",
        "commonMistake": "Assuming equals always compares fields.",
        "clues": [
          "Does Pen override equals()?"
        ],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-012",
        "title": "Static shared field",
        "topic": "Static, Final, Memory, and Garbage Collection",
        "skill": "static shared state",
        "code": "class Flag { static boolean on; }\nFlag a = new Flag();\nFlag b = new Flag();\na.on = true;\nSystem.out.println(b.on);",
        "question": "What prints?",
        "answer": "true",
        "answerAliases": [],
        "explanation": "on is static, so it is shared by the class. Setting it through a affects what b sees too.",
        "commonMistake": "Thinking a.on and b.on are separate instance fields.",
        "clues": [
          "static fields are shared."
        ],
        "examTags": [
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-013",
        "title": "Final reference mutation",
        "topic": "Static, Final, Memory, and Garbage Collection",
        "skill": "final references",
        "code": "final ArrayList<String> list = new ArrayList<>();\nlist.add(\"ok\");\nSystem.out.println(list.size());",
        "question": "What prints?",
        "answer": "1",
        "answerAliases": [],
        "explanation": "final prevents list from being reassigned, but it does not prevent the ArrayList object from being mutated.",
        "commonMistake": "Thinking final makes the object immutable.",
        "clues": [
          "final protects the variable reference, not always the object contents."
        ],
        "examTags": [
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-014",
        "title": "Switch colon fall-through",
        "topic": "Switch Statements and Expressions",
        "skill": "classic switch fall-through",
        "code": "int n = 1;\nswitch (n) {\n    case 1: System.out.print(\"A\");\n    case 2: System.out.print(\"B\"); break;\n    default: System.out.print(\"C\");\n}",
        "question": "What prints?",
        "answer": "AB",
        "answerAliases": [],
        "explanation": "Classic colon switch falls through from case 1 into case 2 until break.",
        "commonMistake": "Thinking colon switch behaves like arrow switch.",
        "clues": [
          "There is no break after case 1."
        ],
        "examTags": [
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-015",
        "title": "Try finally order",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "finally block",
        "code": "try {\n    System.out.print(\"A\");\n} finally {\n    System.out.print(\"B\");\n}",
        "question": "What prints?",
        "answer": "AB",
        "answerAliases": [],
        "explanation": "The try block prints A, then finally runs and prints B.",
        "commonMistake": "Forgetting finally runs after try even without catch.",
        "clues": [
          "finally runs after the try block."
        ],
        "examTags": [
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-016",
        "title": "Caught specific exception",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "catch matching",
        "code": "try {\n    String s = null;\n    System.out.println(s.length());\n} catch (NullPointerException e) {\n    System.out.println(\"null\");\n}",
        "question": "What prints?",
        "answer": "null",
        "answerAliases": [],
        "explanation": "Calling length() on null throws NullPointerException, and the catch block prints null.",
        "commonMistake": "Thinking the program crashes because any exception is fatal.",
        "clues": [
          "A matching catch handles the exception."
        ],
        "examTags": [
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-017",
        "title": "Record equals",
        "topic": "Records vs Classes",
        "skill": "record equals",
        "code": "record Pair(int a, int b) {}\nSystem.out.println(new Pair(1, 2).equals(new Pair(1, 2)));",
        "question": "What prints?",
        "answer": "true",
        "answerAliases": [],
        "explanation": "Records generate equals() based on their components. Both pairs have the same component values.",
        "commonMistake": "Thinking equals uses reference comparison for records.",
        "clues": [
          "Records generate equals()."
        ],
        "examTags": [
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-018",
        "title": "Interface constant",
        "topic": "Interfaces and KeyListener",
        "skill": "interface fields",
        "code": "interface Codes { int OK = 200; }\nSystem.out.println(Codes.OK);",
        "question": "What prints?",
        "answer": "200",
        "answerAliases": [],
        "explanation": "Interface fields are implicitly public static final, so Codes.OK is accessible.",
        "commonMistake": "Thinking you must create an object to access OK.",
        "clues": [
          "Interface constants are static."
        ],
        "examTags": [
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-019",
        "title": "Key press state trace",
        "topic": "Interfaces and KeyListener",
        "skill": "event-driven state changes",
        "code": "int x = 0;\nint y = 0;\nString[] keys = {\"RIGHT\", \"RIGHT\", \"UP\"};\nfor (String key : keys) {\n    if (key.equals(\"RIGHT\")) {\n        x += 10;\n    } else if (key.equals(\"UP\")) {\n        y -= 5;\n    }\n}\nSystem.out.println(x + \",\" + y);",
        "question": "After these key events, what prints?",
        "answer": "20,-5",
        "answerAliases": [],
        "explanation": "The first RIGHT makes x 10. The second RIGHT makes x 20. UP subtracts 5 from y, so the final state is 20,-5.",
        "commonMistake": "Adding to y for UP. In many simple Java graphics coordinate systems, moving up usually means y decreases.",
        "clues": [
          "Trace x and y separately.",
          "Each key changes only one coordinate."
        ],
        "examTags": [
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-020",
        "title": "Graphics coordinate trace",
        "topic": "Graphics",
        "skill": "coordinate and size tracing",
        "code": "int x = 20;\nint y = 30;\nint size = 40;\nSystem.out.println(\"rect \" + x + \",\" + y + \",\" + size + \",\" + (size / 2));\nx += 10;\ny += 5;\nSystem.out.println(\"oval \" + x + \",\" + y + \",10,10\");",
        "question": "What prints?",
        "answer": "rect 20,30,40,20\noval 30,35,10,10",
        "answerAliases": [],
        "explanation": "The rectangle uses the original x, y, and size values. Then x becomes 30 and y becomes 35 before the oval line prints.",
        "commonMistake": "Updating x and y before tracing the rectangle. The first print happens before the changes.",
        "clues": [
          "The rectangle line happens before x and y change.",
          "size / 2 uses integer division but 40 divides evenly."
        ],
        "examTags": [
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-021",
        "title": "2D traversal total",
        "topic": "Arrays and ArrayLists",
        "skill": "nested loops over 2D arrays",
        "code": "int[][] m = {{1, 2, 3}, {4, 5, 6}};\nint total = 0;\nfor (int r = 0; r < m.length; r++) {\n    total += m[r][0];\n}\nSystem.out.println(total);",
        "question": "What prints?",
        "answer": "5",
        "answerAliases": [],
        "explanation": "The loop adds the first element of each row: 1 + 4 = 5.",
        "commonMistake": "Adding the first row instead of the first column.",
        "clues": [
          "m[r][0] means column 0 of each row."
        ],
        "examTags": [
          "midterm1",
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-022",
        "title": "Text block length idea",
        "topic": "Java Basics",
        "skill": "text block content",
        "code": "String text = \"\"\"\nHi\n\"\"\";\nSystem.out.println(text.contains(\"Hi\"));",
        "question": "What prints?",
        "answer": "true",
        "answerAliases": [],
        "explanation": "The text block contains the characters Hi, so contains returns true.",
        "commonMistake": "Overthinking the newlines and missing that Hi is still inside.",
        "clues": [
          "contains only checks whether the substring appears."
        ],
        "examTags": [
          "midterm1"
        ],
        "level": "level2"
      },
      {
        "id": "l2-023",
        "title": "Diamond operator",
        "topic": "Arrays and ArrayLists",
        "skill": "diamond operator",
        "code": "ArrayList<Integer> nums = new ArrayList<>();\nnums.add(2);\nnums.add(nums.get(0) + 3);\nSystem.out.println(nums);",
        "question": "What prints?",
        "answer": "[2, 5]",
        "answerAliases": [],
        "explanation": "The diamond operator uses Integer from the left side. The second add uses nums.get(0), which is 2, plus 3.",
        "commonMistake": "Thinking <> means the list has no type.",
        "clues": [
          "The left side tells Java the type."
        ],
        "examTags": [
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-024",
        "title": "Side effect method",
        "topic": "Methods",
        "skill": "side effects",
        "code": "static void change(int[] nums) { nums[0] = 99; }\nint[] values = {1, 2};\nchange(values);\nSystem.out.println(values[0]);",
        "question": "What prints?",
        "answer": "99",
        "answerAliases": [],
        "explanation": "The method receives a reference to the same array object and changes index 0.",
        "commonMistake": "Thinking arrays behave like primitive ints when passed to methods.",
        "clues": [
          "Arrays are objects."
        ],
        "examTags": [
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-025",
        "title": "Abstract reference",
        "topic": "Inheritance and Polymorphism",
        "skill": "abstract superclass reference",
        "code": "abstract class Task { abstract String label(); }\nclass Quiz extends Task { String label() { return \"quiz\"; } }\nTask t = new Quiz();\nSystem.out.println(t.label());",
        "question": "What prints?",
        "answer": "quiz",
        "answerAliases": [],
        "explanation": "You cannot instantiate an abstract class directly, but a reference of abstract type can point to a concrete subclass.",
        "commonMistake": "Thinking abstract references are impossible.",
        "clues": [
          "The object after new is Quiz."
        ],
        "examTags": [
          "final"
        ],
        "level": "level2"
      }
    ],
    "level3": [
      {
        "id": "l3-001",
        "title": "Loop, method, and return trace",
        "topic": "Methods",
        "skill": "method return with loop state",
        "code": "public static int score(int n) {\n    int total = 1;\n    for (int i = 2; i <= n; i++) {\n        total += i * 2;\n    }\n    return total - n;\n}\nSystem.out.println(score(4));",
        "question": "What prints?",
        "answer": "15",
        "answerAliases": [],
        "explanation": "total starts at 1. The loop adds 4, 6, and 8: total becomes 5, then 11, then 19. The method returns 19 - 4, so the output is 15.",
        "commonMistake": "Forgetting that the loop starts at i = 2, or forgetting the final subtraction before the return.",
        "clues": [],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-002",
        "title": "2D array state after updates",
        "topic": "Arrays and ArrayLists",
        "skill": "2D array mutation and state tracing",
        "code": "int[][] grid = {\n    {1, 2, 3},\n    {4, 5, 6}\n};\ngrid[0][2] += grid[1][0];\ngrid[1][1] = grid[0][2] - grid[0][0];\nSystem.out.println(grid[0][2]);\nSystem.out.println(grid[1][1]);",
        "question": "What prints?",
        "answer": "7\n6",
        "answerAliases": [],
        "explanation": "grid[0][2] starts as 3 and becomes 3 + 4 = 7. Then grid[1][1] becomes 7 - 1 = 6.",
        "commonMistake": "Mixing up row and column order. In Java, grid[row][column] uses the row first.",
        "clues": [],
        "examTags": [
          "midterm1",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-003",
        "title": "Object alias and reassignment",
        "topic": "Classes and Objects",
        "skill": "object reference aliasing and reassignment",
        "code": "class Box {\n    int value;\n    Box(int value) { this.value = value; }\n}\nBox a = new Box(3);\nBox b = a;\nb.value += 4;\na = new Box(10);\nSystem.out.println(b.value);\nSystem.out.println(a.value);",
        "question": "What prints?",
        "answer": "7\n10",
        "answerAliases": [],
        "explanation": "a and b first point to the same Box, so b.value += 4 changes that shared object from 3 to 7. Then a is reassigned to a new Box with value 10, but b still points to the old Box.",
        "commonMistake": "Thinking a = new Box(10) also changes b. Reassignment changes only the variable, not every reference.",
        "clues": [],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-004",
        "title": "Copy constructor with separate state",
        "topic": "Constructors",
        "skill": "copy constructor and object independence",
        "code": "class Counter {\n    int count;\n    Counter(int count) { this.count = count; }\n    Counter(Counter other) { this.count = other.count; }\n}\nCounter first = new Counter(5);\nCounter second = new Counter(first);\nfirst.count += 2;\nsecond.count += 10;\nSystem.out.println(first.count);\nSystem.out.println(second.count);",
        "question": "What prints?",
        "answer": "7\n15",
        "answerAliases": [],
        "explanation": "The copy constructor copies the value 5 into a separate object. Changing first later does not change second, and changing second does not change first.",
        "commonMistake": "Treating the copy as another alias. This constructor creates a new object with copied state.",
        "clues": [],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-005",
        "title": "Polymorphic array dispatch",
        "topic": "Inheritance and Polymorphism",
        "skill": "dynamic dispatch through superclass references",
        "code": "class Shape {\n    String name() { return \"shape\"; }\n}\nclass Circle extends Shape {\n    String name() { return \"circle\"; }\n}\nclass Square extends Shape {\n    String name() { return \"square\"; }\n}\nShape[] shapes = {new Shape(), new Circle(), new Square()};\nfor (Shape s : shapes) {\n    System.out.print(s.name() + \" \");\n}",
        "question": "What prints?",
        "answer": "shape circle square",
        "answerAliases": [],
        "explanation": "Even though the array type is Shape[], Java uses the actual object type at runtime for overridden methods.",
        "commonMistake": "Using the reference type only and printing shape shape shape.",
        "clues": [],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-006",
        "title": "equals with type check",
        "topic": "equals(), ==, =, and toString()",
        "skill": "equals override logic and object comparison",
        "code": "class Badge {\n    int id;\n    Badge(int id) { this.id = id; }\n    public boolean equals(Object other) {\n        if (!(other instanceof Badge b)) return false;\n        return id == b.id;\n    }\n}\nBadge a = new Badge(7);\nBadge b = new Badge(7);\nObject c = \"7\";\nSystem.out.println(a == b);\nSystem.out.println(a.equals(b));\nSystem.out.println(a.equals(c));",
        "question": "What prints?",
        "answer": "false\ntrue\nfalse",
        "answerAliases": [],
        "explanation": "a and b are different objects, so == is false. equals returns true for another Badge with the same id. A String is not a Badge, so the instanceof check makes the last line false.",
        "commonMistake": "Thinking == calls equals, or forgetting that equals receives Object and must check the type.",
        "clues": [],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-007",
        "title": "Static and instance field mix",
        "topic": "Static, Final, Memory, and Garbage Collection",
        "skill": "static shared state vs instance state",
        "code": "class Player {\n    static int created = 0;\n    int score = 0;\n    Player(int score) {\n        created++;\n        this.score = score;\n    }\n}\nPlayer a = new Player(5);\nPlayer b = new Player(8);\na.score += 2;\nSystem.out.println(Player.created);\nSystem.out.println(a.score);\nSystem.out.println(b.score);",
        "question": "What prints?",
        "answer": "2\n7\n8",
        "answerAliases": [],
        "explanation": "created is static, so it is shared by all Player objects and becomes 2 after two constructor calls. score belongs to each object, so only a.score changes to 7.",
        "commonMistake": "Treating static fields like each object has its own copy.",
        "clues": [],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-008",
        "title": "Exception skips the rest of try",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "try/catch/finally control flow",
        "code": "try {\n    System.out.println(\"start\");\n    int x = 4 / 0;\n    System.out.println(\"after\");\n} catch (ArithmeticException ex) {\n    System.out.println(\"caught\");\n} finally {\n    System.out.println(\"done\");\n}",
        "question": "What prints?",
        "answer": "start\ncaught\ndone",
        "answerAliases": [],
        "explanation": "The division by zero throws an ArithmeticException. The rest of the try block is skipped, the catch runs, and finally still runs.",
        "commonMistake": "Printing after because it appears after the bad line. Once the exception happens, Java jumps out of the try block.",
        "clues": [],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-009",
        "title": "Classic switch fall-through trap",
        "topic": "Switch Statements and Expressions",
        "skill": "colon switch fall-through",
        "code": "int code = 2;\nswitch (code) {\n    case 1:\n        System.out.print(\"A\");\n    case 2:\n        System.out.print(\"B\");\n    case 3:\n        System.out.print(\"C\");\n        break;\n    default:\n        System.out.print(\"D\");\n}",
        "question": "What prints?",
        "answer": "BC",
        "answerAliases": [],
        "explanation": "The matching case is 2, so Java starts at case 2. Because there is no break before case 3, it also prints C, then the break stops the switch.",
        "commonMistake": "Thinking classic colon cases stop automatically. They do not stop unless break or another control transfer occurs.",
        "clues": [],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-010",
        "title": "Record equality and output",
        "topic": "Records vs Classes",
        "skill": "record equals and toString behavior",
        "code": "record Course(String code, int credits) {}\nCourse a = new Course(\"CS202\", 3);\nCourse b = new Course(\"CS202\", 3);\nSystem.out.println(a == b);\nSystem.out.println(a.equals(b));\nSystem.out.println(a);",
        "question": "What prints?",
        "answer": "false\ntrue\nCourse[code=CS202, credits=3]",
        "answerAliases": [],
        "explanation": "a and b are two different record objects, so == is false. Records generate equals based on component values, so equals is true. The generated toString shows the record name and components.",
        "commonMistake": "Thinking records make == compare values. They do not; == still checks whether references are the same.",
        "clues": [],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-011",
        "title": "Overload choice with int and double",
        "topic": "Methods",
        "skill": "method overload resolution",
        "code": "public static void show(int x) {\n    System.out.println(\"int \" + x);\n}\npublic static void show(double x) {\n    System.out.println(\"double \" + x);\n}\nshow(4);\nshow(4.0);\nshow(4 + 0.5);",
        "question": "What prints?",
        "answer": "int 4\ndouble 4.0\ndouble 4.5",
        "answerAliases": [],
        "explanation": "4 is an int literal, so show(int) is chosen. 4.0 is double. 4 + 0.5 becomes a double expression, so show(double) is chosen.",
        "commonMistake": "Assuming Java always picks the first method with the right name. Overload choice depends on argument types.",
        "clues": [],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-012",
        "title": "Overload instead of override",
        "topic": "Inheritance and Polymorphism",
        "skill": "overloading vs overriding with superclass reference",
        "code": "class Parent {\n    void talk(Object value) { System.out.println(\"parent object\"); }\n}\nclass Child extends Parent {\n    void talk(String value) { System.out.println(\"child string\"); }\n}\nParent p = new Child();\np.talk(\"hello\");",
        "question": "What prints?",
        "answer": "parent object",
        "answerAliases": [],
        "explanation": "The variable type is Parent, so compile-time overload selection looks at Parent methods. Parent has talk(Object), so that method is selected. Child did not override talk(Object); it overloaded talk(String).",
        "commonMistake": "Thinking Child.talk(String) overrides Parent.talk(Object). The parameter types are different, so it is overload, not override.",
        "clues": [],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-013",
        "title": "2D nested indexes with changing total",
        "topic": "Arrays and ArrayLists",
        "skill": "nested loops over 2D arrays",
        "code": "int[][] nums = {\n    {2, 4},\n    {1, 3},\n    {5, 7}\n};\nint total = 0;\nfor (int row = 0; row < nums.length; row++) {\n    total += nums[row][row % 2];\n}\nSystem.out.println(total);",
        "question": "What prints?",
        "answer": "10",
        "answerAliases": [],
        "explanation": "For row 0, row % 2 is 0, so add nums[0][0] = 2. For row 1, row % 2 is 1, so add nums[1][1] = 3. For row 2, row % 2 is 0, so add nums[2][0] = 5. The total is 10.",
        "commonMistake": "Forgetting that row % 2 alternates between 0 and 1.",
        "clues": [],
        "examTags": [
          "midterm1",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-014",
        "title": "String and int plus order",
        "topic": "Java Basics",
        "skill": "operator order with String concatenation",
        "code": "int a = 2;\nint b = 3;\nSystem.out.println(\"sum=\" + a + b);\nSystem.out.println(a + b + \"=sum\");",
        "question": "What prints?",
        "answer": "sum=23\n5=sum",
        "answerAliases": [],
        "explanation": "Java evaluates left to right. In the first line, \"sum=\" + a makes a String, then b is concatenated. In the second line, a + b happens first because both are ints, producing 5 before concatenation.",
        "commonMistake": "Assuming both lines add 2 + 3 before making a String.",
        "clues": [],
        "examTags": [
          "midterm1",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-015",
        "title": "ArrayList remove while looping",
        "topic": "Arrays and ArrayLists",
        "skill": "removing while iterating by index",
        "code": "ArrayList<String> items = new ArrayList<>();\nitems.add(\"red\");\nitems.add(\"blue\");\nitems.add(\"green\");\nitems.add(\"gold\");\nfor (int i = 0; i < items.size(); i++) {\n    if (items.get(i).length() == 4) {\n        items.remove(i);\n    }\n}\nSystem.out.println(items);",
        "question": "What prints?",
        "answer": "[blue, green]",
        "answerAliases": [],
        "explanation": "At i = 0, red is removed and everything shifts left, so blue moves to index 0. Then i becomes 1, so blue is skipped. At i = 1, green stays. At i = 2, gold is removed. The list ends as [blue, green].",
        "commonMistake": "Expecting both red and blue to be checked after red is removed. Index shifting can skip the next element.",
        "clues": [],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-016",
        "title": "Side effect and return value",
        "topic": "Methods",
        "skill": "object side effect plus return",
        "code": "class Score {\n    int value;\n    Score(int value) { this.value = value; }\n}\npublic static int boost(Score s) {\n    s.value += 5;\n    return s.value * 2;\n}\nScore quiz = new Score(4);\nint result = boost(quiz);\nSystem.out.println(result);\nSystem.out.println(quiz.value);",
        "question": "What prints?",
        "answer": "18\n9",
        "answerAliases": [],
        "explanation": "The object starts with value 4. boost changes the same object to 9, then returns 9 * 2 = 18. After the method, quiz.value is still 9.",
        "commonMistake": "Thinking object parameters are copied like primitives. The reference is copied, but both references point to the same object.",
        "clues": [],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-017",
        "title": "Constructor chaining trace",
        "topic": "Constructors",
        "skill": "this constructor call order",
        "code": "class Level {\n    int value;\n    Level() {\n        this(3);\n        value += 2;\n    }\n    Level(int value) {\n        this.value = value;\n    }\n}\nLevel level = new Level();\nSystem.out.println(level.value);",
        "question": "What prints?",
        "answer": "5",
        "answerAliases": [],
        "explanation": "The no-argument constructor first calls this(3), so the int constructor sets value to 3. Then the no-argument constructor continues and adds 2, making value 5.",
        "commonMistake": "Ignoring the this(3) constructor call or thinking it happens after value += 2.",
        "clues": [],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-018",
        "title": "Interface polymorphism trace",
        "topic": "Interfaces and KeyListener",
        "skill": "interface reference and implementation dispatch",
        "code": "interface Drivable {\n    String move();\n}\nclass Bike implements Drivable {\n    public String move() { return \"pedal\"; }\n}\nclass Cart implements Drivable {\n    public String move() { return \"roll\"; }\n}\nDrivable[] rides = {new Bike(), new Cart(), new Bike()};\nfor (Drivable ride : rides) {\n    System.out.print(ride.move() + \" \");\n}",
        "question": "What prints?",
        "answer": "pedal roll pedal",
        "answerAliases": [],
        "explanation": "The array stores Drivable references, but each object uses its own move implementation at runtime.",
        "commonMistake": "Thinking an interface reference cannot call methods. It can call methods declared by the interface.",
        "clues": [],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-019",
        "title": "Null guard prevents crash",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "null check before method call",
        "code": "String name = null;\nif (name != null && name.length() > 3) {\n    System.out.println(\"long\");\n} else {\n    System.out.println(\"safe\");\n}",
        "question": "What prints?",
        "answer": "safe",
        "answerAliases": [],
        "explanation": "The first part of the && expression is false, so Java does not evaluate name.length(). The else branch runs.",
        "commonMistake": "Thinking name.length() always runs. && short-circuits when the left side is false.",
        "clues": [],
        "examTags": [
          "midterm2",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-020",
        "title": "instanceof pattern variable",
        "topic": "Inheritance and Polymorphism",
        "skill": "instanceof pattern matching and casting",
        "code": "Object item = \"seasider\";\nif (item instanceof String word && word.length() > 5) {\n    System.out.println(word.substring(0, 3));\n} else {\n    System.out.println(\"nope\");\n}",
        "question": "What prints?",
        "answer": "sea",
        "answerAliases": [],
        "explanation": "item refers to a String, so the pattern variable word is available. \"seasider\" has length greater than 5, and substring(0, 3) returns characters at indexes 0, 1, and 2.",
        "commonMistake": "Thinking substring(0, 3) includes index 3. The ending index is excluded.",
        "clues": [],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-021",
        "title": "Graphics state before repaint",
        "topic": "Graphics",
        "skill": "state change before paintComponent uses coordinates",
        "code": "class Panel {\n    int x = 30;\n    int y = 40;\n    void repaint() { }\n    void moveRight() {\n        x += 15;\n        repaint();\n    }\n    void paintComponent(Graphics g) {\n        System.out.println(\"draw at \" + x + \",\" + y);\n    }\n}\nPanel panel = new Panel();\npanel.moveRight();\npanel.paintComponent(null);",
        "question": "What prints?",
        "answer": "draw at 45,40",
        "answerAliases": [],
        "explanation": "The panel starts at x = 30 and y = 40. moveRight changes x to 45 before paintComponent runs. repaint() is only a redraw request here; the printed drawing state uses the current field values.",
        "commonMistake": "Tracing paintComponent with the old x value. Drawing uses the object state at the time paintComponent runs.",
        "clues": [],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-022",
        "title": "KeyListener movement sequence",
        "topic": "Interfaces and KeyListener",
        "skill": "key event sequence and coordinate state",
        "code": "int x = 50;\nint y = 50;\nvoid press(String key) {\n    if (key.equals(\"LEFT\")) x -= 10;\n    if (key.equals(\"RIGHT\")) x += 10;\n    if (key.equals(\"DOWN\")) y += 10;\n}\npress(\"RIGHT\");\npress(\"DOWN\");\npress(\"LEFT\");\nSystem.out.println(x + \",\" + y);",
        "question": "What prints?",
        "answer": "50,60",
        "answerAliases": [],
        "explanation": "RIGHT changes x to 60, DOWN changes y to 60, and LEFT changes x back to 50. Final state is 50,60.",
        "commonMistake": "Forgetting that each key press changes the stored state for the next event.",
        "clues": [],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-023",
        "title": "var inferred type trap",
        "topic": "Java Basics",
        "skill": "var inference and integer division",
        "code": "var total = 7;\nvar average = total / 2;\nSystem.out.println(average);",
        "question": "What prints?",
        "answer": "3",
        "answerAliases": [],
        "explanation": "var does not mean dynamic type. total is inferred as int, so total / 2 uses integer division and gives 3.",
        "commonMistake": "Thinking var makes average a double automatically.",
        "clues": [],
        "examTags": [
          "midterm1",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-024",
        "title": "Array aliasing state",
        "topic": "Arrays and ArrayLists",
        "skill": "array reference aliasing",
        "code": "int[] first = {1, 2, 3};\nint[] second = first;\nsecond[0] = 9;\nfirst[2] = second[0] + first[1];\nSystem.out.println(first[0]);\nSystem.out.println(second[2]);",
        "question": "What prints?",
        "answer": "9\n11",
        "answerAliases": [],
        "explanation": "first and second refer to the same array. second[0] = 9 changes first[0]. Then first[2] becomes 9 + 2 = 11, so second[2] also sees 11.",
        "commonMistake": "Thinking first and second are separate arrays because they have different variable names.",
        "clues": [],
        "examTags": [
          "midterm1",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-025",
        "title": "Abstract hook dispatch from superclass",
        "topic": "Inheritance and Polymorphism",
        "skill": "abstract method dispatch from superclass method",
        "code": "abstract class Lesson {\n    void start() {\n        System.out.println(label());\n    }\n    abstract String label();\n}\nclass JavaLesson extends Lesson {\n    String label() { return \"trace first\"; }\n}\nLesson lesson = new JavaLesson();\nlesson.start();",
        "question": "What prints?",
        "answer": "trace first",
        "answerAliases": [],
        "explanation": "start is defined in the abstract superclass, but it calls label. The actual object is JavaLesson, so Java dispatches to JavaLesson.label().",
        "commonMistake": "Thinking abstract classes cannot have normal methods, or that start calls a missing abstract method instead of the subclass version.",
        "clues": [],
        "examTags": [
          "final"
        ],
        "level": "level3"
      }
    ]
  },
  "assumptions": [
    "Assume required imports are already included when a snippet uses ArrayList, List, Arrays, Graphics, KeyEvent, or other library classes.",
    "For graphics-style snippets, trace the coordinates and state changes rather than trying to draw a perfect picture."
  ],
  "qualityNotes": {
    "version": 2,
    "focus": "More final-style state tracing, object references, Graphics/KeyListener state changes, and combined concepts."
  }
};
})();
