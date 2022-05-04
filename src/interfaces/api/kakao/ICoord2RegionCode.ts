export interface IRegionCodeDocument {
  region_type: string;
  address_name: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  region_4depth_name: string;
  code: string;
  x: number;
  y: number;
}

export interface ICoord2RegionCode {
  meta: {
    total_count: number;
  };
  documents: IRegionCodeDocument[];
}
