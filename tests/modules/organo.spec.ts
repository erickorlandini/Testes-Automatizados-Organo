import { test, Page } from '@playwright/test';
import { OrganoModel } from '../page/resources/organo.model';
import data from "../page/data/organoData.json";
import { OrganoPage } from '../page/test/organo';

var page: Page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
})

test.describe('Organo tests', () => {
    test('Deve criar um Card de novo colaborador', async () => {
        const dt = data.caseDefault as OrganoModel;
        const organo = new OrganoPage(page);
        await organo.agora(dt);
    })
})

