import { Model } from './model';

export interface Market extends Model {
  name: string;
  default: boolean;
}
