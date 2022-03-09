export const AddUserAction = (user)=>{
    console.log("inside adduseraction....",user)
    return{
        type: 'ADD_USER_INFO',
        payload: user
    }
}

// export const AddQualificationAction = (qualification)=>{
//     console.log("inside addQualificationAction....",qualification)
//     return{
//         type: 'ADD_QUALIFICATION',
//         payload: qualification
//     }
// }

export const AddEducationAction = (education)=>{
    console.log("inside addQualificationAction....",education)
    return{
        type: 'ADD_EDUCATION',
        payload: education
    }
}

export const AddExperienceAction = (experience)=>{
    console.log("inside addQualificationAction....",experience)
    return{
        type: 'ADD_EXPERIENCE',
        payload: experience
    }
}

export const AddSkillsAction = (skills)=>{
    console.log("inside addSkillsAction....",skills)
    return{
        type: 'ADD_SKILLS',
        payload: skills
    }
}