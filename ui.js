class UI{
    constructor(){
        this.profile = document.getElementById('profile')
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class ="card card-body">
            <div class="row">
                <div class ="col-md-3">
                <img class = "image-fulid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" class="btn btn-block btn-primary">View Profile</a>
                </div>
                <div class ="col-md-9 ml-2 mt-1">
                    <span class= "badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class= "badge badge-secondary">Public Gist: ${user.public_gists}</span>
                    <span class= "badge badge-info">Followers: ${user.followers}</span>
                    <span class= "badge badge-danger">Joined at: ${user.created_at}</span>
                </div>
            </div>
        </div>
        <br><br>
        <h3 class ="heading mx-auto">Latest Repos</h3>
        <div id ="repos"></div>
        `
    }

    showRepos(repo){
        
        let output ='';
        repo.forEach(repo => {
            output +=`
            <ul class="list-group">
            <li class="list-group-item">following:${user.following}</li>
            <li class="list-group-item">WEbsite/Blog:${user.blog}</li>
            <li class="list-group-item">Location:${user.location}</li>
            <li class="list-group-item">Last Seen:${user.updated_at}</li>                    
        </ul>
            `
        });
    }


    clearProfile(){
    this.profile.innerHTML =''
    }

    showAlert(msg,className){
    this.clearAlert()
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div,search)
    setTimeout(() => {document.querySelector('.alert').remove()},3000)

    }
    
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove()
        }
    }

}