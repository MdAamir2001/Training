import java.util.TreeSet;
import java.util.Iterator;

public class TestTreeSet {
    public static void main(String[] args) {
        TreeSet<String> productSet = new TreeSet<>();

        productSet.add("Ball");
        productSet.add("Phone");
        productSet.add("Tablet");
        productSet.add("Desktop");
        productSet.add("Pen");
	productSet.add("Television");

        productSet.add("Ball");
        productSet.add("Phone");

        System.out.println("Product Names:");
        Iterator<String> iterator = productSet.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        System.out.println("\nFirst Product name: " + productSet.first());
        System.out.println("Last Product name: " + productSet.last());

        System.out.println("\nSize of TreeSet: " + productSet.size());

        productSet.remove("Pen");


        System.out.println("\nSize of TreeSet after removal of the products: " + productSet.size());
    }
}
