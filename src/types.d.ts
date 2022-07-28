interface IProduct {
	id: number;
	name: string;
	category: string;
	image: string;
	price: number;
	rating: number;
	favorite?: boolean;
	sale?: boolean
}
interface ICart {
	id: number,
	name: string,
	qty: number,
	price: number,
}


