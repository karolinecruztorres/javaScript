const container = document.querySelector(".container");
const search = document.getElementById("search");  
const submitBtn = document.getElementById("submit-btn"); 

submitBtn.onclick = function() {
  const existingSearchedWord = document.getElementById("searched-word");
  const existingEtymology = document.getElementById("etymology");
  const existingDefinitions = document.querySelector(".definitions");
  const existingExample = document.getElementById("example");
  
  if (existingSearchedWord && existingEtymology && existingDefinitions && existingExample) {
    existingSearchedWord.remove();
    existingEtymology.remove();
    existingDefinitions.remove();
    existingExample.remove();
  }

  // const fetchApi2 = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search.value}`).then((res) => res.json());
  // data[0].word;
  // `${data[0].meanings[0].partOfSpeech} ${data[0].phonetic}`;
  // `${data[0].meanings[0].definitions[0].definition}`;
  // data[0].meanings[0].definitions[0].example ? `${data[0].meanings[0].definitions[0].example}` : "We currently have no examples";
  
  const fetchApi = fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${search.value}?key=34c9bbf1-0ae1-439b-9533-1600981345f1`).then((res) => res.json());
  const data = fetchApi.then((data) => {
    const searchedWord = document.createElement("p");
    searchedWord.textContent = data[0].meta.id.replace(/[^a-zA-Z]/gi,''); // Clean up all special characters and numbers that may come from the object property    
    searchedWord.id = "searched-word";  
    container.appendChild(searchedWord);

    const sound = document.createElement("button");
    sound.innerHTML = `<span class="material-symbols-outlined">volume_up</span>`;
    sound.id = "sound";
    container.appendChild(sound);
    sound.onclick = function() {
      const firstLetter = (data[0].meta.id.split(""))[0];
      const audio = new Audio(`https://media.merriam-webster.com/audio/prons/en/us/mp3/${firstLetter}/${data[0].hwi.prs[0].sound.audio}.mp3`);
      audio.play();
    }
    
    const etymology = document.createElement("p");
    etymology.textContent = `${data[0].fl} / ${data[0].hwi.prs[0].mw}`;
    etymology.id = "etymology";  
    container.appendChild(etymology);
    
    const definitions = document.createElement("ul");
    data[0].shortdef.forEach(element => {
      const li = document.createElement("li");
      li.textContent = `${element}.`;
      li.id = "definition";
      definitions.appendChild(li);
    });
    
    definitions.className = "definitions";  
    container.appendChild(definitions);
    
    const example = document.createElement("p");
    example.textContent = "We currently have no examples.";
    example.id = "example";  
    container.appendChild(example);
  });

  search.value = "";
}