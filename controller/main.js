import { CLOUDINARY_PRESET, CLOUDINARY_URL } from "../constant/config.js";

const lessons = [
    {
        id: 'lesson16',
        label: 'Lesson 16'
    },
    {
        id: 'lesson17',
        label: 'Lesson 17'
    },
    {
        id: 'lesson18',
        label: 'Lesson 18'
    }
];

/**
 * This function to handle click event on lesson item to change the view
 * 
 * @param {*} e: event object
 */
const handleFileClick = (e) => {
    console.log(e.target.id);
    const lessonId = e.target.id;
    document.getElementById('view-lesson').src = `./lessons/${lessonId}.html`;
}

/**
 * This function to handle search lesson
 * 
 * @param {*} e: event object
 */
const searchLesson = (e) => {
    const searchValue = e.target.value;
    const listLessonFound = lessons.filter(lesson => lesson.label.toLowerCase().includes(searchValue.toLowerCase()));
    document.getElementById('list-lesson').innerHTML = getListLesson(listLessonFound);
}

/**
 * This functions to get list lesson
 * 
 * @returns list item element
 */
const getListLesson = (list) => {
    let result = '';
    list.forEach(lesson => {
        result +=
            `<li class="flex items-center gap-2">
            <img 
                class="w-7 h-7 rounded-full" 
                src="https://th.bing.com/th/id/OIP.PHBTJoshbg880IH9z_PB6QAAAA?rs=1&pid=ImgDetMain"
                alt="js logo"
            >
            <a id="${lesson.id}" onclick="handleFileClick(event)" class="hover:underline hover:font-medium cursor-pointer">${lesson.label}</a>
        </li>`;
    });
    return result;
}

/**
 * This function to change avatar
 * 
 * @param {*} e 
 * @returns 
 */
const changeAvatar = (e) => {
    if (!e.target.files.length) return;

    const file = e.target.files[0];
    if (!file.type.startsWith('image')) {
        alert('Please select an image file');
        return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_PRESET);

    fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            document.getElementById('avatar-img').src = data.secure_url;
            localStorage.setItem('avatar', data.secure_url);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

//main 
document.addEventListener('DOMContentLoaded', () => {
    const avatar = localStorage.getItem('avatar');
    if (avatar) {
        document.getElementById('avatar-img').src = avatar;
    }
    document.getElementById('list-lesson').innerHTML = getListLesson(lessons);
});


window.searchLesson = searchLesson;
window.handleFileClick = handleFileClick;
window.changeAvatar = changeAvatar;