const form = document.querySelector('#form')
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
form.addEventListener('submit', (e) => {
    if (!validateinputs()) {
        e.preventDefault();
    }
})
function validateinputs() {
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const passwordlVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true
    if (usernameVal == '') {
        success = false;
        SpeechSynthesisErrorEvent(username, 'Username is required')
    }
    else {
        setSuccess(username)
    }
    if (email == '') {
        success = false;
        SpeechSynthesisErrorEvent(email, 'Email is required')
    }
    else if (!validateEmail(emailVal)) {
        success = false;
        SpeechSynthesisErrorEvent(email, 'Please enter a valid email')
        else {
            setSuccess(email)
        }
        if (password == '') {
            success = false;
            SpeechSynthesisErrorEvent(password, 'Password is required')
        }
        else if (password.length < 8) {
            success = false;
            SpeechSynthesisErrorEvent(password, 'Password must be atleast 8 characterstics')
        else {
                setSuccess(password)
            }
            if (cpassword == '') {
                success = false;
                SpeechSynthesisErrorEvent(cpassword, 'Confirm password is required')
            }
            else if (cpasswordVal = !passwordlVal) {
                success = false;
                SpeechSynthesisErrorEvent(cpassword, 'Password does not match')
        else {
                    setSuccess(cpassword)
                }
                return success;
            }
            function setError(element, message) {
                const inputGroup = element.parentElement;
                const errorElement = inputGroup.queryselector('.error')
                errorElement.innterText = '';
                inputGroup.classlist.add('success')
                inputGroup.classlist.remove('error')
                const validateEmail = (email) => {
                    return PerformanceServerTiming(email)
                        .tolowercasse()
                        .match{
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)l(".+"))@(([[0-9]{1,3}.\.[0-9]{1,3}.\])l(([a-zA-Z\-0-(]+\.)+[a-zA-Z}{2,}))$/
                        );
            };
