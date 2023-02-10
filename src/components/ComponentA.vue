    <template>
            <div>
                    <h1> Component-AAAA  </h1>
                    <h1>  {{color}} </h1>
                    <button @click="reset">RESET</button>
            </div>
    </template>
    
    <script>
    export default{
        name :'ComponentA',
        color:'red',
        data(){
                return {
                vartest:'white'
                }
        },
        methods:{
                reset(){
                        this.color = "Green" ;
                        this.$emit( 'resetEvent' , this.color );
                }
        },
        //you need to pass the property from outside there is no value here
        props:{
               /*
                'color': {
                        type :String ,
                        default : 'Celeste'  
                }*/
        }
    }
    </script>
    <!-- with scoped you can only have the style on the related component not globally -->
    <style scoped>
    div{
        background-color: red ;
    }
    </style>