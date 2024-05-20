

document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    const h1 = document.createElement('h1');
    h1.textContent = 'Profile';
    body.appendChild(h1);

    const profilePicture = document.createElement('div');
    profilePicture.className = 'profile-picture';
    body.appendChild(profilePicture);

    const h2 = document.createElement('h2');
    h2.textContent = 'Maria Lupe Gutierrez Perez';
    body.appendChild(h2);

    const circlesRow = document.createElement('div');
    circlesRow.className = 'circles-row';

    for (let i = 0; i < 3; i++) {
        const smallCircle = document.createElement('div');
        smallCircle.className = 'small-circle';
        circlesRow.appendChild(smallCircle);
    }

    body.appendChild(circlesRow);

    const largeRectangle = document.createElement('div');
    largeRectangle.className = 'large-rectangle';

    const p = document.createElement('p');
    p.textContent = 'Condicion Física';
    largeRectangle.appendChild(p);

    const innerRectangles = document.createElement('div');
    innerRectangles.className = 'inner-rectangles';

    const innerRectangle1 = document.createElement('div');
    innerRectangle1.className = 'inner-rectangle';
    innerRectangle1.innerHTML = `
        <p>Strength</p>
        <p>60 kg</p>
        <p>Bench press</p>
        <p>80 kg</p>
        <p>Squats</p>
        <p>100 kg</p>
        <p>Deadlift</p>
    `;
    innerRectangles.appendChild(innerRectangle1);

    const innerRectangle2 = document.createElement('div');
    innerRectangle2.className = 'inner-rectangle';
    innerRectangles.appendChild(innerRectangle2);

    largeRectangle.appendChild(innerRectangles);
    body.appendChild(largeRectangle);

});
