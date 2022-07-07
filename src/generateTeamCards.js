function generateDynamicCards(teamMember) {
    let roleBasedStr = ``;
    let roleIconStr = ``;
    let roleAvatarStr = ``;
    roleBasedtileElement = ``;

    switch (teamMember.constructor.name) {
        case "Manager":
            roleIconStr = `fa-solid fa-circle-user`;
            roleBasedTitle = `Office Number: `
            roleBasedStr = `${teamMember.officeNumber}`;
            roleAvatarStr = `./assets/images/Manager.jpeg`
            roleBasedCard = `<div class="tile is-12 is-justify-content-center p-3">
            <div class="card manager-card has-background-light">`;

            break;
        case "Engineer":
            //?clickable github username
            //GitHub profile opens in a new tab
            roleIconStr = `fa-solid fa-glasses`;
            roleBasedTitle = `Github: `
            roleBasedStr = `<a href="https://github.com/${teamMember.github}" target="_blank">@${teamMember.github}</a>`;
            roleAvatarStr = `./assets/images/Engineer.jpeg`
            roleBasedCard = `<div class="tile is-justify-content-center p-3">
                <div class="card has-background-light">`
            break;
        case "Intern":
            roleIconStr = `fa-solid fa-user-graduate`;
            roleBasedTitle = `School: `
            roleBasedStr = `${teamMember.school}`;
            roleAvatarStr = `./assets/images/Intern.jpeg`
            roleBasedCard = `<div class="tile is-justify-content-center p-3">
                <div class="card has-background-light">`
            break;
        default:
            roleIconStr = `case error 222`;
            roleBasedStr = `case error 222`;
            break;
    }

    //?clickable email address
    //default email program opens and populates the TO field of the email with the address
    return `
                    ${roleBasedCard}
                    <header class="card-header has-background-link">
                        <h1 class="card-header-title">${teamMember.employeeName}</h1>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <h4 class="icon-text">
                                <span class="icon">
                                    <i class="${roleIconStr}"></i>
                                </span>
                                <span class="indent mb-3">
                                ${teamMember.constructor.name}
                                </span>
                            </h4>
                            <div class="tile is-ancestor">
                                <div class="tile is-4 mr-3">
                                    <img width="160" src="${roleAvatarStr}">
                                </div>
                                <div class="tile is-7">
                                <ul>
                                    <li class="level">Employee ID:<p class="indent">${teamMember.id}</p></li>
                                    <li class="level">Email:<p class="indent"><a href="mailto:${teamMember.email}">${teamMember.email}</a></p></li>
                                    <li class="level">${roleBasedTitle}<p class="indent">${roleBasedStr}</p></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `
}

module.exports = generateDynamicCards;