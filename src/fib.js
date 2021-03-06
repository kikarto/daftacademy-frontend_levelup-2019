

let fib = function(num, ...arg){
    let result = [];
    
    let gen = (n)=>{
        if(n == 0 || n == 1)
            return n;
        else
            return gen(n - 1) + gen(n - 2);
    };
    
    if(typeof num !== 'undefined' && Number.isInteger(num) && num >= 0){
        let i = 0;
        do{
            result.push(gen(i));
            i++;
        }
        while(i < num);
    }
    return result;
}

module.exports = fib;