import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "About",
        subtitle: "Embodied AI, 3D Vision, and Multimodal Foundation Models.",
        isActive: true,
    },
    blog: {
        title: "Blog",
        subtitle: "Notes, ideas, and occasional research reflections.",
        isActive: false,
    },
    publications: {
        title: "Publications",
        subtitle: "Selected work on spatially grounded VLA models, depth estimation, and embodied perception.",
        isActive: true,
    },
    talks: {
        title: "Talks & Presentations",
        subtitle: "Talks, presentations, and future speaking activities.",
        isActive: false,
    },
    projects: {
        title: "Projects",
        subtitle: "Selected research systems, tools, and experiments.",
        isActive: false,
    },
    teaching: {
        title: "Teaching",
        subtitle: "Courses, mentoring, and teaching-related work.",
        isActive: false,
    },
    tags: {
        title: "Tags",
        subtitle: "Explore content by topic.",
        isActive: false,
    },
    cv: {
        title: "CV",
        subtitle: "Education, research experience, and technical skills.",
        isActive: true,
    },
};
