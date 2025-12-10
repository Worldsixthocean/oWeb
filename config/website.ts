import { StaticImageData } from "next/image";

// website images - legalExpression
import legal_1 from '../public/images/website/legalExpression/1.png'
import legal_2 from '../public/images/website/legalExpression/2.png'

import legal_screenshot_2023_11_23_150517 from '../public/images/website/legalExpression/Screenshot 2023-11-23 150517.png'
import legal_screenshot_2023_11_23_150743 from '../public/images/website/legalExpression/Screenshot 2023-11-23 150743.png'

import legal_screenshot_2023_11_23_150416 from '../public/images/website/legalExpression/Screenshot 2023-11-23 150416.png'

import legal_screenshot_2023_11_23_150606 from '../public/images/website/legalExpression/Screenshot 2023-11-23 150606.png'

import legal_banner_final from '../public/images/website/legalExpression/legal expression banner final.png'

// website images - syTheatre
import sy_2025_12_10_043715 from '../public/images/website/syTheatre/Screenshot 2025-12-10 043715.png'
import sy_2025_12_10_043750 from '../public/images/website/syTheatre/Screenshot 2025-12-10 043750.png'
import sy_2025_12_10_043809 from '../public/images/website/syTheatre/Screenshot 2025-12-10 043809.png'

export interface websiteDataItem {
  stripline:string
  websiteName:string
  list: {
    image:StaticImageData[]
    desp:string
  }[]
  links?:{
    name:string
    url:string
  }[]
}

export const websiteHeader = {
  title:"Web Projects",
  desp:"劇團宣傳劇團宣傳劇團宣傳"
}

export const websiteData : websiteDataItem[] = [
  {
    stripline: "法律表達工作坊網站",
    websiteName: "Legal Expression Workshop Website",
    list: [
      {
      image: [
        legal_1,
        legal_2,
        legal_screenshot_2023_11_23_150517,
        legal_screenshot_2023_11_23_150743
      ],
      desp: "為法律表達工作坊設計與開發的官方網站，展示其活動資訊與資源。",
      },

      {
      image: [
        legal_screenshot_2023_11_23_150416
      ],
      desp: "網站首頁截圖，展示工作坊的核心理念與最新消息。",
      },

      {
      image: [
        legal_screenshot_2023_11_23_150606
      ],
      desp: "活動頁面截圖，提供詳細的活動資訊與報名方式。",
      },

      {
      image: [
        legal_banner_final
      ],
      desp: "法律表達工作坊宣傳橫幅，用於推廣活動與工作坊資訊。",
      }
    ],
    links: [
      {
        name:"figma",
        url:""
      }
    ]
  },
  {
    stripline: "SY劇團宣傳網站",
    websiteName: "SY Theatre Promotion Website",
    list: [
      {
      image: [
        sy_2025_12_10_043715,
        sy_2025_12_10_043750,
        sy_2025_12_10_043809
      ],
      desp: "為SY劇團設計與開發的宣傳網站，展示其劇目與活動資訊。",
      }
    ],
    links: [
      {
        name:"figma",
        url:""
      },
      {
        name:"website",
        url:"https://39f4721a.sy-web.pages.dev/"
      }
    ],
  }
]
