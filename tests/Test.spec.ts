// import { mount } from '@vue/test-utils'
// import Test from '../src/views/Test.vue'

// test('Test.vue', async () => {
//   const wrapper = mount(Test)
//   expect(wrapper.html()).toContain('Unit Test Page')
//   expect(wrapper.html()).toContain('count is: 0')
//   await wrapper.find('button').trigger('click')
//   expect(wrapper.html()).toContain('count is: 1')
// })
function sum(a: number, b: number) {
  return a + b
}
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
