// Components
import { VSystemBar } from '..'

// Utilities
import { createVuetify } from '@/framework'
import { mount } from '@vue/test-utils'

describe('VSystemBar', () => {
  const vuetify = createVuetify()

  function mountFunction (options = {}) {
    return mount(VSystemBar, {
      global: { plugins: [vuetify] },
      ...options,
    })
  }

  it('should match a snapshot', () => {
    const wrapper = mountFunction()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
