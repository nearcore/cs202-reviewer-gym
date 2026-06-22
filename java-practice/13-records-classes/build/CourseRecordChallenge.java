public record CourseRecordChallenge(String code, int credits) {
    public CourseRecordChallenge {
        if (credits < 1) {
            throw new IllegalArgumentException("credits must be positive");
        }
    }
}
