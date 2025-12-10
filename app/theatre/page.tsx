import { title } from "@/components/primitives";
import { Card, CardHeader } from "@heroui/card";
import Image from "next/image";
import { theatreData, theatreHeader } from "@/config/theatre";
import Link from "next/link";
import { Button } from "@heroui/button";
import { GalleryCard } from "@/components/gallery-card";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";

export default function TheatrePage() {
  return (
    <section className="flex flex-col items-start gap-6 py-8 md:py-10">
      <p className="text-small">theatre</p>
      <h1 className={title()}>{theatreHeader.title}</h1>
      <p className="text-default-500 text-left pt-1">{theatreHeader.desp}</p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {theatreData.map((group, gi) => (
          <GalleryCard key={gi} group={group}/>
        ))}
      </div>
    </section>
  );
}
