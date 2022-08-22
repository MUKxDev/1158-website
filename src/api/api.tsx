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
// export async function getAsambaEditor(): Promise<IAsambaEditor | null> {
//   return await axios
//     .get<IAsambaEditor[] | null>(`${apiBase}/${asambaEditor}`)
//     .then((res) => {
//       let result: IAsambaEditor[] | null = res.data;
//       return result && result[0];
//     })
//     .catch((err) => {
//       console.log("Error getting asambaEditor", err);
//       return null;
//     });
// }

// export async function getGalleryImages(
//   asambaEditor: IAsambaEditor
// ): Promise<IAsambaImage[]> {
//   let listOfAsambaImages: IAsambaImage[] = [];

//   for await (const imageRef of asambaEditor._links["acf:attachment"]) {
//     let asambaImage: IAsambaImage | null = await axios
//       .get<IAsambaImage | null>(`${imageRef.href}`)
//       .then((res) => {
//         let result: IAsambaImage | null = res.data;
//         return result;
//       })
//       .catch((err) => {
//         console.log("Error getting asambaImage", err);
//         return null;
//       });

//     if (asambaImage != null) {
//       listOfAsambaImages.push(asambaImage);
//     }
//   }

//   return listOfAsambaImages;
// }
