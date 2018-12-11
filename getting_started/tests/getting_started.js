import Page from '../page.model';
import { Selector } from 'testcafe';

const page = new Page();

fixture `My Fixture`
    .page `https://devexpress.github.io/testcafe/example/`;


test('Should be able to type in the text box', async t =>{
    await t
        .typeText(page.nameInput, 'Peter')
        .typeText(page.nameInput, 'Paker',{ replace: true })
        .typeText(page.nameInput, 'r', { caretPos: 2 })
        .expect(page.nameInput.value).eql('Parker');
});

test('Should click check boxes', async t => {
    for(const feature of page.featureList) {
        await t
            .click(feature.label)
            .expect(feature.checkbox.checked).ok();
    }
});

test('Should submit Name', async t => {
    const header = Selector('#article-header');
    await page.submitName('Peter');
    await t.expect(header.innerText).eql('Thank you, Peter!');
});

