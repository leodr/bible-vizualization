import { HighlightWords } from "@/components/highlighter";
import { sentences } from "@/lib/sentences";
import { EB_Garamond, Inter } from "next/font/google";
import Balancer from "react-wrap-balancer";

const ebGaramond = EB_Garamond({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});
const inter = Inter({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  style: ["normal"],
});

export default function Home() {
  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: "auto auto auto auto auto" }}
    >
      <div></div>
      <div></div>
      <main
        className={`min-h-screen ${inter.className} p-4 pt-8 md:pt-20 md:p-20 max-w-7xl`}
      >
        <h1 className="text-4xl pr-6 md:pr-60 md:text-6xl font-extrabold tracking-tighter leading-[1.1] md:leading-[1.15]">
          <Balancer>
            Verwendungen der Worte &quot;Licht&quot; und &quot;Schatten&quot; in
            der Bibel
          </Balancer>
        </h1>
        <div className="mt-6 md:mt-20 flex flex-col xl:flex-row">
          <div className="flex flex-col gap-8">
            <div
              className="grid gap-y-3 gap-x-4 text-lg md:text-xl min-w-[22rem]"
              style={{ gridTemplateColumns: `auto 1fr`, placeItems: "center" }}
            >
              <div className="w-6 h-6 rounded-full bg-black"></div>
              <div className="w-full">
                Vorkommnisse von &quot;Schatten&quot;
              </div>
              <div
                className="w-6 h-6 rounded-full bg-white"
                style={{ boxShadow: "0px 2px 4px rgba(0,0,0,0.4)" }}
              ></div>
              <div className="w-full">Vorkommnisse von &quot;Licht&quot;</div>
              <div className="col-span-2 md:h-2"></div>
              <div className="w-6 h-1.5 rounded-full bg-green-500"></div>
              <div className="w-full">Physische Bedeutung</div>
              <div className="w-6 h-1.5 rounded-full bg-violet-500"></div>
              <div className="w-full">Metaphorische Verwendung</div>
            </div>
          </div>
          {/* Visualisierung */}
          <div className="mt-10 md:mt-20 flex w-full items-end rounded-full font-mono">
            {/* Schatten */}
            <div className="flex-[58] aspect-square bg-black rounded-full p-3 gap-2 flex items-center relative">
              <div className="absolute top-2 left-1/2 text-white transform -translate-x-full text-lg">
                58
              </div>
              <div className="relative flex-[14] aspect-square bg-green-500 rounded-full flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg">
                  14
                </div>
              </div>
              <div className="relative flex-[44] aspect-square bg-violet-500 rounded-full flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg">
                  44
                </div>
              </div>
            </div>
            {/* Licht */}
            <div className="flex-[215] aspect-square bg-white shadow-2xl rounded-full p-4 gap-3 flex items-center relative">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-lg">
                215
              </div>
              <div className="relative flex-[70] aspect-square bg-green-600 rounded-full flex items-center justify-center text-white">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg">
                  70
                </div>
              </div>
              <div className="relative flex-[145] aspect-square bg-violet-600 rounded-full flex items-center justify-center text-white">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg">
                  145
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mt-20 md:mt-32 font-extrabold tracking-tighter text-2xl md:text-5xl">
          Relevante Bibelverse, coloriert:
        </h2>
        <p
          className={`${ebGaramond.className} mt-4 md:mt-10 text-2xl leading-normal md:text-5xl md:leading-snug`}
        >
          {sentences.map((sentence, index) => {
            const isLight = sentence.searchWord === "Licht";
            const bg = isLight ? "bg-gray-200" : "bg-black";
            const isPhysical = sentence.classification === "physisch";
            let textColor;
            if (isLight) {
              textColor = isPhysical ? "text-green-600" : "text-violet-600";
            } else {
              textColor = isPhysical ? "text-green-400" : "text-violet-400";
            }
            const highlightColor = isLight ? "text-black" : "text-white";
            return (
              <span
                className={["mx-0.5 first:ml-0 last:mr-0", bg, textColor]
                  .filter(Boolean)
                  .join(" ")}
                key={index}
              >
                <HighlightWords
                  text={sentence.sentence}
                  wordsToHighlight={[
                    {
                      word: "licht",
                      component: ({ children }) => (
                        <span className={`${highlightColor} italic`}>
                          {children}
                        </span>
                      ),
                    },
                    {
                      word: "schatten",
                      component: ({ children }) => (
                        <span className={`${highlightColor} italic`}>
                          {children}
                        </span>
                      ),
                    },
                  ]}
                />{" "}
              </span>
            );
          })}
        </p>
      </main>
    </div>
  );
}

/*
  Search_Word Classification  Counts
0       Licht   metaphorisch     145
1       Licht       physisch      70
2    Schatten   metaphorisch      44
3    Schatten       physisch      14
*/
