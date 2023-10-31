package seventhProgram;

import java.util.Scanner;

public class ArrayStatistics {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = new int[10];
        System.out.println("Enter 10 numbers:");

        for (int i = 0; i < 10; i++) {
            numbers[i] = scanner.nextInt();
        }

        int sum = 0;
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;
        int smallest = Integer.MAX_VALUE;

        for (int number : numbers) {
            sum += number;

            if (number > largest) {
                secondLargest = largest;
                largest = number;
            } else if (number > secondLargest && number != largest) {
                secondLargest = number;
            }

            if (number < smallest) {
                smallest = number;
            }
        }

        double average = (double) sum / 10;

        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);
        System.out.println("Largest: " + largest);
        System.out.println("Second Largest: " + (secondLargest == Integer.MIN_VALUE ? "N/A" : secondLargest));
        System.out.println("Smallest: " + smallest);
    }
}
