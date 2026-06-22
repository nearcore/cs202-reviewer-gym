// Intentionally broken: length is one past the last usable index.
public class BrokenLastIndex {
    public static void main(String[] args) {
        String[] names = {"Ana", "Ben", "Chris"};
        System.out.println(names[names.length]);
    }
}
