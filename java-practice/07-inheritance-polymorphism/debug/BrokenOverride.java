// Intentionally broken: Speak has the wrong capitalization for @Override.
class BrokenOverrideAnimal {
    public void speak() {}
}

public class BrokenOverride extends BrokenOverrideAnimal {
    @Override
    public void Speak() {}
}
