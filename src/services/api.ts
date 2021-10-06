import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3333'
})
export async function searchProducts(): Promise<Product[]> {

  const result = await api.get('products')
  return result.data;
}

export async function searchByOrder(by: string, asc: boolean): Promise<Product[]>{
  const result = await api.get(`/products?_sort=${by}&_order=${asc ? 'asc' : 'desc'}`)
  return result.data
}