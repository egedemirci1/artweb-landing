import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Rich Color Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ana atmosferik katman */}
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-200/25 via-indigo-200/20 to-purple-200/15 rounded-full blur-3xl animate-pulse"></div>
        
        {/* İkincil atmosferik katman */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-200/20 via-purple-200/15 to-pink-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Üçüncü atmosferik katman */}
        <div className="absolute bottom-0 left-1/3 w-[900px] h-[900px] bg-gradient-to-br from-purple-200/15 via-pink-200/12 to-rose-200/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Dördüncü atmosferik katman */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-cyan-200/12 via-blue-200/10 to-indigo-200/8 rounded-full blur-3xl animate-pulse delay-3000"></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/8 to-indigo-100/12"></div>
        
        {/* Additional depth layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/10 via-blue-50/8 to-indigo-100/15"></div>
      </div>
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Benefits />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
