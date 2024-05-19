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

    for (let i = 0; i < 2; i++) {
        const innerRectangle = document.createElement('div');
        innerRectangle.className = 'inner-rectangle';
        innerRectangles.appendChild(innerRectangle);
    }

    largeRectangle.appendChild(innerRectangles);
    body.appendChild(largeRectangle);
});
