import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('Should display the "Thank You" page upon submission of a valid name', async t => {
    await t
        .typeText('#developer-name', "John Smith")
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');    
});