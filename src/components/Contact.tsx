
import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Contact = () => {
  const superprofileFormUrl = "https://superprofile.bio/lf/67a5d624b08b3900136a29b9";

  return (
    <section id="contact" className="section-padding bg-growzzy-light relative">
      <div className="bg-blob blob-3 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 fade-in-section">Get in Touch</h2>
          <p className="text-muted-foreground fade-in-section" data-delay="0.1">
            Let's discuss what your business needs to thrive online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="fade-in-section" data-delay="0.2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-display font-semibold mb-6">Ready to grow your business?</h3>
              <p className="text-muted-foreground mb-8">
                Fill out our quick form and we'll get back to you within 24 hours to discuss how we can help your business grow online.
              </p>
              
              <a 
                href={superprofileFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Complete Lead Form
                <ExternalLink className="w-5 h-5" />
              </a>
              
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Your information is secure and will never be shared with third parties.
              </p>
            </div>
          </div>
          
          <div className="fade-in-section" data-delay="0.4">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-display font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-growzzy-light rounded-full text-growzzy-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <a href="mailto:growzzymedia@gmail.com" className="text-growzzy-primary hover:underline">
                      growzzymedia@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-growzzy-light rounded-full text-growzzy-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <a href="tel:+919259737609" className="text-growzzy-primary hover:underline">
                      +91-9259737609
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/Growzzymedia" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-growzzy-light rounded-full text-growzzy-primary hover:bg-growzzy-primary hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/growzzy_media/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-growzzy-light rounded-full text-growzzy-primary hover:bg-growzzy-primary hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/growzzy-media/?viewAsMember=true" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-growzzy-light rounded-full text-growzzy-primary hover:bg-growzzy-primary hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
