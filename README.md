# Word Frequency Analyzer

[![ambient-work - WFA3.0](https://img.shields.io/badge/ambient--work-WFA3.0-2ea44f?style=for-the-badge&logo=github)](https://github.com/ambient-work/wfa3.0/)
[![Extrempty - Dev](https://img.shields.io/badge/Extrempty-Dev-89CFF0?style=for-the-badge&logo=telegram)](https://github.com/ambient-work/wfa3.0/)
[![Made with - Next JS](https://img.shields.io/badge/Made_with-Next_JS-C0C2C9?style=for-the-badge&logo=vercel)](https://github.com/ambient-work/wfa3.0/)
[![in - Development](https://img.shields.io/badge/in-Development-ac3ccf?style=for-the-badge&logo=visualstudiocode)](https://github.com/ambient-work/wfa3.0/)

## Analyze the frequency of words in a text and download the results in JSON format.

#### 🚀 in development, contributions are welcome 

<!-- <details>
<summary>Demo gif</summary>

![Word Frequency Analyzer Demo](wfa3_demo.gif)

</details> -->
<details>
<summary>Demo video</summary>

<!-- https://user-images.githubusercontent.com/101447196/235105522-8fa220aa-1863-4b74-a97a-b812c550673e.mp4 -->
https://user-images.githubusercontent.com/101447196/235469926-6f139e79-35ea-451b-8159-8d2d7fb17d88.mp4

</details>



## Quickstart

To get started:

1. Clone this repository.
2. Navigate to the project folder and run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.
4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## What's inside?

This project uses Next.js for server-side rendering and React for building the user interface. The main component in this project is `Analyzer`, which renders a form with a textarea input and two buttons: one to analyze the text in the input, and another to download the results in JSON format. 

The `countWords` function takes a string of text as input and returns an object with key-value pairs where the keys are individual words in the text and the values are the frequency of each word. When the user submits the form, the `handleSubmit` function is called, which uses the `countWords` function to count the frequencies of the words in the input text and sets the results state using the `setResults` function.

If there are results, the component renders a grid of boxes displaying each word and its frequency. When the user clicks the download button, the `handleDownload` function creates a temporary anchor link with a `data:` URI containing the JSON-encoded results data, sets the `download` attribute to a filename based on the current date and time, triggers a click event on the anchor link, and then removes the anchor element from the DOM.

## License

This project is licensed under the MIT license.

---

Made with ❤️ by Baniminator
