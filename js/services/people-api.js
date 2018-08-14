import data from './data.js';

let people = data.people;

if(!people) {
    data.people = createPeople();
    people = data.people;
}
function createPeople() {
    return [
        { name: 'Angelina Jolie', pic: './img/angelina.jpg', ladder_guess: 8, ladder_actual: 8, income: '200K+', fertility: 1, book: 'Awaken the Giant Within by Tony Robbins', bio: 'I’ll love you so much that I’ll wear a vile of your blood around my neck.', bio_picks: [], pic_picks: [] },
        { name: 'Barack Obama', pic: './img/barack.jpg', ladder_guess: 9, ladder_actual: 9, income: '200K+', fertility: 4, book: 'An Inconvenient Truth by Al Gore', bio: 'I would be a 10 but I’m a smoker.', bio_picks: [], pic_picks: [] },
        { name: 'Beyonce Knowles', pic: './img/beyonce.jpg', ladder_guess: 10, ladder_actual: 10, income: '200K+', fertility: 4, book: 'Leaves of Grass by Walt Whitman', bio: 'Can you pay my bills? Can you pay my telephone bills? Can you pay my automo-bills ? If you did then maybe we could chill.', bio_picks: [], pic_picks: [] },
        { name: 'Justin Bieber', pic: './img/bieber.jpg', ladder_guess: 4, ladder_actual: 4, income: '200K+', fertility: 5, book: 'The Bible by God', bio: 'I’m really pretty. And really a douchebag.', bio_picks: [], pic_picks: [] },
        { name: 'Britney Spears', pic: './img/britney.jpg', ladder_guess: 5, ladder_actual: 5, income: '200K+', fertility: 5, book: 'The Bible by God', bio: 'I’m not that innocent.', bio_picks: [], pic_picks: [] },
        { name: 'Chris Brown', pic: './img/brown.jpg', ladder_guess: 0, ladder_actual: 0, income: '200K+', fertility: 5, book: 'The Bible by God', bio: 'I’ll serenade you before you take out a restraining order on me.', bio_picks: [], pic_picks: [] },
        { name: 'George Clooney', pic: './img/clooney.jpg', ladder_guess: 10, ladder_actual: 10, income: '200K+', fertility: 3, book: 'An Inconvenient Truth by Al Gore', bio: 'I’m old but still hot as fuck. And I like saving the world.', bio_picks: [], pic_picks: [] },
        { name: 'Bill Cosby', pic: './img/cosby.jpg', ladder_guess: 0, ladder_actual: 0, income: '0-50K', fertility: 1, book: 'If I Did It by OJ Simpson', bio: 'I like jello.', bio_picks: [], pic_picks: [] },
        { name: 'Hillary Clinton', pic: './img/hillary.jpg', ladder_guess: 8, ladder_actual: 8, income: '200K+', fertility: 1, book: 'An Inconvenient Truth by Al Gore', bio: 'I’ll let you accompany me on my feminist agenda.', bio_picks: [], pic_picks: [] },
        { name: 'Kim Kardashian', pic: './img/kim.jpg', ladder_guess: 6, ladder_actual: 6, income: '200K+', fertility: 4, book: 'Awaken the Giant Within by Tony Robbins', bio: 'You’ll love me if you like more in the booty than the brain.', bio_picks: [], pic_picks: [] },
        { name: 'Leonardo DiCaprio', pic: './img/leo.jpg', ladder_guess: 9, ladder_actual: 9, income: '200K+', fertility: 5, book: 'An Inconvenient Truth by Al Gore', bio: 'Come ride with me and my harem of twenty something models in my prius.', bio_picks: [], pic_picks: [] },
        { name: 'Lindsay Lohan', pic: './img/lohan.jpg', ladder_guess: 2, ladder_actual: 2, income: '0-50K', fertility: 4, book: 'The Bible by God', bio: 'Date me if you like mean girls. And alcohol.', bio_picks: [], pic_picks: [] },
        { name: 'Madonna Ciccone', pic: './img/madonna.jpg', ladder_guess: 5, ladder_actual: 5, income: '200K+', fertility: 1, book: 'Awaken the Giant Within by Tony Robbins', bio: 'I’m like a virgin. Except the exact opposite.', bio_picks: [], pic_picks: [] },
        { name: 'Mel Gibson', pic: './img/mel.jpg', ladder_guess: 2, ladder_actual: 2, income: '0-50K', fertility: 3, book: 'The Bible by God', bio: 'I’m interested in dating you as long as you aren’t Jewish.', bio_picks: [], pic_picks: [] },
        { name: 'Mia Kunis', pic: './img/mila.png', ladder_guess: 9, ladder_actual: 9, income: '200K+', fertility: 5, book: 'Leaves of Grass by Walt Whitman', bio: 'I’m your Ukrainian dream woman.', bio_picks: [], pic_picks: [] },
        { name: 'Natalie Portman', pic: './img/natalie.jpg', ladder_guess: 10, ladder_actual: 10, income: '200K+', fertility: 5, book: 'Leaves of Grass by Walt Whitman', bio: 'I’m beautiful and I’ve been more successful than you since I was 11.', bio_picks: [], pic_picks: [] },
        { name: 'Brad Pitt', pic: './img/pitt.jpg', ladder_guess: 10, ladder_actual: 10, income: '200K+', fertility: 5, book: 'Leaves of Grass by Walt Whitman', bio: 'I’m beautiful and I have more children than I can count.', bio_picks: [], pic_picks: [] },
        { name: 'Rihanna Fenty', pic: './img/rihanna.gif', ladder_guess: 10, ladder_actual: 10, income: '200K+', fertility: 5, book: 'The Bible by God', bio: 'Even though I’m a 10 my last boyfriend was a zero.', bio_picks: [], pic_picks: [] },
        { name: 'Roseanne Barr ', pic: './img/roseanne.jpg', ladder_guess: 1, ladder_actual: 1, income: '0-50K', fertility: 1, book: 'Atlas Shrugged by Ayn Rand', bio: 'I like to tweet racist shit when I’m hopped up on Ambien.', bio_picks: [], pic_picks: [] },
        { name: 'Dustin Screech Diamond', pic: './img/screech.jpg', ladder_guess: 1, ladder_actual: 1, income: '0-50K', fertility: 0, book: 'Atlas Shrugged by Ayn Rand', bio: 'I like making sex tapes.', bio_picks: [], pic_picks: [] },
        { name: 'Charlie Sheen', pic: './img/sheen.jpg', ladder_guess: 0, ladder_actual: 0, income: '50-100K', fertility: 3, book: 'If I Did It by OJ Simpson', bio: 'I like winning. And lots and lots of cocaine.', bio_picks: [], pic_picks: [] },
        { name: 'Snooki Polizzi', pic: './img/snookie.jpg', ladder_guess: 2, ladder_actual: 2, income: '100-150K', fertility: 4, book: 'Awaken the Giant Within by Tony Robbins', bio: ' Let’s go tanning together and watch South Park.', bio_picks: [], pic_picks: [] },
        { name: 'Tiger Woods', pic: './img/tiger.jpg', ladder_guess: 3, ladder_actual: 3, income: '200K+', fertility: 4, book: 'Awaken the Giant Within by Tony Robbins', bio: 'I’d like to play golf with you and have sex 400 times a day.', bio_picks: [], pic_picks: [] },
        { name: 'Donald Trump', pic: './img/trump.jpg', ladder_guess: 0, ladder_actual: 0, income: '200K+', fertility: 3, book: 'Atlas Shrugged by Ayn Rand', bio: 'I have tiny hands. My daughter and I come as a package deal.', bio_picks: [], pic_picks: [] },
        { name: 'Mike Tyson', pic: './img/tyson.jpg', ladder_guess: 3, ladder_actual: 3, income: '200K+', fertility: 3, book: 'Awaken the Giant Within by Tony Robbins', bio: 'I think that ears are the sexiest part of the body.', bio_picks: [], pic_picks: [] },
        { name: 'Winona Ryder', pic: './img/winona.jpg', ladder_guess: 5, ladder_actual: 5, income: '200K+', fertility: 2, book: 'If I Did It by OJ Simpson', bio: 'My favorite hobbies are shoplifting and the supernatural.', bio_picks: [], pic_picks: [] }
    ];

}

export default {
    get: function() {
        return people;
    },
    add: function(person) {
        people.push(person);
    }
};