var vm = new Vue({
    el: "#app",

    data: {
        title: "hello Vue",
        productList: [],
        totlaMoney: 0,
        checkAll : false
    },

    filters: {
        formatMoney: function (value) {
            return '￥' + value.toFixed(2);
        }
    },

    mounted: function () {
        this.$nextTick(function () {
            vm.cartView();
        });
    },

    methods: {
        cartView: function () {
            var _this = this;
            _this.$http.get("data/cartData.json").then(function (res) {
                _this.productList = res.data.result.list;
                _this.totlaMoney = res.data.result.totalMoney
            });
        },
        changeMoney: function (product, way) {
            if (way > 0) {
                product.productQuantity++;
            }

            if (way < 0) {
                if (product.productQuantity > 1) {
                    product.productQuantity--;
                } else {
                    product.productQuantity = 1;
                }
            }
        },
        selectedProduct : function (item) {
            if(typeof item.checked === 'undefined'){
                this.$set(item,"checked",true); //局部注册
                //Vue.set(item,"checked",true); //全局注册
            }else {
                item.checked = !item.checked;
            }
        },
        checkAllFun : function () {
            this.checkAll = !this.checkAll;
            var _this = this;
            if(this.checkAll){
                this.productList.forEach(function (item,index) {
                    item.checked = true;
                    if(typeof item.checked === 'undefined'){
                        _this.$set(item,"checked",true); //局部注册
                    }else {
                        item.checked = true;
                    }
                });
            }
        }
    }

});

Vue.filter('money', function (value, type) {
    return '￥' + value.toFixed(2) + type;
});