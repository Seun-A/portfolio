export default function HighlightedWord({ word, bg, text, caret, step }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="px-[0.14em]">{word}</span>
      <span
        aria-hidden
        className={`highlight-fill highlight-fill-${step} absolute inset-0 overflow-hidden`}
      >
        <span className={`block h-full px-[0.14em] ${bg} ${text}`}>{word}</span>
        <span className={`highlight-caret highlight-caret-${step} absolute top-[0.08em] right-0 bottom-[0.08em] w-0.5 ${caret}`} />
      </span>
    </span>
  )
}
