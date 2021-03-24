<template>
    <div>
        <b-card>
            <span class="span-title">لا توجد دعوات</span>
        </b-card>

        <b-card class="users">
            <span class="span-title">الاشخاص الذين قد تعرفهم وقد يعملون لدى Enjaz LLC</span>


            <div class="persons">

                <ul class="person ul">
                <center>
                    
                    <li class="person li" v-for="suggestion in suggestions" :key="suggestion.name">
                        <div class="info">
                            <div class="cover">
                            <img :src="suggestion.img" class="avatar">
                            </div>
                            <br><br>
                            <span class="name" v-text="suggestion.name"></span>
                            <p class="job" v-text="suggestion.job"></p>
                        </div>
                            <b-button variant="outline-primary plus">تواصل</b-button>
                    </li>
                </center>

                </ul>


            </div>

        </b-card>

    </div>
</template>


<script>

export default ({
    data() {
        return {
            suggestions: this.$store.state.suggestions,
        }
    },
})
</script>


<style scoped>
.avatar {
    width: 5pc;
    border-radius: 100%;
    margin-top: 1pc;
}
.cover {
    background-image: url(https://static-exp1.licdn.com/sc/h/cpemy7gsm8bzfb5nnbbnswfdm);
    background-position: center;
    background-size: 462px;
    height: 4pc;
    border-radius: 10px 10px 0px 0px;
}
.persons {
    float: right;
}
.job {
    font-size: 11px;
    color: #616161;
}
.card-body {
    text-align: right;
}
.card {
    margin-bottom: 1pc;
    border-radius: 1pc;
}
.person.ul {
        float: right;
    width: 100%;
    padding: 0;
}
.person.li {
    width: 10pc;
    text-align: center;
    height: 15pc;
    background: #f9f9f9;
    border-radius: 9px;
    transition: 0.5s;
    box-shadow: 0px 0px 5px 0px #d4d4d4;
    display: inline;
    float: left;
    margin: 5px;
}
.name {
    font-weight: 700;
}
.plus {
    width: 85%;
    border-radius: 11px;
    border: 1px solid #0274b3;
    color: #0274b3;
}
.plus:hover {
    color :#fff; 
}
</style>