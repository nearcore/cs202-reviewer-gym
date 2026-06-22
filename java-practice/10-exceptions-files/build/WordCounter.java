public class WordCounter {
    public static int countWords(String line) {
        if (line == null || line.isBlank()) return 0;
        return line.trim().split("\\s+").length;
    }

    public static void main(String[] args) {
        System.out.println(countWords("Java files need clear names"));
    }
}
