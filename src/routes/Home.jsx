import Grid from '@mui/material/Grid'
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
               <Card className="location-card">
                 <CardContent>
      <h4 variant="h6">software engineer</h4>
    </CardContent>
    
    <img src={meProfile} alt="Forest in Portland" className="location-image" />

  </Card>
        </Grid>

        {/* St. Louis Card */}
        <Grid xs={12} md={3}>
               <Card className="location-card">
    
    <img src={meViolinYoung} alt="St. Louis Gateway Arch at sunset" className="location-image" />

    <CardContent>
      <h4>musician</h4>
    </CardContent>

  </Card>
        </Grid>

        <Grid xs={12} md={3}>
               <Card className="location-card ">
                <CardContent>
      <h4>traveler</h4>
    </CardContent>
    
    <img src={bali} alt="couple looking out at peninsula" className="location-image" />

  </Card>
        </Grid>

      </Grid>
  </div>
  </>
  )
}
