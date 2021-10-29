//สร้สงตัวแปนเพื่ออ้างอิงไปยังตำแหน่งตอนเทนต์ใน html
let money = document.getElementById('money');
let person = document.getElementById('person');
let btnCal = document.getElementById('btnCal');
let btnCancel = document.getElementById('btnCancel');
let result = document.getElementById('result');

//event click btnCal

btnCal.addEventListener('click', () => {
    //alert(money.value)
    //result.innerHTML = 'wow wow wow'
    if (money.value.trim().length == 0) {
        alert('ป้อนเงินด้วย')
    } else if (person.value.trim().length == 0) {
        alert('ป้อนคนด้วย')
    }else{
        let moneyshare = Number(money.value) / Number(person.value) 
        result.innerHTML = moneyshare.toFixed(2)

    }

})
btnCancel.addEventListener('click', () => {
    //alert(person.value)
    money.value = ''
    person.value = ''
    result.innerHTML = '0.00'
})