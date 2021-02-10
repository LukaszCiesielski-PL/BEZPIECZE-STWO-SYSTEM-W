const alphabetEncrypt = "a,ą,b,c,ć,d,e,ę,f,g,h,i,j,k,l,ł,m,n,ń,o,ó,p,q,r,s,ś,t,u,v,w,x,y,z,ź,ż".split(',');

const Encrypt = document.querySelector(".Encrypt");
const buttonEncrypt = document.querySelector("#btnEncrypt");

const alphabet = (lett) => {
    for (let i = 0; i < alphabetEncrypt.length; i++) {
      if (alphabetEncrypt[i] == lett) return i;
    }
  };

buttonEncrypt.addEventListener('click', () => {
    let encrypted = [];
    const toEncrypt = document.querySelector('#textEncrypt').value.trim().replace(/\s+/g, '').toLocaleLowerCase();
    const word = document.querySelector('#shiftEncrypt').value.trim().replace(/\s+/g, '').toLocaleLowerCase();
    const result = document.querySelector('#resultEncrypt');
  
    for (let i = 0; i < toEncrypt.length; i++) {
      const index = i % word.length;
      const shiftVertical = alphabet(word[index]);
      const shiftHorizontal = alphabet(toEncrypt[i]);
      encrypted += alphabetEncrypt[(shiftVertical + shiftHorizontal) % alphabetEncrypt.length];
    }
  
    result.value = encrypted.toString();
  });