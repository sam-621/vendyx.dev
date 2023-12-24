import { Model } from './model';

export interface Collection extends Model {
  name: string;
  slug: string;
  description?: string;
  enabled: boolean;
}
