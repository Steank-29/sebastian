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




// INPUT SECTION



document.getElementById('inputElement').addEventListener('click', function () {
    const draggableBox = document.getElementById('draggableBox');
    draggableBox.classList.toggle('hidden');

    if (!draggableBox.classList.contains('hidden')) {
        dragElement(draggableBox);
    }
});



document.getElementById('closeButton').addEventListener('click', function () {
    const draggableBox = document.getElementById('draggableBox');
    draggableBox.classList.add('hidden'); // Hide the box
});



function dragElement(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let isDragging = false;
    let isResizing = false;

    // Allow dragging only when clicking on the header or an area that is not interactive
    el.onmousedown = (e) => {
        if (!isInteractiveElement(e.target) && !isResizing) {
            isDragging = true;  // Enable dragging
            dragMouseDown(e);
        }
    };

    // Resizing
    const resizeArea = document.createElement('div');
    resizeArea.className = 'resize-area'; // Add class for styling
    resizeArea.style.width = '20px'; // Width of the resize handle
    resizeArea.style.height = '20px'; // Height of the resize handle
    resizeArea.style.position = 'absolute';
    resizeArea.style.bottom = '-10px'; // Move it outside the box
    resizeArea.style.right = '-10px'; // Move it outside the box
    resizeArea.style.cursor = 'nwse-resize';
    el.appendChild(resizeArea);

    resizeArea.onmousedown = (e) => {
        isResizing = true; // Enable resizing
        e.stopPropagation(); // Prevent the drag event from firing
        resizeMouseDown(e);
    };

    // Disable dragging when mouse is over the resize area
    el.onmouseover = (e) => {
        if (isInteractiveElement(e.target)) {
            el.style.cursor = 'default'; // Set cursor to default for inputs
        } else if (e.target === resizeArea) {
            el.style.cursor = 'nwse-resize'; // Change cursor to resize
        } else {
            el.style.cursor = 'move'; // Change cursor to move
        }
    };

    el.onmouseout = () => {
        el.style.cursor = 'move'; // Reset cursor
    };

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function resizeMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeResizeElement;
        document.onmousemove = elementResize;
    }

    function elementDrag(e) {
        if (isDragging) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
        }
    }

    function elementResize(e) {
        if (isResizing) {
            e.preventDefault();
            const newWidth = e.clientX - el.getBoundingClientRect().left + 10; // Added 10 for offset
            const newHeight = e.clientY - el.getBoundingClientRect().top + 10; // Added 10 for offset
            el.style.width = newWidth + 'px';
            el.style.height = newHeight + 'px';
        }
    }

    function closeDragElement() {
        isDragging = false; // Disable dragging
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function closeResizeElement() {
        isResizing = false; // Disable resizing
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function isInteractiveElement(target) {
        // Check if the target is an input, select, or textarea
        return target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA';
    }
}


function changeBoxColors() {
    // Generate random colors in hexadecimal format
    const randomBorderColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Select the draggable box element
    const indraggableBox = document.getElementById("indraggableBox");
    const draggableBox = document.getElementById("draggableBox");

    // Change the border color and background color
    indraggableBox.style.borderColor = randomBorderColor;
    draggableBox.style.borderColor = randomBorderColor;
    indraggableBox.style.backgroundColor = randomBorderColor;
    indraggableBox.style.borderColor = randomBorderColor;
}







// OUTPUT SECTION



document.getElementById('outputElement').addEventListener('click', function () {
    const draggableBox1 = document.getElementById('draggableBox1');
    draggableBox1.classList.toggle('hidden');

    
    if (!draggableBox1.classList.contains('hidden')) {
        dragElement1(draggableBox1);
    }
});



document.getElementById('closeButton1').addEventListener('click', function () {
    const draggableBox1 = document.getElementById('draggableBox1');
    draggableBox1.classList.add('hidden');
});


function dragElement1(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let isDragging = false;
    let isResizing = false;

    // Allow dragging only when clicking on the header or an area that is not interactive
    el.onmousedown = (e) => {
        if (!isInteractiveElement(e.target) && !isResizing) {
            isDragging = true;  // Enable dragging
            dragMouseDown(e);
        }
    };

    // Resizing
    const resizeArea = document.createElement('div');
    resizeArea.className = 'resize-area'; // Add class for styling
    resizeArea.style.width = '20px'; // Width of the resize handle
    resizeArea.style.height = '20px'; // Height of the resize handle
    resizeArea.style.position = 'absolute';
    resizeArea.style.bottom = '-10px'; // Move it outside the box
    resizeArea.style.right = '-10px'; // Move it outside the box
    resizeArea.style.cursor = 'nwse-resize';
    el.appendChild(resizeArea);

    resizeArea.onmousedown = (e) => {
        isResizing = true; // Enable resizing
        e.stopPropagation(); // Prevent the drag event from firing
        resizeMouseDown(e);
    };

    // Disable dragging when mouse is over the resize area
    el.onmouseover = (e) => {
        if (isInteractiveElement(e.target)) {
            el.style.cursor = 'default'; // Set cursor to default for inputs
        } else if (e.target === resizeArea) {
            el.style.cursor = 'nwse-resize'; // Change cursor to resize
        } else {
            el.style.cursor = 'move'; // Change cursor to move
        }
    };

    el.onmouseout = () => {
        el.style.cursor = 'move'; // Reset cursor
    };

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function resizeMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeResizeElement;
        document.onmousemove = elementResize;
    }

    function elementDrag(e) {
        if (isDragging) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
        }
    }

    function elementResize(e) {
        if (isResizing) {
            e.preventDefault();
            const newWidth = e.clientX - el.getBoundingClientRect().left + 10; // Added 10 for offset
            const newHeight = e.clientY - el.getBoundingClientRect().top + 10; // Added 10 for offset
            el.style.width = newWidth + 'px';
            el.style.height = newHeight + 'px';
        }
    }

    function closeDragElement() {
        isDragging = false; // Disable dragging
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function closeResizeElement() {
        isResizing = false; // Disable resizing
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function isInteractiveElement(target) {
        // Check if the target is an input, select, or textarea
        return target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA';
    }
}


function changeBoxColors1() {
    // Generate random colors in hexadecimal format
    const randomBorderColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Select the draggable box element
    const indraggableBox = document.getElementById("indraggableBox1");
    const draggableBox = document.getElementById("draggableBox1");

    // Change the border color and background color
    indraggableBox.style.borderColor = randomBorderColor;
    draggableBox.style.borderColor = randomBorderColor;
    indraggableBox.style.backgroundColor = randomBorderColor;
    indraggableBox.style.borderColor = randomBorderColor;
}



// OPEN AI SECTION 


document.getElementById('openaiElement').addEventListener('click', function () {
    const draggableBox3 = document.getElementById('draggableBox3');
    draggableBox3.classList.toggle('hidden');

    if (!draggableBox3.classList.contains('hidden')) {
        dragElement3(draggableBox3);
    }
});



document.getElementById('closeButton3').addEventListener('click', function () {
    const draggableBox3 = document.getElementById('draggableBox3');
    draggableBox3.classList.add('hidden');
});



function dragElement3(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let isDragging = false;
    let isResizing = false;

    // Allow dragging only when clicking on the header or an area that is not interactive
    el.onmousedown = (e) => {
        if (!isInteractiveElement(e.target) && !isResizing) {
            isDragging = true;  // Enable dragging
            dragMouseDown(e);
        }
    };

    // Resizing
    const resizeArea = document.createElement('div');
    resizeArea.className = 'resize-area'; // Add class for styling
    resizeArea.style.width = '20px'; // Width of the resize handle
    resizeArea.style.height = '20px'; // Height of the resize handle
    resizeArea.style.position = 'absolute';
    resizeArea.style.bottom = '-10px'; // Move it outside the box
    resizeArea.style.right = '-10px'; // Move it outside the box
    resizeArea.style.cursor = 'nwse-resize';
    el.appendChild(resizeArea);

    resizeArea.onmousedown = (e) => {
        isResizing = true; // Enable resizing
        e.stopPropagation(); // Prevent the drag event from firing
        resizeMouseDown(e);
    };

    // Disable dragging when mouse is over the resize area
    el.onmouseover = (e) => {
        if (isInteractiveElement(e.target)) {
            el.style.cursor = 'default'; // Set cursor to default for inputs
        } else if (e.target === resizeArea) {
            el.style.cursor = 'nwse-resize'; // Change cursor to resize
        } else {
            el.style.cursor = 'move'; // Change cursor to move
        }
    };

    el.onmouseout = () => {
        el.style.cursor = 'move'; // Reset cursor
    };

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function resizeMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeResizeElement;
        document.onmousemove = elementResize;
    }

    function elementDrag(e) {
        if (isDragging) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
        }
    }

    function elementResize(e) {
        if (isResizing) {
            e.preventDefault();
            const newWidth = e.clientX - el.getBoundingClientRect().left + 10; // Added 10 for offset
            const newHeight = e.clientY - el.getBoundingClientRect().top + 10; // Added 10 for offset
            el.style.width = newWidth + 'px';
            el.style.height = newHeight + 'px';
        }
    }

    function closeDragElement() {
        isDragging = false; // Disable dragging
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function closeResizeElement() {
        isResizing = false; // Disable resizing
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function isInteractiveElement(target) {
        // Check if the target is an input, select, or textarea
        return target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA';
    }
}


function changeBoxColors2() {
    // Generate random colors in hexadecimal format
    const randomBorderColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Select the draggable box element
    const indraggableBox = document.getElementById("indraggableBox2");
    const draggableBox = document.getElementById("draggableBox3");

    // Change the border color and background color
    indraggableBox.style.borderColor = randomBorderColor;
    draggableBox.style.borderColor = randomBorderColor;
    indraggableBox.style.backgroundColor = randomBorderColor;
    indraggableBox.style.borderColor = randomBorderColor;
}





// ANTHROPIC SECTION 


document.getElementById('anthropicElement').addEventListener('click', function () {
    const draggableBox4 = document.getElementById('draggableBox4');
    draggableBox4.classList.toggle('hidden');

    if (!draggableBox4.classList.contains('hidden')) {
        dragElement4(draggableBox4);
    }
});



document.getElementById('closeButton4').addEventListener('click', function () {
    const draggableBox4 = document.getElementById('draggableBox4');
    draggableBox4.classList.add('hidden');
});



function dragElement4(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let isDragging = false;
    let isResizing = false;

    // Allow dragging only when clicking on the header or an area that is not interactive
    el.onmousedown = (e) => {
        if (!isInteractiveElement(e.target) && !isResizing) {
            isDragging = true;  // Enable dragging
            dragMouseDown(e);
        }
    };

    // Resizing
    const resizeArea = document.createElement('div');
    resizeArea.className = 'resize-area'; // Add class for styling
    resizeArea.style.width = '20px'; // Width of the resize handle
    resizeArea.style.height = '20px'; // Height of the resize handle
    resizeArea.style.position = 'absolute';
    resizeArea.style.bottom = '-10px'; // Move it outside the box
    resizeArea.style.right = '-10px'; // Move it outside the box
    resizeArea.style.cursor = 'nwse-resize';
    el.appendChild(resizeArea);

    resizeArea.onmousedown = (e) => {
        isResizing = true; // Enable resizing
        e.stopPropagation(); // Prevent the drag event from firing
        resizeMouseDown(e);
    };

    // Disable dragging when mouse is over the resize area
    el.onmouseover = (e) => {
        if (isInteractiveElement(e.target)) {
            el.style.cursor = 'default'; // Set cursor to default for inputs
        } else if (e.target === resizeArea) {
            el.style.cursor = 'nwse-resize'; // Change cursor to resize
        } else {
            el.style.cursor = 'move'; // Change cursor to move
        }
    };

    el.onmouseout = () => {
        el.style.cursor = 'move'; // Reset cursor
    };

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function resizeMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeResizeElement;
        document.onmousemove = elementResize;
    }

    function elementDrag(e) {
        if (isDragging) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
        }
    }

    function elementResize(e) {
        if (isResizing) {
            e.preventDefault();
            const newWidth = e.clientX - el.getBoundingClientRect().left + 10; // Added 10 for offset
            const newHeight = e.clientY - el.getBoundingClientRect().top + 10; // Added 10 for offset
            el.style.width = newWidth + 'px';
            el.style.height = newHeight + 'px';
        }
    }

    function closeDragElement() {
        isDragging = false; // Disable dragging
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function closeResizeElement() {
        isResizing = false; // Disable resizing
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function isInteractiveElement(target) {
        // Check if the target is an input, select, or textarea
        return target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA';
    }
}




function changeBoxColors3() {
    // Generate random colors in hexadecimal format
    const randomBorderColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Select the draggable box element
    const indraggableBox = document.getElementById("indraggableBox3");
    const draggableBox = document.getElementById("draggableBox4");

    // Change the border color and background color
    indraggableBox.style.borderColor = randomBorderColor;
    draggableBox.style.borderColor = randomBorderColor;
    indraggableBox.style.backgroundColor = randomBorderColor;
    indraggableBox.style.borderColor = randomBorderColor;
}





// LLAMA SECTION 


document.getElementById('llamaElement').addEventListener('click', function () {
    const draggableBox5 = document.getElementById('draggableBox5');
    draggableBox5.classList.toggle('hidden');

    if (!draggableBox5.classList.contains('hidden')) {
        dragElement5(draggableBox5);
    }
});



document.getElementById('closeButton5').addEventListener('click', function () {
    const draggableBox5 = document.getElementById('draggableBox5');
    draggableBox5.classList.add('hidden');
});



function dragElement5(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let isDragging = false;
    let isResizing = false;

    // Allow dragging only when clicking on the header or an area that is not interactive
    el.onmousedown = (e) => {
        if (!isInteractiveElement(e.target) && !isResizing) {
            isDragging = true;  // Enable dragging
            dragMouseDown(e);
        }
    };

    // Resizing
    const resizeArea = document.createElement('div');
    resizeArea.className = 'resize-area'; // Add class for styling
    resizeArea.style.width = '20px'; // Width of the resize handle
    resizeArea.style.height = '20px'; // Height of the resize handle
    resizeArea.style.position = 'absolute';
    resizeArea.style.bottom = '-10px'; // Move it outside the box
    resizeArea.style.right = '-10px'; // Move it outside the box
    resizeArea.style.cursor = 'nwse-resize';
    el.appendChild(resizeArea);

    resizeArea.onmousedown = (e) => {
        isResizing = true; // Enable resizing
        e.stopPropagation(); // Prevent the drag event from firing
        resizeMouseDown(e);
    };

    // Disable dragging when mouse is over the resize area
    el.onmouseover = (e) => {
        if (isInteractiveElement(e.target)) {
            el.style.cursor = 'default'; // Set cursor to default for inputs
        } else if (e.target === resizeArea) {
            el.style.cursor = 'nwse-resize'; // Change cursor to resize
        } else {
            el.style.cursor = 'move'; // Change cursor to move
        }
    };

    el.onmouseout = () => {
        el.style.cursor = 'move'; // Reset cursor
    };

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function resizeMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeResizeElement;
        document.onmousemove = elementResize;
    }

    function elementDrag(e) {
        if (isDragging) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
        }
    }

    function elementResize(e) {
        if (isResizing) {
            e.preventDefault();
            const newWidth = e.clientX - el.getBoundingClientRect().left + 10; // Added 10 for offset
            const newHeight = e.clientY - el.getBoundingClientRect().top + 10; // Added 10 for offset
            el.style.width = newWidth + 'px';
            el.style.height = newHeight + 'px';
        }
    }

    function closeDragElement() {
        isDragging = false; // Disable dragging
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function closeResizeElement() {
        isResizing = false; // Disable resizing
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function isInteractiveElement(target) {
        // Check if the target is an input, select, or textarea
        return target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA';
    }
}



function changeBoxColors4() {
    // Generate random colors in hexadecimal format
    const randomBorderColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Select the draggable box element
    const indraggableBox = document.getElementById("indraggableBox4");
    const draggableBox = document.getElementById("draggableBox5");

    // Change the border color and background color
    indraggableBox.style.borderColor = randomBorderColor;
    draggableBox.style.borderColor = randomBorderColor;
    indraggableBox.style.backgroundColor = randomBorderColor;
    indraggableBox.style.borderColor = randomBorderColor;
}


// POSTGRES SECTION 


document.getElementById('postgresElement').addEventListener('click', function () {
    const draggableBox6 = document.getElementById('draggableBox6');
    draggableBox6.classList.toggle('hidden');

    if (!draggableBox6.classList.contains('hidden')) {
        dragElement6(draggableBox6);
    }
});



document.getElementById('closeButton6').addEventListener('click', function () {
    const draggableBox6 = document.getElementById('draggableBox6');
    draggableBox6.classList.add('hidden');
});



function dragElement6(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let isDragging = false;
    let isResizing = false;

    // Allow dragging only when clicking on the header or an area that is not interactive
    el.onmousedown = (e) => {
        if (!isInteractiveElement(e.target) && !isResizing) {
            isDragging = true;  // Enable dragging
            dragMouseDown(e);
        }
    };

    // Resizing
    const resizeArea = document.createElement('div');
    resizeArea.className = 'resize-area'; // Add class for styling
    resizeArea.style.width = '20px'; // Width of the resize handle
    resizeArea.style.height = '20px'; // Height of the resize handle
    resizeArea.style.position = 'absolute';
    resizeArea.style.bottom = '-10px'; // Move it outside the box
    resizeArea.style.right = '-10px'; // Move it outside the box
    resizeArea.style.cursor = 'nwse-resize';
    el.appendChild(resizeArea);

    resizeArea.onmousedown = (e) => {
        isResizing = true; // Enable resizing
        e.stopPropagation(); // Prevent the drag event from firing
        resizeMouseDown(e);
    };

    // Disable dragging when mouse is over the resize area
    el.onmouseover = (e) => {
        if (isInteractiveElement(e.target)) {
            el.style.cursor = 'default'; // Set cursor to default for inputs
        } else if (e.target === resizeArea) {
            el.style.cursor = 'nwse-resize'; // Change cursor to resize
        } else {
            el.style.cursor = 'move'; // Change cursor to move
        }
    };

    el.onmouseout = () => {
        el.style.cursor = 'move'; // Reset cursor
    };

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function resizeMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeResizeElement;
        document.onmousemove = elementResize;
    }

    function elementDrag(e) {
        if (isDragging) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
        }
    }

    function elementResize(e) {
        if (isResizing) {
            e.preventDefault();
            const newWidth = e.clientX - el.getBoundingClientRect().left + 10; // Added 10 for offset
            const newHeight = e.clientY - el.getBoundingClientRect().top + 10; // Added 10 for offset
            el.style.width = newWidth + 'px';
            el.style.height = newHeight + 'px';
        }
    }

    function closeDragElement() {
        isDragging = false; // Disable dragging
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function closeResizeElement() {
        isResizing = false; // Disable resizing
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function isInteractiveElement(target) {
        // Check if the target is an input, select, or textarea
        return target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA';
    }
}




function changeBoxColors5() {
    // Generate random colors in hexadecimal format
    const randomBorderColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Select the draggable box element
    const indraggableBox = document.getElementById("indraggableBox5");
    const draggableBox = document.getElementById("draggableBox6");

    // Change the border color and background color
    indraggableBox.style.borderColor = randomBorderColor;
    draggableBox.style.borderColor = randomBorderColor;
    indraggableBox.style.backgroundColor = randomBorderColor;
    indraggableBox.style.borderColor = randomBorderColor;
}



// MYSQL SECTION 


document.getElementById('mysqlElement').addEventListener('click', function () {
    const draggableBox7 = document.getElementById('draggableBox7');
    draggableBox7.classList.toggle('hidden');

    if (!draggableBox7.classList.contains('hidden')) {
        dragElement7(draggableBox7);
    }
});



document.getElementById('closeButton7').addEventListener('click', function () {
    const draggableBox7 = document.getElementById('draggableBox7');
    draggableBox7.classList.add('hidden');
});



function dragElement7(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let isDragging = false;
    let isResizing = false;

    // Allow dragging only when clicking on the header or an area that is not interactive
    el.onmousedown = (e) => {
        if (!isInteractiveElement(e.target) && !isResizing) {
            isDragging = true;  // Enable dragging
            dragMouseDown(e);
        }
    };

    // Resizing
    const resizeArea = document.createElement('div');
    resizeArea.className = 'resize-area'; // Add class for styling
    resizeArea.style.width = '20px'; // Width of the resize handle
    resizeArea.style.height = '20px'; // Height of the resize handle
    resizeArea.style.position = 'absolute';
    resizeArea.style.bottom = '-10px'; // Move it outside the box
    resizeArea.style.right = '-10px'; // Move it outside the box
    resizeArea.style.cursor = 'nwse-resize';
    el.appendChild(resizeArea);

    resizeArea.onmousedown = (e) => {
        isResizing = true; // Enable resizing
        e.stopPropagation(); // Prevent the drag event from firing
        resizeMouseDown(e);
    };

    // Disable dragging when mouse is over the resize area
    el.onmouseover = (e) => {
        if (isInteractiveElement(e.target)) {
            el.style.cursor = 'default'; // Set cursor to default for inputs
        } else if (e.target === resizeArea) {
            el.style.cursor = 'nwse-resize'; // Change cursor to resize
        } else {
            el.style.cursor = 'move'; // Change cursor to move
        }
    };

    el.onmouseout = () => {
        el.style.cursor = 'move'; // Reset cursor
    };

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function resizeMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeResizeElement;
        document.onmousemove = elementResize;
    }

    function elementDrag(e) {
        if (isDragging) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
        }
    }

    function elementResize(e) {
        if (isResizing) {
            e.preventDefault();
            const newWidth = e.clientX - el.getBoundingClientRect().left + 10; // Added 10 for offset
            const newHeight = e.clientY - el.getBoundingClientRect().top + 10; // Added 10 for offset
            el.style.width = newWidth + 'px';
            el.style.height = newHeight + 'px';
        }
    }

    function closeDragElement() {
        isDragging = false; // Disable dragging
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function closeResizeElement() {
        isResizing = false; // Disable resizing
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function isInteractiveElement(target) {
        // Check if the target is an input, select, or textarea
        return target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA';
    }
}


// Helper function to determine if the target element is interactive
function isInteractiveElement(element) {
    return element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA';
}








function changeBoxColors6() {
    // Generate random colors in hexadecimal format
    const randomBorderColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Select the draggable box element
    const indraggableBox = document.getElementById("indraggableBox6");
    const draggableBox = document.getElementById("draggableBox7");

    // Change the border color and background color
    indraggableBox.style.borderColor = randomBorderColor;
    draggableBox.style.borderColor = randomBorderColor;
    indraggableBox.style.backgroundColor = randomBorderColor;
    indraggableBox.style.borderColor = randomBorderColor;
}



// SCREENSHOT BUTTON SAVE



document.getElementById("screenshotButton").addEventListener("click", function () {
    // Use html2canvas to take a screenshot of the body
    html2canvas(document.body).then(canvas => {
        // Create a PDF document
        const { jsPDF } = window.jspdf;

        // Get viewport dimensions
        const width = window.innerWidth; // Width of the viewport
        const height = window.innerHeight; // Height of the viewport

        const pdf = new jsPDF({
            orientation: 'landscape', // or 'landscape'
            unit: 'px', // Use pixels for units
            format: [width, height], // Set the format to the size of the viewport
            hotfixes: [] // Include hotfixes for better rendering
        });

        // Get the image data URL from the canvas
        const imgData = canvas.toDataURL("image/png");

        // Add the image to the PDF
        pdf.addImage(imgData, 'PNG', 0, 0, width, height);

        // Save the PDF
        pdf.save("SEBASTIAN_SITE.pdf");
    });
});




// ZOOM IN & OUT 



let zoomLevel = 1;

    document.getElementById("zoomInButton")?.addEventListener("click", function () {
        zoomLevel += 0.1; // Increase zoom level by 0.1
        document.getElementById("draggableBox").style.transform = `scale(${zoomLevel})`; 
        document.getElementById("draggableBox1").style.transform = `scale(${zoomLevel})`;
        document.getElementById("draggableBox3").style.transform = `scale(${zoomLevel})`;
        document.getElementById("draggableBox4").style.transform = `scale(${zoomLevel})`;
        document.getElementById("draggableBox5").style.transform = `scale(${zoomLevel})`;
        document.getElementById("draggableBox6").style.transform = `scale(${zoomLevel})`;
        document.getElementById("draggableBox7").style.transform = `scale(${zoomLevel})`;
    });

    document.getElementById("zoomOutButton").addEventListener("click", function () {
        if (zoomLevel > 0.2) { 
            zoomLevel -= 0.1; 
            document.getElementById("draggableBox").style.transform = `scale(${zoomLevel})`; 
            document.getElementById("draggableBox1").style.transform = `scale(${zoomLevel})`;
            document.getElementById("draggableBox3").style.transform = `scale(${zoomLevel})`;
            document.getElementById("draggableBox4").style.transform = `scale(${zoomLevel})`;
            document.getElementById("draggableBox5").style.transform = `scale(${zoomLevel})`;
            document.getElementById("draggableBox6").style.transform = `scale(${zoomLevel})`;
            document.getElementById("draggableBox7").style.transform = `scale(${zoomLevel})`;
        }
    });
