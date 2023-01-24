export default class ApiService {

    async getAllProducts() {
        const urlBase = 'https://fakestoreapi.com/products';
        const response = await fetch(urlBase).then((res) => (res.json()));
        return response
    }
}