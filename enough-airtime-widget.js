document.addEventListener('alpine:init', () => {
    Alpine.data('enoughAirtimeWidget', function() {
     return {
        showMessage: false,
        str: '',
        amount: '',
        result: '',

        calculateFunc() {
            this.result = enoughAirtime(this.str, this.amount);
        }
 }
 })
 })