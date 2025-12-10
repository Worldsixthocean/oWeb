import { StaticImageData } from "next/image";
import { galleryCardProps } from "@/components/gallery-card";

// t-shirt and others images - class hoddie
import hoddie_D from '../public/images/t-shirt and others/class hoddie/D.png'
import hoddie_Db from '../public/images/t-shirt and others/class hoddie/Db.png'
import hoddie_hoo from '../public/images/t-shirt and others/class hoddie/hoo.png'

// t-shirt and others images - class t-shirt
import tshirt_finalize_design2 from '../public/images/t-shirt and others/class t-shirt/Finalize Design2.png'

// t-shirt and others images - graduration booklet
import booklet_2023_11_23_144834 from '../public/images/t-shirt and others/graduration booklet/Screenshot 2023-11-23 144834.png'
import booklet_2023_11_23_145033 from '../public/images/t-shirt and others/graduration booklet/Screenshot 2023-11-23 145033.png'
import booklet_2023_11_23_145120 from '../public/images/t-shirt and others/graduration booklet/Screenshot 2023-11-23 145120.png'
import booklet_2023_11_23_145312 from '../public/images/t-shirt and others/graduration booklet/Screenshot 2023-11-23 145312.png'
import booklet_2023_11_23_145416 from '../public/images/t-shirt and others/graduration booklet/Screenshot 2023-11-23 145416.png'
import booklet_2023_11_23_145504 from '../public/images/t-shirt and others/graduration booklet/Screenshot 2023-11-23 145504.png'

// t-shirt and others images - ocamp soven
import totebag_1 from '../public/images/t-shirt and others/ocamp soven/totebag.png'
import totebag_2 from '../public/images/t-shirt and others/ocamp soven/totebag2.png'
import souven from "../public/images/t-shirt and others/ocamp soven/Black.png"


// t-shirt and others images - theatre t-shirt
import theatre_tshirt_siuyin from '../public/images/t-shirt and others/theatre t-shirt/siuyin.png'

export const merchandiseHeader = {
  title:"紀念品",
  desp:"紀念品設計與製作"
}

export const merchandiseData : galleryCardProps[] = [
  {
    image:[hoddie_D, hoddie_Db, hoddie_hoo],
    name:"Class Hoddie",
    stripline: "班級連帽衛衣",
    desp: "班級特製連帽衛衣設計，展示班級特色與設計理念。",
  },
  {
    image:[tshirt_finalize_design2],
    name:"Class T-Shirt",
    stripline: "班級T恤",
    desp: "班級T恤最終設計稿，簡潔而富有班級特色。",
  },
  {
    image:[booklet_2023_11_23_144834, booklet_2023_11_23_145033, booklet_2023_11_23_145120, booklet_2023_11_23_145312, booklet_2023_11_23_145416, booklet_2023_11_23_145504],
    name:"Graduation Booklet",
    stripline: "畢業紀念冊",
    desp: "畢業紀念冊設計與內容頁面，記錄學年回憶與成長足跡。",
  },
  {
    image:[totebag_1, totebag_2,souven],
    name:"Ocamp Soven Totebag",
    stripline: "迎新營托特包",
    desp: "迎新營特製托特包設計，作為活動紀念品。",
  },
  {
    image:[theatre_tshirt_siuyin],
    name:"Theatre T-Shirt",
    stripline: "劇團T恤",
    desp: "劇團特製T恤設計，展示劇團風格與創意。",
  }
]
