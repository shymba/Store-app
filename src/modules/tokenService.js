export default class TokenService {

    tokenDecode(token) {
        const dataToken = token.token
        const [, payload] = dataToken.split('.')
        return JSON.parse(atob(payload))
    }
}