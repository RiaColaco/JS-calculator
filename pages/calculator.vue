<template>
    <div>
      <h1>Welcome to the homepage</h1>
      <div id="bg-0" class="bg-item" style="top: 0; right: 0; bottom: 0; left: 0;">
  <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="0.4375" width="100%" height="100%" fill="#AB61E4"/>
  </svg>
</div>

<div class="calculator">
    <div class="display">{{ current  || '0'}}</div>
    <div class="btn" @click="clear">C</div>
    <div class="btn" @click="sign">+/-</div>
    <div class="btn" @click="percent">%</div>
    <div class="btn operator" @click="divide">÷</div>
    <div @click="append('7')" class="btn">7</div>
    <div @click="append('8')" class="btn">8</div>
    <div @click="append('9')" class="btn">9</div>
    <div class="btn operator" @click="times">x</div>
    <div @click="append('4')" class="btn">4</div>
    <div @click="append('5')" class="btn">5</div>
    <div @click="append('6')" class="btn">6</div>
    <div class="btn operator" @click="minus">-</div>
    <div @click="append('1')" class="btn">1</div>
    <div @click="append('2')" class="btn">2</div>
    <div @click="append('3')" class="btn">3</div>
    <div class="btn operator" @click="plus">+</div>
    <div @click="append('0')" class="btn zero">0</div>
    <div class="btn" @click="dot">.</div>
    <div class="btn operator" @click="equal">=</div>

</div>


    </div>
  </template>

  <script setup>
  var prev = ref(null);
  var current = ref('');
  var operator = ref(null);
  var operatorClicked  = ref(false)

  function clear(){
    current.value = ''
  }
  function sign(){
    current.value = current.value.charAt(0) === '-' ? current.value.slice(1) : `-${current.value}`
  }

  function percent(){
    current.value = `${parseFloat(current.value)/100}`;
  }

  function append(number){
    if(operatorClicked.value){
        current.value = '';
        operatorClicked.value = false;
    }
    current.value = `${current.value}${number}`
  }

  function dot(){
    if(current.value.indexOf('.') === -1){
        append('.')
    }
  }

  function setPrev(){
    prev.value = current.value;
    operatorClicked.value = true;
  }

  function divide(){
    operator.value = (a,b) => a/b;
    setPrev(); 
  }

  function times(){
    operator.value = (a,b) => a*b;
    setPrev();
  }

  function minus(){
    operator.value = (a,b) => a-b;
    setPrev();
  }

  function plus(){
    operator.value = (a,b) => a+b;
    setPrev();
  }

  function equal(){
    current.value = `${operator.value(parseFloat(prev.value), parseFloat(current.value))}`
    prev.value = null;
  }
</script>

  <style lang="scss">
.calculator{
    width: 400px;
    margin: 0 auto;
    font-size: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px auto);
}
.display{
    grid-column: 1/5;
    background-color: #333;
    color: white
}
.zero{
    grid-column: 1/3;
}
.btn{
    background-color: #f3f3f3;
    border: 1px solid #999;
}
.operator{
    background-color: orange;
    color: white;
}
</style>