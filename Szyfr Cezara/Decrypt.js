const alphabetDecrypt = "a,ą,b,c,ć,d,e,ę,f,g,h,i,j,k,l,ł,m,n,ń,o,ó,p,q,r,s,ś,t,u,v,w,x,y,z,ź,ż".split(',');

const Decrypt = document.querySelector(".Decrypt");
const buttonDecrypt = document.querySelector("#btnDecrypt");

buttonDecrypt.addEventListener("click", () =>{
    let Decrypted = [];
    const toDecrypt = document.querySelector("#textDecrypt").value.trim().replace(/\s+/g,'').toLocaleLowerCase();
    const shift =  parseInt( document.querySelector("#shiftDecrypt").value );
    const result = document.querySelector("#resultDecrypt");

    for(let i = 0; i < toDecrypt.length; i++)
    {
        let currentElement = alphabetDecrypt.indexOf(toDecrypt[i]);
        let newElement = (currentElement-shift)%35;
        if( newElement < 0)
            newElement += 35;
        Decrypted.push(alphabetDecrypt[newElement]);
    }

    result.value = Decrypted.toString().replaceAll(',', '');
});