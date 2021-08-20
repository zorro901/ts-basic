export default function notExistSample() {
  let name = null
  console.log('notExist sample 1:', typeof name, name)
  name = 'aaa'
  if (name) {
    console.log('notExist sample 3:', '猫' + name)
  } else {
    console.log('notExist sample 2:', '猫まだ' + name)
  }

  const age = undefined
  console.log('notExist sample 4:', typeof age, age)

  if (age) {
    console.log('notExist sample 5:', '年齢' + age)
  } else {
    console.log('notExist sample 5:', '年齢秘密')
  }
}
