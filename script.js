const button = document.getElementById('button');
const audioElement = document.getElementById('audio');


// disable button
function toggleButton(){
button.disabled = !button.disabled
}



// VoiceRSS
function tellME(joke){
      const jokeString = joke.trim().replace(/ /g, '%20');
	    VoiceRSS.speech({
				key: '6aecdf8a3f42464c9443e21445eed97e',
				src: jokeString,
				hl: 'en-us',
				v: 'Linda',
				r: 0,
				c: 'mp3',
				f: '44khz_16bit_stereo',
				ssml: false,
			});
	}




// Jokes

async function getJokes(){
    let joke = ''
    const apiURL =
			'https://v2.jokeapi.dev/joke/Programming,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    try{
      const response = await fetch(apiURL);
      const data = await response.json();
      if (data.setup){
          joke = `${data.setup} ... ${data.delivery}`;

      }else{
          joke = data.joke;
      }
      tellME(joke)

    //   disable toggleButton
    toggleButton()
    }catch (error){
      console.log('whoops')
    }
}

// event listener
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended',toggleButton)
