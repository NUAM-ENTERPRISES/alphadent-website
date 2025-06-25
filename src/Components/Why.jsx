import React, { useEffect } from 'react';
import './Why.css';
import { Link } from 'react-router-dom';
import aligners from '../assets/aligners.jpg'; // Update this path
import healthreview from '../assets/healthreview.jpg'; // Update this path
import implants from '../assets/implants-.jpg'; // Update this path
import general from '../assets/general.jpg'; // Update this path
import cosmetic from '../assets/cosmetic.jpg'; // Update this path
import pedia from '../assets/pedia.jpg'; // Update this path
import surgery from '../assets/surgery.jpg'; // Update this path
import whitening from '../assets/whitening.jpg'; // Update this path
import lasers from '../assets/lasers.jpg'; // Update this path
import rehab from '../assets/rehab.jpg'; // Update this path
import rootcanal from '../assets/rootcanal.jpg'; // Update this path
import D1 from '../assets/D1.jpg'; // Update this path
import D2 from '../assets/D2.jpg'; // Update this path
import dhealth from '../assets/dhealth.png'; // Update this path
import D3 from '../assets/D3.jpg'; // Update this path
import i1 from '../assets/i1.jpg'; // Update this path
import i3 from '../assets/i3.jpg'; // Update this path
import i4 from '../assets/i4.jpg'; // Update this path
import i5 from '../assets/i5.jpg'; // Update this path
const services = [
{
  title: 'Dental Health Review',
  description: 'Prevention is key to maintaining optimal oral health!',
  image: healthreview,
  // descriptions: 'At Alphadent dental clinic, prevention is key to maintaining optimal oral health...',
  details: {
    heading: 'About Dental Health Review',
    betweenImage: dhealth,
    subSections: [
      { subheading: 'Comprehensive Checkup', paragraph: 'At Alphadent dental clinic, prevention is key to maintaining optimal oral health. That’s why we offer comprehensive Dental Health Reviews – a vital first step for anyone seeking a healthy and confident smile. Your Dental Health Review is a thorough examination conducted by our highly skilled dental professionals. It goes beyond a simple check-up, providing a detailed assessment of your oral health and forming the foundation for a personalized treatment plan.Our services range extensively from single tooth replacement to the replacement of all teeth, from titanium implants to zirconia or basal implants, and from immediate implants to single stage or two stage implants.' },
      { subheading: 'Benefits Of A Regular Dental Health Review', paragraph: 'Early Detection and Prevention: Regular reviews help identify potential problems early on, allowing for timely treatment and preventing more complex issues down the road. Personalised Treatment Plan: Based on your review results, we\'ll create a personalised treatment plan to address your specific needs and goals. Improved Oral Health: By identifying and addressing issues promptly, you can maintain optimal oral health, promoting overall well-being. Enhanced Confidence: A healthy smile boosts your confidence and allows you to greet the world with a smile.' },
     { subheading: 'Dental Health Review Price List', paragraph: 'While we aim for transparent pricing at Alphadent dental clinic, the individualised nature of dental work means costs can vary. Online pricing is for guidance only; a consultation is required for a personalised and accurate quote.New Patient Consultation (Adult): Rs 300' },
    ],
    galleryImages: [D1, D2, D3],
    faq: [
      {
        question: 'What is a dental health review?',
        answer: 'A comprehensive checkup evaluating your oral health and recommending necessary treatments.',
      },
      {
        question: 'How often should I get a dental health review?',
        answer: 'At least once every 6 months for preventive care.',
      },
      {
        question: 'Does the review include X-rays?',
        answer: 'Yes, if the dentist feels X-rays are needed for a full diagnosis.',
      },
      {
        question: 'Is the procedure painful?',
        answer: 'No, it’s a non-invasive and comfortable process.',
      },
      {
        question: 'How long does the dental review take?',
        answer: 'Typically 30 to 45 minutes.',
      },
      {
        question: 'What happens after the review?',
        answer: 'You’ll get a full oral health report and a personalized treatment plan.',
      },
    ],
  }
},
{
  title: 'Dental Implants',
  description: 'Replace missing teeth with natural-looking solutions for lasting smile',
  image: implants,
  descriptions: 'Dental Implants are the perfect solution for missing teeth...',
  details: {
    heading: 'About Dental Implants',
    betweenImage: i4,
    subSections: [
      { subheading: 'Dental Implants', paragraph: 'Dental Implants are the perfect solution for missing teeth. Explore cutting-edge dental implant solutions with digital protocols. Specializing in All-on-X, zygomatic, and basal implants designed to restore functionality and enhance aesthetics with expert precision.Our services range extensively from single tooth replacement to the replacement of all teeth, from titanium implants to zirconia or basal implants, and from immediate implants to single stage or two stage implants.' },
      { subheading: 'Benefits of Dental Implants', paragraph: 'Dental implants offer numerous advantages, including improved appearance, enhanced speech, and increased comfort. They function like natural teeth, allowing for easier eating and better oral health.' },
      { subheading: 'The Dental Implant Procedure', paragraph: 'The process typically involves several steps: initial consultation, implant placement, healing period, and attachment of the crown. Each phase is carefully planned to ensure optimal results.' },
      { subheading: 'Aftercare and Maintenance', paragraph: 'Proper care is essential for the longevity of dental implants. Regular dental check-ups, good oral hygiene, and avoiding harmful habits can help maintain your implants for years to come.' },
      { subheading: 'Why Choose Us?', paragraph: 'Our experienced team is dedicated to providing personalized care and the latest techniques in dental implantology. We prioritize patient comfort and satisfaction throughout the entire process.' },
      { subheading: 'Success Rate of Dental Implants', paragraph: 'Dental implants boast a high success rate, often exceeding 98%. Factors contributing to this success include proper placement, patient health, and adherence to aftercare instructions. Our team is committed to ensuring the best outcomes for every patient.' },
      { subheading: 'Types of Dental Implants', paragraph: 'There are various types of dental implants available, including endosteal and subperiosteal implants. Endosteal implants are placed directly into the jawbone, while subperiosteal implants are positioned under the gum but above the jawbone. Understanding the differences helps patients choose the best option for their needs.' },
      { subheading: 'Who is a Candidate for Dental Implants?', paragraph: 'Not everyone is an ideal candidate for dental implants. Factors such as bone density, overall health, and oral hygiene play a crucial role in determining candidacy. A thorough evaluation by our dental professionals will help assess individual suitability for this treatment.' },
      { subheading: 'Cost of Dental Implants', paragraph: 'The cost of dental implants can vary based on several factors, including the type of implant, the complexity of the procedure, and any additional treatments required. We offer transparent pricing and financing options to make dental implants accessible to more patients.' },
    ],
    galleryImages: [i1, i3, i5],
     faq: [
      {
        question: 'What is a dental implant?',
        answer: 'A dental implant is a titanium post surgically placed into the jawbone to replace a missing tooth root, serving as a base for a crown or bridge.',
      },
      {
        question: 'How long do dental implants last?',
        answer: 'With proper care, dental implants can last a lifetime, typically 10-15 years or more.',
      },
      {
        question: 'Is the dental implant procedure painful?',
        answer: 'The procedure is performed under anesthesia, so it’s generally painless, with mild discomfort during recovery.',
      },
      {
        question: 'Who is a good candidate for dental implants?',
        answer: 'Healthy individuals with sufficient jawbone density and good oral health are ideal candidates.',
      },
      {
        question: 'How long does the dental review take?',
        answer: 'The process can take 3 to 6 months, including healing and placement of the final crown.',
      },
      {
        question: 'What are the benefits of dental implants?',
        answer: 'They improve appearance, speech, and chewing ability, while also preventing bone loss and supporting adjacent teeth.',
      },
     ],
  }
},
{
  title: 'General Dentistry',
  description: 'General dentistry encompasses a comprehensive range of dental services',
  image: general,
  descriptions: 'General dentistry encompasses a comprehensive range of dental services...',
  details: {
    heading: 'About General Dentistry',
    subSections: [
      { subheading: 'Routine Checkups', paragraph: 'Regular exams and cleanings to maintain oral health...' },
      { subheading: 'Preventive Treatments', paragraph: 'Fluoride treatments, sealants, and patient education...' },
      { subheading: 'Common Procedures', paragraph: 'Fillings, extractions, and other basic restorative work...' },
    ],
    galleryImages: [general, general, general],
  }
},
{
  title: 'Cosmetic and Smile makeover',
  description: 'Alphadent dental clinic, Crafting Your Dream Smile with Cosmetic Dentistry',
  image: cosmetic,
  descriptions: 'At alphadent multi specialty dental Clinic, we believe a confident smile is a powerful asset...',
  details: {
    heading: 'About Cosmetic Dentistry',
    subSections: [
      { subheading: 'Smile Design', paragraph: 'Customized plans for reshaping your smile...' },
      { subheading: 'Teeth Whitening', paragraph: 'Effective techniques to brighten your teeth...' },
      { subheading: 'Veneers & Bonding', paragraph: 'Cover imperfections with dental veneers and bonding...' },
    ],
    galleryImages: [cosmetic, cosmetic, cosmetic],
  }
},
{
  title: 'Oral Surgery',
  description: 'Specialized oral surgery, with a focus on patient comfort and safety!',
  image: surgery,
  descriptions: 'Our surgical procedures are completely painless and comfortable...',
  details: {
    heading: 'About Oral Surgery',
    subSections: [
      { subheading: 'Tooth Extractions', paragraph: 'Safe and gentle removal of problematic teeth...' },
      { subheading: 'Wisdom Teeth Removal', paragraph: 'Expert care for impacted wisdom teeth...' },
      { subheading: 'Post-Surgery Care', paragraph: 'Detailed aftercare instructions for a smooth recovery...' },
    ],
    galleryImages: [surgery, surgery, surgery],
  }
},
{
  title: 'Aligner (Invisalign Provider)',
  description: 'Straighten your teeth without coming to anyones notice!',
  image: aligners,
  descriptions: 'Invisalign Clear Braces. Invisalign straightens teeth using a series of custom-made clear aligners...',
  details: {
    heading: 'About Invisalign Treatment',
    subSections: [
      { subheading: 'How It Works', paragraph: 'Clear aligners gradually move your teeth into place...' },
      { subheading: 'Advantages', paragraph: 'Nearly invisible, removable, and comfortable to wear...' },
      { subheading: 'Expected Results', paragraph: 'Most patients see results within a few months...' },
    ],
    galleryImages: [aligners, aligners, aligners],
  }
},
{
  title: 'Pediatric Dentistry',
  description: 'Alphadent Dental Care for your childs dental needs!',
  image: pedia,
  descriptions: 'At Alphadent dental clinic, we offer high quality pediatric dental care...',
  details: {
    heading: 'About Pediatric Dentistry',
    subSections: [
      { subheading: 'Child-Friendly Environment', paragraph: 'We create a stress-free atmosphere for kids...' },
      { subheading: 'Specialist Pediatric Dentists', paragraph: 'Experienced doctors for all children dental needs...' },
      { subheading: 'Preventive Care', paragraph: 'Focus on prevention, education, and early detection...' },
    ],
    galleryImages: [pedia, pedia, pedia],
  }
},
{
  title: 'Teeth whitening',
  description: 'Bring back the sparkle in your smile!',
  image: whitening,
  descriptions: 'Transform your dull, stained or yellowish teeth into the perfect set of pearly whites...',
  details: {
    heading: 'About Teeth Whitening',
    subSections: [
      { subheading: 'In-Clinic Whitening', paragraph: 'Fast and effective treatments done at our clinic...' },
      { subheading: 'At-Home Kits', paragraph: 'Convenient whitening kits for home use...' },
      { subheading: 'Safety Tips', paragraph: 'Our experts guide you to avoid sensitivity...' },
    ],
    galleryImages: [whitening, whitening, whitening],
  }
},
{
  title: 'Laser',
  description: 'Laser technology for advanced dental treatments',
  image: lasers,
  descriptions: 'Explore Laser technology that can be used within a wide spectrum of dental treatments...',
  details: {
    heading: 'About Laser Dentistry',
    subSections: [
      { subheading: 'Gum Treatments', paragraph: 'Precise reshaping and cleaning of gums...' },
      { subheading: 'Root Canal Support', paragraph: 'Better sterilization during root canal treatments...' },
      { subheading: 'Tooth Whitening', paragraph: 'Faster and more effective whitening using lasers...' },
    ],
    galleryImages: [lasers, lasers, lasers],
  }
},
{
  title: 'Full Mouth Rehabilitation',
  description: 'Next-gen Full Mouth Restoration at Alphadent Dental Clinic',
  image: rehab,
  descriptions: 'Full mouth rehabilitation is a comprehensive dental treatment...',
  details: {
    heading: 'About Full Mouth Rehabilitation',
    subSections: [
      { subheading: 'Customized Treatment Plans', paragraph: 'We evaluate your entire oral condition...' },
      { subheading: 'Restorative Procedures', paragraph: 'Includes crowns, bridges, and implants...' },
      { subheading: 'Bite Correction', paragraph: 'We fix bite misalignments for comfort and function...' },
    ],
    galleryImages: [rehab, rehab, rehab],
  }
},
{
  title: 'Painless root canal treatment',
  description: 'Completely pain-free root canal treatments!',
  image: rootcanal,
  descriptions: 'Root canal work involves removing the infected pulp and filling the root canals...',
  details: {
    heading: 'About Root Canal Treatment',
    subSections: [
      { subheading: 'Why It’s Needed', paragraph: 'To treat infected or damaged tooth pulp...' },
      { subheading: 'Step-by-Step Process', paragraph: 'Includes cleaning, shaping, and sealing the canals...' },
      { subheading: 'Post-Treatment Recovery', paragraph: 'Care instructions and expected healing time...' },
    ],
    galleryImages: [rootcanal, rootcanal, rootcanal],
  }
}
,  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacements for missing teeth with lasting results.',
    image: '/images/implants.jpg'
  },  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacements for missing teeth with lasting results.',
    image: '/images/implants.jpg'
  }
];

const Why = () => {
  useEffect(() => {
    const heading = document.querySelector('.section-heading');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the heading is visible
    );

    if (heading) {
      observer.observe(heading);
    }

    return () => {
      if (heading) {
        observer.unobserve(heading);
      }
    };
  }, []);

  return (
    <div>
       <h4 className="sectionhead">what we do</h4>
      <h1 className="section-heading">Our Services</h1>
      <div className="service-slider" id="service">
        <div className="service-track">
          {[...services, ...services].map((service, index) => (
            <Link
              key={index}
              to={`/service/${encodeURIComponent(service.title)}`}
              state={{ service }}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                className="service-card"
                role="button"
                tabIndex={0}
              >
                <img src={service.image} alt={service.title} className="card-image" />
                <div className="overlay">
                  <h1>{service.title}</h1>
                  <p>{service.description}</p>
                  <span className="read-more-btn">Read More...!</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button className="small-center-btn">See All Services</button>
        </div>
      </div>
    </div>
  );
};

export default Why;