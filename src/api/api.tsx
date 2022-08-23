import axios from "axios";
import { IAsamba } from "./IAsamba";

/* -------------------------------------------------------------------------- */
/*                                    URLS                                    */
/* -------------------------------------------------------------------------- */

export const apiBase: string = "http://www.1158.fthm.me/wp-json/wp/v2";
export const asambaEditor: string = "editor?_fields=acf&acf_format=standard";
export const asambaGallery: string =
  "editor?_fields=acf.gallery&acf_format=standard";
export const asambaHeroVideo: string =
  "editor?_fields=acf.hero_video&acf_format=standard";
export const asambaDiscoverVideo: string =
  "editor?_fields=acf.discover_video&acf_format=standard";

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

/**
 * It returns a promise that resolves to an IAsamba object or null
 * @param {string} type - string - the type of asamba you want to get.
 * @returns An array of IAsamba objects
 */
export async function getAsamba(type: string): Promise<IAsamba | null> {
  return await axios
    .get<IAsamba[] | null>(`${apiBase}/${type}`)
    .then((res) => {
      let result: IAsamba[] | null = res.data;
      return result && result[0];
    })
    .catch((err) => {
      console.log("Error getting asamba", err);
      return null;
    });
}
