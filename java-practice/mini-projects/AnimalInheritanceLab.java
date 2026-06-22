import java.util.List;

/** Mini Project 4: inheritance, super, overriding, and polymorphism. */
public class AnimalInheritanceLab {
    static abstract class Animal {
        private final String name;
        Animal(String name) { this.name = name; }
        public String name() { return name; }
        public abstract void speak();
    }
    static class Dog extends Animal { Dog(String name) { super(name); } public void speak() { System.out.println(name() + " says bark"); } }
    static class Cat extends Animal { Cat(String name) { super(name); } public void speak() { System.out.println(name() + " says meow"); } }
    static class Bird extends Animal { Bird(String name) { super(name); } public void speak() { System.out.println(name() + " says chirp"); } }

    public static void main(String[] args) {
        List<Animal> animals = List.of(new Dog("Rex"), new Cat("Mia"), new Bird("Sky"));
        animals.forEach(Animal::speak);
    }
}
