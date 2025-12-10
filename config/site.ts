export type SiteConfig = typeof siteConfig;
import { StaticImageData } from "next/image";

import leaflet1 from '../public/images/theatre/9thleaflet/1.png'
import draw1 from '../public/images/doujin/drawing/Illustration24.png'
import web from '../public/images/website/syTheatre/Screenshot 2025-12-10 at 06-24-41 Siu Yin Theatre.png'
import souven from "../public/images/t-shirt and others/ocamp soven/Black.png"
import video from "../public/images/video/_sy89149_54723465824_o(1).jpg"

export const siteConfig = {
  name: "Worldsixthocean",
  description: "My creation",
  navItems: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "同人創作",
      link: "/doujin",
      children:[
        {
          title:"Doujin",
          link:"",
          description:"doujin"
        },
        {
          title:"Promote",
          link:"/promote",
          description:"promote"
        },
        {
          title:"Drawing",
          link:"/drawing",
          description:"drawing"
        }]
    },
    {
      title: "Web Projects",
      link: "/website",
    },
    {
      title: "劇團宣傳",
      link: "/theatre",
    },
    {
      title: "T恤 / 紀念品",
      link: "/merchandise",
    },
    {
      title: "影片剪輯",
      link:"/video-editing"
    }
  ],
  links: {
    github: "https://github.com/",
    twitter: "https://twitter.com/",
  },
};


export interface homeDataItem {
  image: StaticImageData,
  name: string,
  title:string,
  link:string
  desp?:string
}

export const homeData : homeDataItem[] = [
  {
    image: leaflet1,
    name: "劇團宣傳",
    title: `more >`,
    link:"/theatre"
  },
  {
    image: draw1,
    name: "同人創作",
    title: "more >",
    link:"/doujin"
  },
  {
    image: web,
    name: "Web Projects",
    title: "more >",
    link:"/website"
  },
  {
    image: souven,
    name: "紀念品",
    title: "more >",
    link:"/merchandise"
  },
  {
    image: video,
    name: "影片剪輯",
    title: "more >",
    link:"/video-editing"
  },
]
