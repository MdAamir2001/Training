[10:49] Santhosh Venkatachalam

import java.util.*;

import java.util.ArrayList;

 

class student {

	private ArrayList <String> names = new ArrayList<String>();

	public void setNames()

	{

		names.add("Sandy");

		names.add("Arun");

		names.add("Aamir");

		names.add("kk");

		

	}

	public void searchName(String name)

	{

		if(names.contains(name))

		{

			System.out.println(name +" is in the list");

			

		}

		else

		{

			System.out.println(name+ "is not in the list");

		}

	}

	public void searchName(int index)

	{

		if(index <names.size())

		{

			System.out.println("The result index is " +index + ":" +names.get(index));

		}

		else

		{

			System.out.println("Invalid search..");

		}

	}

	public void printNames()

	{

		Iterator<String> iterator = names.iterator();

		while(iterator.hasNext())

		{

			System.out.println(iterator.next());

		}

	}

	public void removeName(String stuName)

	{

		if(names.contains(stuName))

		{

			names.remove(stuName);

			System.out.println(stuName+ " has been removed");

		}

		else

		{

			System.out.println(stuName+ "is not in the list");

		}

	}

		

	}

			

	

	public static void main(String[] args) {

		student s = new student();

		s.setNames();

		s.searchName("Sandy");

		s.searchName(3);

		s.printNames();

		s.removeName("kishore");

		

		

		

 

	}

 

}

 