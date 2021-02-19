import { Skill } from "../models/skills.model";

export class SkillsService{
    skill:Skill[]=[
        new Skill(
            'HTML | CSS',
            'p-85',
            'html-css',
            'Correcto uso de las etiquetas semanticas de HTML 5. Conocimentos de CSS 3 de flexbox, grid layout, transiciones y animaciones.'
        ),
        new Skill(
            'SASS',
            'p-80',
            'sass',
            'Me gusta usar este preprosesador de CSS, por la anidacion e identación, variables y operadores.'
        ),
        new Skill(
            'Bootstrap',
            'p-70',
            'bootstrap',
            'Se como usar bootstrap en mis proyectos junto con sus componentes de acuerdo a la documentación.'
            ),
        new Skill(   
            'JavaScript',
            'p-80',
            'js',
            'Uso JavaScript para crear aplicaciones web Front-End. Tengo conocimientos básicos de node.js y typescritp.'
            ),
        new Skill(
            'React',
            'p-75',
            'react',
            ''
        ),
        new Skill(
            'Angular',
            'p-75',
            'angular',
            'Tengo los conocimientos suficientes para crear una aplicación web básica con Angular 11.'
        ),
        new Skill(   
            'TypeScript',
            'p-75',
            'typescript',
            'Tengo conocimientos de JQuery para manipular el DOM y crear animaciones.'
        ),
        new Skill(
            'Git',
            'p-80',
            'git',
            'Hago uso de esta herramienta de control de versiones en mis proyectos, de los cuales, algunos los subo a Github.'
        ),
        new Skill(
            'Terminal',
            'p-80',
            'terminal',
            'Conozco los comandos basicos de la terminal en sistemas unix.'
        ),
        new Skill(
            'Java',
            'p-70',
            'java',
            'Diseño prototipos sencillos en este software.'
        ),
        new Skill(
            'NodeJS',
            'p-70',
            'nodejs',
            'Es el software que uso para diseñar gráficos vectoriales.'
        ),
        new Skill(
            'UX | UI', 
            'p-60',
            'ux-ui',
            'Tengo conocimientos muy básicos en esta area, pero trato de ser mejor diseñando productos digitales usando la metodología Lean.'
        ),
        new Skill(
            'MongoDB',
            'p-85',
            'mongodb',
            'Correcto uso de las etiquetas semanticas de HTML 5. Conocimentos de CSS 3 de flexbox, grid layout, transiciones y animaciones.'
        )
    ];
}