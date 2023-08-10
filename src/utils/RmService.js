import { api } from './api'

export const RmService = {
  getRm: async page => {
    try {
      const response = await api.get(`/character/?page=${page}`)
      return response
    } catch (err) {
      throw err
    }
  }
}
