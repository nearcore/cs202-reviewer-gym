public record RecordConstructorChallenge(String name, int id) {
    public RecordConstructorChallenge {
        if (name == null || name.isBlank()) {
            name = "Unknown";
        }
        if (id < 0) {
            throw new IllegalArgumentException("id cannot be negative");
        }
    }
}
