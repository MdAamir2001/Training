import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class SortUsingStreams {

    public static List<String> sortAscending(List<String> strings) {
        return strings.stream()
                .sorted(Comparator.naturalOrder())
                .collect(Collectors.toList());
    }

    public static List<String> sortDescending(List<String> strings) {
        return strings.stream()
                .sorted(Comparator.reverseOrder())
                .collect(Collectors.toList());
    }

    public static void main(String[] args) {
        List<String> stringList = Arrays.asList("Banana", "Cherry", "Apple", "Grape");

        List<String> ascendingSorted = sortAscending(stringList);
        List<String> descendingSorted = sortDescending(stringList);

        System.out.println("Ascending Sorted List: " + ascendingSorted);
        System.out.println("Descending Sorted List: " + descendingSorted);
    }
}
