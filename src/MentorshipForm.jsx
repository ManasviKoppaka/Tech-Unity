function EnrollPage() {
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSflObtG0gJO1Pe07vaLIAWbRSfe9u_Dddc21e4sVlNcz834nw/viewform?usp=sharing"; 
  
    return (
       <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                Enroll Now
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                   Please fill out the form below to enroll in our coding bootcamp.
                </p>
           <div className="flex justify-center">
               <iframe
                   src={googleFormUrl}
                   width="640"
                   height="1000" 
                   frameBorder="0"
                   marginHeight="0"
                   marginWidth="0"
                   title="Enrollment Form"
               >
                   Loading...
               </iframe>
           </div>
        </div>
        </div>
    );
  }
  
  export default EnrollPage;