import {useEffect} from 'react';
import GoogleLogin from 'react-google-login';
const CLIENT_ID = '550467040202-papd023rtkrv64nkq62s6t4l9gshsr1t.apps.googleusercontent.com';
const App = () => {
    const successLogin = (res) => {
        localStorage.setItem('googleToken', res.tokenId)
        localStorage.setItem('googleUserData', JSON.stringify(res))
    }
    const failLogin = (res) => {
        console.log('Fail', res);
    }
    function myFunction(xml) {
        var xmlDoc = xml.responseXML;
        document.getElementById("a").innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    }
    const checkLogin = async () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this);
                let parser = new DOMParser();
                console.log(parser.parseFromString(this.responseXML,"text/xml"));           
                myFunction(this);
            }
        };
        xhttp.open("GET", "http://localhost:8080?tokenId="+localStorage.getItem('googleToken'), true);
        xhttp.send();
    }
    useEffect(()=>{
        checkLogin();
    }, [])

    return (
        <div>
            <GoogleLogin
                clientId={CLIENT_ID}
                buttonText="Login with Google"
                onSuccess={successLogin}                
                onFailure={failLogin}      
                cookiePolicy={'single_host_origin'}          
            />
        </div>
    );
};

export default App;