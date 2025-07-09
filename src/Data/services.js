// src/data/services.js
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
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import crown from '../assets/crown.jpg'
const services = [
  {
    title: 'Dental Health Review',
    description: 'Prevention is key to maintaining optimal oral health!',
    image: healthreview,
    points:['Regular checkups keep your teeth and gums healthy.','Professional cleaning prevents cavities and bad breath','Good oral hygiene boosts overall well-being.'],
    details: {
      heading: 'About Dental Health Review',
      betweenImage: dhealth,
      subSections: [
        { subheading: ' Dental Health Review', paragraph: 'At Alphadent dental clinic, prevention is key to maintaining optimal oral health. That’s why we offer comprehensive Dental Health Reviews – a vital first step for anyone seeking a healthy and confident smile. Your Dental Health Review is a thorough examination conducted by our highly skilled dental professionals. It goes beyond a simple check-up, providing a detailed assessment of your oral health and forming the foundation for a personalized treatment plan.' },
        { subheading: 'Benefits Of A Regular Dental Health Review', 
           points: [
      'Early Detection and Prevention: Regular reviews help identify potential problems early on, allowing for timely treatment and preventing more complex issues down the road.',
      'Personalised Treatment Plan: Based on your review results, we’ll create a personalised treatment plan to address your specific needs and goals.',
      'Improved Oral Health: By identifying and addressing issues promptly, you can maintain optimal oral health, promoting overall well-being.',
      'Enhanced Confidence: A healthy smile boosts your confidence and allows you to greet the world with a smile.',
    ],
     },
        { subheading: 'Dental Health Review Price List', paragraph: 'While we aim for transparent pricing at Alphadent dental clinic, the individualised nature of dental work means costs can vary. Online pricing is for guidance only; a consultation is required for a personalised and accurate quote. New Patient Consultation (Adult): Rs 300' }
      ],
      galleryImages: [D1, D2, D3],
      faq: [
        { question: 'What is a dental health review?', answer: 'A dental health review is a comprehensive assessment of your oral health. It includes a thorough examination of your teeth, gums, and jaw, as well as a discussion of your dental history and any concerns you may have.' },
        { question: 'How often should I get a dental health review?', answer: 'The frequency of dental health reviews depends on your individual needs and risk factors. However, most dentists recommend at least two reviews per year.' },
        { question: 'What Is Involved In A Dental Health Review?',  paragraph: 'A dental health review typically includes:',answer: [
            'A visual examination of your teeth and gums',
            'X-rays of your teeth and jaw',
            'A discussion of your dental history and any concerns you may have',
            'A professional cleaning to remove plaque and tartar buildup'
        ]
        },
        { question: 'What if I need further treatment?', answer: 'If your dental health review reveals any problems, we will discuss your treatment options with you. We will work with you to develop a personalised treatment plan that meets your needs and budget.' },
        { question: 'Do You Offer Emergency Dental Care?', answer: 'Yes, we offer emergency dental care for patients experiencing dental pain or other urgent dental problems. Please contact our office immediately if you require emergency dental care.' },
        { question: 'How Can I Schedule A Dental Health Review?', answer: 'You can schedule a dental health review by calling our office at 9088708870.' },
        { question: 'What if I have dental anxiety?', answer: 'We understand that some people may feel anxious about visiting the dentist. At Parkway Clinic, we are committed to providing a comfortable and relaxing environment for all of our patients. We offer a variety of techniques to help manage dental anxiety, including sedation and nitrous oxide.' },
        { question: 'What if I need treatment after my dental health review?', answer: 'If we identify any issues during your review, we will discuss treatment options with you and create a personalized plan to address your needs.' },
        { question:'Do You Offer Emergency Dental Care?',answer:'Yes, we offer emergency dental care for patients experiencing dental pain or other urgent dental problems. Please contact our office immediately if you require emergency dental care'}
      ],
    }
  },
  {
    title: 'Dental Implants',
    description: 'Replace missing teeth with natural-looking solutions for lasting smile',
    image: implants,
     points:['Dental implants restore missing teeth naturally.','They provide strong, long-lasting support.','Improve your smile and chewing comfort.'],
    details: {
      heading: 'About Dental Implants',
      betweenImage: i4,
      subSections: [
        { subheading: 'Dental Implants', paragraph: 'Explore cutting-edge dental implant solutions with digital protocols.Dealing with a missing tooth can be frustrating and uncomfortable.The Perfect Solution to Replace Missing Teeth Form, function and aesthetics are at the forefront of our dental implant solutions.Single, multiple or full mouth dental implants are the best solution to replace damaged or missing teeth.This natural tooth replacement method has been effectively utilised by millions of people worldwide for more than 50 years. At Alphadent dental  Clinic, we provide advanced dental solutions that can restore your smile. ',
          points:['Look Younger:Missing teeth may make your face look sunken and older than your age. Implants give you a well-balanced jawline, improve your smile.','Life-long Solution: They are strong and extremely durable, lasting for a lifetime.','chew easily:implant functions like natural tooth, so you can enjoy all foods without discomfort in biting and chewing'],
         },
        { subheading: 'Benefits', paragraph: 'Dental implants offer numerous advantages, including improved appearance, enhanced speech, and increased comfort. They function like natural teeth, allowing for easier eating and better oral health.' },
        { subheading: 'The Dental Implant Procedure',paragraph: 'The process typically involves several steps: initial consultation, implant placement, healing period, and attachment of the crown. Each phase is carefully planned to ensure optimal results.'},
        { subheading: 'Aftercare and Maintenance',paragraph:'Proper care is essential for the longevity of dental implants. Regular dental check-ups, good oral hygiene, and avoiding harmful habits can help maintain your implants for years to come.'},
        { subheading: 'Why Choose Us?',paragraph:'Successfully replacing teeth using implants is an extremely "technique-sensitive" process that requires great expertise. Our expertise is dedicated to providing personalized care and the latest techniques in dental implantology',
          points:['International Quality Standards','All our implant systems meet the most stringent of international quality standards.','Success Rate of Dental Implants: Dental implants boast a high success rate, often exceeding 98%. Factors contributing to this success include proper placement, patient health, and adherence to aftercare instructions. Our team is committed to ensuring the best outcomes for every patient.','Aesthetics In Dental Implants:A dental implant procedure is carefully planned to ensure the dental restoration appears natural in shape and position. This requires a perfect blend of an artistic mind with surgical genius.','VISIT OUR ALPHADENT DENTAL IMPLANT SPECIALIST:If you are searching for high quality dental implants in nizampet, we encourage you to contact our office to schedule a consultation today! ']
        },
        {subheading:'Success Rate of Dental Implants',paragraph:'Dental implants boast a high success rate, often exceeding 98%. Factors contributing to this success include proper placement, patient health, and adherence to aftercare instructions. Our team is committed to ensuring the best outcomes for every patient.'},
        {subheading:'Types of Dental Implants',paragraph:'Endosteal, Subperiosteal, zygomatic, All-on-4, Implant Overdentures, and Implant-Supported Bridges',
          points:['Endosteal Implants:Endosteal Implants, which are the preferred choice of most people, are inserted into the bone using screws to anchor replacement teeth. These implants have a titanium root that is placed into the jawbone, providing a stable foundation for the replacement tooth.','Subperiosteal Implants: When there is inadequate bone to sustain the implant, Subperiosteal Implants are favored as they are placed on the bone. They serve to hold the prosthetic tooth by being situated over the jawbone','All-on-4 or All-on-6 Dental Implants:For those looking to avoid dentures, All-on-4/  All-on-6 Dental Implants offer a great solution. This treatment involves placing small titanium screws into the jawbone, followed by a crown, creating a natural-looking and functional tooth. Four or six implants are typically used for each jaw during this process.','Implant Overdentures:For people who are suitable for tooth extraction, Implant Overdentures offer a better alternative to traditional dentures. These dentures attach to implants, providing more stability than regular dentures and improving chewing, speaking, comfort, and possibly working with existing dentures.','Implant Supported Bridges: Implant-supported bridges are a good option for multiple missing teeth They have three parts: the implant, abutment, and restoration. This design reduces pressure on individual implants from grinding.','The first appointment includes a dental history, X-rays, and possibly a CT scan. After the implant is placed, the restoration phase starts with a second surgery, followed by attaching the permanent bridge on the last visit.' ]
        },
        { subheading:'Who is a Candidate for Dental Implants?',paragraph:'Not everyone is an ideal candidate for dental implants. Factors such as bone density, overall health, and oral hygiene play a crucial role in determining candidacy. A thorough evaluation by our dental professionals will help assess individual suitability for this treatment.'},
        {subheading:'Cost of Dental Implants',paragraph:'The cost of dental implants can vary based on several factors, including the type of implant, the complexity of the procedure, and any additional treatments required. We offer transparent pricing and financing options to make dental implants accessible to more patients.'},
      ],
      galleryImages: [i1, i3, i5],
      faq: [
        { question: 'What Are Dental Implants And How Do They Work?', answer: 'Dental implants are titanium posts surgically placed into the jawbone to replace missing tooth roots.They provide a stable foundation for crowns, bridges, or dentures.' },
        { question: 'How Long Does The Dental Implant Process Take?', answer: 'The process can take 3 months, including healing time for osseointegration (fusion of the implant with the bone).' },
        { question: 'Are dental implants painful?', answer: 'While some discomfort is expected after the procedure, local anaesthesia, sedation and general anaesthetic options are available to minimize pain during placement' },
        { question: 'Am I A Good Candidate For Dental Implants?', answer: 'Generally, individuals with sufficient jawbone density and good oral health are suitable candidates. A consultation at Parkway Clinic will determine your eligibility.' },
        { question: 'What Are The Benefits Of Dental Implants Compared To Other Tooth Replacement Options?', answer: 'Implants Offer Superior Stability, Prevent Bone Loss, And Provide A Natural-Looking And Long-Lasting Solution Compared To Bridges Or Dentures.' },
        { question: 'How Do I Care For My Dental Implants?', answer: 'Maintain good oral hygiene practices, including regular brushing, flossing, and professional dental cleanings.' },
        { question: 'Can I Drive Home After General Anaesthesia?', answer: 'No, it would be best not to drive home after general anaesthesia. You will need someone to accompany you home and stay with you for at least 24 hours.' },
        { question: 'What Is The Cost Of Dental Implants At Alphadent dental Clinic?', answer: 'The cost varies depending on the number of implants needed and the complexity of the procedure. A personalised treatment plan and cost estimate will be provided during your consultation.' },
        { question: '- Can Dental Implants Replace Multiple Missing Teeth?', answer: 'Yes, dental implants can support bridges or dentures to replace multiple missing teeth.' },
        { question:'What Are The Potential Risks Or Complications Associated With Dental Implants?',answer:'While rare, potential risks include infection, nerve damage, and implant failure. Our experienced team at Alphadent dental Clinic takes precautions to avoid these risks.'},
        {questons:'How Long Do Dental Implants Last?',answer:'With proper care, dental implants can last a lifetime.'},
      ],
    }
  },
  { title: 'General Dentistry', 
    description: 'General dentistry encompasses a comprehensive range of dental services', 
    image: general ,
     points:['We care for your teeth with routine checkups.','Cleanings and fillings keep your smile healthy.','Early treatment prevents bigger dental issues.'],
    details: {
      heading: 'About General Dentistry',
      betweenImage: g5,
      subSections: [
        { subheading: 'General Dentistry', paragraph: 'General dentistry encompasses a comprehensive range of dental services essential for maintaining optimal oral health. From routine check-ups and cleanings to preventative treatments like fillings and extractions, general dentistry forms the foundation of a healthy smile. It’s the proactive approach to oral care that helps prevent serious dental issues, ensuring your teeth and gums remain in excellent condition.' },
        { subheading: 'Why Choose Alphadent For Your General Dental Care?', paragraph: 'At Alphadent Clinic, we’re committed to providing comprehensive general dental care to patients of all ages. Our experienced dentists prioritise your oral health and comfort, ensuring you receive the highest quality care in a friendly and welcoming environment. Dentistry Is Our Passion, Our Mission.Whether you’re seeking routine dental check-ups, cosmetic treatments, or restorative procedures, we have the expertise and technology to deliver exceptional results.' },
        { subheading: 'Dentistry Is Our Passion, Our Mission.', paragraph: 'At Alphadent Clinic, we’re committed to providing comprehensive general dental care to patients of all ages. Our experienced dentists prioritise your oral health and comfort, ensuring you receive the highest quality care in a friendly and welcoming environment. Whether you’re seeking routine dental check-ups, cosmetic treatments, or restorative procedures, we have the expertise and technology to deliver exceptional results.' },
        { subheading: 'General dentistry services',
          points:[
            'Dental check up',
            'Dental hygiene',
            'Dental fillings',
            'Root canal treatments',
            'Periodontics',
            'Dental extractions'
        ]
      },
        { subheading: 'Dental hygiene', paragraph: 'At Alphadent Clinic, nizampet, we believe that maintaining excellent oral hygiene is the foundation for a healthy and confident smile. That’s why we offer comprehensive dental hygiene services delivered by our team of highly experienced and friendly dentists. Dental Hygiene refers to the practice of maintaining the health of your teeth and gums. This includes daily brushing and flossing at home, combined with regular professional cleanings and preventative treatments performed by a hygienist.' },
        { subheading:'Dental fillings',paragraph:'A tried and tested general dentistry treatment, fillings prolong the lives of teeth and often prevent more intrusive or complicated treatments. The functionality of fillings is not in doubt, but now many people understandably demand more aesthetically pleasing dental treatments for a more natural-looking smile'},
        { subheading:'What You Can Expect?',paragraph:'White fillings – perhaps more accurately described as ‘tooth-coloured’– are made from a composite material which can be closely matched to the colour of your teeth. Many people find that white fillings help them to talk, laugh and eat with greater confidence, safe in the knowledge that they will not be displaying dark coloured-fillings when they open their mouths..'},
        { subheading:'How much does it cost?',paragraph:'While We aim for transparent pricing at Alphadent dental Clinic, the individual nature of dental treatment means costs can vary. Online pricing is for guidance only.Composite fillings starts from rs 1000/-'},
        {subheading:'Dental extraction',paragraph:'A very common reason for extraction involves a tooth that is too badly damaged from trauma or decay to be repaired. At Alphadent , we are committed to the principle that permanent teeth can last a lifetime and we will always do our best to preserve your natural teeth wherever we possibly can.Nevertheless, teeth that have become damaged or decayed do sometimes need to be extracted.',
          points:['Simple extraction',
            'Surgical extraction',
            'Orthodontic extraction.']
          },
        {subheading:'Simple extraction',paragraph:'Tooth extraction is usually a straightforward procedure. Local Anaesthetic is used to numb your tooth and the surrounding gum area. When the area is completely numb we can remove the tooth pain-free. This is usually a quick procedure without the need of surgical intervention or stitches.'},
        {subheading:'Surgical extraction',paragraph:'Sometimes, teeth can be lying at an unfavourable angle, be broken down or buried in bone. These teeth may need to be removed by one of our Consultant Oral Surgeons, who will surgically remove the tooth. Bone removal may also be required and the area stitched to place the gum in its normal position.'},
        {subheading:'Orthodontic extraction',paragraph:'Teeth may have to be removed to make room for overcrowded teeth. This is usually carried out prior to fitting an Orthodontic brace. In certain situations, teeth may be buried but not require extraction. It may be necessary to expose these teeth prior to an Orthodontic bracket fitting.'},
        {subheading:'How Much Does Treatment Cost?',paragraph:'While we aim for transparent pricing, the individual nature of dental work means costs can vary.'},
        {subheading:'Periodontics.',paragraph:'At Alphadent dental clinic, we understand the importance of healthy gums for a beautiful and functional smile. Our team of experienced dentists covers all of comprehensive periodontics services to treat and prevent gum disease, keeping your teeth strong and healthy for life.'}
      ],
      galleryImages: [g1, g2, g3],
      faq: [
        { question: 'What is general dentistry?', answer: 'Dental hygiene is the practice of maintaining the health of your teeth and gums. It involves regular brushing and flossing, along with professional cleanings by a dentist or dental hygienist.' },
        { question: 'How Often Should I Have A Dental Hygiene Appointment?', answer: 'During a dental hygiene appointment, your dentist/hygienist will clean your teeth to remove plaque and tartar buildup. They will also examine your gums for signs of gum disease and provide you with personalized oral hygiene advice.' },
        { question: 'What Happens During A Dental Hygiene Appointment?', answer: 'During a dental hygiene appointment, your dentist/hygienist will clean your teeth to remove plaque and tartar buildup. They will also examine your gums for signs of gum disease and provide you with personalized oral hygiene advice.' },
        { question: 'What Is The Difference Between A Dentist And A Hygienist?', answer: 'A dentist is a licensed professional who provides comprehensive dental care, including diagnosing and treating dental problems. A dental hygienist is a trained professional who specializes in preventive dental care, such as cleaning teeth and educating patients about oral health.' },
        { question: 'What Are The Benefits Of Regular Dental Hygiene Appointments?',  paragraph: 'Regular dental hygiene appointments can help to:',answer: [
            'Prevent tooth decay and gum disease',
            'Improve your breath',
            'Enhance your overall oral health',
            'Boost your confidence'
        ]
        }, 
        { question: 'What if I have sensitive teeth?', answer: 'We understand that some people may have sensitive teeth. Our dentists/hygienists can use special techniques and products to make your cleaning as comfortable as possible.' },
        { question: 'Can I Get A Dental Cleaning Without A Referral?', answer: 'Yes, you can schedule a dental hygiene appointment directly with our clinic without a referral from a dentist' },
        { question: 'What Is Periodontics?', answer: 'Periodontics is a specialised branch of dentistry that focuses on the prevention, diagnosis, and treatment of gum disease. Gum disease can lead to tooth loss, heart disease, and other serious health problems.' },
        { question: 'What Are The Signs And Symptoms Of Gum Disease?', paragraph: 'Some common signs and symptoms of gum disease include:',
          answer:['Bleeding gums',
            ,'Bad breath',
            'Red or swollen gums'
            ,'Loose teeth'
            ,'Receding gums'
            ,'Painful chewing.',
      ]},
      {question:'How Is Gum Disease Treated?',paragraph:'The treatment for gum disease depends on its severity.Common treatments include:',
        answer:['Scaling and root planing: This procedure removes plaque and tartar buildup below the gumline.',
          'Gum grafting: This procedure can be used to cover exposed tooth roots.',
          'Bone grafting: This procedure can be used to rebuild bone that has been lost due to gum disease.',
          'Periodontal surgery: This procedure may be necessary in severe cases of gum disease.',
        ]
      },

        { question: 'How Can I Prevent Gum Disease?', paragraph: 'You can help prevent gum disease by:',
          answer:['Brushing your teeth twice a day with a fluoride toothpaste.',
            'Flossing daily.',
            'Seeing your dentist for regular check-ups.',
            'Eating a healthy diet.',
            'Quitting smoking.',
            'Managing stress.',
          ]
         },
         {question:'Are There Any Risks Associated With Periodontal Surgery?',answer:'As with any surgical procedure, there are some risks associated with periodontal surgery. However, these risks are generally minimal. Your periodontist will discuss the risks and benefits of the procedure with you before you make a decision.'},
        { question: 'How Long Does It Take To Recover From Periodontal Surgery?', answer: 'Recovery time from periodontal surgery varies depending on the type of surgery and the individual patient. Most patients can return to work or school within a few days of the procedure.' },
        {question:'Are There Any Lifestyle Changes I Need To Make After Periodontal Surgery?',paragraph:'Yes, there are some lifestyle changes you will need to make after periodontal surgery. These changes may include:',
          answer:['Avoiding smoking and excessive alcohol consumption.',
            'Eating soft foods.',
            "Taking prescribed medications as directed.",
            'Rinsing your mouth with a saltwater solution several times a day',
            'If you have any other questions about periodontics or gum disease, please don’t hesitate to ask. Book appointment',
          ]
        },
        { question: 'How can I schedule a appointment?',answer:'You can schedule a dental hygiene appointment by calling our office at 9088708870 or by booking an appointment online.'}
        
      ],
    }
  },
  { title: 'Cosmetic and Smile makeover', 
    description: 'Alphadent dental clinic, Crafting Your Dream Smile with Cosmetic Dentistry', 
    image: cosmetic,
    points:['Brighten your smile with safe teeth whitening.','Fix chips, gaps, and stains with ease.','Boost your confidence with a perfect smile.'],
    details: {
      heading: 'About Cosmetic Dentistry',
      betweenImage: cosmetic,
      subSections: [
        { subheading: 'Cosmetic and Smile makeover', paragraph: 'At alphadent multi specialty dental Clinic, we believe a confident smile is a powerful asset. Our team of experienced and passionate cosmetic dentists in Hyderabad is dedicated to helping you achieve the smile you love.We offer a comprehensive range of cosmetic dentistry treatments tailored to address your individual needs and aesthetic goals.Cosmetic dentistry is a specialized branch of dental care that focuses on improving the appearance of a person’s teeth, gums, and overall smile. Unlike general dentistry, which primarily addresses oral health and function, cosmetic dentistry is dedicated to enhancing the aesthetics of the smile. This field involves various procedures aimed at correcting issues such as discolored, chipped, misshapen, or missing teeth.' },
        { subheading: 'Benefits of a Smile Makeover', paragraph: 'A smile makeover can significantly boost self-esteem and confidence. By addressing issues such as discoloration, misalignment, or gaps, patients can enjoy a more attractive smile that positively impacts their personal and professional lives.' },
        { subheading: 'Why Choose Our Cosmetic Services?', paragraph: 'Our experienced team is dedicated to delivering exceptional cosmetic dentistry services. We utilize the latest techniques and technology to ensure that every patient receives personalized care and outstanding results, making your dream smile a reality.' },
        { subheading: 'Cosmetic dentistry services', points:['Teeth Straightening','Teeth Whitening','Veneers (Composite and Porcelain veneers)','Dental Bonding','Crowns And Bridges','Dental implants.'] },
        { subheading: 'Invisible Braces Innovative, invisible technology', paragraph: 'Invisible braces have changed the face type of dentistry, making them a discreet and comfortable solution for fixing teeth and jaw misalignments. Today’s advanced material technology simplify orthodontic treatments without any aesthetic compromises.' },
        { subheading: 'What Are Invisible Braces?', paragraph: 'Invisible braces or clear aligners are thin, transparent aligners that fit snugly on your teeth and gently reposition them to give you the perfect smile. They offer you all the benefits of conventional orthodontics and spare you from the inconvenience and awkwardness of metal brackets and wires.' },
        { subheading: 'Why are invisible braces better?', points:['One Visit : International patients can make a quick visit of two days, and get the subsequent aligners delivered to their address periodically.','Computer Crafted : Invisible braces are created using the latest digital mapping technology.','Transparent : Get a revitalised smile without anyone knowing.','Removable : Effortlessly remove your aligners to eat, drink or brush.','Comfortable : The clear edges won’t irritate your gums or cheeks.','Effective : The treatment is completed in short span of time of about 6-12 months, displaying the desired results.','Invisalign aligners:Invisalign Clear Braces. Invisalign straightens teeth using a series of custom-made clear, nearly invisible, removable straighteners, known as aligners','Comfortable, clear and removable – Invisalign Clear Braces have transformed the smile of 3 million people worldwide without disrupting their lifestyle. You can get visibly straighter teeth in 3 months!' ]},
        { subheading: 'Invisalign aligners', paragraph: 'The treatment is completed in short span of time of about 6-12 months, displaying the desired results. Comfortable, clear and removable – Invisalign Clear Braces have transformed the smile of 3 million people worldwide without disrupting their lifestyle. You can get visibly straighter teeth in 3 months!' },
        { subheading:'Braces',paragraph:'Self ligating Metal braces and Ceramic braces.'},
      ],
      galleryImages: [c1, c2, c3],
      faq: [
        { question: 'What are the Benefits of clear aligners?', answer: 'Aesthetic Appeal,Comfort,Removability,Customized Treatment,Fewer Office Visits,Predictable Results..' },
        { question: 'Who can benefit from clear aligners?', answer: 'Clear aligners are suitable for a wide range of orthodontic issues, including : Mild to moderate crooked teeth,Gaps between teeth,Overbite and underbite correction,Crossbite.' },
        { question: 'What is the process to get customized clear aligners?', answer:['Step 1 : initial consultation','Step2 : custom treatment plan','Step 3: receiving your aligners','Step 4: wearing your aligners','Step 5: progress monitoring','Step 6: completion of treatment.'] },
        { question: 'What care should be taken while using clear aligners?', paragraph: 'To ensure the best results from your clear aligners, proper care and maintenance are essential. Here are some tips for keeping your aligners in optimal condition',
          answer:['Keep them clean','Store properly','Avoid staining','Follow instructions.'] },
        { question: 'How many hours should I wear aligners?', answer: 'To achieve the best results, it’s essential to wear your aligners for at least 20 to 22 hours a day. Consistent wear is crucial for the aligners to effectively shift your teeth into their desired positions.' },
        { question: 'After completing the treatment what precautions should be taken?', answer: 'Wearing a retainer is essential to maintaining your results and preventing any shifting of your teeth.' },
        { question: 'Can anyone get cosmetic dentistry?', answer: 'Most people are candidates for cosmetic dentistry, but a consultation is necessary to determine individual suitability.' },
        { question: 'How much does cosmetic dentistry cost?', answer: 'The cost varies based on the type of procedure and individual needs. We offer transparent pricing and financing options.' },
        { question: 'How can I schedule a consultation for cosmetic dentistry?', answer: 'If you’re ready to take the first step toward a more confident smile with clear aligners or have any questions about the treatment process, contact us today to schedule a consultation. Let us help you transform your smile and boost your self-esteem with our expert orthodontic services.Contact us at 9088708870' }
      ],
    }
  },
  { title: 'Oral Surgery', 
    description: 'Specialized oral surgery, with a focus on patient comfort and safety!', 
    image: surgery,
    points:['Safe procedures for tooth extractions and more.','Expert care for wisdom teeth and jaw issues.','Fast recovery with advanced surgical methods.'],
    details: {
      heading: 'About Oral Surgery',
      betweenImage: surgery,
      subSections: [
        { subheading: 'Oral Surgery', paragraph: 'Our surgical procedures are completely painless and comfortable thanks to our wide range of pain relief options. If you need an extraction, you can rest assured that our highly trained dentists will provide you with the highest standard of care at a price you can afford.' },
        { subheading: 'Why Choose Our Oral Surgery Needs?', paragraph: 'Our skilled oral surgeons are dedicated to providing compassionate care in a state-of-the-art facility. We strive to make your experience as comfortable and stress-free as possible, ensuring optimal outcomes for your oral health.' },
        { subheading: 'Preoperative Consultation', paragraph: 'Before any surgery, we conduct a thorough consultation to discuss your medical history, explain the procedure, and address any concerns. This ensures you feel informed and comfortable moving forward.' },
        { subheading: 'Anesthesia Options for Comfort', paragraph: 'We prioritize your comfort during surgery by offering various anesthesia options, including local anesthesia, sedation, and general anesthesia. Our team will work with you to determine the best choice for your needs.' },
        { subheading: 'Postoperative Care and Recovery', paragraph: 'After your surgery, we provide detailed postoperative instructions to promote a smooth recovery. Our team is available to answer any questions and ensure you have the support you need during your healing process.' },
        { subheading:'Jaw Surgery',paragraph:'Jaw surgery, also known as orthognathic surgery, is performed to correct misalignments of the jaw that can affect chewing, speaking, and overall facial aesthetics. Our oral surgeons specialize in precise jaw surgeries tailored to each patient’s unique needs.'},
        {subheading:'Facial Trauma Repair',paragraph:'Facial trauma can result from accidents or injuries that affect the bones and soft tissues of the face. Our oral surgeons are skilled in repairing facial fractures and restoring function and appearance.'},
        {subheading:'Oral Pathology Treatment',paragraph:'Oral pathology involves the diagnosis and treatment of diseases affecting the mouth and surrounding structures. Our team provides comprehensive care for various oral conditions, ensuring early detection and effective treatment.'},
      ],
      galleryImages: [],
      faq: [
        { question: 'What is oral surgery?', answer: 'Oral surgery involves surgical procedures to treat conditions affecting'},

      ],
    }
  },
  { title: 'Aligner (Invisalign Provider)', description: 'Straighten teeth invisibly.', 
    image: aligners,
    points:['Straighten your teeth with invisible aligners.','Comfortable, removable, and easy to wear.','Get a confident smile without metal braces.'],
    details: {
      heading: 'About Aligners', 
      betweenImage: aligners,
      subSections: [
        { subheading: 'Aligners (Invisalign provider)', paragraph: 'Invisalign Clear Braces. Invisalign straightens teeth using a series of custom-made clear, nearly invisible, removable straighteners, known as aligners. Comfortable, clear and removable – Invisalign Clear Braces have transformed the smile of 3 million people worldwide without disrupting their lifestyle. You can get visibly straighter teeth in 3 months! Straighten your teeth without coming to anyone’s notice! We ensure that the treatment is customized according to your needs, expectations, and lifestyle. We also make teeth straightening as affordable as possible with the use of advanced digital mapping and molding technology to ensure maximum precision.Our highly experienced and certified orthodontists will help you determine the best invisible braces option, considering the cost and your requirements.' },
        { subheading: 'Benefits', paragraph: 'Aligners offers numerous advantages, including enhanced comfort, improved aesthetics, and the convenience of removable aligners. Patients can enjoy their favorite foods and maintain oral hygiene routines without the restrictions often associated with traditional braces.' },
        { subheading:'Why Choose Us for Your Invisalign Treatment?',paragraph:'Our experienced team is committed to providing exceptional Invisalign services. With a focus on personalized care and the latest technology, we strive to help you achieve a beautiful, confident smile with the convenience and comfort of clear aligners.'},
        { subheading:'Custom-Fit Aligners', paragraph:'Each set of Invisalign aligners is custom-made to fit your teeth perfectly. Patients receive a series of aligners that are worn for about two weeks each, gradually moving teeth into alignment. Regular check-ins ensure progress is on track and adjustments can be made as needed.'},
        { subheading:'Maintaining Your Aligners',paragraph:'Proper care of your aligners is crucial for effective treatment. We provide guidance on cleaning techniques and best practices to ensure your aligners remain clear and effective throughout your treatment journey.'},
        { subheading:'Composte bonding Veneers',paragraph:'Are you dreaming of a flawless smile?',points:['Do you have minor imperfections like chipped teeth, gaps, or discoloration that you’d like to address? At Alphadent Clinic, we offer composite bonding veneers, a minimally invasive and cost-effective solution to enhance your smile’s natural beauty.']},
        {subheading:'Porcelain veneers:',paragraph:'Are you looking to achieve the smile of your dreams? Porcelain veneers at Alphadent dental Clinic, Nizampet offer a transformative solution to correct imperfections and create a stunning, natural-looking smile. If you’re self-conscious about chipped, cracked, discolored, or misaligned teeth, veneers could be the perfect option for you.'}
      ],
      galleryImages: [],
      faq:[
        { question: 'What are the Benefits of clear aligners?', answer: 'Aesthetic Appeal,Comfort,Removability,Customized Treatment,Fewer Office Visits,Predictable Results..' },
        {question:'What Exactly Are Composite Bonding Veneers?',answer:'Composite bonding veneers involve applying a tooth-colored resin material to your teeth to correct minor imperfections and enhance your smile.'},
        {question:'How Long Does The Composite Bonding Procedure Take?',answer:'Typically, composite bonding can be completed in a single appointment at Alphadent dental Clinic.'},
        {question:'Is Composite Bonding Painful?',answer:'No, the procedure is generally painless and requires minimal to no anaesthesia.'},
        {question:'How Long Do Composite Bonding Veneers Last?',answer:'With proper care, composite bonding veneers can last several years, typically 5-10 years.'},
        {question:'Can Composite Bonding Fix Gaps Between My Teeth?',answer:'Yes, composite bonding is an effective way to close gaps and create a more uniform smile.'},
        {question:'Will My Composite Bonding Look Natural?',answer:'At Alphadent dental Clinic, we use high-quality composite resin that is carefully matched to your natural tooth color for a seamless and natural-looking result.'},
        {question:'How Do I Care For My Composite Bonding Veneers?',answer:'Maintain good oral hygiene practices, avoid biting hard objects, and schedule regular dental checkups.'},
        {question:'Is Composite Bonding More Affordable Than Porcelain Veneers?',answer:'Yes, composite bonding is generally a more cost-effective option than porcelain veneers'},
        {question:'Can Composite Bonding Fix Gaps Between My Teeth?',answer:'Yes, composite bonding is reversible, and repairs can be made if needed.'},
        {question:'Who Is A Good Candidate For Composite Bonding?',answer:'Individuals with minor cosmetic imperfections, healthy teeth and gums, and realistic expectations are typically good candidates.'},
        {question:'What Are Porcelain Veneers?',answer:'Porcelain veneers are thin, custom-made shells of dental porcelain that are bonded to the front surface of your teeth to improve their appearance.'},
        {question:'What Issues Can Porcelain Veneers Correct?',answer:'Veneers can address various cosmetic concerns, including chips, cracks, discoloration, gaps between teeth, minor misalignments, misshapen teeth, and teeth that are too small or too large.'},
        {question:'Are Porcelain Veneers Permanent?',answer:'While considered a long-lasting solution, veneers are not entirely permanent. They may need replacement or repair over time, typically after 10-15 years, depending on care.'},
        {question:'What Is The Procedure For Getting Porcelain Veneers?',answer:'The process involves a consultation, tooth preparation (removing a small amount of enamel), impressions, fabrication of the veneers, and finally, bonding the veneers to your teeth.'},
        {question:'How Long Does The Porcelain Veneer Procedure Take?',answer:'The entire process usually takes a few appointments over several weeks, including the initial consultation, tooth preparation, impressions, and final placement.Will My Teeth Be Sensitive After Getting Veneers?Some patients may experience temporary sensitivity to hot or cold after the procedure. This is usually mild and subsides quickly.'},
        {question:'How Do I Care For My Porcelain Veneers?',answer:'Care for your veneers just as you would your natural teeth: brush twice daily, floss regularly, and avoid chewing on hard objects. Regular dental checkups are also essential.'},
        {question:'Are Porcelain Veneers Right For Me?',answer:'The best way to determine if veneers are right for you is to schedule a consultation with one of our dentists. We will assess your individual needs and goals to create a personalized treatment plan. book on online appointment or contact our office at 9088708870'},
        {question:'What Are The Alternatives To Porcelain Veneers?',answer:'Depending on your specific needs, alternatives to veneers may include teeth whitening, composite bonding, or orthodontics (braces or Invisalign). We can discuss these options with you during your consultation. For consultation contact our office at 9088708870'},
        {question:'How Much Do Porcelain Veneers Cost?',answer:'The cost of porcelain veneers varies depending on the number of veneers needed, the complexity of the case, and other factors. We can provide a personalised quote during your consultation. Financing options may be available. For further details feel free to contact us at 9088708870 or book online appointment.'},
        { question: 'Who can benefit from clear aligners?', answer: 'Clear aligners are suitable for a wide range of orthodontic issues, including : Mild to moderate crooked teeth,Gaps between teeth,Overbite and underbite correction,Crossbite.' },
        { question: 'What is the process to get customized clear aligners?', answer: 'Step 1 : initial consultation,Step2 : custom treatment plan,Step 3: receiving your aligners,Step 4: wearing your aligners,Step 5: progress monitoring,Step 6: completion of treatment.' },
        { question: 'What care should be taken while using clear aligners?', answer: 'To ensure the best results from your clear aligners, proper care and maintenance are essential. Here are some tips for keeping your aligners in optimal condition : Keep them clean,Store properly,Avoid staining,Follow instructions.' },
        { question: 'How many hours should I wear aligners?', answer: 'To achieve the best results, it’s essential to wear your aligners for at least 20 to 22 hours a day. Consistent wear is crucial for the aligners to effectively shift your teeth into their desired positions.' },
        { question: 'After completing the treatment what precautions should be taken?', answer: 'Wearing a retainer is essential to maintaining your results and preventing any shifting of your teeth.' },
            ],
    }
   },
  { title: 'Pediatric Dentistry', 
    description: 'Alphadent Dental Care for your childs dental needs!', 
    image: pedia,
    points:['Gentle dental care for kids of all ages','Fun, friendly visits to build healthy habits.','Protect growing smiles with expert attention.'],
    details: {
      heading: 'About Pediatric Dentistry',
      betweenImage: pedia,
      subSections: [
        { subheading: 'Pediatric Dentistry', paragraph: 'At Alphadent dental clinic, Nizampet, we offer high quality pediatric dental care for children led by Dr.Sudeepthi. we create a comfortable environment where children can feel at ease during their visits. We have Specialist Paediatric Dentist to provide safe and accessible treatment for even the most complex dental needs.Paediatric Dentistry who is specially trained to manage the dental and emotional needs of children, including those with additional medical or developmental needs.Pediatric dentist goal is to make each visit as comfortable and stress-free as possible, ensuring that your child receives the highest standard of care in a supportive environment.' },
        { subheading: 'Our Pediatric Dentistry Team', paragraph: 'Our pediatric dentistry team is dedicated to providing excellent care and support for children, ensuring that their oral health is protected and improved. Our team of dentists is comprised of experienced professionals with a strong focus on child-friendly orthodontics and dental hygiene.' },
        {subheading:'Our Paediatric Dentistry Services',points:['Emergency and Trauma Care','Preventative Treatments: Fluoride applications and sealants to protect against cavities','Management of Tooth Decay: Early intervention and fillings','Growth & Development Analysis','General Anaesthetic Treatments: Complex dental procedures performed in a safe environment.']},
        { subheading:'Oral Health Education Guidance for children and parents on maintaining healthy teeth and gums.',paragraph:'Our goal is to keep your child’s teeth healthy while making your child feel comfortable. You can help make the first visit to our clinic enjoyable and positive.All instruments will be shown to your child who can touch and experience them on their fingers before your child even opens their mouth. Our staff works together to develop a special relationship with each family so that going to the dentist can be a pleasant experience for both the parent and child.'}
      ],
      galleryImages: [],
      faq:[
        { question: 'What is pediatric dentistry?', answer: 'Pediatric dentistry is the practice of dentistry for children, aged 2 to 12 years old. Pediatric dentists are trained to manage the dental and emotional needs of children, including those with additional medical or developmental needs.' },
      ],
    }
   },
  { title: 'Teeth whitening', description: 'Bring back your smile sparkle.', image: whitening,
    points:['Brighten your smile in just one session','Safe and effective whitening treatment.','Remove stains for a radiant, confident look.'],
    details: {
      heading: 'About Teeth Whitening',
      betweenImage: 'whitening',
      subSections: [
        { subheading: 'Teeth Whitening', paragraph: 'Bring back the sparkle in your smile. Transform your dull, stained or yellowish teeth into the perfect set of pearly whites in under an hour. At Alpladent dental clinic, Hyderabad, we understand that you want a safe and effective way to whiten your teeth. That’s why we offer a variety of teeth whitening options, including both in-house teeth whitening and take-home whitening kits.' },
        { subheading: 'Why Choose Us for Teeth Whitening?', paragraph: 'Choosing Alphadent Clinic for your teeth whitening needs means opting for quality care and expertise. Our dedicated team is committed to providing personalized treatment plans tailored to your unique dental needs. We stay updated with the latest advancements in dental technology to ensure you receive the best care possible.' },
        { subheading:'All You Need To Know About Teeth Whitening:',paragraph:'Microscopic intrinsic stains and discolouration present deep within the teeth are responsible for the overall dull or yellowish appearance of your teeth. Our whitening experts professionally remove these stains using a peroxide-based agent. We protect your gums and lips with special barriers to prevent their contact with peroxide.'},
        { subheading:'In-house teeth whitening:',paragraph:'For brighter teeth in 1 hour: Bring back the sparkle in your smile. Transform your dull, stained or yellowish teeth into the perfect set of pearly whites in under an hour.'},
        { subheading:'Home whitening kits:',paragraph:'We recommend combining our in-office teeth whitening system with at-home whitening treatments. This dual approach maximizes your whitening potential, allowing for a brighter smile while maintaining comfort and convenience. By utilizing both methods, you can achieve optimal results and enjoy a radiant smile that lasts.'}
      ],
      galleryImages: [],
      faq:[
        { question: 'What is teeth whitening?', answer: 'Teeth whitening is a cosmetic dental procedure that helps to lighten the color of your teeth. It can be done in a dental office or at home.' },
        { question:'How Does Teeth Whitening Work?',answer:'Teeth whitening typically uses a bleaching agent, such as hydrogen peroxide or carbamide peroxide, to lighten the color of stains on your teeth.'},
        { question: 'How long does teeth whitening work?', answer: 'Teeth whitening typically uses a bleaching agent, such as hydrogen peroxide or carbamide peroxide, to lighten the color of stains on your teeth.' },
        { question:'What Are The Side Effects Of Teeth Whitening?',answer:'Some people may experience temporary sensitivity after teeth whitening. This sensitivity usually subsides within a few days.'},
        { question:'How Long Does Teeth Whitening Last?',answer:'The results of teeth whitening can last for several years. However, the longevity of the results will depend on your lifestyle and dietary habits.'},
        { question:'Can I Whiten My Teeth At Home?',answer:'Yes, you can whiten your teeth at home using over-the-counter products or custom-made trays from a dentist. However, it is important to consult with a dentist to ensure that home whitening is safe and effective for you.'},
        { question:'How Often Should I Whiten My Teeth?',answer:'The frequency of teeth whitening will depend on your individual needs and goals. However, it is generally recommended to avoid whitening your teeth more than once a year.'},
        { question:'Can Teeth Whitening Make My Teeth Sensitive?',answer:'Some people may experience temporary sensitivity after teeth whitening. This is usually mild and subsides within a few days. If you have sensitive teeth, you may want to talk to your dentist about ways to minimize discomfort.'},
        { question:'Will Teeth Whitening Make My Teeth Stronger?',answer:'No, teeth whitening will not make your teeth stronger. However, it can help to improve the appearance of your smile.'},
        { question:'How Much Does Teeth Whitening Cost?',answer:'The cost of teeth whitening can vary depending on the method used and the dentist’s fees. You can schedule review with our dentist by calling our office at 9088708870 or booking an appointment online'}
            ],
    }
   },
  { title: 'Laser', description: 'Laser technology that can be used within a wide spectrum of dental treatment.', image: lasers,
    points:['Painless treatments with advanced laser technology','Faster healing and less discomfort.','Ideal for gum care and soft tissue procedures.'],
    details: {
      heading: 'Laser Dental Services',
      betweenImage: lasers,
      subSections: [
        { subheading: 'Lasers', paragraph: 'Explore Laser technology that can be used within a wide spectrum of dental treatments – be it treating infections during root canal procedures, re-contouring of gums during smile makeovers, whitening of teeth, and even treating broken teeth below the gum line. There are several benefits to laser dentistry that includes quicker recovery time and no post-operative pain. To allow no room for error, we also have specialized dentists who have received training in laser dentistry.' },
        { subheading: 'Why Choose Us for Laser Treatment?', paragraph: 'At our dental practice, we specialize in laser treatments that prioritize your comfort and health. Our experienced team uses state-of-the-art technology to ensure precision and minimal discomfort, leading to faster recovery times. We are dedicated to providing personalized care tailored to your unique needs, making your dental experience exceptional.' },
        { subheading: 'Benefits of Laser Dentistry', paragraph: 'Laser treatments offer numerous advantages, including reduced bleeding, less pain, and faster healing times compared to traditional methods. Patients often experience less anxiety and discomfort, making dental visits more pleasant.' },
        { subheading:'Safety and Effectiveness',paragraph:'Laser dentistry is considered safe when performed by trained professionals. Extensive research supports its effectiveness in various dental treatments, making it a reliable option for both patients and practitioners. As technology continues to advance, laser treatments in dentistry are becoming increasingly popular. They provide a modern approach to dental care, enhancing both the quality of treatment and patient satisfaction.'}
      ],
      galleryImages: [],
      faq:[
        { question: 'What is laser dental services?', answer: 'Laser dental services are a safe, effective, and painless dental treatment that can help you achieve your desired smile. They can be used to treat various areas of your teeth, including the front, back, and bridge, as well as gum, mouth, and jaw.' },
        { question: 'How long does laser dental services work?', answer: 'Laser dental services typically use a laser beam to remove damaged tooth enamel, and then fill the space with a new tooth. The treatment can take anywhere from 30 to 60 minutes.' },
      ],
    }
  },
  { title: 'Full Mouth Rehabilitation', 
    description: 'Discover next-gen Full Mouth Restoration with Alphadent Dental Clinic',
    image: rehab,
    points:['Restore function and aesthetics to your entire smile.','Customized treatments for damaged or missing teeth.','Regain confidence with a complete dental makeover.'],
    details: {
      heading: 'About Full Mouth Rehabilitation',
      betweenImage: rehab,
      subSections: [
        { subheading: 'Full Mouth Rehabilitation', paragraph: 'Full mouth rehabilitation is a comprehensive dental treatment designed to restore the function and aesthetics of the entire mouth. It addresses various dental issues, including missing teeth, gum disease, and bite misalignments, ensuring a tailored approach for each patient.' },
        { subheading: 'Why Choose Us for Full Mouth Rehabilitation?', paragraph: 'Choosing Alphadent for Full Mouth Rehabilitation ensures a tailored treatment plan that addresses your specific dental needs. Our skilled team combines advanced technology with a patient-centered approach, focusing on both the aesthetic and functional aspects of your smile while prioritizing your comfort throughout the process. With Alphadent, you can expect a comprehensive evaluation and a customized plan that incorporates various restorative and cosmetic procedures. Our commitment to excellence means we utilize the latest techniques to enhance your oral health and boost your confidence. From dental implants to veneers, we ensure that every aspect of your treatment is designed to achieve optimal results, allowing you to enjoy a beautiful, functional smile for years to come.' },
        { subheading:'Benefits of Full Mouth Rehabilitation',paragraph:'This treatment offers numerous advantages, such as improved chewing and speaking abilities, enhanced smile aesthetics, and long-term oral health. By addressing existing dental problems, it helps prevent future complications and promotes overall well-being.'},
        { subheading:'The Rehabilitation Process',paragraph:'The process typically begins with an initial consultation to assess dental health and discuss treatment goals. A personalized plan is then developed, followed by the implementation of treatments in phases, if necessary, to achieve optimal results.'},
        { subheading:'Aftercare and Maintenance',paragraph:'Post-treatment care is crucial for maintaining the results of full mouth rehabilitation. Regular follow-up appointments and good oral hygiene practices are essential to ensure long-lasting health and functionality of the teeth and gums.'},
      ],
      galleryImages: [],
      faq:[
        { question: 'What is full mouth rehabilitation?', answer: 'Full mouth rehabilitation is a comprehensive dental treatment that addresses multiple dental issues, restoring both function and aesthetics. It involves a combination of restorative and cosmetic procedures to improve the overall health and appearance of the mouth.' },
        { question: 'How long does full mouth rehabilitation take?', answer: 'The duration of full mouth rehabilitation varies depending on the complexity of the case and the specific procedures involved. Your dentist will provide an estimated timeline during your initial consultation.' },
      ],
    }
   },
  { title: 'Painless root canal treatment', 
    description: 'Administer root canal treatments that are completely pain free!', 
    image: rootcanal,
    points:['Save your natural tooth without pain.','Quick and comfortable root canal treatment.','Eliminate infection and restore tooth strength.'],
    details: {
      heading: 'About Painless Root Canal Treatment',
      betweenImage: rootcanal,
      subSections: [
        { subheading: 'Root Canal Treatment', paragraph: 'Root canal work involves removing the infected pulp and filling the root canals. The root canals are extremely small and are rarely straight. We have highly skilled professionals who can offer just this type of expertise.Root canal treatment is an established form of dental treatment which can help preserve teeth which might otherwise be lost, producing consistently good results for many years to come. Sometimes called endodontic treatment, the procedure is required when the pulp inside the tooth has become infected or died as a result of accidental damage or decay. The only alternative to endodontic treatment is extraction of the tooth.',
          points:['The treatment normally would take two visits to complete. If you have chosen to have the treatment under a Local Anaesthetic, the tooth and surrounding area will be made numb so you will not feel any pain. All the infected pulp is removed. The canals are cleaned with strong antiseptics and then sealed.Sometimes, this first filling is temporary, and the canals are filled permanently once the area has settled down. If the tooth is left weakened, we may recommend a crown to strengthen it.Treating the infection prevents it from spreading throughout the root canal system of the tooth. If this were to be left unchecked, the most likely result would be an abscess – a condition which can be extremely painful and may ultimately lead to damage in the bone around the tooth.Even if the abscess is painless, if left untreated, it may compromise any further treatment planned on the tooth, such as crowns.'],
         },
         {subheading:'Painless Root Canal Treatment',paragraph:'Don’t Fear The Root Canal Anymore We combine state-of-the-art technology with our expertise and soft-skill approach to ensure that every root canal procedure is precise, seamless and pain-free. Most of the root canal treatments at Alphadent are performed within 30 minutes by our experts who make sure you are always comfortable and relaxed. We understand that people fear root canals and tend to avoid undergoing the treatment. However, our specialists carefully craft the entire process to eliminate any fear attached to this procedure. In fact, we turn it into a very positive experience.'},
         {subheading:'Overview Of Root Canal Treatments',paragraph:'A root canal treatment entails removing the infected soft tissue within the tooth and replacing it with an artificial inert ‘filling’ material. This procedure not only saves the tooth but also eliminates dental pain.'},
        { subheading: 'Why Choose Us for Your Root Canal Treatment?', paragraph: 'Our experienced team is dedicated to providing gentle and effective root canal therapy in a comfortable environment. We utilize advanced techniques and technology to ensure a successful outcome, helping you maintain your oral health and smile.'},
        { subheading:'The process:',paragraph:'The treatment normally would take two visits to complete. If you have chosen to have the treatment under a Local Anaesthetic, the tooth and surrounding area will be made numb so you will not feel any pain. All the infected pulp is removed. The canals are cleaned with strong antiseptics and then sealed. Sometimes, this first filling is temporary, and the canals are filled permanently once the area has settled down. If the tooth is left weakened, we may recommend a crown to strengthen it.Treating the infection prevents it from spreading throughout the root canal system of the tooth. If this were to be left unchecked, the most likely result would be an abscess – a condition which can be extremely painful and may ultimately lead to damage in the bone around the tooth. Even if the abscess is painless, if left untreated, it may compromise any further treatment planned on the tooth, such as crowns.'},
        { subheading:'Painless Root canal treatments',paragraph:'Don’t Fear The Root Canal Anymore We combine state-of-the-art technology with our expertise and soft-skill approach to ensure that every root canal procedure is precise, seamless and pain-free. Most of the root canal treatments at Alphadent are performed within 30 minutes by our experts who make sure you are always comfortable and relaxed. We understand that people fear root canals and tend to avoid undergoing the treatment. However, our specialists carefully craft the entire process to eliminate any fear attached to this procedure. In fact, we turn it into a very positive experience.,A root canal treatment entails removing the infected soft tissue within the tooth and replacing it with an artificial inert ‘filling’ material. This procedure not only saves the tooth but also eliminates dental pain.'},
        { subheading:'How much does it cost?',paragraph:'While we aim for transparent pricing at Alphadent dental clinic, the individual nature of dental treatment means costs can vary. For further questions contact us 9088708879.For painless Root canal treatments you can schedule appointment by calling our office at 9088708870 or by booking an online appointment.'}
      ],
      galleryImages: [],
      faq:[
        { question: 'What is painless root canal treatment?', answer: 'Painless root canals are a safe, effective, and pain-free dental treatment that can help you achieve your desired smile. They involve removing damaged tooth enamel, filling the space with a new tooth, and then re-aligning the damaged teeth.' },
        {question:'How much does it cost?',paragraph:'While we aim for transparent pricing at Alphadent dental clinic, the individual nature of dental treatment means costs can vary. For further questions contact us 9088708879. For painless Root canal treatments you can schedule appointment by calling our office at  9088708870 or by booking an online appointment.'},
      ],
    }
   },
   {title: 'Crowns and Bridges', 
     description: 'Experience A Transformation In One Visit', 
      image: crown,
      points:['Restore damaged or missing teeth for improved function and appearance.','Custom-made to match natural tooth color and shape.','Durable, long-lasting solutions that strengthen weakened teeth.'],
       details: {
      heading: 'About crowns and bridges',
      betweenImage: crown,
      subSections: [
        { subheading: 'Crown and bridges', paragraph: 'Experience A Transformation In One Visit.A crown can be custom-designed and are manufactured using a milling machine guided by software to deliver unmatched accuracy of the fit and bite.We offer upto 20-year warranty on crowns at affordable prices.A crown is used to entirely cover or “cap” a damaged tooth. Besides strengthening a damaged tooth, a crown can be used to improve its appearance, shape or alignment. A crown can also be placed on top of an implant to provide a tooth-like shape and structure for function.A crown will give protection against further decay or erosion and an improved looking smile, and helps to hide that badly chipped tooth or those unsightly-looking front teeth. If you were self-conscious about your smile before this treatment, you will be pleasantly surprised by the outcome. Bridges are commonly used to replace one or more missing teeth. They cover the space where the teeth are missing. Bridges are cemented to the natural teeth or implants surrounding the empty space.A bridge can prevent bone loss, gum disease or decay caused by the presence of food debris in the gap and relieve pressure on the teeth either side of the gap.It will also improve your smile and your appearance.We provide a personalized quote during your consultation. For any further details call us at 9088708870'},
        ]
      }
   }
];

export default services;
