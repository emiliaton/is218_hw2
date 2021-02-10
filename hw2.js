function formValidation()
{
    var fname = document.registration.firstname;
    var lname = document.registration.lastname;
    var uemail = document.registration.email;
    if (allLetter(fname))
        {
            if(allletter(lname))
            {
                if (ValidateEmail(uemail)) {

                }
            }
        }
    return false;
}

function allLetter(fname)
{
    var letters = /^[A-Za-z]+$/;
    if(fname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('First name must have alphabet characters only');
        fname.focus();
        return false;
    }
}

function allletter(lname)
{
    var letters = /^[A-Za-z]+$/;
    if(lname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Last name must have alphabet characters only');
        lname.focus();
        return false;
    }
}

function ValidateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}
