import { title } from "@/components/primitives";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import {Kbd} from "@heroui/kbd";
import { clipStudioKbds } from "@/config/ClipStudioKbd";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Clip Studio Keybind</h1>
      <div className="grid gap-4 grid-rows-[1fr] grid-cols-2 pt-10">
        {clipStudioKbds.map((kbd, index)=>(
          <Card key={index}
          classNames={{
            base:"h-full grid col-span-2 grid-cols-subgrid",
            body:"grid col-span-2 grid-cols-subgrid"
          }} >
            <CardBody>
              <div>
                {kbd.function}
              </div>
              <div className="flex gap-2">
                {kbd.kbdList.map((k,i)=>(
                  <Kbd key={i} keys={k.kdbKey}>
                    {k.keybind}
                  </Kbd>
                ))}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
