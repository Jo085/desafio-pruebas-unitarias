import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('Componente HomeView.vue', () => {
   test('Validación de match con el snapshot', () =>{
    // Selección del sujeto de prueba
     const wrapper = mount(HomeView)
     // Aserción 
     expect(wrapper.html()).toMatchSnapshot()
   })
})