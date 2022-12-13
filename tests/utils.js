import _flushPromises from 'flush-promises'

import { notesService } from '../services/notes.service'

export const flushPromises = async () => {
  await (async () => {
    await _flushPromises()
  })()
}

export function createMockService(notesData) {
    notesService.setData(notesData)
    jest.spyOn(notesService, 'getNotes')
    jest.spyOn(notesService, 'saveNote')
    return notesService
}
