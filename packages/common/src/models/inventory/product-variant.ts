import { Model } from '../model';

export interface ProductVariant extends Model {
  sku: string;
  /**
   * The purchase price of the product variant.
   */
  price: number;
  /**
   * Price for illustrative purposes, usually shown crossed out
   */
  comparisonPrice?: number;
  /**
   * Unit price of the product, used to determinate what the profit margin is
   */
  costPerUnit: number;
  weight?: number;
  stock: number;
  enabled: boolean;
}
