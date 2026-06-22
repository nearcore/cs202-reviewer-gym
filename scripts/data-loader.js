/*
 * The site keeps its working data in this file so index.html also works when
 * opened directly from disk. Matching JSON exports live in /data for people
 * who want to extend the bank with a local server.
 */
(function () {
  const topics = [
    {
      id: 'basics', number: '01', name: 'Java Basics', scope: 'Midterm 1',
      summary: 'Names, types, assignment, comparison, conversions, and how Java runs code.',
      coverage: ['Naming: camelCase variables/methods, PascalCase classes, UPPER_SNAKE_CASE constants.', 'Types: int, double, boolean, char, String, arrays, and object references.', 'Operators: =, ==, !=, <, >, <=, >=, &&, ||, and !.', 'Conversions: casts, Integer.parseInt, String.valueOf, integer versus floating division.', 'Modern Java: local var, text blocks, final variables, source code → bytecode → JVM.'],
      explain: 'A program is built from values, variables, types, and statements. A variable has one declared type, so Java can catch many mistakes before the program runs. Use = to store a value. Use == to compare primitive values. For String content, use .equals().',
      importance: 'These rules appear inside nearly every trace question. A small type or comparison mistake can change the whole answer.',
      traps: ['Using = in a condition instead of ==.', 'Trying to cast a String to int instead of using Integer.parseInt.', 'Forgetting that 5 / 2 uses integer division.'],
      code: `int age = 20;\nString name = "Ana";\nboolean canVote = age >= 18;\nSystem.out.println(name + ": " + canVote);`,
      trace: { prompt: 'What prints?', code: `int score = 8;\nscore += 2;\nSystem.out.println(score / 3);`, answer: '3', explanation: 'score becomes 10. Both values in 10 / 3 are ints, so Java keeps only the whole-number result: 3.' },
      debug: { prompt: 'Fix this comparison.', code: `int age = 18;\nif (age = 18) {\n    System.out.println("exactly 18");\n}`, answer: `int age = 18;\nif (age == 18) {\n    System.out.println("exactly 18");\n}`, explanation: '= assigns. The condition needs ==, which compares two int values.' },
      build: { prompt: 'Write a statement that converts the String "42" to an int named count, then prints count + 1.', keywords: ['Integer.parseInt', 'count'], solution: `int count = Integer.parseInt("42");\nSystem.out.println(count + 1);` },
      concept: { prompt: 'Which name follows the usual Java constant convention?', choices: ['maxSize', 'MAX_SIZE', 'MaxSize', 'max_size'], answer: 'MAX_SIZE', explanation: 'Constants use UPPER_SNAKE_CASE. Variables and methods use camelCase; classes use PascalCase.' },
      vocabulary: [{term:'variable', definition:'A named storage location with a type and a value.'}, {term:'bytecode', definition:'The compiled form of Java source code that the JVM runs.'}, {term:'typecasting', definition:'Explicitly converting a value to another compatible type.'}],
      javaFile: 'java-practice/01-basics/solution/BasicsPractice.java', examTags: ['midterm1', 'midterm2', 'final']
    },
    {
      id: 'conditions-loops', number: '02', name: 'Conditions, Loops, and Operators', scope: 'Midterm 1',
      summary: 'Make decisions, repeat work, and trace boolean, arithmetic, and switch logic.',
      coverage: ['if/else decisions and boolean expressions.', 'for and while loops, including safe loop-counter changes.', 'Order of operations, shortcut operators, integer division, and modulo.', 'break, continue, old-style switch fall-through, and switch expressions.', 'String.split and tracing values one line at a time.'],
      explain: 'An if statement chooses a path. A loop repeats while its condition is true. Trace a loop by writing down the counter, condition, and changed values on each pass. Parentheses happen first, then multiplication/division/modulo, then addition/subtraction, comparisons, and boolean operators.',
      importance: 'Loop counters, modulo, short-circuit boolean logic, break, continue, and switch fall-through are frequent code-reading questions.',
      traps: ['Using <= when an array loop needs < length.', 'Forgetting to change a while-loop counter.', 'Forgetting break in an old-style switch.'],
      code: `for (int i = 0; i < 3; i++) {\n    if (i % 2 == 0) {\n        System.out.println(i);\n    }\n}`,
      trace: { prompt: 'What is printed?', code: `int total = 0;\nfor (int i = 1; i <= 4; i++) {\n    total += i;\n}\nSystem.out.println(total);`, answer: '10', explanation: 'total receives 1, then 2, then 3, then 4. The final total is 10. The loop stops when i becomes 5.' },
      debug: { prompt: 'Fix the array loop so it never goes past the last index.', code: `int[] nums = {2, 4, 6};\nfor (int i = 0; i <= nums.length; i++) {\n    System.out.println(nums[i]);\n}`, answer: `int[] nums = {2, 4, 6};\nfor (int i = 0; i < nums.length; i++) {\n    System.out.println(nums[i]);\n}`, explanation: 'The last valid index is nums.length - 1. i < nums.length reaches exactly those indexes.' },
      build: { prompt: 'Write a loop that prints the odd numbers from 1 through 9.', keywords: ['for', '%', 'System.out.println'], solution: `for (int i = 1; i <= 9; i++) {\n    if (i % 2 != 0) {\n        System.out.println(i);\n    }\n}` },
      concept: { prompt: 'When is a switch usually clearer than if/else?', choices: ['Checking one value against several exact cases', 'Checking a numeric range', 'Checking two unrelated boolean conditions', 'Looping through an array'], answer: 'Checking one value against several exact cases', explanation: 'switch is best when one expression is compared with several exact values. Use if for ranges and flexible conditions.' },
      vocabulary: [{term:'modulo', definition:'The remainder left after integer division, written with %.'}, {term:'nesting', definition:'Putting one control structure inside another.'}, {term:'short-circuit', definition:'&& or || stopping as soon as the result is already known.'}],
      javaFile: 'java-practice/02-conditionals-loops/solution/LoopLab.java', examTags: ['midterm1', 'midterm2', 'final']
    },
    {
      id: 'arrays', number: '03', name: 'Arrays and ArrayLists', scope: 'Midterm 1 · Midterm 2',
      summary: 'Store collections, use indexes safely, and choose fixed arrays or growable ArrayLists.',
      coverage: ['Read/write array values; first index 0 and last index length - 1.', 'Nested loops and 2D arrays with rows then columns.', 'ArrayList add, get, set, remove, size, generics, and diamond operator.', 'Parallel arrays and the difference between fixed size and growable size.'],
      explain: 'An array has a fixed length and indexes starting at 0. Its last index is array.length - 1. An ArrayList can grow and uses add, get, set, remove, and size(). Both require careful index tracing.',
      importance: 'Array indexes, nested loops, 2D arrays, ArrayList methods, and off-by-one errors are core exam material.',
      traps: ['Using length as the last array index.', 'Using .length for an ArrayList instead of .size().', 'Removing from an ArrayList while looping forward without thinking about shifted indexes.'],
      code: `ArrayList<String> names = new ArrayList<>();\nnames.add("Ana");\nnames.add("Ben");\nnames.set(1, "Bella");\nSystem.out.println(names.get(1));`,
      trace: { prompt: 'What does this print?', code: `int[][] grid = {{1, 2, 3}, {4, 5, 6}};\nSystem.out.println(grid[1][2]);`, answer: '6', explanation: 'grid[1] is the second row: {4, 5, 6}. Index 2 in that row is 6.' },
      debug: { prompt: 'Fix the attempt to print the last array item.', code: `String[] names = {"Ana", "Ben", "Chris"};\nSystem.out.println(names[names.length]);`, answer: `String[] names = {"Ana", "Ben", "Chris"};\nSystem.out.println(names[names.length - 1]);`, explanation: 'length is 3, but valid indexes are 0, 1, and 2.' },
      build: { prompt: 'Write a method that returns the average of an int array. Use 2.0 or a cast so the division can produce decimals.', keywords: ['double', 'for', 'length', '2.0'], solution: `public static double average(int[] values) {\n    int total = 0;\n    for (int value : values) {\n        total += value;\n    }\n    return total / (double) values.length;\n}` },
      concept: { prompt: 'Which call replaces the first ArrayList item?', choices: ['names.set(0, "Ana")', 'names.add(0, "Ana")', 'names.get(0, "Ana")', 'names[0] = "Ana"'], answer: 'names.set(0, "Ana")', explanation: 'set(index, value) replaces an existing ArrayList element. add inserts an element.' },
      vocabulary: [{term:'index', definition:'The numeric position of an item in an array or list.'}, {term:'parallel arrays', definition:'Arrays whose same indexes describe related information.'}, {term:'diamond operator', definition:'The <> in new ArrayList<>() that lets Java infer the generic type.'}],
      javaFile: 'java-practice/03-arrays-arraylists/solution/ArrayListPractice.java', examTags: ['midterm1', 'midterm2', 'final']
    },
    {
      id: 'methods', number: '04', name: 'Methods', scope: 'Midterm 2',
      summary: 'Write, call, trace, overload, and return values from reusable methods.',
      coverage: ['Function is the general word; Java normally says method.', 'Headers: modifier, optional static, return type, name, formal parameters.', 'Actual parameters, signatures, calls, return statements, and void.', 'Overloading, method stubs, and side effects versus returned values.'],
      explain: 'A method groups a task under a name. Its header has an access modifier, optional static, return type, name, and formal parameters. Arguments at the call site are actual parameters. A non-void method must return a value of the declared type.',
      importance: 'Method headers, return types, missing returns, parameter matching, overloading, and call tracing are tested together.',
      traps: ['Printing an answer when the method must return it.', 'Giving a constructor or method the wrong return type.', 'Thinking overloaded methods differ only by return type.'],
      code: `public static int larger(int a, int b) {\n    return a > b ? a : b;\n}\nint answer = larger(3, 7);`,
      trace: { prompt: 'What prints?', code: `static int add(int a, int b) {\n    return a + b;\n}\nSystem.out.println(add(2, add(3, 4)));`, answer: '9', explanation: 'The inside add(3, 4) returns 7. Then add(2, 7) returns 9.' },
      debug: { prompt: 'Fix this method so it returns the sum.', code: `public static int add(int a, int b) {\n    System.out.println(a + b);\n}`, answer: `public static int add(int a, int b) {\n    return a + b;\n}`, explanation: 'The return type is int, so every path must return an int. Printing is a side effect, not a returned value.' },
      build: { prompt: 'Write a boolean method named isEven that accepts an int and returns true for even values.', keywords: ['boolean', 'isEven', '%', 'return'], solution: `public static boolean isEven(int number) {\n    return number % 2 == 0;\n}` },
      concept: { prompt: 'What is the method signature of public static double average(int a, int b)?', choices: ['average(int, int)', 'double average', 'public static average', 'average(a, b)'], answer: 'average(int, int)', explanation: 'A signature uses the method name and formal parameter types, not return type, parameter names, or modifiers.' },
      vocabulary: [{term:'formal parameter', definition:'A variable in a method header that receives a value.'}, {term:'actual parameter', definition:'A value or expression supplied when calling a method.'}, {term:'overloading', definition:'Using the same method name with different parameter lists.'}],
      javaFile: 'java-practice/04-methods/solution/MethodBasicsSolution.java', examTags: ['midterm2', 'final']
    },
    {
      id: 'classes', number: '05', name: 'Classes and Objects', scope: 'Midterm 2',
      summary: 'Model data and behavior with fields, objects, access modifiers, and UML.',
      coverage: ['Class versus object; attributes/fields versus behaviors/methods.', 'Fields versus local variables and this for shadowing.', 'public, private, protected, package-private, getters, and setters.', 'Object references and basic UML visibility symbols (+, -, #).'],
      explain: 'A class is a blueprint. An object is one real instance made from that blueprint. Fields store an object’s state; methods describe what it can do. Keep fields private unless there is a clear reason not to, then use methods for controlled access.',
      importance: 'Expect class/object vocabulary, fields versus locals, access modifiers, getters/setters, object references, and reading simple UML.',
      traps: ['Calling a class an object.', 'Accessing a private field directly from another class.', 'Forgetting that two references can point to the same object.'],
      code: `public class Student {\n    private String name;\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}`,
      trace: { prompt: 'What prints?', code: `Student a = new Student("Ana");\nStudent b = a;\nb.setName("Bella");\nSystem.out.println(a.getName());`, answer: 'Bella', explanation: 'a and b hold references to the same Student object. Changing that object through b is visible through a.' },
      debug: { prompt: 'Fix the shadowing problem in setName.', code: `private String name;\npublic void setName(String name) {\n    name = name;\n}`, answer: `private String name;\npublic void setName(String name) {\n    this.name = name;\n}`, explanation: 'The parameter name hides the field name. this.name explicitly means the current object’s field.' },
      build: { prompt: 'Create a Book class with private title and pages fields, a constructor, getTitle(), setTitle(), and a useful toString().', keywords: ['class Book', 'private', 'Book(', 'getTitle', 'toString'], solution: `public class Book {\n    private String title;\n    private int pages;\n\n    public Book(String title, int pages) {\n        this.title = title;\n        this.pages = pages;\n    }\n\n    public String getTitle() { return title; }\n    public void setTitle(String title) { this.title = title; }\n\n    @Override\n    public String toString() { return title + " (" + pages + " pages)"; }\n}` },
      concept: { prompt: 'In UML, what does a minus sign (-) before a field or method mean?', choices: ['private', 'public', 'protected', 'static'], answer: 'private', explanation: 'UML uses + for public, - for private, and # for protected.' },
      vocabulary: [{term:'class', definition:'A blueprint that defines fields and methods.'}, {term:'object', definition:'An instance created from a class.'}, {term:'field', definition:'A variable that belongs to an object or class.'}],
      javaFile: 'java-practice/05-classes-objects/solution/StudentPractice.java', examTags: ['midterm2', 'final']
    },
    {
      id: 'constructors', number: '06', name: 'Constructors', scope: 'Midterm 2',
      summary: 'Set up objects with default, overloaded, copy, and record constructors.',
      coverage: ['Default/no-argument and overloaded constructors.', 'Copy constructors and constructor chaining with this(...).', 'No return type; name must match the class.', 'Record canonical and compact constructors.'],
      explain: 'A constructor runs when new creates an object. It has the same name as its class and no return type. Constructors set a valid starting state. You can overload them, make a copy constructor, or use a compact canonical constructor in a record.',
      importance: 'Constructor syntax, this, constructor chaining, copy constructors, and super calls are common OOP questions.',
      traps: ['Writing void before a constructor.', 'Giving a constructor a different name from the class.', 'Forgetting to initialize important fields.'],
      code: `public class Student {\n    private String name;\n\n    public Student() {\n        this("Unknown");\n    }\n\n    public Student(String name) {\n        this.name = name;\n    }\n}`,
      trace: { prompt: 'What prints?', code: `class Box {\n    int size;\n    Box() { this(4); }\n    Box(int size) { this.size = size; }\n}\nSystem.out.println(new Box().size);`, answer: '4', explanation: 'The no-argument constructor calls the other constructor with 4.' },
      debug: { prompt: 'Fix the constructor declaration.', code: `public class Dog {\n    public void Dog(String name) {\n        this.name = name;\n    }\n}`, answer: `public class Dog {\n    public Dog(String name) {\n        this.name = name;\n    }\n}`, explanation: 'A constructor has no return type. void makes this an ordinary method named Dog.' },
      build: { prompt: 'Write a copy constructor for a Student class that copies name and id from another Student.', keywords: ['Student(Student other)', 'other.name', 'other.id'], solution: `public Student(Student other) {\n    this.name = other.name;\n    this.id = other.id;\n}` },
      concept: { prompt: 'Which statement is true about a constructor?', choices: ['It has no return type', 'It must be static', 'It can be called without new only', 'It must return this'], answer: 'It has no return type', explanation: 'A constructor is identified by its class name and its lack of a return type.' },
      vocabulary: [{term:'default constructor', definition:'A no-argument constructor; Java can supply one only when none is declared.'}, {term:'copy constructor', definition:'A constructor that receives another object of the same type and copies its state.'}, {term:'canonical constructor', definition:'A record constructor that accepts one value for each record component.'}],
      javaFile: 'java-practice/06-constructors/solution/ConstructorLab.java', examTags: ['midterm2', 'final']
    },
    {
      id: 'inheritance', number: '07', name: 'Inheritance and Polymorphism', scope: 'Midterm 2 · Final',
      summary: 'Use is-a relationships, subclasses, overriding, super, polymorphism, abstract classes, and instanceof safely.',
      coverage: ['is-a rule, extends, superclass/subclass, inherited behavior, and super.', '@Override, exact parameter matching, and dynamic dispatch.', 'Abstract classes/methods and optional hook methods.', 'Upcasting, safe downcasting, instanceof, and parent-type collections.'],
      explain: 'Inheritance shares common state and behavior through an is-a relationship. A subclass extends a superclass. Polymorphism lets a parent-type reference point to different child objects; when an overridden instance method is called, Java runs the child’s version.',
      importance: 'You need to identify reference type versus object type, trace overridden methods, decide when to use super, and avoid unsafe casts.',
      traps: ['Using inheritance for a has-a relationship.', 'Assuming the reference type decides an overridden method call.', 'Downcasting without checking instanceof.'],
      code: `abstract class Animal {\n    public abstract void speak();\n}\nclass Dog extends Animal {\n    @Override\n    public void speak() { System.out.println("bark"); }\n}\nAnimal pet = new Dog();\npet.speak();`,
      trace: { prompt: 'What prints?', code: `class Animal { void speak() { System.out.println("sound"); } }\nclass Dog extends Animal { @Override void speak() { System.out.println("bark"); } }\nAnimal animal = new Dog();\nanimal.speak();`, answer: 'bark', explanation: 'The reference type is Animal, but the actual object is Dog. Dynamic dispatch runs Dog.speak().' },
      debug: { prompt: 'Fix the attempted override so @Override can check it.', code: `class Animal {\n    public void speak() {}\n}\nclass Dog extends Animal {\n    @Override\n    public void Speak() {}\n}`, answer: `class Animal {\n    public void speak() {}\n}\nclass Dog extends Animal {\n    @Override\n    public void speak() {}\n}`, explanation: 'Java is case-sensitive. Speak and speak are different names, so the original does not override anything.' },
      build: { prompt: 'Create an Animal superclass and Cat subclass. Give both a speak method; override Cat.speak to print "meow". Then call it through an Animal reference.', keywords: ['extends Animal', '@Override', 'Animal', 'new Cat'], solution: `class Animal {\n    public void speak() { System.out.println("sound"); }\n}\nclass Cat extends Animal {\n    @Override\n    public void speak() { System.out.println("meow"); }\n}\nAnimal pet = new Cat();\npet.speak();` },
      concept: { prompt: 'Which relationship fits inheritance?', choices: ['A Dog is an Animal', 'A Wheel is a Car', 'A Library has Books', 'A Student has a name'], answer: 'A Dog is an Animal', explanation: 'Inheritance models is-a. The other examples are has-a or part-of relationships.' },
      vocabulary: [{term:'polymorphism', definition:'One parent or interface reference using behavior from different object types.'}, {term:'overriding', definition:'A subclass supplying its own version of an inherited method.'}, {term:'abstract method', definition:'A method with no body that a concrete subclass must implement.'}],
      javaFile: 'java-practice/07-inheritance-polymorphism/solution/AnimalLab.java', examTags: ['midterm2', 'final']
    },
    {
      id: 'interfaces', number: '08', name: 'Interfaces and KeyListener', scope: 'Final',
      summary: 'Use interfaces as contracts and handle keyboard input with KeyListener.',
      coverage: ['Interface contract, implements, and polymorphism through an interface reference.', 'Interface versus abstract class: contract-only versus shared state/implementation.', 'KeyListener keyPressed, keyReleased, keyTyped, focus, and repaint.'],
      explain: 'An interface states behavior a class promises to provide. A class uses implements and supplies every required method. KeyListener is an interface with keyPressed, keyReleased, and keyTyped. A component must have keyboard focus before it receives key events.',
      importance: 'Final questions may ask you to complete interface methods, explain @Override, and diagnose why a KeyListener does not receive input.',
      traps: ['Using extends instead of implements for an interface.', 'Forgetting one KeyListener method.', 'Not making the panel focusable or requesting focus.'],
      code: `public interface Drawable {\n    void draw();\n}\npublic class Circle implements Drawable {\n    @Override\n    public void draw() {\n        System.out.println("Drawing a circle");\n    }\n}`,
      trace: { prompt: 'What prints?', code: `interface Greeter { void greet(); }\nclass Friendly implements Greeter {\n    public void greet() { System.out.println("Hello"); }\n}\nGreeter g = new Friendly();\ng.greet();`, answer: 'Hello', explanation: 'The interface reference points to a Friendly object, so Friendly.greet runs.' },
      debug: { prompt: 'Fix the class declaration.', code: `interface Drawable { void draw(); }\nclass Square extends Drawable {\n    public void draw() {}\n}`, answer: `interface Drawable { void draw(); }\nclass Square implements Drawable {\n    @Override\n    public void draw() {}\n}`, explanation: 'A class implements an interface. extends is used for a class extending another class.' },
      build: { prompt: 'Write the three empty KeyListener methods with correct signatures. In keyPressed, update x when the right arrow is pressed and call repaint().', keywords: ['keyPressed', 'keyReleased', 'keyTyped', 'repaint'], solution: `@Override\npublic void keyPressed(KeyEvent e) {\n    if (e.getKeyCode() == KeyEvent.VK_RIGHT) x += 5;\n    repaint();\n}\n@Override public void keyReleased(KeyEvent e) {}\n@Override public void keyTyped(KeyEvent e) {}` },
      concept: { prompt: 'Why might a Swing panel not receive key presses?', choices: ['It does not have keyboard focus', 'It has a paintComponent method', 'It uses a field', 'It extends JPanel'], answer: 'It does not have keyboard focus', explanation: 'A listener only receives keys when its component can receive and currently owns focus.' },
      vocabulary: [{term:'interface', definition:'A contract listing behavior a class must provide.'}, {term:'implements', definition:'The keyword used when a class agrees to an interface contract.'}, {term:'KeyListener', definition:'A Java interface for keyboard pressed, released, and typed events.'}],
      javaFile: 'java-practice/08-interfaces-keylistener/MoveSquareGame.java', examTags: ['final']
    },
    {
      id: 'equals', number: '09', name: 'equals(), ==, =, and toString()', scope: 'Midterm 2 · Final',
      summary: 'Separate assignment, primitive comparison, reference comparison, logical equality, and object display.',
      coverage: ['Assignment with =; primitive values and reference identity with ==.', 'String/content comparison with equals.', 'Correct equals(Object): identity, type check, cast/pattern, field comparison.', 'Useful toString and its automatic use in System.out.println(object).'],
      explain: '= stores a value. == compares primitive values or asks whether two object references point to the exact same object. equals() usually compares meaningful object content. toString() returns the text Java uses when you print an object.',
      importance: 'Strings, object references, correctly overriding equals(Object), and toString() are high-value trace and debugging topics.',
      traps: ['Comparing String contents with ==.', 'Writing equals(Student other), which overloads instead of overrides equals(Object).', 'Not checking type before casting in equals.'],
      code: `@Override\npublic boolean equals(Object obj) {\n    if (this == obj) return true;\n    if (!(obj instanceof Student other)) return false;\n    return id == other.id && name.equals(other.name);\n}`,
      trace: { prompt: 'What prints?', code: `String a = new String("hi");\nString b = new String("hi");\nSystem.out.println(a == b);\nSystem.out.println(a.equals(b));`, answer: 'false\ntrue', explanation: 'Two new String calls create different objects, so == is false. Their characters are the same, so equals is true.' },
      debug: { prompt: 'Fix this equals method header so it overrides Object.equals.', code: `public boolean equals(Student other) {\n    return this.id == other.id;\n}`, answer: `@Override\npublic boolean equals(Object obj) {\n    if (!(obj instanceof Student other)) return false;\n    return this.id == other.id;\n}`, explanation: 'The overridden method must receive Object. equals(Student) is a different overloaded method.' },
      build: { prompt: 'Write a toString() for a Book with title and pages fields. It should return a readable String, not print directly.', keywords: ['String toString', 'return', 'title', 'pages'], solution: `@Override\npublic String toString() {\n    return "Book{title='" + title + "', pages=" + pages + "}";\n}` },
      concept: { prompt: 'What does == compare for object references?', choices: ['Whether references point to the same object', 'Whether fields have equal contents', 'Whether objects have the same toString', 'Whether their classes have the same name'], answer: 'Whether references point to the same object', explanation: 'For objects, == compares identity (the reference), not logical content.' },
      vocabulary: [{term:'assignment', definition:'Putting a value into a variable using =.'}, {term:'reference equality', definition:'Two references pointing to the same object, tested with ==.'}, {term:'toString', definition:'A method that returns a String representation of an object.'}],
      javaFile: 'java-practice/09-equals-tostring/solution/EqualityPractice.java', examTags: ['midterm2', 'final']
    },
    {
      id: 'exceptions', number: '10', name: 'Exceptions, Files, and Null Pointers', scope: 'Midterm 2 · Final',
      summary: 'Handle runtime problems, read files, parse safely, and find null references.',
      coverage: ['try/catch, multiple catches, finally, checked versus unchecked at a practical level.', 'NullPointerException, NumberFormatException, ArrayIndexOutOfBoundsException.', 'File, Scanner, hasNextLine, nextLine, close/try-with-resources, split, and parsing.'],
      explain: 'An exception interrupts normal flow when Java finds a problem. Put risky code in try and decide what to do in catch. A NullPointerException means you used a reference that currently points to no object. File reading commonly needs File, Scanner, a loop, and error handling.',
      importance: 'You need to recognize common exceptions and write a small try/catch around parsing or file input.',
      traps: ['Catching an exception and silently hiding the problem.', 'Calling a method on null.', 'Forgetting to close a Scanner after reading a file.'],
      code: `try (Scanner input = new Scanner(new File("data.txt"))) {\n    while (input.hasNextLine()) {\n        System.out.println(input.nextLine());\n    }\n} catch (FileNotFoundException e) {\n    System.out.println("File was not found.");\n}`,
      trace: { prompt: 'Which catch block runs?', code: `try {\n    int n = Integer.parseInt("ten");\n} catch (NumberFormatException e) {\n    System.out.println("bad number");\n}`, answer: 'bad number', explanation: '"ten" is not a valid int representation, so parseInt throws NumberFormatException.' },
      debug: { prompt: 'Fix the null-pointer problem.', code: `Dog dog = null;\ndog.bark();`, answer: `Dog dog = new Dog();\ndog.bark();`, explanation: 'null is not an object. Create an object (or check for null when that is the valid situation) before calling a method.' },
      build: { prompt: 'Write a try/catch that parses a String named text as an int. Print "Invalid number" if parsing fails.', keywords: ['try', 'Integer.parseInt', 'catch', 'NumberFormatException'], solution: `try {\n    int value = Integer.parseInt(text);\n    System.out.println(value);\n} catch (NumberFormatException e) {\n    System.out.println("Invalid number");\n}` },
      concept: { prompt: 'Which exception is most likely from nums[nums.length]?', choices: ['ArrayIndexOutOfBoundsException', 'NumberFormatException', 'FileNotFoundException', 'NullPointerException'], answer: 'ArrayIndexOutOfBoundsException', explanation: 'nums.length is one past the last valid index.' },
      vocabulary: [{term:'exception', definition:'An object representing a problem during program execution.'}, {term:'NullPointerException', definition:'An exception from using a null reference as if it were an object.'}, {term:'try-with-resources', definition:'A try form that closes a resource such as Scanner automatically.'}],
      javaFile: 'java-practice/10-exceptions-files/solution/FilePractice.java', examTags: ['midterm2', 'final']
    },
    {
      id: 'static-final', number: '11', name: 'Static, Final, Memory, and Garbage Collection', scope: 'Final',
      summary: 'Distinguish class-level versus object-level state, protect values, and reason about reachable objects.',
      coverage: ['Static fields/methods versus instance fields/methods.', 'final variables, final methods, final classes, and constant naming.', 'Reachability, garbage collection, and why retained references can cause memory leaks.'],
      explain: 'A static field belongs to the class and is shared by all objects. An instance field belongs to each object. final means a variable cannot be reassigned; final methods cannot be overridden; final classes cannot be extended. Garbage collection can reclaim objects that are no longer reachable.',
      importance: 'Static shared counters and the several uses of final are frequent final questions. Memory leak questions are usually conceptual.',
      traps: ['Using a static method to directly access instance fields.', 'Thinking final makes an object immutable.', 'Assuming Java cannot leak memory because it has garbage collection.'],
      code: `public class Counter {\n    private static int count = 0;\n    public Counter() { count++; }\n    public static int getCount() { return count; }\n}`,
      trace: { prompt: 'What prints?', code: `class Counter {\n    static int count = 0;\n    Counter() { count++; }\n}\nnew Counter();\nnew Counter();\nSystem.out.println(Counter.count);`, answer: '2', explanation: 'count is static, so both objects change the single shared field.' },
      debug: { prompt: 'Fix the constant declaration.', code: `public static final int maxSize = 100;`, answer: `public static final int MAX_SIZE = 100;`, explanation: 'The code compiles either way, but constants use UPPER_SNAKE_CASE so readers can recognize them.' },
      build: { prompt: 'Create a class-level constant MAX_ATTEMPTS set to 3 and an instance field attempts. Explain in a comment why they are different.', keywords: ['static final', 'MAX_ATTEMPTS', 'int attempts'], solution: `public static final int MAX_ATTEMPTS = 3;\nprivate int attempts; // each object tracks its own attempts` },
      concept: { prompt: 'When can garbage collection reclaim an object?', choices: ['When no reachable reference can access it', 'Whenever a variable is final', 'Immediately after every method call', 'Only when the program ends'], answer: 'When no reachable reference can access it', explanation: 'An object becomes eligible when it is unreachable. The exact collection time is not guaranteed.' },
      vocabulary: [{term:'static field', definition:'One shared field that belongs to the class.'}, {term:'final method', definition:'A method that subclasses cannot override.'}, {term:'memory leak', definition:'Unused objects kept reachable by references, preventing cleanup.'}],
      javaFile: 'java-practice/11-static-final-memory/solution/StaticFinalPractice.java', examTags: ['final']
    },
    {
      id: 'graphics', number: '12', name: 'Graphics', scope: 'Midterm 1 · Final',
      summary: 'Draw shapes, text, and colors in a Swing paintComponent method.',
      coverage: ['paintComponent, super.paintComponent, Graphics, setColor, and repaint.', 'drawLine, drawRect, fillRect, drawOval, fillOval, and drawString.', 'x/y coordinates, width/height, and composing a small picture.'],
      explain: 'Java Swing drawing uses a Graphics object passed to paintComponent. Call super.paintComponent(g) first, then set colors and draw shapes with coordinates. draw methods outline; fill methods color the inside.',
      importance: 'Graphics questions usually check which method draws a shape, coordinate reasoning, colors, and the paintComponent pattern.',
      traps: ['Forgetting super.paintComponent(g).', 'Using width/height as bottom-right coordinates instead of dimensions.', 'Drawing outside paintComponent instead of saving state and calling repaint.'],
      code: `@Override\nprotected void paintComponent(Graphics g) {\n    super.paintComponent(g);\n    g.setColor(Color.BLUE);\n    g.fillRect(20, 20, 80, 50);\n    g.drawString("Hello", 25, 45);\n}`,
      trace: { prompt: 'Which shape is filled by this call?', code: `g.fillOval(10, 20, 30, 40);`, answer: 'An oval inside a 30 by 40 bounding box starting at (10, 20)', explanation: 'fillOval draws a filled oval. The final two values are width and height of its bounding box.' },
      debug: { prompt: 'Fix the paint method setup.', code: `protected void paintComponent(Graphics g) {\n    g.fillRect(0, 0, 50, 50);\n}`, answer: `@Override\nprotected void paintComponent(Graphics g) {\n    super.paintComponent(g);\n    g.fillRect(0, 0, 50, 50);\n}`, explanation: 'Calling super clears/prepares the panel, and @Override lets Java check the method header.' },
      build: { prompt: 'In paintComponent, draw a simple house using a filled rectangle, two lines for a roof, and an oval sun.', keywords: ['fillRect', 'drawLine', 'fillOval'], solution: `g.fillRect(80, 120, 120, 90);\ng.drawLine(70, 120, 140, 60);\ng.drawLine(140, 60, 210, 120);\ng.fillOval(240, 35, 45, 45);` },
      concept: { prompt: 'Which method outlines a rectangle without filling it?', choices: ['drawRect', 'fillRect', 'drawOval', 'setColor'], answer: 'drawRect', explanation: 'drawRect outlines; fillRect fills the rectangle.' },
      vocabulary: [{term:'Graphics', definition:'The object that provides drawing methods in Swing.'}, {term:'repaint', definition:'A request for Swing to redraw a component later.'}, {term:'coordinate', definition:'A position, usually x then y, in the drawing area.'}],
      javaFile: 'java-practice/12-graphics/solution/HouseDrawing.java', examTags: ['midterm1', 'final']
    },
    {
      id: 'records', number: '13', name: 'Records vs Classes', scope: 'Final',
      summary: 'Choose compact immutable data carriers or flexible regular classes.',
      coverage: ['Record components, canonical/compact constructors, and accessor methods.', 'Generated equals, hashCode, and toString.', 'Choosing a normal class for mutable fields or more flexible behavior.'],
      explain: 'A record is concise syntax for a simple data carrier. Java supplies private final components, accessor methods, a constructor, equals, hashCode, and toString. Use a normal class when you need mutable state, more control, or an inheritance design that records do not fit.',
      importance: 'Final questions may ask what Java creates for a record and whether a record or class fits a design.',
      traps: ['Calling a record accessor getName() instead of name().', 'Expecting record components to be mutable.', 'Using a record when the object needs changing state.'],
      code: `public record Student(String name, int id) {\n    public Student {\n        if (name == null) name = "Unknown";\n    }\n}\nStudent s = new Student("Ana", 7);\nSystem.out.println(s.name());`,
      trace: { prompt: 'What prints?', code: `record Point(int x, int y) {}\nPoint p = new Point(2, 3);\nSystem.out.println(p.x() + p.y());`, answer: '5', explanation: 'Record accessors use the component names: x() and y().' },
      debug: { prompt: 'Fix the record accessor call.', code: `record Student(String name) {}\nStudent s = new Student("Ana");\nSystem.out.println(s.getName());`, answer: `record Student(String name) {}\nStudent s = new Student("Ana");\nSystem.out.println(s.name());`, explanation: 'Records generate name(), not JavaBean-style getName(), unless you write that method yourself.' },
      build: { prompt: 'Create a record Course with code and credits. Add a compact constructor that rejects credits less than 1.', keywords: ['record Course', 'public Course', 'credits', 'IllegalArgumentException'], solution: `public record Course(String code, int credits) {\n    public Course {\n        if (credits < 1) {\n            throw new IllegalArgumentException("credits must be positive");\n        }\n    }\n}` },
      concept: { prompt: 'Which behavior does Java generate for a record?', choices: ['equals and toString', 'mutable setter methods', 'a superclass chosen by the record', 'a no-argument constructor for every record'], answer: 'equals and toString', explanation: 'Records generate accessors, a canonical constructor, equals, hashCode, and toString.' },
      vocabulary: [{term:'record', definition:'A compact declaration for an immutable-style data carrier.'}, {term:'accessor', definition:'A method that returns a record component, such as name().'}, {term:'data carrier', definition:'An object mainly used to hold related data.'}],
      javaFile: 'java-practice/13-records-classes/solution/RecordClassDemo.java', examTags: ['final']
    },
    {
      id: 'final-mixed', number: '14', name: 'Final Exam Mixed Practice', scope: 'Final',
      summary: 'Combine topics the way a final exam does: trace, debug, design, and explain.',
      coverage: ['Mixed code tracing: arrays, calls, objects, overridden methods, and errors.', 'Switch statements versus expressions; fall-through, break, and continue.', 'JavaDoc, method stubs, side effects, safe casts, and final-level debugging.'],
      explain: 'Mixed questions test whether you can connect ideas. Slow down: identify types, references, method calls, loop boundaries, and possible exceptions before deciding. Use the topic-specific pages when a mixed question reveals a gap.',
      importance: 'The final can combine arrays, methods, OOP, interfaces, exceptions, and modern Java in one short program.',
      traps: ['Answering only from a familiar keyword instead of tracing the whole program.', 'Ignoring the declared reference type and actual object type.', 'Skipping compile-time errors while predicting output.'],
      code: `List<Animal> animals = List.of(new Dog(), new Cat());\nfor (Animal animal : animals) {\n    animal.speak();\n}`,
      trace: { prompt: 'What prints?', code: `static int twice(int n) { return n * 2; }\nint[] values = {1, 2, 3};\nSystem.out.println(twice(values[1]));`, answer: '4', explanation: 'values[1] is 2. twice(2) returns 4.' },
      debug: { prompt: 'Fix this safe-downcast attempt.', code: `Animal animal = getAnimal();\nDog dog = (Dog) animal;\ndog.fetch();`, answer: `Animal animal = getAnimal();\nif (animal instanceof Dog dog) {\n    dog.fetch();\n}`, explanation: 'A cast can fail if the actual object is not Dog. instanceof checks first and pattern matching creates dog safely.' },
      build: { prompt: 'Design a small LibraryItem interface with a describe method, then create a Book class that implements it and overrides toString.', keywords: ['interface LibraryItem', 'implements LibraryItem', '@Override', 'toString'], solution: `interface LibraryItem { String describe(); }\nclass Book implements LibraryItem {\n    @Override public String describe() { return "Book"; }\n    @Override public String toString() { return describe(); }\n}` },
      concept: { prompt: 'What is the best first action on a code-trace question?', choices: ['List values and follow execution line by line', 'Run it immediately', 'Choose the longest answer', 'Only inspect method names'], answer: 'List values and follow execution line by line', explanation: 'A compact trace table catches changes in variables, references, and loop conditions.' },
      vocabulary: [{term:'dynamic dispatch', definition:'Choosing an overridden instance method based on the actual object at runtime.'}, {term:'side effect', definition:'A method changing outside state, printing, or doing I/O.'}, {term:'stub', definition:'An unfinished method kept in place while a program is being built.'}],
      javaFile: 'java-practice/mini-projects/FinalOopChallenge.java', examTags: ['final']
    },
    {
      id: 'vocabulary', number: '15', name: 'Vocabulary Bank', scope: 'Midterm 1 · Midterm 2 · Final',
      summary: 'Use short, accurate definitions and connect each word to code.',
      coverage: ['Midterm 1: variable, block, keyword, field, local, index, loop, nesting, concatenation, JVM.', 'Midterm 2: method parts, parameters, signature, constructors, instantiate, object.', 'Final: static, polymorphism, stub, interface, abstract class/method, memory leak, garbage collection.'],
      explain: 'Vocabulary is useful only when you can recognize it in code. Flip cards, then answer a question or point to the exact line where the idea appears. If a term is weak, return to its topic and do one trace.',
      importance: 'Definitions show up directly on quizzes and make code explanations more precise.',
      traps: ['Memorizing wording without connecting it to a Java example.', 'Mixing formal parameters with actual parameters.', 'Mixing class, object, and reference.'],
      code: `// field: belongs to this object\nprivate String name;\n\npublic void setName(String newName) {\n    // local variable: exists only in this method\n    String trimmed = newName.trim();\n    this.name = trimmed;\n}`,
      trace: { prompt: 'Which variable is a local variable?', code: `class Student {\n    private String name;\n    void rename(String newName) {\n        String clean = newName.trim();\n        name = clean;\n    }\n}`, answer: 'clean', explanation: 'clean is declared inside rename, so it exists only during that method call. name is a field.' },
      debug: { prompt: 'Fix the definition: “An object is the blueprint used to make classes.”', code: `// An object is the blueprint used to make classes.`, answer: `// A class is a blueprint. An object is an instance created from a class.`, explanation: 'The direction matters: classes describe objects; new creates objects from classes.' },
      build: { prompt: 'Write one sentence and one tiny Java example that distinguishes a field from a local variable.', keywords: ['field', 'local', 'class', 'method'], solution: `// name is a field because it belongs to each Student.\nprivate String name;\nvoid printName() {\n    String label = "Student: "; // local variable\n    System.out.println(label + name);\n}` },
      concept: { prompt: 'What is an actual parameter?', choices: ['A value supplied in a method call', 'A variable in a method header', 'A class field', 'A return value'], answer: 'A value supplied in a method call', explanation: 'The header has formal parameters. The call supplies actual parameters (arguments).' },
      vocabulary: [{term:'keyword', definition:'A reserved Java word such as class, public, or return.'}, {term:'block', definition:'Statements enclosed by braces { }.'}, {term:'concatenation', definition:'Joining Strings with +.'}],
      javaFile: 'java-practice/01-basics/README.md', examTags: ['midterm1', 'midterm2', 'final']
    }
  ];

  const extraQuestions = [
    { id: 'final-mixed-001', topic: 'Inheritance and Polymorphism', subtopic: 'dynamic dispatch', type: 'trace', difficulty: 'exam', prompt: 'What prints?', code: `class A { void go() { System.out.print("A"); } }\nclass B extends A { @Override void go() { System.out.print("B"); } }\nA value = new B();\nvalue.go();`, choices: ['A', 'B', 'AB', 'Compile error'], answer: 'B', explanation: 'The actual object is B, so its overridden method runs.', examTags: ['final'], relatedJavaFile: 'java-practice/07-inheritance-polymorphism/solution/AnimalLab.java' },
    { id: 'final-mixed-002', topic: 'Arrays and ArrayLists', subtopic: 'index', type: 'trace', difficulty: 'exam', prompt: 'What prints?', code: `int[] a = {2, 4, 6};\nfor (int i = a.length - 1; i >= 0; i--) {\n    System.out.print(a[i]);\n}`, choices: ['246', '642', '024', 'Error'], answer: '642', explanation: 'The loop begins at index 2 and moves down to index 0.', examTags: ['final'], relatedJavaFile: 'java-practice/03-arrays-arraylists/trace/TraceArrayIndexes.java' },
    { id: 'final-mixed-003', topic: 'Methods', subtopic: 'return', type: 'multiple-choice', difficulty: 'exam', prompt: 'Which method header correctly returns whether a String is empty?', choices: ['public static boolean isEmpty(String text)', 'public static String isEmpty(boolean text)', 'public boolean isEmpty()', 'public static void isEmpty(String text)'], answer: 'public static boolean isEmpty(String text)', explanation: 'It accepts a String and returns a boolean.', examTags: ['final'], relatedJavaFile: 'java-practice/04-methods/solution/MethodBasicsSolution.java' },
    { id: 'final-mixed-004', topic: 'Exceptions, Files, and Null Pointers', subtopic: 'exceptions', type: 'debug', difficulty: 'exam', prompt: 'Write a safe replacement for this line when animal may be null: animal.speak();', code: 'animal.speak();', answer: 'if (animal != null) {\n    animal.speak();\n}', explanation: 'Check the reference before using it when null is possible.', selfCheck: true, examTags: ['final'], relatedJavaFile: 'java-practice/10-exceptions-files/solution/FilePractice.java' },
    { id: 'final-mixed-005', topic: 'Static, Final, Memory, and Garbage Collection', subtopic: 'final', type: 'multiple-choice', difficulty: 'exam', prompt: 'What does final mean on a method?', choices: ['Subclasses cannot override it', 'The method is automatically static', 'The method cannot return a value', 'The method can only run once'], answer: 'Subclasses cannot override it', explanation: 'final prevents overriding; it does not make a method static.', examTags: ['final'], relatedJavaFile: 'java-practice/11-static-final-memory/solution/StaticFinalPractice.java' },
    { id: 'final-mixed-006', topic: 'Records vs Classes', subtopic: 'records', type: 'multiple-choice', difficulty: 'exam', prompt: 'Which call reads the name from record Student(String name)?', choices: ['student.name()', 'student.getName()', 'student.name', 'Student.name()'], answer: 'student.name()', explanation: 'A record generates an accessor with the same name as its component.', examTags: ['final'], relatedJavaFile: 'java-practice/13-records-classes/solution/RecordClassDemo.java' },
    { id: 'final-mixed-007', topic: 'Interfaces and KeyListener', subtopic: 'interface', type: 'multiple-choice', difficulty: 'exam', prompt: 'Which keyword makes a class fulfill an interface contract?', choices: ['implements', 'extends', 'override', 'instanceof'], answer: 'implements', explanation: 'A class implements an interface and extends a class.', examTags: ['final'], relatedJavaFile: 'java-practice/08-interfaces-keylistener/MoveSquareGame.java' },
    { id: 'final-mixed-008', topic: 'equals(), ==, =, and toString()', subtopic: 'equals', type: 'multiple-choice', difficulty: 'exam', prompt: 'What parameter type must a standard equals override use?', choices: ['Object', 'The current class only', 'String', 'boolean'], answer: 'Object', explanation: 'Object declares equals(Object), so using Object is required to override it.', examTags: ['final'], relatedJavaFile: 'java-practice/09-equals-tostring/solution/EqualityPractice.java' },
    { id: 'final-mixed-009', topic: 'Conditions, Loops, and Operators', subtopic: 'switch', type: 'trace', difficulty: 'exam', prompt: 'What prints?', code: `int day = 1;\nswitch (day) {\n    case 1: System.out.print("Mon ");\n    case 2: System.out.print("Tue");\n}`, choices: ['Mon Tue', 'Mon', 'Tue', 'Nothing'], answer: 'Mon Tue', explanation: 'Without break, old-style switch falls through to the next case.', examTags: ['final'], relatedJavaFile: 'java-practice/02-conditionals-loops/solution/LoopLab.java' },
    { id: 'final-mixed-010', topic: 'Java Basics', subtopic: 'typecasting', type: 'trace', difficulty: 'exam', prompt: 'What prints?', code: `double result = (double) 5 / 2;\nSystem.out.println(result);`, choices: ['2.5', '2', '2.0', 'Compile error'], answer: '2.5', explanation: 'Casting 5 to double makes the division floating-point division.', examTags: ['final'], relatedJavaFile: 'java-practice/01-basics/solution/BasicsPractice.java' },
    { id: 'classes-uml-001', topic: 'Classes and Objects', subtopic: 'UML', type: 'uml', difficulty: 'medium', prompt: 'In this UML field, what does - name: String mean?', code: `+----------------+\n| Student        |\n+----------------+\n| - name: String |\n+----------------+`, choices: ['A private String field named name', 'A public method named name', 'A protected class named String', 'A local variable'], answer: 'A private String field named name', explanation: 'In basic UML, - means private. The field name is name and its type is String.', examTags: ['midterm2', 'final'], relatedJavaFile: 'java-practice/05-classes-objects/solution/StudentPractice.java' },
    { id: 'vocabulary-matching-001', topic: 'Vocabulary Bank', subtopic: 'matching', type: 'matching', difficulty: 'easy', prompt: 'Match the word to its definition: which term means “a value supplied in a method call”?', choices: ['actual parameter', 'formal parameter', 'field', 'return type'], answer: 'actual parameter', explanation: 'Actual parameters (arguments) are supplied in the call. Formal parameters are listed in the method header.', examTags: ['midterm1', 'midterm2', 'final'], relatedJavaFile: 'java-practice/04-methods/solution/MethodBasicsSolution.java' },
    { id: 'methods-short-answer-001', topic: 'Methods', subtopic: 'return type', type: 'short-answer', difficulty: 'medium', prompt: 'What keyword can exit a void method early without returning a value?', answer: 'return', explanation: 'A bare return; exits a void method early. A non-void method must return a matching value.', examTags: ['midterm2', 'final'], relatedJavaFile: 'java-practice/04-methods/solution/MethodBasicsSolution.java' },
    { id: 'final-mixed-011', topic: 'Final Exam Mixed Practice', subtopic: 'records and equality', type: 'mixed', difficulty: 'exam', prompt: 'Which output correctly compares two records with the same components?', code: `record Course(String code, int credits) {}\nCourse first = new Course("CS202", 3);\nCourse second = new Course("CS202", 3);\nSystem.out.println(first == second);\nSystem.out.println(first.equals(second));`, choices: ['false then true', 'true then true', 'false then false', 'Compile error'], answer: 'false then true', explanation: 'Each new expression creates a different Course object, so == is false. Records generate equals that compares their components, so equals is true.', examTags: ['final'], relatedJavaFile: 'java-practice/13-records-classes/solution/RecordClassDemo.java' }
  ];

  function topicQuestions(topic) {
    const term = topic.vocabulary[0];
    const traceChoices = [...new Set([topic.trace.answer, 'Compile error', 'A different result', 'Nothing is printed'])];
    while (traceChoices.length < 4) traceChoices.push('None of these');
    return [
      { id: `${topic.id}-trace-001`, topic: topic.name, subtopic: 'trace', type: 'trace', difficulty: 'easy', prompt: topic.trace.prompt, code: topic.trace.code, choices: traceChoices.slice(0, 4), answer: topic.trace.answer, explanation: topic.trace.explanation, examTags: topic.examTags, relatedJavaFile: topic.javaFile },
      { id: `${topic.id}-concept-001`, topic: topic.name, subtopic: 'concept', type: 'multiple-choice', difficulty: 'easy', prompt: topic.concept.prompt, choices: topic.concept.choices, answer: topic.concept.answer, explanation: topic.concept.explanation, examTags: topic.examTags, relatedJavaFile: topic.javaFile },
      { id: `${topic.id}-vocab-001`, topic: topic.name, subtopic: 'vocabulary', type: 'vocabulary', difficulty: 'easy', prompt: `Which definition best matches “${term.term}”?`, choices: [term.definition, 'A value that always changes type at runtime.', 'A method that can never be called.', 'A compiler error caused by missing braces.'], answer: term.definition, explanation: `${term.term}: ${term.definition}`, examTags: topic.examTags, relatedJavaFile: topic.javaFile },
      { id: `${topic.id}-debug-001`, topic: topic.name, subtopic: 'debug', type: 'debug', difficulty: 'medium', prompt: topic.debug.prompt, code: topic.debug.code, answer: topic.debug.answer, explanation: topic.debug.explanation, selfCheck: true, examTags: topic.examTags, relatedJavaFile: topic.javaFile },
      { id: `${topic.id}-build-001`, topic: topic.name, subtopic: 'code writing', type: 'code-writing', difficulty: 'medium', prompt: topic.build.prompt, answer: topic.build.solution, explanation: `A solid answer includes: ${topic.build.keywords.join(', ')}.`, selfCheck: true, examTags: topic.examTags, relatedJavaFile: topic.javaFile }
    ];
  }

  const seedQuestions = topics.flatMap(topicQuestions).concat(extraQuestions);
  const defaultQuestionConfig = {
    version: 2,
    targets: {
      'Java Basics': 15,
      'Conditions, Loops, and Operators': 20,
      'Arrays and ArrayLists': 25,
      'Methods': 25,
      'Classes and Objects': 30,
      'Constructors': 25,
      'Inheritance and Polymorphism': 30,
      'Interfaces and KeyListener': 15,
      'equals(), ==, =, and toString()': 20,
      'Exceptions, Files, and Null Pointers': 20,
      'Static, Final, Memory, and Garbage Collection': 15,
      'Graphics': 10,
      'Records vs Classes': 10,
      'Final Exam Mixed Practice': 50
    }
  };

  const supplementalBuildPrompts = {
    basics: ['Convert the String "42" to an int named count, then print count + 1.', 'Use Integer.parseInt to turn numeric text into an int before arithmetic.', 'Write the two statements needed to parse "42" and print the next value.'],
    'conditions-loops': ['Write a for loop that prints each odd number from 1 through 9.', 'Use a loop and % to print only the odd values from 1 to 9.', 'Write a short loop with an if condition that identifies odd numbers.'],
    arrays: ['Write a method that returns the decimal average of an int array.', 'Loop through every int array value, total it, and return a double average.', 'Write average(int[] values) without using integer division.'],
    methods: ['Write a boolean isEven method that accepts an int.', 'Return true from isEven when number % 2 is 0.', 'Write a static method header and body for isEven(int number).'],
    classes: ['Create the Book class with private title/pages, a constructor, and toString.', 'Write Book fields and a constructor that uses this.title and this.pages.', 'Design a Book with getTitle, setTitle, and a readable toString.'],
    constructors: ['Write a Student copy constructor that copies name and id.', 'Complete Student(Student other) by copying both fields.', 'Use a copy constructor parameter named other to initialize a new Student.'],
    inheritance: ['Create Animal/Cat so Cat overrides speak to print "meow".', 'Use extends and @Override to give Cat its own speak behavior.', 'Store a new Cat in an Animal reference and call its overridden speak method.'],
    interfaces: ['Write all KeyListener method headers and update x for the right arrow.', 'In keyPressed, check VK_RIGHT, change x, and call repaint.', 'Complete a KeyListener with empty released/typed methods and a useful pressed method.'],
    equals: ['Write a Book toString that returns title and pages in readable text.', 'Override toString; return a String rather than printing directly.', 'Create a toString body that includes both title and pages fields.'],
    exceptions: ['Write try/catch around Integer.parseInt(text) for NumberFormatException.', 'Parse text safely and print "Invalid number" when parsing fails.', 'Handle bad numeric input without letting parseInt crash the program.'],
    'static-final': ['Create MAX_ATTEMPTS as a class-level final constant and an instance attempts field.', 'Declare public static final MAX_ATTEMPTS and keep attempts non-static.', 'Show one shared constant and one per-object attempts field.'],
    graphics: ['In paintComponent, draw a house with a rectangle, roof lines, and sun oval.', 'Use fillRect, drawLine, and fillOval to create a simple house scene.', 'Write Graphics calls for a house body, roof, and sun.'],
    records: ['Create Course record with code/credits and reject credits below 1.', 'Write a compact Course constructor that validates a positive credits component.', 'Use a record compact constructor to throw for invalid credits.'],
    'final-mixed': ['Create LibraryItem interface and Book implementation with describe/toString.', 'Write a Book class that implements LibraryItem and overrides toString.', 'Model a small interface implementation that returns a readable book description.']
  };

  function traceVariant(topic, index) {
    const number = index + 2;
    const variants = {
      basics: () => ({ code: `int value = ${number};\nvalue += ${index % 5 + 1};\nSystem.out.println(value / 2);`, answer: String(Math.trunc((number + index % 5 + 1) / 2)), explanation: 'Trace the assignment first, then remember that int / int keeps only the whole-number result.' }),
      'conditions-loops': () => ({ code: `int total = 0;\nfor (int i = 0; i < ${index % 4 + 3}; i++) {\n    total += i;\n}\nSystem.out.println(total);`, answer: String((index % 4 + 2) * (index % 4 + 3) / 2), explanation: 'The loop adds 0 through the last value below the limit.' }),
      arrays: () => ({ code: `int[] values = {${number}, ${number + 2}, ${number + 4}};\nSystem.out.println(values[values.length - 1]);`, answer: String(number + 4), explanation: 'length - 1 selects the last valid array index.' }),
      methods: () => ({ code: `static int twice(int n) { return n * 2; }\nSystem.out.println(twice(${number}));`, answer: String(number * 2), explanation: 'The actual parameter replaces n for this method call, then the result is returned.' }),
      classes: () => ({ code: `class Box { int size = ${number}; }\nBox a = new Box();\nBox b = a;\nb.size += 1;\nSystem.out.println(a.size);`, answer: String(number + 1), explanation: 'a and b refer to the same Box object, so changing b.size changes the object seen by a.' }),
      constructors: () => ({ code: `class Box { int size; Box() { this(${number}); } Box(int size) { this.size = size; } }\nSystem.out.println(new Box().size);`, answer: String(number), explanation: 'The no-argument constructor delegates to the int constructor with this(...).' }),
      inheritance: () => ({ code: `class Parent { void show() { System.out.println("parent"); } }\nclass Child extends Parent { @Override void show() { System.out.println("child"); } }\nParent item = new Child();\nitem.show();`, answer: 'child', explanation: 'Dynamic dispatch uses the actual Child object for an overridden instance method.' }),
      interfaces: () => ({ code: `interface Move { void go(); }\nclass Runner implements Move { public void go() { System.out.println("run"); } }\nMove move = new Runner();\nmove.go();`, answer: 'run', explanation: 'An interface reference can call methods promised by the interface; the implementing object supplies behavior.' }),
      equals: () => ({ code: `String a = new String("${number}");\nString b = new String("${number}");\nSystem.out.println(a.equals(b));`, answer: 'true', explanation: 'equals compares String characters. The two objects have the same content.' }),
      exceptions: () => ({ code: `try {\n    int value = Integer.parseInt("${number}");\n    System.out.println(value + 1);\n} catch (NumberFormatException e) {\n    System.out.println("bad");\n}`, answer: String(number + 1), explanation: 'This text is a valid integer, so parseInt succeeds and the catch does not run.' }),
      'static-final': () => ({ code: `class Counter { static int count = 0; Counter() { count++; } }\nnew Counter();\nnew Counter();\nSystem.out.println(Counter.count);`, answer: '2', explanation: 'A static field belongs to the class, so both constructed objects share one count.' }),
      graphics: () => ({ code: `g.fillRect(${number}, 10, 30, 20);`, answer: `A filled rectangle beginning at (${number}, 10) with width 30 and height 20`, explanation: 'fillRect receives x, y, width, then height.' }),
      records: () => ({ code: `record Point(int x, int y) {}\nPoint p = new Point(${number}, ${number + 1});\nSystem.out.println(p.x());`, answer: String(number), explanation: 'A record component creates an accessor with the same name: x().' }),
      'final-mixed': () => ({ code: `static int add(int a, int b) { return a + b; }\nint[] values = {${number}, ${number + 1}};\nSystem.out.println(add(values[0], values[1]));`, answer: String(number * 2 + 1), explanation: 'Read each array value, then pass both actual parameters to add.' })
    };
    return variants[topic.id]();
  }

  function finalMixedVariant(round) {
    const variants = [
      { prompt: 'What prints? Trace the references and then the overridden method call.', code: `class Animal { void speak() { System.out.print("sound "); } }\nclass Dog extends Animal { @Override void speak() { System.out.print("bark "); } }\nAnimal a = new Dog();\nAnimal b = a;\nb.speak();\nSystem.out.println(a == b);`, choices: ['bark true', 'sound true', 'bark false', 'Compile error'], answer: 'bark true', explanation: 'a and b refer to the same Dog object, so == is true. Dynamic dispatch runs Dog.speak().' },
      { prompt: 'A program stores polymorphic objects in an ArrayList. What prints?', code: `interface Named { String name(); }\nclass Book implements Named { public String name() { return "Java"; } }\njava.util.ArrayList<Named> items = new java.util.ArrayList<>();\nitems.add(new Book());\nSystem.out.println(items.get(0).name());`, choices: ['Java', 'Book', 'null', 'Compile error'], answer: 'Java', explanation: 'The list stores Named references. The Book implementation supplies name(), which returns Java.' },
      { prompt: 'Which result occurs after parsing, method calling, and array indexing?', code: `static int twice(int n) { return n * 2; }\ntry {\n    int[] values = {Integer.parseInt("3")};\n    System.out.println(twice(values[0]));\n} catch (NumberFormatException e) {\n    System.out.println("bad");\n}`, choices: ['6', '3', 'bad', 'ArrayIndexOutOfBoundsException'], answer: '6', explanation: 'parseInt("3") succeeds, values[0] is 3, and twice returns 6.' },
      { prompt: 'What prints after constructors, a static field, and a final constant are used?', code: `class Counter {\n    static int made = 0;\n    static final int LIMIT = 2;\n    Counter() { made++; }\n}\nnew Counter();\nnew Counter();\nSystem.out.println(Counter.made == Counter.LIMIT);`, choices: ['true', 'false', '2', 'Compile error'], answer: 'true', explanation: 'Both objects increment the shared static made field. It becomes 2, which equals the final constant LIMIT.' },
      { prompt: 'Which statement correctly combines records and logical equality?', code: `record Course(String code, int credits) {}\nCourse first = new Course("CS202", 3);\nCourse second = new Course("CS202", 3);\nSystem.out.println(first == second);\nSystem.out.println(first.equals(second));`, choices: ['false then true', 'true then true', 'false then false', 'Compile error'], answer: 'false then true', explanation: 'Each new creates a different record object, so == is false. Records generate logical equals based on components.' }
    ];
    return variants[round % variants.length];
  }

  function supplementalQuestion(topic, index) {
    const typeCycle = ['trace', 'multiple-choice', 'debug', 'code-writing', 'vocabulary', 'matching', 'uml', 'short-answer', 'mixed'];
    const type = typeCycle[index % typeCycle.length];
    const round = Math.floor(index / typeCycle.length);
    const difficulty = index % 7 === 0 ? 'exam' : index % 3 === 0 ? 'medium' : 'easy';
    const id = `${topic.id}-expanded-${String(index + 1).padStart(3, '0')}`;
    const common = { id, topic: topic.name, subtopic: topic.coverage[index % topic.coverage.length], type, difficulty, examTags: topic.examTags, relatedJavaFile: topic.javaFile };
    if (type === 'trace') {
      const trace = traceVariant(topic, index);
      return { ...common, prompt: `Trace scenario ${round + 1}: what is the output or result?`, code: trace.code, choices: [trace.answer, 'Compile error', 'A different result', 'Nothing is printed'], answer: trace.answer, explanation: trace.explanation };
    }
    if (type === 'debug') return { ...common, prompt: `Debug scenario ${round + 1}: ${topic.debug.prompt} Explain the bug, then correct it.`, code: `${topic.debug.code}\n// Practice variation ${round + 1}: state the compiler or runtime result before editing.`, answer: topic.debug.answer, explanation: `${topic.debug.explanation} Before checking the model answer, name whether this is a compile-time error, runtime error, or logic error.`, selfCheck: true };
    if (type === 'code-writing') {
      const prompt = supplementalBuildPrompts[topic.id]?.[round % 3] || topic.build.prompt;
      return { ...common, prompt: `Build scenario ${round + 1}: ${prompt}`, answer: topic.build.solution, explanation: `Compare your answer against the topic’s model solution. Include the relevant ideas: ${topic.build.keywords.join(', ')}.`, selfCheck: true };
    }
    if (type === 'vocabulary' || type === 'matching') {
      const item = topic.vocabulary[(round + 1) % topic.vocabulary.length];
      return { ...common, prompt: type === 'matching' ? `Matching scenario ${round + 1}: match the term to its definition: ${item.term}` : `Vocabulary scenario ${round + 1}: which definition best matches “${item.term}”?`, choices: [item.definition, 'A Java keyword that creates an object.', 'A compiler message caused only by a missing semicolon.', 'A method that never returns a value.'], answer: item.definition, explanation: `${item.term}: ${item.definition}` };
    }
    if (type === 'uml') {
      const className = topic.id === 'inheritance' ? `DogScenario${round + 1}` : topic.id === 'constructors' ? `StudentScenario${round + 1}` : `${topic.id.replaceAll('-', '')}Scenario${round + 1}`;
      const field = round % 2 ? 'name: String' : 'id: int';
      const method = round % 2 ? 'getName(): String' : 'getId(): int';
      const askPublic = round % 3 === 2;
      return { ...common, prompt: `Read UML scenario ${round + 1}. Which member is ${askPublic ? 'public' : 'private'}?`, code: `+-------------------------+\n| ${className}             |\n+-------------------------+\n| - ${field}               |\n| + ${method}          |\n+-------------------------+`, choices: [askPublic ? method : field.split(':')[0], askPublic ? field.split(':')[0] : method, 'The class name', 'None of the members'], answer: askPublic ? method : field.split(':')[0], explanation: `In UML, - marks a private member and + marks a public member. Here ${askPublic ? method : field.split(':')[0]} has the requested visibility.` };
    }
    if (type === 'short-answer') {
      const item = topic.vocabulary[(round + 2) % topic.vocabulary.length];
      return { ...common, prompt: `Short-answer scenario ${round + 1}: type the term that matches this definition: ${item.definition}`, answer: item.term, explanation: `The correct term is ${item.term}. Its definition is: ${item.definition}`, shortAnswerAliases: [item.term.toLowerCase()] };
    }
    if (type === 'mixed') {
      if (topic.id === 'final-mixed') return { ...common, ...finalMixedVariant(round) };
      const focus = topic.coverage[round % topic.coverage.length];
      return { ...common, prompt: `Mixed reasoning scenario ${round + 1}: which statement is accurate for ${topic.name}?`, choices: [focus, 'All object comparisons should use ==.', 'Every method must be static.', 'A compiler always fixes runtime errors.'], answer: focus, explanation: `${focus} The other choices are overgeneralizations that fail in normal Java code.` };
    }
    const focus = topic.coverage[round % topic.coverage.length];
    return { ...common, prompt: `Concept scenario ${round + 1}: which statement is accurate for ${topic.name}?`, choices: [focus, 'This concept only applies to comments.', 'Java automatically ignores this rule in methods.', 'This always creates a new object.'], answer: focus, explanation: `${focus} This is the precise rule to use in a trace or code-writing question.` };
  }

  function expandQuestionBank(config = defaultQuestionConfig) {
    const expanded = [...seedQuestions];
    for (const topic of topics) {
      const target = config.targets?.[topic.name] || 0;
      let current = expanded.filter(question => question.topic === topic.name).length;
      let index = 0;
      while (current < target) {
        expanded.push(supplementalQuestion(topic, index));
        current += 1;
        index += 1;
      }
    }
    return expanded;
  }

  const questions = expandQuestionBank();
  const vocabulary = topics.flatMap(topic => topic.vocabulary.map(item => ({ ...item, topic: topic.name, examTags: topic.examTags, example: topic.code })));

  window.REVIEWER_DATA = {
    topics,
    questions,
    vocabulary,
    examPools: {
      midterm1: { label: 'Midterm 1', tags: ['midterm1'] },
      midterm2: { label: 'Midterm 2', tags: ['midterm1', 'midterm2'] },
      final: { label: 'Final Exam', tags: ['midterm1', 'midterm2', 'final'] },
      debug: { label: 'Bug Fix Exam', types: ['debug'] },
      trace: { label: 'Code Trace Exam', types: ['trace'] },
      vocabulary: { label: 'Vocabulary Exam', types: ['vocabulary'] }
    },
    studyPaths: [
      { name: 'Midterm 1 reset', topics: ['basics', 'conditions-loops', 'arrays', 'graphics'], next: 'Trace arrays and loops after every explanation.' },
      { name: 'OOP foundation', topics: ['methods', 'classes', 'constructors', 'inheritance', 'equals'], next: 'Build a class, then trace object references.' },
      { name: 'Final sweep', topics: ['interfaces', 'static-final', 'records', 'final-mixed'], next: 'Take a mixed exam, then focus on missed topics.' }
    ]
  };

  // HTTP servers load JSON configuration as the authoritative data source.
  // The synchronous fallback keeps the reviewer usable when index.html is opened directly.
  window.REVIEWER_READY = Promise.resolve();
  if (window.location && window.location.protocol !== 'file:') {
    const readJson = path => fetch(path).then(response => {
      if (!response.ok) throw new Error(`${path} request failed: ${response.status}`);
      return response.json();
    });
    window.REVIEWER_READY = Promise.all([
      readJson('data/questions.json'),
      readJson('data/topics.json'),
      readJson('data/exam-pools.json'),
      readJson('data/study-paths.json'),
      readJson('data/vocabulary.json')
    ])
      .then(([questionConfig, topicConfig, examConfig, pathConfig, vocabularyConfig]) => {
        window.REVIEWER_DATA.questions.splice(0, window.REVIEWER_DATA.questions.length, ...expandQuestionBank(questionConfig));
        window.REVIEWER_DATA.questionConfig = questionConfig;
        window.REVIEWER_DATA.topicManifest = topicConfig;
        window.REVIEWER_DATA.vocabularyManifest = vocabularyConfig;
        for (const manifestTopic of topicConfig.topics || []) {
          const existing = topics.find(topic => topic.id === manifestTopic.id);
          if (existing) Object.assign(existing, manifestTopic);
        }
        Object.assign(window.REVIEWER_DATA.examPools, examConfig);
        if (Array.isArray(vocabularyConfig.terms)) {
          const loadedTerms = vocabularyConfig.terms.map(item => ({
            ...item,
            example: topics.find(topic => topic.name === item.topic)?.code || ''
          }));
          window.REVIEWER_DATA.vocabulary.splice(0, window.REVIEWER_DATA.vocabulary.length, ...loadedTerms);
        }
        if (Array.isArray(pathConfig)) {
          window.REVIEWER_DATA.studyPaths.splice(0, window.REVIEWER_DATA.studyPaths.length, ...pathConfig.map(path => ({
            ...path,
            next: path.next || 'Open each topic, complete the trace, then do a focused practice set.'
          })));
        }
      })
      .catch(error => {
        console.warn('Using built-in direct-file question fallback.', error);
      });
  }
})();
