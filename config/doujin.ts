import { StaticImageData } from "next/image";
import { galleryCardProps } from "@/components/gallery-card";

// drawing folder
import drawing_Illustration23 from '../public/images/doujin/drawing/Illustration23.png'
import drawing_Illustration24 from '../public/images/doujin/drawing/Illustration24.png'
import drawing_Illustration33 from '../public/images/doujin/drawing/Illustration33.png'
import drawing_MaouChanFinal from '../public/images/doujin/drawing/MaouChanFinal.png'

// promote folder
import promote_cat1 from '../public/images/doujin/promote/cat1.png'
import promote_CP25Shi from '../public/images/doujin/promote/CP25Shi.png'
import promote_LM1shi from '../public/images/doujin/promote/LM1shi.png'
import promote_New_Project_1 from '../public/images/doujin/promote/New Project(1).png'
import promote_New_Project from '../public/images/doujin/promote/New Project.png'
import promote_pr9 from '../public/images/doujin/promote/pr9.png'
import promote_shinagaki from '../public/images/doujin/promote/shinagaki.png'

// promote/rdg32
import rdg32_RG32_Shi_IG_P2 from '../public/images/doujin/promote/rdg32/RG32 Shi IG P2.png'
import rdg32_RG32_Shi_IG from '../public/images/doujin/promote/rdg32/RG32 Shi IG.png'

// promote/seia-after
import seia_after_seia_after from '../public/images/doujin/promote/seia-after/seia-after.png'
import seia_after_seia1 from '../public/images/doujin/promote/seia-after/seia1.png'
import seia_after_Seia2 from '../public/images/doujin/promote/seia-after/Seia2.png'

// promote/seia-before
import seia_before_Illustration52 from '../public/images/doujin/promote/seia-before/Illustration52.png'
import seia_before_mini_seia_B from '../public/images/doujin/promote/seia-before/mini_seia_B.png'

export const doujinHeader = {
  title:"同人創作",
  desp:"同人創作同人創作同人創作"
  
}
export const doujinPromoteData : galleryCardProps[] = [
  {
    image: [promote_cat1],
    name: "Promote - cat1",
    stripline: "cat1",
    desp: "單張宣傳圖：cat1",
  },
  {
    image: [promote_CP25Shi],
    name: "Promote - CP25Shi",
    stripline: "CP25Shi",
    desp: "活動宣傳圖：CP25Shi",
  },
  {
    image: [promote_LM1shi],
    name: "Promote - LM1shi",
    stripline: "LM1shi",
    desp: "宣傳圖：LM1shi",
  },
  {
    image: [promote_New_Project_1],
    name: "Promote - New Project (1)",
    stripline: "New Project (1)",
    desp: "宣傳稿：New Project (1)",
  },
  {
    image: [promote_New_Project],
    name: "Promote - New Project",
    stripline: "New Project",
    desp: "宣傳稿：New Project",
  },
  {
    image: [promote_pr9],
    name: "Promote - pr9",
    stripline: "pr9",
    desp: "宣傳圖：pr9",
  },
  {
    image: [promote_shinagaki],
    name: "Promote - shinagaki",
    stripline: "shinagaki",
    desp: "宣傳圖：shinagaki",
  },
  {
    image: [rdg32_RG32_Shi_IG, rdg32_RG32_Shi_IG_P2],
    name: "Promote - rdg32",
    stripline: "RDG32 系列",
    desp: "RDG32 的推廣圖。",
  },
  {
    image: [seia_after_seia_after, seia_after_seia1, seia_after_Seia2],
    name: "Promote - seia-after",
    stripline: "Seia (After)",
    desp: "Seia 後期素材。",
  },
  {
    image: [seia_before_Illustration52, seia_before_mini_seia_B],
    name: "Promote - seia-before",
    stripline: "Seia (Before)",
    desp: "Seia 前期素材。",
  },
]

export const doujinDrawData : galleryCardProps[] = [
  {
    image: [drawing_Illustration23],
    name: "Drawing - Illustration23",
    stripline: "Illustration23",
    desp: "插畫作品：Illustration23",
  },
  {
    image: [drawing_Illustration24],
    name: "Drawing - Illustration24",
    stripline: "Illustration24",
    desp: "插畫作品：Illustration24",
  },
  {
    image: [drawing_Illustration33],
    name: "Drawing - Illustration33",
    stripline: "Illustration33",
    desp: "插畫作品：Illustration33",
  },
  {
    image: [drawing_MaouChanFinal],
    name: "Drawing - MaouChanFinal",
    stripline: "MaouChanFinal",
    desp: "最終稿：MaouChanFinal",
  },
]
