import ResumeData from "../../../public/resume.json";

export const mockProfileState = {
    user: {
        profile: {
            main: {
                data: {
                    id: ResumeData.id || "12345",
                    summary: {
                        roleTitle: ResumeData.summary.roleTitle,
                        email: ResumeData.summary.email,
                        phone: ResumeData.summary.phone,
                        location: ResumeData.summary.location,
                        address: ResumeData.summary.address,
                        firstName: ResumeData.summary.firstName,
                        lastName: ResumeData.summary.lastName,
                        objective: ResumeData.summary.objective,
                        summary: ResumeData.summary.summary,
                        projectCompleted: ResumeData.summary.projectCompleted,
                        experience: ResumeData.summary.experience,
                        happyClients: ResumeData.summary.happyClients
                    },
                    skillCategories: ResumeData.skillCategories,
                    projects: (ResumeData.projects).map((project: any) => ({
                        ...project,
                        responsibilities: project.responsibilities ?? []
                    })),
                    experience: (ResumeData.experience).map((exp: any) => ({
                        ...exp,
                        startDate: exp.startDate ? new Date(exp.startDate) : undefined,
                        endDate: exp.endDate ? new Date(exp.endDate) : undefined
                    })),
                    education: (ResumeData.education).map((edu: any) => ({
                        ...edu,
                        startDate: edu.startDate ? new Date(edu.startDate) : undefined,
                        endDate: edu.endDate ? new Date(edu.endDate) : undefined
                    })),
                    certifications: []
                }
            }
        },
        theme: {
            isDark: false
        }
    }
}