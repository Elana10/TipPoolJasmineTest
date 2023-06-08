
describe("Helpers test", function () {

 it ('Should sum payments and return sum', function(){
 allPayments = {
    payment1: {billAmt: '36', tipAmt: '2', tipPercent: '.02'}
 }
 expect(sumPaymentTotal('tipAmt')).toEqual(2);

 })


 it('should calculate tip percent', function () {
  expect(calculateTipPercent(100,10)).toEqual(10);
 })

 it('should add values to one table row', function (){
  let tableRow = document.createElement('tr');
  appendTd(tableRow,8);
  expect(tableRow.cells.length).toEqual(1);
 })

 afterEach( function() {
  allPayments = {};

 })

});