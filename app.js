(function () {
    document.getElementById('itemForm').focus();
    var card = new Vue({
        el: '#card',
        data: {
            title: 'Cars',
            content: 'Cars are human friends. <strong>Loved by people</strong> a lot than other mode of transport',
            cars: [
                { name: 'Bugati', speed: 320 },
                { name: 'Lambogini', speed: 290 },
                { name: 'Ferari', speed: 297 },
                { name: 'Volks Wagon', speed: 285 }
            ],
            inputText: ''
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
        methods: {
            addItem: function () {
                // this.items.push({text: name})
                var input = document.getElementById('itemForm');

                if (!!input.value) {
                    this.cars.push({
                        name: input.value
                    })
                    input.value = "";
                    // input.focus();
                }
            },
            removeItem: function (index) {
                this.cars.splice(index, 1);
            }
        }
    })
}());