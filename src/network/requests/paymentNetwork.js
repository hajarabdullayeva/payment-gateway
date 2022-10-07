import {
    baseManager
} from '../base/baseManager'

export const paymentNetwork = {
    getAllPayment: () => {
        return baseManager.getAll('card')
    },
    getPaymentById: (id) => {
        return baseManager.getAll(`card/${id}`)
    },
    addPayment: (payload) => {
        return baseManager.add('card', payload)
    },
    deletePayment: (id) => {
        return baseManager.delete('card', id)
    },
    updatePayment: (payload) => {
        return baseManager.update(`card`, payload)
    }
}