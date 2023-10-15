export interface CakeItem {
  id: string;
  type: string;
  price: number;
  image: string;
  description: {
    "Cake flavours": string;
    "Cake size": string;
    "Icing type": string;
    Colour: string;
    "Preparation and delivery": string;
  };
}

export interface CakeCategory {
  [key: string]: CakeItem;
}

export interface CakeProps {
  category: string;
  items: CakeCategory;
}

export interface DataProps {
    data: CakeProps[];
  id?: string
  selected?:{}
}
