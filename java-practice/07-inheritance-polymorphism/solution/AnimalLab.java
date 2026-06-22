import java.util.ArrayList;

abstract class Animal {
    private final String name;

    protected Animal(String name) {
        this.name = name;
    }

    public String getName() { return name; }
    public abstract void speak();
}

class Dog extends Animal {
    Dog(String name) { super(name); }
    @Override public void speak() { System.out.println(getName() + ": bark"); }
}

class Cat extends Animal {
    Cat(String name) { super(name); }
    @Override public void speak() { System.out.println(getName() + ": meow"); }
}

public class AnimalLab {
    public static void main(String[] args) {
        ArrayList<Animal> animals = new ArrayList<>();
        animals.add(new Dog("Rex"));
        animals.add(new Cat("Mia"));
        for (Animal animal : animals) {
            animal.speak();
        }
    }
}
