import api from "./api";

export  interface IProducts {
    id: number,
    name: string,
    category: string,
    price: number,
    img: string
}

export async function getProducts(): Promise<IProducts[]> {
    const {data}  = await api.get<IProducts[]>(`/products`);

    return data;
}