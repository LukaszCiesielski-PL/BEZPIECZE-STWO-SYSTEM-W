const alphabetDecrypt = "a,ą,b,c,ć,d,e,ę,f,g,h,i,j,k,l,ł,m,n,ń,o,ó,p,q,r,s,ś,t,u,v,w,x,y,z,ź,ż".split(',');

const Decrypt = document.querySelector(".Decrypt");
const buttonDecrypt = document.querySelector("#btnDecrypt");

const alphabetDec = (lett) => {
    for (let i = 0; i < alphabetDecrypt.length; i++) {
      if (alphabetDecrypt[i] == lett) return i;
    }
  };

  buttonDecrypt.addEventListener('click', () => {
    let decrypted = [];
    const toDecrypt = document.querySelector('#textDecrypt').value.trim().replace(/\s+/g, '').toLocaleLowerCase();
    const word = document.querySelector('#shiftDecrypt').value.trim().replace(/\s+/g, '').toLocaleLowerCase();
    const result = document.querySelector('#resultDecrypt');
    
    let j = 0;
    for (let i = 0; i < toDecrypt.length; i++) {
      decrypted += alphabetDecrypt[(alphabetDec(toDecrypt[i]) - alphabetDec(word[j]) + 35) % 35];
      j = (j + 1) % word.length;
    }
  
    result.value = decrypted.toString();
  });