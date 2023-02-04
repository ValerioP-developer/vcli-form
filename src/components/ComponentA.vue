    <template>
            <div>
                    <h1> Component-AAAA  </h1>
                    <h1>  {{color}} </h1>
            </div>
    </template>
    
    <script>
    export default{
     name :'ComponentA',
     data(){
        return {
             vartest:'white'
        }
     },
     //you need to pass the property from outside there is no value here
     props:{
        color: String
     }
    }
    </script>
    <!-- with scoped you can only have the style on the related component not globally -->
    <style scoped>
    div{
        background-color: red ;
    }
    </style>