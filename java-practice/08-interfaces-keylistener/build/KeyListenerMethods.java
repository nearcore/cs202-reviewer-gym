import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class KeyListenerMethods implements KeyListener {
    private int x = 0;

    @Override
    public void keyPressed(KeyEvent event) {
        if (event.getKeyCode() == KeyEvent.VK_RIGHT) {
            x += 5;
        }
    }

    @Override public void keyReleased(KeyEvent event) {}
    @Override public void keyTyped(KeyEvent event) {}

    public int getX() { return x; }
}
