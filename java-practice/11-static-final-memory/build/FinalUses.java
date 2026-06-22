final class FinalUtility {
    public final void display() {
        System.out.println("This method cannot be overridden.");
    }
}

public class FinalUses {
    public static void main(String[] args) {
        final int value = 5;
        System.out.println(value);
        new FinalUtility().display();
    }
}
