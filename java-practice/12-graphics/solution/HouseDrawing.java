import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;

public class HouseDrawing extends JPanel {
    public HouseDrawing() {
        setPreferredSize(new Dimension(420, 300));
        setBackground(Color.WHITE);
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(new Color(255, 210, 70));
        g.fillOval(315, 25, 45, 45);
        g.setColor(new Color(100, 170, 235));
        g.fillRect(100, 140, 170, 105);
        g.setColor(new Color(100, 55, 25));
        g.drawLine(85, 140, 185, 65);
        g.drawLine(185, 65, 285, 140);
        g.fillRect(165, 190, 35, 55);
        g.setColor(Color.DARK_GRAY);
        g.drawString("CS202 Graphics House", 130, 275);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("House Drawing");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setContentPane(new HouseDrawing());
            frame.pack();
            frame.setLocationByPlatform(true);
            frame.setVisible(true);
        });
    }
}
