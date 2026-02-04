import productsRaw from "./mock-data/products.json";
import categories from "./mock-data/categories.json";
import orders from "./mock-data/orders.json";
import { ProductType } from "@repo/types";

const products = productsRaw as unknown as ProductType[];

export async function getProducts(params?: {
  category?: string;
  sort?: string;
  search?: string;
  limit?: number;
}) {
  await new Promise((resolve) => setTimeout(resolve, 100));
  let filteredProducts = [...products];

  if (params?.category && params.category !== "all") {
    filteredProducts = filteredProducts.filter(
      (p) => p.categorySlug === params.category,
    );
  }

  if (params?.search) {
    const s = params.search.toLowerCase();
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(s),
    );
  }

  switch (params?.sort) {
    case "asc":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "desc":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    default:
      filteredProducts.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
  }

  return params?.limit
    ? filteredProducts.slice(0, params.limit)
    : filteredProducts;
}

export async function getProduct(id: string | number) {
  const productId = typeof id === "string" ? parseInt(id) : id;
  return products.find((p) => p.id === productId) || null;
}

export async function getCategories() {
  return categories;
}
