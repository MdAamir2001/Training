import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Menu[] menus = {
                new Menu("Stamppot boerenkool", 564.65, 45, 20.5, 0.5),
                new Menu("Metworst", 345, 12, 10.99, 0),
                new Menu("Hutspot", 560.4, 65, 30.9, 1),
                new Menu("Biefstuk", 780, 46, 50.34, 2),
                new Menu("Kibbeling", 450.4, 23, 20.78, 1)
        };

        for (Menu menu : menus) {
            menu.printMenuDetails();
        }

        System.out.println("\nDishes with cooking time less than 30 minutes:");
        for (Menu menu : menus) {
            if (menu.getCookingTime() < 30) {
                System.out.println(menu.getName() + " cooks in " + menu.getCookingTime() + " minutes");
            }
        }

        double totalPrice = 0;
        for (Menu menu : menus) {
            totalPrice += menu.getPrice();
        }

        System.out.println("\nThe total price is: " + totalPrice);

        if (totalPrice > 65) {
            double discountedPrice = totalPrice * 0.9;
            System.out.println("The discounted price is: " + discountedPrice);
        }
    }
}
