import { shallowMount } from '@vue/test-utils';
import ImagePlaceholder from '@/ImagePlaceholder.vue';

describe('ImagePlaceholder.vue', () => {
    it('renders the correct url for New York images', () => {
        const wrapper = shallowMount(ImagePlaceholder, {
            propsData: { width: 500, height: 200, category: 'newyork' }
        })
        expect(wrapper.findAll('img').at(0).attributes().src)
            .toEqual('https://loremflickr.com/500/200/newyork')
    })

    it('renders the correct url for random images if category is not specified', () => {
        const wrapper = shallowMount(ImagePlaceholder, {
            propsData: {width: 500, height: 200}
        })
        expect(wrapper.findAll('img').at(0).attributes().src)
            .toEqual('https://loremflickr.com/500/200/random')
    })

    it('renders a square image if height is not specified', () => {
        const wrapper = shallowMount(ImagePlaceholder, {
            propsData: { width: 500, category: 'brazil' }
        })
        expect(wrapper.findAll('img').at(0).attributes().src)
        .toEqual('https://loremflickr.com/500/500/brazil')
    })

    it('renders a random square image if height and category are not specified', () => {
        const wrapper = shallowMount(ImagePlaceholder, {
            propsData: { width: 500 }
        })
        expect(wrapper.findAll('img').at(0).attributes().src)
        .toEqual('https://loremflickr.com/500/500/random')
    })
})