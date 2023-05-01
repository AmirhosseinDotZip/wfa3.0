import { FC, useState } from "react"

type FileState = {
    file: File | null;
    error: string | null;
}

const P: FC = () => {
    const [fileState, setFileState] = useState<FileState>({ file: null, error: null });
    const [pdfText, setPdfText] = useState('');

    const handleFileChange = async event => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = async () => {
            const buffer = reader.result;
            const textDecoder = new TextDecoder('utf-8');
            let pdfText = '';

            // Search for "stream" objects in the PDF file
            const streamMatches = [...textDecoder.decode(buffer).matchAll(/stream([\s\S]*?)endstream/g)];

            // Extract text from each "stream" object
            for (const streamMatch of streamMatches) {
                const streamBuffer = streamMatch[1].trim();

                try {
                    const streamText = textDecoder.decode(new Uint8Array([...streamBuffer].map(char => char.charCodeAt(0))));
                    // Extract text between parentheses
                    const stringMatches = [...streamText.matchAll(/\((.*?)\)/g)];
                    for (const stringMatch of stringMatches) {
                        pdfText += stringMatch[1];
                    }
                } catch (error) {
                    console.error(`Error decoding stream: ${error}`);
                }
            }

            setPdfText(pdfText);
        };

        reader.readAsArrayBuffer(file);
    };





    return (
        <div className="">
            <input type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="block w-full p-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <p>{pdfText}</p>
            {/* {fileState.error && <div>{fileState.error}</div>} */}
            {/* {fileState.file && <div>Selected file: {fileState.file.name}</div>} */}

        </div>
    )
}
export default P




// const handleFileChange = async event => {
    //     const file = event.target.files[0];
    //     const reader = new FileReader();

    //     reader.onload = async () => {
    //         const pdfData = new Uint8Array(reader.result);
    //         const doc = await pdfjsLib.getDocument({ data: pdfData }).promise;

    //         let text = '';

    //         for (let i = 1; i <= doc.numPages; i++) {
    //             const page = await doc.getPage(i);
    //             const content = await page.getTextContent();
    //             text += content.items.map(item => item.str).join(' ');
    //         }

    //         setPdfText(text);
    //     };

    //     reader.readAsArrayBuffer(file);
    // };


    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const selectedFile = event.target.files?.[0];
    //     if (!selectedFile) {
    //         setFileState({ file: null, error: 'Please select a file.' });
    //         return;
    //     }
    //     if (selectedFile.type !== 'application/pdf') {
    //         setFileState({ file: null, error: 'Please select a PDF file.' });
    //         return;
    //     }
    //     setFileState({ file: selectedFile, error: null });
    // }
