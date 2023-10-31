class Customer {
    private int custNo;
    private String custName;
    private String custAddr;

    // Setter for custNo
    public void setCustNo(int custNo) {
        this.custNo = custNo;
    }

    // Getter for custNo
    public int getCustNo() {
        return custNo;
    }

    // Setter for custName
    public void setCustName(String custName) {
        this.custName = custName;
    }

    // Getter for custName
    public String getCustName() {
        return custName;
    }

    // Setter for custAddr
    public void setCustAddr(String custAddr) {
        this.custAddr = custAddr;
    }

    // Getter for custAddr
    public String getCustAddr() {
        return custAddr;
    }

    // Method to display all variables
    public void display() {
        System.out.println("Customer Number: " + custNo);
        System.out.println("Customer Name: " + custName);
        System.out.println("Customer Address: " + custAddr);
    }
}

public class PizzaHut {
    public static void main(String[] args) {
        Customer customer1 = new Customer();

        // Using setters to initialize individual variables
        customer1.setCustNo(1);
        customer1.setCustName("John Doe");
        customer1.setCustAddr("123 Main St");

        // Using getters to retrieve individual variables
        int custNo = customer1.getCustNo();
        String custName = customer1.getCustName();
        String custAddr = customer1.getCustAddr();

        System.out.println("Customer Number: " + custNo);
        System.out.println("Customer Name: " + custName);
        System.out.println("Customer Address: " + custAddr);
    }
}
