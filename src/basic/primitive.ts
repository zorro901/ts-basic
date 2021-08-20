export default function primitiveSample() {
  const name = 'トラハック'
  // name = 123
  console.log('primitive sample 1:', typeof name, name)

  const age = 33
  // age = "33"
  console.log('primitive sample 2:', typeof age, age)

  const isSingle = true
  // isSingle = "foo"
  console.log('primitive sample 3:', typeof isSingle, isSingle)

  const is0ver20: boolean = age >= 34
  console.log('primitive sample 4:', typeof is0ver20, is0ver20)
}
