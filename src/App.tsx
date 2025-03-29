import React, { useState } from 'react';
import EnrollPage from './EnrollForm.jsx';
import MentorshipFormPage from './MentorshipForm.jsx'; 
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import {
    BookOpen,
    Code,
    Heart,
    Users,
    Laptop,
    GraduationCap,
    Calendar as CalendarIcon, 
    ArrowRight,
} from 'lucide-react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    Outlet,
} from 'react-router-dom';

type ResourceCardProps = {
    icon: React.ElementType;
    title: string;
    description: string;
    link: string;
};

function ResourceCard({
    icon: Icon,
    title,
    description,
    link,
}: ResourceCardProps) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <Icon className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <Link
                to={link}
                className="mt-4 flex items-center text-purple-600 hover:text-purple-700"
            >
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
        </div>
    );
}
  
function CodingBootcampsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <header className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                    Coding Bootcamps
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Our Coding Bootcamp provides immersive training in web development, data science, and mobile app development. Whether your goal is starting from scratch or looking to level up your skills, this program is designed to equip you with the knowledge you need to succeed in the tech industry.
                </p>
                <div className="flex justify-center gap-4">
                    <p>Schedule: 

                    <span className="text-purple-600 font-bold"> Monday - Friday, 9 AM - 5 PM</span>
                    <br />
                    Duration: <span className="text-purple-600 font-bold">12 weeks</span>
                    <br />
                    Start Date: <span className="text-purple-600 font-bold">Next one starts on 15th Jan 2024</span>
                    <br />
                    <br />
                    <p className="text-gray-600">Ready to take the next step in your tech career? Join our Coding Bootcamp today!</p>
                    <br />
                    <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition">
                        <Link to="/enroll" className="text-white-600 hover:text-white-700">Enroll Now</Link>
                    </button>
                    <br />
                    <p className="text-gray-600 mt-4">For any inquiries or to schedule a call with our admissions team, please <Link to="/contact" className="text-purple-600 hover:text-purple-700">contact us</Link>.</p>
                    <br />
                    <p className="text-gray-600">Our team is here to support you every step of the way!</p>
                    <br />
                    <p className="text-gray-600">Join our community of learners and start your journey towards a successful career in tech!</p>
                    <br />
                    </p>
                </div>
            </header>
            </div>
    );
}

function MentorshipPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <header className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                    Mentorships
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Our mentorship program connects aspiring tech professionals with experienced mentors from the industry. Whether you're looking for guidance on coding, career advice, or navigating the tech landscape, our mentors are here to support you. This program is designed to help you grow both personally and professionally in your tech journey.
                </p>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                As a mentee, you'll have the opportunity to work one-on-one with a mentor who can provide personalized guidance and support. Our mentors come from diverse backgrounds and have a wealth of experience in various tech fields, including software development, data science, UX/UI design, and more.
                </p>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                The mentorship program is flexible and can be tailored to your specific needs and goals. Whether you're looking for help with a specific project, preparing for technical interviews, or seeking advice on career advancement, our mentors are committed to helping you succeed.
                </p>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                To get started, simply fill out our mentorship application form, and we'll match you with a mentor based on your interests and goals. We also encourage mentors to share their own experiences and insights to help mentees navigate the tech industry more effectively.
                </p>
                <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition">
                        <Link to="/mentorshipForm" className="text-white-600 hover:text-white-700">Apply Now</Link>
                </button>
                <div className="flex justify-center gap-4">
                    <p>Join our mentorship program today and start your journey towards a successful tech career!</p>
                </div>
            </header>
            </div>
    );
}

function HealthWellnessPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            <header className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                    Mentorships
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    At TechUnity, we understand that mental health and wellness are crucial for success in the tech industry. Our Health & Wellness program is designed to provide support and resources to help you maintain a healthy work-life balance. We offer access to mental health resources, wellness workshops, and a supportive community to help you thrive both personally and professionally.
                </p>                 
                    <p className="text-gray-600">Our team is here to support you every step of the way!</p>
                  
                    <p className="text-gray-600">Join our community of learners and start your journey towards a successful career in tech!</p>
                  
                
                <div className="mt-10 mx-auto max-w-md '"> 
                <iframe
                    title="Online Heart Rate Monitor"
                    src="https://onlineheartrate.com/"
                    width="200%"
                    height="400"  
                    style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', marginLeft: '-230px' }}
                ></iframe>
              </div>
            </header>
        </div>
    );
}


function ScholarshipsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <header className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                    Scholorships
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Our Scholarships program provides financial support to individuals from underrepresented backgrounds who are pursuing careers in tech. We understand that the cost of education can be a barrier, and we are committed to helping you achieve your goals. Scholarships are available for various tech-related courses, certifications, and degree programs.
                </p>
                <div className="flex justify-center gap-4">
                    <p>Join our mentorship program today and start your journey towards a successful tech career!</p>
                </div>
            </header>
            </div>
    );
}

function TechEquipmentPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <header className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                    Tech Equipment
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Access to the right tech equipment is essential for success in the tech industry. Our Tech Equipment program provides laptops and other essential tech tools to individuals from underrepresented backgrounds. We aim to ensure that everyone has the resources they need to thrive in their tech careers, regardless of their financial situation.
                </p>
                <div className="flex justify-center gap-4">
                    <p>Through this program, we provide:</p>
                </div>
                <div className="relative">
    <ul className="list-disc text-left mx-auto max-w-md mt-4" style={{ transform: 'translateX(110px)' }}>
        <li>Laptops for coding and development</li>
        <li>Software licenses for essential tools</li>
        <li>Access to online learning platforms</li>
        <li>Technical support and resources</li>
    </ul>
</div>
                <div className="mt-10">
                    <p className="text-gray-600">To apply for tech equipment support, please contact our team for more information.</p>
                </div>
            </header>
            </div>
    );
}

function EventsPage() {
    const [date, setDate] = useState(new Date()); 

     const onChange = (date) => {
         setDate(date);
     };
    
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            <header className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                    Events
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    At TechUnity, we host a variety of events throughout the year to foster community engagement and support. Our events include networking opportunities, workshops, career fairs, and panel discussions focused on diversity in tech. These events are designed to connect you with industry professionals, provide valuable insights, and help you build a strong network within the tech community.
                </p>
                <div className="flex justify-center gap-4">
                    <p>Events are available for various tech-related courses, certifications, and degree programs. They are also open to all individuals from underrepresented backgrounds who are pursuing careers in tech.</p>
                </div>
                <div className="mt-8 flex justify-center">
                    <Calendar 
                        onChange={onChange}
                        value={date}
                    />
                 </div>
                <div className="text-center mt-4">
                     <p>Selected date: {date.toDateString()}</p>
                </div>
            </header>
        </div>
    );
}
function Layout() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            <header className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                    TechUnity
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Empowering minority groups to thrive in tech through education,
                    mentorship, and holistic support
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition">
                        Join Our Community
                    </button>
                    <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition">
                        Become a Mentor
                    </button>
                </div>
            </header>

            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Our Programs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ResourceCard
                        icon={Code}
                        title="Coding Bootcamps"
                        description="Intensive training programs in web development, data science, and mobile app development."
                        link="/coding-bootcamps"
                    />
                    <ResourceCard
                        icon={Users}
                        title="Mentorship"
                        description="Connect with experienced professionals who can guide your tech journey."
                        link="/mentorship"
                    />
                    <ResourceCard
                        icon={Heart}
                        title="Health & Wellness"
                        description="Access to mental health resources and wellness programs designed for tech professionals."
                        link="/health-wellness"
                    />
                    <ResourceCard
                        icon={BookOpen}
                        title="Scholarships"
                        description="Financial support for education and certification programs."
                        link="https://www.fastweb.com/ppc?utm_source=bing&utm_medium=ppc&ESRC=fw_msn.kw&msclkid=256c42ac525c17ee8a392544721d9285"
                        isExternal={true}
                    />
                    <ResourceCard
                        icon={Laptop}
                        title="Tech Equipment"
                        description="Access to laptops and essential tech tools through our equipment support program."
                        link="/tech-equipment"
                    />
                    <ResourceCard
                        icon={CalendarIcon}
                        title="Events"
                        description="Networking events, workshops, and career fairs focused on diversity in tech."
                        link="/events"
                    />
                </div>
            </section>

            <section className="bg-purple-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">1000+</div>
                            <div>Community Members</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">200+</div>
                            <div>Successful Placements</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <div>Partner Companies</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">100+</div>
                            <div>Active Mentors</div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">TechUnity</h3>
                            <p className="text-gray-400">
                                Empowering minorities in tech through education and
                                support.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Programs</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Coding Bootcamps</li>
                                <li>Mentorship</li>
                                <li>Health Support</li>
                                <li>Scholarships</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Resources</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Blog</li>
                                <li>Events</li>
                                <li>Success Stories</li>
                                <li>Partner Network</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Contact</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>techunity@gmail.com</li>
                                <li>012-345-6789</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/coding-bootcamps" element={<CodingBootcampsPage />} />
                <Route path="/mentorship" element={<MentorshipPage />} />
                <Route path="/health-wellness" element={<HealthWellnessPage />} />
                <Route path="/scholarships" element={<ScholarshipsPage />} />
                <Route path="/tech-equipment" element={<TechEquipmentPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/enroll" element={<EnrollPage />} /> 
                <Route path="/mentorshipForm" element={<MentorshipFormPage />} /> 
            </Routes>
        </Router>
    );
}

export default App;