public class ListEvenNumbers {
    public static void main(String[] args) {

        int n = Integer.parseInt(args[0]);

        System.out.println("Even numbers less than or equal to " + n + ":");

        for (int i = 0; i <= n; i ++) {
            System.out.println(i);
        }
    }
}
