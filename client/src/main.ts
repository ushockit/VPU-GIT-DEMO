import {AxiosResponse} from 'axios';

const axios = require('axios');
import { environment } from '../environment/environment';



(function() {
    axios.post(environment.API_URL, {
        query: `
                  query GetAllProducts {
                      getAllProducts {
                        id
                        name
                        price
                        description
                      }
                    }
            `
    }).then((result: AxiosResponse) => {
        console.log(result.data.data.getAllProducts);
    });

    // axios({
    //     url: environment.API_URL,
    //     method: 'post',
    //     data: {
    //         query: `
    //               query GetAllProductByPrice{
    //                   getProductsByPrice(body:{min: 100, max: 200}){
    //                     id
    //                     name
    //                   }
    //                 }
    //         `
    //     }
    // }).then((result: AxiosResponse) => {
    //     console.log(result.data.data.getProductsByPrice);
    // });

    // axios.post(environment.API_URL, {
    //     query: `mutation($name: String!, $price: Float!, $description: String!) {
    //               createNewProduct(body:{
    //                 name: $name,
    //                 price: $price,
    //                 description: $description
    //               }) {
    //                 id
    //                 name
    //                 price
    //                 description
    //               }
    //             }
    //         `,
    //     variables: {
    //         name: 'asdasd',
    //         price: 500,
    //         description: 'asdasd'
    //     }
    // }).then((result: AxiosResponse) => {
    //     //console.log(result.data.data.getAllProducts);
    // });
}());
