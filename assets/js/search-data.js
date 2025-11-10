// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Highlights of my teaching, mentoring, and academic facilitation activities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-finding-my-place",
        
          title: "Finding My Place",
        
        description: "A little memory from when I first entered university.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/memory/";
          
        },
      },{id: "post-my-first-days-in-singapore",
        
          title: "My First Days in Singapore 🇸🇬",
        
        description: "A quiet memory of arriving, learning, and getting a little braver.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/singapore/";
          
        },
      },{id: "books-funiculi-funicula",
          title: 'Funiculi Funicula',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/funiculi_funicula/";
            },},{id: "books-",
          title: '',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/funiculi_funicula_2/";
            },},{id: "news-worked-as-project-manager-at-pro-english-pt-pro-knowledge-indonesia",
          title: 'Worked as Project Manager at Pro English (PT. PRO Knowledge Indonesia).',
          description: "",
          section: "News",},{id: "news-visiting-universities-amp-research-labs-singapore-amp-malaysia",
          title: 'Visiting Universities &amp;amp; Research Labs – Singapore &amp;amp; Malaysia',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-first-academic-book-published-kesalahan-dalam-menulis-jilid-1-view-book",
          title: 'First academic book published “Kesalahan dalam Menulis — Jilid 1”.  View Book',
          description: "",
          section: "News",},{id: "news-completed-thesis-research-on-ai-for-project-management-information-systems",
          title: 'Completed thesis research on AI for Project Management Information Systems.',
          description: "",
          section: "News",},{id: "news-joined-pt-surya-mas-perkasa-karawang-as-project-control-administrator",
          title: 'Joined PT. Surya Mas Perkasa (Karawang) as Project Control Administrator.',
          description: "",
          section: "News",},{id: "projects-smartech-dcs-ivenstory",
          title: 'SMARTech DCS IVENSTORY',
          description: "Prototype of a web-based inventory management system developed during internship at PT. Riau Andalan Pulp and Paper",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-potensi-alam-riau",
          title: 'Potensi Alam Riau',
          description: "Web design project supporting local economic sustainability and SDGs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-pro-english",
          title: 'Project Pro English',
          description: "English communication and debate program to enhance speaking, listening, and critical thinking skills",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%75%6C%69%61%64%65%77%69%39%33%36@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/tikaaa_aulia03", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/aulia-kartika-dewi", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@auliakartikadwi", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
