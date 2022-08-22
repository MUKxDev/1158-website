// To parse this data:
//
//   import { Convert, IAsamba } from "./file";
//
//   const iAsamba = Convert.toIAsamba(json);

export interface IAsamba {
  acf?: Acf;
}

export interface Acf {
  gallery?: string[];
  hero_video?: string;
  discover_video?: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toIAsamba(json: string): IAsamba {
    return JSON.parse(json);
  }

  public static iAsambaToJson(value: IAsamba): string {
    return JSON.stringify(value);
  }
}
