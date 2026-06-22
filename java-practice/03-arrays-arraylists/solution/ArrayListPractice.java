import java.util.ArrayList;

public class ArrayListPractice {
    public static void main(String[] args) {
        int[] scores = {70, 82, 94};
        ArrayList<String> names = new ArrayList<>();
        names.add("Ana");
        names.add("Ben");
        names.set(1, "Bella");

        System.out.println("last score: " + scores[scores.length - 1]);
        System.out.println("first name: " + names.get(0));
        System.out.println("changed name: " + names.get(1));
    }
}
