/**
 There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

 Example:
 n = 7
 ar = [1, 2, 1, 2, 1, 3, 2]
 There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

 Function Description

 Complete the sockMerchant function in the editor below.

 sockMerchant has the following parameter(s):

 int n: the number of socks in the pile
 int ar[n]: the colors of each sock
 Returns

 int: the number of pairs
 Input Format

 The first line contains an integer , the number of socks represented in .
 The second line contains  space-separated integers, , the colors of the socks in the pile.

 Constraints
 1<= n <= 100
 1 <= ar[i] <= 100 where 0 <= i < n
 where
 Sample Input

 STDIN                       Function
 -----                       --------
 9                           n = 9
 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
 Sample Output

 3
 */


function totalPairs(num, socks) {
  const pairs = {};
  socks.forEach((sock, i) => {
    let hasIndex = null, count = 0;
    do {
      const indexFound = socks.indexOf(sock);
      hasIndex = indexFound >= 0 ;
      if(hasIndex) {
        socks.splice(indexFound, 1);
        count++;
      }

      if (count === 2) {
        pairs[sock] = pairs[sock] ? pairs[sock] + 1 : 1;
        count = 0
      }
    } while(hasIndex);
  });
  // Calculate total pairs;
  const totalNumOfPairs = Object.keys(pairs).reduce((acc, key) => pairs[key] + acc, 0);
  return totalNumOfPairs;
}

// totalPairs(7, [1,2,1,2,1,3,2]);
totalPairs(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
