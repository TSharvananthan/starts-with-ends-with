import { useParams } from "react-router-dom";
import FadeIn from 'react-fade-in';
import wordList from './words.json';
import Footer from './Footer';

const BackButton = () => {
  return (
    <svg class="h-12 w-12 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z"/>
      <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
    </svg>
  )
}

function wordSearch(startingLetter, endingLetter) {
  let searchResults = [];

  for (let word of wordList)
  {
    let firstLetterMatch = word.charAt(0).toUpperCase() === startingLetter;
    let lastLetterMatch = word.charAt(word.length - 1).toUpperCase() === endingLetter;

    if (firstLetterMatch && lastLetterMatch)
    {
      searchResults.push(word);
    }
  }

  return searchResults;
}

function Search() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { firstLetter, lastLetter } = useParams();
  let searchResults = wordSearch(firstLetter, lastLetter);

  console.log(searchResults)

  return (
    <FadeIn className="text-white font-extrabold text-center mt-8 select-none" delay={100}>
      <div className="text-6xl">
        There are {searchResults.length} words that start with {firstLetter} and end with {lastLetter}
      </div>

      <div className="grid overflow-hidden grid-cols-8 gap-4 mt-4 text-lg">
        { searchResults.map((s) => <p>{s}</p>) }
      </div>

      <Footer />
    </FadeIn>
  );
}

export default Search;