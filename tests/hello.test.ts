import hello from '../src/hello';
import helloWorld from '~/utils/helloWorld';

test('hello', () => {
  expect(hello()).toBe('test');
})