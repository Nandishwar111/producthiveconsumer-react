import axios from 'axios';

const PRODUCTS_REST_API = "http://localhost:8088/producthive/api/products";

//service layer interacting with producthive REST API of springboot
// using axios http library
class ProductService{
    static getProducts() {
        return axios.get(PRODUCTS_REST_API);
    }

}

export default ProductService;