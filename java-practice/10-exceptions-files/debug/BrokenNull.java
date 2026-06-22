// Intentionally broken at runtime: create a Dog or check for null before bark().
public class BrokenNull {
    static class Dog {
        void bark() { System.out.println("bark"); }
    }

    public static void main(String[] args) {
        Dog dog = null;
        dog.bark();
    }
}
