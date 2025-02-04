import { test, Page } from '@playwright/test';
import data from '../data/organoData.json';
import { OrganoModel } from '../resources/organo.model';

export class OrganoPage {
    readonly page: Page;
    readonly massa = data.caseDefault as OrganoModel;

    constructor(page: Page) {
        this.page = page;
    }

    async agora(data?: OrganoModel): Promise<any> {
        if(!data) {
            data = this.massa;
        }

        await this.executaCardColaborador(data);
    }

    async executaCardColaborador(data: OrganoModel) {
        await this.page.getByRole('textbox', { name: 'Digite seu nome' }).fill(data.nome);

        await this.page.getByRole('textbox', { name: 'Digite seu cargo' }).fill(data.cargo);

        const image = '../utils/devimage.png';

        await this.page.getByRole('textbox', { name: 'Informe o endereço da imagem' }).fill(image);
        
        await this.page.getByRole('combobox').click();
        await this.page.selectOption('select', {index: 1 });

        await this.page.getByRole('button', { name: 'Criar card' }).click();
    }
}