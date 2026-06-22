import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

/** Mini Project 6: read a file, count words, and handle a missing file. */
public class FileWordCounter {
    public static int countWords(File file) throws FileNotFoundException {
        int words = 0;
        try (Scanner input = new Scanner(file)) {
            while (input.hasNextLine()) {
                String line = input.nextLine().trim();
                if (!line.isEmpty()) words += line.split("\\s+").length;
            }
        }
        return words;
    }

    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("Usage: java FileWordCounter path/to/file.txt");
            return;
        }
        try {
            System.out.println("words: " + countWords(new File(args[0])));
        } catch (FileNotFoundException exception) {
            System.out.println("Could not find: " + args[0]);
        }
    }
}
