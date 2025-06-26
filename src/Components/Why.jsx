import React, { useEffect, useState } from 'react';
import './Why.css';
import { useNavigate } from 'react-router-dom';

// Image imports
import aligners from '../assets/aligners.jpg';
import healthreview from '../assets/healthreview.jpg';
import implants from '../assets/implants-.jpg';
import general from '../assets/general.jpg';
import cosmetic from '../assets/cosmetic.jpg';
import pedia from '../assets/pedia.jpg';
import surgery from '../assets/surgery.jpg';
import whitening from '../assets/whitening.jpg';
import lasers from '../assets/lasers.jpg';
import rehab from '../assets/rehab.jpg';
import rootcanal from '../assets/rootcanal.jpg';
import D1 from '../assets/D1.jpg';
import D2 from '../assets/D2.jpg';
import dhealth from '../assets/dhealth.png';
import D3 from '../assets/D3.jpg';
import i1 from '../assets/i1.jpg';
import i3 from '../assets/i3.jpg';
import i4 from '../assets/i4.jpg';
import i5 from '../assets/i5.jpg';
import g1 from '../assets/g1.jpg';
import g2 from '../assets/g2.jpg';
import g3 from '../assets/g3.jpg';
// import g4 from '../assets/g4.jpg';
import g5 from '../assets/g5.png';
const services = [
  {
    title: 'Dental Health Review',
    description: 'Prevention is key to maintaining optimal oral health!',
    image: healthreview,
    details: {
      heading: 'About Dental Health Review',
      betweenImage: dhealth,
      subSections: [
        { subheading: ' Dental Health Review', paragraph: 'At Alphadent dental clinic, prevention is key to maintaining optimal oral health. That’s why we offer comprehensive Dental Health Reviews – a vital first step for anyone seeking a healthy and confident smile. Your Dental Health Review is a thorough examination conducted by our highly skilled dental professionals. It goes beyond a simple check-up, providing a detailed assessment of your oral health and forming the foundation for a personalized treatment plan.Our services range extensively from single tooth replacement to the replacement of all teeth, from titanium implants to zirconia or basal implants, and from immediate implants to single stage or two stage implants.' },
        { subheading: 'Benefits Of A Regular Dental Health Review', paragraph: 'Early Detection and Prevention: Regular reviews help identify potential problems early on, allowing for timely treatment and preventing more complex issues down the road. Personalised Treatment Plan: Based on your review results, we\nll create a personalised treatment plan to address your specific needs and goals. Improved Oral Health: By identifying and addressing issues promptly, you can maintain optimal oral health, promoting overall well-being. Enhanced Confidence: A healthy smile boosts your confidence and allows you to greet the world with a smile.' },
        { subheading: 'Dental Health Review Price List', paragraph: 'While we aim for transparent pricing at Alphadent dental clinic, the individualised nature of dental work means costs can vary. Online pricing is for guidance only; a consultation is required for a personalised and accurate quote. New Patient Consultation (Adult): Rs 300' }
      ],
      galleryImages: [D1, D2, D3],
      faq: [
        { question: 'What is a dental health review?', answer: 'A dental health review is a comprehensive assessment of your oral health. It includes a thorough examination of your teeth, gums, and jaw, as well as a discussion of your dental history and any concerns you may have.' },
        { question: 'How often should I get a dental health review?', answer: 'At least once every 6 months.' },
        { question: 'What happens during a dental health review?', answer: 'During a dental health review, our dentist will examine your teeth and gums, take X-rays if necessary, and discuss any concerns you may have. We may also provide recommendations for treatment or preventive care.'},
        { question: 'Is a dental health review painful?', answer: 'No, a dental health review is not painful. It is a non-invasive procedure that is designed to be comfortable for you.' },
        { question: 'How long does a dental health review take?', answer: 'A dental health review typically takes about 30-60 minutes, depending on the complexity of your case.' },
        { question: 'What should I do to prepare for a dental health review?', answer: 'There is no special preparation required for a dental health review. However, it is helpful to bring any relevant medical history or medications you are taking.' },
        { question: 'What if I have dental anxiety?', answer: 'If you have dental anxiety, please let us know before your appointment. We can provide options to help you feel more comfortable during your review.' },
        { question: 'What if I need treatment after my dental health review?', answer: 'If we identify any issues during your review, we will discuss treatment options with you and create a personalized plan to address your needs.' },
      ],
    }
  },
  {
    title: 'Dental Implants',
    description: 'Replace missing teeth with lasting solutions.',
    image: implants,
    details: {
      heading: 'About Dental Implants',
      betweenImage: i4,
      subSections: [
        { subheading: 'Dental Implants', paragraph: 'Dental Implants are the perfect solution for missing teeth. Explore cutting-edge dental implant solutions with digital protocols. Specializing in All-on-X, zygomatic, and basal implants designed to restore functionality and enhance aesthetics with expert precision. Our services range extensively from single tooth replacement to the replacement of all teeth, from titanium implants to zirconia or basal implants, and from immediate implants to single stage or two stage implants.' },
        { subheading: 'Benefits', paragraph: 'Dental implants offer numerous advantages, including improved appearance, enhanced speech, and increased comfort. They function like natural teeth, allowing for easier eating and better oral health.' },
        { subheading: 'The Dental Implant Procedure',paragraph: 'The process typically involves several steps: initial consultation, implant placement, healing period, and attachment of the crown. Each phase is carefully planned to ensure optimal results.'},
        { subheading: 'Aftercare and Maintenance',paragraph:'Proper care is essential for the longevity of dental implants. Regular dental check-ups, good oral hygiene, and avoiding harmful habits can help maintain your implants for years to come.'},
        { subheading: 'Why Choose Us?',paragraph:'Our experienced team is dedicated to providing personalized care and the latest techniques in dental implantology. We prioritize patient comfort and satisfaction throughout the entire process.'},
        {subheading:'Success Rate of Dental Implants',paragraph:'Dental implants boast a high success rate, often exceeding 98%. Factors contributing to this success include proper placement, patient health, and adherence to aftercare instructions. Our team is committed to ensuring the best outcomes for every patient.'},
        {subheading:'Types of Dental Implants',paragraph:'There are various types of dental implants available, including endosteal and subperiosteal implants. Endosteal implants are placed directly into the jawbone, while subperiosteal implants are positioned under the gum but above the jawbone. Understanding the differences helps patients choose the best option for their needs.'},
        { subheading:'Who is a Candidate for Dental Implants?',paragraph:'Not everyone is an ideal candidate for dental implants. Factors such as bone density, overall health, and oral hygiene play a crucial role in determining candidacy. A thorough evaluation by our dental professionals will help assess individual suitability for this treatment.'},
        {subheading:'Cost of Dental Implants',paragraph:'The cost of dental implants can vary based on several factors, including the type of implant, the complexity of the procedure, and any additional treatments required. We offer transparent pricing and financing options to make dental implants accessible to more patients.'},
      ],
      galleryImages: [i1, i3, i5],
      faq: [
        { question: 'What is a dental implant?', answer: 'A titanium post placed in the jawbone.' },
        { question: 'How long do they last?', answer: 'Typically 10-15 years or more.' },
        { question: 'Are dental implants painful?', answer: 'Most patients report minimal discomfort during the procedure.' },
        { question: 'How long does the procedure take?', answer: 'The process can take several months, including healing time.' },
        { question: 'What is the success rate of dental implants?', answer: 'Success rates are high, often exceeding 95%.' },
        { question: 'Can anyone get dental implants?', answer: 'Most people are candidates, but a consultation is necessary.' },
        { question: 'How do I care for dental implants?', answer: 'Regular brushing, flossing, and dental check-ups are essential.' },
        { question: 'What if I have bone loss?', answer: 'Bone grafting may be needed to support the implant.' },
        { question: 'What if I have dental issues?', answer: 'Dental implants may not be the best choice for people with severe dental issues.' },
      ],
    }
  },
  { title: 'General Dentistry', 
    description: 'Comprehensive dental services.', 
    image: general ,
    details: {
      heading: 'About General Dentistry',
      betweenImage: g5,
      subSections: [
        { subheading: 'General Dentistry', paragraph: 'General dentistry encompasses a comprehensive range of dental services essential for maintaining optimal oral health. From routine check-ups and cleanings to preventative treatments like fillings and extractions, general dentistry forms the foundation of a healthy smile. It’s the proactive approach to oral care that helps prevent serious dental issues, ensuring your teeth and gums remain in excellent condition.' },
        { subheading: 'Why Choose Alphadent For Your General Dental Care?', paragraph: 'Our skilled oral surgeons are dedicated to providing compassionate care in a state-of-the-art facility. We strive to make your experience as comfortable and stress-free as possible, ensuring optimal outcomes for your oral health.' },
        { subheading: 'Dentistry Is Our Passion, Our Mission.', paragraph: 'At Alphadent Clinic, we’re committed to providing comprehensive general dental care to patients of all ages. Our experienced dentists prioritise your oral health and comfort, ensuring you receive the highest quality care in a friendly and welcoming environment. Whether you’re seeking routine dental check-ups, cosmetic treatments, or restorative procedures, we have the expertise and technology to deliver exceptional results.' },
        { subheading: 'General dentistry services', paragraph: 'Dental check up.Dental hygiene.Dental fillings.Periodontics.Dental extractions.' }   ,
        { subheading: 'Dental hygiene', paragraph: 'At Alphadent Clinic, nizampet, we believe that maintaining excellent oral hygiene is the foundation for a healthy and confident smile. That’s why we offer comprehensive dental hygiene services delivered by our team of highly experienced and friendly dentists. Dental Hygiene refers to the practice of maintaining the health of your teeth and gums. This includes daily brushing and flossing at home, combined with regular professional cleanings and preventative treatments performed by a hygienist.' },
        { subheading:'Dental fillings',paragraph:'A tried and tested general dentistry treatment, fillings prolong the lives of teeth and often prevent more intrusive or complicated treatments. The functionality of fillings is not in doubt, but now many people understandably demand more aesthetically pleasing dental treatments for a more natural-looking smile'},
        { subheading:'What You Can Expect?',paragraph:'White fillings – perhaps more accurately described as ‘tooth-coloured’– are made from a composite material which can be closely matched to the colour of your teeth. Many people find that white fillings help them to talk, laugh and eat with greater confidence, safe in the knowledge that they will not be displaying dark coloured-fillings when they open their mouths..'},
        { subheading:'How much does it cost?',paragraph:'While We aim for transparent pricing at Alphadent dental Clinic, the individual nature of dental treatment means costs can vary. Online pricing is for guidance only.Composite fillings starts from rs 1000/-'},
        {subheading:'Dental extraction',paragraph:'A very common reason for extraction involves a tooth that is too badly damaged from trauma or decay to be repaired. At Alphadent , we are committed to the principle that permanent teeth can last a lifetime and we will always do our best to preserve your natural teeth wherever we possibly can.Nevertheless, teeth that have become damaged or decayed do sometimes need to be extracted.Simple extraction,Surgical extraction,Orthodontic extraction.'},
        {subheading:'Simple extraction',paragraph:'Tooth extraction is usually a straightforward procedure. Local Anaesthetic is used to numb your tooth and the surrounding gum area. When the area is completely numb we can remove the tooth pain-free. This is usually a quick procedure without the need of surgical intervention or stitches.'},
        {subheading:'Surgical extraction',paragraph:'Sometimes, teeth can be lying at an unfavourable angle, be broken down or buried in bone. These teeth may need to be removed by one of our Consultant Oral Surgeons, who will surgically remove the tooth. Bone removal may also be required and the area stitched to place the gum in its normal position.'},
        {subheading:'Orthodontic extraction',paragraph:'Teeth may have to be removed to make room for overcrowded teeth. This is usually carried out prior to fitting an Orthodontic brace. In certain situations, teeth may be buried but not require extraction. It may be necessary to expose these teeth prior to an Orthodontic bracket fitting.'},
        {subheading:'How Much Does Treatment Cost?',paragraph:'While we aim for transparent pricing, the individual nature of dental work means costs can vary.'},
        {subheading:'Periodontics.',paragraph:'At Alphadent dental clinic, we understand the importance of healthy gums for a beautiful and functional smile. Our team of experienced dentists covers all of comprehensive periodontics services to treat and prevent gum disease, keeping your teeth strong and healthy for life.'}
      ],
      galleryImages: [g1, g2, g3],
      faq: [
        { question: 'What is general dentistry?', answer: 'General dentistry focuses on the prevention, diagnosis, and treatment of a wide range of dental issues.' },
        { question: 'How often should I visit the dentist?', answer: 'It is recommended to visit the dentist at least twice a year for routine check-ups.' },
        { question: 'What are common general dentistry procedures?', answer: 'Common procedures include cleanings, fillings, root canals, and extractions.' },
        { question: 'How can I maintain good oral health?', answer: 'Regular brushing, flossing, and dental check-ups are essential for maintaining good oral health.' },
        { question: 'What should I do if I have a dental emergency?', answer: 'Contact our clinic immediately for guidance on how to handle dental emergencies.' },
        { question: 'What is dental hygiene?', answer: 'Dental hygiene is the practice of maintaining the health of your teeth and gums.' },
        { question: 'What is a dental examination?', answer: 'A dental examination is a comprehensive examination of your teeth, gums, and jaw.' },
        { question: 'What are dental implants?', answer: 'Dental implants are titanium posts placed in the jawbone.' },
        { question: 'How long do dental implants last?', answer: 'Typically 10-15 years or more.' },
        { question: 'What is a dental filling?', answer: 'A dental filling is a material used to fill cavities or restore damaged teeth.' },
        { question: 'What is a dental extraction?', answer: 'A dental extraction is the removal of a tooth from its socket in the bone.' },
        
      ],
    }
  },
  { title: 'Cosmetic and Smile makeover', description: 'Crafting Your Dream Smile.', image: cosmetic },
  { title: 'Oral Surgery', description: 'Comfort-focused oral surgery.', image: surgery },
  { title: 'Aligner (Invisalign Provider)', description: 'Straighten teeth invisibly.', image: aligners },
  { title: 'Pediatric Dentistry', description: 'Dental Care for Kids.', image: pedia },
  { title: 'Teeth whitening', description: 'Bring back your smile sparkle.', image: whitening },
  { title: 'Laser', description: 'Advanced laser dental treatments.', image: lasers },
  { title: 'Full Mouth Rehabilitation', description: 'Full Smile Restoration.', image: rehab },
  { title: 'Painless root canal treatment', description: 'Pain-free root canals.', image: rootcanal }
];

const Why = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const heading = document.querySelector('.section-heading');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (heading) observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  const handleServiceClick = (service) => {
    navigate(`/service/details/${encodeURIComponent(service.title)}`, {
      state: { service },
    });
  };

  useEffect(() => {
    if (showAll) {
      navigate('/services', { state: { services } });
    }
  }, [showAll, navigate]);

  return (
    <div>
      <h4 className="sectionhead">what we do</h4>
      <h1 className="section-heading">Our Services</h1>

      <div className="service-slider" id="service">
        <div className="service-track">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              role="button"
              tabIndex={0}
              onClick={() => handleServiceClick(service)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleServiceClick(service); }}
            >
              <img src={service.image} alt={service.title} className="card-image" />
              <div className="overlay">
                <h1>{service.title}</h1>
                <p>{service.description}</p>
                <span className="read-more-btn">Read More...!</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button className="small-center-btn" onClick={() => setShowAll(true)}>
            See All Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Why;