console.log($);
class Team {
    constructor(name, $element) {
        this.name = name;
        this.score = 0;
        //lets assign the element to each Team instance
        this.$element = $element;
    }

    //what does the score board do?
    //it increases the score based on pointvalue
    addPoints(pointValue) {
        // this.score = this.score + pointValue;
        this.score += pointValue;
        //this will now allow us to grab the 1st element and input the score as the text
        //what is eq? it stands for equals and selects children in arry
        // the first child is the h1
        this.$element.children().eq(1).text(this.score);
    }

    subtractPoints(pointValue) {
        this.score -= pointValue;
        this.$element.children().eq(1).text(this.score);
    }
    setup() {
        //select your 2nd child because thats your btn
        this.$element
            .children()
            .eq(2)
            .on('click', () => {
                //the pt value should be imported from another class
                this.addPoints(100);
                console.log(object);
            });
        this.$element
            .children()
            .eq(3)
            .on('click', () => {
                this.subtractPoints(100);
            });
        //remember to call these methods when you instantiate the class
        return this;
    }
}
$(() => {
    // const pointValue = 100;
    const team1 = new Team('team1', $('#team1')).setup();
    const team2 = new Team('team2', $('#team2')).setup();
    const team3 = new Team('team3', $('#team3')).setup();
    console.log(team1.$element); //confirm the element is working
});

$(() => {
    const $tiles = $('.tile').on('click', (e) => {
        $(e.currentTarget).toggleClass('active');
        //This will add the grey class to the already answered questions
        $('.question-value')
            .eq($(e.currentTarget).index('.tile') - 5)
            .addClass('grey');
    });
});
