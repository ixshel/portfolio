import { Work } from "../models/works.model";

export class WorkService{
    work:Work[]=[
        new Work(
            'Celular Fire',
            './assets/img/works/celular-fire.png',
            'Proyecto de titulación',
            'https://www.celularfireonline.com',
            1
        ),
        new Work(
            'Scarpa Concept',
            './assets/img/works/scarpaconcept.png',
            'Proyecto.',
            'http://salussole.online/scarpaconcept/',
            2
        )
    ];
}