import java.util.Objects;

public class EqualityPractice {
    private final String title;
    private final int pages;

    public EqualityPractice(String title, int pages) {
        this.title = title;
        this.pages = pages;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof EqualityPractice other)) return false;
        return pages == other.pages && Objects.equals(title, other.title);
    }

    @Override
    public String toString() {
        return "Book{title='" + title + "', pages=" + pages + "}";
    }

    public static void main(String[] args) {
        EqualityPractice first = new EqualityPractice("Java", 300);
        EqualityPractice second = new EqualityPractice("Java", 300);
        System.out.println(first == second);
        System.out.println(first.equals(second));
        System.out.println(first);
    }
}
