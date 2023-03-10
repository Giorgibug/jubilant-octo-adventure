function random(num) {
    if (num % 2 === 0){
       return true
    }else {
       return false
    }
  }
  console.log(random(10))
  
  
  function rectangle(length, width){
      return (width + length) * 2
  }
  console.log(rectangle(10, 18))
  

  function square(side){
      return 10 * side
  }
  console.log(square(10))
  

  function randomNumber() {
      return Math.floor(Math.random() * 100)
  }
  console.log(randomNumber())
  

  function getCurrencySymbol(curr){
      let symbol;
      switch (curr) {
          case 'USD':
              symbol = '$';
              break;
          case 'EUR':
              symbol = '€';
              break
          case 'GEL':
              symbol = '₾'
              break
          default:
              symbol = 'ERROR';
              break
      }
      return symbol
  }
  
  console.log(getCurrencySymbol())
  
  let people = [
      {
          name: 'tako',
          age: 39
      },
      {
          name: 'salo',
          age: 21
      },
      {
          name: 'likiki',
          age: 25
      },
      {
          name: 'varlam',
          age: 29
      },
      {
          name: 'maka',
          age: 31
      }
  ]
  
  function findYoungest(arr){
      let youngest = arr[0]
      for (let i = 1 ; i < arr.length; i++){
          if (arr[i].age < youngest.age) {
              youngest = arr[i]
          }
      }
      return youngest
  }
  console.log(findYoungest(people))