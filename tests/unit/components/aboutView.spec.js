import { shallowMount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('Componente AboutView.vue', () => {
   test('Validación de match con el snapshot', () =>{
    // Selección del sujeto de prueba
     const wrapper = shallowMount(AboutView)
     // Aserción 
     expect(wrapper.html()).toMatchSnapshot()
   })
})