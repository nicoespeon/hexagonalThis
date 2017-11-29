const createPoetryReader = require('./poetry-reader')

test('give verses when asked for poetry', () => {
    const poetryReader = createPoetryReader()

    const verses = poetryReader.giveMeSomePoetry()

    expect(verses).toEqual("If you could read a leaf or tree\r\nyou’d have no need of books.\r\n-- © Alistair Cockburn (1987)")
})

test('give verses from a PoetryLibrary', () => {
    const poetryLibrary = {
        getAPoem() {
            return "I want to sleep\r\nSwat the flies\r\nSoftly, please.\r\n\r\n-- Masaoka Shiki (1867-1902)"
        }
    }

    const poetryReader = createPoetryReader(poetryLibrary)
    const verses = poetryReader.giveMeSomePoetry()

    expect(verses).toEqual("I want to sleep\r\nSwat the flies\r\nSoftly, please.\r\n\r\n-- Masaoka Shiki (1867-1902)")
})
