export interface IToughtProps {
  id?: string,
  content: string,
  model: 'modelo1' | 'modelo2' | 'modelo3',
  author: string,
  favourite: boolean
}


export interface IPaginatedToughts {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: IToughtProps[];
}