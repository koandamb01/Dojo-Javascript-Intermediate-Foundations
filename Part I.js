/*ooo        ooooo                oooooo   oooooo     oooo            .o8               oooo          
`88.       .888'                 `888.    `888.     .8'            "888               `888          
 888b     d'888   .ooooo.         `888.   .8888.   .8'    .ooooo.   888oooo.           888  .oooo.o 
 8 Y88. .P  888  d88' `88b         `888  .8'`888. .8'    d88' `88b  d88' `88b          888 d88(  "8 
 8  `888'   888  888   888          `888.8'  `888.8'     888ooo888  888   888          888 `"Y88b.  
 8    Y     888  888   888           `888'    `888'      888    .o  888   888          888 o.  )88b 
o8o        o888o `Y8bod8P'            `8'      `8'       `Y8bod8P'  `Y8bod8P'      .o. 88P 8""888P' 
                                                                                   `Y888P           
                                                                                                    
                                                                                                    */

// Sigma - Implement function sigma(num) that given a number, 
// returns the sum of all positive integers up to number (inclusive).  
// Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function sigma(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// Factorial - Write a function factorial(num) that, given a number, 
// returns the product (multiplication) of all positive integers from 1 up to number (inclusive).  
// For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial(num) {
    var product = 1;
    for (var i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
}

// Fibonacci - Create a function to generate Fibonacci numbers.  
// In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  
// Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 
// 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), 
// fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), 
// fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  
// If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
function fibonacci(index) {
    if (index == 0) return 0;
    if (index == 1) return 1;
    var f1 = 0;
    var f2 = 1;
    var swapper;
    for (var i = 2; i <= index; i++) {
        swapper = f2;
        f2 = f1 + f2;
        f1 = swapper;
    }
    console.log("fibonacci at 3 index is: ", f2);
}

// Array: Second-to-Last: Return the second-to-last element of an array. 
// Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function secondToLast(arr) {
    if (arr.length >= 2) {
        return arr[arr.length - 2];
    } else {
        return null;
    }
}

// Array: Nth-to-Last: Return the element that is N-from-array's-end.  
// Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function NthToLast(arr, n) {
    if (arr.length >= n) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (n == 1) {
                return arr[i];
            }
            n--;
        }
    } else {
        return null;
    }
}

// Array: Second-Largest: Return the second-largest element of an array. 
// Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function secondLastest(arr) {
    if (arr.length < 2) return null;
    var max = arr[0];
    var s = arr[1];
    if (s > max) {
        let temp = max;
        max = s;
        s = temp;
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            if (max > s) {
                s = max;
            }
            max = arr[i];
        } else if (arr[i] > s && arr[i] < max) {
            s = arr[i];
        }
    }
    console.log("second lasgest: ", s, "Max: ", max);
}

// Double Trouble: Create a function that changes a given array to list each existing element twice, 
// retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function doubleTouble(arr) {
    var originLen = arr.length;
    console.log("Old array: ", arr);
    arr.length *= 2;
    for (var i = originLen - 1; i >= 0; i--) {
        arr[i * 2 + 1] = arr[i];
        arr[i * 2] = arr[i];
    }
    console.log("New array: ", arr);
    return arr;
}

// Create a function Fib(n) where it returns the nth Fibonacci number.  Use recursion for this.
function fib(n) {
    if (n == 0 || n == 1) return n;
    return fib(n - 2) + fib(n - 1);
}