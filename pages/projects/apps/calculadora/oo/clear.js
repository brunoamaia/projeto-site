// Functions responsible for clean the display

import exit from './wayout.js'

class clears{
    constructor(txt){
        this.txt = txt      // Value on the main display
    }

    clearAll() {        // Clear All elements
        let clAll = new exit(this.txt)
        clAll.reset()
    }

    clearElement(){     // Clear value in the main display
        this.txt = ''
        let rese = new exit(this.txt)
        rese.numbNow()                  // Caso tenha sido o primeiro valor digitado, limpa a tela ***
        return this.txt    }
}

export default clears