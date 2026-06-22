import java.awt.Color;
import java.awt.Graphics;
import javax.swing.JPanel;

public class ShapeMethods extends JPanel {
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.BLUE);
        g.fillRect(20, 20, 80, 50);
        g.setColor(Color.BLACK);
        g.drawString("Rectangle", 25, 90);
    }
}
