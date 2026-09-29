window.portfolioData = {
  profile: {
    name: "Dylan Keogh",
    role: "Digital Forensics & Cyber Security Graduate",
    location: "Co. Dublin / Wicklow, Ireland",
    profileCard: {
      displayName: "Dylan Keogh",
      handle: "kexgh",
      status: "Open to opportunities across technology",
      avatarInitials: "DK",
      avatarImage: "profile-photo.jpg",
      bannerImage: "profile-banner.gif",
      bannerGradient: "linear-gradient(135deg, #2a2724 0%, #191919 48%, #3a332b 100%)",
      badges: ["Web applications", "IT support", "Security", "Digital forensics"],
      stats: [
        { label: "Degree", value: "BSc 2.1" },
        { label: "Work", value: "Software + IT" },
        { label: "Location", value: "Dublin / Wicklow" }
      ]
    },
    projectGraph: {
      groups: [
        {
          name: "Digital Forensics & OSINT",
          items: ["KEXIS Attribution Framework", "VeriScan", "Digital Forensics Investigations", "Biometric Security Testing"]
        },
        {
          name: "Cloud Defence",
          items: ["Distributed T-Pot Honeynet", "AWS Disaster Recovery and Business Continuity"]
        },
        {
          name: "SOC & Network Monitoring",
          items: ["Open-Source Security Operations Centre", "Distributed T-Pot Honeynet", "Cisco Multi-Site Network Security"]
        },
        {
          name: "Application Security",
          items: ["Application Security and Threat Modelling"]
        },
        {
          name: "Security Challenges",
          items: ["ZeroDays 2025", "ZeroDays 2026", "CryptoHack"]
        },
        {
          name: "Other Development",
          items: ["Highway of Havoc"]
        }
      ]
    },
    summary:
      "Digital Forensics and Cyber Security graduate with hands-on experience building web applications, supporting business systems, and exploring security, infrastructure and digital investigation. I enjoy making complex technical work practical and clear for the people who use it.",
    about: [
      "I am a Digital Forensics and Cyber Security graduate from Technological University Dublin. My work spans web development, IT support, cloud and network systems, security research and digital investigation.",
      "Alongside academic projects, I work directly with a local business to build and support tools for daily operations. At college, I built practical environments using Wazuh, Suricata, T-Pot, the Elastic Stack, AWS, Linux and Wireshark. My final-year research explored how to reduce mistaken links between online identities by presenting structured evidence for review.",
      "I enjoy getting close to a problem, understanding how people work, and turning technical detail into something useful and understandable. I keep learning through hands-on projects, practical labs and cybersecurity challenges."
    ],
    links: {
      github: "",
      linkedin: "https://www.linkedin.com/in/dylankeogh/?skipRedirect=true",
      email: "dylan.keogh2@gmail.com",
      cv: ""
    }
  },
  clientProject: {
    title: "Business Operations Web Platform",
    client: "DJ Hanley · Container rental business, Ireland",
    dates: "2026 - Present",
    summary:
      "Designed and delivered a live management platform replacing paper and whiteboard records across three yards, centralising day-to-day operations for six staff users.",
    problem:
      "Container availability and customer details were spread across paper and whiteboard records, making it harder to keep three yards in sync.",
    contribution:
      "Worked with business stakeholders to map daily workflows and build authenticated access, customer records, notes, container statuses and yard views for 450+ units.",
    outcome:
      "Deployed and handed over the platform, explained it to users, and continued supporting the system after go-live.",
    testing:
      "Refined the application through testing, stakeholder walkthroughs and user feedback.",
    technologies: ["JavaScript", "Supabase", "Web application development", "User support"],
    facts: [
      { value: "3", label: "yards" },
      { value: "450+", label: "container units" },
      { value: "6", label: "staff users" }
    ]
  },
  experience: {
    title: "Independent Web Application Developer & IT Support",
    dates: "2026 - Present",
    company: "DJ Hanley · Container rental business, Ireland",
    bullets: [
      "Owned client delivery from requirements gathering and implementation through testing, deployment, user handover and post-launch support, acting as the direct technical point of contact for operational issues.",
      "Diagnose issues by gathering context from users, reproducing problems and reviewing application, connectivity and configuration behaviour before explaining fixes in clear, practical terms.",
      "Continue supporting application, connectivity, email and general technology issues after go-live."
    ]
  },
  projects: [
    {
      title: "KEXIS Attribution Framework",
      category: "Final-Year Project | OSINT | Digital Forensics",
      summary:
        "An OSINT attribution-support framework designed to reduce the risk of incorrectly linking online accounts to the same person.",
      problem:
        "Username matches and surface-level similarities can create misleading attribution paths when analysts investigate online identities.",
      contribution:
        "Built a React frontend and FastAPI backend to collect, compare and present account information and identity indicators for analyst review.",
      outcome:
        "Produced a more structured, explainable and defensible approach to reviewing attribution evidence.",
      testing:
        "Focused on structured comparison, evidence presentation, API integration and evaluation of analyst-facing reporting.",
      technologies: ["React", "FastAPI", "Python", "REST APIs", "OSINT", "Git", "Web development"],
      visual: "attribution",
      type: "build"
    },
    {
      title: "Distributed T-Pot Honeynet",
      category: "Network Security | Cloud Security | Threat Monitoring",
      summary:
        "Designed and deployed a distributed T-Pot honeynet with a central Hive collecting data from remote sensors.",
      problem:
        "Attack telemetry from exposed honeypot services needs to be collected, secured and centralised before it can support investigation.",
      contribution:
        "Deployed and hardened Linux servers, configured cloud firewalls, secured sensor communication and troubleshot log forwarding.",
      outcome:
        "Validated that attack activity reached the Elastic Stack and could be reviewed through Kibana.",
      testing:
        "Checked network rules, sensor-to-Hive communication and log pipeline behaviour across the monitoring environment.",
      technologies: ["T-Pot", "Elastic Stack", "Kibana", "Linux", "DigitalOcean", "Cloud networking", "Firewalls", "SSH"],
      visual: "honeynet",
      type: "systems"
    },
    {
      title: "Open-Source Security Operations Centre",
      category: "SOC | Threat Detection | Security Monitoring",
      summary:
        "Built an open-source monitoring environment using Wazuh, Suricata and auditd for endpoint, network and host telemetry.",
      problem:
        "Security investigations rely on evidence from multiple controls, and that evidence needs to be centralised before it can be correlated.",
      contribution:
        "Configured log collection, alert investigation workflows, dashboards and detection mapping across stages of the cyber kill chain.",
      outcome:
        "Developed practical experience with alert triage, log analysis and security-monitoring architecture.",
      testing:
        "Reviewed host events, network alerts and dashboards to confirm useful investigation evidence was collected.",
      technologies: ["Wazuh", "Suricata", "auditd", "Elastic Stack", "Linux", "AWS EC2", "Security monitoring"],
      visual: "soc",
      type: "systems"
    },
    {
      title: "VeriScan",
      category: "Deepfake Detection | Explainable AI | Digital Forensics",
      summary:
        "A third-year group project that combined image classification with Grad-CAM heatmaps to support forensic interpretation.",
      problem:
        "Forensic workflows need interpretable outputs, not only unexplained model predictions.",
      contribution:
        "Worked on a web-based project that used an XceptionNet-based model and visual heatmaps to distinguish authentic and manipulated facial images.",
      outcome:
        "Second place in TU Dublin's 2025 Tech for Good competition. Academic result: B+.",
      testing:
        "Explored real-versus-manipulated image classification and reviewed generated heatmaps for interpretability.",
      technologies: ["Python", "TensorFlow", "Keras", "XceptionNet", "Grad-CAM", "FastAPI", "HTML", "CSS", "JavaScript"],
      note: "Third-year group project, not Dylan's final-year project.",
      visual: "veriscan",
      type: "research"
    },
    {
      title: "Application Security and Threat Modelling",
      category: "Application Security | Secure SDLC | Threat Modelling",
      summary:
        "Completed security design and threat-modelling work for an Airbnb-style booking application.",
      problem:
        "Security requirements are easier to reason about when they are introduced before implementation rather than added afterwards.",
      contribution:
        "Created data-flow diagrams, STRIDE analysis, abuser stories, OWASP ASVS requirements and security acceptance criteria.",
      outcome:
        "Documented practical controls including MFA, role-based access control, CSP, output encoding and payment-webhook signature validation.",
      testing:
        "Reviewed threats, requirements and acceptance criteria against secure design goals.",
      technologies: ["OWASP ASVS", "STRIDE", "Data-flow diagrams", "Secure SDLC", "Application security", "Access control", "Web security"],
      visual: "threat",
      type: "research"
    },
    {
      title: "AWS Disaster Recovery and Business Continuity",
      category: "Cloud Security | Resilience | Business Continuity",
      summary:
        "Designed an AWS-based disaster-recovery and business-continuity environment covering restoration, backups, permissions and recovery planning.",
      problem:
        "Technical recovery controls need to connect with business-continuity planning and restoration procedures.",
      contribution:
        "Considered important services, backup protection, IAM, recovery documentation and cloud-service resilience.",
      outcome:
        "Built a stronger understanding of how cloud security, resilience and continuity planning fit together.",
      testing:
        "Reviewed recovery documentation, service dependencies and control coverage.",
      technologies: ["AWS", "EC2", "S3", "IAM", "Cloud security", "Backup and recovery", "Business continuity"],
      visual: "aws",
      type: "systems"
    }
  ],
  academicWork: [
    {
      title: "Cisco Multi-Site Network Security",
      summary: "Designed and secured a multi-site Packet Tracer environment connecting Dublin, London and Beijing.",
      work: ["Device hardening", "AAA", "SSHv2", "RSA keys", "Packet-filtering ACLs", "OSPF authentication", "Centralised syslog", "Switch port security", "BPDU Guard", "PortFast"],
      technologies: ["Cisco IOS", "Packet Tracer", "ACLs", "OSPF", "AAA", "SSH", "Syslog", "Layer 2 security"]
    },
    {
      title: "Biometric Security Testing",
      summary: "Completed practical investigations into biometric-system reliability and circumvention in controlled academic exercises.",
      work: ["Voice-biometric comparison", "Spectrogram analysis", "Generated voice sample comparison", "Fingerprint-replica testing", "Facial-recognition threshold testing", "Liveness detection", "False acceptance and false rejection analysis"],
      technologies: ["Voice biometrics", "Fingerprint biometrics", "Facial recognition", "VeriLook", "MegaMatcher", "FAR", "FRR", "Liveness detection"]
    },
    {
      title: "Digital Forensics Investigations",
      summary: "Completed practical digital-forensics exercises involving forensic imaging, artefact analysis and reporting.",
      work: ["Forensic imaging", "Disk and file-system examination", "Deleted-file investigation", "Email investigation", "Evidence collection", "Timeline and artefact analysis", "Forensic reporting"],
      technologies: ["Autopsy", "FTK Imager", "MiTeC Mail Viewer", "Wireshark", "Linux forensic tools"]
    },
    {
      title: "ZeroDays 2025",
      summary: "Participated in the ZeroDays 2025 college competition as part of Team United Nations.",
      work: ["Web exploitation", "Cryptography", "Reverse engineering", "Team-based problem solving", "Working under time pressure"],
      technologies: ["CTF practice", "Security problem solving", "Team collaboration"]
    },
    {
      title: "ZeroDays 2026",
      summary: "Participated in ZeroDays 2026, continuing practical team-based cybersecurity challenge experience.",
      work: ["Web exploitation", "Cryptography", "Reverse engineering", "Team-based problem solving", "Working under time pressure"],
      technologies: ["CTF practice", "Security problem solving", "Team collaboration"]
    }
  ],
  otherWork: [
    {
      title: "CryptoHack",
      summary: "Completed Python-based cryptography challenges covering mathematics, RSA, symmetric cryptography, Diffie-Hellman and web cryptography.",
      technologies: ["Python", "Cryptography", "RSA", "Symmetric cryptography", "Diffie-Hellman"]
    },
    {
      title: "Highway of Havoc",
      summary: "A university game-development project involving a 3D endless-driving game where the player avoids obstacles while travelling along a road.",
      technologies: ["Unity", "C#", "ShaderLab", "HLSL", "HTML", "CSS"]
    }
  ],
  skills: [
    {
      group: "Security Operations",
      items: ["Security monitoring", "Log analysis", "Alert triage", "Threat detection", "Incident investigation", "Network-traffic analysis", "Security documentation"]
    },
    {
      group: "Security Tools",
      items: ["Wazuh", "Suricata", "T-Pot", "Elastic Stack", "Kibana", "Wireshark", "Autopsy", "FTK Imager", "auditd"]
    },
    {
      group: "Cloud and Infrastructure",
      items: ["AWS EC2", "AWS S3", "AWS IAM", "DigitalOcean", "Linux", "Kali Linux", "Cloud networking", "Firewalls", "SSH", "Virtualisation"]
    },
    {
      group: "Application and Development",
      items: ["Python", "FastAPI", "React", "Java", "C++", "JavaScript", "HTML", "CSS", "SQL", "REST APIs", "Git", "GitHub"]
    },
    {
      group: "Security Methodologies",
      items: ["STRIDE", "OWASP ASVS", "Secure SDLC", "OSINT", "Digital forensics", "Access control", "Business continuity", "Disaster recovery"]
    }
  ],
  education: [
    {
      institution: "Technological University Dublin, Blanchardstown",
      award: "BSc (Hons) in Computing - Digital Forensics and Cyber Security",
      dates: "2022-2026",
      result: "Second-Class Honours, Grade 1 - 2.1",
      areas: ["Digital forensics", "Network security", "Application security", "Secure programming", "Penetration testing", "Secure communications", "Security analytics", "Cloud security", "Business continuity", "Biometrics", "Computer networking"]
    },
    {
      institution: "Blackrock Further Education Institute",
      award: "QQI Level 5 - Computer Networks and Cyber Security",
      dates: "2021-2022",
      areas: ["Networking", "Cybersecurity fundamentals", "Operating systems", "Virtualisation", "Computer hardware", "Distributed systems"]
    },
    {
      institution: "Blackrock Further Education Institute",
      award: "QQI Level 5 - Computer Science",
      dates: "2018-2019",
      areas: ["Java", "Web development", "Databases", "Mobile technologies", "Mathematics", "Computer systems"]
    }
  ],
  achievements: [
    "Second place - TU Dublin Tech for Good 2025, VeriScan",
    "ZeroDays 2025 college-category participant",
    "ZeroDays 2026 participant",
    "Currently studying toward CompTIA Security+",
    "Practical learning through TryHackMe and independent security labs"
  ]
};
