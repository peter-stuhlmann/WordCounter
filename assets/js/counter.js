function wc_inputOutput() {

    let wc_inputText = document.getElementById("wc-text-input").value

    if (wc_inputText == "") {
        document.getElementById('text-output').innerHTML = "Please enter a text."
    } else {

        // words

        let words = wc_inputText.split(' ')

        let wordCount = words.length;
        wordCount--

        let resultWords = 'words: ' + wordCount


        // sentences

        let sentences = wc_inputText.split('. ')

        let questions = wc_inputText.split('? ')

        let sentencesCount = sentences.length;
        sentencesCount--

        let questionsCount = questions.length;
        questionsCount--


        let resultSentences = 'sentences: ' + sentencesCount
        let resultQuestions = 'questions: ' + questionsCount

     
        // charcters

        let charactersCount = wc_inputText.length;

        let resultCharacters = 'characters: ' + charactersCount


        // characters without spaces

        let charactersCountWithoutSpace = wc_inputText.replace(/ /g, ""); //remove whitespace

        let charactersXCount = charactersCountWithoutSpace.length;

        let resultXCharacters = 'characters without spaces: ' + charactersXCount



        //output

        document.getElementById('wc-words-count-output').innerHTML = `${resultWords} <br> ${resultCharacters} <br> ${resultXCharacters} <br> ${resultSentences} <br> ${resultQuestions}`

    }
}


document.querySelector('#wc-counter-button').addEventListener('click', wc_inputOutput);
