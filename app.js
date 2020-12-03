//temp

const form = document.querySelector('#add-group-form');
const groupList = document.querySelector('#group-list');
const groupDash = document.querySelector('#group-dashboard');
const data1 = document.querySelector('#data');

//lists groups on home page\

function listGroups(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let button = document.createElement('button');

    button.innerHTML = "Add Group to dashboard";

    //li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;

    li.appendChild(name);
    li.appendChild(button);
    
    groupList.appendChild(li);
}

//lists groups on users dashboard
/** Do not use or delete
function listDash(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    

    //li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;

    li.appendChild(name);
   
    
    groupDash.appendChild(li);
}*/

//collections for index.html\

db.collection('Groups').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        
        listGroups(doc);
        //let button = document.createElement('BUTTON');
        
    });
});
//collections for groupPage.html 
/** Do Not Use or delete
db.collection('Groups').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        
        listDash(doc);
        let button = document.createElement('BUTTON');
        
    })
})*/
//saving data

//this is for adding to the form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Groups').add({
        name: form.name.value,
        class: form.class.value,
        professor: form.professor.value,
        person: '',
        person2: '',
        person3: ''
    });
    
});
//creates a link for the group page button

/** 
function buttonAdd()
{
    function listDash(doc){
        let li = document.createElement('li');
        let name = document.createElement('span');
        
    
        //li.setAttribute('data-id', doc.id);
        name.textContent = doc.data().name;
    
        li.appendChild(name);
       
        
        groupDash.appendChild(li);
    }
    db.collection('Groups').get().then((snaphot) => {
        snapshot.docs.forEach(doc => {
            
            listDash(doc);
            let button = document.createElement('BUTTON');
            
        });
    })
}*/



//group page stuff
function dashboard(doc){
    
}

