/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ChevronRight, 
  Stethoscope, 
  Baby, 
  Activity, 
  Microscope, 
  CheckCircle2, 
  Star,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Doctor {
  name: string;
  specialty: string;
  image: string;
}

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  location: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    title: "General Medicine",
    description: "Comprehensive primary care for all ages, focusing on prevention and chronic disease management.",
    icon: <Stethoscope className="w-8 h-8 text-medical-blue" />
  },
  {
    title: "Maternity Care",
    description: "Expert prenatal, delivery, and postnatal care to ensure a safe journey for mother and baby.",
    icon: <Baby className="w-8 h-8 text-medical-blue" />
  },
  {
    title: "Emergency Services",
    description: "24/7 critical care unit equipped to handle all medical emergencies with speed and precision.",
    icon: <Activity className="w-8 h-8 text-medical-blue" />
  },
  {
    title: "Diagnostics",
    description: "Advanced laboratory and imaging services for accurate and timely diagnosis of health conditions.",
    icon: <Microscope className="w-8 h-8 text-medical-blue" />
  }
];

const DOCTORS: Doctor[] = [
  {
    name: "Dr. K. Rama Rao",
    specialty: "Senior Physician & Cardiologist",
    image: "https://picsum.photos/seed/doc1/400/500"
  },
  {
    name: "Dr. S. Lakshmi",
    specialty: "Gynecologist & Obstetrician",
    image: "https://picsum.photos/seed/doc2/400/500"
  },
  {
    name: "Dr. P. Venkatesh",
    specialty: "General Surgeon",
    image: "https://picsum.photos/seed/doc3/400/500"
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ramesh Babu",
    text: "The care I received at Sindhura Hospital was exceptional. The doctors are very patient and explained everything clearly. Best hospital in Srikakulam.",
    rating: 5,
    location: "Srikakulam"
  },
  {
    name: "Saritha Devi",
    text: "I delivered my baby here. The maternity staff is so caring and supportive. They made a stressful time very comfortable for us.",
    rating: 5,
    location: "Amadalavalasa"
  },
  {
    name: "Mohan Rao",
    text: "Emergency services are top-notch. They saved my father's life during a heart attack. Forever grateful to the team.",
    rating: 5,
    location: "Srikakulam"
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-medical-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-medical-blue' : 'text-medical-blue'}`}>
            Sindhura <span className="text-slate-700">Hospital</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-medical-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-medical-blue text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-medical-blue text-white px-6 py-3 rounded-xl text-center font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-medical-light">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/50 rounded-l-full -mr-20 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">24/7 Emergency Care Available</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Trusted Healthcare <br />
            <span className="text-medical-blue">For Your Family</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Advanced medical care at Sindhura Hospital, Srikakulam. We combine expertise with compassion to provide the best treatment for our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-medical-blue text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
            >
              Book Appointment <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="tel:+910000000000" 
              className="bg-white text-slate-800 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 transition-all"
            >
              <Phone className="w-5 h-5 text-medical-blue" /> Call Now
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i+10}`} 
                  alt="Patient" 
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <p className="font-bold text-slate-900 text-lg">10,000+</p>
              <p className="text-sm text-slate-500">Happy Patients Served</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/seed/hospital-hero/800/1000" 
              alt="Sindhura Hospital" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Info Card */}
          <div className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-2xl shadow-2xl max-w-xs border border-slate-100">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-blue-50 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-medical-blue" />
              </div>
              <p className="font-bold text-slate-800">Quality Certified</p>
            </div>
            <p className="text-sm text-slate-500">Recognized for excellence in healthcare standards and patient safety.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img src="https://picsum.photos/seed/hosp1/400/600" alt="Hospital" className="rounded-2xl shadow-lg w-full h-64 object-cover" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/hosp2/400/400" alt="Hospital" className="rounded-2xl shadow-lg w-full h-48 object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="space-y-4 pt-8">
            <img src="https://picsum.photos/seed/hosp3/400/400" alt="Hospital" className="rounded-2xl shadow-lg w-full h-48 object-cover" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/hosp4/400/600" alt="Hospital" className="rounded-2xl shadow-lg w-full h-64 object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-medical-blue font-bold uppercase tracking-widest text-sm mb-4">About Sindhura Hospital</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">A Legacy of Care and Commitment in Srikakulam</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Sindhura Hospital has been a cornerstone of healthcare in Srikakulam for over a decade. Our mission is to provide high-quality, accessible medical services to every family in our region.
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed">
            With a team of highly experienced doctors and state-of-the-art medical equipment, we specialize in general medicine, maternity care, and emergency response. We believe in treating patients with the same care we would give our own family.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-3">
              <div className="p-1 bg-blue-50 rounded-full mt-1">
                <CheckCircle2 className="w-5 h-5 text-medical-blue" />
              </div>
              <div>
                <p className="font-bold text-slate-800">Expert Doctors</p>
                <p className="text-sm text-slate-500">Board-certified specialists</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-1 bg-blue-50 rounded-full mt-1">
                <CheckCircle2 className="w-5 h-5 text-medical-blue" />
              </div>
              <div>
                <p className="font-bold text-slate-800">Modern Tech</p>
                <p className="text-sm text-slate-500">Advanced diagnostic tools</p>
              </div>
            </div>
          </div>

          <a href="#services" className="text-medical-blue font-bold flex items-center gap-2 hover:gap-4 transition-all">
            Explore Our Services <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-medical-blue font-bold uppercase tracking-widest text-sm mb-4">Our Specializations</p>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive Medical Services</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We offer a wide range of healthcare services tailored to meet the diverse needs of our patients in Srikakulam.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-medical-blue group-hover:text-white transition-colors">
              {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8 transition-colors" })}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {service.description}
            </p>
            <a href="#contact" className="text-medical-blue font-semibold text-sm flex items-center gap-2">
              Learn More <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Doctors = () => {
  return (
    <section id="doctors" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-medical-blue font-bold uppercase tracking-widest text-sm mb-4">Meet Our Team</p>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Experienced Medical Professionals</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Our doctors are dedicated to providing the highest standard of medical care with a patient-first approach.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {DOCTORS.map((doc, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative rounded-3xl overflow-hidden mb-6">
              <img 
                src={doc.image} 
                alt={doc.name} 
                className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-medical-blue transition-all cursor-pointer">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-medical-blue transition-all cursor-pointer">
                    <Facebook className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">{doc.name}</h3>
            <p className="text-medical-blue font-medium">{doc.specialty}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: "Experienced Doctors", desc: "Our team consists of board-certified specialists with years of clinical experience." },
    { title: "Affordable Treatment", desc: "We provide high-quality healthcare at prices that are accessible to everyone." },
    { title: "24/7 Emergency Care", desc: "Our emergency department is always ready to handle critical situations." },
    { title: "Patient-Centered Approach", desc: "We listen to our patients and tailor treatments to their specific needs." }
  ];

  return (
    <section className="section-padding bg-medical-blue text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <p className="text-blue-200 font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Setting New Standards in Patient Care</h2>
          <div className="space-y-8">
            {reasons.map((reason, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20">
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-blue-100 text-sm uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">50+</p>
              <p className="text-blue-100 text-sm uppercase tracking-wider">Medical Staff</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">10k+</p>
              <p className="text-blue-100 text-sm uppercase tracking-wider">Happy Patients</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">24/7</p>
              <p className="text-blue-100 text-sm uppercase tracking-wider">Emergency Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-medical-blue font-bold uppercase tracking-widest text-sm mb-4">Patient Stories</p>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Patients Say</h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-medical-blue font-bold text-xl">
                {t.name[0]}
              </div>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">{t.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-medical-blue font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Book Your Appointment Today</h2>
          
          <div className="space-y-8 mb-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-medical-blue" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Our Location</h3>
                <p className="text-slate-600">Sindhura Hospital, Near Main Road, Srikakulam, Andhra Pradesh - 532001</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-medical-blue" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                <p className="text-slate-600">+91 8942 123456</p>
                <p className="text-slate-600">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-medical-blue" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Working Hours</h3>
                <p className="text-slate-600">Emergency: 24/7</p>
                <p className="text-slate-600">OPD: 9:00 AM - 8:00 PM (Mon-Sat)</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-64">
            {/* Google Map Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60564.88732669483!2d83.85641775!3d18.2969747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c144577324329%3A0x77c225091764648b!2sSrikakulam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1711710000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Service Required</label>
              <select className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue transition-all bg-white">
                <option>General Consultation</option>
                <option>Maternity Care</option>
                <option>Emergency Services</option>
                <option>Diagnostics</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Preferred Date</label>
              <input type="date" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Message (Optional)</label>
              <textarea rows={4} placeholder="Tell us about your concern..." className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue transition-all"></textarea>
            </div>
            <button className="w-full bg-medical-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
              Confirm Appointment
            </button>
          </form>
          
          <div className="mt-10 pt-10 border-t border-slate-200 text-center">
            <p className="text-slate-500 mb-4">Or chat with us directly</p>
            <a 
              href="https://wa.me/910000000000" 
              className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-100"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-medical-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
            <span className="font-bold text-xl tracking-tight text-white">
              Sindhura <span className="text-slate-400">Hospital</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Providing trusted healthcare services in Srikakulam for over 15 years. We are committed to medical excellence and compassionate patient care.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-medical-blue hover:text-white transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-medical-blue hover:text-white transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-medical-blue hover:text-white transition-all">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-medical-blue transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-medical-blue transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-medical-blue transition-colors">Our Services</a></li>
            <li><a href="#doctors" className="hover:text-medical-blue transition-colors">Meet Doctors</a></li>
            <li><a href="#contact" className="hover:text-medical-blue transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Our Services</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-medical-blue transition-colors">General Medicine</a></li>
            <li><a href="#" className="hover:text-medical-blue transition-colors">Maternity & Child Care</a></li>
            <li><a href="#" className="hover:text-medical-blue transition-colors">Emergency Response</a></li>
            <li><a href="#" className="hover:text-medical-blue transition-colors">Diagnostic Lab</a></li>
            <li><a href="#" className="hover:text-medical-blue transition-colors">Surgical Services</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-medical-blue flex-shrink-0" />
              <span>Srikakulam, Andhra Pradesh - 532001</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-medical-blue flex-shrink-0" />
              <span>+91 8942 123456</span>
            </li>
            <li className="flex gap-3">
              <Clock className="w-5 h-5 text-medical-blue flex-shrink-0" />
              <span>24/7 Emergency Support</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Sindhura Hospital. All rights reserved. Designed for excellence in healthcare.</p>
      </div>
    </footer>
  );
};

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        href="https://wa.me/910000000000"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        href="#contact"
        className="bg-medical-blue text-white px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 hover:bg-blue-700 transition-all"
      >
        <Clock className="w-5 h-5" /> Book Now
      </motion.a>
    </div>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
