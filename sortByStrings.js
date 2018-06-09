function sortByStrings(s, t) {
  let hashTable = {}
  let sorted = []
  for (let i = 0; i < s.length; i++) {
    hashTable[s[i]] ? hashTable[s[i]]++ : (hashTable[s[i]] = 1)
  }
  for (let j = 0; j < t.length; j++) {
    let found = hashTable[t[j]] ? hashTable[t[j]] : false
    while (found) {
      sorted.push(t[j])
      found--
    }
  }
  return sorted.join('')
}
