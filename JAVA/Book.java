public class Book {
    private int bookNo;
    private String title;
    private String author;
    private float price;

    public Book(int bookNo, String title, String author, float price) {
        this.bookNo = bookNo;
        this.title = title;
        this.author = author;
        this.price = price;
    }

    public int getBookNo() {
        return bookNo;
    }

    public void setBookNo(int bookNo) {
        this.bookNo = bookNo;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
}
public class Main {
    public static void main(String[] args) {
        Book book1 = new Book(1, "The Catcher in the Rye", "J.D. Salinger", 10.99f);

        // Accessing and printing book information
        System.out.println("Book No: " + book1.getBookNo());
        System.out.println("Title: " + book1.getTitle());
        System.out.println("Author: " + book1.getAuthor());
        System.out.println("Price: $" + book1.getPrice());

        // Updating the price
        book1.setPrice(12.99f);
        System.out.println("Updated Price: $" + book1.getPrice());
    }
}



