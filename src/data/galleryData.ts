export interface GalleryItem {
  id: string | number;
  title: string;
  image: string;
}

// 1. Automatically generate 1 through 70 numbered images
const numberedImages: GalleryItem[] = Array.from({ length: 85 }, (_, index) => {
  const imageNum = index + 1;
  return {
    id: imageNum,
    title: `North NJ Project #${imageNum}`,
    image: `/images/gallery/${imageNum}.jpg`,
  };
});

// 2. Add your custom-named images here
const customImages: GalleryItem[] = [
  {
    id: "custom-1",
    title: "Heavy Hydro-Jetting Setup in Newark",
    image: "/images/gallery/services1.jpeg",
  },
  {
    id: "custom-2",
    title: "Main Line Camera Diagnostics",
    image: "/images/gallery/services2-1.jpeg",
  },
  // Add as many custom named images as you need here...
];

// Combine both lists together
export const allGalleryProjects: GalleryItem[] = [
  ...numberedImages,
  ...customImages,
];