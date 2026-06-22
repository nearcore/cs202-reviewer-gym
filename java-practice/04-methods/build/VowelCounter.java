public class VowelCounter {
    public static int countVowels(String text) {
        int count = 0;
        for (char letter : text.toLowerCase().toCharArray()) {
            if ("aeiou".indexOf(letter) >= 0) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(countVowels("Java is practical"));
    }
}
