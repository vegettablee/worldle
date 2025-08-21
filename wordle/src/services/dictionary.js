class DictionaryAPI {
  static shared = new DictionaryAPI();
  constructor() {
    this.baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en";
  }
  async doesWordExist(word) {
    try {
      let response = await fetch(`${this.baseUrl}/${word}`);
      let data = response.json();
      console.log(response);
      console.log(data);

      if (!response.ok) {
        return false; // word does not exist
      }
      return true;
    } catch (error) {
      console.log("word does not exist", error);
    }
  }
  async getWordleWord() {
    try {
      let response = await fetch(
        "https://random-words-api.kushcreates.com/api?language=en&category=wordle&length=5&type=uppercase&words=1"
      );
      let data = await response.json();
      let wordleWord = data[0].word;
      console.log(wordleWord);
      return wordleWord;
    } catch (error) {
      console.log("Error getting wordle word", error);
    }
  }
}

export default DictionaryAPI;
