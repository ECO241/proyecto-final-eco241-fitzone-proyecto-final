document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');

    const profileHeader = document.createElement('div');
    profileHeader.className = 'profile-header';
    app.appendChild(profileHeader);

    const timeDisplay = document.createElement('div');
    timeDisplay.className = 'time-display';
    timeDisplay.textContent = '9:41';
    profileHeader.appendChild(timeDisplay);

    const gearIcon = document.createElement('div');
    gearIcon.className = 'gear-icon';
    gearIcon.innerHTML = '<img src="../../img/varios/gear.png" alt="gear icon">';
    profileHeader.appendChild(gearIcon);

    const profileContainer = document.createElement('div');
    profileContainer.className = 'profile-container';
    app.appendChild(profileContainer);

    const profilePicture = document.createElement('div');
    profilePicture.className = 'profile-picture';
    const profileImage = document.createElement('img');
    profileImage.src = '../img/varios/perfil.png'; // replace with your image path
    profilePicture.appendChild(profileImage);
    profileContainer.appendChild(profilePicture);

    const userName = document.createElement('h2');
    userName.textContent = 'Maria Lupe Gutierrez Perez';
    profileContainer.appendChild(userName);

    const statsRow = document.createElement('div');
    statsRow.className = 'stats-row';
    profileContainer.appendChild(statsRow);

    const stats = [
        { label: 'Weight', value: '70 kg', icon: 'weight-icon.png' }, // replace with your icon path
        { label: 'Height', value: '1.74 cm', icon: 'height-icon.png' }, // replace with your icon path
        { label: 'Age', value: '26', icon: 'age-icon.png' } // replace with your icon path
    ];

    stats.forEach(stat => {
        const statElement = document.createElement('div');
        statElement.className = 'stat';

        const statIcon = document.createElement('div');
        statIcon.className = 'stat-icon';
        statIcon.innerHTML = `<img src="../../img/varios/${stat.icon}" alt="${stat.label} icon">`; // replace with your icon path
        statElement.appendChild(statIcon);

        const statValue = document.createElement('p');
        statValue.textContent = stat.value;
        statElement.appendChild(statValue);

        const statLabel = document.createElement('p');
        statLabel.textContent = stat.label;
        statElement.appendChild(statLabel);

        statsRow.appendChild(statElement);
    });

    const physicalCondition = document.createElement('div');
    physicalCondition.className = 'physical-condition';
    profileContainer.appendChild(physicalCondition);

    const conditionTitle = document.createElement('p');
    conditionTitle.textContent = 'Physical condition';
    physicalCondition.appendChild(conditionTitle);

    const conditionDetails = document.createElement('div');
    conditionDetails.className = 'condition-details';
    physicalCondition.appendChild(conditionDetails);

    const strengthDetails = document.createElement('div');
    strengthDetails.className = 'condition-section';
    strengthDetails.innerHTML = `
        <p>Strength</p>
        <p>60 kg Bench press</p>
        <p>80 kg Squats</p>
        <p>100 kg Deadlift</p>
    `;
    conditionDetails.appendChild(strengthDetails);

    const hydrationDetails = document.createElement('div');
    hydrationDetails.className = 'condition-section';
    hydrationDetails.innerHTML = `
        <p>Hydration</p>
        <p>2 liters per day</p>
        <div class="progress">
            <div class="progress-bar" style="width: 80%;"></div>
        </div>
        <p>Progress</p>
    `;
    conditionDetails.appendChild(hydrationDetails);
});