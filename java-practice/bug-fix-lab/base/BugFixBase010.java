// CS202 Reviewer Gym - Bug Fix Lab
// Quest: KeyListener missing method
// Topic: Interfaces and KeyListener
// This file may be intentionally broken or weak. Read the website instructions before fixing.

import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class BugFixBase010 implements KeyListener {
    private int x = 0;

    public void keyPressed(KeyEvent e) {
        if (e.getKeyCode() == KeyEvent.VK_RIGHT) {
            x += 5;
        }
    }

    public void keyReleased(KeyEvent e) {}

    public int getX() { return x; }
}
