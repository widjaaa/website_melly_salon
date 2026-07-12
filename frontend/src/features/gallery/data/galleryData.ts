export type GalleryCategory = 'All' | 'Makeup' | 'Hair' | 'Wedding' | 'Facial';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  { id: '1', title: 'Elegant Bridal Look', category: 'Wedding', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800' },
  { id: '2', title: 'Signature Balayage', category: 'Hair', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'Evening Glam', category: 'Makeup', image: 'https://images.unsplash.com/photo-1512496015851-a1cbffb67cb1?auto=format&fit=crop&q=80&w=800' },
  { id: '4', title: 'Rejuvenating Glow', category: 'Facial', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800' },
  { id: '5', title: 'Classic Updo', category: 'Hair', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800' },
  { id: '6', title: 'Flawless Base', category: 'Makeup', image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800' },
  { id: '7', title: 'Wedding Party Styling', category: 'Wedding', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
  { id: '8', title: 'Deep Cleansing Spa', category: 'Facial', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800' },
];
