type mediaSize = {
    phone375_639: string,
    phone640_767: string
    pad768_1023: string
    desktop1024_1279: string
    desktop1280_1439: string
    desktop1440_1919: string
    desktop1920: string
}

type color = {
    $white: string
    $black: string
    $grey: string,
    $light_grey: string,
    $text_error: string,
    $background: string,
    $green: string,
}

export type mediaType = {
    media: mediaSize,
    color: color
}

export type projectType = {
    id: number,
    title: string,
    href: string,
    description: string,
    stack: string,
    stackDescription: string,
    repo: string,
    link: string
}

export type aboutType = {
    aboutMe: {
        title: string,
        description: string
    },
    skills: {
        title: string,
        skillsItems: [
            {
                id: number,
                title: string,
                description: string
            }
        ]
    },
    english: {
        title: string,
        description: string
    },
    education: {
        title: string,
        educationInfo: [
            {
                id: number,
                description: string
            }
        ]
    },
    workExperience: {
        title: string,
        workExperience: {
            description: string
        }
    }
}

export interface validationsType {
    isEmpty?: boolean,
    minLength?: number,
    maxLength?: number,
    isValid?: boolean,
    nameValid?: boolean
}

export type NavigationType = {
    id: number,
    title: string,
    path: string,
    nodeRef?: any
}

export type svgType = {
    id: number,
    link: string,
    path: string,
    width: number,
    height: number
}