import java.util.Scanner;

class Menu {
    private String name;
    private double calories;
    private int cookingTime;
    private double price;
    private double wineBottles;

    public Menu(String name, double calories, int cookingTime, double price, double wineBottles) {
        this.name = name;
        this.calories = calories;
        this.cookingTime = cookingTime;
        this.price = price;
        this.wineBottles = wineBottles;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getCalories() {
        return calories;
    }

    public void setCalories(double calories) {
        this.calories = calories;
    }

    public int getCookingTime() {
        return cookingTime;
    }

    public void setCookingTime(int cookingTime) {
        this.cookingTime = cookingTime;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getWineBottles() {
        return wineBottles;
    }

    public void setWineBottles(double wineBottles) {
        this.wineBottles = wineBottles;
    }

    public void printMenuDetails() {
        System.out.println("Menu " + name + " contains " + calories + " calories, comes with " + wineBottles + " bottles and costs " + price);
    }
}

