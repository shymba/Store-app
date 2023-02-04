export default class ApiService {

    _apiBase = `https://fakestoreapi.com`;

    async getAllProducts() {
        const response_products = await fetch(`${this._apiBase}/products`).then((res) => (res.json()));
        return response_products
    }

    async getSelectedCategory(category) {
        const response_category = await fetch(`${this._apiBase}/products/category/${category}`).then((res) => (res.json()));
        return response_category
    }

    async getAllSidebarCategory() {
        const response_allCategory = await fetch(`${this._apiBase}/products/categories`).then((res) => (res.json()));
        return response_allCategory
    }

    loginUser(name, pass) {
        //_id === sub in response object
        const response = fetch(`${this._apiBase}/auth/login`, {

            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                username: name,
                password: pass
            }),
        }).then(res => res.json()).then(obj => {
            return obj.token
        });
         return response
    }

    async getOneUser(id) {
        const response = await fetch(`${this._apiBase}/users/${id}`).then(res => res.json());
        return response
    }
}