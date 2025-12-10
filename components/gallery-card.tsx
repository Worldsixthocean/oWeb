'use client'
import * as React from "react";
import { useState } from "react";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import {Pagination} from "@heroui/pagination";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface galleryCardProps{
    image: StaticImageData[],
    name: string,
    desp?:string,
    stripline?:string,
    link?:string
}

export const GalleryCard = ({ group }: { group: galleryCardProps }) => {
  const [index, setIndex] = useState(0);
  const images = group.image || [];
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <Card radius="lg" className="relative overflow-hidden py-4 px-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{group.stripline || " "}</p>
            <h4 className="font-bold text-xl pt-0.5 text-left">{group.name}</h4>
            <small className="text-default-500 text-left pt-1">{group.desp || " "}</small>
            {group.link ? (
            <Link href={group.link} className="pt-2">
                <Button size="sm" className="w-auto h-auto px-0 py-1">
                <p>link</p>
                </Button>
            </Link>
            ) : null}
        </CardHeader>

        <div className="flex overflow-hidden py-4 px-4 grow">
            {group.image.map((img, i) => (
                <Image
                key={i}
                src={img}
                alt={`${group.name}-${i}`}
                className={"transition-transform w-full shrink-0 object-contain"}
                style={{
                    translate: `${-100 * index}%`
                }}
                />
            ))}
        </div>
        <CardFooter className="w-full flex justify-center">
            <Pagination isDisabled={images.length <= 1} isCompact showControls initialPage={1} total={images.length} 
            onChange={(a) => setIndex(a-1)}
            classNames={{
                cursor:( images.length <= 1 ? "bg-grey-100" : "bg-[#3d87a6]")
            }}/>
            
        </CardFooter>
    </Card>
  );
};
