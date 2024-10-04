interface Link {
  name: string;
  url: string;
}

interface Section {
  title: string;
  links: Link[];
}

interface FooterData {
  footer: {
    sections: Section[];
  };
}

export const footerData: FooterData = {
  footer: {
    sections: [
      {
        title: "Products",
        links: [
          {
            name: "Download App",
            url: "https://yourwebsite.com/download-app"
          },
          {
            name: "TripIt",
            url: "https://yourwebsite.com/tripit"
          },
          {
            name: "TripIt Pro",
            url: "https://yourwebsite.com/tripit-pro"
          },
          {
            name: "Help Center",
            url: "https://yourwebsite.com/help-center"
          }
        ]
      },
      {
        title: "News & Resources",
        links: [
          {
            name: "Blog",
            url: "https://yourwebsite.com/blog"
          },
          {
            name: "Traveler Resource Center",
            url: "https://yourwebsite.com/traveler-resource-center"
          },
          {
            name: "Jobs",
            url: "https://yourwebsite.com/jobs"
          },
          {
            name: "User Agreement",
            url: "https://yourwebsite.com/user-agreement"
          },
          {
            name: "Privacy Statement: Updated 12/21/22",
            url: "https://yourwebsite.com/privacy-statement"
          },
          {
            name: "Security",
            url: "https://yourwebsite.com/security"
          },
          {
            name: "Google Data Policy",
            url: "https://yourwebsite.com/google-data-policy"
          },
          {
            name: "Do Not Share/Sell My Personal Information",
            url: "https://yourwebsite.com/do-not-share-sell-my-personal-information"
          }
        ]
      },
      {
        title: "Partners",
        links: [
          {
            name: "Supported Booking Sites",
            url: "https://yourwebsite.com/supported-booking-sites"
          }
        ]
      }
    ]
  }
};