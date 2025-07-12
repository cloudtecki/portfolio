
import { RootState } from 'core/store/rootReducer';
import { initialProfileState } from 'core/entities/user/profile/profile.state';

export const MockState = {
    user: {
        profile: {
            ...initialProfileState
            // main: {
            //     data: {
            //         id: '12345',
            //         summary: {
            //             roleTitle: 'Software Engineer',
            //             email: 'test@example.com',
            //             phone: '123-456-7890',
            //             location: 'New York, NY',
            //             address: '123 Main St',
            //             firstName: 'John',
            //             lastName: 'Doe',
            //             objective: 'To obtain a challenging position as a software engineer.',
            //             summary: 'Experienced software engineer with a passion for developing innovative solutions.',
            //             projectCompleted: '10',
            //             experience: '5',
            //             happyClients: '100'
            //         },
            //         skillCategories: [
            //             {
            //                 title: 'Frontend',
            //                 skills: ['React', 'Angular', 'Vue']
            //             },
            //             {
            //                 title: 'Backend',
            //                 skills: ['Node.js', 'Express', 'MongoDB']
            //             }
            //         ],
            //         projects: [],
            //         experience: [],
            //         education: [],
            //         certifications: []
            //     }
            // }
        },
        theme: {
            isDark: false,
        }
    }
};