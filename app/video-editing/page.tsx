import ReactPlayer from 'react-player'
import { title } from "@/components/primitives";
import {Card, CardBody, CardFooter} from "@heroui/card";
import { sourceHanSans } from '../fonts/sourceHanSans';
import { videoData, videoHeader } from '@/config/video';

// interface videoPageProps {
//     videos:{
//         title?: string,
//         subtitle?: string,
//         description?: string,
//         url: string
//     }[]
// }

export default function videoPage() {
  const videos = videoData;
  return (
    <section className="flex flex-col items-start gap-6 py-8 md:py-10">
        <p className="text-small">video</p>
        <h1 className={title()}>{videoHeader.title}</h1>
        <p className="text-default-500 text-left pt-1">{videoHeader.desp}</p>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10'>
              {videos.map((video, index) => (
                  <Card key={index} shadow="sm">
                      <CardBody className="overflow-visible p-0">
                          <ReactPlayer width="100%" height="auto" src={video.url} style={{aspectRatio:"16/9"}} ></ReactPlayer>
                      </CardBody>
                      <CardFooter className="flex-col text-sm items-start h-full p-5 text-left">
                          <h5 className={"text-white text-base font-medium pb-1 "}>{video.title}</h5>
                          <h6 className="text-default-400  pb-4">{video.subtitle}</h6>
                          <p className="text-default-500 whitespace-pre-line">{video.description}</p>
                      </CardFooter>
                  </Card>
              ))}
          </div>
    </section>
  );
}
