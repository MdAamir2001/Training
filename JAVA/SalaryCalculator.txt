import java.util.Scanner;

public class SalaryCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter base salary: ");
        double baseSalary = scanner.nextDouble();

        double hra = 0;
        double da = 0;

        if (baseSalary >= 1 && baseSalary <= 4000) {
            hra = 0.10 * baseSalary;
            da = 0.50 * baseSalary;
        } else if (baseSalary > 4000 && baseSalary <= 8000) {
            hra = 0.20 * baseSalary;
            da = 0.60 * baseSalary;
        } else if (baseSalary > 8000 && baseSalary <= 12000) {
            hra = 0.25 * baseSalary;
            da = 0.70 * baseSalary;
        } else if (baseSalary > 12000) {
            hra = 0.30 * baseSalary;
            da = 0.80 * baseSalary;
        } else {
            System.out.println("Invalid input! Give proper salary as recieved");
            return;
        }

        double grossSalary = baseSalary + hra + da;
        System.out.println("Gross Salary: " + grossSalary);

        scanner.close();
    }
}


Accept a 4-digit number and reverse it. Also check if it is a palindrome or not. 



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


Remove duplicate elements in an 1D array of integers. 


import java.util.Arrays;
import java.util.Scanner;

public class MainArray {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();

        if (size <= 0) {
            System.out.println("Array size should be positive.");
            return;
        }

        int[] array = new int[size];

        System.out.println("Enter the elements of the array:");
        for (int i = 0; i < size; i++) {
            array[i] = input.nextInt();
        }

        int[] result = removeDuplicates(array);
        
        System.out.println("Array with duplicates removed: " + Arrays.toString(result));
    }

    public static int[] removeDuplicates(int[] array) {
        int[] result = new int[array.length];
        int index = 0;
        
        for (int i = 0; i < array.length; i++) {
            boolean isDuplicate = false;
            for (int j = 0; j < index; j++) {
                if (array[i] == result[j]) {
                    isDuplicate = true;
                    break;
                }
            }
            if (!isDuplicate) {
                result[index++] = array[i];
            }
        }

        return Arrays.copyOf(result, index);
    }
}
