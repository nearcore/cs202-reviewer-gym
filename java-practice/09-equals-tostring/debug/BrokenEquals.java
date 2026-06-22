// Compiles, but overloads equals instead of overriding Object.equals.
public class BrokenEquals {
    private int id;

    public boolean equals(BrokenEquals other) {
        return id == other.id;
    }
}
