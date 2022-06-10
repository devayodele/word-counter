// get character count

function getCharCount(data) {
  return data.value.length;
}

// get word count

function getWordCount(data) {
  let value = data.value.trim();

  if (!value) {
    return 0;
  } else {
    let wordCount = value.match(/\S+/g);

    return wordCount.length;
  }
}

//get text

const inputText = document.getElementById("textarea");

//add an event lister to listen to the inut event of the textarea

inputText.addEventListener("input", function (e) {
  const wordCount = document.getElementById("wordCount");

  const charCount = document.getElementById("charCount");

  wordCount.textContent = getWordCount(this);

  charCount.textContent = getCharCount(this);
});
