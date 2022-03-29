// import { mount } from '@vue/test-utils'
// // @ts-ignore
// import Header from '../src/components/Header.vue'

// describe('Header.vue', () => {
//   it('renders', () => {
//     const wrapper = mount(Header)
//     expect(wrapper.html()).toContain('Vite2.x + Vue3.x + TypeScript Starter')
//   })
// })
function add(a: number, b: number) {
  return a + b
}
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})
