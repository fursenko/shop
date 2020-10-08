import { Category } from './category.enum';

export class ProductModel {
    name: string;
    price: string;

    public get isAvailable(): boolean {
        return this.price !== '0.0.';
    }
}
