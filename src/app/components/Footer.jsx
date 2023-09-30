import Container from "./ui/container";
import styles from "./style";

const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Content",
          link: "https://www.hoobank.com/content/",
        },
        {
          name: "How it Works",
          link: "https://www.hoobank.com/how-it-works/",
        },
        {
          name: "Create",
          link: "https://www.hoobank.com/create/",
        },
        {
          name: "Explore",
          link: "https://www.hoobank.com/explore/",
        },
        {
          name: "Terms & Services",
          link: "https://www.hoobank.com/terms-and-services/",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "https://www.hoobank.com/help-center/",
        },
        {
          name: "Partners",
          link: "https://www.hoobank.com/partners/",
        },
        {
          name: "Suggestions",
          link: "https://www.hoobank.com/suggestions/",
        },
        {
          name: "Blog",
          link: "https://www.hoobank.com/blog/",
        },
        {
          name: "Newsletters",
          link: "https://www.hoobank.com/newsletters/",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "https://www.hoobank.com/our-partner/",
        },
        {
          name: "Become a Partner",
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
    {
        title: "Connect with us",
        links: [
          {
            name: "Our Partner",
            link: "https://www.hoobank.com/our-partner/",
          },
          {
            name: "Become a Partner",
            link: "https://www.hoobank.com/become-a-partner/",
          },
        ],
      },
  ];

//   export const socialMedia = [
//     {
//       id: "social-media-1",
//       icon: instagram,
//       link: "https://www.instagram.com/",
//     },
//     {
//       id: "social-media-2",
//       icon: facebook,
//       link: "https://www.facebook.com/",
//     },
//     {
//       id: "social-media-3",
//       icon: twitter,
//       link: "https://www.twitter.com/",
//     },
//     {
//       id: "social-media-4",
//       icon: linkedin,
//       link: "https://www.linkedin.com/",
//     },
//   ];

const Footer = () => (

  <section className={`${styles.flexCenter} ${styles.paddingY} p-4 flex-col bg-[#2C272E] mt-8`}>
  <Container>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <h2 className=" text-green text-2xl font-bold">
        ED REVIEWS
        </h2>
        <p className={`${styles.paragraph} mt-4 max-w-[312px] text-white`}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px] text-white`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-green">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex  items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] text-center justify-center">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
      Design & Developed by <span className="text-green">Saleem Raza</span>
      </p>

      {/* <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div> */}
    </div>
    </Container>
  </section>
);

export default Footer;
