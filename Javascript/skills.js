const skills = [
        { 
            name: 'languages',
            models: [
                'JavaScript',
                'HTML',
                'CSS',
                'Python',
                'SQL'
            ]
        },
        {
            name: 'tools',
            models: [
                'Bash',
                'Git & Github',
                'Chrome Font',
                'Boostrap',
                'MongoDB'
            ]
        },
        {
            name: 'frameworks',
            models: [
                'React',
                'Node',
                'Wordpress',
                'Express',
                'jQuery'
            ]
        }
];


let skillsHTML = '';

skillsHTML += `
<div class="row skills_row">
            <div class="col-lg-2 col-md-2 col-sm-auto">
              <div class="section__title">Skills</div>
            </div>`
skills.forEach((skill) => {
    skillsHTML += `
        <div class="col-lg-3 col-md-3 col-sm-auto skill">
            <div class="row row_skill">
                <div class="skills_label">${skill.name}</div>
                <ul class="skills_items text-nowrap">
                        <li class="skills_item">${skill.models[0]}</li>
                        <li class="skills_item">${skill.models[1]}</li>
                        <li class="skills_item">${skill.models[2]}</li>
                        <li class="skills_item">${skill.models[3]}</li>
                        <li class="skills_item">${skill.models[4]}</li>
                    </ul>
            </div>
        </div>
        `
});

document.querySelector('.js-skills-item').innerHTML = skillsHTML;