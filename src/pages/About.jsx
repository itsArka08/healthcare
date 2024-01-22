import ChildCare from "../components/core/ChildCare"
import FeaturedDoctors from "../components/core/FeaturedDoctors"
import PersonalCare from "../components/core/PersonalCare"





const About = () => {
  return (
    <div>
      <section class="page-title bg-1">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block text-center">
          <span class="text-white">About Us</span>
          <h1 class="text-capitalize mb-5 text-lg">About Us</h1>

          
        </div>
      </div>
    </div>
  </div>
</section>

<PersonalCare/>

<ChildCare/>

<FeaturedDoctors/>


    </div>
  )
}

export default About
