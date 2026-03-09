#include <stdio.h>
const int MAX_COUNT=12, TABLE=5;
int main() {
 for (int count = 1; count <= MAX_COUNT; count++) {
   printf("%d x %d = %d\n",count, TABLE, count * TABLE);
 }
}


