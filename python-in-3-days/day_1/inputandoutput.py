name = input("Enter your name: ")
print("Hello, " + name + "!")
# This code takes user input and prints a greeting message.

s = "Nischal"
print(s)

s = "Bhusal"
age = 100
city = "Dang"
print(s, age, city)
# This code defines a string variable and prints it. Then, it reassigns the string variable and prints it again along with an integer and another string variable.
#mutiple inputs
a, b, c = input("Enter three numbers: ").split()
print(a, b, c)
# This code takes multiple inputs from the user and splits them into separate variables.

age_me = input("Enter your age: ")
age_1 = int(age_me)
if age_1 >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")
# This code takes user input for age, converts it to an integer, and checks if the user is an adult or a minor.

