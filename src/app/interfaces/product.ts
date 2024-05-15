export interface Product {
    id: string;
    handle: string;
    title: string;
    description: string;
    sku: string;
    grams: number;
    stock: number;
    price: number;
    compare_price: number;
    barcode: string;
}

export interface ProductResponse {
    response: Product[];
}