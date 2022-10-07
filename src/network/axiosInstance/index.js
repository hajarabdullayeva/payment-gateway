import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 3000,
})

export const axiosInstancePayment = axios.create({
    baseURL: 'http://localhost:8070/',
    timeout: 3000,
  })