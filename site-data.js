const portfolioData = {
  profile: {
    name: "Dylan Keogh",
    role: "Cybersecurity Graduate | Security Operations | Digital Forensics",
    location: "Co. Dublin / Wicklow, Ireland",
    profileCard: {
      displayName: "Dylan Keogh",
      handle: "kexgh",
      status: "Open to graduate and junior cybersecurity roles",
      avatarInitials: "DK",
      avatarImage: "profile-photo.jpg",
      bannerImage: "profile-banner.gif",
      bannerGradient: "linear-gradient(135deg, #2a2724 0%, #191919 48%, #3a332b 100%)",
      badges: ["Cybersecurity Graduate", "SOC", "Digital Forensics", "Cloud Security"],
      stats: [
        { label: "Degree", value: "BSc 2.1" },
        { label: "Focus", value: "Defensive Security" },
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
      "Recent BSc graduate in Digital Forensics and Cyber Security with practical experience building security-monitoring environments, distributed honeynets, cloud-resilience solutions and secure application designs. Interested in defensive security, threat detection, digital investigation and building practical tools that make security evidence easier to understand.",
    about: [
      "I am a recent Digital Forensics and Cyber Security graduate from Technological University Dublin. My main interests are security operations, network defence, digital forensics, cloud security and application security.",
      "Throughout college, I built practical security environments using tools including Wazuh, Suricata, T-Pot, the Elastic Stack, AWS, Linux and Wireshark. My final-year research focused on reducing OSINT identity misattribution by presenting analysts with structured evidence rather than relying on single matching indicators.",
      "I enjoy breaking complex technical problems into understandable evidence, documenting my work clearly and continuing to develop my skills through practical labs, security research and cybersecurity challenges."
    ],
    links: {
      github: "",
      linkedin: "https://www.linkedin.com/in/dylankeogh/?skipRedirect=true",
      email: "dylan.keogh2@gmail.com",
      cv: ""
    }
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
      visual: "attribution"
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
      visual: "honeynet"
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
      visual: "soc"
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
      visual: "veriscan"
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
      visual: "threat"
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
      visual: "aws"
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
