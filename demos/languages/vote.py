age = int(input("Enter your age: "))

if age < 18:
  print(f"You are too young to vote. Come back in {18-age} years.")
else:
  print("You are eligible to vote.")

