import { Router } from "express";
  
const checkRouter = Router();

checkRouter.get("/", (req, res) => {
    res.json({
        status: 'API is running smoothly',
        project: {
            name: 'Nome do Projeto',
            version: '1.0.0',
        },
        team: [
            {
                name: 'Crystian S.',
                role: 'Collaborator 🙋🏽‍♂️',
                github: 'https://github.com/Crystian-Paz',
                linkedin: 'https://www.linkedin.com/in/crystian-silva/'
            },
            {
                name: 'Elzo S.',
                role: 'Collaborator 🙋🏽‍♂️',
                github: 'https://github.com/ithalloelzo',
                linkedin: 'https://www.linkedin.com/in/elzo-%C3%ADthallo-9403372ba/'
            },
            {
                name: 'Jamyle N.',
                role: 'Leader 👑',
                github: 'https://github.com/jamyle-Elen',
                linkedin: 'https://www.linkedin.com/in/jamyle-elen/'
            },
            {
                name: 'Joicy L.',
                role: 'Knowledge Manager 🗃',
                github: 'https://github.com/Joicylara',
                linkedin: 'https://www.linkedin.com/in/joicy-kelly-1171b0215/'
            },
            {
                name: 'Lauanny R.',
                role: 'Collaborator 🙋🏽‍♂️',
                github: 'https://github.com/Lauannyramalho',
                linkedin: 'https://www.linkedin.com/in/lauanny-ramalho-a560532b9/'
            },
            {
                name: 'Reury L.',
                role: 'Communicator 🗣',
                github: 'https://github.com/reury-cardoso',
                linkedin: 'https://www.linkedin.com/in/reurylima'
            },
            {
                name: 'Saulo T.',
                role: 'Collaborator 🙋🏽‍♂️',
                github: 'https://github.com/sauloteles',
                linkedin: 'https://www.linkedin.com/in/saulo-teles-792447303/'
            }
        ]
    })
});

export { checkRouter };