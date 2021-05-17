const app = new Vue({
    el: "#app",
    data: {
        doingList:[],
        doneList:[],
        something: '',
        id: 0,

    },

    methods: {

        input(){
            this.doingList.push({content:this.something, flag:false, id: this.id+=1})
            this.something=''
        },
        todoClick(id){
            console.log('todo'+id)
            this.doneList.push({content:this.doingList.splice(id,1)[0].content, flag:true})
        },
        doneClick(id){
            console.log('done'+id)
            this.doingList.push({content:this.doneList.splice(id,1)[0].content, flag:false})
           
        },
        todoClear(id){
            this.doingList.splice(id,1)
        },
        doneClear(id){
            this.doneList.splice(id,1)
        },
    },
    computed: {
        todoCount(){
            return this.doingList.length
        },
        doneCount(){
            return this.doneList.length
        }
    }
})