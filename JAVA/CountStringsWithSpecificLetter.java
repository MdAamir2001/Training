import java.util.Arrays;
import java.util.List;

public class CountStringsWithSpecificLetter {

    public static long countStringsWithLetter(List<String> strings, char letter) {
        return strings.stream()
                .filter(s -> s.toLowerCase().startsWith(String.valueOf(Character.toLowerCase(letter))))
                .count();
    }

    public static void main(String[] args) {
        List<String> stringList = Arrays.asList("Apple", "Banana", "Cherry", "apple", "banana", "Grape", "grape");

        char letterToCount = 'a'; 

        long count = countStringsWithLetter(stringList, letterToCount);

        System.out.println("Number of strings starting with '" + letterToCount + "': " + count);
    }
}
