import style from "../style/Contact.module.scss";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
export type IContactData = {
  icon: string;
  title: string;
};
const ContactWay = () => {
  const displayContactData = ContactData.map((contactInfo, idx) => (
    <div key={idx} className="flex items-center">
      <p className="icons text-[#151875] cursor-pointer">{contactInfo.icon}</p>
      <p className="text-[#8A8FB9]">{contactInfo.title}</p>
    </div>
  ));
  return (
    <div className={style.contactway}>
      <h1>Contact Way</h1>
      <div className={style.FourGridColumn}>{displayContactData}</div>
    </div>
  );
};

export default ContactWay;

const ContactData = [
  {
    icon: <EnvelopeIcon />,
    title: `imonikheaugbodaga@gmail.com`,
  },
  {
    icon: <PhoneIcon />,
    title: `+234 706 886 1569`,
  },
  {
    icon: <MapPinIcon />,
    title: ` 17 Princess Road,  Greater London`,
  },
  {
    icon: <UserGroupIcon />,
    title: `Support Forum For over 24hr`,
  },
];
