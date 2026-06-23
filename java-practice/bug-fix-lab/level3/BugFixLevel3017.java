// CS202 Reviewer Gym - Bug Fix Lab
// Quest: Graphics stores drawing in paint 17
// Topic: Graphics
// This file may be intentionally broken or weak. Read the website instructions before fixing.

import javax.swing.*; import java.awt.*; public class BugFixLevel3017 extends JPanel { int x=0; protected void paintComponent(Graphics g){ super.paintComponent(g); x += 5; g.fillRect(x,10,20,20); } }
