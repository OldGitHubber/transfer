# UK VAT Calculator

# Get user input
cost_input = input("Enter the cost (before VAT): £")

try:
    cost = float(cost_input)
    vat_rate = 0.20  # UK standard VAT rate

    vat_amount = cost * vat_rate
    total_cost = cost + vat_amount

    print(f"\nOriginal Cost: £{cost:.2f}")
    print(f"VAT (20%): £{vat_amount:.2f}")
    print(f"Total Cost (including VAT): £{total_cost:.2f}")

except ValueError:
  print("Please enter a valid number for the cost.")
