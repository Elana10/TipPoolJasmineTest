describe('Payments JS should work', function () {

    it('should increase paymentID by 1 only if data is added', function(){
        submitPaymentInfo();
        expect(paymentId).toEqual(0);
    })

    it('should return an object with billAmt, tipAmt, and tipPercent', function(){
        billAmtInput.value =40;
        tipAmtInput.value = 10;
        expect(createCurPayment()).toEqual({billAmt: '40', tipAmt: '10', tipPercent: 25})
    })

    it('should add one row to the body', function(){
        curPayment = {billAmt: '40', tipAmt: '10', tipPercent: 25}
        paymentId = 1;
        appendPaymentTable(curPayment);
        expect(paymentTbody.rows.length).toEqual(1);
        row = document.getElementById("payment1");
        row.remove();
    })

    it('should update Summary' ,function (){
        allPayments = {
            payment1: {
            billAmt : '40',
            tipAmt : '10',
            tipPercent : 25}
        }
        updateSummary();
    expect(summaryTds[1].innerHTML).toEqual("$10") ;   

    })


    afterEach(function(){
        allPayments = {};
        paymentId = 0;
        billAmtInput.value =0;
        tipAmtInput.value = 0;
        
    })
})