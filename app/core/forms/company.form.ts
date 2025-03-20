import { AbstractForm } from "@cmruizg1993/artics-ds-core";
import type { Company } from "../model/interfaces/company";

export class CompanyForm extends AbstractForm<Company> {
    buildForm(): void {
        this.addField({
          name: 'ruc',
          type: 'text',
          validations: {
            required: true,
            minLength: 13,
            maxLength: 13
          },
          options: {
            label: 'RUC',
            placeholder: '10000000000001'
          }
        })
        .addField({
          name: 'name',
          type: 'text',
          validations: {
            required: true,
            minLength: 3,
            maxLength: 100
          },
          options: {
            label: 'Company name',
            placeholder: 'Enter company name'
          }
        });
      }
}