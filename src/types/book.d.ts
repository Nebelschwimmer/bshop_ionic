declare global {
	interface IBookForm {
		id: number | null;
		title: string;
		releaseYear: number;
		summary: string;
		price: number;
		cover?: string;
		authorId: number;
	}
	interface IBookListItem {
		id: number;
		title: string;
		releaseYear: number;
		price: number;
		cover?: string;
		authorName: string;
	}
	interface IBookDetail {
		id: number;
		title: string;
		releaseYear: number;
		price: number;
		authorName: string;
		cover?: string;
	}
}
export {};
