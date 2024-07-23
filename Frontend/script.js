document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    const contactList = document.getElementById('contactList');
  
    const li = document.createElement('li');
    li.textContent = `Name: ${firstName} ${lastName} - ${email}, ${phone}`;
  
    contactList.appendChild(li);

    console.log(`Added contact: ${firstName} ${lastName} - ${email}, ${phone}`);
  
    // Clear the form
    document.getElementById('contactForm').reset();
  });
  