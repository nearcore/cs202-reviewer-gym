public class BasicsPractice {
    public static void main(String[] args) {
        String text = "42";
        int count = Integer.parseInt(text);
        double average = (double) 5 / 2;
        var name = "Ana";

        System.out.println(name + " has " + count + " points.");
        System.out.println("5 / 2 as a double is " + average);
        System.out.println("count == 42: " + (count == 42));
    }
}
