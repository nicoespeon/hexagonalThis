class PoetryReader {
    constructor(poetryLibrary) {
        this.poetryLibrary = poetryLibrary
    }

    giveMeSomePoetry() {
        if (!this.poetryLibrary) {
            return "If you could read a leaf or tree\r\nyou’d have no need of books.\r\n-- © Alistair Cockburn (1987)"
        }

        return this.poetryLibrary.getAPoem()
    }
}

module.exports = PoetryReader
