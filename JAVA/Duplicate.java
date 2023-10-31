package Java;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Duplicate {
    public static void main(String[] args) {

        // Create a new ArrayList of Strings
        List<String> strings = new ArrayList<String>();

        // Add some strings to the list
        strings.add("Pavan");
        strings.add("Angam");
        strings.add("kumar");
        strings.add("Pavan");
        strings.add("Reddy");
        strings.add("Pavan");
        strings.add("Shree");
        strings.add("KK");
        strings.add("KK");
        strings.add("Badava");

        // Use the Stream API to remove duplicates
        List<String> distinctList = strings.stream().distinct().collect(Collectors.toList());

        // Print the original list
        System.out.println("List: " + strings);

        // Print the list after removing duplicates
        System.out.println("After Duplication Removed: " + distinctList);

    }
}
