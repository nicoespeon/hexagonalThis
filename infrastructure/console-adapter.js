const defaultWriteStrategy = {
    writeLine(text) {
        console.log(text)
    }
}

function createConsoleAdapter(poetryReader, writeStrategy = defaultWriteStrategy) {
    function ask() {
        // Adapt from infra to domain

        // Call the business logic
        const poetry = poetryReader.giveMeSomePoetry()

        // Adapt from domain to infra
        writeStrategy.writeLine(poetry)
    }

    return {
        ask
    };
}

module.exports = createConsoleAdapter
