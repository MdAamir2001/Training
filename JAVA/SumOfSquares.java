

 

public class MatrixAddition {
    public static void main(String[] args) {
       

 

        int[][] matrix1 = {{7,8},{6,7}};
        int[][] matrix2 = {{1,2},{3,4}};
        int[][] resultMatrix = new int[2][2];

 

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
               
            }
        }

 

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
            }
        }

 

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                resultMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
            }
        }

 
        System.out.println("Resultant matrix after addition:");
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.print(resultMatrix[i][j] + " ");
            }
            System.out.println();
        }

 

      

    }
}




