// To parse this data:
//
//   import { Convert, IAssamba } from "./file";
//
//   const iAssamba = Convert.toIAssamba(json);

export interface IAssamba {
  acf?: Acf;
}

export interface Acf {
  gallery?: string[];
  hero_video?: string;
  discover_video?: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toIAssamba(json: string): IAssamba {
    return JSON.parse(json);
  }

  public static iAssambaToJson(value: IAssamba): string {
    return JSON.stringify(value);
  }
}
