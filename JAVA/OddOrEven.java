import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class OddOrEven {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6,7,8,9,10);
	
	int Sum1=numbers.stream().filter(e->e%2==0).mapToInt(Integer::intValue).sum();
	int Sum2=numbers.stream().filter(e->e%2!=0).mapToInt(Integer::intValue).sum();

	System.out.println(Sum1);
	
	System.out.println(Sum2);
}
}