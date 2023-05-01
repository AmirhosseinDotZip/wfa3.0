import { FC, useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const Analyzer: FC = () => {
    const [text, setText] = useState<string>('');
    const [results, setResults] = useState<WordFrequency[] | null>(null);


    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const frequencyMap = countWords(text);
        setResults(Object.entries(frequencyMap).map(([word, frequency]) => ({ word, frequency })));
        // toast('Analysys initiated', {
        //     icon: '⌚'
        // });

    }

    function handleDownload() {
        if (results) {
            const data = results.reduce((obj, { word, frequency }) => ({ ...obj, [word]: frequency }), {});
            const fileName = `word_frequency_${new Date().toISOString().substring(0, 10)}_${new Date().toLocaleTimeString().replace(/:/g, '')}.json`;
            const downloadAnchorNode = Object.assign(
                document.createElement('a'),
                { href: `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`, download: fileName }
            );
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
            toast.success('Downloaded Successfully');
        }
    }





    return (
        <div className="mt-36 flex flex-col items-center justify-center ">
            <h1 className="font-medium title-font text-stone-200 mb-8 text-4xl text-center font-mono">Enter Some Text...</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <textarea
                    spellCheck={"false"}
                    rows={12}
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    className="w-[1000px] p-4 rounded-md shadow-md text-lg focus:outline-none  focus:ring-blue-500 opacity-70"
                />
                <div className="flex justify-center gap-4">
                    <button
                        type="submit"
                        className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-500 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out active:scale-95"
                    >
                        Analyze
                    </button>
                    {results && (
                        <button
                            onClick={handleDownload}
                            className="inline-flex items-center bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out active:scale-95"
                        >
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                            </svg>
                            Download JSON
                        </button>
                    )}
                    <Toaster />

                </div>

            </form>

            {results && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 mt-4">
                        {results.map(({ word, frequency }) => (
                            <div key={word} className="flex justify-center p-4 shadow-md rounded-md bg-gray-300">
                                <span className="font-bold pr-2">{word}</span>
                                <p className="font-bold">:</p>
                                <span className="pl-2">{frequency}</span>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Analyzer;

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



