document.addEventListener('alpine:init', () => {
    Alpine.data('transportFeeWidget', function() {
     return {
        showMessage: false,
        select: " ",
        select1: " ",
        select2: " ",
        choice: " ",

        feeFunc() {
            if (this.select == "Morning") {
                this.choice = transportFee(this.select)
            } else if (this.select == "Afternoon") {
                this.choice = transportFee(this.select) 
            } else {
                this.choice = transportFee(this.select)
            }
        }
 }
 })
 })