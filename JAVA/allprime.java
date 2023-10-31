package fifthProgram;

import java.util.*;

public class allprime {

 

	public static void main(String[] args) {

		int n,count=0;

		System.out.println("enter number :");

		Scanner sc=new Scanner(System.in);

		n=sc.nextInt();

		for(int i=1;i<=n;i++)

		{

			for(int j=1;j<=n;j++)

			{

				if(i%j==0)

					count++;

			}

			if(count==2)

				System.out.println(i);

			count=0;

		

		}

	}

 

}

