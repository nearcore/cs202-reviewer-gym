interface TraceGreeter { void greet(); }

class FriendlyGreeter implements TraceGreeter {
    @Override public void greet() { System.out.println("Hello"); }
}

public class TraceInterface {
    public static void main(String[] args) {
        TraceGreeter greeter = new FriendlyGreeter();
        greeter.greet();
    }
}
