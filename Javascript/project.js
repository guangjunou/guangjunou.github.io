const projects = [
    {
        name: 'YouTube Clone',
        url: 'https://github.com/guangjunou/CSS/tree/main/finalProject',
        description: 'A small HTML and CSS project focused on crafting the layout structure of a YouTube clone, employing HTML for structural elements and utilizing CSS to enhance the overall aesthetic appeal of the design.',
        used: [ 'HTML', 'CSS']
    },
    {
        name: 'Amazon Webpage Clone',
        url: 'https://github.com/guangjunou/javascript/tree/main/amazon-project',
        description: 'A project involving the replication of the Amazon webpage, aiming to recreate the layout with HTML, refine its visual appeal using CSS, and finally implement interactive features with JavaScript to resemble the original design.',
        used: ['HTML', 'CSS', 'JavaScript' ]
    },
    {
        name: 'SuShi Webpage',
        url: 'https://15600a6a-47d5-4f51-8ffb-6adb59f2c467-00-16gkwzpdpkfy7.picard.replit.dev',
        description: 'A small React project involving the replication of a sushi webpage, aiming to recreate the layout with HTML, refine its visual appeal using CSS and Bootstrap, and finally implement interactive features with JavaScript to resemble the original design.',
        used: ['HTML', 'CSS', 'JavaScript', 'Boostrap', 'React']
    },
    {
        name: 'YelpCamp',
        url: 'https://d5e47213-8160-4c84-9d03-b10b028dd43d-00-2lwnx60ahrner.riker.replit.dev',
        description: 'A full-stack website project involving the replication of YelpCamp, allowing users to create and review campgrounds. To interact with the platform, users are required to have an account, providing a comprehensive experience for campground creation and reviews.',
        used: [ 'HTML', 'CSS', 'JavaScript', 'Boostrap', 'Node.js', 'Express', 'MongoDB', 'jQuery']
    },
]

let projectsHTML = '';





projects.forEach((project) => {
    projectsHTML += `
    <div class="project">
        <div class="project_name">
            <a href="${project.url}" target="_blank" class="arrow-link">${project.name} <img src="./img/arrow.png" alt=""></a>
        </div>
        <p>${project.description}</p>
        <div class="row project_used">
        `
        for(let i in project.used) {
            projectsHTML += `
            <span class="project_item">${project.used[i]}</span> 
            `
        }
        projectsHTML += `
            </div>
        </div>
    </div>
    `
})




document.querySelector('.js-projects').innerHTML = projectsHTML;

