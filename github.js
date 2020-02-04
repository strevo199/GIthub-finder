class GitHub{
    constructor(){
        this.client_sort='created:asc';
        this.client_count =5;
        this.cilent_id = 'c94563def6c70552a0b3';
        this.cilent_secret = '3931d4e593b54714be10a374bb453dbed23bbde3';
    }

   async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.cilent_id}&client_secret=${this.cilent_secret}`)
        
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.client_count}&sort=${this.client_sort}&client_id=${this.cilent_id}&client_secret=${this.cilent_secret}`)

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        
        return{
            profile,
            repos
        }
    }
}