public class BookChallenge {
    private String title;
    private int pages;

    public BookChallenge(String title, int pages) {
        this.title = title;
        this.pages = pages;
    }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    @Override
    public String toString() { return title + " (" + pages + " pages)"; }
}
