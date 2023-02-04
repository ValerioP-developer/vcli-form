    <template>
            <div>
                    <h1> Component-BBB </h1>
                    <h1>  {{vartest}} </h1>
                    <button @click="vartest='yellow'"> Change </button>
            </div>
    </template>
    
    <script>
    export default{
     name :'ComponentA',
     data(){
        return {
             vartest:'white'
        }
     }
    }
    </script>
    <!-- with scoped you can only have the style on the related component not globally -->
    <style scoped>
    div{
        background-color: red ;
    }
    </style>