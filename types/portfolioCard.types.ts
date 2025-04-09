import { StaticImageData } from 'next/image';

export interface PortfolioCardProps {
  id: number;
  title: string;
  image: string | StaticImageData;
  link: string;
}
