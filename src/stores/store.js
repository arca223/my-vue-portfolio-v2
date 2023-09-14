import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDefaultStore = defineStore('default', () => {
    const home = ref({
        fullName: 'Maxime Cocquempot',
        description: 'Développeur PHP/JS confirmé, en recherche permanente de nouveaux challenges et de nouvelles découvertes, que ce soit au niveau techno comme au niveau social/relationnel. Le partage de connaissance et d’expérience est pour moi primordial pour l’avancée de l’équipe et de l’entreprise.',
        header: 'Freelance Fullstack - PHP Symfony / VueJS',
        goal: 'Ce site/portfolie a été développé dans le but de me présenter, moi, mes expériences et mes compétences. L\'objectif de ce dernier est aussi de le réaliser from scratch en VueJS afin de continuer à progresser dans cette technologie.',
    })

    const links = ref({
        github: {
            home: 'https://github.com/arca223',
            project: 'https://github.com/arca223/vuejs-nodejs-portfolio'
        },
        linkedIn: 'https://www.linkedin.com/in/maxime-cocquempot-866944b2/',
    })

    const switchVariables = ref({
        lang: 'fr',
        colorMode: 'light'
    })

    return { home, links, switchVariables }
})

export const useExperienceStore = defineStore('experience', () => {
    const experience = ref({
        test: 'test',
        experiences: [
            {
                id:1,
                employer: 'abbeal',
                duration: '2 months',
                skill: 'Sf Vue JS',
                description: 'long desc',
                title: 'consultant at C company'
            },
            {
                id:2,
                employer: 'abbeal',
                duration: '4 months',
                skill: 'Laravel, Angular',
                description: 'another desc',
                title: 'consultant at A company'
            },
            {
                id:3,
                employer: 'sqli',
                duration: '6 months',
                skill: 'Sf, Vue',
                description: 'second to last desc',
                title: 'lead consultant at B Company'
            },
            {
                id:4,
                employer: 'yook',
                duration: '9 months',
                skill: 'skillful skills',
                description: 'mocking desc',
                title: 'consultant'
            },
        ]
    })

    return { experience }
})

export const useSkillStore = defineStore('skill', () => {

})