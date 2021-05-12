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
            for(let item of this.doingList){
                if(item.id == id && !item.flag){
                    let index = this.doingList.indexOf(item)
                    this.doneList.push({content:this.doingList.splice(index,1)[0].content,flag:!item.flag})
                }
            }
        },
        doneClick(id){
            console.log('done'+id)
            for(let item of this.doneList){
                if(item.id == id && item.flag){
                    let index = this.doneList.indexOf(item)
                    this.doingList.push({content:this.doneList.splice(index,1)[0].content,flag:!item.flag})
                }
            }
           
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