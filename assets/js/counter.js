function wc_inputOutput() {

    let wc_inputTextOriginal = document.getElementById("wc-text-input").value

    let wc_inputText
    if (wc_inputTextOriginal[wc_inputTextOriginal.length - 1] == " ") {
        wc_inputText = wc_inputTextOriginal.substr(0, wc_inputTextOriginal.length - 1)
    } else {
        wc_inputText = wc_inputTextOriginal
    }


    if (wc_inputText == "") {
        document.getElementById('wc-words-count-output').innerHTML = "Please enter a text."
    } else {

        // words

        let words = wc_inputText.split(' ')

        let wordCount = words.length + 1;
        wordCount--

        let resultWords = 'words: ' + wordCount


        // sentences

        let statements = wc_inputText.split('.')
        
        let exclamations = wc_inputText.split('!')

        let questions = wc_inputText.split('?')

        let statementsCount = statements.length;
        statementsCount--
        
        let exclamationsCount = exclamations.length;
        exclamationsCount--

        let questionsCount = questions.length;
        questionsCount--
        
        let sentencesCount = statementsCount + exclamationsCount + questionsCount;

        let resultSentences = 'Sentences: ' + sentencesCount
        let resultStatements = 'statements: ' + statementsCount
        let resultExclamations = 'exclamations: ' + exclamationsCount
        let resultQuestions = 'questions: ' + questionsCount


        // charcters

        let charactersCount = wc_inputText.length;

        let resultCharacters = 'characters: ' + charactersCount


        // characters without spaces

        let charactersCountWithoutSpace = wc_inputText.replace(/ /g, ""); // remove whitespace

        let charactersXCount = charactersCountWithoutSpace.length;

        let resultXCharacters = 'characters without spaces: ' + charactersXCount



        // count vowels

        const countVowels = (str) => str.split("").filter(letter => 'AEIOUÄÖÜaeiouäöü'.includes(letter)).length
        let resultVowels = 'Vowels: ' + countVowels(wc_inputText)


        // count consonants

        const countConsonants = (str) => str.split("").filter(letter => 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyzß'.includes(letter)).length
        let resultConsonants = 'Consonants: ' + countConsonants(wc_inputText)
        
        
        // count digits

        const countDigits = (str) => str.split("").filter(letter => '0123456789'.includes(letter)).length
        let resultDigits = 'Digits: ' + countDigits(wc_inputText)



        // output

        document.getElementById('wc-words-count-output').innerHTML = `${resultWords} <br> ${resultCharacters} <br> ${resultXCharacters} <br> ${resultSentences} (${resultStatements}, ${resultExclamations}, ${resultQuestions}) <br> ${resultVowels} <br> ${resultConsonants} <br> ${resultDigits}`

    }
}


document.querySelector('#wc-counter-button').addEventListener('click', wc_inputOutput);
