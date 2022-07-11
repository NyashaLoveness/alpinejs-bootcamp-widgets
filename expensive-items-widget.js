document.addEventListener('alpine:init', () => {
    Alpine.data('expensiveItemsWidget', function() {
     return {
        showMessage: false,
        name: " ",
        qty: " ",
        quantityCheck: [],
        results: " ",
 
        createObj () {
         this.quantityCheck.push("name: " + this.name + ", qty: " + this.qty)
         console.log(this.quantityCheck)
         },
 
         showItems() {
             this.results = findItemsOver20(this.quantityCheck)
         }
 }
 })
 })