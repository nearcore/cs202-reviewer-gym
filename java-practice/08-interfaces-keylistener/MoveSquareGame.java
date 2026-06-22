import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;

/** Click the window if needed, then move the square with arrow keys. */
public class MoveSquareGame extends JPanel implements KeyListener {
    private static final int STEP = 8;
    private int x = 140;
    private int y = 100;

    public MoveSquareGame() {
        setPreferredSize(new Dimension(420, 280));
        setBackground(Color.WHITE);
        setFocusable(true);
        addKeyListener(this);
    }

    @Override
    public void addNotify() {
        super.addNotify();
        requestFocusInWindow();
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(new Color(23, 105, 170));
        g.fillRect(x, y, 35, 35);
        g.setColor(Color.DARK_GRAY);
        g.drawString("Use arrow keys to move the square", 110, 30);
    }

    @Override
    public void keyPressed(KeyEvent event) {
        switch (event.getKeyCode()) {
            case KeyEvent.VK_LEFT -> x -= STEP;
            case KeyEvent.VK_RIGHT -> x += STEP;
            case KeyEvent.VK_UP -> y -= STEP;
            case KeyEvent.VK_DOWN -> y += STEP;
            default -> { return; }
        }
        repaint();
    }

    @Override public void keyReleased(KeyEvent event) {}
    @Override public void keyTyped(KeyEvent event) {}

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("CS202 Move Square");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setContentPane(new MoveSquareGame());
            frame.pack();
            frame.setLocationByPlatform(true);
            frame.setVisible(true);
        });
    }
}
