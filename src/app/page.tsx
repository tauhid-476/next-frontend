import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import GridWithMovingCards from "@/components/GridWithMovingCards";
import HeroSection from "@/components/HeroSection";
import MeetOurInstructors from "@/components/MeetOurInstructors";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return ( 
    <>
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
   
    <HeroSection />
    <FeaturedCourses />
    <WhyChooseUs />
    <GridWithMovingCards />
    <UpcomingWebinars />
    <MeetOurInstructors />
    <Footer />
    </main>
    </>
  );
}
