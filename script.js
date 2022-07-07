function change() {   
  const answers = {
    firstAnswer: ['yes', 'no', 'Signs point to yes', 'Very doubtful', 'My sources say no', 'Better not tell you now'],
    secondAnswer: ['It is a joke)', 'it is 100% true', 'it is not accurate']
  }
  document.getElementById("answer").innerHTML=`My answer: ${answers.firstAnswer[Math.floor(Math.random() * answers.firstAnswer.length)]}.`    
  document.getElementById("secondAnswer").innerHTML=`Second answer: ${answers.secondAnswer[Math.floor(Math.random() * answers.secondAnswer.length)]}.`
}
  

