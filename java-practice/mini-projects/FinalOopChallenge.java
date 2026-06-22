import java.util.ArrayList;
import java.util.Objects;

/** Mini Project 8: a compact inventory system mixing final-exam OOP ideas. */
public class FinalOopChallenge {
    interface Borrowable { boolean borrow(); }

    static abstract class Item {
        private final String id;
        private final String title;
        Item(String id, String title) { this.id = id; this.title = title; }
        public String id() { return id; }
        public String title() { return title; }
        public abstract String type();
        @Override public boolean equals(Object obj) {
            return obj instanceof Item other && Objects.equals(id, other.id);
        }
        @Override public int hashCode() { return Objects.hash(id); }
        @Override public String toString() { return type() + "{" + id + ", " + title + "}"; }
    }

    static class Book extends Item implements Borrowable {
        private boolean borrowed;
        Book(String id, String title) { super(id, title); }
        @Override public String type() { return "Book"; }
        @Override public boolean borrow() { if (borrowed) return false; borrowed = true; return true; }
    }

    private final ArrayList<Item> items = new ArrayList<>();
    public void add(Item item) { items.add(item); }
    public void printItems() { items.forEach(System.out::println); }

    public static void main(String[] args) {
        FinalOopChallenge library = new FinalOopChallenge();
        Book book = new Book("B-1", "Java Practice");
        library.add(book);
        library.printItems();
        System.out.println("borrowed: " + book.borrow());
        System.out.println("borrowed again: " + book.borrow());
    }
}
