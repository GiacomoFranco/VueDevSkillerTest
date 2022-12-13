import { shallowMount, mount } from '@vue/test-utils'
import NoteForm from '@/components/NoteForm.vue'
const notes = require('../../data/notes.json')


describe('NoteForm Component', () => {
    let wrapper, note;

    beforeEach(() => {
        note = notes[1]
        wrapper = mount(NoteForm, {
            propsData: {
                note
            }
        });
    });


    it('should display title and note form input fields after note is selected', () => {
        note = notes[1]
        expect(wrapper.findAll('input').at(0).element.value).toEqual(note.title)
        expect(wrapper.findAll('textarea').at(0).element.value).toEqual(note.text)
    })

    it('should call onChange with changed form values', () => {
        // given
        const onChange = jest.fn()
        const note = { title: '', text: '' }
        let wrapperComponent = mount(NoteForm, {
            propsData: {
                note
            },
            listeners: {
                change: onChange
            }
        });
        // when
        wrapperComponent.findAll('input').at(0).element.value = "urgent task"
        wrapperComponent.findAll('input').at(0).trigger('change', "urgent task")
        // then
        expect(onChange).toHaveBeenCalled()

        // when
        wrapperComponent.findAll('input').at(1).element.value = "need to do it very fast"
        wrapperComponent.findAll('input').at(0).trigger('change', "need to do it very fast")
        // then
        expect(onChange).toHaveBeenCalled()
    })

    it('should call onSubmit with changed note after the form is submitted', () => {
        // given
        const onSubmit = jest.fn()
        const note = { title: '', text: '' }
        let wrapperComponent = mount(NoteForm, {
            propsData: {
                note
            },
            listeners: {
                submit: onSubmit
            }
        });
        // when
        wrapperComponent.find("#noteForm").trigger('submit')


        // then
        expect(onSubmit).toHaveBeenCalled()
    })
})
