#include <iostream>

int count, maxCount = 12, table = 5;

int main() {
  for (count = 1; count <= maxCount; count++)
  {
    std::cout << count << " x " << table << " = " << count * table << std::endl;
  }
}
