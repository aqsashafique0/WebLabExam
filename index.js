
    const goal = 2000; 
    let current = 0;

    const remaining = document.getElementById('remained');
    const literss = document.getElementById('liters');
    const percentagenow = document.getElementById('percentage');
    const smallcups = document.querySelectorAll('.cup-small');

  
    
   
    smallcups.forEach((cup, index) => {
      cup.addEventListener('click', () => {
        if (!cup.classList.contains('full')) {
        cup.classList.add('full');
        current += 250; 
          const percentage = (current / goal) * 100;
        percentagenow.style.height = percentage + '%';
        literss.innerText = (goal - current) / 1000 + 'L';
        remaining.style.height = 100 - percentage + '%';
        } else {
        cup.classList.remove('full');
        current -= 250; 
          const percentage = (current / goal) * 100;
        percentagenow.style.height = percentage + '%';
        literss.innerText = (goal - current) / 1000 + 'L';
        remaining.style.height = 100 - percentage + '%';
        }
    });
    });


