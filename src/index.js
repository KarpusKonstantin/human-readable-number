module.exports = function toReadable (number) {
    let str = '';
    let numberAsText1 = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
    let numberAsText2 = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let numberAsText3 = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    let n_sotni = Math.trunc(number / 100);

    let n_desyatki = number - n_sotni * 100;
    n_desyatki = Math.trunc(n_desyatki / 10);

    let n_edinitsa = number - (n_sotni * 100) - (n_desyatki * 10);

    //console.log('100 = ',n_sotni, '10 = ',n_desyatki, '1 = ', n_edinitsa);

    if (number === 0) { return 'zero'};

    if (n_sotni > 0) {
        str = str + numberAsText1[Math.trunc(n_sotni)] + ' hundred ';
    }

    if (n_desyatki === 0) {
        if (n_edinitsa !== 0) {
            str = str + numberAsText1[n_edinitsa] + ' ';
        }
    } else if (n_desyatki === 1) {
        str = str + numberAsText2[n_edinitsa] + ' ';
    }
    else {
        str = str + numberAsText3[n_desyatki - 2] + ' ';
        if (n_edinitsa !== 0) {
            str = str + numberAsText1[n_edinitsa] + ' ';
        }
    }


    //console.log(str);
    return str.trim();

}
