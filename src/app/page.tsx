import { VerticalDemo } from "@/components/vertical/vertical-demo";
import { HorizontalDemo } from "@/components/horizontal/horizontal-demo";
import { GridDemo } from "@/components/grid/grid-demo";

export default function Home() {
  return (
    <div className="flex w-full items-center justify-center py-14 ">
      <div className="w-full flex flex-col space-y-10 max-w-xl">
        <div className="w-full flex flex-col space-y-4 bg-zinc-100 p-4 rounded">
          <span className="font-semibold">Vertical Demo</span>
          <VerticalDemo />
        </div>
        <div className="w-full flex flex-col space-y-4 bg-zinc-100 p-4 rounded">
          <span className="font-semibold">Horizontal Demo</span>
          <HorizontalDemo />
        </div>
        <div className="w-full flex flex-col space-y-4 bg-zinc-100 p-4 rounded">
          <span className="font-semibold">Grid Demo</span>
          <GridDemo />
        </div>
      </div>
    </div>
  );
}
