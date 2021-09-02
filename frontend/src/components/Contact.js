import Button from '@material-ui/core/Button';

function Contact(){

    function sendEmail(){
        window.location.href = "mailto:danielpetermueller@gmail.com";

    }

    return(
        <div>
            <h1>Reach Out</h1>
            <p>Have a question or project in mind? Feel free to shoot an email and I'll get back to you as soon as possible!</p>
            <Button color="inherit" onClick={sendEmail} variant="outlined">Send Email</Button>
        </div>
    )
}

export default Contact