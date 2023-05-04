import React from "react";

type HighlightProps = {
  children: React.ReactNode;
};

function Highlight({ children }: HighlightProps) {
  return <span className="text-gray-600">{children}</span>;
}

type HighlightWord = {
  word: string;
  component: React.ComponentType<{ children: React.ReactNode }>;
};

type HighlightWordsProps = {
  text: string;
  wordsToHighlight: HighlightWord[];
};

export function HighlightWords({
  text,
  wordsToHighlight,
}: HighlightWordsProps) {
  const highlightMap = wordsToHighlight.reduce((acc, { word, component }) => {
    acc[word.toLowerCase()] = component;
    return acc;
  }, {} as Record<string, React.ComponentType<{ children: React.ReactNode }>>);

  const regex = new RegExp(
    "(" + wordsToHighlight.map(({ word }) => word).join("|") + ")",
    "gi"
  );

  const textArray = Array.from(text.split(regex), (m) => m);

  const highlightedTextArray = textArray.map((word, index) => {
    const lowerCaseWord = word.toLowerCase();
    if (word && highlightMap.hasOwnProperty(lowerCaseWord)) {
      const CustomComponent = highlightMap[lowerCaseWord];
      return (
        <React.Fragment key={index}>
          <CustomComponent>{word}</CustomComponent>
        </React.Fragment>
      );
    } else {
      return <React.Fragment key={index}>{word}</React.Fragment>;
    }
  });

  return <>{highlightedTextArray}</>;
}
