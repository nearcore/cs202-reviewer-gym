public class MethodBasicsSolution {
    public static int larger(int first, int second) {
        return first > second ? first : second;
    }

    public static boolean isEven(int number) {
        return number % 2 == 0;
    }

    public static void main(String[] args) {
        System.out.println(larger(4, 9));
        System.out.println(isEven(9));
    }
}
