import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class MinMax {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = new ArrayList<>();

        System.out.println("Enter integers (type 'q' to quit):");
        while (scanner.hasNextInt()) {
            int num = scanner.nextInt();
            numbers.add(num);
        }

        // Find the maximum value
        int max = numbers.stream()
                .mapToInt(Integer::intValue)
                .max()
                .orElseThrow();

        // Find the minimum value
        int min = numbers.stream()
                .mapToInt(Integer::intValue)
                .min()
                .orElseThrow();

        System.out.println("Maximum value: " + max);
        System.out.println("Minimum value: " + min);

        scanner.close();
    }
}
