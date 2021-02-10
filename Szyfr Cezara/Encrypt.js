const alphabetEncrypt = "a,ą,b,c,ć,d,e,ę,f,g,h,i,j,k,l,ł,m,n,ń,o,ó,p,q,r,s,ś,t,u,v,w,x,y,z,ź,ż".split(',');

const Encrypt = document.querySelector(".Encrypt");
const buttonEncrypt = document.querySelector("#btnEncrypt");


buttonEncrypt.addEventListener("click", () =>{
    let encrypted = [];
    const toEncrypt = document.querySelector("#textEncrypt").value.trim().replace(/\s+/g,'').toLocaleLowerCase();
    const shift =  parseInt( document.querySelector("#shiftEncrypt").value );
    const result = document.querySelector("#resultEncrypt");

    for(let i = 0; i < toEncrypt.length; i++)
    {
        let currentElement = alphabetEncrypt.indexOf(toEncrypt[i]);
        let newElement = (currentElement+shift)%35;
        encrypted.push(alphabetEncrypt[newElement]);
    }

    result.value = encrypted.toString().replaceAll(',', '');
});