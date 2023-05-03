import { throttle } from "lodash";
const inputEmail = document.querySelector('input[type="email"]');
const areaMsg = document.querySelector('textarea[name="message"]');
const submitBtn = document.querySelector('button[type="submit"]');
const form = document.querySelector('.feedback-form');
const LOCAL_KEY = "feedback-form-state";
const dataStorage = {};
setInputValueFromStorage();
form.addEventListener('input', throttle(storeData, 500))
submitBtn.addEventListener('submit', clearData);
function storeData(evt){
    dataStorage[evt.target.name]= evt.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(dataStorage));
};
function setInputValueFromStorage(){
    const inputArray = localStorage.getItem(LOCAL_KEY);
    if(inputArray){
        const storage = JSON.parse(inputArray);
        areaMsg.value = storage.message;
        inputEmail.value = storage.email;
        
    }
};
function clearData(evt){
    console.log(JSON.parse(LOCAL_KEY));
    console.log(areaMsg.value);
    console.log(inputEmail.value); 
    localStorage.removeItem(LOCAL_KEY);
    form.reset();
};