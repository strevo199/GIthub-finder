
//init Github;
const github =new GitHub()
//init UI;
const ui =new UI()

//listeenr to searchUser;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',e =>{
    const userText = e.target.value;
    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //showAlert
                    ui.showAlert('User Not Found','alert alert-danger')
                } else {
                    //showProfile
                    ui.showProfile(data.profile)
                    ui.showRepos(data.repos)
                }
            })
        
    } else {
        //clearProfile
        ui.clearProfile()
    }
    

    e.preventDefault()
})