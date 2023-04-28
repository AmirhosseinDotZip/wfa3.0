import React, { FC, useState } from 'react';
import { Document, Page } from 'react-pdf';

declare global {
    interface Window {
        PDFLib: any;
    }
}

interface AnalyzerProps {
    maxPages?: number;
}

const PDFAnalyzer: FC<AnalyzerProps> = ({ maxPages = 10 }) => {
    const [file, setFile] = useState<File | undefined>();
    const [numPages, setNumPages] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [textArray, setTextArray] = useState<string[]>([]);
    const [results, setResults] = useState<WordFrequency[] | null>(null);

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
            setNumPages(null);
            setCurrentPage(1);
            setTextArray([]);
            setResults(null);
        }
    }

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    async function getTextFromPDF() {
        if (file && numPages) {
            const textArr: string[] = [];
            for (let i = 1; i <= Math.min(maxPages, numPages); i++) {
                const pageText = await getPageText(i);
                textArr.push(pageText);
            }
            setTextArray(textArr);
        }
    }

    async function getPageText(pageNumber: number): Promise<string> {
        if (file) {
            const pdfDoc = await window.PDFLib.PDFDocument.load(await file.arrayBuffer());
            const page = await pdfDoc.getPage(pageNumber);
            const content = await page.getTextContent();
            return content.items.map((item: { str: string }) => item.str).join(' ');
        }
        return '';
    }

    function countWords(textArray: string[]): { [key: string]: number } {
        const frequencyMap: { [key: string]: number } = {};
        textArray.forEach(text => {
            const words = text.toLowerCase().match(/\w+/g);
            words?.forEach(word => {
                frequencyMap[word] = (frequencyMap[word] || 0) + 1;
            });
        });
        return frequencyMap;
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const frequencyMap = countWords(textArray);
        setResults(Object.entries(frequencyMap).map(([word, frequency]) => ({ word, frequency })));
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <form onSubmit={handleSubmit}>
                <label className="inline-block font-bold mb-2">Upload PDF:</label>
                <input type="file" accept=".pdf" onChange={handleFileChange} />

                {file && (
                    <div className="mt-4">
                        {/* <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                            {Array.from(new Array(numPages ?? 0), (_, index) => (
                                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                            ))}
                        </Document> */}
                        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                            {numPages && Array.from(new Array(numPages), (_, index) => (
                                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                            ))}
                        </Document>
                        {numPages && (
                            <p className="text-center mt-2">
                                Page {currentPage} of {numPages}
                            </p>
                        )}
                        {currentPage > 1 && (
                            <button
                                type="button"
                                onClick={() => setCurrentPage(currentPage - 1)}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-2 rounded-md transition duration-300 ease-in-out"
                            >
                                Previous
                            </button>
                        )}
                        {currentPage < numPages && (
                            <button
                                type="button"
                                onClick={() => setCurrentPage(currentPage + 1)}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-2 rounded-md transition duration-300 ease-in-out"
                            >
                                Next
                            </button>
                        )}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={!numPages}
                    className={`mt-4 ${!numPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                        } text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out`}
                >
                    Analyze
                </button>
            </form>

            {results && (
                <>
                    <h2 className="text-2xl font-bold mt-4">Word Frequencies:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 mt-4">
                        {results.map(({ word, frequency }) => (
                            <div key={word} className="flex justify-center p-4 shadow-md rounded-md bg-gray-100">
                                <span className="font-bold pr-2">{word}</span>
                                <p className="font-bold">:</p>
                                <span className="pl-2">{frequency}</span>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>

    );

};

export default PDFAnalyzer;

interface WordFrequency {
    word: string;
    frequency: number;
}