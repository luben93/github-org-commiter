let selectList = document.querySelector('select#commit-author-email.form-select');
let org = document.querySelector('a.url.fn').text;
fetch('https://api.github.com/orgs/'+org).then(resp=>{return resp.json()}).then(resp => {
    ownerDomain = resp.email.split('@')[1]
    for (var i in selectList ) {
        console.log(selectList[i])   
        if(selectList[i].value.includes(ownerDomain)){
            selectList[i].selected = true
        }
    }
});
