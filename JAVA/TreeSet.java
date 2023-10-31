import java.util.TreeSet;
import java.util.Iterator;

public class TestTreeSet {
    public static void main(String[] args) {
        TreeSet<String> productSet = new TreeSet<>();

        productSet.add("Laptop");
        productSet.add("Phone");
        productSet.add("Tablet");
        productSet.add("Desktop");
        productSet.add("Headphones");

        productSet.add("Laptop");
        productSet.add("Phone");

        System.out.println("Product Names:");
        Iterator<String> iterator = productSet.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        System.out.println("\nFirst Product: " + productSet.first());
        System.out.println("Last Product: " + productSet.last());

        System.out.println("\nSize of TreeSet: " + productSet.size());

        productSet.remove("Tablet");


        System.out.println("\nSize of TreeSet after removal: " + productSet.size());
    }
}
