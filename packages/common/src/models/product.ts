import { Model } from './model';

export interface Product extends Model {
  name: string;
  slug: string;
  description: string;
  enabled: boolean;
}
