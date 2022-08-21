import axios from "axios";
import { IAssamba } from "./IAssamba";

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

export async function getAssamba(type: string): Promise<IAssamba | null> {
  return await axios
    .get<IAssamba[] | null>(`${apiBase}/${type}`)
    .then((res) => {
      let result: IAssamba[] | null = res.data;
      return result && result[0];
    })
    .catch((err) => {
      console.log("Error getting assamba", err);
      return null;
    });
}
// export async function getAssambaEditor(): Promise<IAssambaEditor | null> {
//   return await axios
//     .get<IAssambaEditor[] | null>(`${apiBase}/${asambaEditor}`)
//     .then((res) => {
//       let result: IAssambaEditor[] | null = res.data;
//       return result && result[0];
//     })
//     .catch((err) => {
//       console.log("Error getting assambaEditor", err);
//       return null;
//     });
// }

// export async function getGalleryImages(
//   assambaEditor: IAssambaEditor
// ): Promise<IAssambaImage[]> {
//   let listOfAssambaImages: IAssambaImage[] = [];

//   for await (const imageRef of assambaEditor._links["acf:attachment"]) {
//     let assambaImage: IAssambaImage | null = await axios
//       .get<IAssambaImage | null>(`${imageRef.href}`)
//       .then((res) => {
//         let result: IAssambaImage | null = res.data;
//         return result;
//       })
//       .catch((err) => {
//         console.log("Error getting assambaImage", err);
//         return null;
//       });

//     if (assambaImage != null) {
//       listOfAssambaImages.push(assambaImage);
//     }
//   }

//   return listOfAssambaImages;
// }
