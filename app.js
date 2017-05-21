(function () {
    document.getElementById('itemForm').focus();
    var card = new Vue({
        el: '#card',
        data: {
            title: 'Cars available in stock',
            content: 'Cars are human friends. <strong>Loved by people</strong> a lot than other mode of transport',
            inputText: '',
            cars: [
                { name: 'Bugati', speed: 387, count: 4 },
                { name: 'Lambogini', speed: 290, count: 7 },
                { name: 'Ferari', speed: 297, count: 12 },
                { name: 'Volks Wagon', speed: 285, count: 2 }
            ],
            stockUpdated: 0,
            sportsCarCountUpdated: 0
        },
        filters: {
            capitalize: function (value) {
                if (!value) return;
                value = value.toString();
                return value.charAt(0).toUpperCase() + value.slice(1);
            },
            undercase: function (value) {
                if (!value) return;
                value = value.toString();
                return value.toLowerCase();
            },
            getWikiUrl: function (value) {
                if (!value) return;
                return "https://en.wikipedia.ORG/wifi/" + value;
            }
        },
        mounted() {
            // convert to number prototype method for String
            String.prototype.toNumber = function () {
                debugger
                var strArray = this;
                var error = false;

                for (var prop in strArray) {
                    if (prop != 'toNumber' && isNaN(prop)) {
                        error = true;
                    }
                }

                if (error) return;

                return Number(this);
            };
        },
        methods: {
            addItem: function () {
                var elem = this.inputText.split(',');
                var name = elem[0].replace(/\s/g, '');
                var speed = elem[1] ? elem[1].toNumber() : 0;      // Number(elem[1]); 

                if (isNaN(speed)) {
                    alert('Invalid number for speed');
                    this.inputText = "";
                    return;
                }

                if (!!name) {
                    this.cars.push({
                        name: name,
                        speed: speed,
                        count: 0
                    })
                    this.inputText = "";
                }
            },
            removeItem: function (index) {
                this.cars.splice(index, 1);
            }
        },
        watch: {

        },
        computed: {
            buttonDisabled: function () {
                if (!this.inputText) {
                    return true;
                }
            },
            stockCount: function () {
                this.stockUpdated++;
                var count = 0;
                var items = this.cars;

                for (var i in items) {
                    count += items[i].count && items[i].count || 0;
                }

                return count;
            },
            sportsCarsCount: function () {
                var count = 0;
                var items = this.cars;

                items.forEach(function (item) {
                    if (item.speed > 350) {
                        count++;
                        this.sportsCarCountUpdated++;
                    }
                }, this)

                return count;
            }
        }
    })
}());