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

    loginUser(name, pass) {
        const response = fetch('https://fake-store-gten.onrender.com/auth/login', {
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
        const response = await fetch(`https://fakestoreapi.com/users/${id}`).then(res => res.json());
        return response
    }
}