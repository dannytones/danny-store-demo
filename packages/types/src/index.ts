import z from "zod";

export type ProductType = {
  id: number | string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  categorySlug: string;
  sizes: string[];
  colors: string[];
  images: Record<string, string | undefined>;
  createdAt: string;
  updatedAt: string;
};

export type CategoryType = {
  id: number | string;
  name: string;
  slug: string;
};

export const sizes = [
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "xxl",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
] as const;
export const colors = [
  "blue",
  "green",
  "red",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
  "black",
  "white",
] as const;

export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  adress: z.string().min(1, "Address is required"), // зверни увагу на написання adress (як у твоєму коді)
  city: z.string().min(1, "City is required"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

// Якщо Zod схеми потрібні для форм, залиш їх нижче, замінивши Product на ProductType
