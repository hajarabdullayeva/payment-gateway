import { axiosInstancePayment } from '../axiosInstance/index'

export const baseManager = {
  getAll: async (url) => {
    let responseData = []
    await axiosInstancePayment
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          responseData = res.data
        } else {
          throw new Error('Error Has Occurred while getting...')
        }
      })
      .catch((err) => {
        throw err
      })

    return responseData
  },
  add: async (url, payload) => {
    let response = null
    await axiosInstancePayment
      .post(url, payload)
      .then((res) => {
        if (res.status === 201) {
          response = res.data
        } else {
          throw new Error('Error Has Occurred while posting...')
        }
      })
      .catch((err) => {
        throw err
      })
    return response
  },
  delete: async (url, id) => {
    let response = null
    await axiosInstancePayment
      .delete(`${url}/${id}`)
      .then((res) => {
        if (res.status === 200) {
          response = res.data
        } else {
          throw new Error(
            'Error Has Occurred because of Hajar while deleting...',
          )
        }
      })
      .catch((error) => {
        throw error
      })

    return response
  },
  update: async (url, product) => {
    let response = null
    await axiosInstancePayment
      .put(`${url}/${product.id}`, product)
      .then((res) => {
        if (res.status === 200) {
          response = res.data
        } else {
          throw new Error(
            'Error Has Occurred Hajar xarab eledi while deleting...',
          )
        }
      })
      .catch((error) => {
        throw error
      })
    return response
  },
}
