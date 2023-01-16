
        var container = document.getElementsByClassName('container')[0];
        var img = document.getElementsByClassName('img')[0];
        var getName = document.getElementsByClassName('name')[0];
        var id = document.getElementsByClassName('id')[0];s
        var email = document.getElementsByClassName('email')[0];
        
        function onSuccess(googleUser){
            var profile = googleUser.getBasicProfile();
            img.src = profile.getImageUrl();
            getName.innerHTML = profile.getName();
            id.innerHTML = profile.getId();
            email.innerHTML = profile.getEmail();
            console.log('Access Token: ' + googleUser.getAuthResponse().id_token);
            container.style.display = 'inline-block';
        }
        function onFailure(error){
            console.log(error);
        }
        function renderButton(){
            gapi.signin2.render('my-signin2', {
                'scope': 'profile email',
                'width': 100,
                'height': 30,
                'longtitle': true,
                'theme': 'dark',
                'onsuccess': onSuccess,
                'onfailure': onFailure
            })
        }
        function signOut(){
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function(){
                location.reload();
            });
            auth2.disconnect();
        }
