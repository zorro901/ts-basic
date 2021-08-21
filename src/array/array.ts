export default function arraySample() {
  // シンプルな配列の型定義
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(123)
  console.log('Array array sample:1', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push("8")
  console.log('Array array sample:2', even)

  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF')
  ids.push(456)
  // ids.push(true)
  console.log('Array array sample:3', ids)

  const generateSomeArray = () => {
    const _someArray = []
    _someArray.push(123)
    _someArray.push('ABC')
    return _someArray
  }
  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true)
  console.log('Array array sample:4', someArray)

  // イミュータブルな配列
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  // commands.push("git fetch")
  // commands[2] = "git pull"
  console.log('Array array sample:5', commands)

  const number: ReadonlyArray<number> = [1, 2, 3]
  const names: Readonly<string[]> = ['taro', 'kazu']

  console.log('Array array sample:6', number)
  console.log('Array array sample:7', names)
}
