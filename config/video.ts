import { StaticImageData } from "next/image";

interface videoDataProps {
        title?: string,
        subtitle?: string,
        description?: string,
        url: string
}


export const videoHeader = {
  title:"Video",
  desp:"video"
}

export const videoData : videoDataProps[] = [
    {
    title: '舞台設計及技術工作坊宣傳片 -- 丁美森先生',
    subtitle: "promotion video",
    description: `在這段影片中，丁美森先生將與大家分享各式工具的使用知識，並示範這些技巧如何應用在日常生活中，讓我們更靈活地處理各種修理與創作情境。
丁美森先生擁有多年舞台表演與製作經驗，曾任職於 明日劇團 及 中英劇團 的全職舞台工作者，對舞台設計與技術實務有深厚的理解。
`,
    url:"https://youtu.be/ApuvTtlByDo"
  },
  {
    title: '《幻塔》Trailer',
    subtitle: "theatre show trailer",
    description: `人類對巔峰的渴望使人不惜犯險登上高處。
    當慾望與真我出現矛盾,你會如何選擇?`,
    url:"https://www.youtube.com/watch?v=oenSSmHDXp4"
  },
  {
    title: '【奇怪符號】花碼猜猜猜！這些奇怪符號是什麼意思？',
    subtitle: "interview vlog",
    description: "",
    url:"https://www.youtube.com/watch?v=UaKkqlV-SjQ"
  },
  {
    title: '烤綿花糖最新食法！咁仲算唔算BBQ？？？',
    subtitle: "BBQ vlog",
    description: `餅乾夾住綿花糖，擺上燒烤網上燒！\
    結果竟然是這樣究極罪惡美味甜品？`,
    url:"https://www.youtube.com/watch?v=0ahSrM_f9z0&t=126s"
  },
  {
    title: 'Among us 分身術】報復性投票 點解會有兩個Ocean?',
    subtitle: "Among Us Gaming Video",
    description: `上次係Imposter，代唔代表今次會係呢？有冇人天生就係有Imposter 命？\
    擁有神奇魔法複製自己，自己嘅生死卻與人相連！`,
    url:"https://www.youtube.com/watch?v=1tju_fqkg38"
  },
  {
    title: '點解打 c egg 打到變弱智!?!?!?!?',
    subtitle: "mincraft gaming video",
    description: `出盡奇招幫忙停止打c egg\
      閉氣 講爛gag... 笑死都唔work\
      都係有得佢慢慢自己消失算 xdd`,
    url:"https://www.youtube.com/watch?v=99SCL5UfEPY"

  },
]
