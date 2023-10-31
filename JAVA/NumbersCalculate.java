import java.util.Scanner;

public class NumbersCalculate {
    static final String[] units = {"Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"};
    static final String[] tens = {"", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
    static final String[] teens = {"Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a positive integer: ");
        int number = scanner.nextInt();

        if (number < 0) {
            System.out.println("Please enter a positive integer.");
            return;
        }

        String verbalRepresentation = convertToVerbal(number);
        System.out.println(verbalRepresentation);
    }

    static String convertToVerbal(int number) {
        if (number == 0) {
            return units[0];
        }

        String verbal = "";

        if (number >= 100) {
            verbal += units[number / 100] + " Hundred ";
            number %= 100;
        }

        if (number >= 10 && number <= 19) {
            verbal += teens[number - 10];
        } else {
            verbal += tens[number / 10];
            number %= 10;

            if (number > 0) {
                verbal += " " + units[number];
            }
        }

        return verbal;
    }
}
