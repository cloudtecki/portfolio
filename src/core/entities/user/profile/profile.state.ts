import { ApiStatus } from 'core/base/enum';
import { UserProfileState } from 'core/base/type';

export const initialProfileState: UserProfileState = {
  main: {
    data: {
      id: '',
      summary: {
        roleTitle: '',
        email: '',
        phone: '',
        address: '',
        location: '',
        firstName: '',
        lastName: '',
        objective: '',
        summary: '',
        projectCompleted: '',
        experience: '',
        happyClients: '',
      },
      skillCategories: [
        {
          title: '',
          skills: [],
        },
      ],
      certifications: [],
      projects: [],
      experience: [],
      education: [],
    },
    status: ApiStatus.DEFAULT,
  },
};
