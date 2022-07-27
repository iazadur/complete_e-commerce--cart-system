import { products } from '../../../assets/data';

export const get_product = (id: number) => {
	return products.find(item => item.id === id)
};
