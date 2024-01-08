import java.util.scanner;

public class Calculator {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter 1st number: ");
        scanner num1 = scanner.nextDouble();

        System.out.println("Enter 2nd number: ");
        scanner num2 = scanner.nextDouble();

        // perform the calculation
        double sum = num1 + num2;
        double subtraction = num1 - num2;
        double multiplication = num1 * num2;
        double division = num1 / num2;


        System.out.println("Sum", sum);
        System.out.println("subtraction", subtraction);
        System.out.println("multiplication", multiplication);
        System.out.println("division", division);

        scanner.close()
    }
}