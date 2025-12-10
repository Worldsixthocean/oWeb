import { title } from "@/components/primitives";
import { doujinPromoteData, doujinDrawData, doujinHeader } from "@/config/doujin";
import {Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";
import { GalleryCard } from "@/components/gallery-card";

export default function DoujinPageContent({pathname}:{pathname : string}) {
    const pathStack = pathname.split("/");
  return (
    <section className="flex flex-col items-start gap-6 py-8 md:py-10">
    <Breadcrumbs>
        {pathStack.slice(1).map((c,i)=>(
            <BreadcrumbItem key={i}>{c}</BreadcrumbItem>
        ))}
    </Breadcrumbs>
      <h1 className={title()}>{doujinHeader.title}</h1>
      <p className="text-default-500 text-left pt-1">{doujinHeader.desp}</p>

      {pathStack.at(-1) != "drawing" &&<>
        <h2 className="mt-6 text-xl font-semibold">Promote</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doujinPromoteData.map((group, gi) => (
            <GalleryCard key={gi} group={group} />
            ))}
        </div>
      </>}

      {pathStack.at(-1) != "promote" &&<>
        <h2 className="mt-8 text-xl font-semibold">Drawings</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doujinDrawData.map((group, gi) => (
            <GalleryCard key={gi} group={group} />
            ))}
        </div>
      </>}
    </section>
  );
}

// also export the camelCase name requested
export const doujinPageContent = DoujinPageContent;
