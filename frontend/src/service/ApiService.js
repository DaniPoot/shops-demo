export default class ApiService {
  constructor ({
    path,
    axios
  }) {
    this.path = path
    this.axios = axios
  }

  getAll () {
    return this.axios.get(this.path)
  }

  getById (id) {
    return this.axios.get(`${this.path}/${id}`)
  }

  create (shop) {
    return this.axios.post(`${this.path}/create`, shop)
  }

  update ({ id, shop }) {
    return this.axios.put(`${this.path}/${id}`, JSON.stringify(shop))
  }

  delete (id) {
    return this.axios.delete(`${this.path}/${id}`, {})
  }
}
