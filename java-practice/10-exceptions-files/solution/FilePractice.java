import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class FilePractice {
    public static void printFile(String filename) {
        try (Scanner input = new Scanner(new File(filename))) {
            while (input.hasNextLine()) {
                System.out.println(input.nextLine());
            }
        } catch (FileNotFoundException exception) {
            System.out.println("File was not found: " + filename);
        }
    }

    public static void parseScore(String text) {
        try {
            int score = Integer.parseInt(text);
            System.out.println("score: " + score);
        } catch (NumberFormatException exception) {
            System.out.println("Invalid number: " + text);
        }
    }

    public static void main(String[] args) {
        parseScore("42");
        parseScore("not-a-number");
        if (args.length > 0) {
            printFile(args[0]);
        } else {
            System.out.println("Pass a file path to read a file.");
        }
    }
}
