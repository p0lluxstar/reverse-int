module.exports = function reverse (n) {
    let arr = [];
    let rever = '';
  
    for (let i = 0; i < String(n).length; i++){
      if(Number(String(n)[i]) >= 0 ){
          arr[i] = String(n)[i];
      };
    };
  
    arr.reverse().forEach(el => { //метод reverse() позволяет обратить порядок следования элементов массива
      rever += el;
    });

    return Number(rever);
};