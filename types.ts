
export interface PlotListing {
  id: number;
  code: string;
  title: string;
  size: string;
  type: string;
  propertyClass: string;
  location: string;
  price: string;
  image: string;
}

export type Page = 'Home' | 'HotPlots' | 'Contact';
