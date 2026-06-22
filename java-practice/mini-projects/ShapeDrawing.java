import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;

/** Mini Project 3: draw a small scene using Graphics and constants. */
public class ShapeDrawing extends JPanel {
    private static final int WIDTH = 420;
    private static final int HEIGHT = 280;

    ShapeDrawing() { setPreferredSize(new Dimension(WIDTH, HEIGHT)); }

    @Override protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(new Color(225, 242, 255)); g.fillRect(0, 0, WIDTH, HEIGHT);
        g.setColor(new Color(41, 150, 80)); g.fillRect(0, 200, WIDTH, 80);
        g.setColor(Color.ORANGE); g.fillOval(315, 25, 50, 50);
        g.setColor(new Color(125, 75, 45)); g.fillRect(150, 130, 120, 70);
        g.drawLine(135, 130, 210, 75); g.drawLine(210, 75, 285, 130);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("Shape Drawing");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setContentPane(new ShapeDrawing());
            frame.pack(); frame.setLocationByPlatform(true); frame.setVisible(true);
        });
    }
}
