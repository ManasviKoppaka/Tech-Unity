import React from 'react';
import {
    BookOpen,
    Code,
    Heart,
    Users,
    Laptop,
    GraduationCap,
    Calendar,
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
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Coding Bootcamps</h1>
            <p>Learn more about our intensive coding bootcamps...</p>
        </div>
    );
}

function MentorshipPage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Mentorship</h1>
            <p>Discover how our mentors can guide you...</p>
        </div>
    );
}

function HealthWellnessPage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Health & Wellness</h1>
            <p>Check out our wellness programs and mental health support.</p>
        </div>
    );
}

function ScholarshipsPage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Scholarships</h1>
            <p>Learn about financial support opportunities...</p>
        </div>
    );
}

function TechEquipmentPage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Tech Equipment</h1>
            <p>Discover how you can get access to essential tech equipment</p>
        </div>
    );
}

function EventsPage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Events</h1>
            <p>Discover upcoming networking events and workshops.</p>
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
                        link="/scholarships"
                    />
                    <ResourceCard
                        icon={Laptop}
                        title="Tech Equipment"
                        description="Access to laptops and essential tech tools through our equipment support program."
                        link="/tech-equipment"
                    />
                    <ResourceCard
                        icon={Calendar}
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
            </Routes>
        </Router>
    );
}

export default App;