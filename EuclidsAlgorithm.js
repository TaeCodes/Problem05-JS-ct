class EuclidsAlgorithm {
    gcd(a, b){
        let divisor = -1;

        //Algorithm:
        //If A = 0 then GCD(A,B)=B, since the GCD(0,B)=B, and we can stop.  
        //If B = 0 then GCD(A,B)=A, since the GCD(A,0)=A, and we can stop.  
        //Else GCD(B,A%B)
    
if(a===0){
    console.log(b);
    return b;
}else if (b===0){
    console.log(a);
    return a;
}else{
    console.log(this.gcd(b,a%b));
    return this.gcd(b,a%b);
}


        return divisor;
    }
}

module.exports = EuclidsAlgorithm;