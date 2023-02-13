
document.getElementById('btn-deposit').addEventListener('click', function () {
    const yourDepo = getValueFromField('deposit-field');
    const preDep = getValueFromElements('deposit-money');
    if (isNaN(yourDepo)) {
        alert('Sodik number  dee bedaaaa...🤑🤑🤑...')
        return;
    }
    const totaldepo = yourDepo + preDep;
    setValueToElements('deposit-money', totaldepo)


    const preBalance = getValueFromElements('balance');
    const totaleBalance = preBalance + yourDepo;
    setValueToElements('balance', totaleBalance);
})





document.getElementById('btn-withdraw').addEventListener('click',function () {
    const yourWithdraw = getValueFromField('withdraw-field');
    const preWithdraw = getValueFromElements('withdraw-money');
    if (isNaN(yourWithdraw)) {
        return alert('Sodik number  dee bedaaaa...🤑🤑🤑...')
    }


    const totalWithdraw = yourWithdraw + preWithdraw;
    setValueToElements('withdraw-money', totalWithdraw);

    const preBalance = getValueFromElements('balance');
    if (preBalance < yourWithdraw) {
        return alert('Tor Baper Bank e Ato taka nai foiniii..😤😟😤.')
    }
    const newtotaleBalance = preBalance - yourWithdraw;
    setValueToElements('balance', newtotaleBalance);


})