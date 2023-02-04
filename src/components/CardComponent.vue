    <template>
    <div class="card">
            <img src="@/assets/logo.svg" alt="Avatar" style="width:60%">
            <div class="container">
                <h4><b>John Doe</b></h4> 
                <p>Architect & Engineer</p> 
            </div>
    </div>
    </template>
    <script>
    export default{
     name :'CardComponent',
     data(){
        return {
             vartest:'white'
        }
     }
    }
    </script>
    <!-- with scoped you can only have the style on the related component not globally -->
    <style scoped>
        .card {
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
                width: 25%;
        }
        .card:hover {
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
        .container {
                padding: 2px 16px;
        }

    </style>