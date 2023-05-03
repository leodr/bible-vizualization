import React from "react";

type HighlightProps = {
  children: React.ReactNode;
};

function Highlight({ children }: HighlightProps) {
  return <span className="text-gray-900">{children}</span>;
}

type HighlightWordsProps = {
  text: string;
  wordsToHighlight: string[];
};

export function HighlightWords({
  text,
  wordsToHighlight,
}: HighlightWordsProps) {
  const lowerCaseWordsToHighlight = wordsToHighlight.map((word) =>
    word.toLowerCase()
  );
  const regex = new RegExp(
    "(" + lowerCaseWordsToHighlight.join("|") + ")",
    "gi"
  );
  const textArray = Array.from(text.split(regex), (m) => m);

  const highlightedTextArray = textArray.map((word, index) => {
    if (word && regex.test(word)) {
      return (
        <React.Fragment key={index}>
          <Highlight>{word}</Highlight>
        </React.Fragment>
      );
    } else {
      return <React.Fragment key={index}>{word}</React.Fragment>;
    }
  });

  return <>{highlightedTextArray}</>;
}
