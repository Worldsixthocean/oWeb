import { title } from "@/components/primitives";
import {websiteData, websiteHeader} from "../../config/website" 
import { ExtentedGallaryCard } from "@/components/extented-gallary-card";

export default function WebProject() {
  return (
    <section className="flex flex-col items-start gap-6 py-8 md:py-10">
      <p className="text-small">website</p>
      <h1 className={title()}>{websiteHeader.title}</h1>
      <p className="text-default-500 text-left pt-1">{websiteHeader.desp}</p>

      <div className="w-full grid grid-cols-1 gap-6">
        {websiteData.map((group, gi) => (
          <ExtentedGallaryCard key={gi} group={group}/>
        ))}
      </div>
    </section>
  );
}
