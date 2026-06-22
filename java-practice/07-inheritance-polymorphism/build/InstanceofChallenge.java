class ChallengeAnimal {}
class ChallengeDog extends ChallengeAnimal {
    void fetch() { System.out.println("fetching"); }
}

public class InstanceofChallenge {
    public static void main(String[] args) {
        ChallengeAnimal animal = new ChallengeDog();
        if (animal instanceof ChallengeDog dog) {
            dog.fetch();
        }
    }
}
