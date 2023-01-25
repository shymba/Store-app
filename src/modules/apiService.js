export default class ApiService {

    async getAllProducts() {
        const urlBase = 'https://fakestoreapi.com/products';
        const response_products = await fetch(urlBase).then((res) => (res.json()));
        return response_products
    }

    async getSelectedCategory(category) {
        const urlBase = `https://fakestoreapi.com/products/category/${category}`;
        const response_category = await fetch(urlBase).then((res) => (res.json()));
        return response_category
    }
}