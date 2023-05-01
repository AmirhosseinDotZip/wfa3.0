import { FC } from "react"


const TimeLine: FC = () => {
    return (
        <section className="text-gray-600 body-font bg-stone-900 XXXopacity-95 rounded-3xl mx-44 mt-14">
            <div className="px-5 py-24 mx-auto flex flex-wrap">


                <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-800  rounded-full inline-flex items-center justify-center">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-12 h-12" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-semibold title-font text-white mb-1 text-xl">NLP Evolution</h2>
                            <p className="leading-relaxed text-stone-400">

                                Tracing the development of natural language processing over time, from early rule-based systems to modern machine learning algorithms.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-800 rounded-full inline-flex items-center justify-center">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-12 h-12" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-semibold title-font text-white mb-1 text-xl">Neural Networks in Psycholinguistics</h2>
                            <p className="leading-relaxed text-stone-400">

                                Connectionist models have revolutionized the field of psycholinguistics, providing new insights into language processing and inspiring innovative approaches to machine learning.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-800 rounded-full inline-flex items-center justify-center">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-12 h-12" viewBox="0 0 24 24">
                                <circle cx={12} cy={5} r={3} />
                                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                            </svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-semibold title-font text-white mb-1 text-xl">Cognitive Science and Linguistics</h2>
                            <p className="leading-relaxed text-stone-400">

                                Cognitive science has played a significant role in shaping computational models of language, leading to exciting advancements in natural language understanding and generation.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">4</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-800 rounded-full inline-flex items-center justify-center">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-12 h-12" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                <circle cx={12} cy={7} r={4} />
                            </svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-semibold title-font text-white mb-1 text-xl">Future of Language Tech</h2>
                            <p className="leading-relaxed text-stone-400">

                                As language technology continues to grow and evolve, there are new challenges and opportunities on the horizon, from improving speech recognition accuracy to developing more sophisticated language generation algorithms.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TimeLine