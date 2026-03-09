#include <iostream>

int main()
{
 volatile unsigned long i=0;
  for (i=0; i < 1000000000; i++);
  std::cout << i << std::endl;
}

