record TracePoint(int x, int y) {}

public class TraceRecord {
    public static void main(String[] args) {
        TracePoint point = new TracePoint(2, 3);
        System.out.println(point.x() + point.y());
    }
}
