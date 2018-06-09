function changePossibilities(coins, sum) {
  let coinArr = new Array(sum + 1)
  coinArr.fill(0)
  coinArr[0] = 1
  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j < coinArr.length; j++) {
      if (coins[i] <= j) {
        coinArr[j] += coinArr[j - coins[i]]
      }
    }
  }
  return coinArr[sum]
}
