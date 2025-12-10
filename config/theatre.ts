import { StaticImageData } from "next/image";
import { galleryCardProps } from "@/components/gallery-card";

import leaflet9_1 from '../public/images/theatre/9thleaflet/1.png'
import leaflet9_2 from '../public/images/theatre/9thleaflet/2.png'
import dsm1 from '../public/images/theatre/DSM/1.png'
import dsm2 from '../public/images/theatre/DSM/2.png'
import dsm3 from '../public/images/theatre/DSM/3.png'
import dsm4 from '../public/images/theatre/DSM/4.png'
import dsm5 from '../public/images/theatre/DSM/5.png'
import dsm6 from '../public/images/theatre/DSM/6.png'
import sound1 from '../public/images/theatre/Sound/1.png'
import sound2 from '../public/images/theatre/Sound/2.png'
import sound3 from '../public/images/theatre/Sound/3.png'
import lights1 from '../public/images/theatre/燈/1.png'
import lights2 from '../public/images/theatre/燈/2.png'
import lights3 from '../public/images/theatre/燈/3.png'
import lights4 from '../public/images/theatre/燈/4.png'
import tools1 from '../public/images/theatre/舞台工具知多少/1.png'
import tools2 from '../public/images/theatre/舞台工具知多少/2.png'
import tools3 from '../public/images/theatre/舞台工具知多少/3.png'
import tools4 from '../public/images/theatre/舞台工具知多少/4.png'
import tools5 from '../public/images/theatre/舞台工具知多少/5.png'
import mgmt1 from '../public/images/theatre/舞台管理的專業精神/1.png'
import mgmt2 from '../public/images/theatre/舞台管理的專業精神/2.png'
import mgmt3 from '../public/images/theatre/舞台管理的專業精神/3.png'
import mgmt4 from '../public/images/theatre/舞台管理的專業精神/4.png'
import why1 from '../public/images/theatre/舞台製作淨係跟show唔夠咩？ 點解仲要學？/1.png'
import why2 from '../public/images/theatre/舞台製作淨係跟show唔夠咩？ 點解仲要學？/2.png'
import why3 from '../public/images/theatre/舞台製作淨係跟show唔夠咩？ 點解仲要學？/3.png'
import why4 from '../public/images/theatre/舞台製作淨係跟show唔夠咩？ 點解仲要學？/4.png'
import why5 from '../public/images/theatre/舞台製作淨係跟show唔夠咩？ 點解仲要學？/5.png'
import butoh from '../public/images/theatre/舞踏.png'

export const theatreHeader = {
  title:"劇團宣傳",
  desp:"劇團宣傳劇團宣傳劇團宣傳"
}

export const theatreData : galleryCardProps[] = [
  {
    image:[leaflet9_1,leaflet9_2],
    name:"9thleaflet",
    stripline: "第九期宣傳單",
    desp: "劇團第九期演出的手冊與宣傳單，設計與劇照集。",
  },
  {
    image:[dsm1,dsm2,dsm3,dsm4,dsm5,dsm6],
    name:"DSM",
    link:"https://www.instagram.com/p/DGDP-HhywLf/?img_index=1",
    stripline: "舞台管理特輯",
    desp: "介紹舞台管理(DSM)的角色、流程與實務經驗分享。",
  },
  {
    image:[sound1,sound2,sound3],
    name:"Sound",
    stripline: "聲音設計與工程",
    desp: "聲學設計與音響工程，包含混音、擴聲與設備擺放心得。",
  },
  {
    image:[lights1,lights2,lights3,lights4],
    name:"燈",
    stripline: "舞台燈光藝術",
    desp: "舞台燈光設計與控制，探討光影在舞台敘事中的應用。",
  },
  {
    image:[tools1,tools2,tools3,tools4,tools5],
    name:"舞台工具知多少",
    stripline: "器材與道具介紹",
    desp: "介紹常用舞台工具與道具的功能與安全使用方式。",
  },
  {
    image:[mgmt1,mgmt2,mgmt3,mgmt4],
    name:"舞台管理的專業精神",
    stripline: "專業管理與協調",
    desp: "分享舞台管理者在排練與演出中的組織、溝通與危機處理。",
  },
  {
    image:[why1,why2,why3,why4,why5],
    name:"舞台製作淨係跟show唔夠咩？ 點解仲要學？",
    stripline: "舞台製作的學習價值",
    desp: "討論為何學習舞台製作不僅是表演，還涉及技術、協作與職涯發展。",
  }
  ,
  {
    image:[butoh],
    name: "舞踏",
    stripline: "舞踏攝影",
    desp: "捕捉身體與空間互動的舞蹈影像作品。",
  }
]
