import axios from 'axios'

const cmsApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_API_HOST,
})

export default cmsApi