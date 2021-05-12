let app = new Vue({
    el: '#app',
    template: "#template",
    data: {
        item: true,
        checked: [],
        inputValue: '',
        list: [
            {
                id: 1,
                name: 'iPhone 7',
                price: 6188,
                count: 1,
                value: "css"
            },
            {
                id: 2,
                name: 'iPad',
                price: 5888,
                count: 1,
                value: "html"
            },
            {
                id: 3,
                name: 'MacBook',
                price: 21488,
                count: 1,
                value: "js"
            }
        ]
    },
    // data: {
    //     list: [
    //         [
    //             {
    //                 id: 1,
    //                 name: 'iPhone 7',
    //                 price: 6188,
    //                 count: 1
    //             },
    //             {
    //                 id: 2,
    //                 name: 'iPad',
    //                 price: 5888,
    //                 count: 1
    //             },
    //             {
    //                 id: 3,
    //                 name: 'MacBook',
    //                 price: 21488,
    //                 count: 1
    //             }
    //         ],
    //         [
    //             {
    //                 id: 1,
    //                 name: 'headphone',
    //                 price: 188,
    //                 count: 1
    //             },
    //             {
    //                 id: 2,
    //                 name: 'pen',
    //                 price: 8,
    //                 count: 1
    //             },
    //             {
    //                 id: 3,
    //                 name: 'book',
    //                 price: 88,
    //                 count: 1
    //             }
    //         ],
    //         [
    //             {
    //                 id: 1,
    //                 name: 'apple',
    //                 price: 18,
    //                 count: 1
    //             },
    //             {
    //                 id: 2,
    //                 name: 'banana',
    //                 price: 28,
    //                 count: 1
    //             },
    //             {
    //                 id: 3,
    //                 name: 'strawberry',
    //                 price: 48,
    //                 count: 1
    //             }
    //         ],
    //     ]
    // },
    computed: {
        totalPrice: function() {
            let total = 0;
            for (let i = 0; i<this.list.length; i++) {
                let item = this.list[i];
                // if(~this.checked.indexOf(item.value))
                total += item.price*item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    methods: {
        handleReduce: function (index) {
            if (this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd: function (index) {
            this.list[index].count++;
        },
        handleRemove: function (index) {
            this.list.splice(index, 1);
        },
        handCheckboxClick(index){

        }
    }
})