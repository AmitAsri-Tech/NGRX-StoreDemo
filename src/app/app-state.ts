import { Product } from './product';

export interface AppState {
    id: number;
    name: Array<any>;
    products: Array<Product>;
}