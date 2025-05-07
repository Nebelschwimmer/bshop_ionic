import { defineStore } from "pinia";
import { typedFetch } from "./helper";

export const useBookStore = defineStore("book", () => {
	const apiURL = import.meta.env.VITE_API_URL;
	const book = ref<IBookDetail>();
	const bookList = ref<IBookListItem[]>([]);
	const bookForm = ref<IBookForm[]>();
	const loading = ref<boolean>(false);

	const fetchBookList = async (): Promise<void> => {
		try {
			loading.value = true;
			const data = await typedFetch<IBookListItem[]>(`${apiURL}/books`);
      bookList.value = data;
		} catch (err) {
			console.log(err);
		} finally {
			loading.value = false;
		}
	};

	return {
		book,
		bookList,
		bookForm,
		loading,
		fetchBookList,
	};
});
