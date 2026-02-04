import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Пропускаємо внутрішні файли Next.js та статичні файли (images, favicon тощо)
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Завжди запускаємо для API роутів
    "/(api|trpc)(.*)",
  ],
};
