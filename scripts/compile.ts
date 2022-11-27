import { resolve } from 'path'

console.log( 'Resolve ./:', resolve('./') )
console.log( 'CWD:', process.cwd() )
console.log( 'dirname:', __dirname )

