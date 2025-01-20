interface CalculatorType {
    add(value: number):CalculatorType;
    subtract(value: number):CalculatorType;
    multiply(value: number):CalculatorType;
    divide(value: number):CalculatorType;
    power(value: number):CalculatorType;
    getResult(): number;
}

class Calculator {

    private result: number
    
    constructor(value: number) {
        this.result = value;        
    }
    
    add(value: number): CalculatorType{
        this.result += value;
        return this;
    }
    
    subtract(value: number): CalculatorType{
        this.result -= value;
        return this;   
    }
      
    multiply(value: number): CalculatorType{
        this.result *= value;
        return this;   
    }
    
    divide(value: number): CalculatorType{

        if(value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        
        this.result /= value;
        return this;   
    }
    
    power(value: number): CalculatorType{
        this.result **= value;
        return this;   
    }
    
    getResult(): number {
        return this.result;
    }
}

// TESTING

console.log(new Calculator(10).add(5).subtract(7).getResult());
console.log(new Calculator(2).multiply(5).power(2).getResult());
console.log(new Calculator(20).divide(0).getResult());
