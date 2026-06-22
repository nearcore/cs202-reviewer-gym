public class SwitchChallenge {
    public static void main(String[] args) {
        String grade = "B";
        String message = switch (grade) {
            case "A" -> "Excellent";
            case "B" -> "Good";
            default -> "Keep practicing";
        };
        System.out.println(message);
    }
}
