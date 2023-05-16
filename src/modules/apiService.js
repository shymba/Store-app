export default class ApiService {

    _apiBase = `https://fakestoreapi.com`;

    async getAllProducts() {
        try {
            const response_products = await fetch(`${this._apiBase}/products`)
            if(!response_products.ok) {
                throw new Error(`Could not fetch ${this._apiBase}/products` +
                    `, received ${response_products.status}`)
            }
            return response_products.json()
        } catch (error) {
            console.log(error)
        }
    }

    async getSelectedCategory(category) {
        try {
            const response_category = await fetch(`${this._apiBase}/products/category/${category}`).then((res) => (res.json()));
            if(response_category.length < 1) {
                throw new Error('The List is empty, choose another category')
            }
            return response_category
        } catch (error) {
            console.log(error)
        }

    }

    async getAllSidebarCategory() {
        try{
            const response_allCategory = await fetch(`${this._apiBase}/products/categories`).then((res) => (res.json()));
            if(response_allCategory.length < 1) {
                throw new Error('The List is empty, some error in fetch')
            }
            return response_allCategory
        } catch (error) {
            console.log(error);
        }
    }

    loginUser(name, pass) {
        //_id === sub in response object
        const response = fetch(`${this._apiBase}/auth/login`, {

            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: name,
                password: pass
            }),
        }).then(res => res.json())
        return response
    }

    async getOneUser(id) {
        const response = await fetch(`${this._apiBase}/users/${id}`).then(res => res.json());
        return response
    }
}