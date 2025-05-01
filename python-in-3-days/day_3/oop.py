

# Example of Object-Oriented Programming (OOP) in Python

# Define a class
class Animal:
    def __init__(self, name, species):
        """
        Initializes a new instance of the class.

        Args:
            name (str): The name of the instance.
            species (str): The species of the instance.
        """
        self.name = name  # Instance variable
        self.species = species  # Instance variable

    def speak(self):
        return f"{self.name} makes a sound."

# Inheritance: Dog inherits from Animal
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Dog")  # Call the parent class constructor
        self.breed = breed  # Additional attribute for Dog

    def speak(self):
        return f"{self.name} barks."

# Inheritance: Cat inherits from Animal
class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name, "Cat")  # Call the parent class constructor
        self.color = color  # Additional attribute for Cat

    def speak(self):
        return f"{self.name} meows."

# Polymorphism: Using the same method name for different behaviors
def animal_speak(animal):
    print(animal.speak())

# Create instances
dog = Dog("Buddy", "Golden Retriever")
cat = Cat("Whiskers", "Black")

# Demonstrate OOP concepts
print(f"{dog.name} is a {dog.species} of breed {dog.breed}.")
print(f"{cat.name} is a {cat.species} with {cat.color} fur.")

# Call methods
animal_speak(dog)  # Buddy barks.
animal_speak(cat)  # Whiskers meows.
