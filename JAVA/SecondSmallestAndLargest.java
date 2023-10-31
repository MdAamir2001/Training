import java.util.Arrays;
import java.util.List;

public class SecondSmallestAndLargest {
    public static void main(String[] args) {

        List<Integer> numbers = Arrays.asList(3, 9, 1, 7, 2, 8, 4, 5, 6);

        int secondSmallest = numbers.stream()
                .distinct()
                .sorted()
                .skip(1)
                .findFirst();
              

        int secondLargest = numbers.stream()
                .distinct()
                .sorted((a, b) -> Integer.compare(b, a))
                .skip(1)
                .findFirst();
             

        System.out.println("Second Smallest value: " + secondSmallest);
        System.out.println("Second Largest value: " + secondLargest);
    }
}
