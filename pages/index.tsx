import { HighlightWords } from "@/components/highlighter";
import { text } from "@/lib/text";
import { Prata } from "next/font/google";

const inter = Prata({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
});

export default function Home() {
  return (
    <main
      className={`h-screen ${inter.className} text-5xl leading-snug text-justify p-20`}
    >
      <p className="text-gray-400 relative opacity-50">
        <HighlightWords text={text} wordsToHighlight={["licht", "schatten"]} />
      </p>
      <div className="fixed top-0 left-0 w-full h-full p-[10vw] flex items-center justify-center z-0">
        <div className="flex w-full items-center aspect-square rounded-full p-4 gap-4 bg-gray-400 text-xs">
          {/* Licht */}
          <div className="flex-[230] aspect-square bg-white border-4 border-black rounded-full p-4 gap-4 flex items-center">
            <div className="flex-[86] aspect-square bg-blue-400 rounded-full p-4 gap-4 flex items-center">
              Physisch
            </div>
            <div className="flex-[144] aspect-square bg-violet-500 rounded-full p-4 gap-4 flex items-center">
              Metaphorisch
            </div>
          </div>
          {/* Schatten */}
          <div className="flex-[57] aspect-square bg-black rounded-full p-4 gap-4 flex items-center">
            <div className="flex-[14] aspect-square bg-blue-400 rounded-full p-4 gap-4 flex items-center">
              Physisch
            </div>
            <div className="flex-[43] aspect-square bg-violet-500 rounded-full p-4 gap-4 flex items-center">
              Metaphorisch
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

/*
Search_Word Classification  Counts
0       Licht   metaphorisch     144
1       Licht       physisch      86
2    Schatten   metaphorisch      43
3    Schatten       physisch      14
*/
