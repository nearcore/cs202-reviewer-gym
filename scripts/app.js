(function () {
  const { topics, questions, vocabulary, examPools, studyPaths } = window.REVIEWER_DATA;
  const main = document.querySelector('#main');
  const { escapeHtml, codeBlock } = QuizEngine;
  let flashcardState = { filter: 'all', index: 0, flipped: false };

  const route = () => (location.hash.replace(/^#/, '') || 'dashboard').split('/');
  const go = value => { location.hash = value; };
  const topicById = id => topics.find(topic => topic.id === id);
  const topicByName = name => topics.find(topic => topic.name === name);
  const percent = (value, total) => total ? Math.round((value / total) * 100) : 0;
  const titleCase = value => String(value).replaceAll('-', ' ').replace(/\b\w/g, letter => letter.toUpperCase());
  const themeButton = document.querySelector('#theme-toggle');
  const themeStorageKey = 'cs202-reviewer-theme';

  function applyTheme(theme) {
    const safeTheme = theme === 'night' ? 'night' : 'day';
    document.documentElement.dataset.theme = safeTheme;
    localStorage.setItem(themeStorageKey, safeTheme);
    if (!themeButton) return;
    const night = safeTheme === 'night';
    themeButton.setAttribute('aria-pressed', String(night));
    themeButton.setAttribute('aria-label', night ? 'Switch to day mode' : 'Switch to night mode');
    const icon = themeButton.querySelector('.theme-toggle-icon');
    const text = themeButton.querySelector('.theme-toggle-text');
    if (icon) icon.textContent = night ? '🌙' : '☀️';
    if (text) text.textContent = night ? 'Night' : 'Day';
  }

  function setupThemeToggle() {
    const currentTheme = document.documentElement.dataset.theme === 'night' ? 'night' : 'day';
    applyTheme(currentTheme);
    if (!themeButton) return;
    themeButton.addEventListener('click', () => {
      const nextTheme = document.documentElement.dataset.theme === 'night' ? 'day' : 'night';
      applyTheme(nextTheme);
    });
  }



  const javaThoughts = [
    {
        "icon": "🧠",
        "label": "OOP Tip",
        "headline": "Objects are tiny responsibility holders.",
        "body": "A good object keeps related data and behavior together, so the rest of the program does not have to micromanage every detail.",
        "topic": "Classes and Objects"
    },
    {
        "icon": "⚠️",
        "label": "Common Trap",
        "headline": "=, ==, and equals() are not interchangeable.",
        "body": "Use = to assign, == to compare primitives or references, and equals() when you want meaningful object equality.",
        "topic": "equals(), ==, =, and toString()"
    },
    {
        "icon": "😂",
        "label": "Java Joke",
        "headline": "My object refused to introduce itself.",
        "body": "It said, “Override toString() first, then we can talk.”",
        "topic": "equals(), ==, =, and toString()"
    },
    {
        "icon": "💡",
        "label": "Java Fact",
        "headline": "A constructor has no return type.",
        "body": "Not int, not String, not even void. If it has a return type, Java sees it as a method instead.",
        "topic": "Constructors"
    },
    {
        "icon": "🎯",
        "label": "Trace Tip",
        "headline": "Java follows the code, not the story in your head.",
        "body": "When tracing output, write down each variable change. Guessing is how loops win.",
        "topic": "Conditions, Loops, and Operators"
    },
    {
        "icon": "🧬",
        "label": "OOP Tip",
        "headline": "Inheritance should pass the is-a test.",
        "body": "A subclass should truly be a more specific kind of its superclass, not just something that happens to use similar code.",
        "topic": "Inheritance and Polymorphism"
    },
    {
        "icon": "🔌",
        "label": "Interface Tip",
        "headline": "An interface is a behavior contract.",
        "body": "When a class implements an interface, it promises to provide the required methods.",
        "topic": "Interfaces and KeyListener"
    },
    {
        "icon": "🧯",
        "label": "Bug Hint",
        "headline": "NullPointerException means the object was never really there.",
        "body": "You tried to use a reference that points to null. Find where the object should have been created or assigned.",
        "topic": "Exceptions, Files, and Null Pointers"
    },
    {
        "icon": "📦",
        "label": "Array Tip",
        "headline": "The last array index is length - 1.",
        "body": "If an array has 5 items, the valid indexes are 0 through 4. Index 5 is outside the fence.",
        "topic": "Arrays and ArrayLists"
    },
    {
        "icon": "🪞",
        "label": "Record Note",
        "headline": "A record is simple data with built-in manners.",
        "body": "Records automatically provide accessors, equals(), hashCode(), and toString() for their components.",
        "topic": "Records vs Classes"
    },
    {
        "icon": "🛠️",
        "label": "Debug Tip",
        "headline": "Read the first compiler error first.",
        "body": "Later errors can be side effects. The first error usually points closer to the real problem.",
        "topic": "Java Basics"
    },
    {
        "icon": "🔁",
        "label": "Loop Reminder",
        "headline": "A loop needs a start, a stop, and a change.",
        "body": "Initialize something, test something, then update something. Missing one of those creates chaos.",
        "topic": "Conditions, Loops, and Operators"
    },
    {
        "icon": "🧠",
        "label": "OOP Tip",
        "headline": "Private fields are not secrecy. They are protection.",
        "body": "Encapsulation keeps outside code from changing object state in random ways.",
        "topic": "Classes and Objects"
    },
    {
        "icon": "💬",
        "label": "Quote-ish",
        "headline": "Good code explains what it is doing before comments have to apologize for it.",
        "body": "Names, structure, and small methods can make a program easier to read before extra comments are needed.",
        "topic": "Java Basics"
    },
    {
        "icon": "😂",
        "label": "Java Joke",
        "headline": "A static method walked into a class.",
        "body": "No object was needed, so nobody opened the door.",
        "topic": "Static, Final, Memory, and Garbage Collection"
    },
    {
        "icon": "💡",
        "label": "Java Fact",
        "headline": "static belongs to the class, not one object.",
        "body": "A static field is shared by the class. An instance field belongs to each individual object.",
        "topic": "Static, Final, Memory, and Garbage Collection"
    },
    {
        "icon": "⚠️",
        "label": "Common Trap",
        "headline": "Overloading and overriding are cousins, not twins.",
        "body": "Overloading means same method name with different parameters. Overriding means a subclass replaces inherited behavior.",
        "topic": "Inheritance and Polymorphism"
    },
    {
        "icon": "🎨",
        "label": "Graphics Tip",
        "headline": "paintComponent is where custom Swing drawing usually happens.",
        "body": "Call super.paintComponent(g) first, then draw shapes, text, or images using the Graphics object.",
        "topic": "Graphics"
    },
    {
        "icon": "⌨️",
        "label": "KeyListener Tip",
        "headline": "KeyListener has three required methods.",
        "body": "keyPressed, keyReleased, and keyTyped must exist, even if one of them has an empty body.",
        "topic": "Interfaces and KeyListener"
    },
    {
        "icon": "🧪",
        "label": "Exam Reminder",
        "headline": "A non-void method must return something on every valid path.",
        "body": "If Java can reach the end without a return, the method is incomplete.",
        "topic": "Methods"
    },
    {
        "icon": "🧃",
        "label": "Java Joke",
        "headline": "My loop said it would stop eventually.",
        "body": "That was three hours ago.",
        "topic": "Conditions, Loops, and Operators"
    },
    {
        "icon": "🧭",
        "label": "Study Hint",
        "headline": "Trace before you fix.",
        "body": "If you do not know what the code currently does, changing it is just guessing with confidence.",
        "topic": "Final Exam Mixed Practice"
    },
    {
        "icon": "📚",
        "label": "Vocabulary Tip",
        "headline": "Instantiate means create an object.",
        "body": "When you write new Student(), Java creates a Student object and returns a reference to it.",
        "topic": "Vocabulary Bank"
    },
    {
        "icon": "⚠️",
        "label": "Common Trap",
        "headline": "A local variable disappears after its block ends.",
        "body": "Fields live with the object. Locals live inside methods or blocks.",
        "topic": "Classes and Objects"
    },
    {
        "icon": "🧠",
        "label": "OOP Tip",
        "headline": "A class is a plan. An object is the thing built from it.",
        "body": "The class describes what objects know and do. Each object gets its own state.",
        "topic": "Classes and Objects"
    },
    {
        "icon": "💡",
        "label": "Java Fact",
        "headline": "ArrayList can grow. Arrays cannot.",
        "body": "An array has a fixed length. An ArrayList can add and remove elements as needed.",
        "topic": "Arrays and ArrayLists"
    },
    {
        "icon": "😂",
        "label": "Java Joke",
        "headline": "I named my variable temp.",
        "body": "Now it has been in production for three semesters.",
        "topic": "Java Basics"
    },
    {
        "icon": "🎯",
        "label": "Trace Tip",
        "headline": "Check loop boundaries before checking loop logic.",
        "body": "Many wrong answers come from one extra iteration or one missing iteration.",
        "topic": "Conditions, Loops, and Operators"
    },
    {
        "icon": "🛡️",
        "label": "Access Tip",
        "headline": "public means everyone can call it. private means the class controls it.",
        "body": "Access modifiers help define what outside code is allowed to touch.",
        "topic": "Classes and Objects"
    },
    {
        "icon": "💬",
        "label": "Quote-ish",
        "headline": "A bug is just a very confident misunderstanding.",
        "body": "The code is doing something. Your job is to find the difference between expected behavior and actual behavior.",
        "topic": "Final Exam Mixed Practice"
    },
    {
        "icon": "🧬",
        "label": "Polymorphism Tip",
        "headline": "Polymorphism lets one reference type point to different object types.",
        "body": "A superclass reference can hold subclass objects, and overridden methods still use the actual object’s behavior.",
        "topic": "Inheritance and Polymorphism"
    },
    {
        "icon": "⚠️",
        "label": "Common Trap",
        "headline": "final does not always mean the same thing.",
        "body": "A final variable cannot be reassigned. A final method cannot be overridden. A final class cannot be extended.",
        "topic": "Static, Final, Memory, and Garbage Collection"
    },
    {
        "icon": "📦",
        "label": "Array Tip",
        "headline": "Enhanced for-loops are great for reading, not indexing.",
        "body": "Use a normal for-loop when you need the index position or need to update by index.",
        "topic": "Arrays and ArrayLists"
    },
    {
        "icon": "🧯",
        "label": "Bug Hint",
        "headline": "The semicolon after an if statement can quietly break your logic.",
        "body": "if (ready); creates an empty if-body. The next block may run no matter what.",
        "topic": "Conditions, Loops, and Operators"
    },
    {
        "icon": "🧠",
        "label": "OOP Tip",
        "headline": "Methods should describe actions.",
        "body": "A method name like calculateTotal or moveLeft tells you what behavior the object can perform.",
        "topic": "Methods"
    },
    {
        "icon": "💡",
        "label": "Java Fact",
        "headline": "String is a class, not a primitive type.",
        "body": "That is why comparing strings with equals() matters more than using ==.",
        "topic": "equals(), ==, =, and toString()"
    },
    {
        "icon": "😂",
        "label": "Java Joke",
        "headline": "My subclass said it was independent.",
        "body": "Then it called super().",
        "topic": "Inheritance and Polymorphism"
    },
    {
        "icon": "🏗️",
        "label": "Constructor Tip",
        "headline": "super() calls the parent constructor.",
        "body": "If you do not write it, Java may insert a no-argument super() call automatically.",
        "topic": "Constructors"
    },
    {
        "icon": "🎮",
        "label": "KeyListener Tip",
        "headline": "keyPressed is usually the useful one for movement.",
        "body": "For game-style controls, keyPressed often handles arrows or WASD more directly than keyTyped.",
        "topic": "Interfaces and KeyListener"
    },
    {
        "icon": "🎯",
        "label": "Exam Reminder",
        "headline": "Method headers are exam magnets.",
        "body": "Know the access modifier, return type, method name, parameter list, and where the body begins.",
        "topic": "Methods"
    },
    {
        "icon": "💬",
        "label": "Quote-ish",
        "headline": "Make the easy things obvious and the dangerous things private.",
        "body": "That is a good mindset for fields, setters, and object design.",
        "topic": "Classes and Objects"
    },
    {
        "icon": "⚠️",
        "label": "Common Trap",
        "headline": "A copy constructor should make a new object, not just borrow the old reference.",
        "body": "Copy the needed values so the new object has its own state.",
        "topic": "Constructors"
    },
    {
        "icon": "🧪",
        "label": "Exam Reminder",
        "headline": "instanceof checks what an object really is at runtime.",
        "body": "It is useful before casting when you are not sure what subtype a reference contains.",
        "topic": "Inheritance and Polymorphism"
    },
    {
        "icon": "🛠️",
        "label": "Debug Tip",
        "headline": "If a variable is wrong, find the last line that changed it.",
        "body": "Trace backward from the bad value instead of staring at the whole program at once.",
        "topic": "Final Exam Mixed Practice"
    },
    {
        "icon": "💡",
        "label": "Java Fact",
        "headline": "Garbage collection cleans up unreachable objects.",
        "body": "When no references can reach an object anymore, Java can reclaim that memory later.",
        "topic": "Static, Final, Memory, and Garbage Collection"
    },
    {
        "icon": "😂",
        "label": "Java Joke",
        "headline": "The garbage collector visited my code.",
        "body": "It left after realizing I was still referencing all my problems.",
        "topic": "Static, Final, Memory, and Garbage Collection"
    },
    {
        "icon": "📚",
        "label": "Vocabulary Tip",
        "headline": "A parameter is the variable in the method header.",
        "body": "An argument is the actual value you pass when calling the method.",
        "topic": "Methods"
    },
    {
        "icon": "🎨",
        "label": "Graphics Tip",
        "headline": "Coordinates start at the top-left corner.",
        "body": "In many Java drawing contexts, x increases to the right and y increases downward.",
        "topic": "Graphics"
    },
    {
        "icon": "⚠️",
        "label": "Common Trap",
        "headline": "Do not compare objects by how they print.",
        "body": "toString() is for display. equals() is for logical equality.",
        "topic": "equals(), ==, =, and toString()"
    },
    {
        "icon": "🧠",
        "label": "OOP Tip",
        "headline": "A setter should protect meaning, not just change a field.",
        "body": "If a value can be invalid, the setter is a good place to check it.",
        "topic": "Classes and Objects"
    },
    {
        "icon": "🔁",
        "label": "Loop Reminder",
        "headline": "break leaves the loop. continue skips to the next round.",
        "body": "Both change control flow, but they do very different things.",
        "topic": "Conditions, Loops, and Operators"
    },
    {
        "icon": "💡",
        "label": "Java Fact",
        "headline": "switch can choose among matching cases.",
        "body": "It is useful when one expression controls several possible branches.",
        "topic": "Conditions, Loops, and Operators"
    },
    {
        "icon": "⚠️",
        "label": "Common Trap",
        "headline": "Switch fall-through happens when break is missing.",
        "body": "Without break, Java can keep running into the next case in a traditional switch statement.",
        "topic": "Conditions, Loops, and Operators"
    },
    {
        "icon": "😂",
        "label": "Java Joke",
        "headline": "I tried to cast my homework to Finished.",
        "body": "Java said: incompatible types.",
        "topic": "Final Exam Mixed Practice"
    },
    {
        "icon": "🧪",
        "label": "Exam Reminder",
        "headline": "A stub compiles but does not really solve the problem yet.",
        "body": "Stubs are placeholders. They help structure code before the real logic is written.",
        "topic": "Methods"
    },
    {
        "icon": "📦",
        "label": "Array Tip",
        "headline": "Parallel arrays work, but objects are usually cleaner.",
        "body": "If two arrays describe the same thing, a class might describe that data better.",
        "topic": "Arrays and ArrayLists"
    },
    {
        "icon": "🪞",
        "label": "Record Note",
        "headline": "Records are best when the data is the main point.",
        "body": "When behavior becomes complex, a normal class may be more flexible.",
        "topic": "Records vs Classes"
    },
    {
        "icon": "🧯",
        "label": "Bug Hint",
        "headline": "An off-by-one error is small enough to hide and big enough to fail.",
        "body": "Check the start index, the stop condition, and whether the loop uses < or <=.",
        "topic": "Conditions, Loops, and Operators"
    },
    {
        "icon": "🔐",
        "label": "Access Tip",
        "headline": "protected is not the same as public.",
        "body": "protected allows access from subclasses and same-package classes, but it is still more limited than public.",
        "topic": "Inheritance and Polymorphism"
    },
    {
        "icon": "💬",
        "label": "Quote-ish",
        "headline": "The best fix is the one you can explain after writing it.",
        "body": "If you cannot explain why the change works, test it again and trace it slowly.",
        "topic": "Final Exam Mixed Practice"
    },
    {
        "icon": "💡",
        "label": "Java Fact",
        "headline": "int division drops the decimal part.",
        "body": "5 / 2 gives 2 when both values are integers. Use double if you need 2.5.",
        "topic": "Java Basics"
    },
    {
        "icon": "⚠️",
        "label": "Common Trap",
        "headline": "Modulo gives the remainder, not the percentage.",
        "body": "x % 2 is useful for checking even or odd numbers because it gives the remainder after division by 2.",
        "topic": "Java Basics"
    },
    {
        "icon": "🧠",
        "label": "OOP Tip",
        "headline": "A class name should usually be a noun.",
        "body": "A method name is often a verb. That small habit makes code easier to read.",
        "topic": "Java Basics"
    },
    {
        "icon": "😂",
        "label": "Java Joke",
        "headline": "My boolean said it was fine.",
        "body": "That was false.",
        "topic": "Conditions, Loops, and Operators"
    },
    {
        "icon": "🎯",
        "label": "Trace Tip",
        "headline": "Trace conditions as true or false, not vibes.",
        "body": "Write the actual comparison result before entering an if, else-if, or loop.",
        "topic": "Conditions, Loops, and Operators"
    },
    {
        "icon": "🛠️",
        "label": "Debug Tip",
        "headline": "A missing import can look scarier than it is.",
        "body": "If Java cannot find a class, check spelling, package names, and imports before rewriting logic.",
        "topic": "Java Basics"
    },
    {
        "icon": "📚",
        "label": "Vocabulary Tip",
        "headline": "A field is a variable that belongs to an object or class.",
        "body": "A local variable belongs to a method or block and disappears when that block is done.",
        "topic": "Classes and Objects"
    },
    {
        "icon": "💡",
        "label": "Java Fact",
        "headline": "void means the method returns nothing.",
        "body": "A void method may still print, change object state, or call other methods.",
        "topic": "Methods"
    },
    {
        "icon": "⚠️",
        "label": "Common Trap",
        "headline": "Printing is not the same as returning.",
        "body": "System.out.println shows output. return sends a value back to the caller.",
        "topic": "Methods"
    },
    {
        "icon": "🧬",
        "label": "Polymorphism Tip",
        "headline": "The reference type controls what methods are visible.",
        "body": "The actual object controls which overridden method runs.",
        "topic": "Inheritance and Polymorphism"
    },
    {
        "icon": "😂",
        "label": "Java Joke",
        "headline": "I made everything public once.",
        "body": "Then my objects had no privacy and my bugs had full access.",
        "topic": "Classes and Objects"
    },
    {
        "icon": "🎨",
        "label": "Graphics Tip",
        "headline": "repaint() asks Swing to draw again later.",
        "body": "Do not call paintComponent directly. Change state, then request a repaint.",
        "topic": "Graphics"
    },
    {
        "icon": "⌨️",
        "label": "KeyListener Tip",
        "headline": "Focus matters for keyboard input.",
        "body": "If key events are not working, the component may not have keyboard focus.",
        "topic": "Interfaces and KeyListener"
    },
    {
        "icon": "🧪",
        "label": "Exam Reminder",
        "headline": "equals() should be consistent.",
        "body": "If two objects are equal now, they should stay equal unless their meaningful state changes.",
        "topic": "equals(), ==, =, and toString()"
    },
    {
        "icon": "💡",
        "label": "Java Fact",
        "headline": "Every class ultimately inherits from Object.",
        "body": "That is where methods like toString() and equals() originally come from.",
        "topic": "equals(), ==, =, and toString()"
    },
    {
        "icon": "⚠️",
        "label": "Common Trap",
        "headline": "A method signature does not include the return type.",
        "body": "In Java, the signature is the method name plus parameter types.",
        "topic": "Methods"
    },
    {
        "icon": "🧠",
        "label": "OOP Tip",
        "headline": "Behavior belongs where the data lives.",
        "body": "If a method constantly needs another object’s fields, that behavior might belong in that other class.",
        "topic": "Classes and Objects"
    },
    {
        "icon": "📦",
        "label": "Array Tip",
        "headline": "Multidimensional arrays are arrays of arrays.",
        "body": "A 2D array can be pictured like rows and columns, but Java stores it as nested arrays.",
        "topic": "Arrays and ArrayLists"
    },
    {
        "icon": "😂",
        "label": "Java Joke",
        "headline": "I asked the array for one more item.",
        "body": "It threw boundaries at me.",
        "topic": "Arrays and ArrayLists"
    },
    {
        "icon": "🛠️",
        "label": "Debug Tip",
        "headline": "Runtime errors happen while the program is running.",
        "body": "The code may compile successfully and still fail when a bad input, null reference, or invalid index appears.",
        "topic": "Exceptions, Files, and Null Pointers"
    },
    {
        "icon": "💡",
        "label": "Java Fact",
        "headline": "try/catch handles exceptions without pretending they cannot happen.",
        "body": "The try block contains risky code. The catch block explains what to do if the exception occurs.",
        "topic": "Exceptions, Files, and Null Pointers"
    },
    {
        "icon": "⚠️",
        "label": "Common Trap",
        "headline": "Catching an exception does not automatically fix the cause.",
        "body": "It only lets your program respond instead of crashing immediately.",
        "topic": "Exceptions, Files, and Null Pointers"
    },
    {
        "icon": "💬",
        "label": "Quote-ish",
        "headline": "The computer is literal. That is both the problem and the clue.",
        "body": "When Java behaves strangely, it is usually obeying something you accidentally wrote.",
        "topic": "Final Exam Mixed Practice"
    },
    {
        "icon": "🎯",
        "label": "Trace Tip",
        "headline": "Trace object references, not just values.",
        "body": "Two variables can point to the same object. Changing the object through one reference affects what the other sees.",
        "topic": "Classes and Objects"
    },
    {
        "icon": "🧠",
        "label": "OOP Tip",
        "headline": "Composition means an object has another object.",
        "body": "Inheritance is is-a. Composition is has-a. They solve different design problems.",
        "topic": "Inheritance and Polymorphism"
    },
    {
        "icon": "⚠️",
        "label": "Common Trap",
        "headline": "Do not use inheritance just to avoid typing code twice.",
        "body": "Shared code is nice, but the relationship still has to make sense.",
        "topic": "Inheritance and Polymorphism"
    },
    {
        "icon": "💡",
        "label": "Java Fact",
        "headline": "Abstract classes can define partial behavior.",
        "body": "They can have normal methods, fields, constructors, and abstract methods for subclasses to complete.",
        "topic": "Inheritance and Polymorphism"
    },
    {
        "icon": "🧪",
        "label": "Exam Reminder",
        "headline": "An abstract method has no body.",
        "body": "It declares what must exist, and subclasses provide the implementation.",
        "topic": "Inheritance and Polymorphism"
    },
    {
        "icon": "😂",
        "label": "Java Joke",
        "headline": "My abstract class had big plans.",
        "body": "It just needed someone else to implement them.",
        "topic": "Inheritance and Polymorphism"
    },
    {
        "icon": "💬",
        "label": "Quote-ish",
        "headline": "Small methods make big programs less scary.",
        "body": "Breaking work into clear pieces helps with tracing, testing, and debugging.",
        "topic": "Methods"
    },
    {
        "icon": "⚠️",
        "label": "Common Trap",
        "headline": "A side effect changes something outside the return value.",
        "body": "Printing, modifying a field, or changing a list can all be side effects.",
        "topic": "Methods"
    },
    {
        "icon": "💡",
        "label": "Java Fact",
        "headline": "The diamond operator lets Java infer generic types.",
        "body": "new ArrayList<String>() can often become new ArrayList<>() when the type is clear from context.",
        "topic": "Arrays and ArrayLists"
    },
    {
        "icon": "🧠",
        "label": "OOP Tip",
        "headline": "Getters reveal data carefully. Setters change data carefully.",
        "body": "They give controlled access instead of letting outside code touch fields directly.",
        "topic": "Classes and Objects"
    },
    {
        "icon": "📚",
        "label": "Vocabulary Tip",
        "headline": "A class variable is usually static.",
        "body": "It belongs to the class itself instead of being copied into every object.",
        "topic": "Static, Final, Memory, and Garbage Collection"
    },
    {
        "icon": "😂",
        "label": "Java Joke",
        "headline": "My code compiled on the first try.",
        "body": "Then I woke up and fixed the missing semicolon.",
        "topic": "Java Basics"
    },
    {
        "icon": "🎯",
        "label": "Exam Reminder",
        "headline": "When fixing code, change the cause, not just the symptom.",
        "body": "A single wrong variable, missing return, or bad condition can create several visible problems.",
        "topic": "Final Exam Mixed Practice"
    },
    {
        "icon": "💡",
        "label": "Java Fact",
        "headline": "Comments explain why, not just what.",
        "body": "The code already shows what it does. A useful comment explains the reason behind a choice.",
        "topic": "Java Basics"
    },
    {
        "icon": "⚠️",
        "label": "Common Trap",
        "headline": "A default constructor disappears when you write another constructor.",
        "body": "If you define a constructor with parameters, Java no longer gives you a no-argument constructor for free.",
        "topic": "Constructors"
    },
    {
        "icon": "🧠",
        "label": "OOP Tip",
        "headline": "this means the current object.",
        "body": "Use this.field when you need to clearly refer to the object’s field instead of a local variable or parameter.",
        "topic": "Classes and Objects"
    },
    {
        "icon": "💡",
        "label": "Java Fact",
        "headline": "super means the parent side of the object.",
        "body": "Use super.method() or super(...) when you need parent behavior or a parent constructor.",
        "topic": "Inheritance and Polymorphism"
    }
];

  function randomThoughtIndex(except = -1) {
    if (javaThoughts.length <= 1) return 0;
    let next = Math.floor(Math.random() * javaThoughts.length);
    while (next === except) next = Math.floor(Math.random() * javaThoughts.length);
    return next;
  }

  let currentThoughtIndex = randomThoughtIndex();

  function getThoughtIndex() {
    return currentThoughtIndex;
  }

  function renderHeroThought() {
    const thought = javaThoughts[getThoughtIndex()];
    const relatedTopic = topicByName(thought.topic) || topics[0];
    return `<section class="hero gym-hero thought-hero" aria-label="Random Java and OOP thought">
      <div class="thought-board">
        <article class="thought-card thought-random-card" aria-live="polite">
          <div class="thought-type"><span class="thought-icon">${escapeHtml(thought.icon)}</span><span>${escapeHtml(thought.label)}</span></div>
          <h2>${escapeHtml(thought.headline)}</h2>
          <p class="thought-body">${escapeHtml(thought.body)}</p>
        </article>
        <div class="hero-actions thought-actions">
          <button id="new-thought" class="primary-cta" type="button">New random thought</button>
          <a class="button secondary" href="#topic/${relatedTopic.id}">Review related topic</a>
          <a class="button secondary" href="#practice">Start practice</a>
        </div>
      </div>
    </section>`;
  }

  function setupHeroThoughtControls() {
    const button = document.querySelector('#new-thought');
    if (!button) return;
    button.addEventListener('click', () => {
      currentThoughtIndex = randomThoughtIndex(getThoughtIndex());
      renderDashboard();
    });
  }

  function topicStats(topic, state = ProgressStore.get()) {
    const topicQuestions = questions.filter(question => question.topic === topic.name);
    const answers = topicQuestions.map(question => state.answers[question.id]).filter(Boolean);
    const attempts = answers.reduce((sum, answer) => sum + answer.attempts, 0);
    const correct = answers.reduce((sum, answer) => sum + answer.correct, 0);
    return { attempts, correct, accuracy: attempts ? percent(correct, attempts) : 0, reviewed: Boolean(state.completedTopics[topic.id]), weak: state.weakTopics[topic.name] };
  }

  function setNav(active) {
    document.querySelectorAll('.main-nav a').forEach(link => link.classList.toggle('active', link.dataset.route === active));
  }

  function pageHead(eyebrow, title, lede) {
    return `<header class="page-head"><p class="eyebrow">${escapeHtml(eyebrow)}</p><h1>${escapeHtml(title)}</h1><p class="lede">${escapeHtml(lede)}</p></header>`;
  }

  function topicLink(topic, label = 'Study topic', className = 'button') {
    return `<a class="${className}" href="#topic/${topic.id}">${escapeHtml(label)}</a>`;
  }


  function activityIcon(label = '') {
    const lower = label.toLowerCase();
    if (lower.includes('flashcard')) return '🃏';
    if (lower.includes('exam')) return '🧪';
    if (lower.includes('practice')) return '⚡';
    if (lower.includes('review')) return '🔁';
    if (lower.includes('topic')) return '📚';
    return '✦';
  }

  function pathMeta(index) {
    return [
      { icon: '01', badge: 'Warm-up', action: 'Start reset', tone: 'blue' },
      { icon: '02', badge: 'Core OOP', action: 'Build base', tone: 'green' },
      { icon: '03', badge: 'Final run', action: 'Sprint now', tone: 'purple' }
    ][index] || { icon: String(index + 1).padStart(2, '0'), badge: 'Study route', action: 'Start path', tone: 'blue' };
  }

  function renderQuickStudyPath(path, index, state) {
    const meta = pathMeta(index);
    const pathTopics = path.topics.map(topicById).filter(Boolean);
    const done = pathTopics.filter(topic => state.completedTopics[topic.id]).length;
    const progress = percent(done, pathTopics.length);
    const firstTopic = pathTopics[0] || topics[0];
    return `<div class="study-path-card path-${meta.tone}">
      <div class="path-orb" aria-hidden="true">${escapeHtml(meta.icon)}</div>
      <div class="path-body">
        <div class="path-title-line"><h3>${escapeHtml(path.name)}</h3><span class="path-badge">${escapeHtml(meta.badge)}</span></div>
        <p class="muted">${escapeHtml(path.next)}</p>
        <div class="path-progress"><span style="width:${progress}%"></span></div>
        <div class="path-topic-row">${pathTopics.map(topic => topicLink(topic, topic.name, 'button quiet path-topic')).join('')}</div>
      </div>
      <a class="path-launch" href="#topic/${firstTopic.id}">${escapeHtml(meta.action)} →</a>
    </div>`;
  }

  function renderRecentActivity(history) {
    if (!history.length) {
      return `<div class="activity-empty">
        <div class="activity-empty-icon">✦</div>
        <h3>No study log yet</h3>
        <p class="muted">Start one practice sprint or flip a flashcard. Your wins and weak spots will appear here like a training feed.</p>
        <a class="button secondary" href="#practice">Create first activity</a>
      </div>`;
    }
    return `<div class="timeline-list">${history.map((item, index) => `<div class="timeline-item">
      <span class="timeline-rail" aria-hidden="true"></span>
      <span class="timeline-icon" aria-hidden="true">${activityIcon(item.label)}</span>
      <span class="timeline-copy"><strong>${escapeHtml(item.label)}</strong><small>${escapeHtml(item.details)}</small></span>
      <time>${escapeHtml(item.date)}</time>
    </div>`).join('')}</div><div class="activity-footer"><a class="button secondary" href="#progress">View full log</a><span class="muted">Last ${Math.min(history.length, 5)} actions</span></div>`;
  }

  function renderDashboard() {
    setNav('dashboard');
    const summary = ProgressStore.summary(topics);
    const recommendation = ReviewScheduler.recommendation();
    const history = summary.state.history.slice(0, 5);
    main.innerHTML = `
      ${renderHeroThought()}
      <section class="stat-grid" aria-label="Study summary">
        <article class="stat stat-card"><span class="stat-icon">🎯</span><span class="number">${summary.readiness}%</span><span class="label">Final exam readiness</span><div class="progress-track"><div class="progress-bar ${summary.readiness >= 70 ? 'good' : 'warn'}" style="width:${summary.readiness}%"></div></div></article>
        <article class="stat stat-card"><span class="stat-icon">🧭</span><span class="number">${summary.completed}/${topics.length}</span><span class="label">Topics reviewed</span></article>
        <article class="stat stat-card"><span class="stat-icon">⚡</span><span class="number">${summary.accuracy}%</span><span class="label">Practice accuracy</span></article>
        <article class="stat stat-card"><span class="stat-icon">🔥</span><span class="number">${summary.state.streak}</span><span class="label">Day streak</span></article>
      </section>
      <section class="split">
        <article class="card">
          <p class="eyebrow">Recommended next</p>
          <h2>${escapeHtml(recommendation.topic.name)}</h2>
          <p>${escapeHtml(recommendation.message)}</p>
          <div class="button-row">${topicLink(recommendation.topic, 'Open topic')}<a class="button secondary" href="#practice">Practice now</a></div>
        </article>
        <article class="card">
          <p class="eyebrow">Weak-topic review</p>
          ${summary.weakCount ? `<h2>${summary.weakCount} topic${summary.weakCount === 1 ? '' : 's'} need attention</h2><ul class="details-list">${ReviewScheduler.weakTopicList().slice(0, 3).map(item => `<li><strong>${escapeHtml(item.name)}</strong> — ${item.missedCount} missed. ${escapeHtml(item.recommendedAction)}</li>`).join('')}</ul>` : '<h2>No weak topics yet</h2><p>Practice answers you miss will appear here with a focused review plan.</p>'}
          <div class="button-row"><a class="button secondary" href="#progress">View progress</a></div>
        </article>
      </section>
      <section class="two-col dashboard-bottom" style="margin-top:1rem">
        <article class="card study-paths-panel">
          <div class="panel-heading"><div><p class="eyebrow">Quick study paths</p><h2>Pick a training route</h2></div><span class="panel-chip">${studyPaths.length} paths</span></div>
          <div class="study-path-stack">${studyPaths.map((path, index) => renderQuickStudyPath(path, index, summary.state)).join('')}</div>
        </article>
        <article class="card activity-panel">
          <div class="panel-heading"><div><p class="eyebrow">Recent activity</p><h2>Training feed</h2></div><span class="panel-chip live">Live log</span></div>
          ${renderRecentActivity(history)}
        </article>
      </section>`;
    setupHeroThoughtControls();
  }

  function renderTopics() {
    setNav('topics');
    const state = ProgressStore.get();
    main.innerHTML = `${pageHead('Topic map', 'Study every major CS202 topic', 'Each topic includes a plain explanation, a short example, a trace, a bug fix, a coding task, vocabulary, and quiz questions.')}
      <section class="topic-grid">${topics.map(topic => {
        const stats = topicStats(topic, state);
        const status = stats.weak ? `<span class="pill weak">Needs review</span>` : stats.accuracy >= 75 && stats.attempts ? `<span class="pill strong">Strong</span>` : `<span class="pill">${escapeHtml(topic.scope)}</span>`;
        return `<article class="card topic-card level-card"><div class="topic-topline"><div><span class="level-number">${topic.number}</span><p class="eyebrow">${escapeHtml(topic.scope)}</p><h2>${escapeHtml(topic.name)}</h2></div>${status}</div><p>${escapeHtml(topic.summary)}</p><div><small class="muted">${stats.reviewed ? 'Reviewed' : 'Not reviewed'} · ${stats.attempts ? `${stats.accuracy}% question accuracy` : 'No question attempts'}</small><div class="progress-track"><div class="progress-bar ${stats.weak ? 'warn' : ''}" style="width:${stats.reviewed ? Math.max(35, stats.accuracy) : stats.accuracy}%"></div></div></div><div class="button-row">${topicLink(topic, 'Study')}<a class="button secondary" href="#practice/${topic.id}">Practice sprint</a></div></article>`;
      }).join('')}</section>`;
  }

  function renderTopicDetail(id) {
    const topic = topicById(id);
    if (!topic) { go('topics'); return; }
    setNav('topics');
    const stats = topicStats(topic);
    main.innerHTML = `
      <section class="page-head"><p class="eyebrow">${topic.number} · ${escapeHtml(topic.scope)}</p><div class="topic-topline"><div><h1>${escapeHtml(topic.name)}</h1><p class="lede">${escapeHtml(topic.summary)}</p></div><a class="button secondary" href="#topics">All topics</a></div></section>
      <section class="split">
        <article class="card"><h2>What it means</h2><p>${escapeHtml(topic.explain)}</p><h3>Why it matters on the exam</h3><p>${escapeHtml(topic.importance)}</p></article>
        <article class="card"><h2>Common traps</h2><ul class="details-list">${topic.traps.map(trap => `<li>${escapeHtml(trap)}</li>`).join('')}</ul><div class="button-row"><button id="mark-reviewed" class="${stats.reviewed ? 'secondary' : 'success'}">${stats.reviewed ? 'Reviewed ✓' : 'Mark as reviewed'}</button><a class="button quiet" href="${escapeHtml(topic.javaFile)}">Open related Java file</a></div></article>
      </section>
      <section class="card" style="margin-top:1rem"><p class="eyebrow">Coverage guide</p><h2>Know these pieces</h2><ul class="details-list">${topic.coverage.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>
      <section class="card" style="margin-top:1rem"><p class="eyebrow">See</p><h2>Short Java example</h2>${codeBlock(topic.code)}</section>
      <section style="margin-top:1rem"><h2>Active practice</h2><div class="activity-grid">
        <article class="card activity"><p class="eyebrow">Trace</p><h3>${escapeHtml(topic.trace.prompt)}</h3>${codeBlock(topic.trace.code)}<details><summary>Check your reasoning</summary><p><strong>Answer:</strong> ${escapeHtml(topic.trace.answer)}</p><p>${escapeHtml(topic.trace.explanation)}</p></details></article>
        <article class="card activity fix"><p class="eyebrow">Fix</p><h3>${escapeHtml(topic.debug.prompt)}</h3>${codeBlock(topic.debug.code)}<details><summary>Reveal corrected code</summary>${codeBlock(topic.debug.answer)}<p>${escapeHtml(topic.debug.explanation)}</p></details></article>
        <article class="card activity build"><p class="eyebrow">Build</p><h3>Write it yourself</h3><p>${escapeHtml(topic.build.prompt)}</p><details><summary>Compare with a model answer</summary>${codeBlock(topic.build.solution)}</details></article>
        <article class="card activity exam"><p class="eyebrow">Retain</p><h3>Vocabulary check</h3><ul class="details-list">${topic.vocabulary.map(item => `<li><strong>${escapeHtml(item.term)}</strong> — ${escapeHtml(item.definition)}</li>`).join('')}</ul><a class="button secondary" href="#practice/${topic.id}">Quiz this topic</a></article>
      </div></section>
      <section class="card" style="margin-top:1rem"><p class="eyebrow">Final-exam habit</p><h2>Before you move on</h2><div class="checklist"><label><input type="checkbox"> I can explain the idea without reading the definition.</label><label><input type="checkbox"> I traced the example line by line.</label><label><input type="checkbox"> I can explain why the broken code fails.</label><label><input type="checkbox"> I wrote or planned the coding task.</label></div><div class="button-row"><a class="button" href="#practice/${topic.id}">Start this topic’s questions</a></div></section>`;
    document.querySelector('#mark-reviewed').addEventListener('click', () => { ProgressStore.markTopic(topic.id); renderTopicDetail(topic.id); });
  }

  function practiceOptions(selectedTopic = 'all') {
    return `<option value="all">All topics</option>${topics.map(topic => `<option value="${topic.id}" ${topic.id === selectedTopic ? 'selected' : ''}>${escapeHtml(topic.name)}</option>`).join('')}`;
  }

  function renderPractice(preselected = 'all') {
    setNav('practice');
    main.innerHTML = `${pageHead('Practice lab', 'Build a focused question set', 'Choose a mission, press start, and answer without letting the app become another boring notes page.')}
      <section class="card practice-builder interactive-card">
        <div class="practice-panel-title"><div><p class="eyebrow">Mission builder</p><h2>Set your study sprint</h2></div><span class="pill strong">Weak answers auto-review</span></div>
        <div class="form-grid">
          <label>Topic<select id="practice-topic">${practiceOptions(preselected)}</select></label>
          <label>Practice type<select id="practice-type"><option value="all">Mixed quiz</option><option value="trace">Trace the code</option><option value="debug">Fix the bug</option><option value="code-writing">Write the code</option><option value="vocabulary">Vocabulary</option><option value="matching">Vocabulary match</option><option value="uml">Read UML</option><option value="short-answer">Short answer</option><option value="multiple-choice">Concept check</option></select></label>
          <label>Difficulty<select id="practice-difficulty"><option value="all">All levels</option><option value="easy">Easy</option><option value="medium">Medium</option><option value="exam">Exam</option></select></label>
          <label>Questions<select id="practice-count"><option value="3">3</option><option value="5" selected>5</option><option value="10">10</option></select></label>
        </div>
        <div class="mission-preview" id="practice-preview">Mixed Java sprint · 5 questions · answers shuffle every run</div>
        <div class="button-row"><button id="start-practice" class="primary-cta">Start practice sprint</button><a class="button secondary" href="#flashcards">Review flashcards</a></div>
      </section>
      <section class="three-col mode-grid" style="margin-top:1rem"><article class="card mode-card"><span class="mode-icon">🔎</span><h3>Trace</h3><p class="muted">Predict output, variable changes, and errors before revealing the answer.</p></article><article class="card mode-card"><span class="mode-icon">🛠️</span><h3>Fix</h3><p class="muted">Explain the cause, correct the code, then compare with the model answer.</p></article><article class="card mode-card"><span class="mode-icon">⌨️</span><h3>Build</h3><p class="muted">Write a small method or class. Self-score honestly and redo weak areas.</p></article></section>`;
    const updatePracticePreview = () => {
      const selectedTopic = document.querySelector('#practice-topic').value;
      const type = document.querySelector('#practice-type').value;
      const count = document.querySelector('#practice-count').value;
      const topicLabel = selectedTopic === 'all' ? 'Mixed Java' : topicById(selectedTopic).name;
      const typeLabel = type === 'all' ? 'mixed' : titleCase(type).toLowerCase();
      document.querySelector('#practice-preview').textContent = `${topicLabel} ${typeLabel} sprint · ${count} questions · answers shuffle every run`;
    };
    ['#practice-topic', '#practice-type', '#practice-difficulty', '#practice-count'].forEach(selector => document.querySelector(selector).addEventListener('change', updatePracticePreview));
    updatePracticePreview();
    document.querySelector('#start-practice').addEventListener('click', () => {
      const selectedTopic = document.querySelector('#practice-topic').value;
      const type = document.querySelector('#practice-type').value;
      const difficulty = document.querySelector('#practice-difficulty').value;
      const count = Number(document.querySelector('#practice-count').value);
      let set = questions.filter(question => (selectedTopic === 'all' || topicById(selectedTopic).name === question.topic) && (type === 'all' || question.type === type) && (difficulty === 'all' || question.difficulty === difficulty));
      set = shuffle(set).slice(0, count);
      const session = new QuizEngine.QuizSession({ root: main, questions: set, source: 'practice', label: selectedTopic === 'all' ? 'Mixed practice' : `${topicById(selectedTopic).name} practice` });
      session.start();
    });
  }

  function currentCards() {
    const filtered = flashcardState.filter === 'all' ? vocabulary : vocabulary.filter(item => item.examTags.includes(flashcardState.filter));
    if (flashcardState.index >= filtered.length) flashcardState.index = 0;
    return filtered;
  }

  function renderFlashcards() {
    setNav('flashcards');
    const cards = currentCards();
    const card = cards[flashcardState.index];
    main.innerHTML = `${pageHead('Vocabulary bank', 'Recall the word, then connect it to code', 'Flip the card only after you try to explain the term. Mark it known or keep it in the review loop.')}
      <section class="card flashcard-toolbar"><div class="form-grid" style="grid-template-columns:1fr auto"><label>Exam filter<select id="flashcard-filter"><option value="all" ${flashcardState.filter === 'all' ? 'selected' : ''}>All vocabulary</option><option value="midterm1" ${flashcardState.filter === 'midterm1' ? 'selected' : ''}>Midterm 1</option><option value="midterm2" ${flashcardState.filter === 'midterm2' ? 'selected' : ''}>Midterm 2</option><option value="final" ${flashcardState.filter === 'final' ? 'selected' : ''}>Final</option></select></label><p class="muted"><strong>Card ${flashcardState.index + 1}</strong> of ${cards.length}</p></div><div class="progress-track"><div class="progress-bar" style="width:${Math.round(((flashcardState.index + 1) / cards.length) * 100)}%"></div></div></section>
      <section class="flashcard ${flashcardState.flipped ? 'flipped' : ''}" id="flashcard" role="button" tabindex="0" aria-label="Flip flashcard" style="margin-top:1rem"><div class="flashcard-inner"><article class="flashcard-face"><p class="eyebrow">${escapeHtml(card.topic)}</p><div class="flashcard-word">${escapeHtml(card.term)}</div><p class="flip-hint">Click, tap, or press Enter to flip</p></article><article class="flashcard-face flashcard-back"><p class="eyebrow">Definition</p><p>${escapeHtml(card.definition)}</p><p class="flip-hint">Click again to hide the answer</p></article></div></section>
      <div class="button-row flashcard-actions"><button id="known" class="success">I know this</button><button id="learning" class="secondary">Still learning</button><button id="next-card" class="quiet">Next card →</button></div>
      <section class="card code-connection" style="margin-top:1rem"><p class="eyebrow">Code connection</p><h2>Where this shows up</h2>${codeBlock(card.example)}</section>`;
    const flip = () => { flashcardState.flipped = !flashcardState.flipped; renderFlashcards(); };
    document.querySelector('#flashcard').addEventListener('click', flip);
    document.querySelector('#flashcard').addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); flip(); } });
    document.querySelector('#flashcard-filter').addEventListener('change', event => { flashcardState = { filter: event.target.value, index: 0, flipped: false }; renderFlashcards(); });
    const move = known => { ProgressStore.recordFlashcard(card.term, known); flashcardState.index = (flashcardState.index + 1) % cards.length; flashcardState.flipped = false; renderFlashcards(); };
    document.querySelector('#known').addEventListener('click', () => move(true));
    document.querySelector('#learning').addEventListener('click', () => move(false));
    document.querySelector('#next-card').addEventListener('click', () => move(false));
  }

  function renderExam() {
    setNav('exam');
    main.innerHTML = `${pageHead('Exam mode', 'Practice without hints', 'Questions are selected randomly. Results show missed topics and add them to weak-topic review. Self-assessment prompts do not reveal model answers until the final report.')}
      <section class="card"><div class="form-grid" style="grid-template-columns:2fr 1fr"><label>Exam type<select id="exam-pool">${Object.entries(examPools).map(([id, pool]) => `<option value="${id}">${escapeHtml(pool.label)}</option>`).join('')}</select></label><label>Questions<select id="exam-count"><option value="5">5</option><option value="10" selected>10</option><option value="20">20</option></select></label></div><div class="button-row"><button id="start-exam">Start exam</button></div></section>
      <section class="two-col" style="margin-top:1rem"><article class="card"><h2>Exam rules</h2><ul class="details-list"><li>No answer explanations while the exam is running.</li><li>Trace, multiple-choice, debugging, vocabulary, and code-writing items may appear.</li><li>At the end, review model answers and missed topics.</li></ul></article><article class="card"><h2>Readiness score</h2><p>The dashboard score combines accuracy, completed topics, exam results, and weak-topic count. It is a study signal, not a grade prediction.</p><a class="button secondary" href="#progress">View progress</a></article></section>`;
    document.querySelector('#start-exam').addEventListener('click', () => ExamMode.start({ root: main, poolKey: document.querySelector('#exam-pool').value, count: document.querySelector('#exam-count').value }));
  }

  function strongestTopics(state) {
    return topics.map(topic => ({ topic, ...topicStats(topic, state) })).filter(item => item.attempts).sort((a, b) => b.accuracy - a.accuracy).slice(0, 5);
  }

  function renderProgress() {
    setNav('progress');
    const summary = ProgressStore.summary(topics);
    const weak = ReviewScheduler.weakTopicList();
    const strong = strongestTopics(summary.state);
    main.innerHTML = `${pageHead('Progress', 'Use your results to choose the next study task', 'Progress is stored in this browser with localStorage. Reset only if you want a clean start.')}
      <section class="stat-grid"><article class="stat"><span class="number">${summary.readiness}%</span><span class="label">Readiness score</span></article><article class="stat"><span class="number">${summary.correct}/${summary.attempts}</span><span class="label">Correct practice answers</span></article><article class="stat"><span class="number">${summary.examAverage}%</span><span class="label">Average exam score</span></article><article class="stat"><span class="number">${summary.weakCount}</span><span class="label">Weak topics</span></article></section>
      <section class="two-col"><article class="card"><p class="eyebrow">Weak topics</p>${weak.length ? `<ul class="history-list">${weak.map(item => `<li><span><strong>${escapeHtml(item.name)}</strong><br><small class="muted">${escapeHtml(item.recommendedAction)}</small></span><span class="pill weak">${item.missedCount} missed</span></li>`).join('')}</ul>` : '<div class="empty">No weak topics recorded. Start a practice set to establish a baseline.</div>'}</article><article class="card"><p class="eyebrow">Strongest topics</p>${strong.length ? `<ul class="history-list">${strong.map(item => `<li><span>${escapeHtml(item.topic.name)}</span><span class="pill strong">${item.accuracy}%</span></li>`).join('')}</ul>` : '<div class="empty">Answer questions to see your strongest topics.</div>'}</article></section>
      <section class="card" style="margin-top:1rem"><p class="eyebrow">Topic completion</p><div class="stack">${topics.map(topic => { const item = topicStats(topic, summary.state); return `<div><div class="topic-topline"><strong>${escapeHtml(topic.name)}</strong><small class="muted">${item.reviewed ? 'Reviewed' : 'Not reviewed'} · ${item.attempts ? `${item.accuracy}% accuracy` : 'No attempts'}</small></div><div class="progress-track"><div class="progress-bar ${item.weak ? 'warn' : ''}" style="width:${item.reviewed ? Math.max(15, item.accuracy) : item.accuracy}%"></div></div></div>`; }).join('')}</div></section>
      <section class="two-col" style="margin-top:1rem"><article class="card"><p class="eyebrow">Study history</p>${summary.state.history.length ? `<ul class="history-list">${summary.state.history.map(item => `<li><span>${escapeHtml(item.label)}<br><small class="muted">${escapeHtml(item.details)}</small></span><small class="muted">${escapeHtml(item.date)}</small></li>`).join('')}</ul>` : '<div class="empty">No activity recorded yet.</div>'}</article><article class="card"><p class="eyebrow">Data controls</p><h2>Reset progress</h2><p>This clears local progress, weak topics, scores, flashcard status, and history from this browser.</p><button id="reset-progress" class="danger">Reset local progress</button></article></section>`;
    document.querySelector('#reset-progress').addEventListener('click', () => {
      if (confirm('Reset all CS202 Reviewer Gym progress stored in this browser?')) { ProgressStore.reset(); renderProgress(); }
    });
  }

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index--) { const next = Math.floor(Math.random() * (index + 1)); [copy[index], copy[next]] = [copy[next], copy[index]]; }
    return copy;
  }

  function render() {
    const [section, id] = route();
    if (section === 'topic') renderTopicDetail(id);
    else if (section === 'topics') renderTopics();
    else if (section === 'practice') renderPractice(id || 'all');
    else if (section === 'flashcards') renderFlashcards();
    else if (section === 'exam') renderExam();
    else if (section === 'progress') renderProgress();
    else renderDashboard();
    document.title = section === 'dashboard' ? 'CS202 Reviewer Gym' : `${titleCase(section)} · CS202 Reviewer Gym`;
  }

  setupThemeToggle();
  window.addEventListener('hashchange', render);
  Promise.resolve(window.REVIEWER_READY).catch(() => {}).finally(render);
})();
