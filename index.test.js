const createPoetryReader = require('./domain/poetry-reader')
const createConsoleAdapter = require('./infrastructure/console-adapter')

test('give verses when asked for poetry from a ConsoleAdapter', () => {
    // Instantiate right-side adapters (I want to go out)
    const poetryLibrary = {
        getAPoem() {
            return "A beautiful poem:\n\nI want to sleep\r\nSwat the flies\r\nSoftly, please.\r\n\r\n-- Masaoka Shiki (1867-1902)"
        }
    }

    // Instantiate the hexagon
    const poetryReader = createPoetryReader(poetryLibrary)

    // Instantiate left-side adapters (I want to go in)
    const writeStrategy = {
        writeLine: jest.fn()
    }
    const consoleAdapter = createConsoleAdapter(poetryReader, writeStrategy)

    consoleAdapter.ask()

    expect(writeStrategy.writeLine).toBeCalledWith("A beautiful poem:\n\nI want to sleep\r\nSwat the flies\r\nSoftly, please.\r\n\r\n-- Masaoka Shiki (1867-1902)")
})
