import axios from "axios";

//Configuración básica (General o genérica)
const apiClient = axios.create(
    {
        baseURL: 'http://localhost:3200/v1',
        timeout: 2000
    }
)

//Ruta para registrar
export const registerRequest = async(user)=> {
    try{
        return await apiClient.post('/auth/register', user, {
            type: 'multipart/form-data'
        })
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const getBestSellingProducts = async ()=>{
    try {
        const response = await apiClient.get('/product/productosmasvendidos')
        return response.data.products
    } catch (error) {
        console.error('Error fetching best selling products', error)
        return[]
    }
}

/*export const loginRequest = async(user)=>{
    try{
        return await apiClient.post('/auth/login', user)
    }catch(err){
        return {
            error: true,
            err
        }
    }
}*/