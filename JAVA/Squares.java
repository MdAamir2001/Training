package firstProgram;

import java.io.*;
import java.util.*;
import java.util.Scanner.*;
public class Squares{
   public static int sum_of_squares(int val){
      return (val *(val + 1) / 2) * (2 * val + 1) / 3;
   }
   public static void main(String[] args){
       Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a value: ");
        int val = scanner.nextInt();
       System.out.println("The sum of squares of first " + val + " natural numbers is ");
        System.out.println(sum_of_squares(val));

        scanner.close();
   }
}