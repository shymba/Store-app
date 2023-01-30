export default class ApiService {

    _apiBase = `https://fakestoreapi.com/products`;

    async getAllProducts() {
        const response_products = await fetch(this._apiBase).then((res) => (res.json()));
        return response_products
    }

    async getSelectedCategory(category) {
        const response_category = await fetch(`${this._apiBase}/category/${category}`).then((res) => (res.json()));
        return response_category
    }

    async getAllSidebarCategory() {
        const response_allCategory = await fetch(`${this._apiBase}/categories`).then((res) => (res.json()));
        return response_allCategory
    }
}