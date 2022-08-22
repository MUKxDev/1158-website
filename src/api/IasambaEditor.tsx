// To parse this data:
//
//   import { Convert, AsambaEditor } from "./file";
//
//   const asambaEditor = Convert.toAsambaEditor(json);

export interface IAsambaEditor {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: GUID;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  content: Content;
  featured_media: number;
  template: string;
  acf: Acf;
  _links: Links;
}

export interface Links {
  self: About[];
  collection: About[];
  about: About[];
  "acf:attachment": AcfAttachment[];
  "wp:attachment": About[];
  curies: Cury[];
}

export interface About {
  href: string;
}

export interface AcfAttachment {
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

export interface Acf {
  gallery: number[];
  "": string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface GUID {
  rendered: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toAsambaEditor(json: string): IAsambaEditor {
    return JSON.parse(json);
  }

  public static asambaEditorToJson(value: IAsambaEditor): string {
    return JSON.stringify(value);
  }
}
