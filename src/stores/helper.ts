export async function typedFetch<T>(
	url: string,
	options?: RequestInit,
): Promise<T> {
	const response = await fetch(url, options);
	if (!response.ok) {
		throw new Error(`HTTP Error: ${response.status}`);
	}
	return await response.json();
}
