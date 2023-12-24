import { Model } from './model';

enum AssetType {
  IMAGE
}

export interface Asset extends Model {
  name: string;
  source: string;
  type: AssetType;
  enabled: boolean;
}
