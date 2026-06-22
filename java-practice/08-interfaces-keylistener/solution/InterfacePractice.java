interface DrawablePractice {
    void draw();
}

class CirclePractice implements DrawablePractice {
    @Override
    public void draw() {
        System.out.println("Drawing a circle");
    }
}

public class InterfacePractice {
    public static void main(String[] args) {
        DrawablePractice shape = new CirclePractice();
        shape.draw();
    }
}
