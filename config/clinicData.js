const clinicData = {

    // Basic Information
    clinicName: " Perfect Smile Orthodontic and Implant Centre",
    tagline: "Where Every Smile Tells a Story",
    subTagline:
        "Advanced dental care with a gentle touch. Trusted by 5,000+ families in Jodhpur.",
    established: "2010",

    // Doctor
    doctor: {
        name: "Dr. Amit Bithu",
        title: "BDS, MDS – Oral & Maxillofacial Surgery",
        experience: "14+ Years Experience",
        bio: "Dr. Amit Bithu is a highly qualified oral surgeon with over 14 years of experience in cosmetic and restorative dentistry. He completed his postgraduate studies from AIIMS New Delhi and has helped thousands of patients reclaim their confidence through exceptional dental care.",
        credentials: [
            "BDS – Rajasthan University",
            "MDS – AIIMS New Delhi",
            "Fellow, Indian Dental Association",
            "Certified Invisalign Provider",
        ],
        image: "/images/doctor.jpg",
    },

    // Contact Information
    phone: "+91-94624 79281",
    phoneDisplay: "+91 94624 79281",
    whatsapp: "94624 79281",
    whatsappMessage: "Hello! I'd like to book an appointment at Perfect Smile Orthodontic and Implant Centre.",
    email: "hello@perfectsmile.in",

    // Location
    address: "100 -C, Central School Scheme Main Rd, Air Force Area",
    city: "Jodhpur",
    state: "Rajasthan",
    pincode: "342011",
    mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.132692998758!2d73.03955440000001!3d26.257356500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c3a63d4944b%3A0x711db1c02de214ae!2sPerfect%20Smile%20dental%20Clinic!5e0!3m2!1sen!2sin!4v1775121613387!5m2!1sen!2sin",
    hours: [
        { day: "Mon – Sat", time: "9:00 AM – 8:00 PM" },
        { day: "Sunday", time: "10:00 AM – 2:00 PM" },
    ],

    // Services Offered
    services: [
        {
            id: "whitening",
            icon: "Sparkles",
            title: "Self Ligating (Friction Free)",
            description:
                "Self ligating braces are the new choice in Orthodontics, No ligatures (orings) to stain or to attract plaque, Shorter duration of treatment, Less discomfort to patient. Opportunity to extend treatment. Fast appointment with less time",
            highlight: "Most Popular",
            image: "https://images.unsplash.com/photo-1670250492416-570b5b7343b1?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: "orthodontics",
            icon: "AlignCenter",
            title: "Metal Braces",
            description:
                "This is a traditional method where the structure is made from the stainless steel and have the metal brackets in between to ensure the correct alignment of the teeth.",
            highlight: null,
            image: "https://images.unsplash.com/photo-1694675236489-d73651370688?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: "implants",
            icon: "CircleDot",
            title: "Ceramic Braces",
            description:
                "Ceramic Braces are made of a strong translucent ceramic material these braces blend with the patient’s tooth colour, so appearance minded patients of all age can smile with confidence during treatment. They are designed to be comfortable to wear with rounded corners and smooth dome-shaped profile. They are less visible on your teeth than metal braces",
            highlight: "Premium",
            image: "https://images.unsplash.com/photo-1694345238872-323e773afc11?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: "rootcanal",
            icon: "Shield",
            title: "Lingual Braces",
            description:
                "This is one of the alternative treatment for those who are trying to get their teeth straightened and don’t want their braces to be visualize. Lingual braces are placed behind the teeth and is custom made for every patients.",
            highlight: null,
            image: "https://images.unsplash.com/photo-1766338390573-ec092d69cdcb?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: "cosmetic",
            icon: "Smile",
            title: "Clear Aligners",
            description:
                "Clear Aligners are a series of invisible, removable orthodontics retainers that fit over your teeth. They are custom made to your teeth to guarantee a perfect fit. In order to get the smile you always wanted, simply wear your aligners every day atleast 21 hours. You only remove them to eat, drink, brush and floss. Steb by step, Clear aligners will correct your teeth. By applying gentle pressure, your teeth are straightened and efficiently moved into the desired position. With Clear Aligners you can carry on life as usual.Veneers, bonding, smile makeovers — crafted to enhance your unique facial aesthetics.",
            highlight: null,
            image: "https://images.unsplash.com/photo-1679136293900-05b227099221?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: "pediatric",
            icon: "Heart",
            title: "Kids' Dentistry",
            description:
                "A gentle, fun environment for children. We make every child's dental visit stress-free and positive.",
            highlight: null,
            image: "https://images.unsplash.com/photo-1512376125713-158d3de52286?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ],

    //   Reviews & Testimonials
    reviews: [
        {
            name: "Reena S Meena",
            location: "Jodhpur",
            rating: 5,
            text: "Very knowledgeable doctors and the best clinic where one can find cost effective treatment...",
            treatment: "Dental Implants",
            avatar: "A",
        },
        {
            name: "Dharmendra Tak",
            location: "Barmer",
            rating: 5,
            text: "Always best dental clinic in Jodhpur and very good job done by doctor no pain filling after treatment of dental",
            treatment: "Root Canal",
            avatar: "S",
        },
        {
            name: "Bhupendra Singh",
            location: "Jodhpur",
            rating: 5,
            text: "Always joyous to visit the clinic as I always receive a kind hearted  welcome, apart from this it is maintained by professionals because of which I saw quick results. I highly recommend Perfect Smile to everyone.",
            treatment: "Cosmetic Dentistry",
            avatar: "R",
        },
        {
            name: "Lakshman Jakhar",
            location: "Pali",
            rating: 5,
            text: "Always joyous to visit the clinic as I always receive a kind hearted  welcome, apart from this it is maintained by professionals because of which I saw quick results. I highly recommend Perfect Smile to everyone.",
            treatment: "Invisalign",
            avatar: "K",
        },
    ],

    //   Before & After
    beforeAfter: [
        {
            label: "Smile Makeover",
            description: "Veneers + whitening for a complete transformation",
            image1: "/images/before1.jpg",
            image2: "/images/after1.jpg",
        },
        {
            label: "Teeth Alignment",
            description: "12-month Invisalign treatment",
            image1: "/images/before2.jpg",
            image2: "/images/after2.jpg",
        },
        {
            label: "Implant Restoration",
            description: "Full arch restoration with implants",
            image1: "/images/before3.jpg",
            image2: "/images/after3.jpg",
        },
    ],

    //   Statistics
    stats: [
        { value: "5,000+", label: "Happy Patients" },
        { value: "14+", label: "Years Experience" },
        { value: "12", label: "Expert Team" },
        { value: "98%", label: "Success Rate" },
    ],

    //   Social Media
    social: {
        instagram: "https://instagram.com/brightsmile.dental",
        facebook: "https://facebook.com/brightsmile.dental",
        youtube: null,
    },

    //   SEO Metadata
    seo: {
        title: "Best Dental Clinic in Jodhpur | Perfect Smile Orthodontic & Implant Centre",
        description:
            "Advanced dental care in Jodhpur. Teeth whitening, implants, Invisalign, root canal & more. Book your appointment today.",
        keywords:
            "dental clinic jodhpur, best dentist jodhpur, teeth whitening jodhpur, dental implants rajasthan",
    },
}

export default clinicData