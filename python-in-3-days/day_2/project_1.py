num_1 = float(input("Enter first number: "))
num_2 = float(input("Enter second number: "))
operation = input("Enter operation (+, -, *, /): ")
if operation == "+":
    result = num_1 + num_2
elif operation == "-":
    result = num_1 - num_2
elif operation == "*":
    result = num_1 * num_2
elif operation == "/":
    if num_2 != 0:
        result = num_1 / num_2
    else:
        result = "Error: Division by zero is not allowed." 
else:
    result = "Error: Invalid operation."
print("Result:", result)