function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
}

const toggleIcon = document.getElementById('toggleIcon');
const toggleDivs = document.getElementById('toggleDivs');
const toggleArrowPath1 = document.getElementById('toggleArrowPath1');

const closedArrowPath1 = 'm8.25 4.5 7.5 7.5-7.5 7.5'; 
const openArrowPath1 = 'm19.5 8.25-7.5 7.5-7.5-7.5'; 

toggleIcon.addEventListener('click', () => {
    toggleDivs.classList.toggle('hidden');

    
    if (toggleDivs.classList.contains('hidden')) {
        
        toggleArrowPath1.setAttribute('d', closedArrowPath1);
    } else {
       
        toggleArrowPath1.setAttribute('d', openArrowPath1);
    }
});



const toggleIcon1 = document.getElementById('toggleIcon1');
const toggleDivs1 = document.getElementById('toggleDivs1');
const toggleArrowPath = document.getElementById('toggleArrowPath');

const closedArrowPath = 'm8.25 4.5 7.5 7.5-7.5 7.5'; 
const openArrowPath = 'm19.5 8.25-7.5 7.5-7.5-7.5'; 

toggleIcon1.addEventListener('click', () => {
    toggleDivs1.classList.toggle('hidden');

    
    if (toggleDivs1.classList.contains('hidden')) {
        
        toggleArrowPath.setAttribute('d', closedArrowPath);
    } else {
       
        toggleArrowPath.setAttribute('d', openArrowPath);
    }
});




const toggleIcon2 = document.getElementById('toggleIcon2');
const toggleDivs2 = document.getElementById('toggleDivs2');
const toggleArrowPath2 = document.getElementById('toggleArrowPath2');

const closedArrowPath2 = 'm8.25 4.5 7.5 7.5-7.5 7.5'; 
const openArrowPath2 = 'm19.5 8.25-7.5 7.5-7.5-7.5'; 

toggleIcon2.addEventListener('click', () => {
    toggleDivs2.classList.toggle('hidden');

    
    if (toggleDivs2.classList.contains('hidden')) {
        
        toggleArrowPath2.setAttribute('d', closedArrowPath2);
    } else {
       
        toggleArrowPath2.setAttribute('d', openArrowPath2);
    }
});


const toggleIcon3 = document.getElementById('toggleIcon3');
const toggleDivs3 = document.getElementById('toggleDivs3');
const toggleArrowPath3 = document.getElementById('toggleArrowPath3');

const closedArrowPath3 = 'm8.25 4.5 7.5 7.5-7.5 7.5'; 
const openArrowPath3 = 'm19.5 8.25-7.5 7.5-7.5-7.5'; 

toggleIcon3.addEventListener('click', () => {
    toggleDivs3.classList.toggle('hidden');

    
    if (toggleDivs3.classList.contains('hidden')) {
        
        toggleArrowPath3.setAttribute('d', closedArrowPath3);
    } else {
       
        toggleArrowPath3.setAttribute('d', openArrowPath3);
    }
});