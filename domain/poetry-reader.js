function createPoetryReader(poetryLibrary) {
    function giveMeSomePoetry() {
        if (!poetryLibrary) {
            return "If you could read a leaf or tree\r\nyou’d have no need of books.\r\n-- © Alistair Cockburn (1987)"
        }

        return poetryLibrary.getAPoem()
    }

    return {
        giveMeSomePoetry
    }
}

module.exports = createPoetryReader
