import axios from "axios"

 export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '74abf431792240e79cd93a126e2cb7a6'
    }
  })


