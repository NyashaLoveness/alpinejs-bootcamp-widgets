document.addEventListener('alpine:init', () => {
   Alpine.data('wordGameWidget', function() {
    return {
        message: " ",
        sentence: " ",
        showDiv: false,
        longWord: "The longest word is ",
        shortWord: "The shortest word is ",
        char: "Number of characters in the sentence: ",

        longFunc() {
            this.sentence = this.longWord + longestWord(this.message);
        },
        shortFunc() {
            this.sentence = this.shortWord + shortestWord(this.message);
        },
        charFunc() {
            this.sentence = this.char + wordLengths(this.message);
        }
}
})
})
