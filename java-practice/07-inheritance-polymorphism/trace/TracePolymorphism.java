class TraceAnimal {
    void speak() { System.out.println("sound"); }
}

class TraceDog extends TraceAnimal {
    @Override void speak() { System.out.println("bark"); }
}

public class TracePolymorphism {
    public static void main(String[] args) {
        TraceAnimal animal = new TraceDog();
        animal.speak();
    }
}
