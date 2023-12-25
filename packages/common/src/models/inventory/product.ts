import { z } from 'zod';
import { ID, Model } from '../model';
import { MakeAny } from '../../utils';

export interface Product extends Model {
  name: string;
  slug: string;
  description?: string;
  enabled: boolean;
}
