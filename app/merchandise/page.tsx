import { title } from "@/components/primitives";
import { GalleryCard } from "@/components/gallery-card";
import { merchandiseData, merchandiseHeader } from "@/config/merchandise";

export default function MerchandisePage() {
  return (
    <section className="flex flex-col items-start gap-6 py-8 md:py-10">
      <p className="text-small">merchandise</p>
      <h1 className={title()}>{merchandiseHeader.title}</h1>
      <p className="text-default-500 text-left pt-1">{merchandiseHeader.desp}</p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {merchandiseData.map((group, gi) => (
          <GalleryCard key={gi} group={group} />
        ))}
      </div>
    </section>
  );
}
