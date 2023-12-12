function Sum() {
    
    function sumPairs(n) {
        let sum = 0;
      
        for (let i = 0; i < n.length; i++) {
          if (n[i] % 2 === 0) {
         sum += n[i];
          }
        }
      
        return sum;
      }
      
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const resultado = sumPairs(numbers);
      
    return (
        <p 
            style={{margin: '10px 0'}}
        >
            Soma: {resultado}
        </p>
    )
};

export default Sum;