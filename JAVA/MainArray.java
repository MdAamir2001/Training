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
