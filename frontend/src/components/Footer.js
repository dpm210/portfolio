import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer(){

    function openToGit(){
        window.open("https://github.com/dpm210")
    }
    function openToLinkedIn(){
        window.open("https://www.linkedin.com/in/daniel-mueller-b8a01211a/")
    }

    function openToInsta(){
        window.open("https://www.instagram.com/thedanmueller/")
    }

    return(
        <div className="footer">
            <GitHubIcon className="link-icon" fontSize="large" onClick={openToGit} />
            <LinkedInIcon className="link-icon" fontSize="large" onClick={openToLinkedIn} />
            <InstagramIcon className="link-icon" fontSize="large" onClick={openToInsta} />
            <p>A React and Rails Project by Dan Mueller</p>
        </div>
    )
}

export default Footer