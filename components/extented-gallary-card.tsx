"use client"
import * as React from "react";
import { useState } from "react";
import { Card, CardBody, CardFooter} from "@heroui/card";
import { Pagination } from "@heroui/pagination";
import { Button } from "@heroui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { websiteDataItem } from "@/config/website";

export interface ExtentedGallaryCardProps {
  group: websiteDataItem;
}


export const ExtentedGallaryCard: React.FC<ExtentedGallaryCardProps> = ({ group }) => {
  const [index, setIndex] = useState(0);

  const imagesInitValue : StaticImageData[] = [];
  const images = group.list.reduce((accumulator, currentValue)=>(accumulator.concat(currentValue.image)), imagesInitValue )
  
  const despsInitValue : string[] = []
  const desps = group.list.reduce((accumulator, currentValue)=>(
    accumulator.concat(Array(currentValue.image.length).fill(currentValue.desp))), despsInitValue )

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);
  return (
  <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="flex overflow-hidden py-4 px-4 col-span-6 md:col-span-7 max-h-[40vh]">
              {images.map((img, i) => (
                  <Image
                  key={i}
                  src={img}
                  alt={`image`}
                  className={"w-full transition-transform shrink-0 object-contain"}
                  style={{
                      translate: `${-100 * index}%`
                  }}
                  />
              ))}
          </div>

          <div className="flex flex-col col-span-6 md:col-span-5 justify-between h-full px-8 py-5">
              <div className="h-5"/>
              
              <div className="flex flex-col gap-0">
                <p className="text-tiny uppercase font-bold">{group.stripline || " "}</p>
                <h4 className="font-bold text-xl pt-0.5 text-left">{group.websiteName}</h4>
                <small className="text-default-500 text-left pt-1">{desps[index]}</small>
                <div className="flex gap-3">
                  {group.links && group.links.map((link, i)=>(
                    <Link key={i} href={link.url} className="pt-2">
                        <Button size="sm" className="w-auto h-auto px-0 py-1">
                        <p>{link.name}</p>
                        </Button>
                    </Link>
                  ))}
                </div>
              </div>


            <div className="mt-5 flex w-full ">
              <Pagination size="sm" isDisabled={images.length <= 1} isCompact showControls initialPage={1} total={images.length} 
              onChange={(a) => setIndex(a-1)}
              classNames={{
                  cursor:( images.length <= 1 ? "bg-grey-100" : "bg-[#3d87a6]")
              }}/>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>

  );
};

// camelCase export per request
export const extentedGallaryCard = ExtentedGallaryCard;

export default ExtentedGallaryCard;
