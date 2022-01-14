import path from 'path';
import hello from './test'

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
hello();