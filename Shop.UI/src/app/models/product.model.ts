import { Category } from './category.enum';

export class ProductModel {
    name: string;
    price: number;
    description: string;
    isAvailable: boolean;
    category: Category;
}
