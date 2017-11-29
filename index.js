const PoetryReader = require('./domain/poetry-reader')
const ConsoleAdapter = require('./infrastructure/console-adapter')

// Instatiate the right-side adapter(s)

// Instantiate the hexagon
// (no right-side adapter -> hard coded poems here)
const poetryReader = new PoetryReader()

// Instantiate the left-side adapter(s)
const consoleAdapter = new ConsoleAdapter(poetryReader)

// App logic is only using left-side adapter(s).
console.log('Here is some poetry:\n')
consoleAdapter.ask()
