# Solution Notes

The numbered folders keep their runnable reference code in `solution/` beside the related starter, trace, debug, and build files. This is deliberate: it lets you compare a solution without losing the learning context.

## How to Review a Solution

1. Run or trace the starter first.
2. State the exact mistake before opening the solution.
3. Compare the smallest necessary change.
4. Do the extra challenge below before moving on.

| Topic | Why the reference works | Extra challenge |
| --- | --- | --- |
| Basics | `parseInt` converts text; the cast makes division floating point. | Print a String converted from an int. |
| Loops | The condition uses `< length`-style boundaries and the counter changes. | Rewrite one for loop as while. |
| Arrays | Last index is `length - 1`; ArrayList uses methods. | Add a 2D array row sum. |
| Methods | A non-void method returns a value on every path. | Overload `larger` for doubles. |
| Classes | Fields are private and `this` selects the current object’s field. | Add data validation to a setter. |
| Constructors | Constructors have no return type and chain setup with `this(...)`. | Write a copy constructor for Book. |
| Inheritance | Child classes override behavior and parent references dispatch dynamically. | Add Bird to the list. |
| Interfaces | `implements` supplies the contract methods. | Add a second Drawable class. |
| Equality | `equals(Object)` checks type and meaningful fields. | Include a nullable field safely. |
| Exceptions | Risky code is contained and errors get a useful response. | Read CSV-style lines and split them. |
| Static/final | Static count is shared; instance attempts are separate. | Explain a possible memory leak. |
| Graphics | Drawing is in `paintComponent` after `super`. | Add a window or tree. |
| Records | Records generate accessors, equality, and object text. | Convert another simple immutable class to a record. |
