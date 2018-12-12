import Page from '../page_objects/page.model';
import { Selector } from 'testcafe';

fixture `Test Select element`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Should be able to select an option from the dropdown menu', async t => {
    const dropdown = Selector('#preferred-interface');
    const interfaceOption = dropdown.find('option');
    await t.click(dropdown);
    await t
        .click(interfaceOption.withText('Command Line'))
        .expect(interfaceOption.value).eql('Command Line');
});