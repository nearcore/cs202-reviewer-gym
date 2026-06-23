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
        "title": "Key movement state",
        "topic": "Interfaces and KeyListener",
        "skill": "event-driven state change",
        "code": "int x = 10;\nString key = \"RIGHT\";\nif (key.equals(\"RIGHT\")) {\n    x += 5;\n}\nSystem.out.println(x);",
        "question": "What prints?",
        "answer": "15",
        "answerAliases": [],
        "explanation": "The key equals RIGHT, so x increases from 10 to 15.",
        "commonMistake": "Using == instead of equals when thinking about String comparison.",
        "clues": [
          "The condition uses equals and is true."
        ],
        "examTags": [
          "final"
        ],
        "level": "level2"
      },
      {
        "id": "l2-020",
        "title": "Graphics coordinate idea",
        "topic": "Graphics",
        "skill": "coordinate tracing",
        "code": "int x = 20;\nint width = 30;\nSystem.out.println(x + width);",
        "question": "What prints?",
        "answer": "50",
        "answerAliases": [],
        "explanation": "The right edge would be x + width, which is 20 + 30.",
        "commonMistake": "Thinking width replaces x instead of adding to it.",
        "clues": [
          "For drawing, x is the start position."
        ],
        "examTags": [
          "midterm1",
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
        "title": "Mixed loop and method",
        "topic": "Methods",
        "skill": "method plus loop trace",
        "code": "static int mystery(int n) {\n    int total = 1;\n    for (int i = 2; i <= n; i++) {\n        total *= i;\n    }\n    return total;\n}\nSystem.out.println(mystery(4));",
        "question": "What prints?",
        "answer": "24",
        "answerAliases": [],
        "explanation": "total starts at 1, then multiplies by 2, 3, and 4. The result is 24.",
        "commonMistake": "Adding instead of multiplying, or starting total at 0.",
        "clues": [
          "Trace total after every multiplication."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-002",
        "title": "Array and condition",
        "topic": "Arrays and ArrayLists",
        "skill": "array filter trace",
        "code": "int[] nums = {2, 5, 8, 11};\nint count = 0;\nfor (int n : nums) {\n    if (n % 2 == 1) count++;\n}\nSystem.out.println(count);",
        "question": "What prints?",
        "answer": "2",
        "answerAliases": [],
        "explanation": "The odd values are 5 and 11, so count becomes 2.",
        "commonMistake": "Counting even values because n % 2 is misread.",
        "clues": [
          "n % 2 == 1 means odd."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-003",
        "title": "Reference reassignment",
        "topic": "Classes and Objects",
        "skill": "reference reassignment",
        "code": "class Bag { int n; }\nBag a = new Bag();\nBag b = a;\nb.n = 3;\nb = new Bag();\nb.n = 8;\nSystem.out.println(a.n);",
        "question": "What prints?",
        "answer": "3",
        "answerAliases": [],
        "explanation": "a and b first point to the same object, so b.n = 3 affects a. Then b points to a new object, so b.n = 8 does not affect a.",
        "commonMistake": "Thinking b always stays connected to a after reassignment.",
        "clues": [
          "Watch when new Bag() creates a second object."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-004",
        "title": "Copy constructor trace",
        "topic": "Constructors",
        "skill": "copy constructor",
        "code": "class Score {\n    int value;\n    Score(int value) { this.value = value; }\n    Score(Score other) { value = other.value; }\n}\nScore a = new Score(6);\nScore b = new Score(a);\nb.value = 9;\nSystem.out.println(a.value);",
        "question": "What prints?",
        "answer": "6",
        "answerAliases": [],
        "explanation": "The copy constructor copies the value into a separate Score object. Changing b.value later does not change a.value.",
        "commonMistake": "Thinking a and b are aliases because b was built from a.",
        "clues": [
          "new Score(a) creates a new object."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-005",
        "title": "Polymorphic array",
        "topic": "Inheritance and Polymorphism",
        "skill": "polymorphism in arrays",
        "code": "class Tool { String use() { return \"tool\"; } }\nclass Pen extends Tool { String use() { return \"write\"; } }\nTool[] tools = { new Tool(), new Pen() };\nfor (Tool t : tools) {\n    System.out.print(t.use() + \" \");\n}",
        "question": "What prints?",
        "answer": "tool write",
        "answerAliases": [],
        "explanation": "The first object is Tool, so it returns tool. The second actual object is Pen, so the overridden use() returns write.",
        "commonMistake": "Using the array type Tool[] to decide all method calls.",
        "clues": [
          "Each element has its own actual object type."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-006",
        "title": "Equals with cast",
        "topic": "equals(), ==, =, and toString()",
        "skill": "equals override logic",
        "code": "class Id {\n    int n;\n    Id(int n) { this.n = n; }\n    public boolean equals(Object o) {\n        if (!(o instanceof Id other)) return false;\n        return n == other.n;\n    }\n}\nSystem.out.println(new Id(4).equals(new Id(4)));",
        "question": "What prints?",
        "answer": "true",
        "answerAliases": [],
        "explanation": "The other object is an Id and has the same n value, so equals returns true.",
        "commonMistake": "Thinking two new objects can never be equal. They can be logically equal if equals is overridden.",
        "clues": [
          "Look at the equals method body."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-007",
        "title": "Static and instance mix",
        "topic": "Static, Final, Memory, and Garbage Collection",
        "skill": "static vs instance fields",
        "code": "class Player {\n    static int players = 0;\n    int score = 0;\n    Player() { players++; score++; }\n}\nPlayer a = new Player();\nPlayer b = new Player();\nSystem.out.println(Player.players + \":\" + a.score + \":\" + b.score);",
        "question": "What prints?",
        "answer": "2:1:1",
        "answerAliases": [],
        "explanation": "players is static and shared, so it becomes 2. Each object has its own score initialized to 0 and incremented once.",
        "commonMistake": "Thinking score is also shared.",
        "clues": [
          "Separate static fields from instance fields."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-008",
        "title": "Exception skip line",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "exception flow",
        "code": "try {\n    System.out.print(\"A\");\n    int[] a = {1};\n    System.out.print(a[2]);\n    System.out.print(\"B\");\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.print(\"C\");\n}\nSystem.out.print(\"D\");",
        "question": "What prints?",
        "answer": "ACD",
        "answerAliases": [],
        "explanation": "A prints first. Accessing a[2] throws an exception, so B is skipped. The catch prints C, then execution continues after the try/catch and prints D.",
        "commonMistake": "Printing ABCD because you assume the failed line still finishes.",
        "clues": [
          "The exception happens before B."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-009",
        "title": "Classic switch trap",
        "topic": "Switch Statements and Expressions",
        "skill": "switch fall-through plus default",
        "code": "int x = 2;\nswitch (x) {\n    case 1: System.out.print(\"A\");\n    case 2: System.out.print(\"B\");\n    default: System.out.print(\"C\");\n}\nSystem.out.print(\"D\");",
        "question": "What prints?",
        "answer": "BCD",
        "answerAliases": [],
        "explanation": "case 2 matches and prints B. There is no break, so default prints C. Then D prints after the switch.",
        "commonMistake": "Assuming default only runs when no case matches. With fall-through, it can still run.",
        "clues": [
          "No break after case 2."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-010",
        "title": "Record equality and output",
        "topic": "Records vs Classes",
        "skill": "record equals and toString",
        "code": "record Card(String suit, int value) {}\nCard a = new Card(\"H\", 7);\nCard b = new Card(\"H\", 7);\nSystem.out.println(a.equals(b));\nSystem.out.println(a);",
        "question": "What prints?",
        "answer": "true\nCard[suit=H, value=7]",
        "answerAliases": [],
        "explanation": "Records generate component-based equals() and a standard toString().",
        "commonMistake": "Thinking records still use Object equals by default.",
        "clues": [
          "Records generate equals and toString."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-011",
        "title": "Overload with double",
        "topic": "Methods",
        "skill": "overload resolution",
        "code": "static void pick(int x) { System.out.println(\"int\"); }\nstatic void pick(double x) { System.out.println(\"double\"); }\npick(3.0);",
        "question": "What prints?",
        "answer": "double",
        "answerAliases": [],
        "explanation": "3.0 is a double literal, so Java chooses pick(double).",
        "commonMistake": "Thinking 3.0 is an int because it looks whole.",
        "clues": [
          "The decimal point matters."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-012",
        "title": "Overriding annotation idea",
        "topic": "Inheritance and Polymorphism",
        "skill": "override signature",
        "code": "class Parent { String name() { return \"parent\"; } }\nclass Child extends Parent { String name(int x) { return \"child\"; } }\nParent p = new Child();\nSystem.out.println(p.name());",
        "question": "What prints?",
        "answer": "parent",
        "answerAliases": [],
        "explanation": "Child does not override name() because it has a different parameter list. p.name() calls the inherited no-argument Parent method.",
        "commonMistake": "Thinking same name alone means override.",
        "clues": [
          "Check the parameter list."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-013",
        "title": "2D nested indexes",
        "topic": "Arrays and ArrayLists",
        "skill": "2D array nested loops",
        "code": "int[][] grid = {{1, 2}, {3, 4}, {5, 6}};\nint result = 0;\nfor (int r = 0; r < grid.length; r++) {\n    result += grid[r][1];\n}\nSystem.out.println(result);",
        "question": "What prints?",
        "answer": "12",
        "answerAliases": [],
        "explanation": "The loop adds column 1 from each row: 2 + 4 + 6 = 12.",
        "commonMistake": "Adding the diagonal or all values instead of column 1.",
        "clues": [
          "The second index is always 1."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-014",
        "title": "String and int plus",
        "topic": "Java Basics",
        "skill": "operator order with String",
        "code": "System.out.println(\"sum=\" + 2 + 3);\nSystem.out.println(2 + 3 + \"=sum\");",
        "question": "What prints?",
        "answer": "sum=23\n5=sum",
        "answerAliases": [],
        "explanation": "The first line starts with a String, so + concatenates left to right: sum=23. The second line adds 2 + 3 first, then concatenates.",
        "commonMistake": "Assuming both lines do arithmetic first.",
        "clues": [
          "+ works left to right."
        ],
        "examTags": [
          "midterm1",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-015",
        "title": "ArrayList loop remove skip",
        "topic": "Arrays and ArrayLists",
        "skill": "remove while iterating",
        "code": "ArrayList<Integer> nums = new ArrayList<>(List.of(1, 2, 3, 4));\nfor (int i = 0; i < nums.size(); i++) {\n    if (nums.get(i) % 2 == 0) nums.remove(i);\n}\nSystem.out.println(nums);",
        "question": "What prints?",
        "answer": "[1, 3]",
        "answerAliases": [],
        "explanation": "At i=1, 2 is removed and 3 shifts left. The loop then increments to i=2, where 4 is removed. The final list is [1, 3].",
        "commonMistake": "Assuming indexes never shift after remove.",
        "clues": [
          "After remove, list size and indexes change."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-016",
        "title": "Method side effect and return",
        "topic": "Methods",
        "skill": "side effect plus return",
        "code": "static int update(int[] a) {\n    a[0] += 2;\n    return a[0] * 3;\n}\nint[] nums = {4};\nSystem.out.println(update(nums));\nSystem.out.println(nums[0]);",
        "question": "What prints?",
        "answer": "18\n6",
        "answerAliases": [],
        "explanation": "a[0] changes from 4 to 6, then the method returns 18. The array still has 6 after the call.",
        "commonMistake": "Returning 18 but forgetting the array also changed.",
        "clues": [
          "Arrays are mutable objects."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-017",
        "title": "Nested constructor call",
        "topic": "Constructors",
        "skill": "constructor chaining",
        "code": "class Box {\n    int size;\n    Box() { this(3); size++; }\n    Box(int size) { this.size = size; }\n}\nSystem.out.println(new Box().size);",
        "question": "What prints?",
        "answer": "4",
        "answerAliases": [],
        "explanation": "The no-argument constructor calls Box(3), setting size to 3, then increments it to 4.",
        "commonMistake": "Stopping after this(3) and forgetting the next line runs too.",
        "clues": [
          "After this(3), control returns to the no-arg constructor body."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-018",
        "title": "Interface polymorphism",
        "topic": "Interfaces and KeyListener",
        "skill": "interface polymorphism",
        "code": "interface Move { int step(); }\nclass Slow implements Move { public int step() { return 1; } }\nclass Fast implements Move { public int step() { return 3; } }\nMove m = new Fast();\nSystem.out.println(m.step());",
        "question": "What prints?",
        "answer": "3",
        "answerAliases": [],
        "explanation": "The interface reference points to a Fast object, so Fast.step() runs.",
        "commonMistake": "Thinking interface type prevents the implementation method from running.",
        "clues": [
          "The actual object is Fast."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-019",
        "title": "Null check prevents crash",
        "topic": "Exceptions, Files, and Null Pointers",
        "skill": "null guard",
        "code": "String s = null;\nif (s != null && s.length() > 0) {\n    System.out.println(\"yes\");\n} else {\n    System.out.println(\"no\");\n}",
        "question": "What prints?",
        "answer": "no",
        "answerAliases": [],
        "explanation": "s != null is false, so Java short-circuits the && and does not call s.length(). The else branch prints no.",
        "commonMistake": "Thinking s.length() always runs and causes NullPointerException.",
        "clues": [
          "&& short-circuits when the first part is false."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-020",
        "title": "Instanceof pattern",
        "topic": "Inheritance and Polymorphism",
        "skill": "instanceof pattern variable",
        "code": "Object obj = \"java\";\nif (obj instanceof String text) {\n    System.out.println(text.toUpperCase());\n}",
        "question": "What prints?",
        "answer": "JAVA",
        "answerAliases": [],
        "explanation": "obj is a String, so the pattern variable text is available and toUpperCase() returns JAVA.",
        "commonMistake": "Thinking obj cannot be used as a String even after instanceof.",
        "clues": [
          "instanceof confirms the type and creates text."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-021",
        "title": "Graphics repaint idea",
        "topic": "Graphics",
        "skill": "state change before repaint",
        "code": "int x = 10;\nint dx = 4;\nx += dx;\nx += dx;\nSystem.out.println(x);",
        "question": "What prints?",
        "answer": "18",
        "answerAliases": [],
        "explanation": "x starts at 10 and increases by 4 twice: 14, then 18.",
        "commonMistake": "Only applying dx once.",
        "clues": [
          "This mimics two animation ticks."
        ],
        "examTags": [
          "midterm1",
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-022",
        "title": "Key listener methods count",
        "topic": "Interfaces and KeyListener",
        "skill": "required interface methods",
        "code": "String[] methods = {\"keyPressed\", \"keyReleased\", \"keyTyped\"};\nSystem.out.println(methods.length);",
        "question": "What prints?",
        "answer": "3",
        "answerAliases": [],
        "explanation": "KeyListener requires three methods, represented by the three names in the array.",
        "commonMistake": "Forgetting one method because it often has an empty body.",
        "clues": [
          "Count the method names."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-023",
        "title": "Var inferred type",
        "topic": "Java Basics",
        "skill": "var inference",
        "code": "var number = 5;\nnumber += 2;\nSystem.out.println(number);",
        "question": "What prints?",
        "answer": "7",
        "answerAliases": [],
        "explanation": "var is inferred as int from 5. Adding 2 changes number to 7.",
        "commonMistake": "Thinking var means the type can change later.",
        "clues": [
          "var still has one inferred type."
        ],
        "examTags": [
          "midterm1"
        ],
        "level": "level3"
      },
      {
        "id": "l3-024",
        "title": "Memory alias with array",
        "topic": "Arrays and ArrayLists",
        "skill": "array reference aliasing",
        "code": "int[] a = {1, 2};\nint[] b = a;\nb[1] = 9;\nSystem.out.println(a[1]);",
        "question": "What prints?",
        "answer": "9",
        "answerAliases": [],
        "explanation": "a and b refer to the same array, so changing b[1] changes what a[1] sees.",
        "commonMistake": "Thinking b is a copy of the array.",
        "clues": [
          "b = a copies the reference."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      },
      {
        "id": "l3-025",
        "title": "Abstract hook call",
        "topic": "Inheritance and Polymorphism",
        "skill": "abstract method dispatch",
        "code": "abstract class Screen {\n    void render() { System.out.print(\"start-\"); draw(); }\n    abstract void draw();\n}\nclass Menu extends Screen { void draw() { System.out.print(\"menu\"); } }\nnew Menu().render();",
        "question": "What prints?",
        "answer": "start-menu",
        "answerAliases": [],
        "explanation": "render() is inherited from Screen and calls draw(). The actual object is Menu, so Menu.draw() runs.",
        "commonMistake": "Thinking an abstract method cannot be called through a concrete subclass.",
        "clues": [
          "The object is Menu, and Menu implements draw()."
        ],
        "examTags": [
          "final"
        ],
        "level": "level3"
      }
    ]
  }
};
})();
