public class StaticFinalPractice {
    public static final int MAX_ATTEMPTS = 3;
    private static int count = 0;
    private int attempts;

    public StaticFinalPractice() {
        count++;
    }

    public void tryOnce() {
        if (attempts < MAX_ATTEMPTS) attempts++;
    }

    public static int getCount() { return count; }

    public static void main(String[] args) {
        StaticFinalPractice first = new StaticFinalPractice();
        StaticFinalPractice second = new StaticFinalPractice();
        first.tryOnce();
        System.out.println("objects: " + getCount());
        System.out.println("first attempts: " + first.attempts);
        System.out.println("limit: " + MAX_ATTEMPTS);
        System.out.println("second attempts: " + second.attempts);
    }
}
