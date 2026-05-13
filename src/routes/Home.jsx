import Grid from '@mui/material/Grid'
import '../styles/Home.css'
import meProfile from '../assets/meProfile.jpeg'
import meViolinYoung from '../assets/meViolinYoung.jpeg'
import bali from '../assets/bali.jpeg'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export default function Home () {
  return (
  <>
  <div>
    <p className="text-block">linguistically-savvy dev striving to break down communication barriers, improve information accessibility, and inspire creativity</p>
    <Grid container spacing={10} className="about-container" justifyContent="center">

        <Grid xs={12} md={3}>
               <Card className="location-card" id="first">
                 <CardContent>
      <h4>software engineer</h4>
    </CardContent>
    
    <img src={meProfile} alt="Colleen smiling" className="location-image" />

  </Card>
        </Grid>

        <Grid xs={12} md={3}>
               <Card className="location-card" id="second">
    
    <img src={meViolinYoung} alt="Colleen as an 8 year old playing violin" className="location-image" />

    <CardContent>
      <h4>musician</h4>
    </CardContent>

  </Card>
        </Grid>

        <Grid xs={12} md={3}>
               <Card className="location-card" id="third">
                <CardContent>
      <h4>world traveler</h4>
    </CardContent>
    
    <img src={bali} alt="couple looking out at peninsula" className="location-image" />

  </Card>
        </Grid>

      </Grid>
  </div>
  </>
  )
}
