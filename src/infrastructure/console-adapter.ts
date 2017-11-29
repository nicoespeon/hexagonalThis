import PoetryReader from '../domain/poetry-reader'
import IWriteStuffOnTheConsole from './i-write-stuff-on-the-console'

class DefaultWriteStrategy implements IWriteStuffOnTheConsole {
    writeLine(text: string): void {
        console.log(text)
    }
}

class ConsoleAdapter {
    poetryReader: PoetryReader
    writeStrategy: IWriteStuffOnTheConsole

    constructor(poetryReader: PoetryReader,
                writeStrategy: IWriteStuffOnTheConsole = new DefaultWriteStrategy()) {
        this.poetryReader = poetryReader
        this.writeStrategy = writeStrategy
    }

    ask(): void {
        // Adapt from infra to domain

        // Call the business logic
        const poetry = this.poetryReader.giveMeSomePoetry()

        // Adapt from domain to infra
        this.writeStrategy.writeLine(poetry)
    }
}

export default ConsoleAdapter
