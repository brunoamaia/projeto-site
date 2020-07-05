// Insert the value of the number pressioned
//

import exit from './wayout.js'

class digit {
    constructor(numb, hist) {
        this.numb = numb        // Value of button
        this.hist = hist        // Value of display
    }
    
    value() {
        switch (this.numb) {
            case 0:
                this.hist += 0
                let disp0 = new exit(this.hist)
                disp0.numbNow()
                return this.hist
            case 1:
                this.hist += 1
                let disp1 = new exit(this.hist)
                disp1.numbNow()
                return this.hist
            case 2:
                this.hist += 2
                let disp2 = new exit(this.hist)
                disp2.numbNow()
                return this.hist
            case 3:
                this.hist += 3
                let disp3 = new exit(this.hist)
                disp3.numbNow()
                return this.hist
            case 4:
                this.hist += 4
                let disp4 = new exit(this.hist)
                disp4.numbNow()
                return this.hist
            case 5:
                this.hist += 5
                let disp5 = new exit(this.hist)
                disp5.numbNow()
                return this.hist
            case 6:
                this.hist += 6
                let disp6 = new exit(this.hist)
                disp6.numbNow()
                return this.hist
            case 7:
                this.hist += 7
                let disp7 = new exit(this.hist)
                disp7.numbNow()
                return this.hist
            case 8:
                this.hist += 8
                let disp8 = new exit(this.hist)
                disp8.numbNow()
                return this.hist
            case 9:
                this.hist += 9
                let disp9 = new exit(this.hist)
                disp9.numbNow()
                return this.hist
        }
    }
}

export default digit