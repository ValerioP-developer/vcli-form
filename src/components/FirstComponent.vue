<template>
    <div>
  <h1> First Component  </h1>
  <h1>  {{vartest}} </h1>
  <button @click="vartest='yellow'"> Change </button>
</div>
</template>

<script>
export default{
 name :'FirstComponent',
 data(){
    return {
         vartest:'white'
    }
 }
}
</script>

<style>
div{
    border: 1px solid #000 ;
}
</style>