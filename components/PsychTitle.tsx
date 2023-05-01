import { FC } from 'react'
import Typewriter from 'typewriter-effect'

interface PsychTitleProps {
    className?: string
}

const PsychTitle: FC<PsychTitleProps> = ({ className, ...props }) => {
    return (
        <>
            <div className={` h-2/4 text-7xl font-bold mb-6 text-white ${className}`}>
                <Typewriter
                    options={{
                        wrapperClassName: 'text-6xl bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent',
                        cursor: '',
                        // cursorClassName: 'bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent'
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(65)
                            .typeString(`PsychoAnalyze <br> ani`)
                            .deleteChars(1)
                            .typeString(`y <br>content<br>`)
                            .typeString(`any<br> `)
                            .typeString(`context`)

                            .start()
                    }}

                />
            </div>
        </>
    )
}

export default PsychTitle