import XIcon from '@mui/icons-material/X'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
const Socials = () => {
  const style = {
    color: '#fff',
    borderRadius: '50px',
    border: '2px solid #fff',
    padding: '6px',
    fontSize: '40px',
    marginRight: '.6rem',
  }
  return (
    <div className="socials lg:flex">
      <XIcon sx={style} />
      <FacebookIcon sx={style} />
      <LinkedInIcon sx={style} />
      <InstagramIcon sx={style} />
      <YouTubeIcon sx={style} />
    </div>
  )
}

export default Socials
