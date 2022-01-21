const path = require('path')
const fs = require('fs')
const fileSave = require('file-save')

console.log('\x1B[36m%s\x1B[0m', 'start...')

if (!process.argv[2]) {
    console.log('\x1B[31m%s\x1B[0m', 'please enter challenge number')
    process.exit(1)
}
const num = process.argv[2]

const targetFolderPath = path.resolve(__dirname, '../../type-challenges/questions')
const dir = fs.readdirSync(targetFolderPath)
const targetFolderName = dir.find(file => {
    return file.split("-")[0] === num
})
if (!targetFolderName) {
    console.log('\x1B[36m%s\x1B[0m', 'not find file with challenge number')
    process.exit(1)
}
const targetFilePath = path.join(targetFolderPath, targetFolderName)
console.log('\x1B[36m%s\x1B[0m', 'find targetFile in type-challenges folder')

const files = ['README.zh-CN.md', 'template.ts', 'test-cases.ts']

fs.mkdirSync(path.join(__dirname, `../questions/${targetFolderName}`), { recursive: true })

files.forEach(file => {
    fs.mk
    fileSave(path.join(__dirname, `../questions/${targetFolderName}/${file}`))
        .write(fs.readFileSync(`${targetFilePath}/${file}`))
        .end('\n')
})
console.log('\x1B[36m%s\x1B[0m', 'successfully build new')
