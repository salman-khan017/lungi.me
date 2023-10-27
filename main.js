function likeFun() {
    let like = document.querySelector('.container');
    let heart = document.querySelector('.heart');
    heart.style.color = 'rgb(253, 31, 79)'
    like.classList.add('anime');
    setTimeout(timeOut, 2000);
};
function timeOut(){
    let like = document.querySelector('.container');
    like.classList.remove('anime');
};
function convert(){
    let requst = document.querySelector('.input-filde');
    let requstV = Number(requst.value);
    document.querySelector('.result').innerHTML = `${requstV.toString(2)}`;

    historyElement1()
    
    if(document.querySelector('.result').innerHTML === "NaN"){
        let spam = document.querySelector('.spam-box');
        spam.classList.add('spam-popup');
        setTimeout(wrong, 5000)
    }else if (document.querySelector('.result').innerHTML === "0"){
        let nowrite = document.querySelector('.nowrite-box');
        nowrite.classList.add('yes-write');
        setTimeout(yesWrite, 5000);
    }else{
        let caret = document.querySelector('.result-box');
        let progress = document.querySelector('.timer');
        progress.classList.add('progress-line');
        caret.classList.add('result-popup');
        setTimeout(ok, 9000);
        setTimeout(progressRemove, 9000);
    };
};

function convertOctal(){
    let requst = document.querySelector('.input-filde-octal');
    let requstV = Number(requst.value);
    document.querySelector('.result').innerHTML = `${requstV.toString(8)}`;

    historyElement2() 

    if(document.querySelector('.result').innerHTML === "NaN"){
        let spam = document.querySelector('.spam-box');
        spam.classList.add('spam-popup');
        setTimeout(wrong, 5000)
    }else if (document.querySelector('.result').innerHTML === "0"){
        let nowrite = document.querySelector('.nowrite-box');
        nowrite.classList.add('yes-write');
        setTimeout(yesWrite, 5000);
    }else{
        let caret = document.querySelector('.result-box');
        let progress = document.querySelector('.timer');
        progress.classList.add('progress-line');
        caret.classList.add('result-popup');
        setTimeout(ok, 9000);
        setTimeout(progressRemove, 9000);
    };
};

function convertHex(){
    let requst = document.querySelector('.input-filde-hex');
    let requstV = Number(requst.value);
    document.querySelector('.result').innerHTML = `${requstV.toString(16)}`;

    historyElement3()
    
    if(document.querySelector('.result').innerHTML === "NaN"){
        let spam = document.querySelector('.spam-box');
        spam.classList.add('spam-popup');
        setTimeout(wrong, 5000)
    }else if (document.querySelector('.result').innerHTML === "0"){
        let nowrite = document.querySelector('.nowrite-box');
        nowrite.classList.add('yes-write');
        setTimeout(yesWrite, 5000);
    }else{
        let caret = document.querySelector('.result-box');
        let progress = document.querySelector('.timer');
        progress.classList.add('progress-line');
        caret.classList.add('result-popup');
        setTimeout(ok, 9000);
        setTimeout(progressRemove, 9000);
    };
};


function ok() {
    let caret = document.querySelector('.result-box');
    caret.classList.remove('result-popup');
}
function wrong() {
    let caret = document.querySelector('.spam-box');
    caret.classList.remove('spam-popup');
}
function yesWrite() {
    let nowrite = document.querySelector('.nowrite-box');
        nowrite.classList.remove('yes-write');
}
function progressRemove() {
    let progress = document.querySelector('.timer');
        progress.classList.remove('progress-line');
}
function moodDown() {
    let move = document.querySelector('.fa-caret-right');
    let moon = document.querySelector('.mood-item');
        move.classList.add('rotate');
        moon.classList.add('mood-item-after');
};
function moodUp() {
    let move = document.querySelector('.fa-caret-right');
    let moon = document.querySelector('.mood-item');
        move.classList.remove('rotate');
        moon.classList.remove('mood-item-after');
};
function moon() {
    let chad = document.querySelector('.fa-moon')
    let suraj = document.querySelector('.fa-sun')
    suraj.style.color = '#fff';
    chad.style.color ='#92C9F0';
    darkMood();
};
function sun() {
    let chad = document.querySelector('.fa-moon')
    let suraj = document.querySelector('.fa-sun')
    suraj.style.color = '#F37C08'
    chad.style.color ='#fff'
    brightMood()
};


function active1() {
    let link1 = document.querySelector('.link1');
    let link2 = document.querySelector('.link2');
    let link3 = document.querySelector('.link3');
    let link4 = document.querySelector('.link4');
    let link5 = document.querySelector('.link5');
    link1.classList.add('active');
    link2.classList.remove('active');
    link3.classList.remove('active');
    link4.classList.remove('active');
    link5.classList.remove('active');
    let mainSection = document.querySelector('.main-input-section');
    let mainSectionO = document.querySelector('.main-input-section-octal');
    let mainSectionH = document.querySelector('.main-input-section-hex');
    let innerCode = document.querySelector('.inner-code');
    let help = document.querySelector('.help');
    mainSection.classList.add('main-input-all');
    mainSectionO.classList.remove('octal-scale');
    mainSectionH.classList.remove('hex-scale');
    innerCode.classList.remove('inner-scale');
    help.classList.remove('help-scale');
};
function active2() {
    let link1 = document.querySelector('.link1');
    let link2 = document.querySelector('.link2');
    let link3 = document.querySelector('.link3');
    let link4 = document.querySelector('.link4');
    let link5 = document.querySelector('.link5');
    link1.classList.remove('active');
    link2.classList.add('active');
    link3.classList.remove('active');
    link4.classList.remove('active');
    link5.classList.remove('active');
    let mainSection = document.querySelector('.main-input-section');
    let mainSectionO = document.querySelector('.main-input-section-octal');
    let mainSectionH = document.querySelector('.main-input-section-hex');
    let innerCode = document.querySelector('.inner-code');
    let help = document.querySelector('.help');
    mainSection.classList.remove('main-input-all');
    mainSectionO.classList.add('octal-scale');
    mainSectionH.classList.remove('hex-scale');
    innerCode.classList.remove('inner-scale');
    help.classList.remove('help-scale');
};

function active3() {
    let link1 = document.querySelector('.link1');
    let link2 = document.querySelector('.link2');
    let link3 = document.querySelector('.link3');
    let link4 = document.querySelector('.link4');
    let link5 = document.querySelector('.link5');
    link1.classList.remove('active');
    link2.classList.remove('active');
    link3.classList.add('active');
    link4.classList.remove('active');
    link5.classList.remove('active');
    let mainSection = document.querySelector('.main-input-section');
    let mainSectionO = document.querySelector('.main-input-section-octal');
    let mainSectionH = document.querySelector('.main-input-section-hex');
    let innerCode = document.querySelector('.inner-code');
    let help = document.querySelector('.help');
    mainSection.classList.remove('main-input-all');
    mainSectionO.classList.remove('octal-scale');
    mainSectionH.classList.add('hex-scale');
    innerCode.classList.remove('inner-scale');
    help.classList.remove('help-scale');
};

function active4() {
    let link1 = document.querySelector('.link1');
    let link2 = document.querySelector('.link2');
    let link3 = document.querySelector('.link3');
    let link4 = document.querySelector('.link4');
    let link5 = document.querySelector('.link5');
    link1.classList.remove('active');
    link2.classList.remove('active');
    link3.classList.remove('active');
    link4.classList.add('active');
    link5.classList.remove('active');
    let mainSection = document.querySelector('.main-input-section');
    let mainSectionO = document.querySelector('.main-input-section-octal');
    let mainSectionH = document.querySelector('.main-input-section-hex');
    let innerCode = document.querySelector('.inner-code');
    let help = document.querySelector('.help');
    mainSection.classList.remove('main-input-all');
    mainSectionO.classList.remove('octal-scale');
    mainSectionH.classList.remove('hex-scale');
    innerCode.classList.add('inner-scale');
    help.classList.remove('help-scale');
};

function active5() {
    let link1 = document.querySelector('.link1');
    let link2 = document.querySelector('.link2');
    let link3 = document.querySelector('.link3');
    let link4 = document.querySelector('.link4');
    let link5 = document.querySelector('.link5');
    link1.classList.remove('active');
    link2.classList.remove('active');
    link3.classList.remove('active');
    link4.classList.remove('active');
    link5.classList.add('active');
    let mainSection = document.querySelector('.main-input-section');
    let mainSectionO = document.querySelector('.main-input-section-octal');
    let mainSectionH = document.querySelector('.main-input-section-hex');
    let innerCode = document.querySelector('.inner-code');
    let help = document.querySelector('.help');
    mainSection.classList.remove('main-input-all');
    mainSectionO.classList.remove('octal-scale');
    mainSectionH.classList.remove('hex-scale');
    innerCode.classList.remove('inner-scale');
    help.classList.add('help-scale');
};

function historyOpen() {
    let historyBox = document.querySelector('.history-container');
    historyBox.classList.add('history-container-add');
}
function historyClose() {
    let historyBox = document.querySelector('.history-container');
    historyBox.classList.remove('history-container-add');
}

function historyElement1() {
    let requst = document.querySelector('.input-filde');
    let requstV = Number(requst.value);
    let historyBox = document.querySelector('.history1');
    historyBox.innerHTML = `<span class="user-input">${requstV}</span>
                    <span class="number-system"><i class="fa-brands fa-bitcoin"></i></span>
                    <span class="pro-output">${requstV.toString(2)}</span>`
}

function historyElement2() {
    let requst = document.querySelector('.input-filde-octal');
    let requstV = Number(requst.value);
    let historyBox = document.querySelector('.history2');
    historyBox.innerHTML = `<span class="user-input">${requstV}</span>
                    <span class="number-system"><i class="fa-solid fa-draw-polygon"></i></span>
                    <span class="pro-output">${requstV.toString(8)}</span>`
}

function historyElement3() {
    let requst = document.querySelector('.input-filde-hex');
    let requstV = Number(requst.value);
    let historyBox = document.querySelector('.history3');
    historyBox.innerHTML = `<span class="user-input">${requstV}</span>
                    <span class="number-system"><i class="fa-brands fa-hackerrank"></i></span>
                    <span class="pro-output">${requstV.toString(16)}</span>`
}


function darkMood() {
    let allSection = document.querySelector('.main-input-section')
    let allSection2 =  document.querySelector('.main-input-section-octal')
    let allSection3 =  document.querySelector('.main-input-section-hex')
    let allSection4 =  document.querySelector('.inner-code')
    let allSection5 =  document.querySelector('.help')

    allSection.style.backgroundColor = '#2e2e2e'
    allSection2.style.backgroundColor = '#2e2e2e'
    allSection3.style.backgroundColor = '#2e2e2e'
    allSection4.style.backgroundColor = '#2e2e2e'
    allSection5.style.backgroundColor = '#2e2e2e'
}

function brightMood() {
    let allSection = document.querySelector('.main-input-section')
    let allSection2 =  document.querySelector('.main-input-section-octal')
    let allSection3 =  document.querySelector('.main-input-section-hex')
    let allSection4 =  document.querySelector('.inner-code')
    let allSection5 =  document.querySelector('.help')

    allSection.style.backgroundColor = '#fff'
    allSection2.style.backgroundColor = '#fff'
    allSection3.style.backgroundColor = '#fff'
    allSection4.style.backgroundColor = '#fff'
    allSection5.style.backgroundColor = '#fff'
}


function sideShow() {
    let list = document.querySelector('.side-bar');

    list.classList.add('side-bar-show');
}

function sideHide() {
    let list = document.querySelector('.side-bar');

    list.classList.remove('side-bar-show');
}

// ---------Time and Date function------------

function allTime(){

function bdTime(){
    let time = document.querySelector('.time');
    
    time.innerHTML = new Date().toLocaleTimeString();
};
bdTime()
function bdDate() {
    let tarik = document.querySelector('.tarik');

    tarik.innerHTML = new Date().toLocaleDateString();
}
bdDate()
};

setInterval(allTime, 1000);

// ---------Time and Date function------------

