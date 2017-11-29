import PoetryReader from './poetry-reader'
import IObtainPoems from './i-obtain-poems'

test('give verses when asked for poetry', () => {
    const poetryReader = new PoetryReader()

    const verses = poetryReader.giveMeSomePoetry()

    expect(verses).toEqual("If you could read a leaf or tree\r\nyou’d have no need of books.\r\n-- © Alistair Cockburn (1987)")
})

test('give verses from a PoetryLibrary', () => {
    const poetryLibrary: IObtainPoems = {
        getAPoem() {
            return "I want to sleep\r\nSwat the flies\r\nSoftly, please.\r\n\r\n-- Masaoka Shiki (1867-1902)"
        }
    }

    const poetryReader = new PoetryReader(poetryLibrary)
    const verses = poetryReader.giveMeSomePoetry()

    expect(verses).toEqual("I want to sleep\r\nSwat the flies\r\nSoftly, please.\r\n\r\n-- Masaoka Shiki (1867-1902)")
})
