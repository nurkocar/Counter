const headingElement = document.getElementsByClassName('heading');
const value = document.querySelector('#value');
const btnElements = document.querySelectorAll('.btn');

let count = 0;
//parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
// let newFontSize = parseFloat(getComputedStyle(h1).fontSize);

btnElements.forEach(btn =>{
    btn.addEventListener('click', function(){

        

        if (btn.className.includes('decrease')){
            count--;
            // newFontSize--;            
        }
        else if (btn.className.includes('increase')){
            count++;
            // newFontSize++; 
        }
        else{
            count = 0;
            // newFontSize = '32px';
        }

        if (count > 0){
            value.style.color = 'green';
        }
        else if (count < 0){
            value.style.color = 'red';
        }
        else{
            value.style.color = 'black';
        }

        value.textContent = count;
        // h1Element.style.fontSize = `${newFontSize}px`;

    });
})