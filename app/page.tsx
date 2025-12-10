
import { Card, CardFooter } from "@heroui/card";
import {Button, ButtonGroup} from "@heroui/button";
import Image from 'next/image'
import leaflet1 from '../public/images/1.png'
import Link from "next/link";
import { homeData } from "@/config/site";

export default function Home() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-12 py-8 md:py-10">
    {homeData.map((item,index) => (
     <Card isFooterBlurred className="border-none" radius="lg" key={index}>
        <Image
          alt=" "
          className="object-cover h-full w-full"
          height={300}
          src={item.image}
          width={300}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-small font-bold text-white/80">{item.name}</p>
          <Button
            className="text-tiny text-white bg-black/20"
            color="default"
            radius="lg"
            size="sm"
            variant="flat"
          >
            <Link href={item.link}> {item.title}</Link>
          </Button>
        </CardFooter>
      </Card>
    ))}
    </section>
  );
}
