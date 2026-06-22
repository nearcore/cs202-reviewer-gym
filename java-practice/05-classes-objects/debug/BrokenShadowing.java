// Compiles, but does not update the field. Fix it with this.name = name.
public class BrokenShadowing {
    private String name;

    public void setName(String name) {
        name = name;
    }
}
