import { shallowMount, mount } from '@vue/test-utils'
import App from '@/App.vue'
import { createMockService } from '../utils';


describe('App Component', () => {

    const notes = [{
        id: '4567', title: 'take the exam', text: 'take devskiller assessment'
    }]

    let wrapper;

    beforeEach(() => {
        wrapper = mount(App, {
            data() {
                return {
                    notes
                }
            }
        });
    });

    it('should call notesService.getNotes() when rendered', async () => {
        // given
        const mockService = createMockService(notes)
        wrapper = await mount(App, {
            data() {
                return {
                    notes
                }
            }
        });
        // then
        expect(mockService.getNotes).toHaveBeenCalled()

    })

    it('should call notesService.saveNote() method after the form is submitted', async () => {
        // given
        const mockService = createMockService(notes)
        const selectedNote = mockService.notes[0]

        // when
        await wrapper.find('.list-group-item').trigger('click')
        await wrapper.find("#noteForm").trigger('submit')
        // then
        expect(mockService.saveNote).toHaveBeenCalledWith(selectedNote);
    })

    it('should fetch notes from notesService and update notes list after the form is submitted', async () => {
        // given
        const mockService = createMockService(notes)
        const originalLength = mockService.notes.length

        // then
        expect(wrapper.findAll('.list-group-item').length).toEqual(originalLength)

        // when selecting an existing note, submitting the form
        await wrapper.find('.list-group-item').trigger('click');
        wrapper.findAll('input').at(0).element.value = "urgent task"
        wrapper.findAll('textarea').at(0).element.value = "need to do it very fast"
        await wrapper.find("#noteForm").trigger('submit')
        // then
        expect(wrapper.findAll('.list-group-item').length).toEqual(originalLength)        
    })

    it('should add a new note to the list after the note is saved', async () => {
        // given
        const mockService = createMockService(notes)

        wrapper = mount(App, {
            data() {
                return {
                    notes
                }
            }
        });

        // then
        expect(mockService.getNotes).toHaveBeenCalled();

        // when
        await wrapper.find('#new-note').trigger('click')
        wrapper.findAll('input').at(0).element.value = "buy milk"
        wrapper.findAll('textarea').at(0).element.value = "need some fresh milk"
        await wrapper.find("#noteForm").trigger('submit')


        // then
        expect(mockService.saveNote).toHaveBeenCalled();
        expect(wrapper.findAll('input').at(0).element.value).toEqual("buy milk")
        expect(wrapper.findAll('textarea').at(0).element.value).toEqual("need some fresh milk")

        // when
        await wrapper.find('#cancel').trigger('click')
        expect(wrapper.findAll('.list-group-item').length).toEqual(mockService.notes.length)
        
    })

})
