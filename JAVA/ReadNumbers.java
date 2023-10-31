import java.util.Scanner;

public class ReadNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int number;
        int sum = 0;

        while (true) {
            System.out.print("Enter a number (or -999 to exit): ");
            number = scanner.nextInt();

            if (number == -999) {
                break; 
            }

            sum += number;
        }

        System.out.println("The sum of the entered numbers is: " + sum);
    }
}
