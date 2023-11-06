export interface Asset {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  source: string;
  type: AssetType;
}

export enum AssetType {
  IMAGE = 'IMAGE',
  FILE = 'FILE'
}
