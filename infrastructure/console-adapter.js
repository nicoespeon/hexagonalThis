class DefaultWriteStrategy {
    writeLine(text) {
        console.log(text)
    }
}

class ConsoleAdapter {
    constructor(poetryReader, writeStrategy = new DefaultWriteStrategy()) {
        this.poetryReader = poetryReader
        this.writeStrategy = writeStrategy
    }

    ask() {
        // Adapt from infra to domain

        // Call the business logic
        const poetry = this.poetryReader.giveMeSomePoetry()

        // Adapt from domain to infra
        this.writeStrategy.writeLine(poetry)
    }
}

module.exports = ConsoleAdapter
