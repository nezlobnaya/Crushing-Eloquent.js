function countBs(str) {
    /*let count = 0;
     for (let i = 0; i < str.length; i++) {
       if (str[i] === "B")
       count ++;
     }
     return count;*/
     return(countChar(str,'B'));
   }
   
   function countChar(str, char) {
     let count = 0;
     for (let i = 0; i < str.length; i++) {
       if (str[i] === char)
       count ++;
     }
     return count;
   }