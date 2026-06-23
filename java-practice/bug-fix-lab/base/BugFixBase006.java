// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Override that did not override
// Topic: Inheritance and Polymorphism
// This file may be intentionally broken or weak. Read the website instructions before fixing.

public class BugFixBase006 {
    static class Animal {
        public String speak() { return "sound"; }
    }
    static class Dog extends Animal {
        public String Speak() { return "bark"; }
    }
    public static void main(String[] args) {
        Animal animal = new Dog();
        System.out.println(animal.speak());
    }
}
