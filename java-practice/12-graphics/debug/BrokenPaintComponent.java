import java.awt.Graphics;
import javax.swing.JPanel;

// Compiles but leaves out super.paintComponent(g); add it as the first line.
public class BrokenPaintComponent extends JPanel {
    @Override
    protected void paintComponent(Graphics g) {
        g.fillRect(0, 0, 50, 50);
    }
}
