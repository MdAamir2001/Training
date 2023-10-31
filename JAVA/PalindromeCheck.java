import java.util.Scanner;

public class PalindromeCheck {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a 4-digit number: ");
        int number = scanner.nextInt();

        if (number < 1000 || number > 9999) {
            System.out.println("Invalid input! Please enter a 4-digit number.");
            return;
        }

        int originalNumber = number;
        int reversedNumber = 0;

        while (number != 0) {
            int digit = number % 10;
            reversedNumber = reversedNumber * 10 + digit;
            number /= 10;
        }

        System.out.println("Reversed number is: " + reversedNumber);

        if (originalNumber == reversedNumber) {
            System.out.println("It is a palindrome.");
        } else {
            System.out.println("It is not a palindrome.");
        }

        scanner.close();
    }
}
