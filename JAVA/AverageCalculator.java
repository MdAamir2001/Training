import java.util.Arrays;
import java.util.List;

public class AverageCalculator {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(2, 4, 6, 8, 35);

        double average = numbers.stream()
                .mapToInt(Integer::intValue)
                .average().getAsDouble();
                

        System.out.println("Average: " + average);
    }
}

