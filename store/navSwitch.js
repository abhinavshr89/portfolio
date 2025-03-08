import { create } from 'zustand';

const useStore = create((set) => ({
    skills: false,
    resume: false,
    contact: false,
    projects: false,

    setActive: (section) => {
        console.log('setActive called with section:', section);
        set({
            skill: section === "skills",
            resume: section === "resume",
            contact: section === "contact",
            project: section === "projects",
        });
    }
}));

export default useStore;
