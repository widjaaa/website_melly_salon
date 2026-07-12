export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  service: string;
  review: string;
  avatar?: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Wijaya",
    role: "Bride",
    rating: 5,
    service: "Bridal Makeup",
    review: "The makeup was beautiful and lasted all day. I received so many compliments on my wedding day, thanks to the amazing team at Melly Beauty Salon!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Amanda Putri",
    role: "Customer",
    rating: 5,
    service: "Hair Styling",
    review: "Professional service and very friendly staff. They completely transformed my hair and gave me exactly the style I was looking for. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 3,
    name: "Jessica Tan",
    role: "Customer",
    rating: 5,
    service: "Facial Treatment",
    review: "The salon atmosphere was comfortable and relaxing. My skin feels so rejuvenated and glowing after the deep cleansing facial.",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg"
  },
  {
    id: 4,
    name: "Diana Lestari",
    role: "Customer",
    rating: 5,
    service: "Hair Coloring",
    review: "They perfectly achieved the balayage color I wanted without damaging my hair. The premium products they use really make a difference.",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    id: 5,
    name: "Michelle Pang",
    role: "Bridesmaid",
    rating: 4,
    service: "Wedding Package",
    review: "Booked them for my best friend's wedding. The whole bridal party looked stunning. Very efficient and professional.",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg"
  },
  {
    id: 6,
    name: "Nadia Safitri",
    role: "Customer",
    rating: 5,
    service: "Spa Manicure",
    review: "Best pampering session I've had in months. The attention to detail and luxury environment is unmatched.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  }
];
