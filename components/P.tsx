import { FC, useState } from "react"

type FileState = {
    file: File | null;
    error: string | null;
}

const P: FC = () => {
    const [fileState, setFileState] = useState<FileState>({ file: null, error: null });



    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (!selectedFile) {
            setFileState({ file: null, error: 'Please select a file.' });
            return;
        }
        if (selectedFile.type !== 'application/pdf') {
            setFileState({ file: null, error: 'Please select a PDF file.' });
            return;
        }
        setFileState({ file: selectedFile, error: null });
    }




    return (
        <div>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            {fileState.error && <div>{fileState.error}</div>}
            {fileState.file && <div>Selected file: {fileState.file.name}</div>}
        </div>
    )
}
export default P

