var form = document.forms['login_form'];
var err_user1 = document.getElementById('err_user1');
var err_user2 = document.getElementById('err_user2');
var userName = form.username;
var passWord = form.password;
var user_pattern = new RegExp(userName.pattern);
var pwd_pattern = new RegExp(passWord.pattern);
function validate()
{
	if(userName.value.trim() == "")
	{
		showError(userName,err_user1,'please fill the field');
        return false;
	}
	else if(userName.value.trim().length < userName.minLength)
    {
                showError(userName,err_user1,'Required field should be atleast 6 characters');
                return false;  
    }
    else if(!user_pattern.test(userName.value.trim())) 
    {
                showError(userName,err_user1,'Invalid Pattern');
                return false; 
    }
    else if(passWord.value.trim() == "")
    {
        showError(passWord,err_user2,'Please fill the Field');
        return false;
    }
    else if(pwd_pattern.test(passWord.value.trim()))
    {
            showError(passWord,err_user2,'Must contain at least one number and one uppercase and lowercase letter');
            return false; 
    }   
    else
    {
        return true;
    }
}
function showError(ele,valid,msg)
{
    var userName = form.username;
    ele.style.border = "2px solid red";
    valid.classList.remove('d-none');
    valid.innerText = msg;
}