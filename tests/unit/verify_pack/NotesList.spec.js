import { shallowMount, mount } from '@vue/test-utils'
import NotesList from '@/components/NotesList.vue'
const notes = require('../../../data/notes.json')


describe('verify_pack.NotesList Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(NotesList, {
            propsData: {
                notes
            }
        });
    });

    it('should show list of notes', () => {
        expect(wrapper.findAll('.list-group-item').length).toEqual(notes.length)
    })

    it('should call onSelect function after note was clicked', () => {
        // given
        const onSelect = jest.fn()
        let wrapperComponent = mount(NotesList, {
            propsData: {
                notes
            },
            listeners: {
                select: onSelect
            }
        });
        // when
        wrapperComponent.findAll('.list-group-item').at(1).trigger('click')

        // then
        expect(onSelect).toHaveBeenCalledWith(notes[1])
    })

    it('should add `active` class to a note after it was selected', () => {
        // given
        const selected = notes[1]
        let wrapperComponent = mount(NotesList, {
            propsData: {
                notes,
                selected
            }
        });
        // then
        wrapperComponent.findAll('.list-group-item').at(1).trigger('click')
        expect(wrapperComponent.findAll('.active').length).toEqual(1)
    })
})
