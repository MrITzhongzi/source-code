module.exports = {
    template: '<article class="animateArticle">' +
    '<input v-model.number="number" type="number" step="20">' +
    '<p>{{ animatedNumber }}</p>' +
    '</article>',
    data: function () {
        return {
            number: 0,
            animatedNumber: 0
        }
    },

}