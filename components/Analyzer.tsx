import { FC, useState } from "react";

const Analyzer: FC = () => {
    const [text, setText] = useState<string>('');
    const [results, setResults] = useState<WordFrequency[] | null>(null);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const frequencyMap = countWords(text);
        setResults(
            Object.entries(frequencyMap).map(([word, frequency]) => ({ word, frequency }))
        );
    }

    console.log(countWords("sdjfgjkhg ujkhj us us"));


    return (
        <>
            <form onSubmit={handleSubmit}>
                <textarea value={text} onChange={event => setText(event.target.value)} />
                <button type="submit">Analyze</button>
            </form>
            <h1>--------------</h1>

            {results && (
                <ul>
                    {results.map(({ word, frequency }) => (
                        <li key={word}>
                            {word}: {frequency}
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}
export default Analyzer

function countWords(text: string): { [key: string]: number } {
    const words = text.toLowerCase().match(/\w+/g);
    const frequencyMap: { [key: string]: number } = {};
    words?.forEach(word => {
        frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    });
    return frequencyMap;
}

interface WordFrequency {
    word: string;
    frequency: number;
}