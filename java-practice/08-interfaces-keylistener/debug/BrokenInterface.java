// Intentionally broken: a class implements an interface; it does not extend one.
interface BrokenDrawable { void draw(); }

public class BrokenInterface extends BrokenDrawable {
    public void draw() {}
}
