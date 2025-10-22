import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const coreValues = [
    {
      title: "Quality Assurance",
      description: "We maintain rigorous quality standards across our entire production chain, from research to distribution, ensuring every product meets the highest safety and efficacy requirements.",
      icon: "🔬"
    },
    {
      title: "Integrity & Transparency",
      description: "Our business practices are built on ethical foundations, with full transparency in our operations, research findings, and product information.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "We constantly push the boundaries of pharmaceutical science through cutting-edge research and development to create novel therapeutic solutions.",
      icon: "💡"
    },
    {
      title: "Patient-Centric Approach",
      description: "Every decision we make prioritizes patient needs, focusing on improving health outcomes and enhancing quality of life worldwide.",
      icon: "❤️"
    }
  ];

  const leadershipTeam = [
    {
      name: "Darshan Khatsuriya",
      role: "Chief Executive Officer",
      description: "Darshan, Co-Founder of Jainova Lifesciences, brings over a decade of experience in domestic and international pharma markets. With a vision to deliver high-quality, affordable medicines, he leads with integrity, expertise, and a focus on sustainable growth.",
      // image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    // {
    //   name: "Dr. Rajiv Mehta",
    //   role: "Chief Scientific Officer",
    //   description: "Leading our R&D division, Dr. Mehta has spearheaded the development of our breakthrough treatments and patented formulations.",
    //   image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    // }
  ];

  const strengths = [
    "<strong>Global Reach:</strong> Exporting to over 9+ countries across AFRICA, ASIA and LATAM",
    "<strong>Compliance with International Standards:</strong> Adhering to GMP, WHO, and local regulatory requirements",
    "<strong>Commitment to Quality:</strong> Delivering pharmaceutical products that meet the highest standards",
  ];

  return (
    <div className="pt-20 bg-[#F9FAFB] min-h-screen font-sans" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-[#1E3A5F] to-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Jainova Lifesciences
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Innovating healthcare, delivering trusted pharmaceutical solutions.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Who We Are Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-8">Who Are We</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-[#111827] text-lg leading-relaxed">
              Founded in 2025, <b>JAINOVA LIFESCIENCES PVT LTD</b> has established itself as a premier pharmaceutical exporter, committed to providing safe, effective, and affordable medicines to markets across 15 regions. Our global presence spans 9+ countries, and we pride ourselves on our compliance with international regulatory standards and our dedication to improving global healthcare.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-8">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#1E3A5F] h-full">
              <div className="flex justify-center mb-6">
                <div className="text-6xl">🎯</div>
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 text-center">Our Mission</h3>
              <p className="text-[#111827] leading-relaxed">
                We commit ourselves to total customer care by delivering world-class products and services.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#E85B2C] h-full">
              <div className="flex justify-center mb-6">
                <div className="text-6xl">🚀</div>
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 text-center">Our Vision</h3>
              <p className="text-[#111827] leading-relaxed">
                To become the Most Respected Pharma Company.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Achievements Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Countries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 group hover:translate-y-[-5px]"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1E3A5F]/10 mb-4 group-hover:bg-[#E85B2C]/10 transition-colors duration-300">
                <svg className="w-10 h-10 text-[#1E3A5F] group-hover:text-[#E85B2C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <p className="text-4xl font-bold text-[#1E3A5F] mb-2">9+</p>
              <p className="text-[#6B7280] text-lg">Countries</p>
            </motion.div>

            {/* Happy Customers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 group hover:translate-y-[-5px]"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1E3A5F]/10 mb-4 group-hover:bg-[#E85B2C]/10 transition-colors duration-300">
                <svg className="w-10 h-10 text-[#1E3A5F] group-hover:text-[#E85B2C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <p className="text-4xl font-bold text-[#1E3A5F] mb-2">11+</p>
              <p className="text-[#6B7280] text-lg">Happy Customers</p>
            </motion.div>

            {/* Product Portfolio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 group hover:translate-y-[-5px]"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1E3A5F]/10 mb-4 transition-colors duration-300">
                <svg className="w-10 h-10 transition-all duration-300" viewBox="0 0 109 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 C35.97 0 71.94 0 109 0 C109 37.95 109 75.9 109 115 C73.03 115 37.06 115 0 115 C0 77.05 0 39.1 0 0 Z"/>
                  <path d="M0 0 C0.81436868 1.76997474 1.6264294 3.54101152 2.4375 5.3125 C2.88996094 6.29863281 3.34242187 7.28476562 3.80859375 8.30078125 C7.49178059 16.64531276 7.66037762 28.94690391 4.375 37.5625 C3.63507712 39.06821719 2.84306324 40.54951232 2 42 C1.56429687 42.77601562 1.12859375 43.55203125 0.6796875 44.3515625 C-5.03916314 53.69547694 -13.632702 60.84997416 -24.38671875 63.61328125 C-34.84833974 65.1614135 -45.45163568 64.65044856 -54.3046875 58.36328125 C-54.86414063 57.91339844 -55.42359375 57.46351562 -56 57 C-55.70561329 51.54365074 -52.52301077 49.02191103 -48.8046875 45.44921875 C-48.17901886 44.83158157 -47.55335022 44.2139444 -46.90872192 43.57759094 C-44.90672429 41.60454801 -42.89161921 39.64558619 -40.875 37.6875 C-38.24324906 35.11228061 -35.61684307 32.53166766 -32.9921875 29.94921875 C-32.36172012 29.33029755 -31.73125275 28.71137634 -31.0816803 28.07369995 C-27.39303584 24.43505695 -23.8648486 20.72742587 -20.51757812 16.76879883 C-17.60044479 13.36876166 -14.45513194 10.19019952 -11.3125 7 C-10.66216797 6.32066406 -10.01183594 5.64132813 -9.34179688 4.94140625 C-8.70951172 4.30074219 -8.07722656 3.66007812 -7.42578125 3 C-6.86286377 2.4225 -6.29994629 1.845 -5.7199707 1.25 C-4 0 -4 0 0 0 Z" fill="#1e3a5f" className="group-hover:fill-[#E85B2C]" transform="translate(86,36)" />
                  <path d="M0 0 C0.75571289 -0.01385742 1.51142578 -0.02771484 2.29003906 -0.04199219 C9.29844412 0.01592852 16.39899802 1.87496714 21.9375 6.375 C22.33422852 8.67651367 22.33422852 8.67651367 21.9375 11.375 C20.12084961 13.7434082 20.12084961 13.7434082 17.58984375 16.17578125 C16.67396484 17.07103516 15.75808594 17.96628906 14.81445312 18.88867188 C13.83520586 19.82221332 12.85538448 20.7551529 11.875 21.6875 C9.98597591 23.51454654 8.09921489 25.34393614 6.21484375 27.17578125 C4.84102539 28.50996094 4.84102539 28.50996094 3.43945312 29.87109375 C0.75359454 32.55904902 -1.71178313 35.36593195 -4.17456055 38.25561523 C-8.36842224 42.96360869 -12.94990612 47.32366025 -17.4375 51.75 C-19.42735621 53.71326571 -21.41385935 55.67983831 -23.3984375 57.6484375 C-24.27032715 58.50872559 -25.1422168 59.36901367 -26.04052734 60.25537109 C-28.10139569 62.20797741 -28.10139569 62.20797741 -29.0625 64.375 C-30.3825 64.375 -31.7025 64.375 -33.0625 64.375 C-39.76153366 51.90093733 -41.9004852 41.16081995 -38.1015625 27.33203125 C-34.24657939 16.36127105 -26.59747785 7.81471942 -16.3203125 2.46875 C-10.9918992 0.22957242 -5.69925983 0.06273136 0 0 Z" fill="#1e3a5f" className="group-hover:fill-[#E85B2C]" transform="translate(55.0625,20.625)" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-[#1E3A5F] mb-2">300+</p>
              <p className="text-[#6B7280] text-lg">Product Portfolio</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Core Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 group hover:translate-y-[-5px]"
                style={{ borderRadius: '12px' }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1E3A5F]/10 text-3xl mb-4 group-hover:bg-[#E85B2C]/10 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">{value.title}</h3>
                <p className="text-[#6B7280]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-12">Our Leadership</h2>
          <div className="flex justify-center">
            <div className="w-full md:w-2/3 lg:w-1/2">
              {leadershipTeam.map((leader, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-full">
                    <h3 className="text-xl font-bold text-[#1E3A5F]">{leader.name}</h3>
                    <p className="text-[#E85B2C] font-medium mb-2">{leader.role}</p>
                    <p className="text-[#6B7280]">{leader.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-8">Why Choose Jainova Lifesciences</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ul className="space-y-4">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#E85B2C] mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[#111827]" dangerouslySetInnerHTML={{ __html: strength }}></span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;