import IRequestVerses from './i-request-verses'
import IObtainPoems from './i-obtain-poems'

class PoetryReader implements IRequestVerses {
    poetryLibrary: IObtainPoems

    constructor(poetryLibrary?: IObtainPoems) {
        this.poetryLibrary = poetryLibrary
    }

    giveMeSomePoetry(): string {
        if (!this.poetryLibrary) {
            return "If you could read a leaf or tree\r\nyou’d have no need of books.\r\n-- © Alistair Cockburn (1987)"
        }

        return this.poetryLibrary.getAPoem()
    }
}

export default PoetryReader
