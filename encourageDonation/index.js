const sampleInput = {
  max: 20,
  cookies: [
    { name: 'oreo', price: 5, donation: 2 },
    { name: 'reese', price: 3, donation: 1 },
    { name: 'pepero', price: 7, donation: 4 },
    { name: 'brown', price: 9, donation: 3 },
    { name: 'blue', price: 1, donation: 0 }
  ]
}

function donation(max, cookies) {
  const sorted = cookies.sort(function (a, b) {
    if (a.donation > b.donation) {
      return -1
    } else if (a.donation < b.donation) {
      return 1
    } else {
      return 0
    }
  })

  function compute(arr, ctr = 0, total = 0, donate = 0) {
    if (ctr > arr.length - 1) {
      return donate
    } else {
      total = total + arr[ctr].price
      if ((max - total) > 0) {
        donate = donate + arr[ctr].donation
        return compute(arr, ctr, total, donate)
      } else {
        const prevPrice = arr[ctr].price
        ctr = ctr + 1
        total = total - prevPrice
        return compute(arr, ctr, total, donate)
      }
    }
  }

  return compute(sorted)
}

const { max, cookies } = sampleInput
const result = donation(max, cookies)

console.log(result)
