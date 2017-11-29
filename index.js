const createPoetryReader = require('./domain/poetry-reader')
const createConsoleAdapter = require('./infrastructure/console-adapter')

// Instatiate the right-side adapter(s)

// Instantiate the hexagon
// (no right-side adapter -> hard coded poems here)
const poetryReader = createPoetryReader()

// Instantiate the left-side adapter(s)
const consoleAdapter = createConsoleAdapter(poetryReader)

// App logic is only using left-side adapter(s).
console.log('Here is some poetry:\n')
consoleAdapter.ask()
